import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-navy-900 text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-tr-xl rounded-bl-xl flex items-center justify-center">
             <span className="text-navy-900 font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold tracking-wide">STRATECIA</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-medium">
          <a href="#services" className="hover:text-blue-300 transition-colors">Dịch vụ</a>
          <a href="#about" className="hover:text-blue-300 transition-colors">Về chúng tôi</a>
          <a href="#news" className="hover:text-blue-300 transition-colors">Tin tức</a>
          <a href="#contact" className="hover:text-blue-300 transition-colors">Liên hệ</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-800 px-6 py-4 space-y-4">
           <a href="#services" className="block text-white hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Dịch vụ</a>
           <a href="#about" className="block text-white hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Về chúng tôi</a>
           <a href="#news" className="block text-white hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Tin tức</a>
           <a href="#contact" className="block text-white hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>Liên hệ</a>
        </div>
      )}
    </header>
  );
};

export default Header;