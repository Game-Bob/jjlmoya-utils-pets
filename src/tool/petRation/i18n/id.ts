import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'kalkulator-ransum-harian-hewan-peliharaan';
const title = 'Kalkulator Ransum Harian Hewan Peliharaan';
const description = 'Hitung jumlah makanan yang tepat yang dibutuhkan anjing atau kucing Anda. Alat berdasarkan formula veteriner RER dan DER untuk berat badan yang sehat.';

const ui: PetRationUI = {
  toolTitle: 'Kalkulator Ransum Harian',
  sectionProfile: '1. Profil Hewan Peliharaan',
  labelAnimal: 'Hewan',
  labelStage: 'Tahap Kehidupan',
  labelWeight: 'Berat Badan',
  labelActivity: 'Aktivitas Fisik',
  sectionDiet: '2. Diet dan Makanan',
  labelDietType: 'Tipe Pemberian Makan',
  speciesDog: 'Anjing',
  speciesCat: 'Kucing',
  speciesRabbit: 'Kelinci',
  stagePuppy: 'Anak Anjing atau Kucing',
  stageAdult: 'Dewasa',
  stageSenior: 'Senior',
  activityLow: 'Rendah',
  activityMod: 'Normal',
  activityHigh: 'Tinggi',
  dietDry: 'Hanya Kering',
  dietMixed25: 'Campuran (25%)',
  dietHalf: 'Setengah-Setengah (50%)',
  dietWet: 'Hanya Basah',
  manualAdjust: 'Penyesuaian manual (1-99%)',
  wetPercentLabel: '% makanan basah dalam diet',
  tagDry: 'Kering',
  tagWet: 'Basah',
  totalKcal: 'Total',
  kcalUnit: 'kcal/hari',
  statusPuppy: 'Fase pertumbuhan cepat',
  statusSenior: 'Metabolisme matang',
  statusLargeDog: 'Ras besar: Perawatan sendi',
  statusDefault: 'Berat badan seimbang',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'Apa itu RER dan mengapa itu penting?',
    answer: 'RER (Resting Energy Requirement) adalah energi minimum yang dibutuhkan hewan peliharaan Anda untuk mempertahankan fungsi vital dasarnya saat istirahat. Ini adalah dasar ilmiah untuk menghitung ransum harian, menghindari kekurangan atau kelebihan makan. Memahami RER memungkinkan pemilik untuk menyesuaikan asupan makanan dengan kebutuhan biologis spesifik hewan peliharaan mereka, memastikan mereka tidak mengonsumsi lebih dari yang dapat diproses oleh organ mereka secara efisien.',
  },
  {
    question: 'Bagaimana sterilisasi memengaruhi ransum hewan peliharaan saya?',
    answer: 'Hewan yang disterilisasi cenderung memiliki metabolisme basal sekitar 15 hingga 20 persen lebih rendah. Mereka mungkin membutuhkan ransum yang sedikit lebih kecil atau tingkat aktivitas yang disesuaikan dengan Rendah dalam kalkulator untuk menghindari penambahan berat badan. Perubahan hormonal setelah prosedur mengubah cara tubuh menyimpan lemak dan membakar energi, membuat kewaspadaan terhadap mangkuk makanan menjadi lebih penting untuk kesehatan jangka panjang.',
  },
  {
    question: 'Dapatkah saya menggunakan kalkulator ini untuk anak anjing?',
    answer: 'Anak anjing yang sedang tumbuh memiliki kebutuhan energi yang jauh lebih tinggi (hingga 3 kali RER). Kalkulator ini dioptimalkan untuk anjing dan kucing dewasa. Untuk anak anjing, selalu konsultasikan dengan dokter hewan Anda untuk rencana pertumbuhan yang spesifik. Pemberian makan yang tidak tepat selama fase pertumbuhan awal dapat menyebabkan masalah kerangka yang serius di kemudian hari, karena kelebihan kalori dapat memacu perkembangan tulang terlalu cepat.',
  },
  {
    question: 'Berapa kali sehari saya harus mendistribusikan ransum?',
    answer: 'Idealnya adalah menyebarkan total kuantitas yang dihasilkan dalam 2 atau 3 kali makan sehari. Ini membantu menjaga kadar glukosa yang stabil dan meningkatkan pencernaan, terutama pada ras yang rentan terhadap torsi lambung. Waktu makan yang konsisten juga membantu menjaga hewan peliharaan Anda tetap kenyang dan kecil kemungkinannya untuk meminta sisa makanan di antara jadwal makan.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Pilih spesies dengan hati-hati', text: 'Tunjukkan apakah perhitungan tersebut untuk anjing atau kucing, karena metabolisme dan batas berat badan mereka bervariasi secara signifikan berdasarkan ciri biologis unik mereka.' },
  { name: 'Sesuaikan untuk berat badan yang tepat', text: 'Pindahkan slider ke berat badan hewan peliharaan Anda saat ini dalam kilogram. Sangat penting untuk menggunakan berat badan yang baru diukur untuk perhitungan kebutuhan energi yang akurat.' },
  { name: 'Tentukan tingkat aktivitas mereka', text: 'Pilih antara aktivitas rendah, normal atau tinggi berdasarkan latihan harian yang sebenarnya dan tingkat energi yang ditunjukkan oleh teman berkaki empat Anda.' },
  { name: 'Masukkan kalori makanan per kg', text: 'Lihat pada kemasan makanan hewan untuk nilai kcal/kg yang tepat sehingga penghitungan ransum akhir dalam gram seakurat mungkin untuk kesehatan yang optimal.' },
];

