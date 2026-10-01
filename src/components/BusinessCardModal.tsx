import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Smartphone, Mail, MapPin, Copy, Check, RotateCcw, ShieldCheck, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import usedMotorsStockImg from '../assets/images/used_motors_stock_1789969016656.jpg';

interface BusinessCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BusinessCardModal: React.FC<BusinessCardModalProps> = ({ isOpen, onClose }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-700"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-200">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">효원전기 공식 디지털 명함</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsFlipped(!isFlipped)}
                className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {isFlipped ? '명함 앞면' : '사업자 정보(뒷면)'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card Container */}
          <div className="my-4 perspective-1000">
            {!isFlipped ? (
              /* FRONT: Authentic Physical Business Card replica */
              <div className="w-full bg-white text-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-300 select-none">
                {/* Upper White Card Area */}
                <div className="p-5 pb-4">
                  {/* Top Company Title with Logo */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Stylized authentic Red Circle Lightning Logo */}
                      <div className="w-11 h-11 rounded-full border-2 border-red-600 flex items-center justify-center p-0.5 bg-red-50/30 shadow-inner shrink-0">
                        <svg viewBox="0 0 24 24" className="w-7 h-7 text-red-600 fill-red-600" aria-label="효원전기 심볼마크">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-2xl font-black tracking-tight text-slate-900 leading-none">
                          효 원 전 기
                        </h2>
                        <span className="text-[11px] font-semibold text-slate-500 tracking-wider">
                          HYOWON ELECTRIC
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500">대 표</span>
                      <p className="text-base font-bold text-slate-800">최 영 관</p>
                    </div>
                  </div>

                  {/* Representative Hand-written style Email & Contacts */}
                  <div className="flex items-center gap-3 my-2 bg-slate-50 p-2 rounded-lg border border-slate-200/80">
                    <img
                      src={usedMotorsStockImg}
                      alt="효성모타"
                      className="w-16 h-14 object-cover rounded border border-slate-200 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-xs space-y-1 w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 font-medium">E-mail</span>
                        <span className="font-bold text-blue-700 tracking-tight">{COMPANY_INFO.email}</span>
                      </div>
                      <div className="text-[11px] text-slate-600 truncate">
                        {COMPANY_INFO.address}
                      </div>
                    </div>
                  </div>

                  {/* Phone & Contacts Table */}
                  <div className="text-xs text-slate-700 space-y-1 pt-1 font-mono">
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-500">TEL :</span>
                      <span className="font-bold text-slate-900">{COMPANY_INFO.tel}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-500">FAX :</span>
                      <span className="font-medium text-slate-700">{COMPANY_INFO.fax}</span>
                    </div>
                    <div className="flex justify-between items-center pt-0.5">
                      <span className="text-slate-500">H.P :</span>
                      <span className="font-extrabold text-red-600 text-sm">{COMPANY_INFO.mobile}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Navy Blue Banner - Matching the Business Card */}
                <div className="bg-[#1e3a8a] text-white py-2.5 px-4 text-center">
                  <p className="text-xs sm:text-sm font-bold tracking-wide">
                    효성모타, 감속기, V·S모타, D·C모타, 판매, 수리
                  </p>
                </div>
              </div>
            ) : (
              /* BACK: Business Registration Certificate Details */
              <div className="w-full bg-slate-50 text-slate-800 rounded-xl p-5 shadow-xl border border-slate-300 text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-300 pb-2">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold text-sm text-slate-900">사업자등록 정보 (1996년 설립)</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold text-[10px]">
                    일반과세자
                  </span>
                </div>

                <div className="space-y-1.5 font-sans">
                  <div className="flex justify-between">
                    <span className="text-slate-500">상호 (업체명)</span>
                    <span className="font-bold text-slate-900">효원전기</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">등록번호</span>
                    <span className="font-mono font-bold text-slate-900">{COMPANY_INFO.registrationNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">대표자명</span>
                    <span className="font-bold text-slate-900">{COMPANY_INFO.representative}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">개업 연월일</span>
                    <span className="font-semibold text-slate-800">{COMPANY_INFO.establishedDate} (30년 경력)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">업태 / 종목</span>
                    <span className="font-semibold text-slate-800">제조업 / 전동기(모터), 전기회로개폐</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <div className="text-slate-500 mb-1">사업장 소재지</div>
                    <div className="font-medium text-slate-800 bg-white p-2 rounded border border-slate-200">
                      {COMPANY_INFO.address}
                    </div>
                  </div>
                  <div className="pt-1">
                    <div className="text-slate-500 mb-1">결제 및 입금계좌 (세금계산서 발행)</div>
                    <div className="flex items-center justify-between bg-blue-50/80 p-2 rounded border border-blue-200 text-blue-900">
                      <span className="font-mono font-bold">{COMPANY_INFO.bankName} {COMPANY_INFO.bankAccount}</span>
                      <span className="text-[11px] text-blue-700">최영관</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={`tel:${COMPANY_INFO.mobile}`}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-md active:scale-95"
            >
              <Smartphone className="w-4 h-4" />
              대표 직통 통화
            </a>
            <a
              href={`tel:${COMPANY_INFO.tel}`}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold text-sm transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
              공장 유선 전화
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-2">
            <button
              type="button"
              onClick={() => copyToClipboard(COMPANY_INFO.mobile, 'mobile')}
              className="flex items-center justify-center gap-1 py-2 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
            >
              {copiedItem === 'mobile' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedItem === 'mobile' ? '번호 복사됨' : '핸드폰 복사'}
            </button>
            <button
              type="button"
              onClick={() => copyToClipboard(COMPANY_INFO.bankAccount, 'bank')}
              className="flex items-center justify-center gap-1 py-2 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
            >
              {copiedItem === 'bank' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedItem === 'bank' ? '계좌 복사됨' : '계좌 복사'}
            </button>
            <button
              type="button"
              onClick={() => copyToClipboard(COMPANY_INFO.address, 'addr')}
              className="flex items-center justify-center gap-1 py-2 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
            >
              {copiedItem === 'addr' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <MapPin className="w-3.5 h-3.5" />}
              {copiedItem === 'addr' ? '주소 복사됨' : '주소 복사'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
