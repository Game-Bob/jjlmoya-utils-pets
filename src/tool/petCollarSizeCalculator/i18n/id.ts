import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'kalkulator-ukuran-kalung-hewan';
const title = 'Kalkulator ukuran kalung hewan peliharaan';
const description = 'Ukur leher, tambahkan ruang nyaman, lalu temukan rentang kalung yang dapat disetel untuk diperiksa langsung.';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: 'Lingkar leher', unitLabel: 'Tampilan', centimetres: 'Sentimeter', inches: 'Inci', allowanceLabel: 'Ruang nyaman', collarTypeLabel: 'Jenis kalung', flatCollar: 'Datar', breakawayCollar: 'Pengaman lepas', martingaleCollar: 'Martingale', statusTight: 'Tambahkan ruang', statusBalanced: 'Siap diperiksa', statusLoose: 'Periksa keamanan', statusTightDetail: 'Tambahkan ruang.', statusBalancedDetail: 'Periksa rentang ini dengan tangan.', statusLooseDetail: 'Pastikan tidak mudah terlepas.', fitStudyLabel: 'Studi kecocokan kalung', fitWindowLabel: 'Cari rentang ini', measuredLabel: 'Leher terukur', roomLabel: 'Ruang nyaman', checkLabel: 'Pemeriksaan langsung', sceneAria: 'Studi kecocokan yang menunjukkan lingkar leher dan rentang kalung yang dapat disetel', neckMarker: 'leher', easeMarker: 'ruang', rangeMarker: 'rentang kalung', minimumMarker: 'mulai', maximumMarker: 'akhir', checkFlat: 'Nyaman, aman, dan tidak menggesek.', checkBreakaway: 'Periksa kecocokan dan mekanisme pelepas.', checkMartingale: 'Lingkar pengencang tidak boleh menekan leher.', invalidInput: 'Masukkan lingkar leher dan ruang yang valid.',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: 'Bagaimana mengukur leher hewan?', answer: 'Lingkarkan pita ukur yang lentur di tempat kalung akan berada. Jaga tetap rata dan dekat dengan bulu tanpa menekan kulit atau bulu. Ukur ulang jika posisi kalung, bulu, atau postur hewan berubah.' },
  { question: 'Mengapa hasilnya berupa rentang?', answer: 'Kalung yang dapat disetel memiliki panjang berbeda dan label ukuran tidak sama antarprodusen. Kalkulator menambahkan ruang yang dipilih lalu membuat rentang kecil untuk perbandingan. Kalung sebenarnya tetap harus diperiksa pada hewan.' },
  { question: 'Berapa ruang nyaman yang harus dipilih?', answer: 'Tidak ada satu nilai untuk semua hewan. Bulu, lebar, bahan, dan aktivitas memengaruhi kecocokan. Gunakan angka sebagai asumsi yang terlihat, lalu pastikan kenyamanan dan keamanan dengan pemeriksaan langsung yang tenang.' },
  { question: 'Apakah ini berlaku untuk kalung martingale?', answer: 'Perkiraan awal memakai lingkar leher yang sama. Pemeriksaan akhirnya berbeda: lingkar pengencang harus dibatasi dan tidak boleh mencekik. Ikuti petunjuk produsen jika mekanismenya belum dikenal.' },
  { question: 'Apakah hasil ini bisa digunakan untuk anak hewan?', answer: 'Bisa sebagai gambaran kecocokan saat ini. Hewan muda tumbuh dan bulunya berubah, jadi pengukuran harus diulang secara berkala dan diperiksa dengan cermat.' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: 'Ukur leher', text: 'Ukur hewan yang tenang dan berdiri alami, di tempat kalung akan berada. Pita harus rata dan tidak menarik.' },
  { name: 'Pilih ruang', text: 'Atur ruang antara leher dan kalung dengan penggeser yang terlihat. Contoh awal 2 cm bukan aturan universal.' },
  { name: 'Pilih jenis', text: 'Pilih datar, pengaman lepas, atau martingale agar pengingat sesuai dengan mekanismenya.' },
  { name: 'Bandingkan setelan', text: 'Cari kalung yang rentang setelannya mencakup seluruh hasil, lalu lakukan uji langsung pada hewan.' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Dari ukuran ke rentang belanja', items: ['Ukur di tempat kalung benar-benar akan berada.', 'Tampilkan ruang nyaman alih-alih menebak dari ras.', 'Bandingkan hasil dengan rentang setelan produk.', 'Akhiri dengan pemeriksaan tenang pada hewan.'] },
  { type: 'title', text: 'Keputusan yang dibantu kalkulator ini', level: 2 },
  { type: 'paragraph', html: 'Tabel ukuran sering membingungkan saat hewan berada di antara dua ukuran, memiliki bulu tebal, atau masih tumbuh. Alat ini dimulai dari ukuran yang bisa Anda periksa: lingkar leher di tempat kalung akan beristirahat. Setelah itu Anda menambahkan ruang nyaman yang dipilih. Hasilnya tidak menebak label kecil, sedang, atau besar, tetapi membuat rentang konkret untuk dibandingkan dengan ukuran setelan produk.' },
  { type: 'paragraph', html: 'Rentang dibuat singkat agar berguna sebagai titik awal belanja. Kalung yang dapat disetel tidak memiliki standar dunia yang sama, dan panjang yang dapat digunakan mungkin berbeda dari nama ukuran di toko. Produk masuk pilihan jika setelannya mencakup seluruh rentang. Angka ini tetap tidak membuktikan bahwa tepi, gesper, bulu, atau mekanismenya cocok.' },
  { type: 'title', text: 'Cara mengukur sebelum membeli', level: 2 },
  { type: 'list', items: ['Ukur saat hewan tenang dan berdiri alami.', 'Jaga pita tetap rata tanpa menekan bulu atau kulit.', 'Ukur ulang jika kalung akan berada lebih tinggi atau lebih rendah.', 'Untuk hewan muda, catat tanggal dan periksa kecocokan selama pertumbuhan.'] },
  { type: 'paragraph', html: 'Ruang nyaman adalah asumsi yang terlihat, bukan jaminan keamanan. Nilai yang tepat bergantung pada hewan, bulu, lebar, bahan, dan penggunaan. Pemeriksaan dengan jari dapat membantu, tetapi angka tidak menjadi aturan bagi semua hewan. Jika ada gesekan, batuk, nyeri, sulit bernapas, stres, atau gerak terbatas, lepaskan kalung dan minta nasihat ahli.' },
  { type: 'title', text: 'Baca lingkar kecocokan', level: 2 },
  { type: 'table', headers: ['Sinyal', 'Arti', 'Langkah berikutnya'], rows: [['Leher terukur', 'Lingkar sebelum ruang ditambahkan.', 'Ukur ulang jika pita miring atau terlalu ketat.'], ['Mulai', 'Leher ditambah ruang pilihan.', 'Gunakan sebagai batas bawah setelan.'], ['Akhir', 'Jendela kecil untuk perbandingan.', 'Cari setelan yang mencakup seluruh jendela.'], ['Pemeriksaan', 'Pengingat terkait ruang pilihan.', 'Pastikan langsung pada hewan.']] },
  { type: 'title', text: 'Jenis kalung mengubah pemeriksaan akhir', level: 2 },
  { type: 'paragraph', html: 'Kalung datar memerlukan pemeriksaan kenyamanan dan keamanan, sedangkan model pengaman lepas atau martingale membutuhkan perhatian tambahan pada mekanismenya. Periksa tepi, gesper, bulu, dan lingkar pengencang. Angka membantu menyaring produk, tetapi keputusan akhir bergantung pada hewan yang tenang dan petunjuk produsen.' },
  { type: 'tip', title: 'Lakukan pemeriksaan dengan tenang', html: 'Pasang kalung saat hewan santai. Hewan harus dapat bergerak, bernapas, makan, minum, dan memutar kepala tanpa gesekan. Periksa juga agar kalung tidak melewati kepala ketika harus tetap di tempat. Periksa kembali setelah grooming, tumbuh, berat berubah, atau posisi berganti.' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
