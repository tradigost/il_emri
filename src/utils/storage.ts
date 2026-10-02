import { INITIAL_50_TWEETS } from '../data/tweets';
import { ActivityLog, BotSettings, BotStats, TweetItem } from '../types';

const STORAGE_KEYS = {
  TWEETS: 'ogretmen_il_emri_tweets_v1',
  SETTINGS: 'ogretmen_il_emri_settings_v1',
  STATS: 'ogretmen_il_emri_stats_v1',
  LOGS: 'ogretmen_il_emri_logs_v1',
};

export const DEFAULT_SETTINGS: BotSettings = {
  mode: 'smart_random',
  intervalSeconds: 30,
  selectedCategory: 'all',
  autoOpenTwitter: true,
  copyToClipboard: true,
  soundNotification: true,
  openInSameTab: false,
  twitterUrlType: 'x.com',
  loopContinuously: true,
};

export const DEFAULT_STATS: BotStats = {
  totalTweets: 50,
  totalPosted: 0,
  uniquePostedCount: 0,
  cycleCount: 0,
};

export function loadTweetsFromStorage(): TweetItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.TWEETS);
    if (!raw) {
      saveTweetsToStorage(INITIAL_50_TWEETS);
      return INITIAL_50_TWEETS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_50_TWEETS;
  } catch {
    return INITIAL_50_TWEETS;
  }
}

export function saveTweetsToStorage(tweets: TweetItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.TWEETS, JSON.stringify(tweets));
  } catch (err) {
    console.error('Failed to save tweets to localStorage', err);
  }
}

export function resetTweetsToDefault(): TweetItem[] {
  saveTweetsToStorage(INITIAL_50_TWEETS);
  return INITIAL_50_TWEETS;
}

export function loadSettingsFromStorage(): BotSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettingsToStorage(settings: BotSettings): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (err) {
    console.error('Failed to save settings', err);
  }
}

export function loadLogsFromStorage(): ActivityLog[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LOGS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveLogsToStorage(logs: ActivityLog[]): void {
  try {
    // Keep max 200 logs to avoid localStorage overflow
    const trimmed = logs.slice(0, 200);
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(trimmed));
  } catch (err) {
    console.error('Failed to save logs', err);
  }
}

export function exportTweetsAsJson(tweets: TweetItem[]): void {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(tweets, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `ogretmen-il-emri-tweet-veritabani-${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function exportTweetsAsText(tweets: TweetItem[]): void {
  const textContent = tweets.map((t, idx) => `[Tweet ${idx + 1}] (${t.category})\n${t.text}\n-----------------------`).join('\n\n');
  const dataStr = 'data:text/plain;charset=utf-8,' + encodeURIComponent(textContent);
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `ogretmen-il-emri-tweetler-${new Date().toISOString().slice(0, 10)}.txt`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}
