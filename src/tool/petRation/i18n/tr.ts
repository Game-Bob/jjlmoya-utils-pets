import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'evcil-hayvan-gunluk-mama-hesaplama';
const title = 'Evcil Hayvan Günlük Mama Hesaplama Aracı';
const description = 'Köpeğinizin veya kedinizin ihtiyaç duyduğu tam mama miktarını hesaplayın. Sağlıklı bir kilo için veteriner RER ve DER formüllerine dayalı profesyonel bir araç.';

const ui: PetRationUI = {
  toolTitle: 'Günlük Mama Hesaplayıcı',
  sectionProfile: '1. Evcil Hayvan Profili',
  labelAnimal: 'Hayvan',
  labelStage: 'Yaşam Evresi',
  labelWeight: 'Vücut Ağırlığı',
  labelActivity: 'Fiziksel Aktivite',
  sectionDiet: '2. Diyet ve Gıda',
  labelDietType: 'Beslenme Türü',
  speciesDog: 'Köpek',
  speciesCat: 'Kedi',
  speciesRabbit: 'Tavşan',
  stagePuppy: 'Yavru veya Genç',
  stageAdult: 'Yetişkin',
  stageSenior: 'Yaşlı',
  activityLow: 'Düşük',
  activityMod: 'Normal',
  activityHigh: 'Yüksek',
  dietDry: 'Sadece Kuru Mama',
  dietMixed25: 'Karışık (25% yaş mama)',
  dietHalf: 'Yarı Yarıya (50% yaş mama)',
  dietWet: 'Sadece Yaş Mama',
  manualAdjust: 'Manuel ayar (1-99%)',
  wetPercentLabel: 'Diyetteki yaş mama oranı (%)',
  tagDry: 'Kuru',
  tagWet: 'Yaş',
  totalKcal: 'Toplam Günlük Enerji',
  kcalUnit: 'kcal/gün',
  statusPuppy: 'Hızlı büyüme aşaması',
  statusSenior: 'Olgun metabolizma hızı',
  statusLargeDog: 'Büyük ırk: Eklem bakımı',
  statusDefault: 'Dengeli kilo durumu',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'RER nedir ve neden önemlidir?',
    answer: 'RER ( Resting Energy Requirement , Dinlenme Enerji Gereksinimi ) , bir evcil hayvanın dinlenme halindeyken temel yaşam fonksiyonlarını sürdürmek için ihtiyaç duyduğu minimum enerjidir . Günlük mama miktarını hesaplamanın bilimsel temelidir ve aşırı beslenmeyi veya yetersiz beslenmeyi önlemeye yardımcı olur . RER değerini anlamak , sahiplerin evcil hayvanlarının biyolojik ihtiyaçlarına göre porsiyonları ayarlamasına olanak tanır ve organların verimli çalışmasını sağlar .',
  },
  {
    question: 'Kısırlaştırma evcil hayvanımın mama miktarını nasıl etkiler?',
    answer: 'Kısırlaştırılmış hayvanlar genellikle yaklaşık %15 ila %20 daha düşük bir bazal metabolizmaya sahip olma eğilimindedir . Kilo alımını önlemek için mama miktarını biraz azaltmak veya hesaplayıcıda aktivite seviyesini " Düşük " olarak ayarlamak gerekebilir . Prosedür sonrası hormonal değişiklikler , vücudun enerjiyi yakma ve yağı depolama şeklini değiştirerek mama kabı üzerindeki dikkati daha da önemli hale getirir .',
  },
  {
    question: 'Bu hesaplayıcıyı yavrular için kullanabilir miyim?',
    answer: 'Büyüme aşamasındaki yavrular çok daha yüksek enerjiye ( RER\'in 3 katına kadar ) ihtiyaç duyarlar . Bu hesaplayıcı yetişkin köpekler ve kediler için optimize edilmiştir . Yavrular için her zaman veterinerinize danışarak spesifik bir büyüme planı oluşturun . Gelişim dönemindeki hatalı beslenme , kemik yapısında kalıcı hasarlara ve eklem sorunlarına yol açabilir .',
  },
  {
    question: 'Günlük mama miktarını günde kaç öğüne bölmeliyim?',
    answer: 'İdeal olan , elde edilen toplam miktarı günde 2 veya 3 öğüne bölmektir . Bu , glikoz seviyelerini sabit tutmaya yardımcı olur ve sindirimi iyileştirir , özellikle mide torsiyonuna yatkın ırklar için faydalıdır . Düzenli bir beslenme saati , evcil hayvanınızın kendini tok hissetmesini sağlar ve öğün aralarında mama dilenme olasılığını azaltır .',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Tür Seçimini Dikkatle Yapın', text: 'Hesaplamanın bir köpek mi yoksa kedi mi için yapıldığını belirtin , çünkü bunların metabolizmaları ve kilo sınırları biyolojik özelliklerine göre büyük farklılıklar gösterir .' },
  { name: 'Doğru Ağırlığı Ayarlayın', text: 'Kaydırıcıyı evcil hayvanınızın kilogram cinsinden mevcut ağırlığına getirin . Doğru bir enerji gereksinimi hesaplaması için yakın zamanda ölçülmüş bir ağırlık kullanmak hayati önem taşır .' },
  { name: 'Aktivite Seviyesini Belirleyin', text: 'Dört ayaklı dostunuzun gerçek günlük egzersiz ve enerji seviyelerine göre düşük , normal veya yüksek aktivite seçeneklerinden birini seçin .' },
  { name: 'Mamanın Kalorisini Girin', text: 'Mama paketinin üzerindeki kcal/kg değerini bulun ve girin . Bu sayede gram cinsinden sonuç en doğru şekilde hesaplanarak evcil hayvanınızın sağlığını korumaya yardımcı olur .' },
];

