export interface TweetItem {
  id: number;
  text: string;
  category: 'Aile Bütünlüğü' | 'Anayasal Hak' | 'Bakanlığa Çağrı' | 'Çocuklar Için' | 'Sosyo-Ekonomik' | 'Adil Atama';
  tags: string[];
  timesPosted: number;
  lastPostedAt?: string;
  isFavorite?: boolean;
}

export const INITIAL_100_TWEETS: TweetItem[] = [
  {
    id: 1,
    text: "Aile birligi Anayasamizin 41. maddesi ile guvence altindadir. Parcalanmis aileler degil, bir arada huzurla calisan ogretmenler istiyoruz! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #IlEmriHaktir",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#IlEmriHaktir"],
    timesPosted: 0
  },
  {
    id: 2,
    text: "Esi bir sehirde, kendisi baska bir sehirde gorev yapan binlerce ogretmen calinmadik kapi birakmadi. Tek cozum sartsiz IL EMRI! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #AilelerBirlessin",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#AilelerBirlessin"],
    timesPosted: 0
  },
  {
    id: 3,
    text: "Cocuklarimiz anne veya babasindan ayri buyumesin! Aile butunlugu ertelenemez bir haktir. Sayin Bakanim sesimizi duyun: @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #MebIlEmriVer",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri", "#MebIlEmriVer"],
    timesPosted: 0
  },
  {
    id: 4,
    text: "Iki ayri ev kirasi, iki ayri fatura ve yollarda gecen omurler... Ogretmenler maddi ve manevi olarak tukendi. Cozum masada: IL EMRI! @tcmeb @Yusuf__Tekin @RTErdogan #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 5,
    text: "Ogretmenin akli esinde ve cocugunda kalirsa siniftaki verimi nasil tam olabilir? Guclu egitim guclu aileyle baslar! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #EgitimdeAileBirligi",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#EgitimdeAileBirligi"],
    timesPosted: 0
  },
  {
    id: 6,
    text: "Yillardir uygulanan ve yuzleri gulduren il emri uygulamasi bu donem de gecikmeden hayata gecirilmelidir. Magduriyetler son bulsun! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #IlEmriMujdesi",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#IlEmriMujdesi"],
    timesPosted: 0
  },
  {
    id: 7,
    text: "Devlet memurunun en temel hakki olan aile birligi mazereti otelenemez. Sayin Cumhurbaskanimiz @RTErdogan ve @Yusuf__Tekin'den il emri bekliyoruz. #OgretmeneIlEmri #IlEmriHaktir",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#IlEmriHaktir"],
    timesPosted: 0
  },
  {
    id: 8,
    text: "Kilometrelerce uzaktaki esine yetismeye calisirken kaza yapan, hayatini kaybeden meslektaslarimizi unutmadik. Yollar degil aileler birlessin! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 9,
    text: "Bir anneye cocugunu, bir ogretmene ailesini cok gormeyin. Il emri lutuf degil, anayasal bir zorunluluktur. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #AilelerKavussun",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri", "#AilelerKavussun"],
    timesPosted: 0
  },
  {
    id: 10,
    text: "Mazeret atamalarinda kontenjan yetersizligi yuzunden binlerce ogretmen acikta kaldi. Bu dugumu yalnizca IL EMRI cozer! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #MazeretAtamasi",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#MazeretAtamasi"],
    timesPosted: 0
  },
  {
    id: 11,
    text: "Bos kalan normlar ve magdur olan ogretmenler... Bakanligimizin bunyesinde il emri verebilecek imkan her zaman vardir. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #IlEmriBekliyoruz",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#IlEmriBekliyoruz"],
    timesPosted: 0
  },
  {
    id: 12,
    text: "Gozu yasli cocuklarin, hasret ceken eslerin sesine kulak verin. Egitim camiasi il emri mujdesini sabirsizlikla bekliyor. @Yusuf__Tekin @tcmeb @iletisim #OgretmeneIlEmri",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 13,
    text: "Ogretmen milletin gelecegini insa eder; ailesi dagilmis bir ogretmenden gelecege isik tutmasini bekleyemezsiniz. Il emri sarttir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #OgretmenlerBirlessin",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#OgretmenlerBirlessin"],
    timesPosted: 0
  },
  {
    id: 14,
    text: "Her tayin doneminde ayni kabus yasanmasin. Aile birligi mazereti olan tum ogretmenler icin kosulsuz il emri verilmelidir! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #AileButunlugu",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#AileButunlugu"],
    timesPosted: 0
  },
  {
    id: 15,
    text: "Anayasa Madde 41: 'Aile, Turk toplumunun temelidir.' Temeli sarsilan aileleri korumak devletin asli vazifesidir. @RTErdogan @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #AnayasaMadde41",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#AnayasaMadde41"],
    timesPosted: 0
  },
  {
    id: 16,
    text: "Bebekler babalarini goruntulu konusmayla tanimak zorunda kalmasin. Ailelerin birlesmesi icin il emri kararnamesini bekliyoruz. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #AileBirligi",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri", "#AileBirligi"],
    timesPosted: 0
  },
  {
    id: 17,
    text: "Ogretmenler es durumu mazeretiyle ailelerinin yanina gitmek istiyor. Sayin Bakanim @Yusuf__Tekin egitim neferlerini sevindirecek mujdeyi verin! @tcmeb #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 18,
    text: "Hem doguda hem batida fedakarca gorev yapan ogretmenler ailesine kavusmak istiyor. IL EMRI hakki geciktirilmeden taninmalidir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #IlEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#IlEmri"],
    timesPosted: 0
  },
  {
    id: 19,
    text: "Mazeret atamasinda acilan yetersiz kontenjanlar aileleri ayirmaya sebep oldu. Tek care IL EMRI uygulamasidir! @Yusuf__Tekin @tcmeb @RTErdogan #OgretmeneIlEmri #MazeretTalebi",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#MazeretTalebi"],
    timesPosted: 0
  },
  {
    id: 20,
    text: "Ogretmenin huzuru egitimin huzurudur. Ailesine kavusan ogretmen sinifina askla girer. Il emri egitimin kalitesini artirir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #EgitimdeKalite",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#EgitimdeKalite"],
    timesPosted: 0
  },
  {
    id: 21,
    text: "Esi ozel sektorde, kamuda ya da farkli kurumlarda calisan ogretmenlerimizin magduriyeti il emri ile giderilmelidir. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #EsDurumuAtamasi",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#EsDurumuAtamasi"],
    timesPosted: 0
  },
  {
    id: 22,
    text: "Yillarca KPSS ve mulakat stresi ceken ogretmenlerimiz simdi de aile hasretiyle sinanmasin. Il emri elzemdir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #OgretmenHakki",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#OgretmenHakki"],
    timesPosted: 0
  },
  {
    id: 23,
    text: "Cumhurbaskanimizin aile kurumuna verdigi onemi biliyoruz. Bu dogrultuda ogretmen ailelerinin birlesmesi icin il emri istiyoruz. @RTErdogan @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 24,
    text: "Bolunmus haneler, odenemeyen cifte kiralar ve psikolojik yipranma... Ogretmenlerimize IL EMRI nefes aldiracaktir. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #OgretmenimeNefesOl",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#OgretmenimeNefesOl"],
    timesPosted: 0
  },
  {
    id: 25,
    text: "Mazeret atamasi sonrasinda yerlesemeyen tek bir ogretmen bile kalmamalidir. Cozum: Sartsiz ve Genel Il Emri! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #GenelIlEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#GenelIlEmri"],
    timesPosted: 0
  },
  {
    id: 26,
    text: "Bizler vatanin dort bir yaninda fedakarca calisan ogretmenleriz. Istedigimiz tek sey aksam evimizde esimiz ve cocugumuzla bir arada olmak. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 27,
    text: "Sayin Bakanimiz @Yusuf__Tekin, ogretmenlerin aile birligi mazeretini cozume kavusturacak adimi bekliyoruz. Il emri hakkimizdir! @tcmeb #OgretmeneIlEmri #BakanTekinIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#BakanTekinIlEmri"],
    timesPosted: 0
  },
  {
    id: 28,
    text: "Egitimde firsat esitligi ogretmenin huzuruyla baslar. Huzurlu bir ogretmen icin aile birligi sarttir. Il emri ertelenemez! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #OgretmenimeIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#OgretmenimeIlEmri"],
    timesPosted: 0
  },
  {
    id: 29,
    text: "Otobus terminallerinde gecen omurler, hafta sonu hasret gidermeye calisan ogretmenler... Il emri insani bir gerekliliktir! @tcmeb @Yusuf__Tekin @RTErdogan #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 30,
    text: "Devlet, aileyi koruyucu tedbirleri alir amir hukmu geregince ogretmenlerimize il emri hakki taninmalidir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #Anayasa41",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#Anayasa41"],
    timesPosted: 0
  },
  {
    id: 31,
    text: "Her ogretmenin sinifinda ogrencilerine huzurla ders anlatabilmesi icin zihnindeki aile kaygisinin bitmesi gerekir. Cozum IL EMRI! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 32,
    text: "Kontenjan darligi sebebiyle birbirinden 800 km uzakta kalan ogretmen ciftlerin feryadini duyun. Il emri talep ediyoruz! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #IlEmriTalebi",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#IlEmriTalebi"],
    timesPosted: 0
  },
  {
    id: 33,
    text: "Ogretmenlerin moral ve motivasyonu Turk milli egitiminin teminatidir. Il emriyle binlerce meslektasimizin yuzu gulsun. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #MebElele",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#MebElele"],
    timesPosted: 0
  },
  {
    id: 34,
    text: "Bir cocuk hem anneye hem babaya ayni anda sarilabilmelidir. Aileleri birlestirmek zor degil, bir kararnameye bakar: IL EMRI! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #CocuklarGulsun",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri", "#CocuklarGulsun"],
    timesPosted: 0
  },
  {
    id: 35,
    text: "Gecmis yillarda verilen il emri magduriyetleri sonlandirmisti. Bu yil da ayni hassasiyetin gosterilmesini istiyoruz. @Yusuf__Tekin @tcmeb @RTErdogan #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 36,
    text: "Ogretmenlerin es durumu mazereti ertelenemez ve takas edilemez bir haktir. MEB il emrini ivedilikle ilan etmelidir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #MazeretHakki",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#MazeretHakki"],
    timesPosted: 0
  },
  {
    id: 37,
    text: "Ekonomik kriz ortaminda iki ayri ev gecindirmek ogretmen maaslariyla imkansiz hale geldi. IL EMRI vicdani bir borctur! @Yusuf__Tekin @tcmeb @RTErdogan #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 38,
    text: "Anayasa teminati altindaki aile birliginin korunmasi icin MEB'den acil cozum bekliyoruz. Il emri istiyoruz! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #AileAnayasalHaktir",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#AileAnayasalHaktir"],
    timesPosted: 0
  },
  {
    id: 39,
    text: "Yuzlerce kilometre uzakta gorev yapip haftada bir gun cocugunu gorebilen anne-baba ogretmenlerin cilesine son verin! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #AileHasreti",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri", "#AileHasreti"],
    timesPosted: 0
  },
  {
    id: 40,
    text: "Egitim camiasi tek yurek oldu; il emri talebimiz mesrudur, haklidir ve cozumu mumkundur! @tcmeb @Yusuf__Tekin @iletisim #OgretmeneIlEmri #OgretmenlerTekYurek",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#OgretmenlerTekYurek"],
    timesPosted: 0
  },
  {
    id: 41,
    text: "Okul zili caldiginda ogretmenin akli sadece ogrencisinde olmalidir, baska ildeki evladinda degil. Il emri egitim icin sarttir! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 42,
    text: "Ogretmenlerin aile birligi mazereti icin norm fazlasi endisesi yersizdir; gecmis tecrubeler il emrinin basariyla yurutuldugunu kanitlamistir. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 43,
    text: "Sayin Bakanimiz @Yusuf__Tekin, ogretmenlerin ve ailelerinin gozu kulagi sizden gelecek il emri aciklamasinda. Lutfen sesimizi duyun! @tcmeb #OgretmeneIlEmri #IlEmriAciklansin",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#IlEmriAciklansin"],
    timesPosted: 0
  },
  {
    id: 44,
    text: "Aileler bolunmesin, cocuklar aglamasin, ogretmenler caresiz kalmasin! Il emri lutuf degil, adaletin tecellisidir. @tcmeb @Yusuf__Tekin @RTErdogan #OgretmeneIlEmri",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 45,
    text: "Iki ayri ilde yasamak zorunda kalan ogretmenler yol masraflarini karsilayamiyor. Sayin @Yusuf__Tekin, ogretmenlerinizin yaninda olun! @tcmeb #OgretmeneIlEmri #Gecinemiyoruz",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#Gecinemiyoruz"],
    timesPosted: 0
  },
  {
    id: 46,
    text: "Ogretmenine deger veren bir toplum gelecegine deger verir. Ogretmene verilecek en buyuk deger ailesiyle bulusmasini saglamaktir. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 47,
    text: "Anayasa 41 geregince devlet aile kurumunu korumakla yukumludur. Ogretmenlerimize kosulsuz sartsiz IL EMRI istiyoruz! @RTErdogan @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #Anayasa",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#Anayasa"],
    timesPosted: 0
  },
  {
    id: 48,
    text: "Mazeret atamasi sonrasi acikta kalan binlerce ogretmen ailesi icin zaman daraliyor. Acil cozum: IL EMRI! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #ZamanDaraliyor",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#ZamanDaraliyor"],
    timesPosted: 0
  },
  {
    id: 49,
    text: "Ogretmen mutluysa ogrenci mutludur, okul huzurludur. Aile birligine kavusmus ogretmenlerin enerjisi ulkeye yeter. Il emri sart! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 50,
    text: "Sayin Bakanimiz @Yusuf__Tekin ve Sayin Cumhurbaskanimiz @RTErdogan; binlerce ogretmen tek yurek IL EMRI mujdesi bekliyor! @tcmeb #OgretmeneIlEmri #IlEmriMujdesiGelsin",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#IlEmriMujdesiGelsin"],
    timesPosted: 0
  },
  // Tweet 51-100: Ek 50 Adet Ozgun Il Emri Tweeti (Buyuk I harfi icermez)
  {
    id: 51,
    text: "Binlerce ogretmen esinden ayri kalmasin. Aile birligini saglamak devletimizin en kutsal gorevidir. Cozum: IL EMRI! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #AilemizinYanindayiz",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#AilemizinYanindayiz"],
    timesPosted: 0
  },
  {
    id: 52,
    text: "Milli egitimin temeli ogretmendir. Ailesinden yuzlerce kilometre uzakta gorev yapan ogretmenin yuregi buruktuk. Il emri verilsin! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 53,
    text: "Anayasa Madde 41 ihlal edilemez! Ogretmenlerimiz ailelerine kavusmak istiyor. Sayin Bakanim @Yusuf__Tekin lutfen geregini yapin. @tcmeb #OgretmeneIlEmri #AnayasaGuvencesi",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#AnayasaGuvencesi"],
    timesPosted: 0
  },
  {
    id: 54,
    text: "Her gun saatlerce yol cekip esine veya cocuguna ulasmaya calisan meslektaslarimiz tukendi. Bu cile IL EMRI ile bitmeli! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #YollarBirlestirsin",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#YollarBirlestirsin"],
    timesPosted: 0
  },
  {
    id: 55,
    text: "Kucucuk cocuklar anne sevgisinden veya baba sefkatinden mahrum buyuyor. Egitimci ailelerin cocuklarini ayirmayin! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #CocukHakkidir",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri", "#CocukHakkidir"],
    timesPosted: 0
  },
  {
    id: 56,
    text: "Ogretmenler mazeret atamalarinda acilan birkac kisilik kontenjana mahkum edilemez. Il emri genel ve sartsiz olmalidir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #SartsizIlEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#SartsizIlEmri"],
    timesPosted: 0
  },
  {
    id: 57,
    text: "Bizler ayrilik degil, tek bir cati altinda gorev yapmak istiyoruz. MEB ogretmenine sahip cikmalidir! @Yusuf__Tekin @tcmeb @RTErdogan #OgretmeneIlEmri #OgretmeneSahipCik",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#OgretmeneSahipCik"],
    timesPosted: 0
  },
  {
    id: 58,
    text: "Bir ogretmenin basarisi zihninin rahatligina baglidir. Ailesinden ayri kalan ogretmenin derdi dersine yansir. Il emri sart! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 59,
    text: "Ogretmen maasi ile iki farkli sehirde duzen kurmak, cift mutfak masrafi odemek imkansiz. Bu yuk kaldirilamaz! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #EkonomikYuk",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#EkonomikYuk"],
    timesPosted: 0
  },
  {
    id: 60,
    text: "Hakli mazereti olan hicbir ogretmen disarida kalmamalidir. Bakanligimizin gucu tum ogretmenleri birlestirmeye yeter! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #MebGucludur",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#MebGucludur"],
    timesPosted: 0
  },
  {
    id: 61,
    text: "Okullarda huzur, ogretmende moral icin il emri karari bekliyoruz. Sayin Bakanimiz @Yusuf__Tekin sesimizi duyacaktir. @tcmeb #OgretmeneIlEmri #BakanimDuySesimizi",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#BakanimDuySesimizi"],
    timesPosted: 0
  },
  {
    id: 62,
    text: "Ogretmen cocuklari haftalarca annesini goremiyor. Aile kutsaldir, bu kutsalligi korumak gorevimizdir. @RTErdogan @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #KutsalAile",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri", "#KutsalAile"],
    timesPosted: 0
  },
  {
    id: 63,
    text: "Gecikmis adalet adalet degildir. Mazeret atamasi sonrasi magduriyet yasayan ogretmenler icin acilen IL EMRI verilmelidir. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 64,
    text: "Egitim yuvada baslar, yuvasini kuramayan egitimci nasil ornek olacak? Aile birligi mazereti gormezden gelinemez! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #EgitimYuvadaBaslar",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri", "#EgitimYuvadaBaslar"],
    timesPosted: 0
  },
  {
    id: 65,
    text: "Kamu gorevlileri icerisinde aile birligi en cok zedelenen kesim ogretmenlerimizdir. Bu haksizlik il emri ile giderilsin! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 66,
    text: "Sayin Bakanim @Yusuf__Tekin, ogretmenlerinizi sevindirecek il emri mujdesi ulkemizin dort bir yaninda bayram havasi estirir. @tcmeb #OgretmeneIlEmri #MujdeBekliyoruz",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#MujdeBekliyoruz"],
    timesPosted: 0
  },
  {
    id: 67,
    text: "Her hafta sonu binlerce kilometre yol gidip pazartesi sabah derse yetismeye calisan yorgun ogretmenler... Cozum: IL EMRI! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 68,
    text: "Cocugunun ilk adimlarini, ilk sozcuklerini ekrandan izlemek zorunda kalan ogretmen babalar var. Il emri hak degil mi? @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #HasretBitsin",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri", "#HasretBitsin"],
    timesPosted: 0
  },
  {
    id: 69,
    text: "Turkiye Yuzyili maarif vizyonu ogretmenin huzuruyla anlam kazanir. Parcalanmis aileler bu vizyona yakismaz! @RTErdogan @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #TurkiyeYuzyili",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#TurkiyeYuzyili"],
    timesPosted: 0
  },
  {
    id: 70,
    text: "Mazeret atamasinda bos kalan kadrolar varken ogretmenlerin magdur edilmesi kabul edilemez. Il emri aciklanmalidir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #NormKadro",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#NormKadro"],
    timesPosted: 0
  },
  {
    id: 71,
    text: "Bizler sadece ailemizle birlikte yasayip ogrencilerimize en iyi sekilde egitim vermek istiyoruz. Cok sey mi istiyoruz? @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 72,
    text: "Ogretmenlerimizin aile hasreti artik tahammul sinirlarini asti. Bu donem de il emri verilsin, yuvalar kurtulsun! @tcmeb @Yusuf__Tekin @iletisim #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 73,
    text: "Yuksek ulasim bedelleri yuzunden esinin yanina gidemeyen ogretmenler var. Ekonomik krizde IL EMRI bir can simididir! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #CanSimidi",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#CanSimidi"],
    timesPosted: 0
  },
  {
    id: 74,
    text: "Anne ogretmen bir ilde, baba ogretmen baska ilde... Cocuk kimin yaninda kalacak? Bu drami IL EMRI sonlandirir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #DramBitsin",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri", "#DramBitsin"],
    timesPosted: 0
  },
  {
    id: 75,
    text: "Anayasanin 41. maddesi devletin aileyi koruyacagini kesin dille belirtir. Ogretmenler icin il emri anayasal gorevdir! @RTErdogan @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 76,
    text: "Ogretmenlerin es durumu mazeretinde il/ilce emri verilmesi egitimdeki verimliligi katbekat artiracaktir. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #IlceEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#IlceEmri"],
    timesPosted: 0
  },
  {
    id: 77,
    text: "Meslektaslarimiz gozyaslari icinde gorev yerlerine donmek istemiyor. Sayin Bakanimiz @Yusuf__Tekin lutfen bu hasreti bitirin. @tcmeb #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 78,
    text: "Aile birligine kavusan ogretmen gelecegin fatihleri olacak cocuklari sevgiyle yetistirir. Sevgi once evde baslar! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 79,
    text: "Cift sehirde yasamak bir maasla mumkun degildir. Ogretmenler borc icinde boguluyor. Cozum: IL EMRI! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #GecimDerdineSon",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#GecimDerdineSon"],
    timesPosted: 0
  },
  {
    id: 80,
    text: "Hicbir cocuk anne veya babasiz buyutulmemelidir. Egitimci ailelerin sesini duyun: IL EMRI! @tcmeb @Yusuf__Tekin @RTErdogan #OgretmeneIlEmri #GelecekIcin",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri", "#GelecekIcin"],
    timesPosted: 0
  },
  {
    id: 81,
    text: "Tum sendikalarin ortak talebi olan il emri konusunda Bakanligimizin adim atmasini sabirla bekliyoruz. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #SendikalarTekSes",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#SendikalarTekSes"],
    timesPosted: 0
  },
  {
    id: 82,
    text: "Hakkiyla gorevini yapan ogretmenine sahip cikan bir MEB gormek istiyoruz. Mazeret atamasinda IL EMRI aciklanmalidir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 83,
    text: "Devletin temel tastir aile. Bu tasi yerinden oynatmayalim. Ogretmen ailelerinin birlestirilmesi milli bir odevdir! @RTErdogan @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 84,
    text: "Ogretmen sinifina girdiginde sadece ogrencisine odaklanmali. Akli diger sehirdeki evinde kalan ogretmen yorgundur. @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 85,
    text: "Otobus biletleri ve ucak fiyatlari ortada. Ailesini gormeye gidemeyen ogretmenin yasadigi travma son bulsun. IL EMRI! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 86,
    text: "Bebeklerimizin sut kokusundan uzakta gorev yapan annelerin feryadini duyun. Il emri vicdan meselesidir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #AnnelerAglamasin",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri", "#AnnelerAglamasin"],
    timesPosted: 0
  },
  {
    id: 87,
    text: "Yillarca fedakarca gorev yapmis egitimciler ailelerinden koparilamaz. Sayin Bakanim @Yusuf__Tekin ogretmeninize ses olun! @tcmeb #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 88,
    text: "Kontenjan yetersizligine takilan yuzlerce ogretmen ailesi icin tek umut il emridir. Bu umudu soldurmayin! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #UmutlarBitmesin",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#UmutlarBitmesin"],
    timesPosted: 0
  },
  {
    id: 89,
    text: "Hukuk devleti ilkesi geregince aile birligi hakki ertelenemez. Sayin Bakanimiz @Yusuf__Tekin geregini yapacaktir. @tcmeb #OgretmeneIlEmri #HukukDevleti",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri", "#HukukDevleti"],
    timesPosted: 0
  },
  {
    id: 90,
    text: "Ogretmenin ailesi dagilirsa okulun mayasi bozulur. Egitimin guvencesi icin aile birligi ve il emri sart! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 91,
    text: "Ekonomik sartlar iki hane gecindirmeye musait degil. Ogretmenlerimizin omzu uzerindeki bu yuku IL EMRI ile kaldirin! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 92,
    text: "Anne ve babasindan ayri kalan evlatlarin vebali buyuktur. Sayin Cumhurbaskanimiz @RTErdogan ve @Yusuf__Tekin'den il emri bekliyoruz! @tcmeb #OgretmeneIlEmri",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 93,
    text: "Egitim camiasinin yillardir suregelen il emri teamulu bu yil da bozulmamalidir. Cozum MEB'in elindedir! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri #TeamulBozulmasin",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#TeamulBozulmasin"],
    timesPosted: 0
  },
  {
    id: 94,
    text: "Es durumu mazeretinde acik normlar degerlendirilmeli ve tum ogretmenler eslerinin yanina yerlestirilmelidir. @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #NormlarDolsun",
    category: "Adil Atama",
    tags: ["#OgretmeneIlEmri", "#NormlarDolsun"],
    timesPosted: 0
  },
  {
    id: 95,
    text: "Anayasa 41: Devlet ailenin refah ve huzuru icin gerekli tedbirleri alir. Bu tedbirin adi ogretmen icin IL EMRIDIR! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Anayasal Hak",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 96,
    text: "Ailesi bir arada olan ogretmen memleketin dort bir yaninda askla hizmet eder. Huzurlu ogretmen guclu nesiller demektir! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri",
    category: "Aile Bütünlüğü",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 97,
    text: "Yollarda tukenen nefesler, bitmeyen ayriliklar... Ogretmenlerimizin tek bir istegi var: IL EMRI! @tcmeb @Yusuf__Tekin @iletisim #OgretmeneIlEmri #TekIstekIlEmri",
    category: "Sosyo-Ekonomik",
    tags: ["#OgretmeneIlEmri", "#TekIstekIlEmri"],
    timesPosted: 0
  },
  {
    id: 98,
    text: "Cocuklarimiza sevgiyi ogretirken kendi cocuklarimiza hasret kalmak istemiyoruz. Aileler birlessin! @Yusuf__Tekin @tcmeb #OgretmeneIlEmri #HasretSonaErsin",
    category: "Çocuklar Için",
    tags: ["#OgretmeneIlEmri", "#HasretSonaErsin"],
    timesPosted: 0
  },
  {
    id: 99,
    text: "Mazeret atamasi sureci yalnizca IL EMRI mujdesi ile basariyla tamamlanmis olur. Tum egitimciler bu haberi bekliyor! @tcmeb @Yusuf__Tekin #OgretmeneIlEmri",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri"],
    timesPosted: 0
  },
  {
    id: 100,
    text: "Sayin Bakanimiz @Yusuf__Tekin; 100 binlerce ogretmen ve ailesi sizden gelecek il emri mujdesiyle gulumsemek istiyor. @tcmeb #OgretmeneIlEmri #IlEmriMujdesi2026",
    category: "Bakanlığa Çağrı",
    tags: ["#OgretmeneIlEmri", "#IlEmriMujdesi2026"],
    timesPosted: 0
  }
];

export const INITIAL_50_TWEETS = INITIAL_100_TWEETS;
