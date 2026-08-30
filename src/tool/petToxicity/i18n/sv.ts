import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'giftig-mat-hund-katt-kontroll';
const title = 'Kontroll av giftig mat för hund och katt';
const description = 'Kontrollera farliga livsmedel för hundar och katter, förstå varningssignaler och vet när du ska kontakta en veterinär.';

const ui: PetToxicityUI = {
  "journeyHint": "Välj djur, öppna matatlasen och läs den artspecifika varningen innan du bestämmer nästa steg.",
  "speciesLabel": "Djurart",
  "speciesDog": "Hund",
  "speciesCat": "Katt",
  "speciesDogMeta": "Hundprofil",
  "speciesCatMeta": "Kattprofil",
  "foodLabel": "Livsmedel eller ingrediens",
  "foodPlaceholder": "Välj ett livsmedel",
  "foodMenuHint": "Listan ändras beroende på djur eftersom risken är artspecifik.",
  "resultEyebrow": "Matatlasen visar",
  "resultEmpty": "Välj ett livsmedel för att öppna säkerhetskortet.",
  "sceneLabel": "Exponeringskarta",
  "sceneReady": "Välj ett livsmedel",
  "sceneSelected": "Artspecifikt kort öppet",
  "riskCritical": "Akut varning",
  "riskHigh": "Hög risk",
  "riskCaution": "Försiktighet",
  "riskUnknown": "Otillräckliga data",
  "riskLabel": "Risknivå",
  "whyLabel": "Varför det är viktigt",
  "signsLabel": "Symptom att observera",
  "actionLabel": "Vad du bör göra",
  "callVetLabel": "Det säkraste steget är professionell rådgivning.",
  "callVetText": "En kalkylator kan inte beräkna en toxisk dos eller ersätta en undersökning.",
  "sourceLabel": "Källor som används",
  "sourceText": "Profilerna baseras på veterinärmedicinska riktlinjer från ASPCA, FDA och MSD Veterinary Manual.",
  "emergencyTitle": "Om ditt husdjur har ätit något olämpligt",
  "emergencyText": "Ring din veterinär eller djursjukhus omedelbart. Ta vara på förpackningen och ingredienslistan.",
};

const faq: PetToxicityLocaleContent['faq'] = [
  {
    "question": "Garanterar detta verktyg att mitt djur är säkert?",
    "answer": "Nej. Det är en pedagogisk guide, inte en diagnos. Rådfråga alltid en veterinär om ditt djur ätit något olämpligt."
  },
  {
    "question": "Vilka livsmedel är särskilt farliga för hundar?",
    "answer": "Xylitol, choklad, koffein, vindruvor, russin, lök, vitlök, alkohol och rå jästdeg."
  },
  {
    "question": "Är lök och vitlök farligt för katter?",
    "answer": "Ja. Katter är mycket känsliga för skador på röda blodkroppar orsakade av Allium-växter."
  },
  {
    "question": "Varför skiljer sig varningen för xylitol mellan hund och katt?",
    "answer": "Xylitol orsakar ett snabbt och livshotande blodsockerfall hos hundar. Hos katter är denna risk inte lika tydligt dokumenterad."
  },
  {
    "question": "Vad gör jag om maten inte finns med i listan?",
    "answer": "Att en vara saknas är ingen garanti för säkerhet. Spara förpackningen och kontakta veterinär."
  },
];


const howTo: PetToxicityLocaleContent['howTo'] = [
  {
    "name": "Välj djurart",
    "text": "Välj Hund eller Katt för att ladda rätt information."
  },
  {
    "name": "Välj livsmedel",
    "text": "Öppna menyn och välj den ingrediens som passar bäst."
  },
  {
    "name": "Läs säkerhetskortet",
    "text": "Granska risknivån, möjliga symptom och rekommenderad åtgärd."
  },
  {
    "name": "Kontakta veterinär vid behov",
    "text": "Vid en verklig händelse ska du omedelbart kontakta veterinär."
  }
];

