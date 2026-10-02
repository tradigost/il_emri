import React, { useState } from 'react';

interface PopupPermissionHelperProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PopupPermissionHelper: React.FC<PopupPermissionHelperProps> = ({
  isOpen,
  onClose,
}) => {
  const [testResult, setTestResult] = useState<'success' | 'blocked' | null>(null);

  if (!isOpen) return null;

  const handleTestPopup = () => {
    try {
      const testWindow = window.open('about:blank', '_blank', 'width=200,height=200');
      if (!testWindow || testWindow.closed || typeof testWindow.closed === 'undefined') {
        setTestResult('blocked');
      } else {
        testWindow.close();
        setTestResult('success');
      }
    } catch {
      setTestResult('blocked');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xs">
      <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-lg w-full p-5 sm:p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
            <span>Tarayıcı Açılır Pencere (Popup) İzni</span>
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-lg leading-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>
            Modern internet tarayıcıları (Chrome, Safari, Edge), zamanlayıcı ile
            arka planda otomatik yeni sekme açılmasını varsayılan olarak engelleyebilir.
            Botun sorunsuz yeni X sekmesi açabilmesi için izin vermeniz önerilir.
          </p>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 space-y-2">
            <span className="font-semibold text-sky-400 block">
              Nasıl İzin Verilir?
            </span>
            <ol className="list-decimal list-inside space-y-1.5 text-slate-400 text-[11px]">
              <li>Tarayıcınızın adres çubuğunun sağ tarafındaki (veya kilit simgesindeki) açılır pencere simgesine tıklayın.</li>
              <li><strong className="text-slate-200">&quot;Bu site için her zaman izin ver&quot;</strong> seçeneğini işaretleyin.</li>
              <li>Bitti düğmesine basıp sayfayı yenilemeden teste devam edebilirsiniz.</li>
            </ol>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={handleTestPopup}
              className="py-2 px-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-colors font-medium cursor-pointer"
            >
              Açılır Pencere İznini Test Et
            </button>

            {testResult === 'success' && (
              <span className="text-emerald-400 font-medium">✓ İzin açık! Sekmeler sorunsuz açılacak.</span>
            )}
            {testResult === 'blocked' && (
              <span className="text-amber-400 font-medium">⚠ Engellendi! Adres çubuğundan izin verin.</span>
            )}
          </div>

          <p className="text-[11px] text-slate-500 italic pt-1">
            Not: İzin vermek istemiyorsanız klavyenizden <strong className="text-slate-400">Space (Boşluk)</strong> tuşuna basarak her seferinde sıradaki tweeti doğrudan açabilirsiniz.
          </p>
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="py-1.5 px-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            Anladım, Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
