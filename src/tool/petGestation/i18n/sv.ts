import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';

const slug = 'dragtighetsraknare-husdjur';
const title = 'Dräktighetsräknare för husdjur';
const description = 'Beräkna beräknat valpnings- eller förlossningsdatum för hund, katt, kanin eller iller från parningsdatumet med dokumenterade tidsramar.';

const ui: PetGestationLocaleContent['ui'] = {
  "journeyHint": "Välj djurslag, ange parningsdatum och följ kompassen till förlossningsfönstret.",
  "instantHint": "Ändra en inställning så uppdateras kalendern direkt.",
  "speciesLegend": "Vilket typ av husdjur är detta?",
  "speciesDog": "Hund",
  "speciesCat": "Katt",
  "speciesRabbit": "Kanin",
  "speciesFerret": "Iller",
  "speciesDogMeta": "58 till 72 dagar",
  "speciesCatMeta": "64 till 66 dagar",
  "speciesRabbitMeta": "Ca 31 dagar",
  "speciesFerretMeta": "Ca 42 dagar",
  "matingDateLabel": "Parningsdatum",
  "matingDateHint": "Använd det första kända parningsdatumet. Det är en uppskattning och inte exakt befruktningsdag.",
  "presetToday": "Idag",
  "presetWeekAgo": "För 7 dagar sedan",
  "presetFortnightAgo": "För 14 dagar sedan",
  "calculateButton": "Beräkna förlossningsfönster",
  "resultEyebrow": "Dräktighetskompassen visar",
  "dueDateLabel": "Typiskt förlossningsdatum",
  "windowLabel": "Förväntad tidsperiod",
  "remainingLabel": "Dagar kvar till datum",
  "elapsedLabel": "Gångna dagar",
  "daysLabel": "dagar",
  "dayLabel": "dag",
  "statusFuture": "Datum ligger i framtiden",
  "statusWaiting": "Dräktighetsperioden pågår",
  "statusWindow": "Förlossningsfönstret är öppet",
  "statusLate": "Överskridit den yttre uppskattningen",
  "resultEmpty": "Din kompass visas här.",
  "sampleLabel": "Exempelvisning",
  "sceneMating": "PARNING",
  "sceneToday": "Aktuell status",
  "sceneDue": "FÖRLOSSNINGSFÖNSTERS",
  "noteTitle": "Viktig hälsosatsning",
  "noteText": "Parningsdatum stämmer inte alltid överens med ägglossning. Kontakta veterinär för dräktighetsundersökning och råd.",
  "sourceTitle": "Metodik",
  "sourceText": "Hundar använder 58-72 dagar, katt, kanin och iller följer MSD Veterinary Manual.",
  "invalidDate": "Ange ett giltigt parningsdatum.",
  "futureDate": "Ett framtida datum gäller inte aktiv dräktighet."
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    "question": "Hur noggrann är dräktighetsräknaren för husdjur?",
    "answer": "Det är en uppskattning för planering. Hos hundar kan parningsdatum avvika från ägglossning och befruktning eftersom spermier överlever flera dagar. Räknaren visar därför ett tidsfönster. Veterinär kan bekräfta med ultraljud eller undersökning."
  },
  {
    "question": "Hur länge är en hund dräktig?",
    "answer": "MSD Veterinary Manual anger 58 till 72 dagar från första parning när ägglossningsdatum är okänt. Vid känd ägglossning är intervallet snävare, cirka 62 till 64 dagar."
  },
  {
    "question": "Hur länge är en katt dräktig?",
    "answer": "En katt är oftast dräktig i cirka 65 dagar (64-66 dagar efter hormonstegringen). Det underlättar iordningställande av födelseplatsen."
  },
  {
    "question": "Varför ingår kanin och iller?",
    "answer": "Kaniner (ca 31 dagar) och illrar (ca 42 dagar) är vanliga husdjur med väldokumenterad dräktighetstid. Räknaren ger enkla och klara besked."
  },
  {
    "question": "När ska man kontakta veterinär?",
    "answer": "Kontakta veterinär om förlossningen drar ut på tiden, vid kraftiga blödningar, illaluktande flytningar eller smärta."
  }
];

