import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Sparkles,
  Layers,
  Flame,
  Gauge,
  Activity,
  Award,
  ChevronRight,
  Zap,
  Clock,
  ArrowRight
} from 'lucide-react';
import { REPAIR_PROCESS_STEPS, COMPANY_INFO } from '../data/companyData';
import { TabType } from './BottomNav';

interface RepairProcessTabProps {
  onNavigateTab: (tab: TabType) => void;
}

export const RepairProcessTab: React.FC<RepairProcessTabProps> = ({ onNavigateTab }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = REPAIR_PROCESS_STEPS[activeStepIndex];

  const comparisonRows = [
    {
      item: '사용 동선 (Copper Wire)',
      normal: '일반 F종(155℃) 또는 혼합선',
      hyowon: 'H종(180℃ 내열) 최고급 순동 마그넷 와이어 100%',
      highlight: true,
    },
    {
      item: '슬롯 절연지',
      normal: '일반 프레스판 종이',
      hyowon: '미국 듀폰 Nomex® 410 고인장 내열 절연지',
      highlight: false,
    },
    {
      item: '바니시 함침 및 건조',
      normal: '상온 자연 건조 또는 붓칠',
      hyowon: '진공 침적 함침 + 140℃ 항온 전기로 열처리',
      highlight: true,
    },
    {
      item: '베어링 교체 기준',
      normal: '유격 있는 것만 부분 교체 / 저가형',
      hyowon: 'SKF / NSK 정품 C3 고속 회전용 전수 신품 교체',
      highlight: true,
    },
    {
      item: '회전자 밸런싱',
      normal: '생략 또는 육안 중심 맞춤',
      hyowon: '컴퓨터 제어 다이내믹 밸런싱 머신 정밀 교정',
      highlight: false,
    },
    {
      item: '출고 전 검사',
      normal: '단순 전원 회전 확인',
      hyowon: '1,000V 메거 절연검사 + 30분 3상 전류 전수 시운전',
      highlight: true,
    },
  ];

  return (
    <div className="space-y-4 pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-[#1e3a8a] to-slate-900 text-white rounded-2xl p-5 shadow-lg border border-slate-700">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-extrabold tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> 독보적 기술력
          </span>
          <span className="text-xs text-blue-200 font-medium">1996년 설립 30년 숙련 장인 직영</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-black leading-tight text-white">
          신품 모터 출력을 되살리는 <br />
          <span className="text-amber-300">효원전기 5단계 정밀 리빌딩 공정</span>
        </h2>

        <p className="text-xs text-slate-200 mt-2 leading-relaxed">
          국내 공장, 플랜트, 건설 장비의 핵심 동력인 산업용 모터를 타협 없는 순정 부품과 과학적 진단 장비로 100% 재생 복원합니다.
        </p>
      </div>

      {/* Step Navigation Pill Carousel */}
      <div className="bg-white rounded-2xl p-3 shadow-xs border border-slate-200">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-bold text-slate-700">수리 단계 선택</span>
          <span className="text-xs font-mono font-bold text-blue-700">
            {activeStep.step} / {REPAIR_PROCESS_STEPS.length} 단계
          </span>
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          {REPAIR_PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`py-2 px-1 rounded-xl text-center transition-all ${
                  isActive
                    ? 'bg-[#1e3a8a] text-white shadow-md font-bold scale-[1.02]'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                <span className="block text-[11px] font-bold">
                  {step.step}단계
                </span>
                <span className="block text-[9px] truncate mt-0.5 opacity-90">
                  {step.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Detailed Card */}
      <motion.div
        key={activeStep.step}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 space-y-4"
      >
        {/* Step Image */}
        <div className="relative w-full h-56 sm:h-64 bg-slate-900">
          <img
            src={activeStep.image}
            alt={activeStep.title}
            className="w-full h-full object-cover brightness-[0.85]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="px-3 py-1 rounded-full bg-red-600 text-white font-black text-xs shadow-md">
              STEP {activeStep.step}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white font-semibold text-xs border border-white/20">
              {activeStep.koreanTitle}
            </span>
          </div>

          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 text-white">
            <h3 className="text-lg font-black text-white">{activeStep.title}</h3>
            <p className="text-xs text-amber-300 font-semibold mt-0.5">
              핵심: {activeStep.technicalKey}
            </p>
          </div>
        </div>

        {/* Detail Content */}
        <div className="p-4 pt-0 space-y-4">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {activeStep.detail}
            </p>
          </div>

          {/* Strict Checklist */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              장인의 정밀 체크리스트
            </h4>
            <div className="space-y-1.5">
              {activeStep.checklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2 rounded-lg border border-slate-200"
                >
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Equipment Used */}
          <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-200 text-xs">
            <span className="font-bold text-blue-900 block mb-1.5">
              투입 정밀 계측 및 시공 설비
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeStep.equipment.map((eq, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded-md bg-white border border-blue-200 text-blue-900 font-medium text-[11px] shadow-2xs"
                >
                  {eq}
                </span>
              ))}
            </div>
          </div>

          {/* Prev/Next Step controls */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <button
              type="button"
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30"
            >
              ← 이전 공정
            </button>
            <button
              type="button"
              disabled={activeStepIndex === REPAIR_PROCESS_STEPS.length - 1}
              onClick={() => setActiveStepIndex((prev) => Math.min(REPAIR_PROCESS_STEPS.length - 1, prev + 1))}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#1e3a8a] text-white hover:bg-blue-900 disabled:opacity-30"
            >
              다음 공정 →
            </button>
          </div>
        </div>
      </motion.div>

      {/* Technical Comparison Table */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500 shrink-0" />
          <div>
            <h3 className="text-sm sm:text-base font-black text-slate-900">
              품질 비교: 일반 단순 수리 vs 효원전기 30년 오버홀
            </h3>
            <p className="text-xs text-slate-500">외관만 닦아내는 것과 완전 분해 재권선의 차이</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 px-2 font-semibold">구분 항목</th>
                <th className="py-2 px-2 font-semibold">일반 간이 수리</th>
                <th className="py-2 px-2 font-bold text-blue-900 bg-blue-50/80 rounded-t-lg">
                  효원전기 정밀 수리
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={row.highlight ? 'bg-amber-50/30' : ''}>
                  <td className="py-2.5 px-2 font-bold text-slate-800 text-[11px]">{row.item}</td>
                  <td className="py-2.5 px-2 text-slate-500 text-[11px]">{row.normal}</td>
                  <td className="py-2.5 px-2 font-bold text-[#1e3a8a] text-[11px] bg-blue-50/50">
                    {row.hyowon}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Urgent Repair Callout */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-red-950">
              공장 가동 중단 위기! 긴급 당일 모타 수리·교체
            </h4>
            <p className="text-xs text-red-700 mt-0.5">
              동일 규격 중고모타 즉시 대차 및 24시간 쾌속 권선 작업 상담 가능
            </p>
          </div>
        </div>

        <a
          href={`tel:${COMPANY_INFO.mobile}`}
          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shrink-0 flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          긴급 상담 010-2443-8651
        </a>
      </div>
    </div>
  );
};
