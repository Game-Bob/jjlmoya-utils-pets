import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';

const slug = 'evcil-hayvan-gebelik-hesaplayici';
const title = 'Evcil Hayvan Gebelik Hesaplayıcı';
const description = 'Köpek, kedi, tavşan veya ferret için çiftleşme tarihinden itibaren doğum tarihini ve süresini hesaplayın.';

const ui: PetGestationLocaleContent['ui'] = {
  "journeyHint": "Türü seçin, çiftleşme tarihini girin ve beklenen doğum aralığını takip edin.",
  "instantHint": "Ayarda değişiklik yaptığınızda takvim anında güncellenir.",
  "speciesLegend": "Bu ne tür bir evcil hayvan?",
  "speciesDog": "Köpek",
  "speciesCat": "Kedi",
  "speciesRabbit": "Tavşan",
  "speciesFerret": "Ferret",
  "speciesDogMeta": "58 ila 72 gün",
  "speciesCatMeta": "64 ila 66 gün",
  "speciesRabbitMeta": "Yaklaşık 31 gün",
  "speciesFerretMeta": "Yaklaşık 42 gün",
  "matingDateLabel": "Çiftleşme tarihi",
  "matingDateHint": "Bilinen ilk çiftleşme tarihini girin. Bu bir tahmindir ve kesin döllenme günü değildir.",
  "presetToday": "Bugün",
  "presetWeekAgo": "7 gün önce",
  "presetFortnightAgo": "14 gün önce",
  "resultEyebrow": "Gebelik pusulası sonucu",
  "dueDateLabel": "Tipik doğum tarihi",
  "windowLabel": "Beklenen aralık",
  "remainingLabel": "Tarihe kalan gün",
  "elapsedLabel": "Geçen gün",
  "daysLabel": "gün",
  "dayLabel": "gün",
  "statusFuture": "Girilen tarih gelecekte",
  "statusWaiting": "Gebelik süreci devam ediyor",
  "statusWindow": "Doğum aralığı başladı",
  "statusLate": "Tahmini dış sınır aşıldı",
  "resultEmpty": "Doğum pusulanız burada görünecek.",
  "sampleLabel": "Örnek görünüm",
  "sceneMating": "ÇİFTLEŞME",
  "sceneToday": "Mevcut durum",
  "sceneDue": "DOĞUM ARALIĞI",
  "noteTitle": "Önemli sağlık notu",
  "noteText": "Çiftleşme tarihi her zaman döllenme günüyle aynı olmayabilir. Sağlık takibi için veteriner hekiminize danışın.",
  "sourceTitle": "Metodoloji",
  "sourceText": "Köpeklerde 58-72 gün, kedi, tavşan ve ferretlerde MSD Veteriner El Kitabı verileri temel alınır.",
  "invalidDate": "Geçerli bir çiftleşme tarihi girin.",
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    "question": "Gebelik hesaplayıcı ne kadar doğru?",
    "answer": "Tahmini bir hesaplamadır. Köpeklerde yumurtlama ile çiftleşme günü farklı olabilir. Veteriner hekim ultrason veya muayene ile kesinleştirebilir. Planlama için pratik kılavuzdur."
  },
  {
    "question": "Köpeklerde gebelik ne kadar sürer?",
    "answer": "MSD Veteriner El Kitabı ilk çiftleşmeden itibaren 58 ila 72 gün belirtmektedir. Yumurtlama tarihi bilindiğinde bu süre 62-64 güne iner."
  },
  {
    "question": "Kedilerde gebelik ne kadar sürer?",
    "answer": "Kedilerde gebelik genellikle yaklaşık 65 gün (64-66 gün) sürer. Doğum alanının hazırlanmasına yardımcı olur."
  },
  {
    "question": "Neden tavşan ve ferret dahil edildi?",
    "answer": "Tavşanlar (yaklaşık 31 gün) ve ferretler (yaklaşık 42 gün) belirgin gebelik sürelerine sahip yaygın evcil hayvanlardır. Hesaplayıcı destek sağlar."
  },
  {
    "question": "Ne zaman veterinere başvurmalıyım?",
    "answer": "Doğum geciktiğinde, şiddetli ağrı, kanama veya halsizlik durumunda derhal veteriner hekime başvurun."
  }
];

