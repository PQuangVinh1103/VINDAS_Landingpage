import React from 'react';
import { Facebook, Globe, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        
        <div>
            <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-tr-xl rounded-bl-xl flex items-center justify-center">
                    <span className="text-navy-900 font-bold text-xl">S</span>
                </div>
                <span className="text-xl font-bold tracking-wide text-white">STRATECIA</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
                Chuyên gia tư vấn chiến lược số 1 hiện nay. Giúp bạn tối ưu hóa tiềm năng và đạt được tự do tài chính bền vững.
            </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contact me:</h4>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                        <Phone size={16} /> 08122 732 865
                    </li>
                    <li className="flex items-center gap-2">
                        <Mail size={16} /> contact@stratecia.com
                    </li>
                    <li className="flex items-center gap-2">
                        <Globe size={16} /> www.stratecia.com
                    </li>
                </ul>
            </div>
            <div>
                 <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Social Media:</h4>
                 <ul className="space-y-2">
                    <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                        <Facebook size={16} /> Facebook
                    </li>
                    <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                         <span>Z</span> Zalo
                    </li>
                 </ul>
            </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        © 2024 Stratecia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;