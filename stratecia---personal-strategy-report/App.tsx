import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ComparisonSection from './components/ComparisonSection';
import ProductShowcase from './components/ProductShowcase';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white scroll-smooth">
      <Header />
      <main>
        <Hero />
        <div id="services">
           <ComparisonSection />
        </div>
        <div id="about">
           <ProductShowcase />
        </div>
        <div id="contact">
           <LeadForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;