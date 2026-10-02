import React from 'react';

export const CampaignGuide: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
        <h2 className="text-base font-semibold text-slate-100 flex items-center gap-2">
          <span>Ogretmen Il Emri X (Twitter) Kampanya Rehberi</span>
        </h2>
        <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
          Sosyal medyada ses getirmek, Trending Topics (Gündem) listesine girmek ve
          Bakanlık bürokrasisinin dikkatini çekmek için izlenmesi gereken stratejiler.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Spam Önleme ve Güvenli Aralıklar */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <h3 className="text-sm font-semibold text-sky-400">
            1. Spam ve Hesap Kısıtlamasından Korunma
          </h3>
          <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">·</span>
              <span>
                <strong>Aynı tweeti art arda atmayın:</strong> X algoritması birebir kopyalanan metinleri &quot;kopya içerik&quot; (duplicate) olarak algılayıp kısıtlayabilir. Bu sebeple botumuz <strong>100 farklı özgün metin</strong> arasında rotasyon yapar ve her 50 paylaşımda bir tweet sonuna farklı emoji ekler.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">·</span>
              <span>
                <strong>Ideal zaman aralığı:</strong> Tek bir hesaptan peş peşe tweet atarken en az <strong>30 saniye ile 2 dakika</strong> arasında bekleme aralığı önerilir.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">·</span>
              <span>
                <strong>Metin çeşitliliği:</strong> Farklı kategorilerden (Anayasa 41, çocuk mağduriyeti, ekonomik külfet) tweetler seçerek çeşitliliği koruyun.
              </span>
            </li>
          </ul>
        </div>

        {/* Card 2: En Etkili Saatler */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <h3 className="text-sm font-semibold text-sky-400">
            2. En Etkili Paylaşım Saatleri
          </h3>
          <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">·</span>
              <span>
                <strong>Akşam Prime Time (20:00 - 22:30):</strong> Sendikaların, öğretmen topluluklarının ve haber bültenlerinin en aktif olduğu saat aralığıdır. TT olma şansı en yüksektir.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">·</span>
              <span>
                <strong>Sabah Mesai Başlangıcı (08:30 - 10:00):</strong> MEB bürokratlarının ve danışmanların basını ve sosyal medyayı taradığı saatlerdir.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">·</span>
              <span>
                <strong>Hafta Başı (Pazartesi & Salı):</strong> Kabine toplantısı ve Bakanlık görüşmelerinin yoğunlaştığı günlerde talep daha hızlı gündeme alınır.
              </span>
            </li>
          </ul>
        </div>

        {/* Card 3: Resmi Etiketler */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <h3 className="text-sm font-semibold text-sky-400">
            3. Doğru Hesapları Etiketleme
          </h3>
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="bg-slate-950 p-2.5 rounded border border-slate-800 space-y-1">
              <span className="font-mono text-sky-300">@Yusuf__Tekin</span>
              <p className="text-[11px] text-slate-400">Milli Eğitim Bakanı (Karar verici makam)</p>
            </div>
            <div className="bg-slate-950 p-2.5 rounded border border-slate-800 space-y-1">
              <span className="font-mono text-sky-300">@tcmeb</span>
              <p className="text-[11px] text-slate-400">Milli Eğitim Bakanlığı Resmi Hesabı</p>
            </div>
            <div className="bg-slate-950 p-2.5 rounded border border-slate-800 space-y-1">
              <span className="font-mono text-sky-300">@RTErdogan & @iletisim</span>
              <p className="text-[11px] text-slate-400">Cumhurbaşkanlığı ve Iletisim Başkanlığı</p>
            </div>
          </div>
        </div>

        {/* Card 4: Etkiyi Artırma Taktikleri */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <h3 className="text-sm font-semibold text-sky-400">
            4. Etkileşimi ve TT Etkisini Artırma
          </h3>
          <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">·</span>
              <span>
                <strong>Retweet ve Alıntı:</strong> Meslektaşlarınızın attığı tweetleri de RT ve Beğeni ile destekleyerek algoritmanın konuyu öne çıkarmasını sağlayın.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">·</span>
              <span>
                <strong>Görsel Kullanımı:</strong> X üzerinde paylaştığınız ekranda aile birliği karikatürleri veya sendika açıklaması görselleri eklemek okunurluğu 3 kat artırır.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">·</span>
              <span>
                <strong>Nezaket ve Kararlılık:</strong> Haklı talebimizi Anayasa 41 ve kamu yararı zemininde, yapıcı ve ısrarlı bir dille ifade etmek her zaman en iyi sonucu verir.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