const bibliography: PetRationLocaleContent['bibliography'] = [
  { name: 'WSAVA: Beslenme Araç Seti ve Kalori Önerileri Rehberi', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
  { name: 'FEDIAF: Tam ve Tamamlayıcı Evcil Hayvan Mamaları İçin Beslenme Kılavuzları', url: 'https://fediaf.org/self-regulation/nutrition.html' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Veteriner Beslenmesi ve Sağlık Yönetiminin Temel İlkeleri',
    items: [
      'RER formülü 70 × ( kg cinsinden ağırlık )^0,75 şeklindedir . Bu her modern veteriner kalori hesaplamasının bilimsel temelidir .',
      'DER değeri , RER değerini hayvanın yaşam tarzı faktörüyle çarparak günlük kalori ihtiyacını belirler .',
      'Kısırlaştırılmış bir evcil hayvan , hormonal değişiklikler nedeniyle daha az kaloriye ihtiyaç duyar .',
      'Obezite bugün evcil hayvanların %50\'sini etkilemekte ve yaşam sürelerini dramatik şekilde kısaltmaktadır .',
      'Hassas porsiyon kontrolü , bir sahibin yapabileceği en etkili önleyici tıp yöntemlerinden biridir .',
      'Bir mutfak terazisi kullanmak , bilime dayalı bir beslenme planını takip etmek için gereken doğruluğu sağlar .',
    ],
  },
  { type: 'title', text: 'Evcil Hayvanınızın Sağlığı İçin Günlük Mama Hesaplama Rehberi', level: 2 },
  {
    type: 'paragraph',
    html: 'Bir köpeği veya kediyi doğru şekilde beslemek , sadece her sabah kasesini doldurmaktan çok daha fazlasıdır . Beslenme , evcil hayvanınızın sağlığının , uzun ömürlülüğünün ve duygusal refahının temel taşıdır . <strong>Evcil hayvan günlük mama hesaplayıcısı</strong> , modern veteriner hekimliğinde en sık karşılaşılan iki sorunu önlemek isteyen her sorumlu sahip için vazgeçilmez bir araçtır : besin eksikliği ve gelişmiş ülkelerdeki hayvanların yarısından fazlasını etkileyen obezite .',
  },
  {
    type: 'paragraph',
    html: 'Bu kılavuzda , kalori hesaplamalarının arkasındaki bilimsel temelleri , mama etiketlerini nasıl yorumlayacağınızı ve yaş , aktivite seviyesi gibi faktörlerin günlük mama miktarını nasıl etkilediğini inceleyeceğiz . Günlük porsiyondaki küçük ayarlamaların diyabet , eklem sorunları ve kalp sağlığı üzerindeki büyük etkilerini anlamanıza yardımcı olacağız . Evcil hayvanınızın ideal kilosunu koruması , yaşam kalitesini doğrudan artıran en önemli faktördür .',
  },
  { type: 'title', text: 'Hesaplamaların Arkasındaki Bilim : RER ve DER İlişkisi', level: 3 },
  {
    type: 'paragraph',
    html: 'Bir hayvanın günde ne kadar yemesi gerektiğini hassas bir şekilde belirlemek için veteriner hekimler ve beslenme uzmanları iki ana kavram kullanır : RER ve DER . Bu kısaltmalar sırasıyla Dinlenme Enerji Gereksinimi ve Günlük Enerji Gereksinimi anlamına gelir . Bunların birbiriyle nasıl etkileşime girdiğini anlamak , kilonun güvenli ve kontrollü bir şekilde yönetilmesi için kritik bir adımdır .',
  },
  {
    type: 'paragraph',
    html: 'RER , hayvan dinlenirken vücut fonksiyonları , solunum ve dolaşım için gereken enerjiyi temsil eder . DER ise bu değeri alır ve köpeğin veya kedinin yaşam tarzına , yaşına ve aktivite durumuna göre uyarlar . Bu değerleri doğru bir şekilde kalibre ederek , zaman içinde sağlıklı bir vücut kondisyon puanı elde etmek ve bunu korumak mümkündür .',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: Dinlenme enerjisi', value: '70 × kg^0,75' },
      { label: 'Yavru büyüme katsayısı', value: 'x2,5 ile x3,5 arası' },
      { label: 'Aktif yetişkin katsayısı', value: 'x1,6 ile x2,0 arası' },
      { label: 'Yaşlı/Kıdemli katsayısı', value: 'x1,0 ile x1,4 arası' },
    ],
  },
  { type: 'title', text: 'Mama Paketindeki Besin Etiketlerini Okuma ve Anlama Teknikleri', level: 3 },
  {
    type: 'paragraph',
    html: 'Hesaplayıcının size tam gram miktarını verebilmesi için mamanın <strong>enerji yoğunluğunu</strong> bilmeniz gerekir . Bu değer genellikle paketin üzerinde kcal/kg veya kcal/100g olarak belirtilir . Bu veriyi doğru girdiğinizde , evcil hayvanınıza ne eksik ne de fazla besin içeren mükemmel bir diyet planı oluşturmuş olursunuz . Hassas bir mutfak terazisi kullanarak bu gramları ölçmek , başarının anahtarıdır .',
  },
  {
    type: 'stats',
    items: [
      { label: 'Diyet/Hafif mamalar', value: 'yaklaşık 3000 kcal/kg' },
      { label: 'Standart yetişkin mamaları', value: 'yaklaşık 3500 kcal/kg' },
      { label: 'Yüksek enerjili yavru mamaları', value: 'yaklaşık 4000 kcal/kg' },
      { label: 'Konserve yaş mamalar', value: 'yaklaşık 1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Veterinerden Beslenme Notu',
    html: 'Her evcil hayvan kendine has bir metabolizmaya sahip bir bireydir . Hesaplayıcı bilimsel bir başlangıç noktası sunar , ancak siz her zaman evcil hayvanınızın vücut kondisyonunu kaburgalarını hissederek kontrol etmelisiniz . Kaburgaları çok fazla bastırmadan hissedebiliyorsanız kilo idealdir . Kaburgaları bulmak güçleşmişse porsiyonu azaltmanın vakti gelmiş olabilir .',
  },
  { type: 'title', text: 'Köpekler ve Kediler Arasındaki Metabolik Farklılıklar', level: 3 },
  {
    type: 'paragraph',
    html: 'Kediler zorunlu etçillerdir ve metabolizmaları enerjiyi proteinlerden almak üzere özelleşmiştir . Köpekler ise daha esnek bir metabolizmaya sahip olmalarına rağmen karbonhidrat fazlalığına karşı kilo alımı ile tepki verirler . Her iki tür için de eklem sağlığı ve kalp sağlığını korumak adına kontrollü beslenme en önemli sağlık yatırımıdır .',
  },
  {
    type: 'paragraph',
    html: 'Kesin mama miktarını hesaplamak için birkaç dakikanızı ayırmak , bir evcil hayvan sahibi olarak yapabileceğiniz en karlı koruyucu tıp yatırımıdır . Sağlıklı bir kilo , kronik hastalık riskini azaltır ve en iyi dostunuza uzun , enerjik bir yaşam şansı verir . Bir sonraki veteriner kontrolünüzde mevcut beslenme planınızı uzmanla teyit edin .',
  },
];

const schemas: PetRationLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } as any,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((h) => ({
      '@type': 'HowToStep',
      name: h.name,
      text: h.text,
    })),
  } as any,
];

export const content: PetRationLocaleContent = {
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Bibliyografya',
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas,
};
