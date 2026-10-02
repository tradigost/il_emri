import { BotSettings, TweetCategory, TweetItem } from '../types';

export function buildTwitterUrl(text: string, domain: 'x.com' | 'twitter.com' = 'x.com'): string {
  return `https://${domain}/intent/tweet?text=${encodeURIComponent(text)}`;
}

export interface DispatchResult {
  opened: boolean;
  copied: boolean;
  url: string;
}

export async function openTwitterIntent(
  text: string,
  settings: BotSettings
): Promise<DispatchResult> {
  let copied = false;
  let opened = false;

  // 1. Copy to clipboard if enabled
  if (settings.copyToClipboard && typeof navigator !== 'undefined' && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      copied = false;
    }
  }

  // 2. Open URL
  const url = buildTwitterUrl(text, settings.twitterUrlType);

  if (settings.autoOpenTwitter && typeof window !== 'undefined') {
    try {
      const target = settings.openInSameTab ? '_self' : '_blank';
      const newWin = window.open(url, target, 'noopener,noreferrer');
      if (newWin && !newWin.closed) {
        opened = true;
      } else {
        opened = false;
      }
    } catch {
      opened = false;
    }
  }

  return { opened, copied, url };
}

export function selectNextTweet(
  tweets: TweetItem[],
  settings: BotSettings,
  lastTweetId?: number
): { tweet: TweetItem; isNewCycle: boolean } | null {
  if (!tweets || tweets.length === 0) return null;

  // Filter by category if specified
  let pool = tweets;
  if (settings.selectedCategory !== 'all') {
    pool = tweets.filter((t) => t.category === settings.selectedCategory);
    if (pool.length === 0) {
      pool = tweets; // fallback if empty
    }
  }

  let selected: TweetItem | null = null;
  let isNewCycle = false;

  if (settings.mode === 'sequential') {
    // Sequential order by ID
    const sorted = [...pool].sort((a, b) => a.id - b.id);
    if (lastTweetId === undefined) {
      selected = sorted[0];
    } else {
      const currentIndex = sorted.findIndex((t) => t.id === lastTweetId);
      if (currentIndex === -1 || currentIndex >= sorted.length - 1) {
        selected = sorted[0];
        isNewCycle = true;
      } else {
        selected = sorted[currentIndex + 1];
      }
    }
  } else {
    // 'smart_random' or 'category'
    // Prioritize tweets with lowest timesPosted, excluding immediate previous tweet if possible
    const minTimesPosted = Math.min(...pool.map((t) => t.timesPosted));
    let candidates = pool.filter((t) => t.timesPosted === minTimesPosted);

    // If candidate has only the last tweet and others exist in the whole pool, promote next tier
    if (candidates.length === 1 && candidates[0].id === lastTweetId && pool.length > 1) {
      const nextMin = Math.min(...pool.filter((t) => t.id !== lastTweetId).map((t) => t.timesPosted));
      candidates = pool.filter((t) => t.timesPosted === nextMin && t.id !== lastTweetId);
    } else if (candidates.length > 1 && lastTweetId !== undefined) {
      // Exclude last tweet to avoid back-to-back repeats
      const withoutLast = candidates.filter((t) => t.id !== lastTweetId);
      if (withoutLast.length > 0) {
        candidates = withoutLast;
      }
    }

    // Check if we started a new cycle (all posted at least once more)
    if (minTimesPosted > 0 && pool.every((t) => t.timesPosted >= minTimesPosted)) {
      isNewCycle = true;
    }

    const randomIndex = Math.floor(Math.random() * candidates.length);
    selected = candidates[randomIndex];
  }

  return selected ? { tweet: selected, isNewCycle } : null;
}

export const CATEGORY_LABELS: Record<TweetCategory, { title: string; desc: string }> = {
  'Aile Bütünlüğü': {
    title: 'Aile Bütünlüğü',
    desc: 'Eş durumu, parcalanan yuvalar ve birlikte yaşama hakkı'
  },
  'Anayasal Hak': {
    title: 'Anayasal Hak',
    desc: 'Anayasa 41. madde ve aileyi koruma devlet güvencesi'
  },
  'Bakanlığa Çağrı': {
    title: 'Bakanlığa Çağrı',
    desc: 'Milli Eğitim Bakanı Yusuf Tekin ve MEB bürokrasisine doğrudan talep'
  },
  'Çocuklar İçin': {
    title: 'Çocuklar İçin',
    desc: 'Anne ve babasından ayrı kalan çocukların duygusal ve sosyal hakları'
  },
  'Sosyo-Ekonomik': {
    title: 'Sosyo-Ekonomik',
    desc: 'İki ayrı şehir, çift kira, ulaşım külfeti ve hayat pahalılığı'
  },
  'Adil Atama': {
    title: 'Adil Atama',
    desc: 'Mazeret ataması kontenjan yetersizliği ve boş normların değerlendirilmesi'
  }
};
