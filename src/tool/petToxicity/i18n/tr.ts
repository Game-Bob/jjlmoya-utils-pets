import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'evcil-hayvan-zehirli-gida-kontrolu';
const title = 'Kedi ve köpekler için zehirli gıda kontrolü';
const description = 'Kedi ve köpekler için tehlikeli gıdaları kontrol edin, uyarı belirtilerini anlayın ve ne zaman veteriner hekime başvuracağınızı öğrenin.';

const ui: PetToxicityUI = {
  "journeyHint": "Hayvanı seçin, gıda atlasını açın ve karardan önce türe özgü uyarıyı okuyun.",
  "speciesLabel": "Tür",
  "speciesDog": "Köpek",
  "speciesCat": "Kedi",
  "speciesDogMeta": "Köpek profili",
  "speciesCatMeta": "Kedi profili",
  "foodLabel": "Gıda veya içerik",
  "foodPlaceholder": "Bir gıda seçin",
  "foodMenuHint": "Liste hayvana göre değişir çünkü risk türe özgüdür.",
  "resultEyebrow": "Gıda atlası gösteriyor",
  "resultEmpty": "Güvenlik kartını açmak için bir gıda seçin.",
  "sceneLabel": "Maruz kalma haritası",
  "sceneReady": "Bir gıda seçin",
  "sceneSelected": "Türe özgü kart açık",
  "riskCritical": "Acil durum",
  "riskHigh": "Yüksek risk",
  "riskCaution": "Dikkat",
  "riskUnknown": "Yetersiz veri",
  "riskLabel": "Risk seviyesi",
  "whyLabel": "Neden önemli",
  "signsLabel": "İzlenecek belirtiler",
  "actionLabel": "Yapılması gerekenler",
  "callVetLabel": "En güvenli adım profesyonel tavsiyedir.",
  "callVetText": "Hesaplayıcı toksik dozu tahmin edemez veya muayene yerine geçemez.",
  "sourceLabel": "Kullanılan kanıtlar",
  "sourceText": "Profiller ASPCA, FDA ve MSD Veteriner Kılavuzunun veteriner toksikolojisi kılavuzlarına dayanmaktadır.",
  "emergencyTitle": "Evcil hayvanınız tehlikeli bir şey yediyse",
  "emergencyText": "Hemen veteriner hekiminizi veya acil kliniği arayın. Ambalajı, içerik listesini ve tahmini miktarı saklayın.",
};

const faq: PetToxicityLocaleContent['faq'] = [
  {
    "question": "Bu araç evcil hayvanımın güvende olduğunu garanti eder mi?",
    "answer": "Hayır. Bu eğitici bir rehberdir, teşhis değildir. Tehlikeli bir gıda tüketiminde mutlaka veteriner hekime başvurun."
  },
  {
    "question": "Köpekler için hangi gıdalar özellikle tehlikelidir?",
    "answer": "Ksilitol, çikolata, kafein, üzüm, kuru üzüm, soğan, sarımsak, alkol ve çiğ maya hamuru en büyük tehlikelerdendir."
  },
  {
    "question": "Soğan ve sarımsak kediler için tehlikeli midir?",
    "answer": "Evet. Kediler Allium bitkilerinin (soğan, sarımsak) alyuvarlara verdiği hasara karşı çok hassastır."
  },
  {
    "question": "Ksilitol neden kedi ve köpeklerde farklı uyarılar gösterir?",
    "answer": "Ksilitol köpeklerde kan şekerinin hızla düşmesine neden olur. Kedilerde bu risk FDA tarafından daha az belgelenmiştir."
  },
  {
    "question": "Tüketilen gıda listede yoksa ne yapılmalıdır?",
    "answer": "Listede olmaması güvenli olduğu anlamına gelmez. Ambalajı saklayın ve veteriner hekiminize danışın."
  },
];


const howTo: PetToxicityLocaleContent['howTo'] = [
  {
    "name": "Türü seçin",
    "text": "İlgili bilgileri yüklemek için Köpek veya Kedi seçeneğini belirleyin."
  },
  {
    "name": "Gıdayı seçin",
    "text": "Menüyü açın ve en uygun içeriği seçin."
  },
  {
    "name": "Güvenlik kartını okuyun",
    "text": "Risk seviyesini, olası belirtileri ve önerilen adımı inceleyin."
  },
  {
    "name": "Gerektiğinde uzmana başvurun",
    "text": "Gerçek bir maruz kalma durumunda hemen veteriner hekiminizi arayın."
  }
];

