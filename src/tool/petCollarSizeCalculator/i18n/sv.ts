import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'berakna-halsbandsstorlek-husdjur';
const title = 'Beräkna halsbandsstorlek för husdjur';
const description = 'Mät halsen, lägg till rörelseutrymme och hitta ett justerbart intervall att kontrollera för hand.';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: 'Halsomkrets', unitLabel: 'Visa', centimetres: 'Centimeter', inches: 'Tum', allowanceLabel: 'Rörelseutrymme', collarTypeLabel: 'Halsbandstyp', flatCollar: 'Vanligt', breakawayCollar: 'Säkerhetsöppning', martingaleCollar: 'Martingale', statusTight: 'Lägg till mer utrymme', statusBalanced: 'Redo att kontrollera', statusLoose: 'Kontrollera säkerheten', statusTightDetail: 'Lägg till mer utrymme.', statusBalancedDetail: 'Kontrollera intervallet för hand.', statusLooseDetail: 'Kontrollera att det inte kan glida av.', fitStudyLabel: 'Passformsstudie för halsband', fitWindowLabel: 'Hitta detta intervall', measuredLabel: 'Mätt hals', roomLabel: 'Rörelseutrymme', checkLabel: 'Manuell kontroll', sceneAria: 'Passformsstudie med halsring och justerbart halsbandsintervall', neckMarker: 'hals', easeMarker: 'utrymme', rangeMarker: 'halsbandsintervall', minimumMarker: 'start', maximumMarker: 'slut', checkFlat: 'Bekvämt, säkert och utan skav.', checkBreakaway: 'Kontrollera passform och öppningsmekanism.', checkMartingale: 'Åtdragningsöglan får inte trycka mot halsen.', invalidInput: 'Ange en giltig halsomkrets och ett giltigt utrymme.',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: 'Hur mäter jag halsen på mitt djur?', answer: 'Lägg ett mjukt måttband runt den plats där halsbandet ska sitta. Håll bandet rakt och nära pälsen utan att trycka ihop hud eller päls. Mät igen om halsbandets placering, pälsen eller djurets hållning ändras.' },
  { question: 'Varför blir resultatet ett intervall?', answer: 'Justerbara halsband har olika långa justeringsvägar och storlekarna är inte enhetliga mellan tillverkare. Verktyget lägger till det utrymme du väljer och skapar ett litet jämförelseintervall. Det riktiga halsbandet måste sedan kontrolleras på djuret.' },
  { question: 'Hur mycket rörelseutrymme ska jag välja?', answer: 'Det finns inget värde som passar alla. Päls, bredd, material och aktivitet påverkar passformen. Använd talet som ett synligt antagande och bekräfta sedan komfort och säkerhet med en lugn handkontroll.' },
  { question: 'Fungerar beräkningen för martingalehalsband?', answer: 'Den första uppskattningen utgår från samma halsomkrets. Slutkontrollen är annorlunda: åtdragningsöglan måste begränsas och får aldrig strypa. Följ alltid tillverkarens instruktioner om konstruktionen är obekant.' },
  { question: 'Kan jag använda resultatet för en valp eller kattunge?', answer: 'Ja, som en bild av den aktuella passformen. Unga djur växer och pälsen förändras, så måttet bör upprepas regelbundet och kontrolleras noggrant.' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: 'Mät halsen', text: 'Mät ett lugnt djur som står naturligt, på platsen där halsbandet ska ligga. Bandet ska vara plant och inte spänt.' },
  { name: 'Välj utrymmet', text: 'Ställ in utrymmet mellan hals och halsband med det synliga reglaget. De första 2 cm är bara ett exempel.' },
  { name: 'Välj typ', text: 'Välj vanligt, säkerhetsöppning eller martingale så att påminnelsen passar mekanismen.' },
  { name: 'Jämför justeringen', text: 'Leta efter ett halsband vars intervall täcker hela resultatet och gör sedan en fysisk kontroll.' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Från mätning till ett köpintervall', items: ['Mät där halsbandet verkligen ska sitta.', 'Gör rörelseutrymmet synligt i stället för att gissa efter ras.', 'Jämför resultatet med produktens faktiska justeringsintervall.', 'Avsluta med en lugn kontroll på djuret.'] },
  { type: 'title', text: 'Vilket beslut beräkningen hjälper dig med', level: 2 },
  { type: 'paragraph', html: 'Storlekstabeller blir svåra när ett djur ligger mellan två mått, har tjock päls eller fortfarande växer. Det här verktyget börjar med ett mått du kan kontrollera: omkretsen på platsen där halsbandet ska vila. Sedan lägger du till det rörelseutrymme du själv väljer. Resultatet försöker inte gissa en kommersiell etikett som liten, medium eller stor, utan skapar ett konkret intervall att jämföra med produkter.' },
  { type: 'paragraph', html: 'Intervallet är medvetet kort och fungerar som en startpunkt för sökningen. Justerbara halsband följer ingen global standard och den användbara längden kan skilja sig från storleksnamnet i en butik. En produkt passar in i urvalet när justeringen täcker hela intervallet. Talet bekräftar ändå inte automatiskt att kant, spänne, päls eller mekanism passar.' },
  { type: 'title', text: 'Mät före köpet', level: 2 },
  { type: 'list', items: ['Mät när djuret är lugnt och står naturligt.', 'Håll bandet vågrätt utan att trycka ihop päls eller hud.', 'Mät igen om halsbandet ska sitta högre eller lägre.', 'Skriv upp datumet för unga djur och kontrollera passformen under tillväxten.'] },
  { type: 'paragraph', html: 'Rörelseutrymmet är ett tydligt antagande, inte en säkerhetsgaranti. Rätt värde beror på djuret, pälsen, bredden, materialet och användningen. Ett fingerprov kan ge vägledning men gör inte ett tal till en regel för alla. Vid skav, hosta, smärta, andningssvårigheter, stress eller begränsad rörelse ska halsbandet tas av och kvalificerad hjälp sökas.' },
  { type: 'title', text: 'Läs passformsringen', level: 2 },
  { type: 'table', headers: ['Signal', 'Betyder', 'Nästa steg'], rows: [['Mätt hals', 'Omkrets före utrymmet.', 'Mät om bandet var snett eller spänt.'], ['Start', 'Hals plus valt utrymme.', 'Använd som nedre gräns för justeringen.'], ['Slut', 'Ett kort jämförelsefönster.', 'Sök en justering som täcker hela fönstret.'], ['Kontroll', 'Påminnelse om valt utrymme.', 'Bekräfta på djuret.']] },
  { type: 'title', text: 'Halsbandstypen ändrar den sista kontrollen', level: 2 },
  { type: 'paragraph', html: 'Ett vanligt halsband kräver en kontroll av komfort och säkerhet, medan säkerhetsöppning eller martingale också kräver uppmärksamhet på mekanismen. Kontrollera kant, spänne, päls och åtdragningsögla. Talet hjälper dig att filtrera produkter, men det lugna djuret och tillverkarens instruktioner avgör den slutliga användningen.' },
  { type: 'tip', title: 'Gör en lugn handkontroll', html: 'Sätt på halsbandet när djuret är avslappnat. Det ska kunna röra sig, andas, äta, dricka och vrida huvudet utan skav. Kontrollera också att det inte kan glida över huvudet när det ska sitta kvar. Kontrollera igen efter pälsvård, tillväxt, viktförändring eller ny placering.' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
