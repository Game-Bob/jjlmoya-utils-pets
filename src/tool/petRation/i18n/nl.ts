import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'dagelijkse-voedingshoeveelheid-berekenen-huisdier';
const title = 'Dagelijkse Voedingshoeveelheid Berekenen voor Huisdieren';
const description = 'Bereken de exacte hoeveelheid voer die uw hond of kat nodig heeft. Hulpmiddel gebaseerd op veterinaire RER- en DER-formules voor een gezond gewicht.';

const ui: PetRationUI = {
  toolTitle: 'Calculator Dagelijkse Hoeveelheid',
  sectionProfile: '1. Huisdierprofiel',
  labelAnimal: 'Dier',
  labelStage: 'Levensfase',
  labelWeight: 'Lichaamsgewicht',
  labelActivity: 'Fysieke Activiteit',
  sectionDiet: '2. Dieet en Voeding',
  labelDietType: 'Type Voeding',
  speciesDog: 'Hond',
  speciesCat: 'Kat',
  speciesRabbit: 'Konijn',
  stagePuppy: 'Pup of Kitten',
  stageAdult: 'Volwassen',
  stageSenior: 'Senior',
  activityLow: 'Laag',
  activityMod: 'Normaal',
  activityHigh: 'Hoog',
  dietDry: 'Alleen Droog',
  dietMixed25: 'Gemengd (25%)',
  dietHalf: 'Half-om-half (50%)',
  dietWet: 'Alleen Nat',
  manualAdjust: 'Handmatige aanpassing (1-99%)',
  wetPercentLabel: '% natvoer in het dieet',
  tagDry: 'Droog',
  tagWet: 'Nat',
  totalKcal: 'Totaal',
  kcalUnit: 'kcal/dag',
  statusPuppy: 'Snelle groeifase',
  statusSenior: 'Volwassen metabolisme',
  statusLargeDog: 'Groot ras: Gewrichtsverzorging',
  statusDefault: 'Gebalanceerd gewicht',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'Wat is de RER en waarom is het belangrijk?',
    answer: 'De RER (Resting Energy Requirement) is de minimumenergie die uw huisdier nodig heeft om zijn basisvitale functies in rust te onderhouden. Het is de wetenschappelijke basis voor het berekenen van de dagelijkse hoeveelheid, waardoor onder- of overvoeding wordt voorkomen. Het begrijpen van de RER stelt eigenaren in staat om de voedselinname af te stemmen op de specifieke biologische behoeften van hun huisdier, zodat ze niet meer consumeren dan hun organen efficiënt kunnen verwerken.',
  },
  {
    question: 'Hoe beïnvloedt sterilisatie de hoeveelheid voer voor mijn huisdier?',
    answer: 'Gesteriliseerde dieren hebben de neiging om een basismetabolisme te hebben dat ongeveer 15 tot 20 procent lager ligt. Ze kunnen een iets kleinere hoeveelheid nodig hebben of een activiteitsniveau dat op Laag is ingesteld in de calculator om gewichtstoename te voorkomen. De hormonale veranderingen na de procedure veranderen de manier waarop het lichaam vet opslaat and energie verbrandt, waardoor waakzaamheid over de voerbak nog belangrijker wordt voor de gezondheid op lange termijn.',
  },
  {
    question: 'Kan ik deze calculator gebruiken voor puppy\'s?',
    answer: 'Opgroeiende puppy\'s hebben veel hogere energiebehoeften (tot 3 keer de RER). Deze calculator is geoptimaliseerd voor volwassen honden en katten. Raadpleeg voor puppy\'s altijd uw dierenarts voor een specifiek groeiplan. Onjuiste voeding tijdens de vroege groeifase kan later in het leven leiden tot ernstige skeletproblemen, omdat een teveel aan calorieën de botontwikkeling te snel kan forceren.',
  },
  {
    question: 'Hoe vaak per dag moet ik de dagelijkse hoeveelheid verdelen?',
    answer: 'Het ideale is om de totale resulterende hoeveelheid te spreiden over 2 of 3 maaltijden per dag. Dit helpt bij het handhaven van stabiele glucosespiegels en verbetert de spijsvertering, vooral bij rassen die gevoelig zijn voor maagtorsie. Consistente maaltijden helpen ook om uw huisdier verzadigd te houden en maken de kans kleiner dat ze om restjes bedelen tussen de geplande voedingen.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Selecteer de diersoort zorgvuldig', text: 'Geef aan of de berekening voor een hond of kat is, aangezien hun metabolisme en gewichtslimieten aanzienlijk variëren op basis van hun unieke biologische kenmerken.' },
  { name: 'Pas aan voor het exacte gewicht', text: 'Verplaats de schuifregelaar naar het huidige gewicht van uw huisdier in kilogrammen. Het is essentieel om een recent gemeten gewicht te gebruiken voor een nauwkeurige berekening van de energiebehoefte.' },
  { name: 'Definieer hun activiteitsniveau', text: 'Kies tussen lage, normale of hoge activiteit op basis van de werkelijke dagelijkse beweging en het energieniveau dat uw trouwe viervoeter vertoont.' },
  { name: 'Voer de calorieën van de voeding per kg in', text: 'Kijk op de verpakking van het huisdiervoer voor de exacte kcal/kg-waarde, zodat de uiteindelijke hoeveelheid in grammen zo precies mogelijk is voor een optimale gezondheid.' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kernprincipes van veterinaire voeding en gezondheid',
    items: [
      'De RER-formule is: 70 × (gewicht in kg)^0,75. Het is de wetenschappelijke basis van alle moderne veterinaire calorieberekeningen.',
      'DER vermenigvuldigt RER met de specifieke levensstijlfactor van het dier om te voorzien in de dagelijkse behoefte.',
      'Een gecastreerde hond heeft tot 20 procent minder calorieën nodig dan een intacte hond als gevolg van hormonale verschuivingen.',
      'Obesitas treft tegenwoordig 50 procent van de huisdieren en vermindert hun levensverwachting en levenskwaliteit aanzienlijk.',
      'Het berekenen van de exacte hoeveelheid is een van de meest effectieve vormen van preventieve geneeskunde voor huisdiereigenaren.',
      'Het gebruik van een keukenweegschaal zorgt voor de nauwkeurigheid die nodig is om een wetenschappelijk onderbouwd voedingsplan te volgen.',
    ],
  },
  { type: 'title', text: 'Complete Gids voor het Berekenen van de Dagelijkse Voedingshoeveelheid van uw Huisdier voor een Optimale Gezondheid', level: 2 },
  {
    type: 'paragraph',
    html: 'Een hond of kat correct voeren is niet alleen een kwestie van hun bakje elke ochtend vullen. Voeding is de fundamentele pijler van hun gezondheid, langleven en emotioneel welzijn. Een <strong>calculator voor de dagelijkse hoeveelheid voer voor huisdieren</strong> is een essentieel hulpmiddel voor elke verantwoordelijke eigenaar die de twee meest voorkomende problemen in de huidige veterinaire voeding wil vermijden: malnutritie door gebrek aan voedingsstoffen en, vooral, obesitas, die meer dan 50% van de huisdieren in ontwikkelde landen treft.',
  },
  {
    type: 'paragraph',
    html: 'In deze gids verkennen we de wetenschappelijke fundamenten achter calorieberekeningen, hoe u voedingsetiketten moet interpreteren en hoe factoren zoals leeftijd, fysiek activiteitsniveau en fysiologische status de hoeveelheid voedsel beïnvloeden die uw metgezel elke dag nodig heeft. We helpen u begrijpen hoe kleine aanpassingen in de dagelijkse hoeveelheid een enorm verschil kunnen maken in het voorkomen van diabetes, gewrichtsproblemen en hartgezondheid voor uw dier.',
  },
  { type: 'title', text: 'De Wetenschap achter de Berekeningen: RER en DER Begrijpen', level: 3 },
  {
    type: 'paragraph',
    html: 'Om precies te bepalen hoeveel een dier elke dag moet eten, gebruiken dierenartsen en voedingsdeskundigen twee sleutelconcepten: de RER en de DER. Deze afkortingen staan respectievelijk voor Resting Energy Requirement (rustenergiebehoefte) en Daily Energy Requirement (dagelijkse energiebehoefte). Het begrijpen van de interactie tussen deze twee is cruciaal voor het veilig en gecontroleerd beheren van het gewicht en welzijn van uw huisdier.',
  },
  {
    type: 'paragraph',
    html: 'RER dekt de energie die nodig is voor de basisorganfuncties, ademhaling en circulatie terwijl het dier rust. DER neemt vervolgens deze waarde en past deze aan voor de levensstijl van het dier, of het nu een actieve werkhond is of een rustige binnenkat. Door deze waarden correct te kalibreren, kunnen we een balans bereiken die op de lange termijn een gezonde lichaamsconditie bevordert.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: Rustenergie', value: '70 × kg^0,75' },
      { label: 'Puppyfactor', value: 'x2,5 tot x3,5' },
      { label: 'Actieve volwassen factor', value: 'x1,6 tot x2,0' },
      { label: 'Seniorfactor', value: 'x1,0 tot x1,4' },
    ],
  },
  { type: 'title', text: 'Hoe u het Voedingsetiket van uw Huisdier Moet Lezen en Interpreteren', level: 3 },
  {
    type: 'paragraph',
    html: 'Om de calculator de exacte grammen te laten geven, moet u de <strong>caloriedichtheid</strong> van het product kennen, ook wel bekend als de metaboliseerbare energie. Deze waarde wordt meestal uitgedrukt als kcal/kg of kcal/100g op de verpakking. Door deze cijfers nauwkeurig in te voeren, kunt u een dieet ontwerpen dat noch gebrekkig, noch buitensporig is.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Light dieetbrokken', value: '~3000 kcal/kg' },
      { label: 'Standaard volwassen brokken', value: '~3500 kcal/kg' },
      { label: 'Hoogenergetische puppybrokken', value: '~4000 kcal/kg' },
      { label: 'Natvoer in blik', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Voedingsnotitie van de Dierenarts',
    html: 'Elk huisdier is een individu met zijn eigen unieke metabolisme. De calculator biedt een wetenschappelijk onderbouwd startpunt, maar u moet de werkelijke lichaamsconditie altijd in de gaten houden door de ribben van uw huisdier te voelen. Als u ze gemakkelijk kunt voelen zonder hard te drukken, is het gewicht ideaal. Als de ribben moeilijk te vinden zijn onder een vetlaag, is het misschien tijd om de hoeveelheid te beperken.',
  },
  { type: 'title', text: 'Verschillen in Voeding tussen Katten en Honden', level: 3 },
  {
    type: 'paragraph',
    html: 'Katten zijn obligate carnivoren en hun metabolisme is geoptimaliseerd om energie te halen uit dierlijke eiwitten. Bij honden zien we een flexibeler omnivore metabolisme, maar men moet nog steeds voorzichtig zijn met een teveel aan koolhydraten die kunnen leiden tot gewichtstoename. Beide soorten gedijen bij een gecontroleerde hoeveelheid die een te hoge belasting van de gewrichten en het cardiovasculaire systeem gedurende hun hele leven voorkomt.',
  },
  {
    type: 'paragraph',
    html: 'Slechts een paar minuten besteden aan het berekenen van de exacte hoeveelheid is een van de meest winstgevende investeringen in preventieve geneeskunde die u als eigenaar kunt doen. Een gezond gewicht vermindert het risico op chronische ziekten drastisch en geeft uw beste vriend de beste kans op een lang en vitaal leven. Raadpleeg uw dierenarts bij uw volgende routinebezoek om er zeker van te zijn dat uw huidige voedingsstrategie optimaal is.',
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
  faqTitle: 'Veelgestelde Vragen': 'Bibliografie',
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
