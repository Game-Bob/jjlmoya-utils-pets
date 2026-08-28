import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'storleksplanerare-transportbur-husdjur';
const title = 'Storleksplanerare för Transportbur till Husdjur';
const description = 'Beräkna lämpliga innermått för transportbur till hund eller katt baserat på sex kroppsmått, med kontroll för flygresor.';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: 'Mät först. Köp med trygghet.',
  journeyHint: 'Välj djur och resemetod, ange måtten och använd skissen som utgångspunkt för transportburens insida.',
  unitLegend: 'Visningsenheter',
  speciesStep: 'Börja med djuret',
  metricUnit: 'Metrisk',
  imperialUnit: 'Imperial',
  speciesLegend: 'Vem reser?',
  speciesDog: 'Hund',
  speciesCat: 'Katt',
  modeLegend: 'Hur genomförs resan?',
  modeCar: 'Bil',
  modeAir: 'Flyg',
  measurementsLegend: 'Mät ditt husdjur',
  noseTailLabel: 'Nosskugg till svansrot',
  noseTailHint: 'Mät utan svansens böjning',
  elbowHeightLabel: 'Mark till armbåge',
  shoulderWidthLabel: 'Bredd över bogarna',
  standingHeightLabel: 'Höjd i stående ställning',
  beddingLabel: 'Tjocklek på bädd eller dyna',
  weightLabel: 'Dets vikt',
  cmUnit: 'cm',
  inchUnit: 'tum',
  kgUnit: 'kg',
  lbUnit: 'lb',
  snubNosedLabel: 'Kortnosad ras',
  snubNosedHint: 'Flygresor kräver IATA-justeringar. Rådgör med din veterinär och flygbolaget.',
  presetLegend: 'Starta med en profil',
  presetCat: 'Katt',
  presetSmallDog: 'Liten hund',
  presetMediumDog: 'Mellanhet hund',
  presetLargeDog: 'Stor hund',
  resultEyebrow: 'Rekommenderad mätsmall',
  resultTitle: 'Tillräckligt med utrymme att vända sig',
  resultDimensionLabel: 'Minsta inre startmått',
  lengthLabel: 'Längd',
  widthLabel: 'Bredd',
  heightLabel: 'Höjd',
  petWeightLabel: 'Dets vikt',
  journeyLabel: 'Resesätt',
  statusComfort: 'Komfort grundnivå',
  statusAirReview: 'Granskning flygtransport',
  statusSnub: 'Justering för kort nos',
  resultDetail: 'Kontrollera den faktiska insidan, dörröppningen, ventilationen och bolagets regler före köp.',
  checklistTitle: 'De fyra kroppskontrollerna',
  checklistStand: 'Djuret kan stå och sitta rakt utan att taket rör vid huvudet eller öronen.',
  checklistTurn: 'Djuret kan vända sig om naturally i stående ställning.',
  checklistLie: 'Djuret kan ligga i en naturlig ställning på sin bädd.',
  checklistAirline: 'För flyg, kontrollera bolagets gränser, ventilation, låsning och täthet.',
  invalidInput: 'Ange positiva värden för varje kroppsmått och vikt.',
  noteTitle: 'Använd detta som utrymmesberäkning, inte som flyggodkännande',
  noteText: 'Regler varierar beroende på flygbolag, fordon och djur. En veterinär bør bedöma djurets hälsa och lämplighet.',
  methodTitle: 'Beräkningsmetod',
  methodText: 'Formeln följer IATA-riktlinjer: längd är nos till svansrot plus halva armbågshöjden, bredd är dubbla bogbredden och höjd är stående höjd plus bäddens tjocklek.',
  blueprintLabel: 'Måttsatt skiss av transportburen med djuret inuti samt längd- och höjdlinjer',
  dimensionInside: 'Inre mått',
  checkMark: 'OK',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: 'Hur mäter jag min hund eller katt för en transportbur?',
    answer: 'Mät från nosskuggan till svansroten, från marken till armbågsleden, bredden över bogarna och höjden från marken till högsta punkten på huvudet eller öronen. Lägg till bäddens tjocklek separat.',
  },
  {
    question: 'Vilka innermått beräknar denna planerare?',
    answer: 'Den uppskattar minsta inre längd utifrån kroppslängd och armbåge, bredd utifrån bogar och total höjd inklusive bädden.',
  },
  {
    question: 'Garanterar resultaten godkännande hos ett flygbolag?',
    answer: 'Nej. Flygläget tillämpar IATA-referensformler, men varje flygbolag kan ha egna specifikationskrav. Kontrollera alltid bolagets officiella regler.',
  },
  {
    question: 'Varför behöver kortnosade raser större bur vid flygresor?',
    answer: 'IATA-riktlinjer rekommenderar större utrymme för brachycefala raser för att förhindra överhettning och andningsbesvär under flygningen.',
  },
  {
    question: 'Bör en transportbur för bil vara så stor som möjligt?',
    answer: 'Nej. Buren måste ge tillräckligt utrymme för att stå, vända sig och ligga, men ska kunna förankras stadigt i fordonet.',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: 'Välj resemetod', text: 'Välj bil eller flyg för att anpassa kontrollkriterierna.' },
  { name: 'Ange de sex måtten', text: 'Mät kroppsmått och vikt när djuret är lugnt.' },
  { name: 'Läs av innermåtten', text: 'Använd längd, bredd och höjd som utgångspunkt vid jämförelse av burar.' },
  { name: 'Kontrollera regelverket', text: 'Före köp, kontrollera låsning, ventilation och flygbolagets krav.' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Vägledning för att välja rätt transportbur till ditt husdjur',
    items: [
      'Mät djurets kropp noggrant och precist istället för att enbart gå på total kroppsvikt för hunden eller katten.',
      'Använd de nyttiga innermåtten för att jämföra verkliga burar i butik eller online på ett tillförlitligt sätt.',
      'Kontrollera alltid låsmekanism, dörr och ventilation på alla sidor i transportburen före varje resa.',
      'Flygtransport kräver särskild förberedelse, noggrann kontroll av regelverk och veterinärråd.',
    ],
  },
  { type: 'title', text: 'Hur du planerar transportburens mått och storlek', level: 2 },
  {
    type: 'paragraph',
    html: 'En lämplig transportbur ska medge fyra naturliga rörelser för din hund eller katt: stå rakt utan att böja huvudet eller öronen, sitta upprätt i naturlig ställning, vända sig om utan hinder runt sin egen axel och ligga bekvämt i avslappnad position. Denna planerare beräknar nödvändig inre längd, bredd och höjd på ett anpassat och noggrant sätt för djurets välmående under hela resan och säkerställer god komfort.',
  },
  {
    type: 'paragraph',
    html: 'De beräknade värdena representerar den faktiska inre nyttjandeytan i buren. Tänk på att tjocka dynor, matskålar eller lutande väggar minskar det tillgängliga utrymmet vid köpet. Välj alltid en större storlek vid minsta tveksamhet för att garantera komforten, säkerheten och hälsan för ditt husdjur.',
  },
  { type: 'title', text: 'Betydelsen av varje kroppsmått för djurets säkerhet och hälsa', level: 2 },
  {
    type: 'table',
    headers: ['Kroppsmått', 'Betydelse för djuret', 'Användning i beräkningen'],
    rows: [
      ['Nos till svansrot', 'Sätter grundlängden utan svansen.', 'Inre längd'],
      ['Mark till armbåge', 'Ger rörlighetsutrymme när djuret vänder sig och rör benen.', 'Inre längd'],
      ['Bredd över bogarna', 'Garanterar tillräcklig bredd i bredaste avsnittet på kroppen.', 'Inre bredd'],
      ['Höjd i stående ställning', 'Skyddar huvud och öron från taket på buren.', 'Inre höjd'],
      ['Bäddens tjocklek', 'Behåller effektiv höjd efter att dyna lagts i.', 'Inre höjd'],
      ['Kroppsvikt', 'Används för att kontrollera maxbelastning och hållfasthet.', 'Viktkontroll'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Formlerna bygger på officiella IATA-regler för levande djur: inre längd kombinerar kroppslängd och halva armbågshöjden, bredd är dubbla bogbredden och höjd inkluderar stående höjd plus bäddens tjocklek. Genom att använda dessa standardiserade mått minskas risken för obehag och stress under längre transporter avsevärt för både hund och katt.',
  },
  { type: 'title', text: 'Att tänka på vid flygresor och transport i fordon och bil', level: 2 },
  {
    type: 'paragraph',
    html: 'En måttberäkning ersätter inte ett formellt godkännande från flygbolaget. Faktorer som flygplanstyp, ventilation från alla fyra sidor och säsong är avgörande för säkerheten och hälsan under resan och bör alltid verifieras i förväg. Kontakta alltid flygbolaget god tid innan avresa för att få bekräftat vilka krav som gäller för just din transportbur.',
  },
  {
    type: 'tip',
    title: 'Praktiskt utrymtestest i hemmet före resan och avfärd',
    html: 'Placera djuret i buren i en lugn miljö och observera rörelsefriheten under några minuter. Välj en större storlek om djuret verkar trängt eller har svårt att vända sig bekvämt och tryggt.',
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