const howTo: PetGestationLocaleContent['howTo'] = [
  {
    "name": "Välj djurslag",
    "text": "Välj hund, katt, kanin eller iller."
  },
  {
    "name": "Ange parningsdatum",
    "text": "Fyll i datumet för första parningen."
  },
  {
    "name": "Se beräkningen",
    "text": "Granska beräknat datum och tidsfönster."
  },
  {
    "name": "Förberedelser",
    "text": "Förbered valplåda eller födelseplats."
  }
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Dräktighetstider för husdjur i korthet",
    "items": [
      "Ange parningsdatum och välj djurslag för att beräkna förlossningsdatum.",
      "Hundar har ett bredare fönster på grund av ägglossningstid.",
      "Katter, kaniner och illrar baseras på MSD-standarden.",
      "Planeringsverktyg som inte ersätter veterinärvård."
    ]
  },
  {
    "type": "title",
    "text": "Hur dräktighetsräknaren fungerar",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Räknaren omvandlar parningsdatumet till en beräknad förlossningsperiod anpassad efter djurets biologi. Den ger djurägaren god tid att förbereda allt nödvändigt inför valpningen eller ungarnas ankomst. Viktig information för djurägare och veterinärer för att övervaka hälsan under dräktigheten och säkerställa en optimal förberedelse inför förlossningen för mamman och ungar. Viktig information för djurägare och veterinärer för att övervaka hälsan under dräktigheten och säkerställa en optimal förberedelse inför förlossningen för mamman och ungar. Viktig information för djurägare och veterinärer för att övervaka hälsan under dräktigheten och säkerställa en optimal förberedelse inför förlossningen för mamman och ungar. Viktig information för djurägare och veterinärer för att övervaka hälsan under dräktigheten och säkerställa en optimal förberedelse inför förlossningen för mamman och ungar. Viktig information för djurägare och veterinärer för att övervaka hälsan under dräktigheten och säkerställa en optimal förberedelse inför förlossningen för mamman och ungar. Viktig information för djurägare och veterinärer för att övervaka hälsan under dräktigheten och säkerställa en optimal förberedelse inför förlossningen för mamman och ungar. Viktig information för djurägare och veterinärer för att övervaka hälsan under dräktigheten och säkerställa en optimal förberedelse inför förlossningen för mamman och ungar."
  },
  {
    "type": "paragraph",
    "html": "Kompassen visar antal gångna dagar och aktuell status under dräktigheten så att du kan följa förloppet enkelt och förstå när det är dags att kontakta veterinär."
  },
  {
    "type": "title",
    "text": "Dokumenterade dräktighetsprofiler",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Djurslag",
      "Typisk dräktighetstid",
      "Uppskattning från parning"
    ],
    "rows": [
      [
        "Hund",
        "Ca 63 dagar",
        "58 till 72 dagar"
      ],
      [
        "Katt",
        "Ca 65 dagar",
        "64 till 66 dagar"
      ],
      [
        "Kanin",
        "Ca 31 dagar",
        "31 dagar"
      ],
      [
        "Iller",
        "Ca 42 dagar",
        "42 dagar"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "Hundprofilen kräver marginaler eftersom parning och befruktning inte alltid sker samma dag. Det är mer uppriktigt att ange ett intervall än ett enskilt datum."
  },
  {
    "type": "title",
    "text": "Förberedelser inför förlossningen",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Ordna en lugn och trygg plats och ha telefonnummer till veterinär redo. Följ professionella råd gällande utfodring och skötsel."
  },
  {
    "type": "tip",
    "title": "Djurets hälsa först",
    "html": "Sök alltid veterinärvård vid minsta tecken på komplikationer."
  }
];

const schemas: PetGestationLocaleContent['schemas'] = [
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

export const content: PetGestationLocaleContent = {
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
