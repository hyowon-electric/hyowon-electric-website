import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Filter,
  Phone,
  CheckCircle2,
  AlertCircle,
  Zap,
  Gauge,
  ShieldCheck,
  Truck,
  FileCheck2,
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { MotorCategory, MotorItem } from '../types';
import { USED_MOTORS_STOCK, COMPANY_INFO } from '../data/companyData';
import factoryOverviewImg from '../assets/images/factory_overview_1789968974965.jpg';

interface InventoryTabProps {
  onSelectForQuote: (motor: MotorItem) => void;
}

export const InventoryTab: React.FC<InventoryTabProps> = ({ onSelectForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<MotorCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMotor, setSelectedMotor] = useState<MotorItem | null>(null);

  const categories: { id: MotorCategory; label: string }[] = [
    { id: 'all', label: '전체 모타' },
    { id: 'hyosung', label: '효성 삼상모타' },
    { id: 'reducer', label: '감속기·기어드' },
    { id: 'vs_motor', label: 'V·S 가변속' },
    { id: 'dc_motor', label: 'D·C 직류모타' },
    { id: 'flange', label: '수직 플랜지형' },
  ];

  const filteredMotors = USED_MOTORS_STOCK.filter((motor) => {
    const matchesCategory =
      selectedCategory === 'all' || motor.category === selectedCategory;
    const matchesSearch =
      motor.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      motor.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      motor.powerHp.toString().includes(searchTerm) ||
      motor.voltage.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-4 pb-24">
      {/* Stock Warehouse Panoramic Header */}
      <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-900 border border-slate-200">
        <img
          src={factoryOverviewImg}
          alt="중고모타 전경 및 창고"
          className="w-full h-40 object-cover brightness-[0.75]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent p-4 flex flex-col justify-end text-white">
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
            신도림 효원전기 직영 전시장 & 공장
          </span>
          <h2 className="text-lg sm:text-xl font-black text-white leading-tight mt-0.5">
            국내 우수 중고모타 전경 및 보유 재고
          </h2>
          <p className="text-xs text-slate-300 mt-0.5">
            전 품목 코일 절연검사 & 신품 베어링 교체 오버홀 완료 / 즉시 호이스트 상차 출고 가능
          </p>
        </div>
      </div>

      {/* Search & Category Filter */}
      <div className="bg-white rounded-2xl p-3.5 shadow-xs border border-slate-200 space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="모타 모델명, 마력(HP), 제조사 검색 (예: 30HP, 효성)"
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Categories horizontal pill bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all text-xs ${
                selectedCategory === cat.id
                  ? 'bg-[#1e3a8a] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stock count and guarantee notice */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
        <span>등록 재고 {filteredMotors.length}대 표시 중</span>
        <span className="flex items-center gap-1 text-emerald-700 font-bold">
          <ShieldCheck className="w-3.5 h-3.5" /> 6개월 무상 품질보증 지원
        </span>
      </div>

      {/* Motor Cards Grid */}
      <div className="grid grid-cols-1 gap-3.5">
        {filteredMotors.map((motor) => (
          <div
            key={motor.id}
            className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-xs hover:border-blue-300 transition-all space-y-3"
          >
            <div className="flex gap-3">
              {/* Motor Image */}
              <div
                onClick={() => setSelectedMotor(motor)}
                className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 cursor-pointer group"
              >
                <img
                  src={motor.image}
                  alt={motor.model}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-1 right-1 text-[9px] px-1.5 py-0.5 rounded bg-black/70 text-white font-medium">
                  상세보기
                </span>
              </div>

              {/* Motor Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#1e3a8a] font-black text-[10px] border border-blue-200">
                    {motor.manufacturer}
                  </span>
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-bold text-[10px] border border-emerald-200">
                    {motor.overhaulStatus}
                  </span>
                </div>

                <h3
                  onClick={() => setSelectedMotor(motor)}
                  className="text-sm sm:text-base font-black text-slate-900 leading-snug cursor-pointer hover:text-blue-700 transition-colors line-clamp-2"
                >
                  {motor.model}
                </h3>

                {/* Technical Specs Tags */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 mt-2 text-[11px] text-slate-600 font-mono">
                  <div>
                    <span className="text-slate-400 font-sans">용량: </span>
                    <span className="font-bold text-slate-900">{motor.powerHp} HP ({motor.powerKw}kW)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-sans">극수: </span>
                    <span className="font-bold text-slate-900">{motor.poles}P / {motor.rpm} RPM</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-sans">전압: </span>
                    <span>{motor.voltage}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-sans">프레임: </span>
                    <span>{motor.frameSize}</span>
                  </div>
                </div>

                <div className="mt-2 text-xs font-bold text-red-600">
                  {motor.priceEstimate}
                </div>
              </div>
            </div>

            {/* Test Report Badge Preview */}
            <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/80 text-[11px] space-y-1">
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  절연저항: <strong className="text-slate-900">{motor.testReport.insulationResistance}</strong>
                </span>
                <span className="text-slate-500">진동: {motor.testReport.vibrationLevel}</span>
              </div>
              <div className="text-[10px] text-slate-500 truncate">
                장착 베어링: {motor.testReport.bearingType}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setSelectedMotor(motor)}
                className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
              >
                검사성적서 확인
              </button>
              <a
                href={`tel:${COMPANY_INFO.mobile}`}
                className="flex-1 py-2 rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-1 transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                즉시 재고 문의
              </a>
            </div>
          </div>
        ))}

        {filteredMotors.length === 0 && (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 space-y-3">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
            <h4 className="text-sm font-bold text-slate-800">
              검색 조건에 맞는 재고가 실시간 표시되지 않았습니다.
            </h4>
            <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
              신도림 창고에 입고 대기 및 오버홀 작업 중인 모터가 상시 100여 대 이상 구비되어 있습니다. 원하시는 마력과 회전수를 전화로 문의주시면 즉시 찾아드립니다.
            </p>
            <a
              href={`tel:${COMPANY_INFO.mobile}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold shadow-md hover:bg-red-700 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              {COMPANY_INFO.mobile} 직통 전화
            </a>
          </div>
        )}
      </div>

      {/* Motor Detail Modal with Full Inspection Report */}
      <AnimatePresence>
        {selectedMotor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-2xl p-4 shadow-2xl border border-slate-200"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-xs">
                    {selectedMotor.manufacturer}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">관리번호: {selectedMotor.id}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedMotor(null)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Photo & Model */}
              <div className="my-3">
                <img
                  src={selectedMotor.image}
                  alt={selectedMotor.model}
                  className="w-full h-48 object-cover rounded-xl border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-base font-black text-slate-900 mt-2.5">
                  {selectedMotor.model}
                </h3>
                <p className="text-xs text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {selectedMotor.overhaulStatus} (전수 시운전 테스트 완료)
                </p>
              </div>

              {/* Technical Spec Sheet */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs space-y-1.5 font-sans">
                <h4 className="font-bold text-slate-800 flex items-center gap-1 pb-1 border-b border-slate-200">
                  <FileCheck2 className="w-3.5 h-3.5 text-blue-700" />
                  모터 기술 사양표 (Spec)
                </h4>
                <div className="grid grid-cols-2 gap-2 text-slate-600 font-mono pt-1">
                  <div>정격 출력: <strong className="text-slate-900">{selectedMotor.powerHp} HP ({selectedMotor.powerKw}kW)</strong></div>
                  <div>극수 / 회전수: <strong className="text-slate-900">{selectedMotor.poles}P / {selectedMotor.rpm}</strong></div>
                  <div>정격 전압: <strong className="text-slate-900">{selectedMotor.voltage}</strong></div>
                  <div>취부 방식: <strong className="text-slate-900">{selectedMotor.mountType}</strong></div>
                  <div>프레임 규격: <strong className="text-slate-900">{selectedMotor.frameSize}</strong></div>
                  <div>출력 축경(Shaft): <strong className="text-slate-900">{selectedMotor.shaftDiameter}</strong></div>
                </div>
              </div>

              {/* Quality Inspection Report */}
              <div className="mt-3 bg-blue-50/80 rounded-xl p-3 border border-blue-200 text-xs space-y-2">
                <h4 className="font-bold text-blue-900 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  효원전기 자체 품질검사 성적 (출고 기준 합격)
                </h4>
                <div className="space-y-1 text-slate-700">
                  <div className="flex justify-between border-b border-blue-100 pb-1">
                    <span>1,000V DC 절연저항 (Megger)</span>
                    <strong className="text-blue-950 font-mono">{selectedMotor.testReport.insulationResistance}</strong>
                  </div>
                  <div className="flex justify-between border-b border-blue-100 pb-1">
                    <span>무부하 전류 밸런스</span>
                    <strong className="text-blue-950 font-mono">{selectedMotor.testReport.noLoadCurrent}</strong>
                  </div>
                  <div className="flex justify-between border-b border-blue-100 pb-1">
                    <span>진동 계측 (ISO 등급)</span>
                    <strong className="text-blue-950 font-mono">{selectedMotor.testReport.vibrationLevel}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>신품 교체 베어링</span>
                    <strong className="text-blue-950">{selectedMotor.testReport.bearingType}</strong>
                  </div>
                </div>
              </div>

              {/* Features bullets */}
              <div className="mt-3 text-xs space-y-1">
                <h4 className="font-bold text-slate-800">정밀 리빌드 특징</h4>
                <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                  {selectedMotor.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex gap-2">
                <a
                  href={`tel:${COMPANY_INFO.mobile}`}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  전화로 가격 & 납기 문의
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
