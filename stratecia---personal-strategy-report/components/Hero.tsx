import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-navy-900 min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="City Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            THẤU HIỂU BẢN THÂN <br />
            <span className="text-blue-300">ĐỂ ĐỘT PHÁ</span> TRONG CÔNG VIỆC <br />
            & ĐẦU TƯ KINH DOANH
          </h1>
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Chuyên gia tư vấn chiến lược cá nhân hàng đầu giúp bạn tối ưu hóa tiềm năng và đạt được tự do tài chính.
          </p>
          <div className="pt-4">
             <a href="#lead-form" className="bg-white text-navy-900 font-bold py-3 px-8 rounded shadow-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1 uppercase tracking-wide">
               Nhận Tư Vấn Ngay
             </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative hidden md:block h-[600px]">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
            alt="Professional Consultant" 
            className="absolute bottom-0 right-0 h-full object-contain drop-shadow-2xl z-10 grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
          />
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-20 h-20 border-4 border-blue-400/30 rounded-full blur-sm"></div>
          <div className="absolute bottom-40 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;