const seo: PetToxicityLocaleContent['seo'] = [
  {
    type: 'summary',
    title: "Kedi ve köpeklerde hızlı gıda güvenliği kontrolü",
    items: [
      "Aynı içeriğin farklı etkileri olabileceği için önce türü seçin.",
      "Tehlikeyi ve aciliyet seviyesini anlamak için kartları kullanın.",
      "Köpeklerde ksilitol tüketimini acil tıbbi durum olarak değerlendirin.",
      "Gerçek bir tüketim durumunda mutlaka veteriner hekime danışın."
],
  },
  {
    type: 'title',
    text: "Zehirli gıda kontrol aracını sorumlu şekilde kullanma",
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Bu zehirli gıda kontrol aracı, bir kedi veya köpeğin yememesi gereken bir şeyi yediği ilk anlarda rehberlik etmek için tasarlanmıştır. Türü seçin ve veteriner aramasına hazırlanmak için kartı kullanın. Bu sayede panik anında gereken bilgileri toplayabilir ve doğru karar verebilirsiniz. Bilgiler risk seviyelerini, izlenecek belirtileri ve acil adımları kapsar. Herhangi bir şüphe durumunda evcil hayvanınızın sağlığını korumak için mutlaka uzman bir veteriner hekime danışın.",
  },
  {
    type: 'paragraph',
    html: "Tür ayrımı hayati önem taşır. Köpekler ve kediler maddeleri farklı şekilde metabolize eder. Ksilitol köpeklerde hızlı insülin salgılanmasına ve şiddetli hipoglisemiye yol açarken, soğan ve sarımsak kedilerin alyuvarlarını tahrip ederek anemiye neden olur. Bilinçsizce müdahale etmek yerine kliniğe ulaşılmalıdır. Herhangi bir şüphe durumunda evcil hayvanınızın sağlığını korumak için mutlaka uzman bir veteriner hekime danışın.",
  },
  {
    type: 'title',
    text: "Yaygın gıda tehlikeleri ve önemli ayrıntılar",
    level: 2,
  },
  {
    type: 'table',
    headers: ["Gıda veya içerik","Ana tehlike","Önemli bağlam"],
    rows: [["Çikolata ve kafein","Kalp ve sinir sistemi etkileri","Kakaonun yoğunluğu ve ağırlık önemlidir."],["Ksilitol","Köpeklerde hızlı kan şekeri düşüşü","Şekersiz sakızları ve tatlıları kontrol edin."],["Üzüm ve kuru üzüm","Köpeklerde böbrek hasarı riski","Küçük miktarları güvenli saymayın."],["Soğan ve sarımsak","Alyuvar hasarı ve anemi","Kurutulmuş ve toz formlar riski artırır."],["Çiğ maya hamuru","Mide genişlemesi ve alkol","Mayalanan hamur basınç ve alkol üretir."]],
  },
  {
    type: 'paragraph',
    html: "Kimyasal toksisitenin yanı sıra kemiklerin yol açtığı tıkanmalar ve yağlı gıdaların neden olduğu pankreatit riski gibi fiziksel tehlikeler de mevcuttur. Pişmiş kemikler sindirim sistemini delebilir, yağlı gıdalar ise şiddetli pankreas iltihabına yol açar. Acil adımların doğru sırayla atılması şarttır. Herhangi bir şüphe durumunda evcil hayvanınızın sağlığını korumak için mutlaka uzman bir veteriner hekime danışın.",
  },
  {
    type: 'title',
    text: "Olası bir maruz kalma durumunda yapılacaklar",
    level: 2,
  },
  {
    type: 'list',
    items: [
      "Kalan gıdayı uzaklaştırın ve ambalajı saklayın.",
      "Hayvanın kilosunu, gıdayı, miktarı ve zamanı not edin.",
      "Veteriner hekiminizi arayın.",
      "Tıbbi yönlendirme olmadan kusturmaya çalışmayın.",
      "Nöbet veya bayılma durumunda acilen kliniğe gidin."
],
  },
  {
    type: 'tip',
    title: "Hayvanın sağlığı her şeyden önce gelir",
    html: "Belirtiler saatler sonra ortaya çıkabilir. Yardım almak için beklemeyin. Herhangi bir şüphe durumunda evcil hayvanınızın sağlığını korumak için mutlaka uzman bir veteriner hekime danışın.",
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
