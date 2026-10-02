export type TweetCategory = 
  | 'Aile Bütünlüğü' 
  | 'Anayasal Hak' 
  | 'Bakanlığa Çağrı' 
  | 'Çocuklar İçin' 
  | 'Sosyo-Ekonomik' 
  | 'Adil Atama';

export interface TweetItem {
  id: number;
  text: string;
  category: TweetCategory;
  tags: string[];
  timesPosted: number;
  lastPostedAt?: string;
  isFavorite?: boolean;
}

export type SelectionMode = 'smart_random' | 'sequential' | 'category';

export interface BotSettings {
  mode: SelectionMode;
  intervalSeconds: number;
  selectedCategory: string; // 'all' or specific TweetCategory
  autoOpenTwitter: boolean;
  copyToClipboard: boolean;
  soundNotification: boolean;
  openInSameTab: boolean;
  twitterUrlType: 'x.com' | 'twitter.com';
  loopContinuously: boolean;
}

export type BotStatus = 'idle' | 'running' | 'paused';

export interface ActivityLog {
  id: string;
  timestamp: string;
  tweetId: number;
  tweetText: string;
  action: 'opened' | 'copied' | 'skipped' | 'auto_dispatched';
  status: 'success' | 'warning' | 'info';
  details?: string;
}

export interface BotStats {
  totalTweets: number;
  totalPosted: number;
  uniquePostedCount: number;
  cycleCount: number;
  startTime?: string;
}
