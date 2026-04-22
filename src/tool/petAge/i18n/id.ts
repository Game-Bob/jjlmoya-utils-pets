import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'kalkulator-usia-hewan-peliharaan';
const title = 'Kalkulator Usia Hewan Peliharaan';
const description = 'Temukan usia asli anjing atau kucing Anda dalam tahun manusia. Lupakan "aturan kali 7". Gunakan kalkulator kami yang berdasarkan ilmu veteriner saat ini untuk hasil yang tepat.';

const ui: PetAgeUI = {
  toolTitle: 'Kalkulator Usia',
  toolSubtitle: 'Berapa tahun manusia yang sebenarnya dimiliki teman berbulu Anda?',
  petNameLabel: 'Nama (Opsional)',
  petNamePlaceholder: 'mis., Buddy',
  petTypeDog: 'Anjing',
  petTypeCat: 'Kucing',
  sizeSmall: 'Kecil',
  sizeMedium: 'Sedang',
  sizeLarge: 'Besar',
  sizeGiant: 'Raksasa',
  birthYearLabel: 'Tahun lahir',
  humanAgeLabel: 'Usia manusia dari',
  humanAgeUnit: 'tahun',
  humanAgeYears: 'tahun',
  lifeStageLabel: 'Tahap kehidupan',
  milestoneLabel: 'Tonggak sejarah berikutnya',
  shareBtn: 'Bagikan hasil',
  shareSuccess: 'Disalin! Membuka kartu...',
  humanAgeTitle: 'Usia Ajaib',
  recalculateBtn: 'Hitung usia lain',
  realAgeLabel: 'Usia Sebenarnya',
  defaultPetName: 'Hewan peliharaan Anda',
  stageDogPuppy: 'Anak Anjing Ceria',
  stageDogTeen: 'Remaja Pemberontak',
  stageDogAdult: 'Dewasa Puncak',
  stageDogMature: 'Kedewasaan Terhormat',
  stageDogSenior: 'Kebijaksanaan Senior',
  stageCatKitten: 'Keingintahuan Bayi',
  stageCatYouth: 'Pemuda Felin',
  stageCatReign: 'Pemerintahan Domestik',
  stageCatVeteran: 'Veteran yang Dimanjakan',
  stageCatVenerable: 'Tetua yang Terhormat',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: 'Benarkah satu tahun anjing sama dengan tujuh tahun manusia?',
    answer: 'Tidak. Itu adalah aturan sederhana yang telah dibantah oleh ilmu veteriner modern. Anjing menjadi dewasa dengan sangat cepat selama dua tahun pertama mereka, dan prosesnya kemudian melambat, sangat bervariasi berdasarkan berat dan jenis anjing. Studi terbaru pada metilasi DNA telah memungkinkan formula penuaan yang lebih tepat yang lebih mencerminkan perkembangan biologis sebenarnya dari hewan peliharaan sepanjang masa hidup mereka.',
  },
  {
    question: 'Mengapa anjing besar menua lebih cepat?',
    answer: 'Anjing ras besar memiliki metabolisme dan pertumbuhan yang lebih cepat, yang menyebabkan stres oksidatif lebih besar dalam sel mereka. Ini berarti harapan hidup mereka lebih pendek daripada anjing kecil. Penanda biologis menunjukkan bahwa ras raksasa dapat mencapai status senior paling awal pada usia 5 tahun manusia, sementara ras kecil mungkin tidak mencapainya hingga 10 atau 11 tahun.',
  },
  {
    question: 'Bagaimana penuaan kucing dibandingkan dengan manusia?',
    answer: 'Seekor kucing menyelesaikan masa bayinya pada usia satu bulan, masa remajanya pada usia 6 bulan, dan mencapai kedewasaan (setara dengan 24 tahun manusia) pada usia 2 tahun. Setelah itu, setiap tahun kehidupan kucing setara dengan kurang lebih 4 tahun manusia. Pola ini cukup konsisten di berbagai ras kucing, tidak seperti variasi signifikan yang terlihat pada anjing.',
  },
  {
    question: 'Pada usia berapa hewan peliharaan dianggap Senior?',
    answer: 'Umumnya, anjing dianggap senior saat telah mencapai 75% dari harapan hidupnya. Untuk kucing, biasanya dari 7 hingga 11 tahun, tergantung pada status kesehatan mereka. Pemeriksaan veteriner rutin menjadi semakin kritis selama fase ini untuk memantau kondisi umum terkait usia seperti penyakit ginjal atau penurunan kognitif.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Pilih spesies hewan peliharaan', text: 'Pilih apakah Anda memiliki anjing atau kucing untuk menerapkan formula biologis yang benar untuk tingkat metabolisme spesifik mereka.' },
  { name: 'Tunjukkan ukuran (hanya anjing)', text: 'Untuk anjing, berat badan adalah faktor kunci dalam menentukan usia biologis. Tentukan apakah ukurannya kecil (hingga 10 kg), sedang (10 hingga 25 kg), besar (25 hingga 45 kg), atau raksasa (lebih dari 45 kg).' },
  { name: 'Masukkan tahun kelahiran', text: 'Masukkan tahun kelahiran hewan peliharaan Anda untuk menghitung usia kronologis mereka. Sistem kami kemudian akan memproses informasi ini terhadap kurva penuaan yang ditetapkan.' },
  { name: 'Analisis tahap kehidupan', text: 'Periksa hasilnya untuk mengetahui apakah hewan peliharaan Anda berada dalam tahap bayi, muda, dewasa, atau senior dibandingkan dengan manusia dan pahami kebutuhan mereka saat ini.' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Apa yang Perlu Anda Ketahui Tentang Penuaan Hewan Peliharaan',
    items: [
      '"Aturan kali 7" adalah mitos: anjing menjadi dewasa secara eksponensial selama 2 tahun pertama.',
      'Anjing berusia 1 tahun seperti 15 tahun manusia; anjing berusia 2 tahun setara dengan 24 tahun manusia.',
      'Anjing besar menua lebih cepat daripada anjing kecil setelah usia 2 tahun karena stres biologis.',
      'Kucing mengikuti kurva yang lebih linear: setiap tahun kucing setara dengan 4 tahun manusia setelah usia 2 tahun.',
      'Usia biologis adalah prediktor kebutuhan kesehatan yang lebih baik daripada usia kronologis saja.',
      'Skrining rutin dapat membantu mendeteksi masalah terkait usia sebelum menjadi parah.',
    ],
  },
  { type: 'title', text: 'Kebenaran Ilmiah Mengenai Usia Hewan Peliharaan Anda', level: 2 },
  {
    type: 'paragraph',
    html: 'Tahukah Anda bahwa kucing berusia 2 tahun sudah memiliki kedewasaan seperti orang berusia 24 tahun? Temukan mengapa aturan mengalikan dengan 7 adalah mitos dan bagaimana memahami realitas biologis dapat meningkatkan perawatan hewan peliharaan Anda. Mitos lama bahwa "1 tahun anjing setara dengan 7 tahun manusia" adalah penyederhanaan berlebihan yang tidak memperhitungkan perubahan perkembangan besar-besaran yang terlihat di masa awal kehidupan. Hewan peliharaan menjadi dewasa dengan kecepatan luar biasa selama dua tahun pertama kehidupan mereka, mencapai kedewasaan seksual dan fisik dengan sangat cepat. Setelah itu, kurva penuaan ini mendatar dan melambat secara signifikan.',
  },
  {
    type: 'paragraph',
    html: 'Penelitian modern, termasuk studi tentang jam epigenetik dan metilasi DNA, telah memberi kita pandangan yang jauh lebih bernuansa. Studi-studi ini menunjukkan bahwa modifikasi kimia pada DNA anjing berubah pada tingkat yang berbeda sepanjang hidup mereka. Pada masa anak anjing awal, perubahan ini cepat dan intens, sedangkan pada masa dewasa pergeseran metabolik dan genetik lebih bertahap. Pemahaman ini memungkinkan para ilmuwan untuk mengembangkan formula logaritmik yang jauh lebih akurat daripada perkalian linear apa pun.',
  },
  { type: 'title', text: 'Sains di Balik Perhitungan', level: 3 },
  {
    type: 'paragraph',
    html: 'Alat ini menggunakan pedoman resmi dari <strong>American Animal Hospital Association (AAHA)</strong> dan studi terbaru tentang metilasi DNA pada anjing untuk memberi Anda perkiraan seakurat mungkin. Dengan menggabungkan data spesifik ukuran dengan penanda biologis independen jenis anjing, kami membuat model komprehensif perkembangan hewan peliharaan. Pendekatan ini mengakui bahwa seorang Chihuahua dan Great Dane memiliki pengalaman hidup dan profil penuaan yang sangat berbeda sejak saat mereka lahir.',
  },
  {
    type: 'paragraph',
    html: 'Memahami perbedaan ini sangat penting bagi pemilik hewan peliharaan yang bertanggung jawab. Hal ini memungkinkan waktu yang lebih baik untuk intervensi veteriner, seperti beralih ke diet senior atau memulai suplemen sendi pencegahan. Kalkulator kami menjembatani kesenjangan antara sains kompleks yang ditinjau sejawat dan pengetahuan praktis sehari-hari bagi pecinta hewan peliharaan di seluruh dunia.',
  },
  {
    type: 'table',
    headers: ['Spesies', 'Tahun 1', 'Tahun 2', 'Tahun 3 dan seterusnya'],
    rows: [
      ['Kucing', '15 tahun manusia', '24 tahun manusia', '+4 tahun per tahun'],
      ['Anjing Kecil', '15 tahun manusia', '24 tahun manusia', '+5 tahun per tahun'],
      ['Anjing Sedang', '15 tahun manusia', '24 tahun manusia', '+6 tahun per tahun'],
      ['Anjing Besar', '15 tahun manusia', '24 tahun manusia', '+7 tahun per tahun'],
      ['Anjing Raksasa', '15 tahun manusia', '24 tahun manusia', '+8 tahun per tahun'],
    ],
  },
  { type: 'title', text: 'Tahap Kehidupan: Apa yang Diharapkan dan Cara Mempersiapkan', level: 3 },
  {
    type: 'paragraph',
    html: 'Mengetahui usia sebenarnya hewan peliharaan Anda membantu Anda memahami kebutuhan medis dan emosional mereka di setiap fase. Sama seperti manusia melewati tahap kehidupan yang berbeda, anjing dan kucing mengalami perubahan fisiologis dan psikologis tertentu saat mereka tumbuh. Menyadari transisi ini memungkinkan Anda memberikan dukungan yang tepat pada waktu yang tepat, baik itu permainan berenergi tinggi untuk seorang remaja atau perawatan ortopedi khusus untuk seorang senior.',
  },
  {
    type: 'card',
    title: 'Anak Anjing atau Junior (0 hingga 1 tahun)',
    icon: 'mdi:star-shooting',
    html: 'Ini adalah tahap pertumbuhan dan perkembangan yang eksplosif. Tulang mereka tumbuh pada tingkat yang luar biasa, gigi sementara mereka rontok untuk memberi ruang bagi gigi permanen, dan otak mereka menyerap informasi seperti spons. Vaksinasi dan sosialisasi dini sangat penting di sini untuk memastikan mereka tumbuh menjadi orang dewasa yang menyesuaikan diri dengan baik. Ini juga merupakan waktu terbaik untuk menetapkan kebiasaan baik yang akan bertahan seumur hidup.',
  },
  {
    type: 'card',
    title: 'Dewasa (2 hingga 6 tahun)',
    icon: 'mdi:shield-check',
    html: 'Ini adalah puncak bentuk fisik dan mental bagi sebagian besar hewan peliharaan. Kepribadian mereka sekarang sudah terbentuk, dan mereka biasanya dalam kondisi paling aktif. Ini adalah momen emas untuk menikmati aktivitas fisik yang intens dan menjaga berat badan ideal untuk mencegah penyakit di masa depan. Olahraga yang konsisten dan diet seimbang adalah pilar kesehatan selama tahun-tahun ini, membantu membangun sistem kekebalan tubuh yang kuat dan tubuh yang tangguh.',
  },
  {
    type: 'card',
    title: 'Senior (lebih dari 7 tahun)',
    icon: 'mdi:heart-pulse',
    html: 'Rambut abu-abu mulai muncul di moncong dan hewan peliharaan cenderung lebih banyak tidur. Metabolisme mereka melambat secara signifikan, dan mereka mungkin kurang tertarik pada permainan berdampak tinggi. Mulai saat ini, pemeriksaan veteriner harus dilakukan setiap enam bulan sekali. Pantau tanda-tanda radang sendi, perubahan kesehatan gigi, dan perubahan perilaku apa pun yang mungkin mengindikasikan ketidaknyamanan. Deteksi dini penyakit senior adalah cara terbaik untuk memastikan kualitas hidup mereka tetap tinggi.',
  },
  {
    type: 'tip',
    title: 'Saran Dokter Hewan tentang Penuaan',
    html: 'Usia yang dihitung adalah perkiraan biologis rata-rata berdasarkan dataset yang luas. Faktor-faktor seperti ras spesifik, genetika, diet, dan gaya hidup semuanya dapat berdampak signifikan pada tingkat penuaan sebenarnya dari hewan peliharaan Anda. Untuk saran pribadi dan penilaian kesehatan menyeluruh, selalu konsultasikan dengan dokter hewan Anda, yang paling mengenal sahabat Anda.',
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
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: 'Bibliografi',
  bibliography,
  howTo,
  schemas,
};
