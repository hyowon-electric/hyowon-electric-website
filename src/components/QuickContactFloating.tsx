import React from 'react';
import { Phone, MessageSquare, CreditCard } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuickContactFloatingProps {
  onOpenBusinessCard: () => void;
}

export const QuickContactFloating: React.FC<QuickContactFloatingProps> = ({
  onOpenBusinessCard,
}) => {
  return (
    <div className="fixed bottom-16 left-0 right-0 z-30 px-3 pointer-events-none max-w-md mx-auto md:max-w-none">
      <div className="flex items-center justify-between gap-2 bg-slate-900/90 backdrop-blur-md text-white p-2 rounded-2xl shadow-xl border border-slate-700 pointer-events-auto max-w-md mx-auto">
        {/* Left: Quick label */}
        <div className="pl-2 hidden xs:block">
          <span className="text-[10px] text-amber-300 font-bold block leading-none">신도림 직영</span>
          <span className="text-xs font-black tracking-tight leading-none text-white">모타 수리·구매</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-1.5 w-full xs:w-auto justify-end">
          <button
            type="button"
            onClick={onOpenBusinessCard}
            className="flex items-center gap-1 py-1.5 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
          >
            <CreditCard className="w-3.5 h-3.5 text-amber-400" />
            <span>명함</span>
          </button>

          <a
            href={`sms:${COMPANY_INFO.mobile}?body=${encodeURIComponent('[효원전기] 중고모타 수리/구매 문의드립니다.')}`}
            className="flex items-center gap-1 py-1.5 px-2.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>문자</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.mobile}`}
            className="flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-md transition-all active:scale-95 animate-pulse"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>전화상담</span>
          </a>
        </div>
      </div>
    </div>
  );
};