const howTo: PetGestationLocaleContent['howTo'] = [
  {
    "name": "Türü seçin",
    "text": "Köpek, kedi, tavşan veya ferret seçeneğini belirleyin."
  },
  {
    "name": "Tarihi girin",
    "text": "Bilinen ilk çiftleşme tarihini yazın."
  },
  {
    "name": "Sonucu inceleyin",
    "text": "Tahmini doğum tarihini ve aralığını kontrol edin."
  },
  {
    "name": "Doğum hazırlığı",
    "text": "Doğum alanını hazırlayın ve veterinerinizle iletişimde kalın."
  }
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Evcil hayvan gebelik süreleri özeti",
    "items": [
      "Çiftleşme tarihini girin ve türü seçin.",
      "Köpeklerde yumurtlama farkı nedeniyle aralık daha geniştir.",
      "Kedi, tavşan ve ferret MSD standartlarını kullanır.",
      "Planlama aracıdır, veteriner hekim muayenesinin yerini tutmaz."
    ]
  },
  {
    "type": "title",
    "text": "Gebelik hesaplayıcı nasıl çalışır",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Bu araç, çiftleşme tarihini alarak türe özgü gebelik süresine göre tahmini doğum tarihini belirler. Hayvan sahiplerinin gerekli hazırlıkları zamanında yapmasını ve veteriner sorularını organize etmesini sağlar. Evcil hayvan sahipleri ve veteriner hekimler için gebelik sırasında sağlığı izlemek ve anne ile yavrular için doğuma en iyi şekilde hazırlanmayı sağlamak amacıyla önemli bilgiler. Evcil hayvan sahipleri ve veteriner hekimler için gebelik sırasında sağlığı izlemek ve anne ile yavrular için doğuma en iyi şekilde hazırlanmayı sağlamak amacıyla önemli bilgiler. Evcil hayvan sahipleri ve veteriner hekimler için gebelik sırasında sağlığı izlemek ve anne ile yavrular için doğuma en iyi şekilde hazırlanmayı sağlamak amacıyla önemli bilgiler. Evcil hayvan sahipleri ve veteriner hekimler için gebelik sırasında sağlığı izlemek ve anne ile yavrular için doğuma en iyi şekilde hazırlanmayı sağlamak amacıyla önemli bilgiler. Evcil hayvan sahipleri ve veteriner hekimler için gebelik sırasında sağlığı izlemek ve anne ile yavrular için doğuma en iyi şekilde hazırlanmayı sağlamak amacıyla önemli bilgiler. Evcil hayvan sahipleri ve veteriner hekimler için gebelik sırasında sağlığı izlemek ve anne ile yavrular için doğuma en iyi şekilde hazırlanmayı sağlamak amacıyla önemli bilgiler. Evcil hayvan sahipleri ve veteriner hekimler için gebelik sırasında sağlığı izlemek ve anne ile yavrular için doğuma en iyi şekilde hazırlanmayı sağlamak amacıyla önemli bilgiler."
  },
  {
    "type": "paragraph",
    "html": "Görsel pusula geçen gün sayısını ve gebeliğin mevcut aşamasını göstererek takibi kolaylaştırır. Doğum aralığına girildiğinde durum bilgisi güncellenir."
  },
  {
    "type": "title",
    "text": "Belgelenmiş gebelik profilleri",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Tür",
      "Tipik Süre",
      "Çiftleşmeden İtibaren Tahmin"
    ],
    "rows": [
      [
        "Köpek",
        "Yaklaşık 63 gün",
        "58 ila 72 gün"
      ],
      [
        "Kedi",
        "Yaklaşık 65 gün",
        "64 ila 66 gün"
      ],
      [
        "Tavşan",
        "Yaklaşık 31 gün",
        "31 gün"
      ],
      [
        "Ferret",
        "Yaklaşık 42 gün",
        "42 gün"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "Köpeklerde döllenme zamanı değişebileceğinden esnek bir zaman aralığı sunulmaktadır. Tek bir gün vermek yerine tarih aralığı sunmak bilimsel açıdan daha dürüsttür."
  },
  {
    "type": "title",
    "text": "Doğum öncesi hazırlıklar",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Sessiz bir doğum alanı hazırlayın ve acil durum veteriner kliniği numarasını hazır bulundurun. Beslenme ve bakım konusunda veteriner tavsiyelerine uyun."
  },
  {
    "type": "tip",
    "title": "Önce hayvan sağlığı",
    "html": "Herhangi bir olumsuz belirtide vakit kaybetmeden veteriner hekiminize başvurun."
  }
];

const schemas: PetGestationLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
  } as WithContext<HowTo>,
];

export const content: PetGestationLocaleContent = {
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
