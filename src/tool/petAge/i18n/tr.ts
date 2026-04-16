import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'evcil-hayvan-yas-hesaplama';
const title = 'Evcil Hayvan Yaş Hesaplama Aracı';
const description = 'Köpeğinizin veya kedinizin gerçek yaşını insan yılı olarak keşfedin. "7 ile çarpma" kuralını unutun. Güncel veteriner bilimine dayalı hesaplayıcımızı kullanarak en doğru sonuçları alın.';

const ui: PetAgeUI = {
  toolTitle: 'Yaş Hesaplama',
  toolSubtitle: 'Tüylü dostunuz aslında kaç insan yaşında?',
  petNameLabel: 'İsim (Opsiyonel)',
  petNamePlaceholder: 'Yör: Karabaş',
  petTypeDog: 'Köpek',
  petTypeCat: 'Kedi',
  sizeSmall: 'Küçük',
  sizeMedium: 'Orta',
  sizeLarge: 'Büyük',
  sizeGiant: 'Dev',
  birthYearLabel: 'Doğum Yılı',
  humanAgeLabel: 'İnsan yaşı olarak',
  humanAgeUnit: 'yaşında',
  humanAgeYears: 'yaşında',
  lifeStageLabel: 'Yaşam Evresi',
  milestoneLabel: 'Sonraki Dönem',
  shareBtn: 'Sonucu Paylaş',
  shareSuccess: 'Kopyalandı! Kart açılıyor...',
  humanAgeTitle: 'Sihirli Yaş',
  recalculateBtn: 'Başka Bir Yaş Hesapla',
  realAgeLabel: 'Gerçek Yaş',
  defaultPetName: 'Evcil Hayvanınız',
  stageDogPuppy: 'Oyuncu Yavru',
  stageDogTeen: 'Asi Ergen',
  stageDogAdult: 'Formda Yetişkin',
  stageDogMature: 'Olgun ve Seçkin',
  stageDogSenior: 'Bilge Kıdemli',
  stageCatKitten: 'Meraklı Yavru',
  stageCatYouth: 'Hareketli Genç',
  stageCatReign: 'Evin Hakimi',
  stageCatVeteran: 'Şımartılmış Gazi',
  stageCatVenerable: 'Saygıdeğer Yaşlı',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: 'Bir köpek yılının yedi insan yılına eşit olduğu doğru mu?',
    answer: 'Hayır. Bu, modern veteriner biliminin çürüttüğü çok basitleştirilmiş bir kuraldır. Köpekler ilk iki yıllarında çok hızlı olgunlaşırlar ve ardından bu süreç yavaşlar; ağırlık ve ırka göre büyük farklılıklar gösterir. DNA metilasyonu üzerine yapılan son araştırmalar, hayvanların yaşamı boyunca gerçek biyolojik gelişimini çok daha doğru yansıtan yaşlanma formülleri geliştirilmesini sağlamıştır.',
  },
  {
    question: 'Büyük köpekler neden daha hızlı yaşlanır?',
    answer: 'Büyük köpek ırkları daha hızlı bir metabolizmaya ve büyümeye sahiptir, bu da hücrelerinde daha fazla oksidatif strese neden olur. Bu, yaşam beklentilerinin küçük köpeklere göre daha kısa olduğu anlamına gelir. Biyolojik işaretleyiciler, dev ırkların 5 yaşında kıdemli (senior) statüsüne ulaşabileceğini gösterirken, küçük ırklar 10 veya 11 yaşına kadar bu aşamaya gelmeyebilir.',
  },
  {
    question: 'Kediler insanlara kıyasla nasıl yaşlanır?',
    answer: 'Bir kedi bebeklik dönemini bir ayda tamamlar, 6 ayda ergenliğe ulaşır ve 2 yaşında yetişkinliğe (24 insan yılına eşdeğer) erişir. Bundan sonra, bir kedinin yaşamındaki her yıl yaklaşık 4 insan yılına eşittir. Bu model, köpeklerde görülen büyük değişkenliğin aksine, farklı kedi ırkları arasında oldukça sabittir.',
  },
  {
    question: 'Bir evcil hayvan hangi yaşta Kıdemli (Senior) sayılır?',
    answer: 'Genellikle bir köpek, beklenen yaşam süresinin %75\'ine ulaştığında kıdemli olarak kabul edilir. Kediler için bu, sağlık durumlarına bağlı olarak genellikle 7 ile 11 yaş arasındadır. Düzenli veteriner muayeneleri, böbrek hastalıkları veya bilişsel gerileme gibi yaşla ilgili yaygın sorunları izlemek için bu aşamada giderek daha kritik hale gelir.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Tür Seçimi Yapın', text: 'Spesifik metabolizma hızlarına göre doğru biyolojik formülü uygulamak için köpek mi yoksa kedi mi sahibi olduğunuzu seçin.' },
  { name: 'Boyutu Belirleyin', text: 'Köpekler için ağırlık, biyolojik yaşı belirlemede temel faktördür. Küçük (10 kg\'a kadar), orta (10-25 kg), büyük (25-45 kg) veya dev (45 kg üzeri) olarak belirtin.' },
  { name: 'Doğum Yılını Giriniz', text: 'Evcil hayvanınızın kronolojik yaşını hesaplamak için doğum yılını girin. Sistemimiz bu bilgiyi yerleşik yaşlanma eğrilerine göre işleyecektir.' },
  { name: 'Yaşam Evresini Analiz Edin', text: 'Evcil hayvanınızın bir insana kıyasla yavru, genç, yetişkin veya kıdemli aşamada olup olmadığını öğrenmek için sonucu kontrol edin ve mevcut ihtiyaçlarını anlayın.' },
];

