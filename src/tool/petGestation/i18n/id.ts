import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';

const slug = 'kalkulator-kehamilan-hewan-peliharaan';
const title = 'Kalkulator Kehamilan Hewan Peliharaan';
const description = 'Hitung perkiraan tanggal melahirkan untuk anjing, kucing, kelinci, atau musang dari tanggal kawin dengan rentang terdokumentasi dan panduan medis.';

const ui: PetGestationLocaleContent['ui'] = {
  "journeyHint": "Pilih spesies, masukkan tanggal kawin, dan ikuti kompas menuju perkiraan waktu melahirkan.",
  "instantHint": "Ubah pengaturan dan kalender kehamilan akan diperbarui secara instan.",
  "speciesLegend": "Jenis hewan peliharaan apa ini?",
  "speciesDog": "Anjing",
  "speciesCat": "Kucing",
  "speciesRabbit": "Kelinci",
  "speciesFerret": "Musang",
  "speciesDogMeta": "58 hingga 72 hari",
  "speciesCatMeta": "64 hingga 66 hari",
  "speciesRabbitMeta": "Sekitar 31 hari",
  "speciesFerretMeta": "Sekitar 42 hari",
  "matingDateLabel": "Tanggal kawin",
  "matingDateHint": "Gunakan tanggal kawin pertama yang diketahui. Ini adalah perkiraan dan bukan tanggal pembuahan medis.",
  "presetToday": "Hari ini",
  "presetWeekAgo": "7 hari lalu",
  "presetFortnightAgo": "14 hari lalu",
  "calculateButton": "Hitung perkiraan melahirkan",
  "resultEyebrow": "Kompas kehamilan menunjukkan",
  "dueDateLabel": "Tanggal perkiraan melahirkan",
  "windowLabel": "Rentang waktu diperkirakan",
  "remainingLabel": "Hari menuju perkiraan",
  "elapsedLabel": "Hari berlalu",
  "daysLabel": "hari",
  "dayLabel": "hari",
  "statusFuture": "Tanggal ini di masa depan",
  "statusWaiting": "Masa kehamilan sedang berlangsung",
  "statusWindow": "Rentang waktu melahirkan telah tiba",
  "statusLate": "Melewati perkiraan batas luar",
  "resultEmpty": "Kompas kehamilan Anda akan muncul di sini.",
  "sampleLabel": "Contoh simulasi",
  "sceneMating": "PERKAWINAN",
  "sceneToday": "Progres saat ini",
  "sceneDue": "RENTANG MELAHIRKAN",
  "noteTitle": "Catatan penting kesehatan",
  "noteText": "Tanggal kawin tidak selalu sama dengan tanggal pembuahan atau ovulasi. Hubungi dokter hewan untuk pemeriksaan kehamilan secara pasti.",
  "sourceTitle": "Metodologi",
  "sourceText": "Profil anjing menggunakan 58-72 hari, sedangkan kucing, kelinci, dan musang menggunakan panduan Manual Dokter Hewan MSD.",
  "invalidDate": "Masukkan tanggal kawin yang valid.",
  "futureDate": "Tanggal masa depan tidak dapat menggambarkan kehamilan aktif."
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    "question": "Seberapa akurat kalkulator kehamilan hewan ini?",
    "answer": "Kalkulator ini memberikan perkiraan untuk perencanaan persalinan. Pada anjing, tanggal kawin bisa berbeda dari waktu ovulasi karena sel sperma dapat bertahan beberapa hari di saluran reproduksi betina. Oleh karena itu, alat ini menampilkan rentang waktu daripada satu tanggal pasti. Dokter hewan dapat memastikan usia kehamilan melalui USG atau pemeriksaan fisik secara tepat dan profesional."
  },
  {
    "question": "Berapa lama masa kehamilan anjing?",
    "answer": "Manual Dokter Hewan MSD mencatat sekitar 58 hingga 72 hari dari perkawinan pertama jika waktu ovulasi tidak diketahui pasti. Jika tanggal ovulasi diketahui, jangka waktunya lebih sempit yaitu sekitar 62 hingga 64 hari. Ukuran ras dan jumlah anak dalam kandungan juga memengaruhi persalinan secara praktis dalam kehidupan sehari-hari."
  },
  {
    "question": "Berapa lama masa kehamilan kucing?",
    "answer": "Kehamilan kucing umumnya berlangsung sekitar 65 hari, dengan waktu melahirkan antara 64 hingga 66 hari setelah lonjakan hormon luteinisasi. Kalkulator ini membantu pemilik hewan mempersiapkan kebutuhan persalinan tepat waktu dan teratur tanpa kepanikan."
  },
  {
    "question": "Mengapa kelinci dan musang disertakan?",
    "answer": "Kelinci dan musang adalah hewan peliharaan populer dengan masa kehamilan yang singkat dan terdokumentasi dengan baik (sekitar 31 hari untuk kelinci dan 42 hari untuk musang). Alat ini memberikan panduan praktis dan transparan untuk spesies tersebut."
  },
  {
    "question": "Kapan harus menghubungi dokter hewan?",
    "answer": "Hubungi dokter hewan jika usia kehamilan melewati batas luar perkiraan, jika proses melahirkan tampak sulit atau terlalu lama, atau jika ada tanda-tanda pendarahan, nyeri hebat, dan kelemahan fisik pada hewan kesayangan Anda."
  }
];

