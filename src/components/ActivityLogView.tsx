import React from 'react';
import { ActivityLog } from '../types';
import { buildTwitterUrl } from '../utils/twitter';

interface ActivityLogViewProps {
  logs: ActivityLog[];
  onClearLogs: () => void;
}

export const ActivityLogView: React.FC<ActivityLogViewProps> = ({
  logs,
  onClearLogs
}) => {
  return (
    <div className="space-y-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
            <span>Operasyon & Paylaşım Günlüğü</span>
            <span className="text-xs font-mono text-sky-400 tabular-nums">
              ({logs.length} kayıt)
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Bot tarafından seçilip X üzerinde açılan veya kopyalanan tweetlerin canlı kaydı.
          </p>
        </div>

        {logs.length > 0 && (
          <button
            onClick={onClearLogs}
            className="text-xs text-rose-400/80 hover:text-rose-300 transition-colors cursor-pointer"
          >
            Günlüğü Temizle
          </button>
        )}
      </div>

      {logs.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center">
          <p className="text-sm text-slate-400">Henüz bir paylaşım kaydı yok.</p>
          <p className="text-xs text-slate-500 mt-1">
            Botu başlattığınızda veya hızlı paylaş butonuna bastığınızda işlemler burada listelenecektir.
          </p>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-xl divide-y divide-slate-800/80 overflow-hidden">
          {logs.map((log) => {
            const url = buildTwitterUrl(log.tweetText);

            return (
              <div
                key={log.id}
                className="p-3.5 sm:p-4 hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="space-y-1 max-w-3xl">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono text-slate-500 tabular-nums">
                      {log.timestamp}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="font-mono text-sky-400 font-medium tabular-nums">
                      Tweet #{log.tweetId}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span
                      className={`font-medium ${
                        log.action === 'auto_dispatched'
                          ? 'text-emerald-400'
                          : log.action === 'opened'
                          ? 'text-sky-400'
                          : 'text-amber-400'
                      }`}
                    >
                      {log.action === 'auto_dispatched'
                        ? 'Otomatik Gönderildi'
                        : log.action === 'opened'
                        ? 'X Açıldı'
                        : 'Panoya Kopyalandı'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                    {log.tweetText}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 px-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded border border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>𝕏 Tekrar Aç</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
