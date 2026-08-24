import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'giftig-voedsel-honden-katten-controle';
const title = 'Controle op giftig voedsel voor honden en katten';
const description = 'Controleer gevaarlijke voedingsmiddelen voor honden en katten, begrijp waarschuwingssignalen en weet wanneer u een dierenarts moet raadplegen.';

const ui: PetToxicityUI = {
  "journeyHint": "Kies het dier, open de voedselatlas en lees de soortspecifieke waarschuwing voordat u beslist.",
  "speciesLabel": "Diersoort",
  "speciesDog": "Hond",
  "speciesCat": "Kat",
  "speciesDogMeta": "Hondenprofiel",
  "speciesCatMeta": "Kattenprofiel",
  "foodLabel": "Voedsel of ingrediënt",
  "foodPlaceholder": "Kies een voedingsmiddel",
  "foodMenuHint": "De lijst verandert per dier omdat risico s soortspecifiek zijn.",
  "resultEyebrow": "De voedselatlas geeft aan",
  "resultEmpty": "Kies een voedingsmiddel om de veiligheidskaart te openen.",
  "sceneLabel": "Blootstellingskaart",
  "sceneReady": "Kies een voedingsmiddel",
  "sceneSelected": "Soortspecifieke kaart geopend",
  "riskCritical": "Dringende zorg",
  "riskHigh": "Hoog risico",
  "riskCaution": "Voorzichtigheid",
  "riskUnknown": "Onvoldoende gegevens",
  "riskLabel": "Risiconiveau",
  "whyLabel": "Waarom het belangrijk is",
  "signsLabel": "Symptomen om op te letten",
  "actionLabel": "Wat te doen",
  "callVetLabel": "De veiligste stap is professioneel advies.",
  "callVetText": "Een rekenhulp kan geen toxische dosis schatten of een onderzoek vervangen.",
  "sourceLabel": "Gebruikte bronnen",
  "sourceText": "De profielen zijn gebaseerd op veterinaire toxicologische richtlijnen van ASPCA, FDA en MSD Veterinary Manual.",
  "emergencyTitle": "Als uw huisdier iets zorgwekkends heeft gegeten",
  "emergencyText": "Bel direct uw dierenarts of de spoedkliniek. Bewaar de verpakking, ingrediëntenlijst en geschatte hoeveelheid.",
  "openMenu": "Opties openen",
  "closeMenu": "Opties sluiten"
};

const faq: PetToxicityLocaleContent['faq'] = [
  {
    "question": "Kan deze controle bepalen of mijn huisdier veilig is?",
    "answer": "Nee. Het is een educatieve gids over voedselgevaren, geen diagnose of dosiscalculator. Bel bij twijfel altijd een dierenarts."
  },
  {
    "question": "Welke voedingsmiddelen zijn erg gevaarlijk voor honden?",
    "answer": "Xylitol, chocolade, cafeïne, druiven, rozijnen, ui, knoflook, alcohol en rauw gistdeeg behoren tot de grootste gevaren."
  },
  {
    "question": "Zijn uien en knoflook gevaarlijk voor katten?",
    "answer": "Ja. Katten zijn erg gevoelig voor schade aan rode bloedcellen door Allium-planten (ui, knoflook, bieslook)."
  },
  {
    "question": "Waarom verschilt de waarschuwing voor xylitol per diersoort?",
    "answer": "Xylitol veroorzaakt bij honden een snelle en gevaarlijke daling van de bloedsuikerspiegel. Bij katten is dit risico minder duidelijk aangetoond."
  },
  {
    "question": "Wat als het gegeten voedsel niet op de lijst staat?",
    "answer": "Afwezigheid op de lijst betekent geen veiligheid. Bewaar de verpakking en bel uw dierenarts."
  },
];


