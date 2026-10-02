import React, { useState, useMemo } from 'react';
import { TweetCategory, TweetItem } from '../types';
import { exportTweetsAsJson, exportTweetsAsText } from '../utils/storage';

interface TweetDatabaseTableProps {
  tweets: TweetItem[];
  onShareTweet: (tweet: TweetItem) => void;
  onEditTweet: (tweet: TweetItem) => void;
  onDeleteTweet: (id: number) => void;
  onAddNewTweet: () => void;
  onResetDefaults: () => void;
  onImportTweets: (imported: TweetItem[]) => void;
}

export const TweetDatabaseTable: React.FC<TweetDatabaseTableProps> = ({
  tweets,
  onShareTweet,
  onEditTweet,
  onDeleteTweet,
  onAddNewTweet,
  onResetDefaults,
  onImportTweets
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'id' | 'posted' | 'length'>('id');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredTweets = useMemo(() => {
    return tweets
      .filter((t) => {
        const matchesCategory =
          selectedCategory === 'all' || t.category === selectedCategory;
        const matchesSearch =
          searchQuery.trim() === '' ||
          t.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'id') return a.id - b.id;
        if (sortBy === 'posted') return b.timesPosted - a.timesPosted;
        if (sortBy === 'length') return b.text.length - a.text.length;
        return 0;
      });
  }, [tweets, selectedCategory, searchQuery, sortBy]);

  const handleCopy = async (id: number, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // ignore
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed) && parsed.length > 0) {
          onImportTweets(parsed);
        } else {
          alert('Geçersiz JSON dosyası formatı!');
        }
      } catch {
        alert('Dosya okunamadı. Lütfen geçerli bir JSON tweet dosyası seçin.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const categories: { key: string; label: string }[] = [
    { key: 'all', label: 'Tümü' },
    { key: 'Aile Bütünlüğü', label: 'Aile Bütünlüğü' },
    { key: 'Anayasal Hak', label: 'Anayasal Hak' },
    { key: 'Bakanlığa Çağrı', label: 'Bakanlığa Çağrı' },
    { key: 'Çocuklar Için', label: 'Çocuklar Için' },
    { key: 'Sosyo-Ekonomik', label: 'Sosyo-Ekonomik' },
    { key: 'Adil Atama', label: 'Adil Atama' },
  ];

  return (
    <div className="space-y-5">
      {/* Top Controls Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-slate-100 flex items-center gap-2">
              <span>Il Emri Tweet Veritabani</span>
              <span className="text-xs font-mono text-sky-400 tabular-nums">
                ({filteredTweets.length}/{tweets.length} tweet)
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Tüm tweetler önceden test edilmiş, 280 karakter limitine uygun ve resmi MEB etiketlidir.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center flex-wrap gap-2">
            <button
              onClick={onAddNewTweet}
              className="py-1.5 px-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              + Yeni Tweet Ekle
            </button>

            <button
              onClick={() => exportTweetsAsJson(tweets)}
              className="py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg border border-slate-700 transition-colors cursor-pointer"
              title="Tüm veritabanını JSON olarak indir"
            >
              JSON Indir
            </button>

            <button
              onClick={() => exportTweetsAsText(tweets)}
              className="py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg border border-slate-700 transition-colors cursor-pointer"
              title="Metin dosyası (TXT) olarak indir"
            >
              TXT Indir
            </button>

            <label className="py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg border border-slate-700 transition-colors cursor-pointer">
              <span>Ice Aktar</span>
              <input
                type="file"
                accept=".json"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>

            <button
              onClick={onResetDefaults}
              className="py-1.5 px-3 bg-slate-800 hover:bg-rose-900/40 text-rose-300 text-xs rounded-lg border border-slate-700 transition-colors cursor-pointer"
              title="Varsayılan 100 tweeti sıfırlayıp geri yükler"
            >
              Varsayilan 100 Tweeti Yukle
            </button>
          </div>
        </div>

        {/* Search, Filter & Sort */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2 border-t border-slate-800/80 items-center">
          {/* Search Input (5 cols) */}
          <div className="md:col-span-5">
            <input
              type="text"
              placeholder="Tweet metni veya etiket ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-400"
            />
          </div>

          {/* Category Tabs (4 cols) */}
          <div className="md:col-span-5 flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setSelectedCategory(c.key)}
                className={`py-1 px-2.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === c.key
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                    : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Sort Selector (2 cols) */}
          <div className="md:col-span-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'id' | 'posted' | 'length')}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-sky-400"
            >
              <option value="id">Sıra No (1-50)</option>
              <option value="posted">En Çok Paylaşılan</option>
              <option value="length">Karakter Uzunluğu</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tweet List Container */}
      <div className="space-y-3">
        {filteredTweets.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center">
            <p className="text-sm text-slate-400">Aramanıza uygun tweet bulunamadı.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-sky-400 hover:underline cursor-pointer"
            >
              Filtreleri Temizle
            </button>
          </div>
        ) : (
          filteredTweets.map((tweet) => {
            const charCount = tweet.text.length;
            const isCopied = copiedId === tweet.id;

            return (
              <div
                key={tweet.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-4 sm:p-5 transition-colors space-y-3"
              >
                {/* Header row: ID, Category, Posted count, actions */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-semibold text-sky-400 tabular-nums">
                      #{tweet.id}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-300 font-medium">
                      {tweet.category}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="font-mono text-slate-400 tabular-nums">
                      {charCount} krktr
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-mono text-[11px] tabular-nums">
                      {tweet.timesPosted > 0 ? `${tweet.timesPosted}x paylaşıldı` : 'Henüz paylaşılmadı'}
                    </span>
                  </div>
                </div>

                {/* Tweet text */}
                <p className="text-sm text-slate-100 leading-relaxed font-normal">
                  {tweet.text}
                </p>

                {/* Bottom actions */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onShareTweet(tweet)}
                      className="py-1 px-3 bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="font-bold">𝕏</span>
                      <span>X&apos;te Aç & Paylaş</span>
                    </button>

                    <button
                      onClick={() => handleCopy(tweet.id, tweet.text)}
                      className="py-1 px-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-md border border-slate-700 transition-colors cursor-pointer"
                    >
                      {isCopied ? '✓ Kopyalandı' : 'Kopyala'}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEditTweet(tweet)}
                      className="text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer px-2 py-1"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => onDeleteTweet(tweet.id)}
                      className="text-xs text-rose-400/80 hover:text-rose-300 transition-colors cursor-pointer px-2 py-1"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
