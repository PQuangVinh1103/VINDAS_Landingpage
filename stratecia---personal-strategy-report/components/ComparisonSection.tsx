import React from 'react';
import { TrendingDown, HelpCircle, BrainCircuit, TrendingUp, Wallet, Smile } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Before Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4 uppercase">Bạn đang gặp khó khăn gì?</h2>
            <p className="text-gray-500 font-semibold">(Before)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                <TrendingDown size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-3">Kinh doanh không hiệu quả</h3>
              <p className="text-gray-600 text-sm">Doanh thu trì trệ, thiếu chiến lược phát triển rõ ràng.</p>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                <Wallet size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-3">Đầu tư thua lỗ</h3>
              <p className="text-gray-600 text-sm">Thiếu định hướng, mất tiền vào các kênh rủi ro.</p>
            </div>

            {/* Item 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                <BrainCircuit size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-3">Căng thẳng, mất cân bằng</h3>
              <p className="text-gray-600 text-sm">Áp lực công việc ảnh hưởng đến cuộc sống cá nhân.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-10"></div>

        {/* After Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4 uppercase">Cuộc sống của bạn sẽ thay đổi như thế nào?</h2>
            <p className="text-blue-600 font-semibold">(After)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-b-4 border-blue-500 text-center transform hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <TrendingUp size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-3">Tăng trưởng đột phá</h3>
              <p className="text-gray-600 text-sm">Mở rộng quy mô kinh doanh, tối ưu hóa lợi nhuận.</p>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-b-4 border-blue-500 text-center transform hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Wallet size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-3">Đầu tư thông minh</h3>
              <p className="text-gray-600 text-sm">Gia tăng tài sản bền vững, tự do tài chính.</p>
            </div>

            {/* Item 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md border-b-4 border-blue-500 text-center transform hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Smile size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-3">Làm chủ thời gian</h3>
              <p className="text-gray-600 text-sm">Tận hưởng cuộc sống viên mãn, cân bằng hạnh phúc.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;