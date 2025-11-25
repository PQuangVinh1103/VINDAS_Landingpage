import React from 'react';
import { FinancialGeneticsSection } from './components/FinancialGeneticsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 
        Note: In a real integration, the "BẠN ĐANG GẶP KHÓ KHĂN GÌ?" section would be above this.
        I am rendering the requested section directly here.
      */}
      <FinancialGeneticsSection />
    </div>
  );
}