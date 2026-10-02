/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ActivityLog, BotSettings, BotStats, BotStatus, TweetCategory, TweetItem } from './types';
import {
  loadTweetsFromStorage,
  saveTweetsToStorage,
  resetTweetsToDefault,
  loadSettingsFromStorage,
  saveSettingsToStorage,
  loadLogsFromStorage,
  saveLogsToStorage
} from './utils/storage';
import { openTwitterIntent, selectNextTweet, formatTweetWithCycleEmoji } from './utils/twitter';
import { soundEffects } from './utils/audio';
import { Header } from './components/Header';
import { BotControlPanel } from './components/BotControlPanel';
import { TweetDatabaseTable } from './components/TweetDatabaseTable';
import { ActivityLogView } from './components/ActivityLogView';
import { TweetComposerModal } from './components/TweetComposerModal';
import { PopupPermissionHelper } from './components/PopupPermissionHelper';
import { CampaignGuide } from './components/CampaignGuide';

export default function App() {
  const [tweets, setTweets] = useState<TweetItem[]>(() => loadTweetsFromStorage());
  const [settings, setSettings] = useState<BotSettings>(() => loadSettingsFromStorage());
  const [logs, setLogs] = useState<ActivityLog[]>(() => loadLogsFromStorage());

  const [activeTab, setActiveTab] = useState<'cockpit' | 'database' | 'logs' | 'guide'>('cockpit');
  const [botStatus, setBotStatus] = useState<BotStatus>('idle');
  const [secondsRemaining, setSecondsRemaining] = useState<number>(settings.intervalSeconds);
  const [currentTweet, setCurrentTweet] = useState<TweetItem | null>(null);

  // Modals
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [editingTweet, setEditingTweet] = useState<TweetItem | null>(null);
  const [isPopupGuideOpen, setIsPopupGuideOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const timerRef = useRef<number | null>(null);

  // Initialize current tweet if not set
  useEffect(() => {
    if (!currentTweet && tweets.length > 0) {
      const next = selectNextTweet(tweets, settings);
      if (next) {
        setCurrentTweet(next.tweet);
      }
    }
  }, [tweets, settings, currentTweet]);

  // Compute stats
  const stats: BotStats = {
    totalTweets: tweets.length,
    totalPosted: tweets.reduce((acc, t) => acc + t.timesPosted, 0),
    uniquePostedCount: tweets.filter((t) => t.timesPosted > 0).length,
    cycleCount: tweets.length > 0 ? Math.min(...tweets.map((t) => t.timesPosted)) : 0,
  };

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  }, []);

  // Dispatch a tweet (opens Twitter, logs, updates counter)
  const dispatchTweet = useCallback(
    async (tweetToPost: TweetItem, isAutomated = false) => {
      if (!tweetToPost) return;

      if (settings.soundNotification) {
        soundEffects.playChime();
      }

      const formattedText = formatTweetWithCycleEmoji(
        tweetToPost.text,
        stats.totalPosted,
        settings.appendCycleEmoji
      );

      const result = await openTwitterIntent(formattedText, settings);

      // Update tweet record
      const updatedTweets = tweets.map((t) => {
        if (t.id === tweetToPost.id) {
          return {
            ...t,
            timesPosted: t.timesPosted + 1,
            lastPostedAt: new Date().toISOString()
          };
        }
        return t;
      });
      setTweets(updatedTweets);
      saveTweetsToStorage(updatedTweets);

      // Create log entry
      const now = new Date();
      const timeStr = now.toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const newLog: ActivityLog = {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        timestamp: timeStr,
        tweetId: tweetToPost.id,
        tweetText: formattedText,
        action: isAutomated ? 'auto_dispatched' : 'opened',
        status: result.opened ? 'success' : 'warning',
        details: result.copied ? 'Panoya kopyalandı & X sekmesi açıldı' : 'X sekmesi açıldı'
      };

      const updatedLogs = [newLog, ...logs];
      setLogs(updatedLogs);
      saveLogsToStorage(updatedLogs);

      if (result.opened) {
        showToast(`Tweet #${tweetToPost.id} için X açıldı!`);
      } else if (result.copied) {
        showToast(`Tweet #${tweetToPost.id} panoya kopyalandı!`);
      }
    },
    [tweets, settings, logs, stats.totalPosted, showToast]
  );

  // Advance to next tweet and pick it
  const advanceToNextTweet = useCallback(
    (afterDispatch = false) => {
      const nextResult = selectNextTweet(tweets, settings, currentTweet?.id);
      if (nextResult) {
        setCurrentTweet(nextResult.tweet);
        if (nextResult.isNewCycle && afterDispatch) {
          showToast('Tüm 50 tweetlik döngü tamamlandı! Baştan başlatılıyor.');
        }
      }
    },
    [tweets, settings, currentTweet, showToast]
  );

  // Manual trigger: shares current tweet and immediately picks next
  const handleNextTweetAndShare = useCallback(() => {
    if (!currentTweet) return;
    dispatchTweet(currentTweet, false);
    advanceToNextTweet(true);
    setSecondsRemaining(settings.intervalSeconds);
  }, [currentTweet, dispatchTweet, advanceToNextTweet, settings.intervalSeconds]);

  // Main automated ticker loop
  useEffect(() => {
    if (botStatus !== 'running') {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = window.setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          // Fire tweet!
          if (currentTweet) {
            dispatchTweet(currentTweet, true);
            advanceToNextTweet(true);
          }
          return settings.intervalSeconds;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [botStatus, currentTweet, settings.intervalSeconds, dispatchTweet, advanceToNextTweet]);

  // Keyboard shortcut: Spacebar triggers next tweet if not in input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.code === 'Space' &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement) &&
        !(e.target instanceof HTMLSelectElement)
      ) {
        e.preventDefault();
        handleNextTweetAndShare();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextTweetAndShare]);

  // Controls
  const handleStartBot = () => {
    setBotStatus('running');
    setSecondsRemaining(settings.intervalSeconds);
    if (settings.soundNotification) {
      soundEffects.playSuccess();
    }
    showToast('Bot başlatıldı! Otomatik paylaşımlar başladı.');
  };

  const handlePauseBot = () => {
    setBotStatus('paused');
    showToast('Bot duraklatıldı.');
  };

  const handleStopBot = () => {
    setBotStatus('idle');
    setSecondsRemaining(settings.intervalSeconds);
    showToast('Bot durduruldu.');
  };

  const handleUpdateSettings = (newSettings: Partial<BotSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    saveSettingsToStorage(updated);
    if (newSettings.intervalSeconds) {
      setSecondsRemaining(newSettings.intervalSeconds);
    }
  };

  // Database actions
  const handleResetDefaults = () => {
    if (window.confirm('Tüm tweetler varsayılan 50 özgün il emri tweeti ile sıfırlansın mı?')) {
      const reset = resetTweetsToDefault();
      setTweets(reset);
      setCurrentTweet(reset[0]);
      showToast('Varsayılan 50 tweet veritabanına geri yüklendi.');
    }
  };

  const handleDeleteTweet = (id: number) => {
    if (window.confirm(`Tweet #${id} veritabanından silinsin mi?`)) {
      const updated = tweets.filter((t) => t.id !== id);
      setTweets(updated);
      saveTweetsToStorage(updated);
      if (currentTweet?.id === id) {
        setCurrentTweet(updated[0] || null);
      }
      showToast(`Tweet #${id} silindi.`);
    }
  };

  const handleEditTweet = (tweet: TweetItem) => {
    setEditingTweet(tweet);
    setIsComposerOpen(true);
  };

  const handleAddNewTweet = () => {
    setEditingTweet(null);
    setIsComposerOpen(true);
  };

  const handleSaveComposer = (data: { text: string; category: TweetCategory; tags: string[] }) => {
    if (editingTweet) {
      // update
      const updated = tweets.map((t) =>
        t.id === editingTweet.id
          ? { ...t, text: data.text, category: data.category, tags: data.tags }
          : t
      );
      setTweets(updated);
      saveTweetsToStorage(updated);
      if (currentTweet?.id === editingTweet.id) {
        setCurrentTweet({
          ...currentTweet,
          text: data.text,
          category: data.category,
          tags: data.tags
        });
      }
      showToast(`Tweet #${editingTweet.id} güncellendi.`);
    } else {
      // create new
      const nextId = tweets.length > 0 ? Math.max(...tweets.map((t) => t.id)) + 1 : 1;
      const newTweet: TweetItem = {
        id: nextId,
        text: data.text,
        category: data.category,
        tags: data.tags,
        timesPosted: 0,
      };
      const updated = [...tweets, newTweet];
      setTweets(updated);
      saveTweetsToStorage(updated);
      showToast(`Yeni tweet #${nextId} veritabanına eklendi.`);
    }
  };

  const handleImportTweets = (imported: TweetItem[]) => {
    setTweets(imported);
    saveTweetsToStorage(imported);
    setCurrentTweet(imported[0] || null);
    showToast(`${imported.length} tweet başarıyla içe aktarıldı!`);
  };

  const handleClearLogs = () => {
    if (window.confirm('Tüm işlem günlüğü temizlensin mi?')) {
      setLogs([]);
      saveLogsToStorage([]);
      showToast('Günlük temizlendi.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-slate-950">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        botStatus={botStatus}
        totalTweets={tweets.length}
        totalPosted={stats.totalPosted}
        onQuickShare={handleNextTweetAndShare}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {activeTab === 'cockpit' && (
          <BotControlPanel
            botStatus={botStatus}
            currentTweet={currentTweet}
            settings={settings}
            stats={stats}
            secondsRemaining={secondsRemaining}
            onStartBot={handleStartBot}
            onPauseBot={handlePauseBot}
            onStopBot={handleStopBot}
            onNextTweet={handleNextTweetAndShare}
            onUpdateSettings={handleUpdateSettings}
            onShareNow={(tweet) => dispatchTweet(tweet, false)}
            onOpenPopupGuide={() => setIsPopupGuideOpen(true)}
          />
        )}

        {activeTab === 'database' && (
          <TweetDatabaseTable
            tweets={tweets}
            onShareTweet={(tweet) => dispatchTweet(tweet, false)}
            onEditTweet={handleEditTweet}
            onDeleteTweet={handleDeleteTweet}
            onAddNewTweet={handleAddNewTweet}
            onResetDefaults={handleResetDefaults}
            onImportTweets={handleImportTweets}
          />
        )}

        {activeTab === 'logs' && (
          <ActivityLogView logs={logs} onClearLogs={handleClearLogs} />
        )}

        {activeTab === 'guide' && <CampaignGuide />}
      </main>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-sky-500/40 text-sky-200 px-4 py-2.5 rounded-lg shadow-xl text-xs font-medium flex items-center gap-2 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span>Ogretmenler Icin Il Emri Otomasyon Botu</span>
            <span className="mx-2">·</span>
            <span>Aile Bütünlüğü Anayasal Haktır</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>100 Ozgun Tweet Veritabani</span>
            <span>·</span>
            <span>Doğrudan X Web Intent Entegrasyonu</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TweetComposerModal
        isOpen={isComposerOpen}
        onClose={() => setIsComposerOpen(false)}
        onSave={handleSaveComposer}
        initialData={editingTweet}
      />

      <PopupPermissionHelper
        isOpen={isPopupGuideOpen}
        onClose={() => setIsPopupGuideOpen(false)}
      />
    </div>
  );
}
