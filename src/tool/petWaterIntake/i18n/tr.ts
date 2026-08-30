import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'kopek-kedi-gunluk-su-intiyaci-hesaplayici';
const title = 'Köpek ve kedi günlük su ihtiyacı hesaplayıcı';
const description = 'Vücut ağırlığı, mama türü, aktivite ve sıcaklığa göre köpek veya kedinizin günlük su ihtiyacını hesaplayın.';

const ui: PetWaterIntakeUI = {
  "journeyHint": "Evcil hayvanı seçin, vücut ağırlığını girin, ardından mamayı ve bugünün hava durumunu ayarlayın.",
  "speciesLegend": "Su kabı kimin için?",
  "speciesDog": "Köpek",
  "speciesCat": "Kedi",
  "weightLabel": "Vücut ağırlığı",
  "weightHint": "Evcil hayvanınızın mevcut sağlıklı ağırlığını girin.",
  "weightKg": "kg",
  "dietLegend": "Mamanın su katkısı ne kadar?",
  "dietDry": "Ağırlıklı olarak kuru mama (kibble)",
  "dietMixed": "Karma beslenme",
  "dietWet": "Ağırlıklı olarak yaş mama (konserve)",
  "activityLegend": "Bugünkü aktivite",
  "activityCalm": "Sakin / Dinlenme",
  "activityTypical": "Orta / Normal",
  "activityActive": "Yoğun / Çok aktif",
  "heatLegend": "İklim ve sıcaklık",
  "heatNormal": "Ilıman / Normal",
  "heatWarm": "Sıcak",
  "heatHot": "Çok sıcak / Aşırı sıcak",
  "resultEyebrow": "Tahmini su seviyesi",
  "totalRangeLabel": "Gerekli toplam su (tüm kaynaklar)",
  "drinkingRangeLabel": "Su kabı için rehber miktar",
  "totalRangeHint": "Mamadan gelen nem dahil toplam günlük aralık.",
  "drinkingRangeHint": "Doğrudan kaptan içilmesi tahmin edilen miktar.",
  "statusEveryday": "Standart koşullar",
  "statusActive": "Hareketli gün",
  "statusWarm": "Sıcak hava",
  "statusDemanding": "Yüksek eforlu koşullar",
  "statusDetailEveryday": "Ekstra sıcaklık veya efor faktörü olmadan temel bakım profili.",
  "statusDetailActive": "Ezersiz su kaybını artırır. Taze suyu daima hazır bulundurun.",
  "statusDetailWarm": "Sıcaklık solumayı (hızlı nefes) artırır. Gölge ve serinlik önceliklidir.",
  "statusDetailDemanding": "Yüksek aktivite ve sıcaklık bir arada. Hayvanı yakından gözlemleyin.",
  "resultEmpty": "Su seviyesini görmek için geçerli bir ağırlık girin.",
  "sceneAria": "Seçilen evcil hayvan için su deposu",
  "sceneTotal": "TOPLAM SU",
  "noteTitle": "Su kabı bir teşhis aracı değildir",
  "noteText": "Daima temiz taze su bulundurun. Susuzlukta ani değişiklikler görürseniz bir veterinere danışın.",
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    "question": "Bir köpek veya kedi günde ne kadar su içmelidir?",
    "answer": "AAHA veteriner rehber ilkeleri, köpekler için günde kg başına yaklaşık 60 mL, kediler için ise 40 mL bakım ihtiyacı önerir. Bu miktar beslenme, egzersiz ve sıcaklığa göre değişir."
  },
  {
    "question": "Yaş mama su kabından içme ihtiyacını azaltır mı?",
    "answer": "Evet, yaş mama %75 ile %82 arasında su içerir ve hidrasyonun büyük kısmını karşılar. Yaş mama yiyen evcil hayvanlar kaptan daha az su içer."
  },
  {
    "question": "Su tüketimi konusunda ne zaman endişelenmeliyim?",
    "answer": "Böbrek rahatsızlıkları veya diyabete işaret edebilecek ani susuzluk artışı (polidipsi) veya su içmeyi reddetme durumunda hemen veterinere başvurun."
  },
  {
    "question": "Sıcak hava su ihtiyacını iki katına çıkarır mı?",
    "answer": "Evet, sıcakta hızlı nefes alıp verme su kaybını artırır. Daima taze su ve gölge alan sağlayın."
  }
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  {
    "name": "Tür ve ağırlık seçin",
    "text": "Köpek veya kedi seçin ve kg veya lb cinsinden sağlıklı ağırlığı girin."
  },
  {
    "name": "Mama türünü belirleyin",
    "text": "Öğünlerden gelen suyu hesaplamak için kuru, karma veya yaş mamayı seçin."
  },
  {
    "name": "Aktivite ve havayı ayarlayın",
    "text": "Su kaybı için egzersiz seviyesini ve ortam sıcaklığını ayarlayın."
  },
  {
    "name": "Tahminleri inceleyin",
    "text": "Gerekli toplam suyu ve kaptan içilmesi beklenen tahmini miktarı kontrol edin."
  }
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Evcil Hayvanların Günlük Su İhtiyacı İçin Temel Kılavuz İlkeler",
    "items": [
      "Temel bakım: Köpekler günde ~60 mL/kg; Kediler AAHA kılavuzlarına göre günde ~40 mL/kg su gerektirir.",
      "Mamanın etkisi: Yaş mama %70-80 nem sağlar ve su kabından içme ihtiyacını belirgin şekilde azaltır.",
      "Sıcaklık ve egzersiz: Hızlı nefes alıp verme (soluma) buharlaşma yoluyla sıvı kaybını artırır.",
      "Sağlık uyarısı: Su tüketimindeki ani artış veya azalışlar acil veteriner değerlendirmesi gerektirir.",
      "Taze suya erişim: Sakin yerlerde birden fazla temiz su kabı bulundurmak sağlıklı alışkanlıkları destekler."
    ]
  },
  {
    "type": "title",
    "text": "Köpekler ve Kediler İçin Günlük Hidrasyon İhtiyacını Anlamak",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Yeterli ve sürekli hidrasyon; metabolik işlevler, besin maddelerinin sindirimi, eklem yağlanması ve uzun vadeli böbrek sağlığı için hem köpeklerde hem de kedilerde kesinlikle hayati önem taşır. Su, yetişkin bir evcil hayvanın toplam vücut ağırlığının %60 ila %70'ini oluşturur ve küçük bir sıvı eksikliği bile temel fizyolojik süreçleri bozabilir. American Animal Hospital Association (AAHA) veteriner literatürü, günlük bakım ihtiyacını köpekler için vücut ağırlığının kg başına yaklaşık 60 mL ve kediler için kg başına 40 mL olarak belirler."
  },
  {
    "type": "paragraph",
    "html": "Ancak bu referans rakamları, hayvanın doğrudan su kabından içmesi gereken miktardan ziyade toplam günlük sıvı ihtiyacını temsil eder. Bir evcil hayvanın toplam günlük su alımı üç farklı kaynaktan oluşur: kaptan veya su pınarından doğrudan içilen su, ticari veya ev yapımı mamalarda doğal olarak bulunan nem ve hücresel solunum sırasında üretilen metabolik su. Bu ayrımı anlamak, yaş mama ile beslenen evcil hayvanların su kabını daha az ziyaret etmesi durumunda hasta sahiplerini rahatlatır."
  },
  {
    "type": "title",
    "text": "Toplam Su vs Su Kabından Tüketim",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Verilen mamanın türü, hayvanın kendi isteğiyle su kabından ne kadar su içeceğini belirlemede tamamen belirleyici bir rol oynar. Ticari kuru mama (kuru kraker) sadece %6 ila %10 nem içerir ve hayvanın günlük su ihtiyacının neredeyse tamamını doğrudan kaptan içmesini gerektirir. Buna karşılık, konserve yaş mama veya poşet mamalar %75 ila %82 sudan oluşur. Sadece yaş mama ile beslenen bir köpek veya kedi, hidrasyonunun büyük kısmını öğünler sırasında alır ve bu da su kabına çok nadir, tamamen fizyolojik olarak normal ziyaretlerle sonuçlanır."
  },
  {
    "type": "table",
    "headers": [
      "Girdi Faktörü",
      "Sıvı İhtiyacına Etkisi",
      "Temel Klinik Düşünce"
    ],
    "rows": [
      [
        "Tür Profili",
        "Temel bakım oranını belirler",
        "Köpek tabanı ~60 mL/kg; Kedi tabanı ~40 mL/kg"
      ],
      [
        "Vücut Ağırlığı",
        "Toplam hacmi ölçeklendirir",
        "Kilolu hayvanlar için ideal hedef ağırlığı kullanın"
      ],
      [
        "Mama Nemi",
        "Mamadan sağlanan oranı belirler",
        "Yaş mama günlük suyun %80'ini sağlar"
      ],
      [
        "Aktivite ve Sıcaklık",
        "Soluma kayıplarını artırır",
        "Yüksek sıcaklıklar orantılı su artışı gerektirir"
      ]
    ]
  },
  {
    "type": "title",
    "text": "Hidrasyon Yönetimi İçin Pratik Kılavuz İlkeler",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Evcil hayvan sahipleri, belirli bir hacim hedefini zorlamak yerine her zaman temiz ve taze suya serbest erişim sağlamaya odaklanmalıdır. Kediler için su pınarları veya geniş kaplar içmeyi teşvik eder."
  },
  {
    "type": "card",
    "title": "Kuru Mama Diyeti",
    "icon": "mdi:food-drumstick",
    "html": "Kuru mama yiyen hayvanlar kaptan su içmeye bağımlıdır. Kapların temiz olduğundan ve sakin yerlerde bulunduğundan emin olun."
  },
  {
    "type": "card",
    "title": "Yaş Konserve Mama Diyeti",
    "icon": "mdi:food-drumstick",
    "html": "Yaş mama önemli miktarda nem sağlar. Kaptan daha az içmeleri normaldir ancak taze su daima hazır olmalıdır."
  },
  {
    "type": "card",
    "title": "Sıcak Hava ve Aktif Gün Yönetimi",
    "icon": "mdi:weather-sunny",
    "html": "Sıcak havalarda veya oyun sırasında soluma yoluyla sıvı kaybı hızla artar. Gölge alanlar ve su molaları sağlayın."
  },
  {
    "type": "tip",
    "title": "Veteriner Hidrasyon Uyarı İşaretleri",
    "html": "Su içme alışkanlığındaki ani değişiklikler - çok daha fazla içme (polidipsi) veya tamamen reddetme - önemli klinik belirtilerdir. Hemen veterinere başvurun."
  }
];

const schemas: PetWaterIntakeLocaleContent['schemas'] = [
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

export const content: PetWaterIntakeLocaleContent = {
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