const bibliography: PetRationLocaleContent['bibliography'] = [
  { name: 'WSAVA: Toolkit Nutrisi dan Rekomendasi Kalori', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
  { name: 'FEDIAF: Pedoman Nutrisi untuk Makanan Hewan Peliharaan Lengkap dan Pelengkap', url: 'https://fediaf.org/self-regulation/nutrition.html' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Prinsip Utama Nutrisi dan Kesehatan Veteriner',
    items: [
      'Formula RER adalah: 70 × (berat dalam kg)^0,75. Ini adalah landasan ilmiah dari semua perhitungan kalori veteriner modern.',
      'DER mengalikan RER dengan faktor gaya hidup spesifik hewan untuk memberikan kebutuhan harian.',
      'Anjing yang dikebiri membutuhkan kalori hingga 20 persen lebih sedikit daripada yang utuh karena perubahan hormonal.',
      'Obesitas memengaruhi 50 persen hewan peliharaan saat ini dan secara signifikan mengurangi harapan serta kualitas hidup mereka.',
      'Menghitung ransum yang tepat adalah salah satu bentuk obat pencegahan yang paling efektif bagi pemilik hewan peliharaan.',
      'Menggunakan timbangan dapur memberikan akurasi yang dibutuhkan untuk mengikuti rencana pemberian makan berbasis ilmiah.',
    ],
  },
  { type: 'title', text: 'Panduan Lengkap untuk Menghitung Ransum Harian Hewan Peliharaan Anda untuk Kesehatan Optimal', level: 2 },
  {
    type: 'paragraph',
    html: 'Memberi makan anjing atau kucing dengan benar bukan sekadar mengisi mangkuk mereka setiap pagi. Nutrisi adalah pilar fundamental dari kesehatan, umur panjang, dan kesejahteraan emosional mereka. Sebuah <strong>kalkulator ransum harian untuk hewan peliharaan</strong> adalah alat yang sangat penting bagi setiap pemilik yang bertanggung jawab yang ingin menghindari dua masalah paling umum dalam nutrisi veteriner saat ini: malnutrisi karena kurangnya nutrisi dan, terutama, obesitas, yang memengaruhi lebih dari 50% hewan peliharaan di negara maju.',
  },
  {
    type: 'paragraph',
    html: 'Dalam panduan ini kita akan mengeksplorasi landasan ilmiah di balik perhitungan kalori, cara menafsirkan label makanan, dan bagaimana faktor-faktor seperti usia, tingkat aktivitas fisik, dan status fisiologis memengaruhi jumlah makanan yang dibutuhkan teman Anda setiap hari. Kami akan membantu Anda memahami bagaimana penyesuaian kecil dalam ransum harian dapat membuat perbedaan besar dalam mencegah diabetes, masalah sendi, dan kesehatan jantung hewan Anda.',
  },
  { type: 'title', text: 'Ilmu di Balik Perhitungan: Memahami RER dan DER', level: 3 },
  {
    type: 'paragraph',
    html: 'Untuk menentukan dengan tepat berapa banyak hewan harus makan setiap hari, dokter hewan dan ahli nutrisi menggunakan dua konsep utama: RER dan DER. Akronim ini masing-masing singkatan dari Resting Energy Requirement dan Daily Energy Requirement. Memahami bagaimana keduanya berinteraksi sangat penting untuk mengelola berat badan dan kesehatan hewan peliharaan Anda dengan cara yang aman dan terkendali.',
  },
  {
    type: 'paragraph',
    html: 'RER mencakup energi yang dibutuhkan untuk fungsi organ dasar, respirasi, dan sirkulasi saat hewan sedang istirahat. DER kemudian mengambil nilai ini dan menyesuaikannya dengan gaya hidup hewan tersebut, apakah mereka anjing pertunjukan yang aktif atau kucing dalam ruangan yang tenang. Dengan mengkalibrasi nilai-nilai ini dengan benar, kita dapat mencapai keseimbangan yang mendukung skor kondisi tubuh yang sehat dari waktu ke waktu.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: Energi istirahat', value: '70 × kg^0,75' },
      { label: 'Faktor anak anjing', value: 'x2,5 hingga x3,5' },
      { label: 'Faktor dewasa aktif', value: 'x1,6 hingga x2,0' },
      { label: 'Faktor senior', value: 'x1,0 hingga x1,4' },
    ],
  },
  { type: 'title', text: 'Cara Membaca dan Menafsirkan Label Makanan Hewan Peliharaan Anda', level: 3 },
  {
    type: 'paragraph',
    html: 'Agar kalkulator memberi Anda gram yang tepat, Anda perlu mengetahui <strong>densitas kalori</strong> dari produk tersebut, juga dikenal sebagai energi yang dapat dimetabolisme. Nilai ini biasanya dinyatakan sebagai kcal/kg atau kcal/100g pada kemasan. Dengan memasukkan angka-angka ini secara tepat, Anda dapat merancang diet yang tidak kekurangan atau berlebihan.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Kibble diet ringan', value: '~3000 kcal/kg' },
      { label: 'Kibble dewasa standar', value: '~3500 kcal/kg' },
      { label: 'Kibble anak anjing energi tinggi', value: '~4000 kcal/kg' },
      { label: 'Makanan kaleng basah', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Catatan Nutrisi dari Dokter Hewan',
    html: 'Setiap hewan peliharaan adalah individu dengan metabolisme uniknya sendiri. Kalkulator menawarkan titik awal yang didukung secara ilmiah, tetapi Anda harus selalu memantau kondisi tubuh yang sebenarnya dengan meraba tulang rusuk hewan peliharaan Anda. Jika Anda dapat merasakannya dengan mudah tanpa menekannya dengan keras, berat badannya ideal. Jika tulang rusuk sulit ditemukan di bawah lapisan lemak, mungkin sudah waktunya untuk membatasi ransum.',
  },
  { type: 'title', text: 'Perbedaan Nutrisi Antara Kucing dan Anjing', level: 3 },
  {
    type: 'paragraph',
    html: 'Kucing adalah karnivora obligat dan metabolisme mereka dioptimalkan untuk memperoleh energi dari protein hewani. Pada anjing, kita melihat metabolisme omnivora yang lebih fleksibel, tetapi seseorang tetap harus berhati-hati dengan kelebihan karbohidrat yang dapat menyebabkan penambahan berat badan. Kedua spesies tumbuh subur dengan ransum terkontrol yang menghindari beban berlebihan pada sendi dan sistem kardiovaskular sepanjang hidup mereka.',
  },
  {
    type: 'paragraph',
    html: 'Menghabiskan beberapa menit untuk menghitung ransum yang tepat adalah salah satu investasi paling menguntungkan dalam obat pencegahan yang dapat Anda lakukan sebagai pemilik. Berat badan yang sehat secara drastis mengurangi risiko penyakit kronis dan memberi teman terbaik Anda kesempatan terbaik untuk hidup yang panjang dan bersemangat. Konsultasikan dengan dokter hewan Anda pada kunjungan rutin berikutnya untuk memastikan strategi pemberian makan Anda saat ini optimal.',
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
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Bibliografi',
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
