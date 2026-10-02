export interface TweetItem {
  id: number;
  text: string;
  category: 'Aile Bütünlüğü' | 'Anayasal Hak' | 'Bakanlığa Çağrı' | 'Çocuklar İçin' | 'Sosyo-Ekonomik' | 'Adil Atama';
  tags: string[];
  timesPosted: number;
  lastPostedAt?: string;
  isFavorite?: boolean;
}

export const INITIAL_100_TWEETS: TweetItem[] = [
  {
    id: 1,
    text: "Aile birliği Anayasamızın 41. maddesi ile güvence altındadır. Parçalanmış aileler değil, bir arada huzurla çalışan öğretmenler istiyoruz! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #IlEmriHaktir",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#IlEmriHaktir"],
    timesPosted: 0
  },
  {
    id: 2,
    text: "Eşi bir şehirde, kendisi başka bir şehirde görev yapan binlerce öğretmen çalınmadık kapı bırakmadı. Tek çözüm şartsız İL EMRİ! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #AilelerBirlessin",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#AilelerBirlessin"],
    timesPosted: 0
  },
  {
    id: 3,
    text: "Çocuklarımız anne veya babasından ayrı büyümesin! Aile bütünlüğü ertelenemez bir haktır. Sayın Bakanım sesimizi duyun: @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #MebIlEmriVer",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri", "#MebIlEmriVer"],
    timesPosted: 0
  },
  {
    id: 4,
    text: "İki ayrı ev kirası, iki ayrı fatura ve yollarda geçen ömürler... Öğretmenler maddi ve manevi olarak tükendi. Çözüm masada: İL EMRİ! @tcmeb @Yusuf__Tekin @RTErdogan #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 5,
    text: "Öğretmenin aklı eşinde ve çocuğunda kalırsa sınıftaki verimi nasıl tam olabilir? Güçlü eğitim güçlü aileyle başlar! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #EgitimdeAileBirligi",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#EgitimdeAileBirligi"],
    timesPosted: 0
  },
  {
    id: 6,
    text: "Yıllardır uygulanan ve yüzleri güldüren il emri uygulaması bu dönem de gecikmeden hayata geçirilmelidir. Mağduriyetler son bulsun! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #IlEmriMujdesi",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#IlEmriMujdesi"],
    timesPosted: 0
  },
  {
    id: 7,
    text: "Devlet memurunun en temel hakkı olan aile birliği mazereti ötelenemez. Sayın Cumhurbaşkanımız @RTErdogan ve @Yusuf__Tekin'den il emri bekliyoruz. #OgretmeneIlEmri #IlEmriHaktir",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#IlEmriHaktir"],
    timesPosted: 0
  },
  {
    id: 8,
    text: "Kilometrelerce uzaktaki eşine yetişmeye çalışırken kaza yapan, hayatını kaybeden meslektaşlarımızı unutmadık. Yollar değil aileler birleşsin! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 9,
    text: "Bir anneye çocuğunu, bir öğretmene ailesini çok görmeyin. İl emri lütuf değil, anayasal bir zorunluluktur. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #AilelerKavussun",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri", "#AilelerKavussun"],
    timesPosted: 0
  },
  {
    id: 10,
    text: "Mazeret atamalarında kontenjan yetersizliği yüzünden binlerce öğretmen açıkta kaldı. Bu düğümü yalnızca İL EMRİ çözer! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #MazeretAtamasi",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#MazeretAtamasi"],
    timesPosted: 0
  },
  {
    id: 11,
    text: "Boş kalan normlar ve mağdur olan öğretmenler... Bakanlığımızın bünyesinde il emri verebilecek imkan her zaman vardır. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #IlEmriBekliyoruz",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#IlEmriBekliyoruz"],
    timesPosted: 0
  },
  {
    id: 12,
    text: "Gözü yaşlı çocukların, hasret çeken eşlerin sesine kulak verin. Eğitim camiası il emri müjdesini sabırsızlıkla bekliyor. @Yusuf__Tekin @tcmeb @iletisim #OgretmeneIlEmri",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 13,
    text: "Öğretmen milletin geleceğini inşa eder; ailesi dağılmış bir öğretmenden geleceğe ışık tutmasını bekleyemezsiniz. İl emri şarttır! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #OgretmenlerBirlessin",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#OgretmenlerBirlessin"],
    timesPosted: 0
  },
  {
    id: 14,
    text: "Her tayin döneminde aynı kabus yaşanmasın. Aile birliği mazereti olan tüm öğretmenler için koşulsuz il emri verilmelidir! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #AileButunlugu",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#AileButunlugu"],
    timesPosted: 0
  },
  {
    id: 15,
    text: "Anayasa Madde 41: 'Aile, Türk toplumunun temelidir.' Temeli sarsılan aileleri korumak devletin asli vazifesidir. @RTErdogan @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #AnayasaMadde41",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#AnayasaMadde41"],
    timesPosted: 0
  },
  {
    id: 16,
    text: "Bebekler babalarını görüntülü konuşmayla tanımak zorunda kalmasın. Ailelerin birleşmesi için il emri kararnamesini bekliyoruz. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #AileBirligi",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri", "#AileBirligi"],
    timesPosted: 0
  },
  {
    id: 17,
    text: "Öğretmenler eş durumu mazeretiyle ailelerinin yanına gitmek istiyor. Sayın Bakanım @Yusuf__Tekin eğitim neferlerini sevindirecek müjdeyi verin! @tcmeb #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 18,
    text: "Hem doğuda hem batıda fedakarca görev yapan öğretmenler ailesine kavuşmak istiyor. İL EMRİ hakkı geciktirilmeden tanınmalıdır! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #IlEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#IlEmri"],
    timesPosted: 0
  },
  {
    id: 19,
    text: "Mazeret atamasında açılan yetersiz kontenjanlar aileleri ayırmaya sebep oldu. Tek çare İL EMRİ uygulamasıdır! @Yusuf__Tekin @tcmeb @RTErdogan #OgretmeneIlEmri #MazeretTalebi",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#MazeretTalebi"],
    timesPosted: 0
  },
  {
    id: 20,
    text: "Öğretmenin huzuru eğitimin huzurudur. Ailesine kavuşan öğretmen sınıfına aşkla girer. İl emri eğitimin kalitesini artırır! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #EgitimdeKalite",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#EgitimdeKalite"],
    timesPosted: 0
  },
  {
    id: 21,
    text: "Eşi özel sektörde, kamuda ya da farklı kurumlarda çalışan öğretmenlerimizin mağduriyeti il emri ile giderilmelidir. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #EsDurumuAtamasi",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#EsDurumuAtamasi"],
    timesPosted: 0
  },
  {
    id: 22,
    text: "Yıllarca KPSS ve mülakat stresi çeken öğretmenlerimiz şimdi de aile hasretiyle sınanmasın. İl emri elzemdir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #OgretmenHakki",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#OgretmenHakki"],
    timesPosted: 0
  },
  {
    id: 23,
    text: "Cumhurbaşkanımızın aile kurumuna verdiği önemi biliyoruz. Bu doğrultuda öğretmen ailelerinin birleşmesi için il emri istiyoruz. @RTErdogan @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 24,
    text: "Bölünmüş haneler, ödenemeyen çifte kiralar ve psikolojik yıpranma... Öğretmenlerimize İL EMRİ nefes aldıracaktır. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #OgretmenimeNefesOl",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#OgretmenimeNefesOl"],
    timesPosted: 0
  },
  {
    id: 25,
    text: "Mazeret ataması sonrasında yerleşemeyen tek bir öğretmen bile kalmamalıdır. Çözüm: Şartsız ve Genel İl Emri! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #GenelIlEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#GenelIlEmri"],
    timesPosted: 0
  },
  {
    id: 26,
    text: "Bizler vatanın dört bir yanında fedakarca çalışan öğretmenleriz. İstediğimiz tek şey akşam evimizde eşimiz ve çocuğumuzla bir arada olmak. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 27,
    text: "Sayın Bakanımız @Yusuf__Tekin, öğretmenlerin aile birliği mazeretini çözüme kavuşturacak adımı bekliyoruz. İl emri hakkımızdır! @tcmeb #OgretmeneIlEmri #BakanTekinIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#BakanTekinIlEmri"],
    timesPosted: 0
  },
  {
    id: 28,
    text: "Eğitimde fırsat eşitliği öğretmenin huzuruyla başlar. Huzurlu bir öğretmen için aile birliği şarttır. İl emri ertelenemez! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #OgretmenimeIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#OgretmenimeIlEmri"],
    timesPosted: 0
  },
  {
    id: 29,
    text: "Otobüs terminallerinde geçen ömürler, hafta sonu hasret gidermeye çalışan öğretmenler... İl emri insani bir gerekliliktir! @tcmeb @Yusuf__Tekin @RTErdogan #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 30,
    text: "Devlet, aileyi koruyucu tedbirleri alır amir hükmü gereğince öğretmenlerimize il emri hakkı tanınmalıdır! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #Anayasa41",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#Anayasa41"],
    timesPosted: 0
  },
  {
    id: 31,
    text: "Her öğretmenin sınıfında öğrencilerine huzurla ders anlatabilmesi için zihnindeki aile kaygısının bitmesi gerekir. Çözüm İL EMRİ! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 32,
    text: "Kontenjan darlığı sebebiyle birbirinden 800 km uzakta kalan öğretmen çiftlerin feryadını duyun. İl emri talep ediyoruz! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #IlEmriTalebi",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#IlEmriTalebi"],
    timesPosted: 0
  },
  {
    id: 33,
    text: "Öğretmenlerin moral ve motivasyonu Türk milli eğitiminin teminatıdır. İl emriyle binlerce meslektaşımızın yüzü gülsün. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #MebElele",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#MebElele"],
    timesPosted: 0
  },
  {
    id: 34,
    text: "Bir çocuk hem anneye hem babaya aynı anda sarılabilmelidir. Aileleri birleştirmek zor değil, bir kararnameye bakar: İL EMRİ! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #CocuklarGulsun",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri", "#CocuklarGulsun"],
    timesPosted: 0
  },
  {
    id: 35,
    text: "Geçmiş yıllarda verilen il emri mağduriyetleri sonlandırmıştı. Bu yıl da aynı hassasiyetin gösterilmesini istiyoruz. @Yusuf__Tekin @tcmeb @RTErdogan #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 36,
    text: "Öğretmenlerin eş durumu mazereti ertelenemez ve takas edilemez bir haktır. MEB il emrini ivedilikle ilan etmelidir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #MazeretHakki",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#MazeretHakki"],
    timesPosted: 0
  },
  {
    id: 37,
    text: "Ekonomik kriz ortamında iki ayrı ev geçindirmek öğretmen maaşlarıyla imkansız hale geldi. İL EMRİ vicdani bir borçtur! @Yusuf__Tekin @tcmeb @RTErdogan #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 38,
    text: "Anayasa teminatı altındaki aile birliğinin korunması için MEB'den acil çözüm bekliyoruz. İl emri istiyoruz! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #AileAnayasalHaktir",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#AileAnayasalHaktir"],
    timesPosted: 0
  },
  {
    id: 39,
    text: "Yüzlerce kilometre uzakta görev yapıp haftada bir gün çocuğunu görebilen anne-baba öğretmenlerin çilesine son verin! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #AileHasreti",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri", "#AileHasreti"],
    timesPosted: 0
  },
  {
    id: 40,
    text: "Eğitim camiası tek yürek oldu; il emri talebimiz meşrudur, haklıdır ve çözümü mümkündür! @tcmeb @Yusuf__Tekin @iletisim #OgretmeneIlEmri #OgretmenlerTekYurek",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#OgretmenlerTekYurek"],
    timesPosted: 0
  },
  {
    id: 41,
    text: "Okul zili çaldığında öğretmenin aklı sadece öğrencisinde olmalıdır, başka ildeki evladında değil. İl emri eğitim için şarttır! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 42,
    text: "Öğretmenlerin aile birliği mazereti için norm fazlası endişesi yersizdir; geçmiş tecrübeler il emrinin başarıyla yürütüldüğünü kanıtlamıştır. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 43,
    text: "Sayın Bakanımız @Yusuf__Tekin, öğretmenlerin ve ailelerinin gözü kulağı sizden gelecek il emri açıklamasında. Lütfen sesimizi duyun! @tcmeb #OgretmeneIlEmri #IlEmriAciklansin",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#IlEmriAciklansin"],
    timesPosted: 0
  },
  {
    id: 44,
    text: "Aileler bölünmesin, çocuklar ağlamasın, öğretmenler çaresiz kalmasın! İl emri lütuf değil, adaletin tecellisidir. @tcmeb @Yusuf__Tekin @RTErdogan #OgretmeneIlEmri",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 45,
    text: "İki ayrı ilde yaşamak zorunda kalan öğretmenler yol masraflarını karşılayamıyor. Sayın @Yusuf__Tekin, öğretmenlerinizin yanında olun! @tcmeb #OgretmeneIlEmri #Gecinemiyoruz",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#Gecinemiyoruz"],
    timesPosted: 0
  },
  {
    id: 46,
    text: "Öğretmenine değer veren bir toplum geleceğine değer verir. Öğretmene verilecek en büyük değer ailesiyle buluşmasını sağlamaktır. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 47,
    text: "Anayasa 41 gereğince devlet aile kurumunu korumakla yükümlüdür. Öğretmenlerimize koşulsuz şartsız İL EMRİ istiyoruz! @RTErdogan @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #Anayasa",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#Anayasa"],
    timesPosted: 0
  },
  {
    id: 48,
    text: "Mazeret ataması sonrası açıkta kalan binlerce öğretmen ailesi için zaman daralıyor. Acil çözüm: İL EMRİ! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #ZamanDaraliyor",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#ZamanDaraliyor"],
    timesPosted: 0
  },
  {
    id: 49,
    text: "Öğretmen mutluysa öğrenci mutludur, okul huzurludur. Aile birliğine kavuşmuş öğretmenlerin enerjisi ülkeye yeter. İl emri şart! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 50,
    text: "Sayın Bakanımız @Yusuf__Tekin ve Sayın Cumhurbaşkanımız @RTErdogan; binlerce öğretmen tek yürek İL EMRİ müjdesi bekliyor! @tcmeb #OgretmeneIlEmri #IlEmriMujdesiGelsin",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#IlEmriMujdesiGelsin"],
    timesPosted: 0
  },
  {
    id: 51,
    text: "Binlerce öğretmen eşinden ayrı kalmasın. Aile birliğini sağlamak devletimizin en kutsal görevidir. Çözüm: İL EMRİ! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #AilemizinYanindayiz",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#AilemizinYanindayiz"],
    timesPosted: 0
  },
  {
    id: 52,
    text: "Milli eğitimin temeli öğretmendir. Ailesinden yüzlerce kilometre uzakta görev yapan öğretmenin yüreği buruktur. İl emri verilsin! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 53,
    text: "Anayasa Madde 41 ihlal edilemez! Öğretmenlerimiz ailelerine kavuşmak istiyor. Sayın Bakanım @Yusuf__Tekin lütfen gereğini yapın. @tcmeb #OgretmeneIlEmri #AnayasaGuvencesi",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#AnayasaGuvencesi"],
    timesPosted: 0
  },
  {
    id: 54,
    text: "Her gün saatlerce yol çekip eşine veya çocuğuna ulaşmaya çalışan meslektaşlarımız tükendi. Bu çile İL EMRİ ile bitmeli! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #YollarBirlestirsin",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#YollarBirlestirsin"],
    timesPosted: 0
  },
  {
    id: 55,
    text: "Küçücük çocuklar anne sevgisinden veya baba şefkatinden mahrum büyüyor. Eğitimci ailelerin çocuklarını ayırmayın! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #CocukHakkidir",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri", "#CocukHakkidir"],
    timesPosted: 0
  },
  {
    id: 56,
    text: "Öğretmenler mazeret atamalarında açılan birkaç kişilik kontenjana mahkum edilemez. İl emri genel ve şartsız olmalıdır! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #SartsizIlEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#SartsizIlEmri"],
    timesPosted: 0
  },
  {
    id: 57,
    text: "Bizler ayrılık değil, tek bir çatı altında görev yapmak istiyoruz. MEB öğretmenine sahip çıkmalıdır! @Yusuf__Tekin @tcmeb @RTErdogan #OgretmeneIlEmri #OgretmeneSahipCik",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#OgretmeneSahipCik"],
    timesPosted: 0
  },
  {
    id: 58,
    text: "Bir öğretmenin başarısı zihninin rahatlığına bağlıdır. Ailesinden ayrı kalan öğretmenin derdi dersine yansır. İl emri şart! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 59,
    text: "Öğretmen maaşı ile iki farklı şehirde düzen kurmak, çift mutfak masrafı ödemek imkansız. Bu yük kaldırılamaz! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #EkonomikYuk",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#EkonomikYuk"],
    timesPosted: 0
  },
  {
    id: 60,
    text: "Haklı mazereti olan hiçbir öğretmen dışarıda kalmamalıdır. Bakanlığımızın gücü tüm öğretmenleri birleştirmeye yeter! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #MebGucludur",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#MebGucludur"],
    timesPosted: 0
  },
  {
    id: 61,
    text: "Okullarda huzur, öğretmende moral için il emri kararı bekliyoruz. Sayın Bakanımız @Yusuf__Tekin sesimizi duyacaktır. @tcmeb #OgretmeneIlEmri #BakanimDuySesimizi",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#BakanimDuySesimizi"],
    timesPosted: 0
  },
  {
    id: 62,
    text: "Öğretmen çocukları haftalarca annesini göremiyor. Aile kutsaldır, bu kutsallığı korumak görevimizdir. @RTErdogan @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #KutsalAile",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri", "#KutsalAile"],
    timesPosted: 0
  },
  {
    id: 63,
    text: "Gecikmiş adalet adalet değildir. Mazeret ataması sonrası mağduriyet yaşayan öğretmenler için acilen İL EMRİ verilmelidir. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 64,
    text: "Eğitim yuvada başlar, yuvasını kuramayan eğitimci nasıl örnek olacak? Aile birliği mazereti görmezden gelinemez! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #EgitimYuvadaBaslar",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#EgitimYuvadaBaslar"],
    timesPosted: 0
  },
  {
    id: 65,
    text: "Kamu görevlileri içerisinde aile birliği en çok zedelenen kesim öğretmenlerimizdir. Bu haksızlık il emri ile giderilsin! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 66,
    text: "Sayın Bakanım @Yusuf__Tekin, öğretmenlerinizi sevindirecek il emri müjdesi ülkemizin dört bir yanında bayram havası estirir. @tcmeb #OgretmeneIlEmri #MujdeBekliyoruz",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#MujdeBekliyoruz"],
    timesPosted: 0
  },
  {
    id: 67,
    text: "Her hafta sonu binlerce kilometre yol gidip pazartesi sabah derse yetişmeye çalışan yorgun öğretmenler... Çözüm: İL EMRİ! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 68,
    text: "Çocuğunun ilk adımlarını, ilk sözcüklerini ekrandan izlemek zorunda kalan öğretmen babalar var. İl emri hak değil mi? @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #HasretBitsin",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri", "#HasretBitsin"],
    timesPosted: 0
  },
  {
    id: 69,
    text: "Türkiye Yüzyılı maarif vizyonu öğretmenin huzuruyla anlam kazanır. Parçalanmış aileler bu vizyona yakışmaz! @RTErdogan @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #TurkiyeYuzyili",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#TurkiyeYuzyili"],
    timesPosted: 0
  },
  {
    id: 70,
    text: "Mazeret atamasında boş kalan kadrolar varken öğretmenlerin mağdur edilmesi kabul edilemez. İl emri açıklanmalıdır! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #NormKadro",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#NormKadro"],
    timesPosted: 0
  },
  {
    id: 71,
    text: "Bizler sadece ailemizle birlikte yaşayıp öğrencilerimize en iyi şekilde eğitim vermek istiyoruz. Çok şey mi istiyoruz? @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 72,
    text: "Öğretmenlerimizin aile hasreti artık tahammül sınırlarını aştı. Bu dönem de il emri verilsin, yuvalar kurtulsun! @tcmeb @Yusuf__Tekin @iletisim #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 73,
    text: "Yüksek ulaşım bedelleri yüzünden eşinin yanına gidemeyen öğretmenler var. Ekonomik krizde İL EMRİ bir can simididir! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #CanSimidi",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#CanSimidi"],
    timesPosted: 0
  },
  {
    id: 74,
    text: "Anne öğretmen bir ilde, baba öğretmen başka ilde... Çocuk kimin yanında kalacak? Bu dramı İL EMRİ sonlandırır! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #DramBitsin",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri", "#DramBitsin"],
    timesPosted: 0
  },
  {
    id: 75,
    text: "Anayasanın 41. maddesi devletin aileyi koruyacağını kesin dille belirtir. Öğretmenler için il emri anayasal görevdir! @RTErdogan @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 76,
    text: "Öğretmenlerin eş durumu mazeretinde il/ilçe emri verilmesi eğitimdeki verimliliği katbekat artıracaktır. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #IlceEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#IlceEmri"],
    timesPosted: 0
  },
  {
    id: 77,
    text: "Meslektaşlarımız gözyaşları içinde görev yerlerine dönmek istemiyor. Sayın Bakanımız @Yusuf__Tekin lütfen bu hasreti bitirin. @tcmeb #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 78,
    text: "Aile birliğine kavuşan öğretmen geleceğin fatihleri olacak çocukları sevgiyle yetiştirir. Sevgi önce evde başlar! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 79,
    text: "Çift şehirde yaşamak bir maaşla mümkün değildir. Öğretmenler borç içinde boğuluyor. Çözüm: İL EMRİ! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #GecimDerdineSon",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#GecimDerdineSon"],
    timesPosted: 0
  },
  {
    id: 80,
    text: "Hiçbir çocuk anne veya babasız büyütülmemelidir. Eğitimci ailelerin sesini duyun: İL EMRİ! @tcmeb @Yusuf__Tekin @RTErdogan #OgretmeneIlEmri #GelecekIcin",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri", "#GelecekIcin"],
    timesPosted: 0
  },
  {
    id: 81,
    text: "Tüm sendikaların ortak talebi olan il emri konusunda Bakanlığımızın adım atmasını sabırla bekliyoruz. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #SendikalarTekSes",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#SendikalarTekSes"],
    timesPosted: 0
  },
  {
    id: 82,
    text: "Hakkıyla görevini yapan öğretmenine sahip çıkan bir MEB görmek istiyoruz. Mazeret atamasında İL EMRİ açıklanmalıdır! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 83,
    text: "Devletin temel taşıdır aile. Bu taşı yerinden oynatmayalım. Öğretmen ailelerinin birleştirilmesi milli bir ödevdir! @RTErdogan @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 84,
    text: "Öğretmen sınıfına girdiğinde sadece öğrencisine odaklanmalı. Aklı diğer şehirdeki evinde kalan öğretmen yorgundur. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 85,
    text: "Otobüs biletleri ve uçak fiyatları ortada. Ailesini görmeye gidemeyen öğretmenin yaşadığı travma son bulsun. İL EMRİ! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 86,
    text: "Bebeklerimizin süt kokusundan uzakta görev yapan annelerin feryadını duyun. İl emri vicdan meselesidir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #AnnelerAglamasin",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri", "#AnnelerAglamasin"],
    timesPosted: 0
  },
  {
    id: 87,
    text: "Yıllarca fedakarca görev yapmış eğitimciler ailelerinden koparılamaz. Sayın Bakanım @Yusuf__Tekin öğretmeninize ses olun! @tcmeb #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 88,
    text: "Kontenjan yetersizliğine takılan yüzlerce öğretmen ailesi için tek umut il emridir. Bu umudu soldurmayın! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #UmutlarBitmesin",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#UmutlarBitmesin"],
    timesPosted: 0
  },
  {
    id: 89,
    text: "Hukuk devleti ilkesi gereğince aile birliği hakkı ertelenemez. Sayın Bakanımız @Yusuf__Tekin gereğini yapacaktır. @tcmeb #OgretmeneIlEmri #HukukDevleti",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#HukukDevleti"],
    timesPosted: 0
  },
  {
    id: 90,
    text: "Öğretmenin ailesi dağılırsa okulun mayası bozulur. Eğitimin güvencesi için aile birliği ve il emri şart! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 91,
    text: "Ekonomik şartlar iki hane geçindirmeye müsait değil. Öğretmenlerimizin omzu üzerindeki bu yükü İL EMRİ ile kaldırın! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 92,
    text: "Anne ve babasından ayrı kalan evlatların vebali büyüktür. Sayın Cumhurbaşkanımız @RTErdogan ve @Yusuf__Tekin'den il emri bekliyoruz! @tcmeb #OgretmeneIlEmri",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 93,
    text: "Eğitim camiasının yıllardır süregelen il emri teamülü bu yıl da bozulmamalıdır. Çözüm MEB'in elindedir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #TeamulBozulmasin",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#TeamulBozulmasin"],
    timesPosted: 0
  },
  {
    id: 94,
    text: "Eş durumu mazeretinde açık normlar değerlendirilmeli ve tüm öğretmenler eşlerinin yanına yerleştirilmelidir. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #NormlarDolsun",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#NormlarDolsun"],
    timesPosted: 0
  },
  {
    id: 95,
    text: "Anayasa 41: Devlet ailenin refah ve huzuru için gerekli tedbirleri alır. Bu tedbirin adı öğretmen için İL EMRİDİR! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 96,
    text: "Ailesi bir arada olan öğretmen memleketin dört bir yanında aşkla hizmet eder. Huzurlu öğretmen güçlü nesiller demektir! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 97,
    text: "Yollarda tükenen nefesler, bitmeyen ayrılıklar... Öğretmenlerimizin tek bir isteği var: İL EMRİ! @tcmeb @Yusuf__Tekin @iletisim #OgretmeneIlEmri #TekIstekIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#TekIstekIlEmri"],
    timesPosted: 0
  },
  {
    id: 98,
    text: "Çocuklarımıza sevgiyi öğretirken kendi çocuklarımıza hasret kalmak istemiyoruz. Aileler birleşsin! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #HasretSonaErsin",
    category: "Çocuklar İçin",
    tags: ["#OgretmeneIlEmri", "#HasretSonaErsin"],
    timesPosted: 0
  },
  {
    id: 99,
    text: "Mazeret ataması süreci yalnızca İL EMRİ müjdesi ile başarıyla tamamlanmış olur. Tüm eğitimciler bu haberi bekliyor! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 100,
    text: "Sayın Bakanımız @Yusuf__Tekin; yüz binlerce öğretmen ve ailesi sizden gelecek il emri müjdesiyle gülümsemek istiyor. @tcmeb #OgretmeneIlEmri #IlEmriMujdesi2026",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#IlEmriMujdesi2026"],
    timesPosted: 0
  }
];

export const INITIAL_50_TWEETS = INITIAL_100_TWEETS;
