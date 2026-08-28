import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'evcil-hayvan-tasima-cantasi-boyut-planlayici';
const title = 'Evcil Hayvan Taşıma Çantası Boyut Planlayıcı';
const description = 'Köpek veya kediniz için altı vücut ölçüsüne göre ideal taşıma çantası iç boyutlarını hesaplayın, havayolu ve seyahat kontrol listesini kullanın.';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: 'Önce ölçün. Güvenle satın alın.',
  journeyHint: 'Evcil hayvanı ve seyahat türünü seçin, ölçüleri girin ve iç alanı kontrol etmek için şablonu kullanın.',
  unitLegend: 'Görüntüleme birimleri',
  speciesStep: 'Hayvan türünü seçin',
  metricUnit: 'Metrik',
  imperialUnit: 'İngiliz',
  speciesLegend: 'Kim seyahat ediyor?',
  speciesDog: 'Köpek',
  speciesCat: 'Kedi',
  modeLegend: 'Seyahat nerede yapılacak?',
  modeCar: 'Araba',
  modeAir: 'Uçak',
  measurementsLegend: 'Evcil hayvanınızı ölçün',
  noseTailLabel: 'Burun ucundan kuyruk sokumuna',
  noseTailHint: 'Kuyruk kavisini dahil etmeden ölçün',
  elbowHeightLabel: 'Yerden dirseğe',
  shoulderWidthLabel: 'Omuz genişliği',
  standingHeightLabel: 'Ayakta duruş yüksekliği',
  beddingLabel: 'Minder veya yatak kalınlığı',
  weightLabel: 'Hayvanın ağırlığı',
  cmUnit: 'cm',
  inchUnit: 'inc',
  kgUnit: 'kg',
  lbUnit: 'lb',
  snubNosedLabel: 'Basık burunlu veya brakisefal ırk',
  snubNosedHint: 'Uçak yolculuğu IATA ayarlamaları gerektirir. Veterinerinize ve havayoluna danışın.',
  presetLegend: 'Bir profille başlayın',
  presetCat: 'Kedi',
  presetSmallDog: 'Küçük köpek',
  presetMediumDog: 'Orta boy köpek',
  presetLargeDog: 'Büyük köpek',
  resultEyebrow: 'Önerilen ölçüm çerçevesi',
  resultTitle: 'Dönmek için yeterli alan',
  resultDimensionLabel: 'Minimum iç başlangıç boyutları',
  lengthLabel: 'Uzunluk',
  widthLabel: 'Genişlik',
  heightLabel: 'Yükseklik',
  petWeightLabel: 'Hayvanın ağırlığı',
  journeyLabel: 'Seyahat türü',
  statusComfort: 'Temel konfor seviyesi',
  statusAirReview: 'Havayolu taşıma incelemesi',
  statusSnub: 'Basık burun ayarı',
  resultDetail: 'Satın almadan önce çantanın iç yapısını, kapı açıklığını, havalandırmayı ve havayolu kurallarını kontrol edin.',
  checklistTitle: 'Dört vücut kontrolü',
  checklistStand: 'Hayvan başı veya kulakları tavana değmeden ayakta durabilir ve dik oturabilir.',
  checklistTurn: 'Hayvan ayaktayken rahatça kendi etrafında dönebilir.',
  checklistLie: 'Hayvan minderin üzerinde doğal bir pozisyonda yatabilir.',
  checklistAirline: 'Uçuş için havayolu sınırlarını, havalandırmayı, kilitleri ve sızdırmaz tabanı doğrulayın.',
  invalidInput: 'Lütfen her ölçü ve ağırlık için pozitif değerler girin.',
  noteTitle: 'Bu aracı alan tahmini için kullanın, uçuş onayı değildir',
  noteText: 'Kurallar havayoluna, araca ve hayvana göre değişir. Bir veteriner hekim hayvanın sağlık durumunu değerlendirmelidir.',
  methodTitle: 'Hesaplama yöntemi',
  methodText: 'Hesaplama IATA yönergelerini temel alır: uzunluk burun-kuyruk mesafesi artı dirsek yüksekliğinin yarısı, genişlik omuz genişliğinin iki katı ve yükseklik ayakta duruş yüksekliği artı minder kalınlığıdır.',
  blueprintLabel: 'İç kısımda hayvanı ve uzunluk-yükseklik kılavuzlarını gösteren ölçülü taşıma çantası şeması',
  dimensionInside: 'İç boyutlar',
  checkMark: 'OK',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: 'Köpek veya kedimi taşıma çantası için nasıl ölçmeliyim?',
    answer: 'Burun ucundan kuyruk sokumuna, yerden dirsek eklemine, omuzların en geniş noktasına ve yerden başın veya kulakların en yüksek noktasına kadar ölçün. Minder kalınlığını ayrıca ekleyin.',
  },
  {
    question: 'Bu planlayıcı hangi iç boyutları hesaplar?',
    answer: 'Vücut uzunluğu ve dirseğe göre minimum iç uzunluğu, omuzlara göre genişliği ve minder dahil toplam yüksekliği tahmin eder.',
  },
  {
    question: 'Sonuçlar havayolu onayını garanti eder mi?',
    answer: 'Hayır. Uçuş modu IATA referans formüllerini uygular, ancak her havayolunun özel kuralları olabilir. Daima taşıyıcının resmi kurallarını doğrulayın.',
  },
  {
    question: 'Basık burunlu ırklar uçuşta neden daha büyük çantaya ihtiyaç duyar?',
    answer: 'IATA kuralları, uçuş sırasında aşırı ısınmayı ve solunum güçlüğünü önlemek için brakisefal ırklara daha geniş alan önerir.',
  },
  {
    question: 'Araba için taşıma çantası olabildiğince büyük mü olmalıdır?',
    answer: 'Hayır. Çanta hayvanın durması, dönmesi ve yatması için yeterli alan sağlamalı, ancak araç içinde emniyetle sabitlenebilmelidir.',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: 'Seyahat türünü seçin', text: 'Uygun kontrol kriterlerini ayarlamak için araba veya uçak seçeneğini belirleyin.' },
  { name: 'Altı ölçüyü girin', text: 'Hayvan sakinken vücut ölçülerini ve ağırlığını alın.' },
  { name: 'İç boyutları okuyun', text: 'Piyasadaki çantaları karşılaştırırken uzunluk, genişlik ve yüksekliği başlangıç noktası olarak kullanın.' },
  { name: 'Kuralları doğrulayın', text: 'Satın almadan önce kilitleri, havalandırmayı ve havayolu taleplerini kontrol edin.' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Evcil hayvanınız için doğru taşıma çantasını seçme rehberi',
    items: [
      'Sadece vücut ağırlığına bakmak yerine evcil hayvanın vücut ölçülerini eksiksiz ve doğru şekilde alın.',
      'Gerçek çantaları karşılaştırmak için kullanılabilir iç boyutları mağazalarda veya internette esas alın.',
      'Çantanın emniyet kilit mekanizmasını, kapısını ve havalandırmasını her yönden daima kontrol edin.',
      'Uçakla taşıma özel hazırlık, kural kontrolü ve uzman veteriner hekim tavsiyesi gerektirir.',
    ],
  },
  { type: 'title', text: 'Taşıma çantası boyutları nasıl planlanır', level: 2 },
  {
    type: 'paragraph',
    html: 'Uygun bir taşıma çantası köpek veya kediniz için dört doğal harekete izin vermelidir: başını bükmeden veya kulaklarını sıkıştırmadan dik durma, dik oturma, kendi etrafında engelsiz dönme ve rahatça yatma. Bu planlayıcı gerekli iç uzunluk, genişlik ve yüksekliği kişiselleştirilmiş ve doğru bir şekilde belirler ve güvenli seyahat sağlar.',
  },
  {
    type: 'paragraph',
    html: 'Hesaplanan değerler net iç kullanım alanını temsil eder. Kalın minderlerin, su kaplarının veya eğimli duvarların satın alma sırasında kullanılabilir alanı daraltabileceğini unutmayın. Kararsız kaldığınızda her zaman bir üst boyutu seçmeniz hayvanın konforu ve sağlığı açısından son derece önemlidir.',
  },
  { type: 'title', text: 'Her vücut ölçüsünün önemi ve rolü', level: 2 },
  {
    type: 'table',
    headers: ['Vücut ölçüsü', 'Hayvan için önemi', 'Hesaplamadaki kullanımı'],
    rows: [
      ['Burun ucundan kuyruk sokumuna', 'Kuyruk hariç temel gövde uzunluğunu belirler.', 'İç uzunluk'],
      ['Yerden dirseğe', 'Dönerken ön bacak hareket alanı ve esneklik sağlar.', 'İç uzunluk'],
      ['Omuz genişliği', 'En geniş noktada yeterli genişliği garanti eder.', 'İç genişlik'],
      ['Ayakta duruş yüksekliği', 'Baş ve kulakları tavana çarpmaktan korur.', 'İç yükseklik'],
      ['Minder kalınlığı', 'Yatak konulduktan sonraki net yüksekliği korur.', 'İç yükseklik'],
      ['Vücut ağırlığı', 'Çantanın taşıma kapasitesini ve dayanıklılığını kontrol etmeye yarar.', 'Yük kontrolü'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Formüller IATA canlı hayvan taşıma kurallarına dayanır: iç uzunluk gövde uzunluğu ve dirsek yüksekliğinin yarısını birleştirir, genişlik omuzların iki katıdır ve yükseklik duruş yüksekliği artı minderi kapsar.',
  },
  { type: 'title', text: 'Uçak yolculuklarında dikkat edilecekler ve güvenlik kuralları', level: 2 },
  {
    type: 'paragraph',
    html: 'Boyut tahmini resmi bir uçuş onayı yerine geçmez. Uçak tipi, dört taraflı havalandırma ve mevsimsel koşullar gibi faktörler güvenlik ve hayvan sağlığı için belirleyicidir ve önceden teyit edilmelidir.',
  },
  {
    type: 'tip',
    title: 'Pratik alan testi evde nasıl yapılır ve değerlendirilir',
    html: 'Hayvanı sakin bir ortamda çantaya koyun ve hareketlerini birkaç dakika gözlemleyin. Sıkışık görünüyorsa veya dönmekte zorlanıyorsa bir üst boyutu tercih edin ve rahat etmesini sağlayın.',
  },
];

const schemas: PetCarrierCrateSizePlannerLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
  } as WithContext<HowTo>,
];

export const content: PetCarrierCrateSizePlannerLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
