import React from 'react';
import { Phone, CreditCard, Monitor, Smartphone, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenBusinessCard: () => void;
  isFramedView: boolean;
  onToggleFrameView: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBusinessCard,
  isFramedView,
  onToggleFrameView,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* Top micro bar for emergency / direct call */}
      <div className="bg-[#1e3a8a] text-white px-3 py-1 text-[11px] font-medium flex items-center justify-between">
        <div className="flex items-center gap-1.5 truncate">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-amber-300">신도림 공장 상시 가동</span>
          <span className="text-slate-200 hidden sm:inline">| 중고모타 즉시 출고 & 긴급 모터 권선 수리</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.mobile}`}
            className="hover:underline font-mono font-bold text-amber-300 flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            {COMPANY_INFO.mobile}
          </a>
        </div>
      </div>

      {/* Main Brand Bar */}
      <div className="px-3.5 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* Authentic Red Circle Lightning Emblem */}
          <div className="w-9 h-9 rounded-full border-2 border-red-600 flex items-center justify-center bg-red-50 shadow-xs shrink-0">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-600 fill-red-600" aria-label="효원전기 심볼">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl font-black tracking-tight text-slate-900 leading-none">
                효원전기
              </h1>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">
                30년 장인
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium tracking-tight mt-0.5">
              효성모타 · 감속기 · V·S · D·C 모타 수리 및 판매
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onOpenBusinessCard}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-300 transition-colors"
            title="대표 명함 확인"
          >
            <CreditCard className="w-3.5 h-3.5 text-blue-700" />
            <span className="hidden xs:inline">전자명함</span>
          </button>

          <a
            href={`tel:${COMPANY_INFO.mobile}`}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>전화상담</span>
          </a>

          {/* Desktop Frame Switcher (only visible on wide screens) */}
          <button
            type="button"
            onClick={onToggleFrameView}
            className="hidden md:flex items-center p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            title={isFramedView ? "와이드 화면으로 전환" : "모바일 프레임으로 전환"}
          >
            {isFramedView ? <Monitor className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
