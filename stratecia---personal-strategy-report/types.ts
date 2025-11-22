export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  bloodType: string;
  lifePathNumber: string; // "Chỉ số đường đời"
  disc: {
    d: number;
    i: number;
    s: number;
    c: number;
  }
}

export interface ReportResponse {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  careerAdvice: string;
  investmentStrategy: string;
}