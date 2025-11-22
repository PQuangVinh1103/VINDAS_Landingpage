import { GoogleGenAI, Type } from "@google/genai";
import { UserProfile, ReportResponse } from "../types";

// Initialize Gemini Client
// Note: In a real production environment, never expose API keys on the client side.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateStrategyReport = async (profile: UserProfile): Promise<ReportResponse> => {
  const modelId = "gemini-2.5-flash";
  
  const prompt = `
    Analyze the following user profile based on their Blood Type, Life Path Number (Numerology), and DISC personality assessment scores.
    
    User Profile:
    - Name: ${profile.fullName}
    - Blood Type: ${profile.bloodType}
    - Life Path Number: ${profile.lifePathNumber}
    - DISC Scores: D=${profile.disc.d}%, I=${profile.disc.i}%, S=${profile.disc.s}%, C=${profile.disc.c}%

    Act as a world-class senior career and investment strategist (STRATECIA). 
    Provide a personalized strategic report in Vietnamese (Tiếng Việt).
    
    The tone should be professional, insightful, and direct.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING, description: "A brief professional summary of their personality type." },
            strengths: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3 key strengths." },
            weaknesses: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3 key areas for improvement." },
            careerAdvice: { type: Type.STRING, description: "Strategic advice for their career path." },
            investmentStrategy: { type: Type.STRING, description: "Strategic advice for investment and wealth management." }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as ReportResponse;
    }
    throw new Error("No data returned from Gemini");

  } catch (error) {
    console.error("Error generating report:", error);
    throw error;
  }
};