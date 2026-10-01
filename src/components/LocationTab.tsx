import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  Building2,
  Truck,
  Clock,
  Copy,
  Check,
  Navigation,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const LocationTab: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyText = (text: string, type: 'acc' | 'addr') => {
    navigator.clipboard.writeText(text);
    if (type === 'acc') {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    } else {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  return (
    <div className="space-y-4 pb-24">
      {/* Location Card */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-blue-900 font-bold text-xs">
            <MapPin className="w-4 h-4 text-red-600" />
            <span>신도림 공장 및 전시장 위치</span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
            호이스트 상하차 완비
          </span>
        </div>

        <h3 className="text-base font-black text-slate-900">
          {COMPANY_INFO.address}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          {COMPANY_INFO.detailedAddress}
        </p>

        {/* Map Illustration / Visual Box */}
        <div className="relative w-full h-44 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex flex-col items-center justify-center p-4 text-center">
          <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-2 shadow-xs">
            <Building2 className="w-6 h-6" />
          </div>
          <div className="font-bold text-sm text-slate-900">효원전기 신도림 본사 공장</div>
          <p className="text-[11px] text-slate-500 mt-0.5">
            지하철 1·2호선 신도림역 & 2호선 도림천역 인근
          </p>

          <div className="flex gap-2 mt-3 w-full max-w-xs">
            <a
              href={`https://map.naver.com/v5/search/${encodeURIComponent(COMPANY_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-1.5 rounded-lg bg-[#03C75A] text-white text-xs font-bold flex items-center justify-center gap-1 hover:brightness-105 shadow-2xs"
            >
              <ExternalLink className="w-3 h-3" />
              네이버지도
            </a>
            <a
              href={`https://map.kakao.com/link/search/${encodeURIComponent(COMPANY_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-1.5 rounded-lg bg-[#FEE500] text-slate-900 text-xs font-bold flex items-center justify-center gap-1 hover:brightness-95 shadow-2xs"
            >
              <ExternalLink className="w-3 h-3" />
              카카오맵
            </a>
          </div>
        </div>

        {/* Copy Address Button */}
        <button
          type="button"
          onClick={() => copyText(COMPANY_INFO.address, 'addr')}
          className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-300 transition-colors"
        >
          {copiedAddress ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          {copiedAddress ? '주소가 클립보드에 복사되었습니다!' : '도로명 주소 복사하기 (내비게이션용)'}
        </button>
      </div>

      {/* Logistics & Equipment Access */}
      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs space-y-2.5">
        <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
          <Truck className="w-4 h-4 text-blue-700" />
          화물차량 진입 및 상하차 안내
        </h4>
        <div className="space-y-1.5 text-slate-700">
          <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
            <div>
              <strong className="text-slate-900">1톤 ~ 5톤 화물 트럭 현장 직진입:</strong> 공장 정문 앞 도로 폭이 넓어 대형 화물 차량이 바로 진입 가능합니다.
            </div>
          </div>
          <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
            <div>
              <strong className="text-slate-900">전동 호이스트 크레인 완비:</strong> 중량물 대형 모터(100HP~200HP) 및 대형 감속기를 안전하고 신속하게 적재·하차합니다.
            </div>
          </div>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200 text-xs space-y-2">
        <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-blue-700" />
          영업 및 긴급 수리 대응 시간
        </h4>
        <div className="grid grid-cols-2 gap-2 text-slate-700">
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-[11px]">평일 정상 가동</span>
            <span className="font-bold text-slate-900">08:00 ~ 19:00</span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-[11px]">토요일</span>
            <span className="font-bold text-slate-900">08:00 ~ 15:00</span>
          </div>
        </div>
        <div className="p-2.5 rounded-xl bg-red-50 text-red-800 border border-red-200 text-[11px]">
          🚨 <strong>일요일/야간 비상 수리:</strong> 공장 라인 비상 정지 시 휴대전화(<a href={`tel:${COMPANY_INFO.mobile}`} className="font-bold underline">{COMPANY_INFO.mobile}</a>)로 연락주시면 즉시 상담 가능합니다.
        </div>
      </div>

      {/* Business Registration Details */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200 text-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <h4 className="font-bold text-slate-900">사업자 정보 및 세금계산서</h4>
          </div>
          <span className="text-[10px] text-slate-500">1996년 04월 01일 개업</span>
        </div>

        <div className="space-y-1.5 text-slate-600 font-sans">
          <div className="flex justify-between">
            <span className="text-slate-400">상호</span>
            <span className="font-bold text-slate-900">{COMPANY_INFO.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">등록번호</span>
            <span className="font-mono font-bold text-slate-900">{COMPANY_INFO.registrationNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">대표자</span>
            <span className="font-bold text-slate-900">{COMPANY_INFO.representative}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">대표 전화</span>
            <a href={`tel:${COMPANY_INFO.tel}`} className="font-mono font-bold text-blue-800">{COMPANY_INFO.tel}</a>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">팩스 번호</span>
            <span className="font-mono">{COMPANY_INFO.fax}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">전자세금계산서 이메일</span>
            <span className="font-mono font-bold text-blue-700">{COMPANY_INFO.email}</span>
          </div>
        </div>

        {/* Bank Account */}
        <div className="pt-2 border-t border-slate-200">
          <span className="text-slate-500 block text-[11px] mb-1">
            수리대금 및 물품대금 입금계좌
          </span>
          <div className="flex items-center justify-between bg-blue-50/80 p-2.5 rounded-xl border border-blue-200 text-blue-950">
            <div>
              <span className="font-bold">{COMPANY_INFO.bankName}</span>{' '}
              <span className="font-mono font-bold">{COMPANY_INFO.bankAccount}</span>
              <span className="text-xs text-blue-700 block font-sans">예금주: {COMPANY_INFO.bankHolder}</span>
            </div>
            <button
              type="button"
              onClick={() => copyText(`${COMPANY_INFO.bankName} ${COMPANY_INFO.bankAccount} ${COMPANY_INFO.bankHolder}`, 'acc')}
              className="p-2 rounded-lg bg-white border border-blue-200 text-blue-800 hover:bg-blue-100 transition-colors shrink-0"
              title="계좌번호 복사"
            >
              {copiedAccount ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
