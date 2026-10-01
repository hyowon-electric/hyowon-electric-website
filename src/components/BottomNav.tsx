import React from 'react';
import { Home, Package, Wrench, Calculator, MapPin } from 'lucide-react';

export type TabType = 'home' | 'inventory' | 'process' | 'quote' | 'location';

interface BottomNavProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const tabs = [
    { id: 'home' as TabType, label: '홈·소개', icon: Home },
    { id: 'inventory' as TabType, label: '모타 재고/전경', icon: Package, badge: '보유' },
    { id: 'process' as TabType, label: '수리과정·기술', icon: Wrench, highlight: true },
    { id: 'quote' as TabType, label: '견적·진단', icon: Calculator },
    { id: 'location' as TabType, label: '오시는길', icon: MapPin },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-1 shadow-lg max-w-md mx-auto md:max-w-none">
      <div className="flex items-center justify-around px-2 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                onSelectTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
                isActive
                  ? 'text-blue-900 font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.badge && (
                <span className="absolute -top-1 right-2 px-1 text-[9px] font-bold bg-amber-500 text-white rounded-full leading-tight">
                  {tab.badge}
                </span>
              )}
              {tab.highlight && !isActive && (
                <span className="absolute -top-0.5 right-3 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
              )}
              <div
                className={`p-1 rounded-lg transition-transform ${
                  isActive ? 'bg-blue-50 text-[#1e3a8a] scale-110' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
