import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'kalkulator-kebutuhan-air-anjing-kucing';
const title = 'Kalkulator Kebutuhan Air Harian Anjing dan Kucing';
const description = 'Hitung kebutuhan air harian untuk anjing atau kucing berdasarkan berat badan, makanan, aktivitas, dan suhu lingkungan.';

const ui: PetWaterIntakeUI = {
  "journeyHint": "Pilih hewan, masukkan berat badan, lalu atur makanan dan cuaca hari ini.",
  "instantHint": "Setiap pilihan memperbarui batas air secara langsung. Ini adalah panduan orientasi.",
  "unitLegend": "Satuan",
  "metricUnit": "Metrik",
  "imperialUnit": "Imperial",
  "speciesLegend": "Untuk siapa mangkuk air ini?",
  "speciesDog": "Anjing",
  "speciesCat": "Kucing",
  "speciesDogMeta": "Panduan pemeliharaan 60 mL per kg",
  "speciesCatMeta": "Panduan pemeliharaan 40 mL per kg",
  "weightLabel": "Berat badan",
  "weightHint": "Masukkan berat badan sehat hewan Anda saat ini.",
  "weightKg": "kg",
  "weightLb": "lb",
  "dietLegend": "Berapa banyak air yang berasal dari makanan?",
  "dietDry": "Sebagian besar makanan kering (kibble)",
  "dietDryMeta": "Sebagian besar air diminum dari mangkuk",
  "dietMixed": "Makanan campuran",
  "dietMixedMeta": "Sebagian air berasal dari porsi makanan",
  "dietWet": "Sebagian besar makanan basah (kaleng)",
  "dietWetMeta": "Makanan memberikan sebagian besar kelembapan",
  "activityLegend": "Aktivitas hari ini",
  "activityCalm": "Tenang / Istirahat",
  "activityTypical": "Sedang / Normal",
  "activityActive": "Intens / Sangat aktif",
  "heatLegend": "Cuaca dan suhu",
  "heatNormal": "Normal / Sedang",
  "heatWarm": "Hangat",
  "heatHot": "Sangat panas / Terik",
  "resultEyebrow": "Estimasi tingkat air",
  "totalRangeLabel": "Total air yang dibutuhkan (semua sumber)",
  "drinkingRangeLabel": "Panduan perkiraan air dari mangkuk",
  "totalRangeHint": "Rentang harian total termasuk kelembapan dari makanan.",
  "drinkingRangeHint": "Perkiraan porsi yang diminum langsung dari mangkuk.",
  "statusEveryday": "Kondisi standar",
  "statusActive": "Hari yang aktif",
  "statusWarm": "Cuaca panas",
  "statusDemanding": "Kondisi berat",
  "statusDetailEveryday": "Profil pemeliharaan dasar tanpa faktor tambahan panas atau aktivitas.",
  "statusDetailActive": "Olahraga meningkatkan kehilangan air. Sediakan air segar yang cukup.",
  "statusDetailWarm": "Udara panas meningkatkan napas terengah-engah. Teduh dan udara segar adalah prioritas.",
  "statusDetailDemanding": "Aktivitas tinggi dan udara panas bersamaan. Amati hewan dengan cermat.",
  "resultEmpty": "Masukkan berat badan yang valid untuk melihat batas air.",
  "sceneAria": "Wadah air untuk hewan yang dipilih",
  "sceneTotal": "TOTAL AIR",
  "sceneBowl": "tengah rentang harian",
  "methodTitle": "Metode perhitungan",
  "methodText": "Mengikuti panduan AAHA yaitu 60 mL/kg untuk anjing dan 40 mL/kg untuk kucing, disesuaikan dengan makanan dan cuaca.",
  "noteTitle": "Mangkuk air bukan alat diagnosis",
  "noteText": "Selalu sediakan air bersih dan segar. Jika ada perubahan mendadak pada rasa haus, hubungi dokter hewan.",
  "invalidWeight": "Silakan masukkan berat badan yang valid.",
  "weightRange": "Berat badan harus antara 0.5 kg dan 100 kg."
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    "question": "Berapa banyak air yang harus diminum anjing atau kucing per hari?",
    "answer": "Panduan dokter hewan AAHA menyarankan kebutuhan pemeliharaan sekitar 60 mL/kg per hari untuk anjing dan 40 mL/kg untuk kucing. Nilai ini bervariasi sesuai makanan, aktivitas, dan suhu."
  },
  {
    "question": "Apakah makanan basah mengurangi kebutuhan minum dari mangkuk?",
    "answer": "Ya, makanan basah mengandung 75% hingga 82% air, memenuhi sebagian besar hidrasi. Hewan yang makan makanan basah minum lebih sedikit dari mangkuk."
  },
  {
    "question": "Kapan saya harus khawatir tentang konsumsi air?",
    "answer": "Konsultasikan dengan dokter hewan jika Anda melihat peningkatan rasa haus yang mendadak (polidipsia) atau penolakan untuk minum air, yang menandakan masalah ginjal atau diabetes."
  },
  {
    "question": "Apakah cuaca panas menggandakan kebutuhan air?",
    "answer": "Ya, napas terengah-engah saat panas meningkatkan kehilangan air. Selalu sediakan air segar dan tempat berteduh."
  }
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  {
    "name": "Pilih spesies dan berat",
    "text": "Pilih anjing atau kucing dan masukkan berat badan sehat dalam kg atau lb."
  },
  {
    "name": "Tentukan jenis makanan",
    "text": "Pilih kering, campuran, atau basah untuk menghitung kontribusi air dari makanan."
  },
  {
    "name": "Atur aktivitas dan cuaca",
    "text": "Tentukan tingkat olahraga dan suhu lingkungan untuk kehilangan air."
  },
  {
    "name": "Periksa estimasi",
    "text": "Lihat total air yang dibutuhkan dan perkiraan jumlah yang diminum dari mangkuk."
  }
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Panduan Penting Hidrasi dan Kebutuhan Air Anjing dan Kucing",
    "items": [
      "Pemeliharaan dasar: Anjing membutuhkan ~60 mL/kg per hari; Kucing membutuhkan ~40 mL/kg per hari berdasarkan panduan resmi AAHA.",
      "Dampak makanan: Makanan basah menyediakan hingga 80% kelembapan harian, secara signifikan mengurangi frekuensi minum dari mangkuk.",
      "Panas dan aktivitas: Hawa panas dan latihan fisik meningkatkan kehilangan cairan melalui napas terengah-engah (panting).",
      "Tanda peringatan klinis: Perubahan mendadak pada konsumsi air membutuhkan evaluasi dan pemeriksaan medis dokter hewan.",
      "Akses air bersih: Sediakan beberapa mangkuk air bersih dan segar di lokasi yang tenang di seluruh sudut rumah."
    ]
  },
  {
    "type": "title",
    "text": "Memahami Kebutuhan Hidrasi Harian Anjing dan Kucing",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Hidrasi yang memadai merupakan fondasi utama bagi fungsi metabolisme, pencernaan nutrisi, pelumasan sendi, dan kesehatan ginjal jangka panjang pada hewan peliharaan. Air menyusun antara 60% hingga 70% dari total berat badan anjing atau kucing dewasa, dan kekurangan cairan sedikit saja dapat mengganggu proses fisiologis penting. Literatur kedokteran hewan dari American Animal Hospital Association (AAHA) menetapkan kebutuhan dasar pemeliharaan harian sebesar 60 mL per kilogram berat badan untuk anjing dan 40 mL per kilogram untuk kucing."
  },
  {
    "type": "paragraph",
    "html": "Namun demikian, angka pedoman pemeliharaan ini mewakili total kebutuhan cairan harian secara keseluruhan, bukan jumlah air yang harus diminum hewan langsung dari mangkuk. Total pasokan air harian hewan terdiri dari air minum langsung, kelembapan yang terkandung dalam makanan komersial atau buatan rumah, serta sejumlah kecil air metabolik yang dihasilkan selama respirasi seluler. Memahami perbedaan ini membantu pemilik hewan menghindari rasa cemas yang tidak perlu ketika kucing atau anjing mereka jarang mengunjungi mangkuk air saat diberi makanan basah."
  },
  {
    "type": "title",
    "text": "Total Air Harian vs Konsumsi Mangkuk Air",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Bentuk makanan yang diberikan memainkan peran dominan dalam menentukan seberapa banyak air yang akan dicari hewan dari mangkuk. Makanan kering komersial (kibble) hanya mengandung 6% hingga 10% kelembapan, sehingga mengharuskan hewan minum hampir seluruh kebutuhan cairan hanyanya langsung dari wadah air. Sebaliknya, makanan basah kalengan umumnya terdiri dari 75% hingga 82% kadar air. Kucing atau anjing yang diberi makanan basah secara eksklusif dapat memperoleh hampir semua hidrasi dasarnya langsung dari makanan, sehingga kunjungan ke mangkuk air menjadi sangat jarang dan secara fisiologis tetap normal."
  },
  {
    "type": "table",
    "headers": [
      "Faktor Input",
      "Dampak pada Kebutuhan Cairan",
      "Pertimbangan Klinis Utama"
    ],
    "rows": [
      [
        "Profil Spesies",
        "Menentukan tingkat pemeliharaan dasar",
        "Anjing ~60 mL/kg; Kucing ~40 mL/kg"
      ],
      [
        "Berat Badan",
        "Menyesuaikan volume dasar keseluruhan",
        "Gunakan berat target ideal untuk hewan berbobot lebih"
      ],
      [
        "Kelembapan Makanan",
        "Menentukan proporsi yang disediakan makanan",
        "Makanan basah memasok hingga 80% cairan harian"
      ],
      [
        "Aktivitas & Suhu",
        "Meningkatkan kehilangan napas terengah-engah",
        "Suhu tinggi membutuhkan peningkatan cairan proporsional"
      ]
    ]
  },
  {
    "type": "title",
    "text": "Panduan Praktis untuk Manajemen Hidrasi Hewan Peliharaan",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Pemilik hewan peliharaan harus berfokus pada penyediaan akses bebas dan tanpa batas ke air bersih dan segar setiap saat daripada berusaha memaksakan target volume numerik tertentu. Mangkuk air harus dicuci setiap hari dan diisi ulang dengan air segar. Untuk kucing, yang sering kali memiliki dorongan haus yang rendah dari nenek moyang penghuni padang pasir, menyediakan mancuran air hewan, mangkuk lebar yang menghindari kelelahan kumis, dan beberapa titik minum di rumah dapat mendorong perilaku minum sukarela yang sehat."
  },
  {
    "type": "card",
    "title": "Diet Makanan Kering (Kibble)",
    "icon": "mdi:food-drumstick",
    "html": "Hewan dengan makanan kering sangat bergantung pada minum sukarela dari mangkuk air. Pastikan mangkuk dijaga tetap bersih dan diletakkan di lokasi yang tenang dan mudah dijangkau jauh dari kotak kotoran atau peralatan bising."
  },
  {
    "type": "card",
    "title": "Diet Makanan Basah Kaleng",
    "icon": "mdi:can",
    "html": "Diet makanan basah memberikan kelembapan makanan yang signifikan. Meskipun hewan yang makan makanan kaleng secara alami akan minum lebih sedikit dari mangkuk, air segar harus tetap dapat diakses setiap saat."
  },
  {
    "type": "card",
    "title": "Manajemen Cuaca Panas & Aktif",
    "icon": "mdi:weather-sunny",
    "html": "Selama cuaca panas atau bermain intens, kehilangan cairan evaporatif melalui napas terengah-engah meningkat pesat. Selalu sediakan area istirahat yang teduh dan waktu istirahat minum untuk mencegah stres panas."
  },
  {
    "type": "tip",
    "title": "Tanda Peringatan Dokter Hewan untuk Hidrasi",
    "html": "Perubahan mendadak dan tidak terjelaskan dalam pola minum - baik minum jauh lebih banyak air (polidipsia) atau menolak air sama sekali - merupakan indikator klinis utama. Kondisi seperti penyakit ginjal, diabetes, dan gangguan saluran kemih sering kali bermanifestasi melalui perubahan rasa haus. Jika Anda mengamati perubahan persisten, segera konsultasikan dengan dokter hewan."
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
