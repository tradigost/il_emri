export interface TweetItem {
  id: number;
  text: string;
  category: 'Aile Bütünlüğü' | 'Anayasal Hak' | 'Bakanlığa Çağrı' | 'Çocuklar İçin' | 'Sosyo-Ekonomik' | 'Adil Atama';
  tags: string[];
  timesPosted: number;
  lastPostedAt?: string;
  isFavorite?: boolean;
}

export const INITIAL_50_TWEETS: TweetItem[] = [
  {
    id: 1,
    text: "Aile birliği Anayasamızın 41. maddesi ile güvence altındadır. Parçalanmış aileler değil, bir arada huzurla çalışan öğretmenler istiyoruz! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #İlEmriHaktır",
    category: "Anayasal Hak",
    tags: ["#ÖğretmeneİlEmri", "#İlEmriHaktır"],
    timesPosted: 0
  },
  {
    id: 2,
    text: "Eşi bir şehirde, kendisi başka bir şehirde görev yapan binlerce öğretmen çalınmadık kapı bırakmadı. Tek çözüm şartsız İL EMRİ! @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #AilelerBirleşsin",
    category: "Aile Bütünlüğü",
    tags: ["#ÖğretmeneİlEmri", "#AilelerBirleşsin"],
    timesPosted: 0
  },
  {
    id: 3,
    text: "Çocuklarımız anne veya babasından ayrı büyümesin! Aile bütünlüğü ertelenemez bir haktır. Sayın Bakanım sesimizi duyun: @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #MebİlEmriVer",
    category: "Çocuklar İçin",
    tags: ["#ÖğretmeneİlEmri", "#MebİlEmriVer"],
    timesPosted: 0
  },
  {
    id: 4,
    text: "İki ayrı ev kirası, iki ayrı fatura ve yollarda geçen ömürler... Öğretmenler maddi ve manevi olarak tükendi. Çözüm masada: İL EMRİ! @tcmeb @Yusuf__Tekin @RTErdogan #ÖğretmeneİlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 5,
    text: "Öğretmenin aklı eşinde ve çocuğunda kalırsa sınıftaki verimi nasıl tam olabilir? Güçlü eğitim güçlü aileyle başlar! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #EğitimdeAileBirliği",
    category: "Aile Bütünlüğü",
    tags: ["#ÖğretmeneİlEmri", "#EğitimdeAileBirliği"],
    timesPosted: 0
  },
  {
    id: 6,
    text: "Yıllardır uygulanan ve yüzleri güldüren il emri uygulaması bu dönem de gecikmeden hayata geçirilmelidir. Mağduriyetler son bulsun! @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #İlEmriMüjdesi",
    category: "Bakanlığa Çağrı",
    tags: ["#ÖğretmeneİlEmri", "#İlEmriMüjdesi"],
    timesPosted: 0
  },
  {
    id: 7,
    text: "Devlet memurunun en temel hakkı olan aile birliği mazereti ötelenemez. Sayın Cumhurbaşkanımız @RTErdogan ve @Yusuf__Tekin'den il emri bekliyoruz. #ÖğretmeneİlEmri #İlEmriHaktır",
    category: "Anayasal Hak",
    tags: ["#ÖğretmeneİlEmri", "#İlEmriHaktır"],
    timesPosted: 0
  },
  {
    id: 8,
    text: "Kilometrelerce uzaktaki eşine yetişmeye çalışırken kaza yapan, hayatını kaybeden meslektaşlarımızı unutmadık. Yollar değil aileler birleşsin! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 9,
    text: "Bir anneye çocuğunu, bir öğretmene ailesini çok görmeyin. İl emri lütuf değil, anayasal bir zorunluluktur. @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #AilelerKavuşsun",
    category: "Çocuklar İçin",
    tags: ["#ÖğretmeneİlEmri", "#AilelerKavuşsun"],
    timesPosted: 0
  },
  {
    id: 10,
    text: "Mazeret atamalarında kontenjan yetersizliği yüzünden binlerce öğretmen açıkta kaldı. Bu düğümü yalnızca İL EMRİ çözer! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #MazeretAtaması",
    category: "Adil Atama",
    tags: ["#ÖğretmeneİlEmri", "#MazeretAtaması"],
    timesPosted: 0
  },
  {
    id: 11,
    text: "Boş kalan normlar ve mağdur olan öğretmenler... Bakanlığımızın bünyesinde il emri verebilecek imkan her zaman vardır. @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #İlEmriBekliyoruz",
    category: "Adil Atama",
    tags: ["#ÖğretmeneİlEmri", "#İlEmriBekliyoruz"],
    timesPosted: 0
  },
  {
    id: 12,
    text: "Gözü yaşlı çocukların, hasret çeken eşlerin sesine kulak verin. Eğitim camiası il emri müjdesini sabırsızlıkla bekliyor. @Yusuf__Tekin @tcmeb @iletisim #ÖğretmeneİlEmri",
    category: "Çocuklar İçin",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 13,
    text: "Öğretmen milletin geleceğini inşa eder; ailesi dağılmış bir öğretmenden geleceğe ışık tutmasını bekleyemezsiniz. İl emri şarttır! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #ÖğretmenlerBirleşsin",
    category: "Aile Bütünlüğü",
    tags: ["#ÖğretmeneİlEmri", "#ÖğretmenlerBirleşsin"],
    timesPosted: 0
  },
  {
    id: 14,
    text: "Her tayin döneminde aynı kabus yaşanmasın. Aile birliği mazereti olan tüm öğretmenler için koşulsuz il emri verilmelidir! @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #AileBütünlüğü",
    category: "Bakanlığa Çağrı",
    tags: ["#ÖğretmeneİlEmri", "#AileBütünlüğü"],
    timesPosted: 0
  },
  {
    id: 15,
    text: "Anayasa Madde 41: 'Aile, Türk toplumunun temelidir.' Temeli sarsılan aileleri korumak devletin asli vazifesidir. @RTErdogan @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #AnayasaMadde41",
    category: "Anayasal Hak",
    tags: ["#ÖğretmeneİlEmri", "#AnayasaMadde41"],
    timesPosted: 0
  },
  {
    id: 16,
    text: "Bebekler babalarını görüntülü konuşmayla tanımak zorunda kalmasın. Ailelerin birleşmesi için il emri kararnamesini bekliyoruz. @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #AileBirliği",
    category: "Çocuklar İçin",
    tags: ["#ÖğretmeneİlEmri", "#AileBirliği"],
    timesPosted: 0
  },
  {
    id: 17,
    text: "Öğretmenler eş durumu mazeretiyle ailelerinin yanına gitmek istiyor. Sayın Bakanım @Yusuf__Tekin eğitim neferlerini sevindirecek müjdeyi verin! @tcmeb #ÖğretmeneİlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 18,
    text: "Hem doğuda hem batıda fedakarca görev yapan öğretmenler ailesine kavuşmak istiyor. İL EMRİ hakkı geciktirilmeden tanınmalıdır! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #İlEmri",
    category: "Adil Atama",
    tags: ["#ÖğretmeneİlEmri", "#İlEmri"],
    timesPosted: 0
  },
  {
    id: 19,
    text: "Mazeret atamasında açılan yetersiz kontenjanlar aileleri ayırmaya sebep oldu. Tek çare İL EMRİ uygulamasıdır! @Yusuf__Tekin @tcmeb @RTErdogan #ÖğretmeneİlEmri #MazeretTalebi",
    category: "Adil Atama",
    tags: ["#ÖğretmeneİlEmri", "#MazeretTalebi"],
    timesPosted: 0
  },
  {
    id: 20,
    text: "Öğretmenin huzuru eğitimin huzurudur. Ailesine kavuşan öğretmen sınıfına aşkla girer. İl emri eğitimin kalitesini artırır! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #EğitimdeKalite",
    category: "Aile Bütünlüğü",
    tags: ["#ÖğretmeneİlEmri", "#EğitimdeKalite"],
    timesPosted: 0
  },
  {
    id: 21,
    text: "Eşi özel sektörde, kamuda ya da farklı kurumlarda çalışan öğretmenlerimizin mağduriyeti il emri ile giderilmelidir. @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #EşDurumuAtaması",
    category: "Adil Atama",
    tags: ["#ÖğretmeneİlEmri", "#EşDurumuAtaması"],
    timesPosted: 0
  },
  {
    id: 22,
    text: "Yıllarca KPSS ve mülakat stresi çeken öğretmenlerimiz şimdi de aile hasretiyle sınanmasın. İl emri elzemdir! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #ÖğretmenHakkı",
    category: "Sosyo-Ekonomik",
    tags: ["#ÖğretmeneİlEmri", "#ÖğretmenHakkı"],
    timesPosted: 0
  },
  {
    id: 23,
    text: "Cumhurbaşkanımızın aile kurumuna verdiği önemi biliyoruz. Bu doğrultuda öğretmen ailelerinin birleşmesi için il emri istiyoruz. @RTErdogan @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 24,
    text: "Bölünmüş haneler, ödenemeyen çifte kiralar ve psikolojik yıpranma... Öğretmenlerimize İL EMRİ nefes aldıracaktır. @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #ÖğretmenimeNefesOl",
    category: "Sosyo-Ekonomik",
    tags: ["#ÖğretmeneİlEmri", "#ÖğretmenimeNefesOl"],
    timesPosted: 0
  },
  {
    id: 25,
    text: "Mazeret ataması sonrasında yerleşemeyen tek bir öğretmen bile kalmamalıdır. Çözüm: Şartsız ve Genel İl Emri! @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #GenelİlEmri",
    category: "Adil Atama",
    tags: ["#ÖğretmeneİlEmri", "#GenelİlEmri"],
    timesPosted: 0
  },
  {
    id: 26,
    text: "Bizler vatanın dört bir yanında fedakarca çalışan öğretmenleriz. İstediğimiz tek şey akşam evimizde eşimiz ve çocuğumuzla bir arada olmak. @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 27,
    text: "Sayın Bakanımız @Yusuf__Tekin, öğretmenlerin aile birliği mazeretini çözüme kavuşturacak adımı bekliyoruz. İl emri hakkımızdır! @tcmeb #ÖğretmeneİlEmri #BakanTekinİlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#ÖğretmeneİlEmri", "#BakanTekinİlEmri"],
    timesPosted: 0
  },
  {
    id: 28,
    text: "Eğitimde fırsat eşitliği öğretmenin huzuruyla başlar. Huzurlu bir öğretmen için aile birliği şarttır. İl emri ertelenemez! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #ÖğretmenimeİlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#ÖğretmeneİlEmri", "#ÖğretmenimeİlEmri"],
    timesPosted: 0
  },
  {
    id: 29,
    text: "Otobüs terminallerinde geçen ömürler, hafta sonu hasret gidermeye çalışan öğretmenler... İl emri insani bir gerekliliktir! @tcmeb @Yusuf__Tekin @RTErdogan #ÖğretmeneİlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 30,
    text: "Devlet, aileyi koruyucu tedbirleri alır amir hükmü gereğince öğretmenlerimize il emri hakkı tanınmalıdır! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #Anayasa41",
    category: "Anayasal Hak",
    tags: ["#ÖğretmeneİlEmri", "#Anayasa41"],
    timesPosted: 0
  },
  {
    id: 31,
    text: "Her öğretmenin sınıfında öğrencilerine huzurla ders anlatabilmesi için zihnindeki aile kaygısının bitmesi gerekir. Çözüm İL EMRİ! @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 32,
    text: "Kontenjan darlığı sebebiyle birbirinden 800 km uzakta kalan öğretmen çiftlerin feryadını duyun. İl emri talep ediyoruz! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #İlEmriTalebi",
    category: "Adil Atama",
    tags: ["#ÖğretmeneİlEmri", "#İlEmriTalebi"],
    timesPosted: 0
  },
  {
    id: 33,
    text: "Öğretmenlerin moral ve motivasyonu Türk milli eğitiminin teminatıdır. İl emriyle binlerce meslektaşımızın yüzü gülsün. @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #MebElele",
    category: "Bakanlığa Çağrı",
    tags: ["#ÖğretmeneİlEmri", "#MebElele"],
    timesPosted: 0
  },
  {
    id: 34,
    text: "Bir çocuk hem anneye hem babaya aynı anda sarılabilmelidir. Aileleri birleştirmek zor değil, bir kararnameye bakar: İL EMRİ! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #ÇocuklarGülsün",
    category: "Çocuklar İçin",
    tags: ["#ÖğretmeneİlEmri", "#ÇocuklarGülsün"],
    timesPosted: 0
  },
  {
    id: 35,
    text: "Geçmiş yıllarda verilen il emri mağduriyetleri sonlandırmıştı. Bu yıl da aynı hassasiyetin gösterilmesini istiyoruz. @Yusuf__Tekin @tcmeb @RTErdogan #ÖğretmeneİlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 36,
    text: "Öğretmenlerin eş durumu mazereti ertelenemez ve takas edilemez bir haktır. MEB il emrini ivedilikle ilan etmelidir! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #MazeretHakkı",
    category: "Adil Atama",
    tags: ["#ÖğretmeneİlEmri", "#MazeretHakkı"],
    timesPosted: 0
  },
  {
    id: 37,
    text: "Ekonomik kriz ortamında iki ayrı ev geçindirmek öğretmen maaşlarıyla imkansız hale geldi. İL EMRİ vicdani bir borçtur! @Yusuf__Tekin @tcmeb @RTErdogan #ÖğretmeneİlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 38,
    text: "Anayasa teminatı altındaki aile birliğinin korunması için MEB'den acil çözüm bekliyoruz. İl emri istiyoruz! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri #AileAnayasalHaktır",
    category: "Anayasal Hak",
    tags: ["#ÖğretmeneİlEmri", "#AileAnayasalHaktır"],
    timesPosted: 0
  },
  {
    id: 39,
    text: "Yüzlerce kilometre uzakta görev yapıp haftada bir gün çocuğunu görebilen anne-baba öğretmenlerin çilesine son verin! @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #AileHasreti",
    category: "Çocuklar İçin",
    tags: ["#ÖğretmeneİlEmri", "#AileHasreti"],
    timesPosted: 0
  },
  {
    id: 40,
    text: "Eğitim camiası tek yürek oldu; il emri talebimiz meşrudur, haklıdır ve çözümü mümkündür! @tcmeb @Yusuf__Tekin @iletisim #ÖğretmeneİlEmri #ÖğretmenlerTekYürek",
    category: "Bakanlığa Çağrı",
    tags: ["#ÖğretmeneİlEmri", "#ÖğretmenlerTekYürek"],
    timesPosted: 0
  },
  {
    id: 41,
    text: "Okul zili çaldığında öğretmenin aklı sadece öğrencisinde olmalıdır, başka ildeki evladında değil. İl emri eğitim için şarttır! @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 42,
    text: "Öğretmenlerin aile birliği mazereti için norm fazlası endişesi yersizdir; geçmiş tecrübeler il emrinin başarıyla yürütüldüğünü kanıtlamıştır. @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri",
    category: "Adil Atama",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 43,
    text: "Sayın Bakanımız @Yusuf__Tekin, öğretmenlerin ve ailelerinin gözü kulağı sizden gelecek il emri açıklamasında. Lütfen sesimizi duyun! @tcmeb #ÖğretmeneİlEmri #İlEmriAçıklansın",
    category: "Bakanlığa Çağrı",
    tags: ["#ÖğretmeneİlEmri", "#İlEmriAçıklansın"],
    timesPosted: 0
  },
  {
    id: 44,
    text: "Aileler bölünmesin, çocuklar ağlamasın, öğretmenler çaresiz kalmasın! İl emri lütuf değil, adaletin tecellisidir. @tcmeb @Yusuf__Tekin @RTErdogan #ÖğretmeneİlEmri",
    category: "Çocuklar İçin",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 45,
    text: "İki ayrı ilde yaşamak zorunda kalan öğretmenler yol masraflarını karşılayamıyor. Sayın @Yusuf__Tekin, öğretmenlerinizin yanında olun! @tcmeb #ÖğretmeneİlEmri #Geçinemiyoruz",
    category: "Sosyo-Ekonomik",
    tags: ["#ÖğretmeneİlEmri", "#Geçinemiyoruz"],
    timesPosted: 0
  },
  {
    id: 46,
    text: "Öğretmenine değer veren bir toplum geleceğine değer verir. Öğretmene verilecek en büyük değer ailesiyle buluşmasını sağlamaktır. @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 47,
    text: "Anayasa 41 gereğince devlet aile kurumunu korumakla yükümlüdür. Öğretmenlerimize koşulsuz şartsız İL EMRİ istiyoruz! @RTErdogan @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #Anayasa",
    category: "Anayasal Hak",
    tags: ["#ÖğretmeneİlEmri", "#Anayasa"],
    timesPosted: 0
  },
  {
    id: 48,
    text: "Mazeret ataması sonrası açıkta kalan binlerce öğretmen ailesi için zaman daralıyor. Acil çözüm: İL EMRİ! @Yusuf__Tekin @tcmeb #ÖğretmeneİlEmri #ZamanDaralıyor",
    category: "Adil Atama",
    tags: ["#ÖğretmeneİlEmri", "#ZamanDaralıyor"],
    timesPosted: 0
  },
  {
    id: 49,
    text: "Öğretmen mutluysa öğrenci mutludur, okul huzurludur. Aile birliğine kavuşmuş öğretmenlerin enerjisi ülkeye yeter. İl emri şart! @tcmeb @Yusuf__Tekin #ÖğretmeneİlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#ÖğretmeneİlEmri"],
    timesPosted: 0
  },
  {
    id: 50,
    text: "Sayın Bakanımız @Yusuf__Tekin ve Sayın Cumhurbaşkanımız @RTErdogan; binlerce öğretmen tek yürek İL EMRİ müjdesi bekliyor! @tcmeb #ÖğretmeneİlEmri #İlEmriMüjdesiGelsin",
    category: "Bakanlığa Çağrı",
    tags: ["#ÖğretmeneİlEmri", "#İlEmriMüjdesiGelsin"],
    timesPosted: 0
  }
];
