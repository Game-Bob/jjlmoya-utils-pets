import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'reismand-transportbox-afmetingen-planner';
const title = 'Reismand Transportbox Afmetingen Planner';
const description = 'Bereken de ideale binnenafmetingen van een reismand of transportbox voor uw hond of kat op basis van zes lichaamsmaten.';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: 'Meet eerst. Koop met vertrouwen.',
  journeyHint: 'Kies het dier en het type reis, voer de maten in en gebruik de schets als leidraad voor de binnenruimte van de transportbox.',
  unitLegend: 'Weergave-eenheden',
  speciesStep: 'Begin bij het dier',
  metricUnit: 'Metrisch',
  imperialUnit: 'Imperiaal',
  speciesLegend: 'Wie reist er mee?',
  speciesDog: 'Hond',
  speciesCat: 'Kat',
  modeLegend: 'Hoe wordt er gereisd?',
  modeCar: 'Auto',
  modeAir: 'Vliegtuig',
  measurementsLegend: 'Meet uw huisdier',
  noseTailLabel: 'Neuspunt tot staartbasis',
  noseTailHint: 'Meet zonder de kromming van de staart',
  elbowHeightLabel: 'Grond tot elleboog',
  shoulderWidthLabel: 'Schouderbreedte',
  standingHeightLabel: 'Hoogte in staande houding',
  beddingLabel: 'Dikte van het kussen of kleed',
  weightLabel: 'Gewicht van het dier',
  cmUnit: 'cm',
  inchUnit: 'in',
  kgUnit: 'kg',
  lbUnit: 'lb',
  snubNosedLabel: 'Kortsnuitig ras',
  snubNosedHint: 'Voor vliegreizen gelden IATA aanpassingen. Raadpleeg uw dierenarts en de luchtvaartmaatschappij.',
  presetLegend: 'Start met een profiel',
  presetCat: 'Kat',
  presetSmallDog: 'Kleine hond',
  presetMediumDog: 'Middelgrote hond',
  presetLargeDog: 'Grote hond',
  resultEyebrow: 'Aanbevolen meetkader',
  resultTitle: 'Voldoende ruimte om te draaien',
  resultDimensionLabel: 'Minimale binnenafmetingen voor de start',
  lengthLabel: 'Lengte',
  widthLabel: 'Breedte',
  heightLabel: 'Hoogte',
  petWeightLabel: 'Gewicht van het dier',
  journeyLabel: 'Type reis',
  statusComfort: 'Basis comfortniveau',
  statusAirReview: 'Controle vliegreis',
  statusSnub: 'Aanpassing kortsnuit',
  resultDetail: 'Controleer de daadwerkelijke binnenruimte, de deuropening, ventilatie en de regels van de maatschappij voor aankoop.',
  checklistTitle: 'De vier lichaamscontroles',
  checklistStand: 'Het dier kan rechtop staan en zitten zonder dat het dak het hoofd raakt.',
  checklistTurn: 'Het dier kan normaal omdraaien terwijl het staat.',
  checklistLie: 'Het dier kan in een natuurlijke houding op het kussen liggen.',
  checklistAirline: 'Controleer bij vliegreizen de regels van de maatschappij, ventilatie, sluiting en vloeistofdichtheid.',
  invalidInput: 'Voer positieve waarden in voor elke afmeting en het gewicht.',
  noteTitle: 'Gebruik dit als richtlijn, niet als vlieggoedkeuring',
  noteText: 'Regels variëren per maatschappij, voertuig en dier. Een dierenarts dient de gezondheid en geschiktheid te beoordelen.',
  methodTitle: 'Berekeningsmethode',
  methodText: 'De berekening volgt de IATA richtlijnen: lengte is neus tot staartbasis plus de helft van de ellebooghoogte, breedte is dubbele schouderbreedte en hoogte is staande hoogte plus kussendikte.',
  blueprintLabel: 'Maatschets van de reismand met het dier erin en richtlijnen voor lengte en hoogte',
  dimensionInside: 'Binnenafmetingen',
  checkMark: 'OK',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: 'Hoe meet ik mijn hond of kat voor een reismand?',
    answer: 'Meet van de neuspunt tot de staartbasis, van de grond tot het ellebooggewricht, de breedte van de schouders en de hoogte van de grond tot de kop of oren. Voeg de kussendikte apart toe.',
  },
  {
    question: 'Welke binnenafmetingen berekent deze planner?',
    answer: 'De planner schat de minimale binnenlengte op basis van lichaam en elleboog, de binnenbreedte op schouderbreedte en de totale hoogte inclusief het kussen.',
  },
  {
    question: 'Garanties bieden de resultaten voor acceptatie door een luchtvaartmaatschappij?',
    answer: 'Nee. De vliegmodus past IATA referentiewaarden toe, maar elke maatschappij heeft eigen regels. Controleer altijd de officiële voorschriften van de maatschappij.',
  },
  {
    question: 'Waarom hebben kortsnuitige rassen een grotere box nodig tijdens het vliegen?',
    answer: 'IATA richtlijnen adviseren extra ruimte voor brachycefale rassen om oververhitting en ademhalingsproblemen tijdens de vlucht te voorkomen.',
  },
  {
    question: 'Moet een reismand voor in de auto zo groot mogelijk zijn?',
    answer: 'Nee. De mand moet voldoende ruimte bieden om te staan, draaien en liggen, maar moet wel stevig in het voertuig vastgezet kunnen worden.',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: 'Kies het type reis', text: 'Selecteer auto of vliegtuig om de juiste controlecriteria toe te passen.' },
  { name: 'Voer de zes maten in', text: 'Meet de afmetingen van het lichaam en het gewicht van het dier in rustige toestand.' },
  { name: 'Lees de binnenafmetingen af', text: 'Gebruik lengte, breedte en hoogte als uitgangspunt om commerciële reismanden te vergelijken.' },
  { name: 'Controleer voorschriften', text: 'Controleer voor aankoop de sluiting, ventilatie en eisen van de maatschappij.' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Handleiding voor het kiezen van de juiste reismand voor uw huisdier',
    items: [
      'Meet het lichaam van het dier nauwkeurig in plaats van alleen af te gaan op het totale lichaamsgewicht van de hond of kat.',
      'Gebruik de nuttige binnenafmetingen om echte modellen in de winkel of online op een betrouwbare manier te vergelijken.',
      'Controleer altijd de sluiting, vergrendeling en ventilatie aan alle zijden van de reismand of transportbox.',
      'Vliegreizen vereisen specifieke voorbereiding, grondige controle van regelgeving en deskundig advies van de dierenarts.',
    ],
  },
  { type: 'title', text: 'Hoe berekent u de afmetingen van een reismand', level: 2 },
  {
    type: 'paragraph',
    html: 'Een geschikte reismand moet vier natuurlijke bewegingen voor uw hond of kat mogelijk maken: rechtop staan zonder de kop te buigen of oren te drukken, rechtop zitten op een natuurlijke wijze, moeiteloos omdraaien om de eigen as en comfortabel liggen in een ontspannen houding. Deze planner berekent de vereiste binnenmaten op maat en zorgt voor een veilige en comfortabele reis van uw huisdier.',
  },
  {
    type: 'paragraph',
    html: 'De berekende waarden vertegenwoordigen de daadwerkelijke nuttige binnenruimte van de transportbox. Houd er bij uw aankoop rekening mee dat dikke kussens, drinkbakjes of schuine wanden de beschikbare ruimte verkleinen. Kies bij twijfel altijd de grotere maat om het welzijn te garanderen.',
  },
  { type: 'title', text: 'Belang van de lichaamsmaten voor het dier', level: 2 },
  {
    type: 'table',
    headers: ['Lichaamsmaat', 'Functie voor het dier', 'Toepassing in berekening'],
    rows: [
      ['Neuspunt tot staartbasis', 'Bepaalt de basislengte van het lichaam zonder de staart.', 'Binnenlengte'],
      ['Grond tot elleboog', 'Biedt bewegingsruimte bij het omdraaien van de voorpoten.', 'Binnenlengte'],
      ['Schouderbreedte', 'Garandeert voldoende breedte op het breedste lichaamsdeel.', 'Binnenbreedte'],
      ['Hoogte in staande houding', 'Beschermt kop en oren tegen het dak van de reismand.', 'Binnenhoogte'],
      ['Dikte van het kussen', 'Behoudt de effectieve hoogte na het plaatsen van het bed.', 'Binnenhoogte'],
      ['Lichaamsgewicht', 'Dient om de maximale draagkracht en stevigheid te controleren.', 'Gewichtscontrole'],
    ],
  },
  {
    type: 'paragraph',
    html: 'De formules zijn gebaseerd op de officiële IATA normen voor het vervoer van levende dieren per vliegtuig en voertuig: de binnenlengte combineert de lichaamslengte en de helft van de ellebooghoogte, de breedte is het dubbele van de schouderbreedte en de hoogte omvat de staande hoogte plus de dikte van het kussen.',
  },
  { type: 'title', text: 'Aandachtspunten bij vliegreizen en transport', level: 2 },
  {
    type: 'paragraph',
    html: 'Een maatberekening is geen officiële goedkeuring van een luchtvaartmaatschappij. Factoren zoals het type vliegtuig, temperatuur, ventilatie op vier zijden en deurvergrendeling zijn doorslaggevend voor de veiligheid en gezondheid van het huisdier tijdens de vlucht.',
  },
  {
    type: 'tip',
    title: 'Praktische pasvormtest in de praktijk vóór vertrek',
    html: 'Plaats het dier in een rustige omgeving in de reismand en observeer de bewegingsvrijheid gedurende enkele minuten. Kies zonder twijfel een grotere maat als het dier krap zit of moeite heeft met omdraaien om stress te voorkomen.',
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
