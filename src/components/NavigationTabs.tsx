import React from 'react';
import type { TabType } from '../types/index.ts';

interface NavigationTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  repoCount?: number;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeTab,
  onTabChange,
  repoCount,
}) => {
  return (
    <nav aria-label="Portal Navigation" className="flex items-center gap-2.5 sm:gap-3 py-2 overflow-x-auto no-scrollbar">
      {/* Certificates Tab */}
      <button
        onClick={() => onTabChange('certificates')}
        className={`group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
          activeTab === 'certificates'
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-600/30'
            : 'bg-white/90 text-slate-700 hover:text-slate-900 hover:bg-white shadow-sm border border-slate-200/90'
        }`}
        aria-selected={activeTab === 'certificates'}
        role="tab"
      >
        <span className="text-base">📜</span>
        <span>Certificates</span>
        <span
          className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
            activeTab === 'certificates'
              ? 'bg-blue-700 text-blue-100'
              : 'bg-amber-100 text-amber-700 border border-amber-200'
          }`}
        >
          Soon
        </span>
      </button>

      {/* Repositories Tab */}
      <button
        onClick={() => onTabChange('repositories')}
        className={`group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
          activeTab === 'repositories'
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-600/30'
            : 'bg-white/90 text-slate-700 hover:text-slate-900 hover:bg-white shadow-sm border border-slate-200/90'
        }`}
        aria-selected={activeTab === 'repositories'}
        role="tab"
      >
        <span className="text-base">💻</span>
        <span>Repositories</span>
        {typeof repoCount === 'number' && (
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-bold ${
              activeTab === 'repositories'
                ? 'bg-white/20 text-white'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            {repoCount}
          </span>
        )}
      </button>
    </nav>
  );
};