const bibliography: PetAgeLocaleContent['bibliography'] = [
  { name: 'AAHA Köpek ve Kedi Kıdemli Bakım Rehberi', url: 'https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2023-aaha-senior-care-guidelines-for-dogs-and-cats/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats.pdf' },
  { name: 'AKC: Köpek Yılları İnsan Yıllarına Nasıl Hesaplanır', url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Evcil Hayvan Yaşlanması Hakkında Bilmeniz Gerekenler',
    items: [
      '"7 kuralı" bir efsanedir: Köpekler ilk 2 yılda katlanarak olgunlaşır ve hızla gelişirler.',
      '1 yaşındaki bir köpek 15 insan yılına, 2 yaşındaki bir köpek ise 24 insan yılına eşittir.',
      'Büyük köpekler 2 yaşından sonra küçük köpeklere göre biyolojik stres nedeniyle daha hızlı yaşlanırlar.',
      'Kediler daha doğrusal bir eğri izler: 2 yaşından sonra her kedi yılı 4 insan yılına eşittir.',
      'Biyolojik yaş, sağlık ihtiyaçlarını tahmin etmede tek başına kronolojik yaştan daha iyi bir göstergedir.',
      'Düzenli taramalar, yaşa bağlı sorunları ciddileşmeden önce tespit etmeye yardımcı olabilir.',
      'Doğru beslenme ve egzersiz, yaşlanma sürecini yavaşlayan en önemli dış faktörlerdir.',
      'Diş sağlığı, evcil hayvanlarda genel vücut sağlığı ve uzun ömür ile doğrudan ilişkilidir.',
    ],
  },
  { type: 'title', text: 'Evcil Hayvanınızın Yaşı Hakkındaki Bilimsel Gerçekler ve Rehber', level: 2 },
  {
    type: 'paragraph',
    html: '2 yaşındaki bir kedinin zaten 24 yaşındaki bir insanın olgunluğuna sahip olduğunu biliyor muydunuz? 7 ile çarpma kuralının neden bir efsane olduğunu ve biyolojik gerçekliği anlamanın evcil hayvanınızın bakımını nasıl iyileştirebileceğini keşfedin. "1 köpek yılı eşittir 7 insan yılı" şeklindeki eski inanış, yaşamın başındaki devasa gelişimsel değişiklikleri hesaba katmayan aşırı bir basitleştirmedir. Hayvanlar hayatlarının ilk iki yılında baş döndürücü bir hızla olgunlaşarak cinsel ve fiziksel olgunluğa çok çabuk ulaşırlar. Bundan sonra yaşlanma eğrisi düzleşir ve önemli ölçüde yavaşlar.',
  },
  {
    type: 'paragraph',
    html: 'Epigenetik saatler ve DNA metilasyonu üzerine yapılan çalışmalar da dahil olmak üzere modern araştırmalar, bize çok daha incelikli bir bakış açısı sunmuştur. Bu çalışmalar, bir köpeğin DNA\'sındaki kimyasal değişikliklerin yaşamı boyunca farklı oranlarda değiştiğini göstermektedir. Yavruyken bu değişiklikler hızlı ve yoğundur, yetişkinlikte ise metabolik ve genetik değişiklikler daha kademeli olur. Bu anlayış, bilim insanlarının herhangi bir doğrusal çarpmadan çok daha doğru olan logaritmik formüller geliştirmelerini sağlamıştır.',
  },
  { type: 'title', text: 'Hesaplamanın Arkasındaki Bilim ve Veteriner Verileri', level: 3 },
  {
    type: 'paragraph',
    html: 'Bu araç, size mümkün olan en doğru tahmini vermek için <strong>American Animal Hospital Association (AAHA)</strong> resmi kılavuzlarını ve köpeklerdeki DNA metilasyonu üzerine yapılan en son çalışmaları kullanır. Boyuta özel verileri ırktan bağımsız biyolojik işaretleyicilerle birleştirerek, hayvanın gelişiminin kapsamlı bir modelini oluşturuyoruz. Bu yaklaşım, bir Chihuahua ile bir Danua\'nın doğumlarından itibaren çok farklı yaşam deneyimlerine ve yaşlanma profillerine sahip olduğunu kabul eder.',
  },
  {
    type: 'paragraph',
    html: 'Bu farklılıkları anlamak, sorumlu evcil hayvan sahipleri için çok önemlidir. Bu, kıdemli bir diyete geçmek veya eklemler için önleyici takviyelere başlamak gibi veteriner müdahalelerinin doğru zamanda ayarlanmasını sağlar. Hesaplayıcımız, hakemli dergilerdeki karmaşık bilim ile dünyanın daha geniş kitleleri arasındaki pratik bilgileri buluşturur.',
  },
  {
    type: 'table',
    headers: ['Tür', '1. Yıl', '2. Yıl', '3. Yıldan İtibaren'],
    rows: [
      ['Kedi', '15 insan yılı', '24 insan yılı', 'Yılda +4 yıl'],
      ['Küçük Köpek', '15 insan yılı', '24 insan yılı', 'Yılda +5 yıl'],
      ['Orta Köpek', '15 insan yılı', '24 insan yılı', 'Yılda +6 yıl'],
      ['Büyük Köpek', '15 insan yılı', '24 insan yılı', 'Yılda +7 yıl'],
      ['Dev Köpek', '15 insan yılı', '24 insan yılı', 'Yılda +8 yıl'],
    ],
  },
  { type: 'title', text: 'Yaşam Evreleri Neler Beklemeli ve Nasıl Hazırlanmalı', level: 3 },
  {
    type: 'paragraph',
    html: 'Evcil hayvanınızın gerçek yaşını bilmek, her aşamada tıbbi ve duygusal ihtiyaçlarını anlamanıza yardımcı olur. Tıpkı insanların farklı yaşam aşamalarından geçmesi gibi, köpekler ve kediler de büyüdükçe belirli fizyolojik ve psikolojik değişiklikler yaşarlar. Bu geçişlerin farkında olmak, bir ergen için yüksek enerjili oyunlar veya bir kıdemli için uzmanlaşmış ortopedik bakım olsun, doğru zamanda doğru desteği sağlamanıza olanak tanır. Bilinçli bakım, mutlu bir yaşamın anahtarıdır.',
  },
  {
    type: 'card',
    title: 'Yavru veya Junior Dönemi',
    icon: 'mdi:star-shooting',
    html: 'Bu, patlayıcı büyüme ve gelişme aşamasıdır. Kemikleri inanılmaz bir hızla büyür, süt dişleri dökülerek kalıcı dişlere yer açar ve beyinleri bilgiyi bir sünger gibi emer. Dengeli birer yetişkin olmalarını sağlamak için aşılama ve erken sosyalleşme burada kritiktir. Ayrıca bu dönem, ömür boyu sürecek iyi alışkanlıklar oluşturmak için en iyi zamandır. Doğru eğitim bu dönemde başlar.',
  },
  {
    type: 'card',
    title: 'Yetişkinlik Dönemi',
    icon: 'mdi:shield-check',
    html: 'Bu, çoğu hayvan için fiziksel ve zihinsel formun zirvesidir. Kişilikleri artık oturmuştur ve genellikle en aktif oldukları dönemdir. Gelecekteki hastalıkları önlemek için yoğun fiziksel aktivitelerin tadını çıkarmak ve ideal vücut ağırlığını korumak için mükemmel bir zamandır. Sürekli egzersiz ve dengeli beslenme, bu yıllardaki sağlığın temel direkleridir ve güçlü bağışıklık sistemleri ile dayanıklı vücutlar oluşturmaya yardımcı olur.',
  },
  {
    type: 'card',
    title: 'Yaşlılık ve Kıdemlilik Dönemi',
    icon: 'mdi:heart-pulse',
    html: 'Ağız çevresinde gri tüyler belirmeye başlar ve hayvan daha fazla uyuma eğilimi gösterir. Metabolizmaları önemli ölçüde yavaşlar ve yüksek etki düzeyindeki oyunlara daha az ilgi gösterebilirler. Buradan itibaren veteriner muayeneleri altı ayda bir yapılmalıdır. Artrit belirtilerini, diş sağlığındaki değişiklikleri ve rahatsızlığa işaret edebilecek herhangi bir davranış değişikliğini izleyin. Kıdemli hastalıklarının erken tespiti, yaşam kalitelerinin yüksek kalmasını sağlamanın en iyi yoludur.',
  },
  {
    type: 'tip',
    title: 'Yaşlanma Üzerine Veteriner Önerisi',
    html: 'Hesaplanan yaş, geniş veri setlerine dayanan ortalama bir biyolojik tahmindir. Spesifik ırk, genetik, diyet ve yaşam tarzı gibi faktörlerin tümü evcil hayvanınızın gerçek yaşlanma hızı üzerinde önemli bir etkiye sahip olabilir. Bazı hayvanlar gençliklerini onlu yaşlarının sonuna kadar korurken, diğerleri daha erken ek bakıma ihtiyaç duyabilir. Kişiselleştirilmiş tavsiyeler ve kapsamlı bir sağlık değerlendirmesi için her zaman dostunuzu en iyi tanıyan veteriner hekiminize danışın.',
  },
  {
    type: 'paragraph',
    html: 'Sonuç olarak, evcil hayvanınızın yaşını bilimsel yöntemlerle takip etmek sadece merak gidermek değil, aynı zamanda onun sağlığını proaktif bir şekilde yönetmek anlamına gelir. Yaşa uygun beslenme, egzersiz düzeni ve sağlık kontrolleri ile sevimli dostunuzun ömrünü uzatabilir ve onunla geçirdiğiniz zamanın kalitesini artırabilirsiniz.',
  },
];

const schemas: PetAgeLocaleContent['schemas'] = [
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

export const content: PetAgeLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq,
  bibliographyTitle: 'Bibliyografya',
  bibliography,
  howTo,
  schemas,
};
