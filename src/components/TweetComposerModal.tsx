import React, { useState, useEffect } from 'react';
import { TweetCategory, TweetItem } from '../types';

interface TweetComposerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (tweet: { text: string; category: TweetCategory; tags: string[] }) => void;
  initialData?: TweetItem | null;
}

const COMMON_TAGS = [
  '#ÖğretmeneİlEmri',
  '#İlEmriHaktır',
  '#AilelerBirleşsin',
  '#MebİlEmriVer',
  '@tcmeb',
  '@Yusuf__Tekin',
  '@RTErdogan',
  '#AnayasaMadde41'
];

export const TweetComposerModal: React.FC<TweetComposerModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData
}) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState<TweetCategory>('Aile Bütünlüğü');

  useEffect(() => {
    if (initialData) {
      setText(initialData.text);
      setCategory(initialData.category);
    } else {
      setText('');
      setCategory('Aile Bütünlüğü');
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const charCount = text.length;
  const isOverLimit = charCount > 280;

  const handleAddTag = (tag: string) => {
    if (text.includes(tag)) return;
    const newText = text.trim() ? `${text} ${tag}` : tag;
    setText(newText);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || isOverLimit) return;

    // extract hashtags
    const foundTags = text.match(/#[\wığüşöçİĞÜŞÖÇ]+/gi) || [];

    onSave({
      text: text.trim(),
      category,
      tags: foundTags
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-lg w-full p-5 sm:p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-sm font-semibold text-slate-100">
            {initialData ? `Tweet #${initialData.id} Düzenle` : 'Yeni İl Emri Tweeti Ekle'}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-lg leading-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">
              Tweet Kategorisi
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as TweetCategory)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-400"
            >
              <option value="Aile Bütünlüğü">Aile Bütünlüğü</option>
              <option value="Anayasal Hak">Anayasal Hak</option>
              <option value="Bakanlığa Çağrı">Bakanlığa Çağrı</option>
              <option value="Çocuklar İçin">Çocuklar İçin</option>
              <option value="Sosyo-Ekonomik">Sosyo-Ekonomik</option>
              <option value="Adil Atama">Adil Atama</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-medium text-slate-400">
                Tweet Metni
              </label>
              <span
                className={`text-xs font-mono tabular-nums ${
                  isOverLimit
                    ? 'text-rose-400 font-bold'
                    : charCount > 250
                    ? 'text-amber-400'
                    : 'text-slate-500'
                }`}
              >
                {charCount} / 280
              </span>
            </div>
            <textarea
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Öğretmenler için il emri talebinizi yazın... (@tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri)"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 resize-none"
              required
            />
          </div>

          {/* Quick Tags Suggestions */}
          <div>
            <span className="block text-[11px] text-slate-500 mb-1.5">
              Hızlı Etiket Ekle:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {COMMON_TAGS.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => handleAddTag(tag)}
                  className="text-[11px] font-mono py-1 px-2 rounded bg-slate-800 text-slate-300 hover:text-sky-300 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-3 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              Vazgeç
            </button>
            <button
              type="submit"
              disabled={!text.trim() || isOverLimit}
              className="py-2 px-4 bg-sky-400 hover:bg-sky-300 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              {initialData ? 'Değişiklikleri Kaydet' : 'Veritabanına Ekle'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
