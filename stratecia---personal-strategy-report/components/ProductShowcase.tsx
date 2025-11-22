import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <div className="relative flex justify-center">
          <div className="relative w-3/4 md:w-full max-w-md transform -rotate-6 hover:rotate-0 transition-transform duration-500">
             {/* Mockup of a report */}
             <div className="bg-white w-full aspect-[1/1.4] shadow-2xl border border-gray-200 flex flex-col p-8">
                <div className="w-full h-4 bg-navy-900 mb-8"></div>
                <div className="w-1/2 h-6 bg-gray-300 mb-4"></div>
                <div className="w-3/4 h-4 bg-gray-200 mb-2"></div>
                <div className="w-full h-4 bg-gray-200 mb-2"></div>
                <div className="w-5/6 h-4 bg-gray-200 mb-8"></div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="h-20 bg-blue-50 rounded"></div>
                  <div className="h-20 bg-blue-50 rounded"></div>
                </div>

                <div className="mt-auto border-t pt-4 flex justify-between items-center">
                    <div className="text-xs text-gray-400">STRATECIA REPORT</div>
                    <div className="w-8 h-8 bg-navy-900 rounded-full"></div>
                </div>
             </div>
             {/* Back page effect */}
             <div className="absolute top-2 left-2 w-full h-full bg-gray-100 -z-10 border border-gray-200"></div>
          </div>
        </div>

        {/* Content Side */}
        <div>
          <h2 className="text-3xl font-bold text-navy-900 mb-6 uppercase leading-snug">
            GIẢI PHÁP CỦA CHÚNG TÔI: <br />
            <span className="text-blue-600">BÁO CÁO CHIẾN LƯỢC CÁ NHÂN CHUYÊN SÂU</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Báo cáo chiến lược cá nhân chuyên sâu là tấm bản đồ chỉ đường giúp bạn thấu hiểu bản thân, định hướng sự nghiệp và quản trị tài chính bền vững.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">Phân tích tính cách, điểm mạnh điểm yếu qua DISC và Thần số học.</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">Xây dựng lộ trình phát triển sự nghiệp phù hợp với năng lực cốt lõi.</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">Tư vấn danh mục đầu tư tài chính an toàn, hiệu quả dài hạn.</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">Giải pháp cân bằng cuộc sống và công việc (Work-Life Balance).</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;