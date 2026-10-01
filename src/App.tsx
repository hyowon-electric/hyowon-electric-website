/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav, TabType } from './components/BottomNav';
import { HomeTab } from './components/HomeTab';
import { InventoryTab } from './components/InventoryTab';
import { RepairProcessTab } from './components/RepairProcessTab';
import { QuoteCalculatorTab } from './components/QuoteCalculatorTab';
import { LocationTab } from './components/LocationTab';
import { BusinessCardModal } from './components/BusinessCardModal';
import { QuickContactFloating } from './components/QuickContactFloating';
import { MotorItem } from './types';
import { COMPANY_INFO } from './data/companyData';
import { ShieldCheck, Phone, MapPin, Building2, CreditCard } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [isBusinessCardOpen, setIsBusinessCardOpen] = useState(false);
  const [isFramedView, setIsFramedView] = useState(true);

  const handleSelectMotorForQuote = (motor: MotorItem) => {
    setCurrentTab('quote');
  };

  return (
    <div className={`min-h-screen ${isFramedView ? 'bg-slate-200 py-0 sm:py-6' : 'bg-slate-100'}`}>
      {/* Mobile App Viewport Container */}
      <div
        className={`mx-auto bg-slate-100 min-h-screen flex flex-col relative transition-all duration-300 ${
          isFramedView
            ? 'max-w-md sm:rounded-3xl sm:shadow-2xl sm:border sm:border-slate-300 sm:overflow-hidden'
            : 'w-full max-w-4xl'
        }`}
      >
        {/* App Bar / Header */}
        <Header
          onOpenBusinessCard={() => setIsBusinessCardOpen(true)}
          isFramedView={isFramedView}
          onToggleFrameView={() => setIsFramedView(!isFramedView)}
        />

        {/* Dynamic Main Body Content */}
        <main className="flex-1 p-3.5 space-y-4">
          {currentTab === 'home' && (
            <HomeTab
              onNavigateTab={(tab) => setCurrentTab(tab)}
              onOpenBusinessCard={() => setIsBusinessCardOpen(true)}
            />
          )}

          {currentTab === 'inventory' && (
            <InventoryTab onSelectForQuote={handleSelectMotorForQuote} />
          )}

          {currentTab === 'process' && (
            <RepairProcessTab onNavigateTab={(tab) => setCurrentTab(tab)} />
          )}

          {currentTab === 'quote' && <QuoteCalculatorTab />}

          {currentTab === 'location' && <LocationTab />}

          {/* Bottom Common Footer within scrollable area */}
          <footer className="pt-4 pb-12 border-t border-slate-200 text-center text-xs text-slate-500 space-y-2">
            <div className="flex items-center justify-center gap-1.5 font-bold text-slate-800">
              <div className="w-5 h-5 rounded-full border border-red-600 flex items-center justify-center p-0.5 bg-red-50">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-red-600 fill-red-600">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <span>효원전기 (HYOWON ELECTRIC)</span>
            </div>
            <p className="text-[11px] text-slate-500">
              대표: 최영관 | 사업자등록번호: {COMPANY_INFO.registrationNumber} (1996년 설립)
            </p>
            <p className="text-[11px] text-slate-500">
              {COMPANY_INFO.address} | TEL: {COMPANY_INFO.tel}
            </p>
            <p className="text-[10px] text-slate-400 font-mono">
              © 1996-2026 효원전기. All Rights Reserved.
            </p>
          </footer>
        </main>

        {/* Floating Fast Contact bar */}
        <QuickContactFloating onOpenBusinessCard={() => setIsBusinessCardOpen(true)} />

        {/* Bottom Navigation */}
        <BottomNav currentTab={currentTab} onSelectTab={setCurrentTab} />

        {/* Interactive Digital Business Card Replica */}
        <BusinessCardModal
          isOpen={isBusinessCardOpen}
          onClose={() => setIsBusinessCardOpen(false)}
        />
      </div>
    </div>
  );
}
