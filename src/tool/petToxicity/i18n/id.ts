import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'pemeriksa-racun-makanan-hewan-peliharaan';
const title = 'Pemeriksa Racun Makanan Hewan Peliharaan';
const description = 'Periksa paparan makanan umum untuk anjing dan kucing, pahami tanda peringatan, dan ketahui kapan harus menghubungi dokter hewan.';

const ui: PetToxicityUI = {
  "journeyHint": "Pilih hewan, buka atlas makanan, dan baca peringatan khusus spesies sebelum memutuskan langkah.",
  "speciesLabel": "Hewan",
  "speciesDog": "Anjing",
  "speciesCat": "Kucing",
  "speciesDogMeta": "Profil anjing",
  "speciesCatMeta": "Profil kucing",
  "foodLabel": "Makanan atau bahan",
  "foodPlaceholder": "Pilih makanan",
  "foodMenuHint": "Daftar berubah sesuai hewan karena risiko bersifat spesifik spesies.",
  "resultEyebrow": "Atlas makanan menunjukkan",
  "resultEmpty": "Pilih makanan untuk membuka kartu keselamatannya.",
  "sceneLabel": "Peta paparan",
  "sceneReady": "Pilih makanan",
  "sceneSelected": "Kartu spesifik spesies terbuka",
  "riskCritical": "Mendesak",
  "riskHigh": "Risiko tinggi",
  "riskCaution": "Hati-hati",
  "riskUnknown": "Data tidak cukup",
  "riskLabel": "Tingkat risiko",
  "whyLabel": "Mengapa ini penting",
  "signsLabel": "Tanda yang perlu diamati",
  "actionLabel": "Tindakan yang harus diambil",
  "callVetLabel": "Langkah aman adalah saran profesional.",
  "callVetText": "Kalkulator tidak dapat memperkirakan dosis racun atau menggantikan pemeriksaan.",
  "sourceLabel": "Bukti yang digunakan",
  "sourceText": "Profil berdasarkan panduan toksikologi veteriner ASPCA, FDA, dan Merck Veterinary Manual.",
  "emergencyTitle": "Jika hewan peliharaan Anda memakan sesuatu yang mencurigakan",
  "emergencyText": "Hubungi dokter hewan atau klinik darurat segera. Simpan kemasan, daftar bahan, dan perkiraan jumlah.",
};

const faq: PetToxicityLocaleContent['faq'] = [
  {
    "question": "Apakah alat ini dapat menentukan hewan saya aman?",
    "answer": "Tidak. Ini adalah panduan edukasi tentang bahaya makanan umum, bukan diagnosis atau kalkulator dosis. Hubungi dokter hewan jika hewan Anda memakan makanan mencurigakan."
  },
  {
    "question": "Makanan apa yang sangat berbahaya bagi anjing?",
    "answer": "Xylitol, cokelat, kafein, anggur, kismis, bawang, alkohol, kacang makadamia, dan adonan ragi mentah."
  },
  {
    "question": "Apakah bawang merah dan bawang putih berbahaya bagi kucing?",
    "answer": "Ya. Kucing sangat rentan terhadap kerusakan sel darah merah akibat tanaman Allium (bawang merah, bawang putih, daun bawang)."
  },
  {
    "question": "Mengapa xylitol menunjukkan peringatan berbeda untuk anjing dan kucing?",
    "answer": "Xylitol menyebabkan penurunan gula darah yang cepat dan berbahaya pada anjing. Pada kucing, bahaya ini kurang terdokumentasi jelas oleh FDA."
  },
  {
    "question": "Apa yang harus dilakukan jika makanan tidak tercantum?",
    "answer": "Ketidakberadaan di daftar bukan bukti keamanan. Simpan kemasan dan hubungi dokter hewan."
  },
];


const howTo: PetToxicityLocaleContent['howTo'] = [
  {
    "name": "Pilih hewan",
    "text": "Pilih Anjing atau Kucing untuk melihat bukti spesifik spesies."
  },
  {
    "name": "Pilih makanan",
    "text": "Buka menu dan pilih bahan makanan yang paling sesuai."
  },
  {
    "name": "Baca kartu keselamatan",
    "text": "Tinjau tingkat risiko, gejala yang mungkin timbul, dan tindakan yang disarankan."
  },
  {
    "name": "Hubungi profesional jika diperlukan",
    "text": "Jika terjadi paparan nyata, segera hubungi dokter hewan."
  }
];

