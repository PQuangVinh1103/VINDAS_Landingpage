import React from 'react';
import { Target, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { SampleReportVisual } from './SampleReportVisual';

export const FinancialGeneticsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight mb-4">
            Khám Phá <span className="text-blue-800">Mã Gen Tài Chính</span> Của Bạn
          </h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            "Hiểu bản thân hơn giúp bạn chọn đúng phương pháp đầu tư, tối ưu hóa lợi nhuận và kiến tạo sự thịnh vượng bền vững."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Benefits */}
          <div className="space-y-8">
            <BenefitItem 
              icon={<Target className="w-8 h-8 text-white" />}
              title="Định Vị Bản Thân Chính Xác"
              description="Giải mã điểm mạnh, điểm yếu và khẩu vị rủi ro bẩm sinh. Bạn sẽ biết mình là mẫu nhà đầu tư tấn công hay phòng thủ để xây dựng chiến lược phù hợp nhất."
            />
            
            <BenefitItem 
              icon={<TrendingUp className="w-8 h-8 text-white" />}
              title="Tối Ưu Hóa Danh Mục Đầu Tư"
              description="Lựa chọn loại hình tài sản (BĐS, Chứng khoán, Vàng...) khớp với tính cách và chu kỳ dòng tiền cá nhân. Loại bỏ cảm xúc FOMO và đầu tư theo đám đông."
            />

            <BenefitItem 
              icon={<Users className="w-8 h-8 text-white" />}
              title="Tìm Kiếm Cộng Sự & Môi Trường Phù Hợp"
              description="Xác định những mảnh ghép nhân sự còn thiếu để bổ trợ cho bạn. Biết cách chọn đối tác kinh doanh để cộng hưởng giá trị và giảm thiểu xung đột."
            />

            <div className="pt-6">
               <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl flex items-center gap-2">
                  ĐĂNG KÝ TƯ VẤN NGAY
                  <CheckCircle2 className="w-5 h-5" />
               </button>
            </div>
          </div>

          {/* Right Column: Visual Report Illustration */}
          <div className="relative">
            {/* Decorative blob background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
            
            <SampleReportVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-5 group">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};