const seo: PetToxicityLocaleContent['seo'] = [
  {
    type: 'summary',
    title: "Snabb koll av matosäkerhet för hund och katt",
    items: [
      "Välj djurart först eftersom samma ingrediens påverkar olika.",
      "Använd korten för att förstå faran och hur akut läget är.",
      "Xylitolintag hos hund ska alltid behandlas som ett akutfall.",
      "Rådfråga veterinär vid alla misstänkta matförgiftningar."
],
  },
  {
    type: 'title',
    text: "Hur du använder kontrollen för giftig mat ansvarsfullt",
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Denna kontroll för giftig mat är utformad för de första kritiska minuterna efter att en hund eller katt ätit något olämpligt. Välj djur och öppna kortet för att förbereda samtalet med veterinären. Det underlättar kommunikationen under stress och ger klarhet i en orolig stund vid akutbesök. Informationen täcker risknivåer, vanliga symptom och rekommenderade åtgärder. Vid minsta tveksamhet bör du alltid rådfråga en kvalificerad veterinär för att säkerställa djurets hälsa.",
  },
  {
    type: 'paragraph',
    html: "Artskillnaden är avgörande. Hundar och katter bryter ner ämnen olika. Xylitol är livsfarligt för hundar då det orsakar kraftig insulinutsöndring och allvarlig hypoglykemi, medan lök och vitlök påverkar kattens röda blodkroppar kraftigt och kan ge anemi. Att veta om detta hjälper till att undvika felaktig första hjälpen i hemmet. Vid minsta tveksamhet bör du alltid rådfråga en kvalificerad veterinär för att säkerställa djurets hälsa.",
  },
  {
    type: 'title',
    text: "Vanliga matfaror och viktiga detaljer",
    level: 2,
  },
  {
    type: 'table',
    headers: ["Livsmedel eller ingrediens","Huvudsaklig fara","Viktigt sammanhang"],
    rows: [["Choklad och koffein","Hjärt- och nervsystempåverkan","Kakaohalt och vikt har stor betydelse."],["Xylitol","Snabbt blodsockerfall hos hundar","Kontrollera sockerfritt tuggummi och kakor."],["Vindruvor och russin","Möjlig njurskada hos hundar","Betrakta inte små mängder som ofarliga."],["Lök och vitlök","Skada på röda blodkroppar","Torkade och pulveriserade former ökar risken."],["Rå jästdeg","Magsäcksexpansion och alkohol","Jäsande deg skapar tryck och alkohol."]],
  },
  {
    type: 'paragraph',
    html: "Förutom kemisk giftighet finns det fysiska risker som tarmstopp av ben eller bukspottkörtelinflammation av fet mat. Tillagade ben kan splittras och skada mag-tarmkanalen, medan fet mat utlöser smärtsam pankreatit. Snabb kontakt med veterinär räddar liv i akuta fall. Vid minsta tveksamhet bör du alltid rådfråga en kvalificerad veterinär för att säkerställa djurets hälsa.",
  },
  {
    type: 'title',
    text: "Åtgärder efter en möjlig exponering",
    level: 2,
  },
  {
    type: 'list',
    items: [
      "Ta bort matresterna och spara förpackningen.",
      "Notera djurets vikt, matvara, mängd och tidpunkt.",
      "Ring veterinär eller giftinformationen.",
      "Framkalla inte kräkning utan veterinärs inrådan.",
      "Uppsök akuthjälp direkt vid kramper eller medvetslöshet."
],
  },
  {
    type: 'tip',
    title: "Djurets hälsa kommer först",
    html: "Symptom kan dröja flera timmar. Vänta inte med att söka hjälp. Vid minsta tveksamhet bör du alltid rådfråga en kvalificerad veterinär för att säkerställa djurets hälsa.",
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