const seo: PetToxicityLocaleContent['seo'] = [
  {
    type: 'summary',
    title: "Pemeriksaan cepat keamanan makanan anjing dan kucing",
    items: [
      "Pilih spesies terlebih dahulu karena bahan yang sama dapat berdampak berbeda.",
      "Gunakan kartu makanan untuk memahami bahaya dan tingkat urgensi.",
      "Paparan xylitol pada anjing adalah keadaan darurat mendesak.",
      "Hubungi dokter hewan untuk paparan nyata di kehidupan nyata."
],
  },
  {
    type: 'title',
    text: "Cara menggunakan pemeriksa racun makanan hewan secara bertanggung jawab",
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Alat ini dirancang untuk menit-menit pertama yang menegangkan setelah anjing atau kucing memakan sesuatu yang tidak seharusnya. Pilih hewan dan buka kartu makanan untuk mempersiapkan konsultasi dengan dokter hewan. Hal ini membantu mengendalikan situasi dengan lebih tenang dan teratur saat mengontak penanganan medis darurat. Informasi yang disajikan mencakup indikasi bahaya, gejala umum yang perlu diamati, serta pertolongan pertama yang tepat.",
  },
  {
    type: 'paragraph',
    html: "Anjing dan kucing memproses zat dengan cara berbeda. Xylitol sangat berbahaya bagi anjing karena memicu pelepasan insulin cepat yang berujung pada hipoglikemia berat dan potensi kerusakan hati, sedangkan tanaman keluarga bawang sangat berdampak pada sel darah merah kucing hingga memicu anemia hemolitik. Pemilihan spesies sejak awal meminimalkan salah tafsir informasi penting yang membahayakan nyawa hewan.",
  },
  {
    type: 'title',
    text: "Bahaya makanan umum dan rincian penting",
    level: 2,
  },
  {
    type: 'table',
    headers: ["Makanan atau bahan","Bahaya utama","Konteks penting"],
    rows: [["Cokelat dan kafein","Efek pada jantung dan saraf","Kandungan kakao dan berat badan sangat menentukan tingkat keracunan."],["Xylitol","Penurunan gula darah cepat pada anjing","Periksa permen karet bebas gula, permen, dan kue."],["Anggur dan kismis","Potensi kerusakan ginjal pada anjing","Jangan menganggap jumlah kecil aman untuk dikonsumsi."],["Bawang merah dan putih","Kerusakan sel darah merah","Bentuk bubuk, kering, dan olahan juga berbahaya."],["Adonan ragi mentah","Pembengkakan lambung dan alkohol","Adonan mengembang dan menghasilkan fermentasi berbahaya."]],
  },
  {
    type: 'paragraph',
    html: "Selain racun kimia, bahaya fisik seperti penyumbatan tulang atau pankreatitis akibat makanan berlemak juga perlu diwaspadai. Tulang yang dimasak dapat pecah dan melukai saluran pencernaan, sementara makanan tinggi lemak dapat menyebabkan peradangan pankreas yang sangat menyakitkan. Penanganan yang cepat dan tepat sangat menentukan keselamatan hewan peliharaan Anda.",
  },
  {
    type: 'title',
    text: "Langkah yang harus diambil setelah paparan",
    level: 2,
  },
  {
    type: 'list',
    items: [
      "Jauhkan sisa makanan dan simpan kemasannya dengan baik.",
      "Catat berat hewan, jenis makanan, jumlah, dan waktu paparan.",
      "Hubungi dokter hewan atau layanan darurat hewan segera.",
      "Jangan memicu muntah tanpa petunjuk medis dokter hewan.",
      "Segera cari bantuan jika terjadi kejang, pingsan, atau sesak napas."
],
  },
  {
    type: 'tip',
    title: "Kesehatan hewan adalah yang utama",
    html: "Gejala bisa muncul terlambat. Jangan menunda untuk meminta bantuan profesional medis veteriner.",
  },
];

const schemas: PetToxicityLocaleContent['schemas'] = [
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

export const content: PetToxicityLocaleContent = {
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