const howTo: PetGestationLocaleContent['howTo'] = [
  {
    "name": "Pilih spesies",
    "text": "Pilih anjing, kucing, kelinci, atau musang agar sistem menerapkan profil kehamilan yang sesuai."
  },
  {
    "name": "Masukkan tanggal kawin",
    "text": "Masukkan tanggal perkawinan pertama yang tercatat atau tanggal yang direkomendasikan dokter hewan."
  },
  {
    "name": "Lihat kompas kehamilan",
    "text": "Periksa perkiraan tanggal melahirkan, rentang waktu yang diharapkan, serta jumlah hari yang telah berlalu."
  },
  {
    "name": "Lakukan persiapan",
    "text": "Gunakan informasi ini untuk mempersiapkan tempat melahirkan dan berkonsultasi dengan dokter hewan."
  }
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Ringkasan masa kehamilan hewan peliharaan",
    "items": [
      "Masukkan tanggal kawin dan pilih spesies hewan untuk memperkirakan waktu melahirkan secara praktis.",
      "Anjing memiliki rentang perkiraan lebih lebar karena variasi waktu ovulasi dan pembuahan sel telur.",
      "Kucing, kelinci, dan musang menggunakan standar acuan Manual Dokter Hewan MSD yang akurat.",
      "Alat bantu perencanaan yang berguna tetapi tidak menggantikan pemeriksaan medis dokter hewan."
    ]
  },
  {
    "type": "title",
    "text": "Cara kerja kalkulator kehamilan hewan peliharaan",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Kalkulator kehamilan ini mengonversi tanggal kawin menjadi kalender estimasi melahirkan yang mudah dipahami oleh pemilik hewan. Alat ini menambahkan durasi kehamilan spesifik tiap spesies dan menampilkan tanggal umum serta rentang waktu persalinan. Perbedaan ini penting karena tanggal perkawinan tidak selalu bertepatan dengan tanggal pembuahan sel telur. Hasil ini dirancang untuk membantu pemilik menyiapkan perlengkapan persalinan dan pertanyaan untuk dokter hewan saat kunjungan. Informasi penting bagi pemilik hewan dan dokter hewan untuk memantau kesehatan selama masa kehamilan dan memastikan persiapan persalinan yang optimal bagi keselamatan induk dan anak."
  },
  {
    "type": "paragraph",
    "html": "Kompas visual menempatkan tanggal kawin di awal garis waktu melingkar yang intuitif. Lingkaran berwarna bertambah seiring berjalannya hari, sementara bagian tengah menampilkan jumlah hari yang telah berlalu hingga masa melahirkan tiba. Pemilik dapat memantau perkembangan harian hewan kesayangan secara jelas dan memahami kapan estimasi memerlukan perhatian profesional medis."
  },
  {
    "type": "title",
    "text": "Profil masa kehamilan terdokumentasi",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Spesies",
      "Periode umum",
      "Estimasi dari perkawinan"
    ],
    "rows": [
      [
        "Anjing",
        "Sekitar 63 hari",
        "58 hingga 72 hari"
      ],
      [
        "Kucing",
        "Sekitar 65 hari",
        "64 hingga 66 hari"
      ],
      [
        "Kelinci",
        "Sekitar 31 hari",
        "31 hari"
      ],
      [
        "Musang",
        "Sekitar 42 hari",
        "42 hari"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "Profil anjing membutuhkan fleksibilitas paling tinggi dari pemilik. Panduan veteriner menjelaskan bahwa gestasi normal anjing dapat digambarkan secara berbeda tergantung pada indikator biologis yang diketahui. Menampilkan rentang waktu dari perkawinan lebih jujur untuk penggunaan sehari-hari dibanding mematok angka tunggal."
  },
  {
    "type": "title",
    "text": "Persiapan sebelum masa melahirkan",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Gunakan estimasi ini untuk menyiapkan tempat persalinan yang hangat dan tenang, memeriksa kontak darurat klinik hewan, dan memantau kesehatan serta nutrisi induk hewan selama masa bunting. Jangan memberikan obat tanpa resep dokter hewan atau memicu persalinan secara mendadak."
  },
  {
    "type": "tip",
    "title": "Kesehatan hewan selalu jadi prioritas",
    "html": "Segera konsultasikan dengan dokter hewan jika ada tanda-tanda pendarahan, nyeri hebat, keputihan tidak normal, atau jika persalinan tertunda melebihi batas perkiraan."
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
