import React, { useState } from 'react';

interface AutoPosterHelperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AutoPosterHelperModal: React.FC<AutoPosterHelperModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const userscriptCode = `// ==UserScript==
// @name         X (Twitter) Otomatik Tweet Gonderici
// @namespace    https://il-emri-bot.local/
// @version      1.0
// @description  Acilan tweet sekmesinde Gonder butonuna otomatik basar ve sekmeyi kapatir
// @match        https://x.com/intent/tweet*
// @match        https://x.com/intent/post*
// @match        https://twitter.com/intent/tweet*
// @grant        window.close
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    // X guvenligi icin insan ritminde 1.8 saniye bekle
    setTimeout(() => {
        const findAndClickPostButton = () => {
            const btn = document.querySelector('[data-testid="tweetButton"]') ||
                        document.querySelector('[data-testid="tweetButtonInline"]') ||
                        document.querySelector('button[role="button"][data-testid*="tweet"]');
            if (btn && !btn.disabled) {
                btn.click();
                // Gonderildikten 1.5 saniye sonra sekmeyi otomatik kapat
                setTimeout(() => {
                    try { window.close(); } catch(e) {}
                }, 1500);
                return true;
            }
            return false;
        };

        if (!findAndClickPostButton()) {
            // Buton gec yuklenirse 1 saniye sonra tekrar dene
            setTimeout(findAndClickPostButton, 1000);
        }
    }, 1800);
})();`;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(userscriptCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xs">
      <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-2xl w-full p-5 sm:p-6 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🤖</span>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                Tam Otomatik Gönderim Kurulumu (Hands-Free)
              </h3>
              <p className="text-xs text-slate-400">
                Sekme açıldığında &quot;Gönder&quot; butonuna basmadan tam otomatik paylaşım yapma yöntemi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-lg leading-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Info banner */}
        <div className="bg-sky-950/40 border border-sky-900/60 rounded-lg p-3.5 text-xs text-sky-200 leading-relaxed space-y-1">
          <span className="font-semibold text-sky-300 block">
            Neden Web Siteleri Doğrudan X Butonuna Tıklayamaz?
          </span>
          <p className="text-slate-300 text-[11px]">
            İnternet tarayıcılarının güvenlik duvarı (Same-Origin Policy), bir web sitesinin başka bir web sitesi (x.com) içindeki butonlara sizin yerinize gizlice tıklamasına izin vermez.
            Ancak tarayıcınıza ekleyeceğiniz **1 dakikalık ücretsiz bir eklenti (Tampermonkey)** ile bu süreci **%100 el değmeden otomatik** hale getirebilirsiniz!
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 text-xs text-slate-300">
          <div className="space-y-2">
            <span className="font-semibold text-slate-100 text-xs flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold text-[11px]">1</span>
              <span>Tampermonkey Eklentisini Yükleyin (Ücretsiz)</span>
            </span>
            <p className="text-slate-400 text-[11px] pl-6.5">
              Google Chrome, Microsoft Edge, Opera veya Brave mağazasından <strong className="text-slate-200">Tampermonkey</strong> (veya Violentmonkey) eklentisini tarayıcınıza ekleyin.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-semibold text-slate-100 text-xs flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold text-[11px]">2</span>
              <span>Aşağıdaki Hazır Betiği Ekleyin</span>
            </span>
            <p className="text-slate-400 text-[11px] pl-6.5">
              Eklenti simgesine tıklayıp <em>&quot;Yeni betik ekle&quot;</em> deyin ve aşağıdaki hazır kodu yapıştırıp <strong>Kaydet (Ctrl+S)</strong> yapın:
            </p>

            {/* Code block */}
            <div className="relative pl-6.5">
              <pre className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-[11px] font-mono text-slate-300 overflow-x-auto max-h-48 leading-relaxed">
                {userscriptCode}
              </pre>
              <button
                onClick={handleCopyCode}
                className="absolute top-2 right-2 py-1.5 px-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs rounded shadow transition-colors cursor-pointer"
              >
                {copied ? '✓ Kopyalandı!' : 'Kodu Kopyala'}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <span className="font-semibold text-slate-100 text-xs flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold text-[11px]">3</span>
              <span>Botu Başlatın ve Arkanıza Yaslanın</span>
            </span>
            <p className="text-slate-400 text-[11px] pl-6.5">
              Artık botumuz her 30 saniyede bir yeni tweet sekmesi açtığında, bu betik 1.8 saniye bekleyip &quot;Gönder&quot; butonuna basacak ve sekmeyi kendiliğinden kapatacaktır. Siz fareye bile dokunmadan tüm tweetler sırayla gönderilir!
            </p>
          </div>
        </div>

        {/* Alternative: Keyboard shortcut */}
        <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-400 flex items-start gap-2.5">
          <span className="text-amber-400 text-base">⚡</span>
          <div>
            <strong className="text-slate-200">Eklenti Kurmak İstemeyenler İçin Kısayol:</strong>
            <p className="text-[11px] mt-0.5">
              Sekme açıldığında klavyenizden <strong className="text-sky-300">Ctrl + Enter</strong> tuşuna basıp hemen ardından <strong className="text-sky-300">Ctrl + W</strong> ile sekmeyi kapatabilirsiniz (1 saniye sürer).
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
          <span className="text-[11px] text-slate-500">
            Hesap güvenliği için 1.8 saniyelik doğal bekleme süresi uygulanır.
          </span>
          <button
            onClick={onClose}
            className="py-1.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-lg transition-colors cursor-pointer"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
