import React from 'react';
import { FileText, Award, Briefcase, TrendingUp, Users } from 'lucide-react';

export const SampleReportVisual: React.FC = () => {
  return (
    <div className="relative transform hover:scale-[1.01] transition-transform duration-500">
      {/* Main Card Container simulating a printed report */}
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative z-10">
        
        {/* Header Bar of the Report */}
        <div className="bg-slate-900 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <FileText className="text-white w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">BÁO CÁO CHIẾN LƯỢC MẪU</h4>
              <p className="text-blue-200 text-xs uppercase tracking-wider">Investment & Strategy Profile</p>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">
              ĐÃ PHÂN TÍCH
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          
          {/* Section 1: Input Attributes (The "DNA") */}
          <div className="space-y-3">
            <h5 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">
              Dữ Liệu Đầu Vào (DNA)
            </h5>
            <div className="grid grid-cols-3 gap-3">
              <AttributeCard label="Nhóm Máu" value="O" color="bg-red-50 text-red-700 border-red-100" />
              <AttributeCard label="Đường Đời" value="Số 8" color="bg-purple-50 text-purple-700 border-purple-100" />
              <AttributeCard label="DISC" value="D-C Cao" color="bg-blue-50 text-blue-700 border-blue-100" />
            </div>
          </div>

          {/* Section 2: Strategy Outputs */}
          <div className="space-y-4">
            <h5 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">
              Khuyến Nghị Chiến Lược
            </h5>
            
            {/* Strategy Items */}
            <StrategyItem 
              icon={<Briefcase className="w-5 h-5 text-indigo-600" />}
              title="Sự Nghiệp & Vị Trí"
              content="Phù hợp vai trò Quản lý cấp cao, Điều hành doanh nghiệp hoặc Khởi nghiệp. Môi trường cần tính cạnh tranh cao và mục tiêu rõ ràng."
            />
            
            <StrategyItem 
              icon={<TrendingUp className="w-5 h-5 text-emerald-600" />}
              title="Khẩu Vị Đầu Tư"
              content="Ưa thích tài sản tăng trưởng (Cổ phiếu, BĐS). Chiến lược phù hợp: Tập trung vào dòng tiền trước, lãi vốn sau để giảm áp lực rủi ro."
            />
            
            <StrategyItem 
              icon={<Users className="w-5 h-5 text-amber-600" />}
              title="Cộng Sự Bổ Khuyết"
              content="Cần tìm người nhóm S (Kiên nhẫn, hỗ trợ) và I (Truyền cảm hứng) để cân bằng tính kỷ luật và mục tiêu của bản thân."
            />
          </div>

          {/* Footer of Report */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-slate-400 text-xs">
            <span>Mã hồ sơ: #TS-2024-8892</span>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-1 h-1 bg-slate-300 rounded-full"></div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements behind the card to give it depth */}
      <div className="absolute -right-4 -bottom-4 w-full h-full bg-slate-200 rounded-xl -z-10"></div>
      
      {/* Floating Badge */}
      <div className="absolute -top-6 -right-6 bg-yellow-400 text-slate-900 font-bold p-4 rounded-full shadow-lg transform rotate-12 flex flex-col items-center justify-center w-24 h-24 border-4 border-white">
        <Award className="w-8 h-8 mb-1" />
        <span className="text-[10px] leading-tight text-center">PERSONAL REPORT</span>
      </div>
    </div>
  );
};

// Helper components for the visual
const AttributeCard = ({ label, value, color }: { label: string, value: string, color: string }) => (
  <div className={`flex flex-col items-center justify-center p-3 rounded-lg border ${color}`}>
    <span className="text-[10px] opacity-70 uppercase font-semibold mb-1">{label}</span>
    <span className="text-lg font-bold">{value}</span>
  </div>
);

const StrategyItem = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) => (
  <div className="flex gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors">
    <div className="flex-shrink-0 mt-1">
      <div className="w-10 h-10 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div>
      <h6 className="font-bold text-slate-800 text-sm mb-1">{title}</h6>
      <p className="text-sm text-slate-600 leading-relaxed text-justify">
        {content}
      </p>
    </div>
  </div>
);