const howTo: PetToxicityLocaleContent['howTo'] = [
  {
    "name": "Kies de diersoort",
    "text": "Selecteer Hond of Kat om de relevante informatie te laden."
  },
  {
    "name": "Kies het voedingsmiddel",
    "text": "Open het menu en kies het ingredënt dat het dichtst in de buurt komt."
  },
  {
    "name": "Lees de veiligheidskaart",
    "text": "Bekijk het risiconiveau, mogelijke symptomen en het advies."
  },
  {
    "name": "Bel een dierenarts indien nodig",
    "text": "Neem bij een echte blootstelling direct contact op met een dierenarts."
  }
];

const seo: PetToxicityLocaleContent['seo'] = [
  {
    type: 'summary',
    title: "Een snelle controle van de voedselveiligheid voor honden en katten",
    items: [
      "Kies eerst de diersoort omdat hetzelfde ingrediënt andere risico s geeft.",
      "Gebruik de kaarten om het gevaar en de urgentie te begrijpen.",
      "Behandel xylitol-inname bij honden als een spoedgeval.",
      "Raadpleeg een dierenarts bij een daadwerkelijke blootstelling."
],
  },
  {
    type: 'title',
    text: "Hoe de controle op giftig voedsel verantwoord te gebruiken",
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Deze controle op giftig voedsel is ontwikkeld voor de eerste spannende minuten nadat een hond of kat iets verkeerds heeft gegeten. Kies het dier en bekijk de kaart om het gesprek met de dierenarts goed voor te bereiden. Dit helpt paniek te voorkomen en gestructureerd te handelen bij een spoedgeval. De informatie bevat duidelijke risico-indicaties, herkenbare symptomen en de juiste vervolgstappen.",
  },
  {
    type: 'paragraph',
    html: "De keuze van de diersoort is essentieel. Honden en katten verwerken stoffen op verschillende wijze. Xylitol is extreem gevaarlijk voor honden omdat het een snelle insulineafgifte en ernstige hypoglykemie veroorzaakt, terwijl uien en knoflook vooral bij katten de rode bloedcellen afbreken en tot bloedarmoede leiden. De juiste inzichten helpen bij een snelle diagnose door de dierenarts.",
  },
  {
    type: 'title',
    text: "Veelvoorkomende gevaren en belangrijke details",
    level: 2,
  },
  {
    type: 'table',
    headers: ["Voedsel of ingrediënt","Belangrijkste risico","Belangrijke context"],
    rows: [["Chocolade en cafeïne","Effecten op hart en zenuwstelsel","Cacaogehalte en gewicht spelen een grote rol."],["Xylitol","Snelle daling van bloedsuiker bij honden","Controleer suikervrij kauwgom en gebak."],["Druiven en rozijnen","Mogelijke nierschade bij honden","Beschouw kleine hoeveelheden niet als veilig."],["Ui en knoflook","Schade aan rode bloedcellen","Gedroogde en poedervormen verhogen het risico."],["Rauw gistdeeg","Magaanzwelling en alcoholvorming","Rijzend deeg veroorzaakt druk en alcohol."]],
  },
  {
    type: 'paragraph',
    html: "Naast chemische toxiciteit bestaan er ook fysieke gevaren zoals verstoppingen door botten en het risico op alvleesklierontsteking door vet eten. Gekookte botten kunnen splinteren en de spijsvertering beschadigen, terwijl vetrijk voedsel pijnlijk alvleesklierverschijnselen oproept. Goed opletten is noodzakelijk bij mogelijke inname door uw huisdier.",
  },
  {
    type: 'title',
    text: "Wat te doen na mogelijke blootstelling",
    level: 2,
  },
  {
    type: 'list',
    items: [
      "Verwijder het resterende voedsel en bewaar de verpakking.",
      "Noteer diersoort, gewicht, voedingsmiddel, hoeveelheid en tijdstip.",
      "Bel de dierenarts of het vergiftigingeninformatiecentrum.",
      "Laat het dier niet braken zonder medisch advies.",
      "Zoek direct hulp bij toevallen of bewusteloosheid."
],
  },
  {
    type: 'tip',
    title: "Gezondheid van het dier staat voorop",
    html: "Symptomen kunnen pas na uren optreden. Wacht niet af bij het vermoeden van vergiftiging.",
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
