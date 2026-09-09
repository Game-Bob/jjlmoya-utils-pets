import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'evcil-hayvan-tasma-boyutu-hesaplama';
const title = 'Evcil hayvan tasma boyutu hesaplama';
const description = 'Boyun çevresini ölçün, rahatlık payı ekleyin ve elle kontrol edilecek ayarlanabilir tasma aralığını bulun.';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: 'Boyun çevresi', unitLabel: 'Göster', centimetres: 'Santimetre', inches: 'İnç', allowanceLabel: 'Rahatlık payı', collarTypeLabel: 'Tasma türü', flatCollar: 'Düz', breakawayCollar: 'Güvenlik açılır', martingaleCollar: 'Martingale', statusTight: 'Daha fazla pay ekleyin', statusBalanced: 'Kontrole hazır', statusLoose: 'Güvenliği kontrol edin', statusTightDetail: 'Daha fazla pay ekleyin.', statusBalancedDetail: 'Bu aralığı elle kontrol edin.', statusLooseDetail: 'Kayarak çıkamayacağını kontrol edin.', fitStudyLabel: 'Tasma uyum çalışması', fitWindowLabel: 'Bu aralığı bulun', measuredLabel: 'Ölçülen boyun', roomLabel: 'Rahatlık payı', checkLabel: 'Elle kontrol', sceneAria: 'Boyun halkasını ve ayarlanabilir tasma aralığını gösteren uyum çalışması', neckMarker: 'boyun', easeMarker: 'pay', rangeMarker: 'tasma aralığı', minimumMarker: 'başlangıç', maximumMarker: 'bitiş', checkFlat: 'Rahat, güvenli ve sürtünmesiz.', checkBreakaway: 'Uyumu ve açılma mekanizmasını kontrol edin.', checkMartingale: 'Sıkma halkası boynu sıkmamalıdır.', invalidInput: 'Geçerli bir boyun çevresi ve rahatlık payı girin.',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: 'Evcil hayvanımın boynunu nasıl ölçerim?', answer: 'Esnek bir mezurayı tasmanın duracağı yere sarın. Deriyi veya tüyleri sıkıştırmadan mezurayı düz ve tüylere yakın tutun. Tasma konumu, tüyler veya hayvanın duruşu değişirse ölçümü tekrarlayın.' },
  { question: 'Neden tek beden yerine aralık veriliyor?', answer: 'Ayarlanabilir tasmaların ayar mesafeleri farklıdır ve beden etiketleri üreticiler arasında aynı değildir. Hesaplama seçtiğiniz payı ekleyerek küçük bir karşılaştırma aralığı oluşturur. Ardından gerçek tasma hayvan üzerinde kontrol edilmelidir.' },
  { question: 'Ne kadar rahatlık payı seçmeliyim?', answer: 'Herkes için geçerli tek bir değer yoktur. Tüy, genişlik, malzeme ve aktivite uyumu değiştirir. Sayıyı görünür bir varsayım olarak kullanın ve rahatlığı sakin bir elle kontrol ederek doğrulayın.' },
  { question: 'Martingale tasma için de kullanılabilir mi?', answer: 'İlk ölçüm aynı boyun çevresinden başlar. Son kontrol farklıdır: sıkma halkası sınırlandırılmalı ve asla boğmamalıdır. Mekanizmayı bilmiyorsanız üretici talimatlarını izleyin.' },
  { question: 'Sonucu yavru hayvan için kullanabilir miyim?', answer: 'Evet, mevcut uyumun bir görüntüsü olarak kullanabilirsiniz. Yavru hayvanlar büyür ve tüyleri değişir; bu nedenle ölçümü düzenli olarak tekrarlayın.' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: 'Boynu ölçün', text: 'Sakin ve doğal duran hayvanı, tasmanın duracağı yerden ölçün. Mezura düz olmalı ve çekmemelidir.' },
  { name: 'Payı seçin', text: 'Boyun ile tasma arasındaki payı görünür ayarla değiştirin. Başlangıçtaki 2 cm yalnızca bir örnektir.' },
  { name: 'Türü seçin', text: 'Düz, güvenlik açılır veya martingale seçerek mekanizmaya uygun kontrol notunu görün.' },
  { name: 'Ayar aralığını karşılaştırın', text: 'Sonucun tamamını kapsayan bir tasma bulun ve ardından hayvan üzerinde fiziksel kontrol yapın.' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Ölçümden alışveriş aralığına', items: ['Tasmanın gerçekten duracağı yerden ölçün.', 'Irka göre tahmin etmek yerine rahatlık payını görünür yapın.', 'Sonucu ürünün gerçek ayar aralığıyla karşılaştırın.', 'Seçimi hayvan üzerinde sakin bir kontrolle bitirin.'] },
  { type: 'title', text: 'Bu hesaplama hangi kararı destekler', level: 2 },
  { type: 'paragraph', html: 'Beden tabloları, hayvan iki ölçünün arasındaysa, tüyleri yoğunsa veya büyümeye devam ediyorsa zorlaşır. Bu araç sizin kontrol edebileceğiniz bir ölçümle başlar: tasmanın duracağı yerdeki boyun çevresi. Sonra seçtiğiniz rahatlık payını ekler. Sonuç küçük, orta veya büyük gibi ticari bir etiketi tahmin etmez; ürünlerin ayarlanabilir ölçüleriyle karşılaştırılabilecek somut bir aralık oluşturur.' },
  { type: 'paragraph', html: 'Aralık bilerek kısa tutulur ve alışveriş için başlangıç noktası olarak kullanılır. Ayarlanabilir tasmalar için dünya çapında tek bir standart yoktur; kullanılabilir uzunluk mağazadaki beden adından farklı olabilir. Bir ürün, ayarı aralığın tamamını kapsıyorsa seçime girer. Yine de sayı tek başına kenarın, tokaların, tüylerin veya mekanizmanın uygunluğunu doğrulamaz.' },
  { type: 'title', text: 'Satın almadan önce nasıl ölçülür', level: 2 },
  { type: 'list', items: ['Hayvan sakin ve doğal dururken ölçün.', 'Tüyleri veya deriyi sıkıştırmadan mezurayı yatay tutun.', 'Tasma daha yukarıda veya aşağıda duracaksa ölçümü tekrarlayın.', 'Yavru hayvanlarda tarihi not edin ve büyüme boyunca uyumu kontrol edin.'] },
  { type: 'paragraph', html: 'Rahatlık payı açık bir varsayımdır, güvenlik garantisi değildir. Doğru değer hayvana, tüylere, genişliğe, malzemeye ve kullanıma bağlıdır. Parmak kontrolü yol gösterebilir ama bir sayıyı herkes için kurala dönüştürmez. Sürtünme, öksürük, ağrı, nefes alma güçlüğü, stres veya kısıtlı hareket görülürse tasmayı çıkarın ve uzman görüşü alın.' },
  { type: 'title', text: 'Uyum halkasını okuyun', level: 2 },
  { type: 'table', headers: ['Sinyal', 'Anlamı', 'Sonraki adım'], rows: [['Ölçülen boyun', 'Pay eklenmeden önceki çevre.', 'Mezura eğri veya sıkıysa tekrar ölçün.'], ['Başlangıç', 'Boyun ve seçilen pay.', 'Ayarlanabilir aralığın alt sınırı olarak kullanın.'], ['Bitiş', 'Karşılaştırma için kısa pencere.', 'Pencerenin tamamını kapsayan ayar arayın.'], ['Kontrol', 'Seçilen pay için hatırlatma.', 'Hayvan üzerinde doğrulayın.']] },
  { type: 'title', text: 'Tasma türü son kontrolü değiştirir', level: 2 },
  { type: 'paragraph', html: 'Düz tasma konfor ve güvenlik kontrolü ister; güvenlik açılır veya martingale modellerinde mekanizma ayrıca incelenmelidir. Kenarı, tokayı, tüyleri ve sıkma halkasını kontrol edin. Sayı ürünleri filtrelemeye yardım eder, ancak son karar sakin hayvana ve üretici talimatlarına bağlıdır.' },
  { type: 'tip', title: 'Sakin bir elle kontrol yapın', html: 'Tasmayı hayvan rahatlarken takın. Hayvan sürtünme olmadan hareket edebilmeli, nefes alabilmeli, yiyebilmeli, içebilmeli ve başını çevirebilmelidir. Yerinde kalması gerekiyorsa başın üzerinden çıkmadığını da kontrol edin. Tıraş, büyüme, kilo değişimi veya konum değişiminden sonra yeniden bakın.' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
