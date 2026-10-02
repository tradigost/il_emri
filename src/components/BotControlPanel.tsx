import React, { useState } from 'react';
import { BotSettings, BotStats, BotStatus, SelectionMode, TweetCategory, TweetItem } from '../types';
import { CATEGORY_LABELS } from '../utils/twitter';

interface BotControlPanelProps {
  botStatus: BotStatus;
  currentTweet: TweetItem | null;
  settings: BotSettings;
  stats: BotStats;
  secondsRemaining: number;
  onStartBot: () => void;
  onPauseBot: () => void;
  onStopBot: () => void;
  onNextTweet: () => void;
  onUpdateSettings: (newSettings: Partial<BotSettings>) => void;
  onShareNow: (tweet: TweetItem) => void;
  onOpenPopupGuide: () => void;
}

export const BotControlPanel: React.FC<BotControlPanelProps> = ({
  botStatus,
  currentTweet,
  settings,
  stats,
  secondsRemaining,
  onStartBot,
  onPauseBot,
  onStopBot,
  onNextTweet,
  onUpdateSettings,
  onShareNow,
  onOpenPopupGuide
}) => {
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const handleCopyText = async () => {
    if (!currentTweet) return;
    try {
      await navigator.clipboard.writeText(currentTweet.text);
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 2000);
    } catch {
      // ignore
    }
  };

  const progressPercent = settings.intervalSeconds > 0
    ? Math.max(0, Math.min(100, ((settings.intervalSeconds - secondsRemaining) / settings.intervalSeconds) * 100))
    : 0;

  const charCount = currentTweet ? currentTweet.text.length : 0;
  const isOverLimit = charCount > 280;

  return (
    <div className="space-y-6">
      {/* Top Banner Notice: Target and Purpose */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-sky-400 font-medium mb-1">
            <span>Öğretmen Mazeret ve Aile Birliği İl Emri Kampanyası</span>
            <span aria-hidden="true">·</span>
            <span>50 Farklı Özgün Tweet Veritabanı</span>
          </div>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            MEB ve Bakan Yusuf Tekin&apos;e yönelik il emri taleplerini içeren 50 farklı tweeti
            belirlediğiniz aralıklarla otomatik olarak sıradan ya da akıllı rastgele seçip X (Twitter)&apos;da açar.
          </p>
        </div>

        <button
          onClick={onOpenPopupGuide}
          className="text-xs text-slate-400 hover:text-sky-300 underline underline-offset-4 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors"
        >
          <span>Tarayıcı Açılır Pencere İzin Rehberi</span>
        </button>
      </div>

      {/* Main Grid: Left Cockpit & Right Active Tweet Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Bot Engine Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Action Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-100">
                  Otomasyon Motoru
                </span>
                <span className="text-slate-500 text-xs">·</span>
                <span className="text-xs font-mono text-slate-400">
                  {settings.mode === 'smart_random'
                    ? 'Akıllı Rastgele Seçim'
                    : settings.mode === 'sequential'
                    ? 'Sıralı Döngü (1-50)'
                    : 'Kategori Bazlı Seçim'}
                </span>
              </div>

              {botStatus === 'running' && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Sonraki tweet:</span>
                  <span className="text-sm font-mono font-bold text-sky-400 tabular-nums">
                    {secondsRemaining}s
                  </span>
                </div>
              )}
            </div>

            {/* Progress Bar for Countdown */}
            {botStatus === 'running' && (
              <div className="space-y-1.5">
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-sky-400 h-full transition-all duration-1000 ease-linear rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-slate-400 tabular-nums">
                  <span>Aralık: {settings.intervalSeconds} sn</span>
                  <span>Kalan: {secondsRemaining} sn</span>
                </div>
              </div>
            )}

            {/* Primary Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {botStatus === 'running' ? (
                <button
                  onClick={onPauseBot}
                  className="w-full py-3 px-4 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span className="w-3 h-3 rounded-xs bg-amber-400 inline-block" />
                  <span>Botu Duraklat</span>
                </button>
              ) : (
                <button
                  onClick={onStartBot}
                  className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span className="w-0 h-0 border-y-4 border-y-transparent border-l-8 border-l-slate-950 inline-block" />
                  <span>
                    {botStatus === 'paused' ? 'Botu Devam Ettir' : 'Otomatik Botu Başlat'}
                  </span>
                </button>
              )}

              <button
                onClick={onNextTweet}
                className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium text-sm rounded-lg border border-slate-700/80 transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                title="Sıradaki tweeti beklemeden X'te aç"
              >
                <span className="font-bold text-sky-400">𝕏</span>
                <span>Sıradakini Paylaş & Aç</span>
                <span className="text-[10px] font-mono text-slate-400 border border-slate-600 px-1 py-0.5 rounded">
                  Space
                </span>
              </button>
            </div>

            {botStatus !== 'idle' && (
              <div className="flex justify-end pt-1">
                <button
                  onClick={onStopBot}
                  className="text-xs text-rose-400/80 hover:text-rose-300 transition-colors cursor-pointer"
                >
                  Botu Tamamen Sıfırla ve Durdur
                </button>
              </div>
            )}
          </div>

          {/* Quick Config: Intervals & Mode */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Paylaşım Aralığı (Süre)
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { sec: 15, label: '15 sn (Hızlı)' },
                { sec: 30, label: '30 sn (Önerilen)' },
                { sec: 60, label: '1 dk (Dengeli)' },
                { sec: 120, label: '2 dk (Güvenli)' },
                { sec: 300, label: '5 dk (Spam Korumalı)' },
              ].map(({ sec, label }) => (
                <button
                  key={sec}
                  onClick={() => onUpdateSettings({ intervalSeconds: sec })}
                  className={`py-2 px-2.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer text-center ${
                    settings.intervalSeconds === sec
                      ? 'bg-sky-500/10 border-sky-400 text-sky-300'
                      : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Selection Mode & Filter */}
            <div className="pt-2 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Tweet Seçim Yöntemi
                </label>
                <select
                  value={settings.mode}
                  onChange={(e) =>
                    onUpdateSettings({ mode: e.target.value as SelectionMode })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-400"
                >
                  <option value="smart_random">Akıllı Rastgele (Eşit Dağıtımlı)</option>
                  <option value="sequential">Sıralı Döngü (1'den 50'ye)</option>
                  <option value="category">Kategoriye Göre Süz</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Hedef Kategori Filtresi
                </label>
                <select
                  value={settings.selectedCategory}
                  onChange={(e) =>
                    onUpdateSettings({ selectedCategory: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-400"
                >
                  <option value="all">Tüm Kategoriler (Tüm 50 Tweet)</option>
                  <option value="Aile Bütünlüğü">Aile Bütünlüğü</option>
                  <option value="Anayasal Hak">Anayasal Hak (Madde 41)</option>
                  <option value="Bakanlığa Çağrı">Bakanlığa Çağrı (Yusuf Tekin)</option>
                  <option value="Çocuklar İçin">Çocuklar İçin</option>
                  <option value="Sosyo-Ekonomik">Sosyo-Ekonomik Külfet</option>
                  <option value="Adil Atama">Adil Atama & Boş Normlar</option>
                </select>
              </div>
            </div>

            {/* Automation Preferences */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs text-slate-300">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={settings.autoOpenTwitter}
                  onChange={(e) =>
                    onUpdateSettings({ autoOpenTwitter: e.target.checked })
                  }
                  className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-sky-400 focus:ring-0 focus:ring-offset-0"
                />
                <span>Otomatik X Sekmesi Aç</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={settings.copyToClipboard}
                  onChange={(e) =>
                    onUpdateSettings({ copyToClipboard: e.target.checked })
                  }
                  className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-sky-400 focus:ring-0 focus:ring-offset-0"
                />
                <span>Metni Panoya Kopyala</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={settings.soundNotification}
                  onChange={(e) =>
                    onUpdateSettings({ soundNotification: e.target.checked })
                  }
                  className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-sky-400 focus:ring-0 focus:ring-offset-0"
                />
                <span>Sesli Uyarı (Bip)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={settings.loopContinuously}
                  onChange={(e) =>
                    onUpdateSettings({ loopContinuously: e.target.checked })
                  }
                  className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-sky-400 focus:ring-0 focus:ring-offset-0"
                />
                <span>Döngü Bitince Başa Dön</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Active Tweet Card (Twitter Preview) (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-200">
                  Sıradaki / Aktif Tweet
                </span>
                {currentTweet && (
                  <span className="text-xs font-mono text-sky-400 tabular-nums">
                    #{currentTweet.id}
                  </span>
                )}
              </div>

              {currentTweet && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">
                    {CATEGORY_LABELS[currentTweet.category]?.title || currentTweet.category}
                  </span>
                </div>
              )}
            </div>

            {currentTweet ? (
              <div className="space-y-4">
                {/* Twitter Styled Card */}
                <div className="bg-slate-950 border border-slate-800/90 rounded-xl p-4 space-y-3">
                  {/* Account simulation header */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sky-400 text-sm">
                      ÖE
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-slate-100">
                          Öğretmen İl Emri Platformu
                        </span>
                        <span className="text-sky-400 text-xs">✓</span>
                      </div>
                      <div className="text-xs text-slate-500 font-mono">
                        @il_emri_talep · Şimdi
                      </div>
                    </div>
                  </div>

                  {/* Tweet Body */}
                  <p className="text-sm text-slate-100 leading-relaxed font-normal whitespace-pre-wrap">
                    {currentTweet.text}
                  </p>

                  {/* Character count & tags info */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500">Paylaşım sayısı:</span>
                      <span className="font-mono tabular-nums text-slate-300">
                        {currentTweet.timesPosted} kez
                      </span>
                    </div>

                    <div className="flex items-center gap-1 font-mono tabular-nums">
                      <span
                        className={
                          isOverLimit
                            ? 'text-rose-400 font-bold'
                            : charCount > 250
                            ? 'text-amber-400'
                            : 'text-slate-400'
                        }
                      >
                        {charCount}
                      </span>
                      <span className="text-slate-600">/ 280</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons for Active Tweet */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onShareNow(currentTweet)}
                    className="flex-1 py-2.5 px-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span className="font-bold">𝕏</span>
                    <span>X Üzerinde Paylaş</span>
                  </button>

                  <button
                    onClick={handleCopyText}
                    className="py-2.5 px-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg border border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                    title="Metni panoya kopyala"
                  >
                    <span>{copiedSuccess ? '✓ Kopyalandı' : 'Kopyala'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center text-xs text-slate-500">
                Seçili kriterlere uygun tweet bulunamadı.
              </div>
            )}
          </div>

          {/* Quick Metrics Bar (Tabular Figures) */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Kampanya İstatistikleri
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
                <span className="block text-lg font-mono font-bold text-slate-100 tabular-nums">
                  {stats.totalTweets}
                </span>
                <span className="text-[11px] text-slate-400">Veritabanı</span>
              </div>
              <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
                <span className="block text-lg font-mono font-bold text-sky-400 tabular-nums">
                  {stats.totalPosted}
                </span>
                <span className="text-[11px] text-slate-400">Gönderim</span>
              </div>
              <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
                <span className="block text-lg font-mono font-bold text-emerald-400 tabular-nums">
                  {stats.uniquePostedCount}
                </span>
                <span className="text-[11px] text-slate-400">Özgün Tweet</span>
              </div>
              <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
                <span className="block text-lg font-mono font-bold text-purple-400 tabular-nums">
                  {stats.cycleCount}
                </span>
                <span className="text-[11px] text-slate-400">Tam Tur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
