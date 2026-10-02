import React from 'react';
import { BotStatus } from '../types';

interface HeaderProps {
  activeTab: 'cockpit' | 'database' | 'logs' | 'guide';
  setActiveTab: (tab: 'cockpit' | 'database' | 'logs' | 'guide') => void;
  botStatus: BotStatus;
  totalTweets: number;
  totalPosted: number;
  onQuickShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  botStatus,
  totalTweets,
  totalPosted,
  onQuickShare
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-base shadow-sm">
            𝕏
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-semibold tracking-tight text-slate-100 flex items-center gap-2">
              Il Emri Botu
              <span className="text-[11px] font-normal text-slate-400 hidden sm:inline">
                · Öğretmen Dayanışma Sistemi
              </span>
            </span>
          </div>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab('cockpit')}
            className={`transition-colors text-left ${
              activeTab === 'cockpit'
                ? 'text-sky-400 border-b-2 border-sky-400 pb-1'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Kontrol Paneli
          </button>
          <button
            onClick={() => setActiveTab('database')}
            className={`transition-colors text-left flex items-center gap-1.5 ${
              activeTab === 'database'
                ? 'text-sky-400 border-b-2 border-sky-400 pb-1'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Tweet Havuzu</span>
            <span className="text-xs font-mono text-slate-500 tabular-nums">
              ({totalTweets})
            </span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`transition-colors text-left flex items-center gap-1.5 ${
              activeTab === 'logs'
                ? 'text-sky-400 border-b-2 border-sky-400 pb-1'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Gönderim Günlüğü</span>
            <span className="text-xs font-mono text-slate-500 tabular-nums">
              ({totalPosted})
            </span>
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`transition-colors text-left ${
              activeTab === 'guide'
                ? 'text-sky-400 border-b-2 border-sky-400 pb-1'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Rehber & Ipuclari
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs">
            <span
              className={`w-2 h-2 rounded-full ${
                botStatus === 'running'
                  ? 'bg-emerald-400 animate-pulse'
                  : botStatus === 'paused'
                  ? 'bg-amber-400'
                  : 'bg-slate-500'
              }`}
            />
            <span className="text-slate-300 font-mono text-[11px] uppercase tracking-wider">
              {botStatus === 'running'
                ? 'Bot Aktif'
                : botStatus === 'paused'
                ? 'Duraklatıldı'
                : 'Beklemede'}
            </span>
          </div>

          <button
            onClick={onQuickShare}
            className="px-3.5 py-1.5 text-xs font-medium text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap cursor-pointer active:scale-95"
            title="Sıradaki tweeti anında X üzerinde açar"
          >
            <span className="font-bold">𝕏</span>
            <span>Hızlı Paylaş</span>
          </button>
        </div>
      </div>

      {/* Mobile nav subbar */}
      <div className="flex md:hidden items-center justify-around pt-3 border-t border-slate-800/60 mt-2.5 text-xs font-medium">
        <button
          onClick={() => setActiveTab('cockpit')}
          className={`pb-1 ${activeTab === 'cockpit' ? 'text-sky-400 font-semibold border-b border-sky-400' : 'text-slate-400'}`}
        >
          Kontrol
        </button>
        <button
          onClick={() => setActiveTab('database')}
          className={`pb-1 ${activeTab === 'database' ? 'text-sky-400 font-semibold border-b border-sky-400' : 'text-slate-400'}`}
        >
          Havuz ({totalTweets})
        </button>
        <button
          onClick={() => setActiveTab('logs')}
          className={`pb-1 ${activeTab === 'logs' ? 'text-sky-400 font-semibold border-b border-sky-400' : 'text-slate-400'}`}
        >
          Günlük ({totalPosted})
        </button>
        <button
          onClick={() => setActiveTab('guide')}
          className={`pb-1 ${activeTab === 'guide' ? 'text-sky-400 font-semibold border-b border-sky-400' : 'text-slate-400'}`}
        >
          Rehber
        </button>
      </div>
    </header>
  );
};
