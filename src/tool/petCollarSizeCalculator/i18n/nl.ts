import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'halsbandmaat-huisdier-berekenen';
const title = 'Halsbandmaat voor huisdieren berekenen';
const description = 'Meet de hals, voeg bewegingsruimte toe en vind een verstelbaar bereik om met de hand te controleren.';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: 'Halsomtrek', unitLabel: 'Weergave', centimetres: 'Centimeter', inches: 'Inches', allowanceLabel: 'Bewegingsruimte', collarTypeLabel: 'Type halsband', flatCollar: 'Plat', breakawayCollar: 'Veiligheidssluiting', martingaleCollar: 'Martingale', statusTight: 'Voeg ruimte toe', statusBalanced: 'Klaar om te controleren', statusLoose: 'Controleer de veiligheid', statusTightDetail: 'Voeg ruimte toe.', statusBalancedDetail: 'Controleer dit bereik met de hand.', statusLooseDetail: 'Controleer of hij niet kan afglijden.', fitStudyLabel: 'Pasvormstudie van de halsband', fitWindowLabel: 'Zoek dit bereik', measuredLabel: 'Gemeten hals', roomLabel: 'Bewegingsruimte', checkLabel: 'Handmatige controle', sceneAria: 'Pasvormstudie met halscirkel en verstelbaar halsbandbereik', neckMarker: 'hals', easeMarker: 'ruimte', rangeMarker: 'halsbandbereik', minimumMarker: 'begin', maximumMarker: 'einde', checkFlat: 'Comfortabel, veilig en zonder schuren.', checkBreakaway: 'Controleer de pasvorm en het ontgrendelingsmechanisme.', checkMartingale: 'De aantreklus mag de hals niet afknellen.', invalidInput: 'Voer een geldige halsomtrek en bewegingsruimte in.',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: 'Hoe meet ik de hals van mijn huisdier?', answer: 'Leg een flexibel meetlint rond de plek waar de halsband komt. Houd het recht en dicht bij de vacht zonder huid of vacht samen te drukken. Meet opnieuw als de positie van de halsband, de vacht of de houding verandert.' },
  { question: 'Waarom geeft de berekening een bereik?', answer: 'Verstelbare halsbanden hebben verschillende lengtes en maten zijn niet gelijk bij alle fabrikanten. De berekening telt de gekozen ruimte op en maakt een klein vergelijkingsbereik. Daarna moet je de echte halsband bij het dier controleren.' },
  { question: 'Hoeveel bewegingsruimte moet ik kiezen?', answer: 'Er is geen universele waarde. Vacht, breedte, materiaal en activiteit veranderen de pasvorm. Gebruik het getal als zichtbare aanname en bevestig comfort en veiligheid daarna met een rustige handcontrole.' },
  { question: 'Werkt dit ook voor een martingale halsband?', answer: 'De eerste schatting gebruikt dezelfde halsomtrek. De eindcontrole is anders: de aantreklus moet begrensd zijn en mag nooit knellen. Volg de instructies van de fabrikant als het mechanisme onbekend is.' },
  { question: 'Kan ik dit bereik gebruiken voor een jong dier?', answer: 'Ja, als momentopname van de huidige pasvorm. Jonge dieren groeien en hun vacht verandert, dus meet regelmatig opnieuw en controleer de halsband zorgvuldig.' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: 'Meet de hals', text: 'Meet een rustig dier dat natuurlijk staat, op de plek waar de halsband komt. Het lint moet plat liggen en niet trekken.' },
  { name: 'Kies de ruimte', text: 'Stel de ruimte tussen hals en halsband in met de zichtbare regelaar. De eerste 2 cm zijn alleen een voorbeeld.' },
  { name: 'Kies het type', text: 'Selecteer plat, veiligheidssluiting of martingale zodat de herinnering bij het mechanisme past.' },
  { name: 'Vergelijk de instelling', text: 'Zoek een verstelbare halsband die het hele bereik bedekt en doe daarna een fysieke controle.' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Van halsmeting naar een aankoopbereik', items: ['Meet waar de halsband echt komt te liggen.', 'Maak bewegingsruimte zichtbaar in plaats van op ras te gokken.', 'Vergelijk het resultaat met de echte verstelruimte van het product.', 'Sluit af met een rustige controle bij het dier.'] },
  { type: 'title', text: 'Welke keuze helpt deze berekening maken', level: 2 },
  { type: 'paragraph', html: 'Maattabellen zijn lastig als een dier tussen twee maten valt, een dikke vacht heeft of nog groeit. Deze tool begint met een meetwaarde die je zelf kunt controleren: de omtrek op de plek waar de halsband rust. Daarna voeg je de gekozen bewegingsruimte toe. Het resultaat kiest geen commercieel label zoals klein, middel of groot, maar maakt een concreet bereik om met productmaten te vergelijken.' },
  { type: 'paragraph', html: 'Het bereik is bewust klein en bedoeld als startpunt voor het zoeken. Verstelbare halsbanden hebben geen wereldwijde standaard en de bruikbare lengte kan afwijken van de maatnaam in een winkel. Een product past in de selectie wanneer de verstelruimte het hele bereik afdekt. Het getal bevestigt echter niet vanzelf dat rand, gesp, vacht of mechanisme geschikt zijn.' },
  { type: 'title', text: 'Meten voordat je koopt', level: 2 },
  { type: 'list', items: ['Meet als het dier rustig en natuurlijk staat.', 'Houd het lint recht zonder vacht of huid samen te drukken.', 'Meet opnieuw als de halsband hoger of lager moet komen.', 'Noteer bij een jong dier de datum en controleer de pasvorm tijdens de groei.'] },
  { type: 'paragraph', html: 'De bewegingsruimte is een expliciete aanname, geen veiligheidsgarantie. De juiste waarde hangt af van dier, vacht, breedte, materiaal en gebruik. Een vingercontrole kan richting geven, maar maakt van een getal geen regel voor elk dier. Bij schuren, hoesten, pijn, ademproblemen, stress of beperkte beweging neem je de halsband af en vraag je deskundig advies.' },
  { type: 'title', text: 'Lees de pasvormcirkel', level: 2 },
  { type: 'table', headers: ['Signaal', 'Betekenis', 'Volgende stap'], rows: [['Gemeten hals', 'Omtrek vóór de ruimte.', 'Meet opnieuw als het lint schuin of strak zat.'], ['Begin', 'Hals plus gekozen ruimte.', 'Gebruik als ondergrens van de verstelruimte.'], ['Einde', 'Kleine vergelijkingswindow.', 'Zoek een verstelruimte die alles bedekt.'], ['Controle', 'Herinnering bij de gekozen ruimte.', 'Bevestig dit bij het dier.']] },
  { type: 'title', text: 'Het type halsband verandert de eindcontrole', level: 2 },
  { type: 'paragraph', html: 'Een platte halsband vraagt om een controle van comfort en veiligheid, terwijl een veiligheidssluiting of martingale extra aandacht voor het mechanisme nodig heeft. Controleer rand, gesp, vacht en aantreklus. Het getal helpt bij het filteren van producten, maar de rustige controle bij het dier en de fabrikant bepalen de uiteindelijke keuze.' },
  { type: 'tip', title: 'Rustig met de hand controleren', html: 'Doe de halsband om terwijl het dier ontspannen is. Het moet kunnen bewegen, ademen, eten, drinken en de kop draaien zonder schuren. Controleer ook of de halsband niet over de kop kan glijden wanneer hij moet blijven zitten. Controleer opnieuw na trimmen, groei, gewichtsverandering of een andere positie.' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
