import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  Send,
  Camera,
  Layers,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, MOTOR_FAULT_SYMPTOMS } from '../data/companyData';

export const QuoteCalculatorTab: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'repair' | 'buyback'>('repair');

  // Repair Form State
  const [motorType, setMotorType] = useState('삼상유도전동기 (효성/현대 등)');
  const [motorHp, setMotorHp] = useState<number>(15);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['burn', 'bearing']);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Buyback State
  const [buybackHp, setBuybackHp] = useState('20HP 이상');
  const [buybackQty, setBuybackQty] = useState('3대');
  const [buybackCondition, setBuybackCondition] = useState('정상 가동 가능');

  const toggleSymptom = (id: string) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== id));
    } else {
      setSelectedSymptoms([...selectedSymptoms, id]);
    }
  };

  // Calculation heuristic
  const getEstimatedTimeline = () => {
    if (motorHp <= 10) return '당일 완료 또는 익일 출고 (긴급 대응 가능)';
    if (motorHp <= 50) return '1~2일 (진공함침 및 열처리 포함)';
    return '2~3일 (대형 권선 및 다이내믹 밸런싱 검증)';
  };

  const getEstimatedSavings = () => {
    return '신품 대비 55% ~ 70% 비용 절감 효과';
  };

  const handleRepairSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone) {
      alert('연락받으실 전화번호를 입력해주세요.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="space-y-4 pb-24">
      {/* Header */}
      <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-red-600 flex items-center gap-1">
              <Calculator className="w-3.5 h-3.5" /> 1분 간편 견적 & 접수
            </span>
            <h2 className="text-lg font-black text-slate-900 mt-0.5">
              모타 수리 견적 및 중고 매입 신청
            </h2>
          </div>
          <a
            href={`tel:${COMPANY_INFO.mobile}`}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition-colors shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            직통 유선문의
          </a>
        </div>

        {/* Mode Toggle */}
        <div className="grid grid-cols-2 gap-1.5 mt-3 p-1 bg-slate-100 rounded-xl">
          <button
            type="button"
            onClick={() => {
              setActiveMode('repair');
              setSubmitted(false);
            }}
            className={`py-2 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'repair'
                ? 'bg-white text-[#1e3a8a] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            모터 수리/권선 견적
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveMode('buyback');
              setSubmitted(false);
            }}
            className={`py-2 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'buyback'
                ? 'bg-white text-emerald-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            중고모타 최고가 매입
          </button>
        </div>
      </div>

      {activeMode === 'repair' ? (
        /* REPAIR ESTIMATOR */
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200 space-y-4">
            {/* Step 1: Motor Type */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                1. 모터 종류 선택
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  '삼상유도전동기 (효성/현대 등)',
                  '산업용 감속기 (기어드모터)',
                  'V·S 가변속 모터',
                  'D·C 직류 전동기',
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setMotorType(type)}
                    className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                      motorType === type
                        ? 'border-blue-600 bg-blue-50/70 text-[#1e3a8a] font-bold shadow-2xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Motor Capacity HP */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-800">
                  2. 모터 마력 (HP) 용량 선택
                </label>
                <span className="text-xs font-black text-blue-900 font-mono">
                  {motorHp} HP ({Math.round(motorHp * 0.746 * 10) / 10} kW)
                </span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5 text-xs">
                {[3, 5, 10, 15, 20, 30, 50, 75, 100, 150].map((hp) => (
                  <button
                    key={hp}
                    type="button"
                    onClick={() => setMotorHp(hp)}
                    className={`py-2 rounded-xl font-bold border transition-all ${
                      motorHp === hp
                        ? 'border-red-600 bg-red-50 text-red-700 shadow-2xs'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {hp} HP
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Fault Symptoms */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                3. 현재 고장 증상 (다중 선택 가능)
              </label>
              <div className="space-y-1.5">
                {MOTOR_FAULT_SYMPTOMS.map((sym) => {
                  const isChecked = selectedSymptoms.includes(sym.id);
                  return (
                    <div
                      key={sym.id}
                      onClick={() => toggleSymptom(sym.id)}
                      className={`flex items-center gap-2.5 p-2 rounded-xl border text-xs cursor-pointer transition-all ${
                        isChecked
                          ? 'border-blue-500 bg-blue-50/50 text-blue-950 font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="rounded text-blue-600 focus:ring-0"
                      />
                      <span>{sym.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Automated Technical Recommendation Output */}
            <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2.5 text-xs">
              <div className="flex items-center gap-1 text-amber-300 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>효원전기 예상 수리 공정 및 일정 안내</span>
              </div>

              <div className="space-y-1.5 text-slate-300 font-mono text-[11px]">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400 font-sans">예상 공정:</span>
                  <span className="text-slate-100 font-sans">
                    {selectedSymptoms.includes('burn') ? 'H종 순동선 코일 전면 재권선 + ' : ''}
                    {selectedSymptoms.includes('bearing') ? 'SKF/NSK 신품 베어링 교체 + ' : ''}
                    진공 바니시 함침 및 밸런싱
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400 font-sans">예상 소요 시간:</span>
                  <span className="text-amber-400 font-bold font-sans">{getEstimatedTimeline()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-sans">비용 절감율:</span>
                  <span className="text-emerald-400 font-bold font-sans">{getEstimatedSavings()}</span>
                </div>
              </div>
            </div>

            {/* Simple Contact Form */}
            {!submitted ? (
              <form onSubmit={handleRepairSubmit} className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold text-slate-800">
                  정밀 견적서 유선 또는 문자 수신 요청
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="회사명 또는 성함"
                    className="p-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="전화번호 (예: 010-XXXX-XXXX)"
                    className="p-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                  />
                </div>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="추가 전달사항 (예: 명판 사진 전송 요청, 긴급 공장 납품, 1톤 화물 픽업 요청 등)"
                  className="w-full p-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    견적 상담 접수하기
                  </button>
                  <a
                    href={`sms:${COMPANY_INFO.mobile}?body=${encodeURIComponent(
                      `[효원전기 견적문의]\n모터종류: ${motorType}\n용량: ${motorHp}HP\n증상: ${selectedSymptoms.join(', ')}\n연락처: ${customerPhone}`
                    )}`}
                    className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    문자 바로전송
                  </a>
                </div>
              </form>
            ) : (
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">
                  견적 요청이 성공적으로 접수되었습니다!
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  담당자 최영관 대표가 기재해주신 연락처({customerPhone})로 내용 확인 후 10분 내로 신속하게 안내드리겠습니다.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${COMPANY_INFO.mobile}`}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold shadow-md hover:bg-red-700"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    지금 바로 대표 통화 ({COMPANY_INFO.mobile})
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* BUYBACK (중고모타 매입) */
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200 space-y-4">
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
            <h3 className="font-bold flex items-center gap-1.5 mb-1">
              <Coins className="w-4 h-4 text-emerald-700" />
              불용 모터, 철거 설비, 감속기 현금 고가 매입
            </h3>
            <p className="text-[11px] leading-relaxed">
              공장 이전, 라인 변경, 설비 교체로 나오는 중고 모터를 당일 현장 방문 및 호이스트 화물차로 깔끔하게 수거 매입해 드립니다.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-bold text-slate-800 mb-1">매입 대상 모터 규격</label>
              <select
                value={buybackHp}
                onChange={(e) => setBuybackHp(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              >
                <option value="소형 (1HP ~ 5HP)">소형 (1HP ~ 5HP) 다량</option>
                <option value="중형 (7.5HP ~ 30HP)">중형 (7.5HP ~ 30HP)</option>
                <option value="대형 (40HP ~ 150HP+)">대형 (40HP ~ 150HP+)</option>
                <option value="감속기 및 특수 V·S / D·C 모터">감속기 및 특수 V·S / D·C 모터</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">보유 수량</label>
              <input
                type="text"
                value={buybackQty}
                onChange={(e) => setBuybackQty(e.target.value)}
                placeholder="예: 5대, 일괄 10대 등"
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">현재 상태</label>
              <div className="grid grid-cols-3 gap-1.5">
                {['가동 정상', '코일 소손(고장)', '장기 방치/미확인'].map((cond) => (
                  <button
                    key={cond}
                    type="button"
                    onClick={() => setBuybackCondition(cond)}
                    className={`py-2 rounded-xl text-center font-bold border transition-all ${
                      buybackCondition === cond
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                        : 'border-slate-200 bg-slate-50 text-slate-600'
                    }`}
                  >
                    {cond}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <div className="font-bold text-slate-800">📸 매입 시 사진 확인 방법</div>
              <p>
                모터 측면에 부착된 **명판(Nameplate)** 사진을 휴대전화로 찍어 아래 대표 번호로 문자 전송해주시면 10분 내로 즉시 매입 단가를 산정해 드립니다.
              </p>
            </div>

            <a
              href={`tel:${COMPANY_INFO.mobile}`}
              className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4" />
              중고모타 매입 직통 상담 ({COMPANY_INFO.mobile})
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
