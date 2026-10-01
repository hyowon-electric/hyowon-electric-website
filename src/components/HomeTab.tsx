import React from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Package,
  Award,
  ArrowRight,
  Clock,
  Sparkles,
  Zap,
  Flame,
  Gauge,
  Factory
} from 'lucide-react';
import { COMPANY_INFO, WORKSHOP_GALLERY } from '../data/companyData';
import factoryOverviewImg from '../assets/images/factory_overview_1789968974965.jpg';
import usedMotorsStockImg from '../assets/images/used_motors_stock_1789969016656.jpg';
import { TabType } from './BottomNav';

interface HomeTabProps {
  onNavigateTab: (tab: TabType) => void;
  onOpenBusinessCard: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onNavigateTab, onOpenBusinessCard }) => {
  const specialties = [
    {
      title: '효성모타 (HYOSUNG)',
      desc: '표준/고효율 삼상 유도전동기 0.5HP ~ 200HP 상시 재고 및 긴급 권선 수리',
      icon: Zap,
      color: 'bg-blue-600',
    },
    {
      title: '산업용 감속기 (기어드모터)',
      desc: '싸이클로, 웜감속기, 헬리컬 기어 오버홀 및 베어링·오일씰 신품 교체',
      icon: Gauge,
      color: 'bg-emerald-600',
    },
    {
      title: 'V·S 가변속 모터',
      desc: '속도 가변 VS 모터 클러치 코일 재권선 및 타코제네레이터(TG) 정밀 셋팅',
      icon: Flame,
      color: 'bg-amber-600',
    },
    {
      title: 'D·C 직류 전동기',
      desc: '정류자(Commutator) 언더컷팅 및 카본 브러쉬 정품 교체, 계자·전기자 권선',
      icon: Wrench,
      color: 'bg-purple-600',
    },
  ];

  return (
    <div className="space-y-4 pb-20">
      {/* Hero Visual Card */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 text-white">
        <img
          src={factoryOverviewImg}
          alt="효원전기 공장 전경 및 중고모타"
          className="w-full h-52 sm:h-64 object-cover brightness-[0.78]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-extrabold tracking-wide uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> SINCE 1996 · 30년 전통
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-white text-[10px] font-semibold">
              서울 구로 신도림 공장
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black leading-tight text-white drop-shadow-md">
            국내 중고 모타 재제조 및 <br />
            <span className="text-amber-400">30년 장인 정밀 권선 수리</span>
          </h2>

          <p className="text-xs text-slate-200 mt-1 line-clamp-2">
            효성모타 · 삼양감속기 · V·S모타 · D·C모타 등 오버홀 완료 중고모타 다량 보유 및 긴급 재생 수리
          </p>

          {/* Quick CTA Buttons */}
          <div className="flex items-center gap-2 mt-3">
            <button
              type="button"
              onClick={() => onNavigateTab('inventory')}
              className="flex-1 py-2 px-3 rounded-xl bg-[#1e3a8a] hover:bg-blue-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
            >
              <Package className="w-3.5 h-3.5" />
              중고모타 재고 보기
            </button>
            <button
              type="button"
              onClick={() => onNavigateTab('process')}
              className="flex-1 py-2 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
            >
              <Wrench className="w-3.5 h-3.5" />
              5단계 수리공정
            </button>
          </div>
        </div>
      </div>

      {/* Digital Business Card Quick Banner - direct homage to uploaded image */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-red-600 flex items-center justify-center bg-red-50 shrink-0">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-red-600 fill-red-600" aria-label="효원전기 심볼마크">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-lg font-black text-slate-900 tracking-tight">효원전기</h3>
                <span className="text-xs text-slate-500 font-semibold">대표 최영관</span>
              </div>
              <p className="text-xs text-slate-600 font-mono">{COMPANY_INFO.mobile}</p>
              <p className="text-[11px] text-slate-500 truncate max-w-[210px] sm:max-w-xs">
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenBusinessCard}
            className="px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200 hover:bg-blue-100 transition-colors shrink-0"
          >
            명함 확대
          </button>
        </div>

        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-600 font-medium">사업자번호 {COMPANY_INFO.registrationNumber}</span>
          <a
            href={`tel:${COMPANY_INFO.mobile}`}
            className="text-red-600 font-bold flex items-center gap-1 hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            상담 통화 연결
          </a>
        </div>
      </div>

      {/* 30-Year Trust Metrics */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 block">설립 연도</span>
          <span className="text-lg sm:text-xl font-black text-blue-900 font-mono">1996년</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">30년 한결같은 신뢰</span>
        </div>
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 block">누적 수리</span>
          <span className="text-lg sm:text-xl font-black text-red-600 font-mono">25,000+</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">산업용 모터 재생</span>
        </div>
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 block">품질 보증</span>
          <span className="text-lg sm:text-xl font-black text-emerald-600 font-mono">100%</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">전수 시운전 출고</span>
        </div>
      </div>

      {/* Core Specialties (효성모타, 감속기, VS모타, DC모타) */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-base font-black text-slate-900">핵심 취급 품목 & 수리 전문</h3>
            <p className="text-xs text-slate-500">신도림 공장 내 규격별 즉시 조달 가능</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateTab('inventory')}
            className="text-xs font-bold text-blue-700 flex items-center gap-0.5 hover:underline"
          >
            전체 재고 <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {specialties.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => onNavigateTab('inventory')}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-all cursor-pointer group"
              >
                <div className={`p-2 rounded-lg ${item.color} text-white shrink-0 shadow-xs`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Factory Workshop Photo Tour */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center gap-1 text-red-600 text-xs font-bold">
              <Factory className="w-3.5 h-3.5" />
              <span>실제 공장 전경 및 현장 사진</span>
            </div>
            <h3 className="text-base font-black text-slate-900">신도림 공장 설비 및 작업 모습</h3>
          </div>
          <button
            type="button"
            onClick={() => onNavigateTab('process')}
            className="text-xs font-bold text-blue-700 flex items-center gap-0.5 hover:underline"
          >
            공정 자세히 <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {WORKSHOP_GALLERY.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigateTab('process')}
              className="group relative rounded-xl overflow-hidden border border-slate-200 cursor-pointer aspect-4/3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-2.5 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-600/90 w-fit mb-1">
                  {item.tag}
                </span>
                <p className="text-xs font-bold leading-snug line-clamp-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5-Step Process Teaser */}
      <div className="bg-gradient-to-br from-[#1e3a8a] to-blue-950 text-white rounded-2xl p-4 shadow-md">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
            <Award className="w-3.5 h-3.5" /> 타사 대비 독보적 품질 검증
          </span>
          <span className="text-[11px] text-blue-200">5단계 완벽 재생</span>
        </div>
        <h3 className="text-lg font-black text-white leading-tight">
          단순 수리와는 완전히 다른 <br />
          효원전기의 5단계 오버홀 공정
        </h3>
        <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
          Class H종 180℃ 내열 동선 권선, 바니시 진공 함침, 회전자 동적 밸런싱, 3상 전류 전수 검사로 신품과 동일한 출력을 보장합니다.
        </p>

        <div className="grid grid-cols-5 gap-1 my-3 text-center text-[10px]">
          {['1.입고진단', '2.코일권선', '3.함침열처리', '4.로터밸런싱', '5.전수시운전'].map((step, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-xs py-1.5 px-0.5 rounded-lg border border-white/15">
              <span className="block font-bold text-amber-300">{idx + 1}단계</span>
              <span className="text-slate-100">{step.split('.')[1]}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onNavigateTab('process')}
          className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
        >
          <span>5단계 정밀 수리 공정 사진 및 기술 설명 보기</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Quick Diagnosis / Quotation Banner */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center justify-between gap-3">
        <div>
          <h4 className="text-sm font-bold text-slate-900">모터 고장 증상이 있으신가요?</h4>
          <p className="text-xs text-slate-500 mt-0.5">코일 소손, 베어링 소음, 차단기 트립 예상 비용 확인</p>
        </div>
        <button
          type="button"
          onClick={() => onNavigateTab('quote')}
          className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shrink-0 transition-colors"
        >
          견적 계산기
        </button>
      </div>
    </div>
  );
};
