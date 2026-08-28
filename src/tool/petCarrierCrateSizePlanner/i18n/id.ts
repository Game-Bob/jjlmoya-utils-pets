import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'perencana-ukuran-kandang-pet-carrier';
const title = 'Perencana Ukuran Kandang Pet Carrier';
const description = 'Hitung dimensi internal kandang atau pet carrier yang ideal untuk anjing atau kucing berdasarkan enam pengukuran tubuh.';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: 'Ukur dulu. Beli dengan yakin.',
  journeyHint: 'Pilih hewan dan jenis perjalanan, masukkan pengukuran, lalu gunakan cetak biru sebagai panduan ruang dalam pet carrier.',
  unitLegend: 'Satuan tampilan',
  speciesStep: 'Mulai dari hewan',
  metricUnit: 'Metrik',
  imperialUnit: 'Imperial',
  speciesLegend: 'Siapa yang bepergian?',
  speciesDog: 'Anjing',
  speciesCat: 'Kucing',
  modeLegend: 'Di mana perjalanan dilakukan?',
  modeCar: 'Mobil',
  modeAir: 'Pesawat',
  measurementsLegend: 'Ukur hewan peliharaan',
  noseTailLabel: 'Ujung hidung ke pangkal ekor',
  noseTailHint: 'Ukur tanpa memperhitungkan lengkungan ekor',
  elbowHeightLabel: 'Lantai ke siku',
  shoulderWidthLabel: 'Lebar bahu',
  standingHeightLabel: 'Tinggi saat berdiri',
  beddingLabel: 'Ketebalan alas atau kasur',
  weightLabel: 'Berat hewan',
  cmUnit: 'cm',
  inchUnit: 'inci',
  kgUnit: 'kg',
  lbUnit: 'lb',
  snubNosedLabel: 'Ras hidung pendek atau brasefalik',
  snubNosedHint: 'Perjalanan udara memerlukan penyesuaian IATA. Konsultasikan dengan dokter hewan dan maskapai.',
  presetLegend: 'Mulai dengan profil',
  presetCat: 'Kucing',
  presetSmallDog: 'Anjing kecil',
  presetMediumDog: 'Anjing sedang',
  presetLargeDog: 'Anjing besar',
  resultEyebrow: 'Rangka pengukuran yang disarankan',
  resultTitle: 'Ruang yang cukup untuk berputar',
  resultDimensionLabel: 'Dimensi internal minimum awal',
  lengthLabel: 'Panjang',
  widthLabel: 'Lebar',
  heightLabel: 'Tinggi',
  petWeightLabel: 'Berat hewan',
  journeyLabel: 'Jenis perjalanan',
  statusComfort: 'Tingkat kenyamanan dasar',
  statusAirReview: 'Peninjauan transportasi udara',
  statusSnub: 'Penyesuaian hidung pendek',
  resultDetail: 'Periksa bagian dalam carrier asli, pintu, ventilasi, dan aturan maskapai sebelum membeli atau bepergian.',
  checklistTitle: 'Empat pemeriksaan tubuh',
  checklistStand: 'Hewan dapat berdiri dan duduk tegak tanpa kepala atau telinga menyentuh atap.',
  checklistTurn: 'Hewan dapat berputar dengan alami saat berdiri.',
  checklistLie: 'Hewan dapat berbaring dalam posisi alami di atas alas.',
  checklistAirline: 'Untuk penerbangan, konfirmasi batas maskapai, ventilasi, pengunci, dan alas kedap cairan.',
  invalidInput: 'Masukkan nilai positif untuk setiap pengukuran tubuh dan berat.',
  noteTitle: 'Gunakan alat ini sebagai estimasi ruang, bukan persetujuan penerbangan',
  noteText: 'Aturan bervariasi menurut maskapai, kendaraan, dan hewan. Dokter hewan harus mengevaluasi kesehatan dan kelayakan penerbangan.',
  methodTitle: 'Metode kalkulasi',
  methodText: 'Rumus mengacu pada panduan IATA: panjang adalah hidung ke ekor ditambah setengah tinggi siku, lebar adalah dua kali lebar bahu, dan tinggi adalah tinggi berdiri ditambah ketebalan alas.',
  blueprintLabel: 'Skema pet carrier terukur yang menampilkan hewan di dalam beserta panduan panjang dan tinggi',
  dimensionInside: 'Dimensi dalam',
  checkMark: 'OK',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: 'Bagaimana cara mengukur anjing atau kucing untuk memilih pet carrier?',
    answer: 'Ukur dari ujung hidung ke pangkal ekor, dari lantai ke sendi siku, lebar bahu pada titik terlebar, dan tinggi dari lantai ke titik tertinggi kepala atau telinga. Tambahkan ketebalan alas secara terpisah.',
  },
  {
    question: 'Dimensi internal apa yang dihitung oleh perencana ini?',
    answer: 'Mengestimasi panjang internal minimum dari panjang tubuh dan siku, lebar internal dari lebar bahu, dan tinggi total termasuk alas tidur.',
  },
  {
    question: 'Apakah hasil kalkulasi menjamin persetujuan maskapai?',
    answer: 'Tidak. Mode penerbangan menggunakan rumus referensi IATA, tetapi setiap maskapai memiliki aturan khusus. Selalu verifikasi kebijakan resmi maskapai.',
  },
  {
    question: 'Mengapa ras hidung pendek membutuhkan carrier lebih besar di pesawat?',
    answer: 'Panduan IATA menyarankan ruang lebih besar untuk ras brasefalik guna mencegah kepanasan dan gangguan pernapasan selama penerbangan.',
  },
  {
    question: 'Apakah pet carrier untuk mobil harus sebesar mungkin?',
    answer: 'Tidak. Carrier harus menyediakan ruang yang cukup untuk berdiri, berputar, dan berbaring, tetapi dapat terikat dengan aman di dalam kendaraan.',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: 'Pilih jenis perjalanan', text: 'Pilih mobil atau pesawat untuk menyesuaikan kriteria peninjauan.' },
  { name: 'Masukkan enam pengukuran', text: 'Ukur tubuh dan berat hewan saat dalam kondisi tenang.' },
  { name: 'Baca dimensi internal', text: 'Gunakan panjang, lebar, dan tinggi sebagai acuan awal untuk membandingkan produk di pasaran.' },
  { name: 'Verifikasi aturan perjalanan', text: 'Sebelum membeli, periksa pengunci, ventilasi, dan persyaratan maskapai.' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Panduan memilih pet carrier yang tepat untuk hewan peliharaan kesayangan Anda',
    items: [
      'Ukur tubuh hewan secara akurat dan menyeluruh daripada hanya mengandalkan berat badan saja.',
      'Gunakan dimensi dalam yang berguna untuk membandingkan carrier asli di toko fisik maupun toko daring.',
      'Selalu periksa mekanisme pengunci keselamatan, keandalan pintu, dan sistem ventilasi udara carrier.',
      'Pengangkutan udara memerlukan persiapan khusus yang matang, pemeriksaan peraturan, dan saran dari dokter hewan.',
    ],
  },
  { type: 'title', text: 'Cara merencanakan ukuran pet carrier secara tepat', level: 2 },
  {
    type: 'paragraph',
    html: 'Pet carrier yang layak dan aman harus memungkinkan empat gerakan alami untuk anjing atau kucing Anda: berdiri tegak tanpa menundukkan kepala atau menekuk telinga, duduk tegak secara alami tanpa halangan, berputar tanpa hambatan pada poros tubuhnya sendiri, dan berbaring dengan nyaman dalam posisi santai. Kalkulator ini menentukan panjang, lebar, dan tinggi bagian dalam yang dibutuhkan secara terukur, akurat, dan sesuai dengan standar kesehatan hewan.',
  },
  {
    type: 'paragraph',
    html: 'Nilai yang dihitung mewakili ruang guna bagian dalam yang sebenarnya untuk kenyamanan hewan. Perhatikan bahwa alas yang tebal, tempat makan, mangkuk minum, atau dinding yang miring dapat mengurangi ruang yang tersedia saat Anda melakukan pembelian akhir di toko peliharaan.',
  },
  { type: 'title', text: 'Pentingnya setiap pengukuran tubuh hewan', level: 2 },
  {
    type: 'table',
    headers: ['Pengukuran tubuh', 'Fungsi untuk hewan', 'Penggunaan dalam kalkulasi'],
    rows: [
      ['Hidung ke pangkal ekor', 'Menentukan panjang dasar tubuh tanpa memperhitungkan ekor.', 'Panjang dalam'],
      ['Lantai ke siku', 'Memberikan ruang gerak saat hewan berputar dan melangkahkan kaki.', 'Panjang dalam'],
      ['Lebar bahu', 'Menjamin lebar yang cukup pada bagian tubuh yang terlebar.', 'Lebar dalam'],
      ['Tinggi saat berdiri', 'Melindungi kepala dan telinga agar tidak membentur atap carrier.', 'Tinggi dalam'],
      ['Ketebalan alas', 'Menjaga tinggi efektif setelah alas atau kasur dipasang.', 'Tinggi dalam'],
      ['Berat badan', 'Digunakan untuk memeriksa kapasitas beban dan daya tahan carrier.', 'Peninjauan beban'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Rumus didasarkan pada aturan resmi IATA tentang pengangkutan hewan hidup: panjang dalam menggabungkan panjang tubuh dan setengah tinggi siku, lebar dua kali lebar bahu, dan tinggi mencakup tinggi berdiri ditambah ketebalan alas kasur yang digunakan. Hal ini menjamin keselamatan hewan.',
  },
  { type: 'title', text: 'Hal yang perlu diperhatikan untuk penerbangan dan penerbangan udara', level: 2 },
  {
    type: 'paragraph',
    html: 'Estimasi ukuran bukan merupakan persetujuan penerbangan resmi dari pihak maskapai penerbangan. Faktor-faktor seperti jenis pesawat, sistem ventilasi empat sisi, dan suhu udara saat penerbangan sangat menentukan keselamatan dan kesehatan hewan peliharaan Anda.',
  },
  {
    type: 'tip',
    title: 'Uji ruang secara praktis di rumah sebelum bepergian',
    html: 'Tempatkan hewan di dalam carrier dalam lingkungan yang tenang dan amati gerakannya selama beberapa menit. Jika terlihat sempit atau kesulitan berputar dengan bebas, pilih ukuran yang lebih besar demi kenyamanan dan keselamatan hewan.',
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
