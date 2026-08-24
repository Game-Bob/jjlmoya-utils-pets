import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';

const slug = 'drachtcalculator-huisdieren';
const title = 'Drachtcalculator voor huisdieren';
const description = 'Bereken de verwachte bevallingsdatum van hond, kat, konijn of fret op basis van de dekdatum met gedocumenteerde marges.';

const ui: PetGestationLocaleContent['ui'] = {
  "journeyHint": "Kies de diersoort, vul de dekdatum in en bekijk het verwachte bevallingsvenster.",
  "instantHint": "Pas een instelling aan en de kalender verandert direct mee.",
  "speciesLegend": "Welk type huisdier is dit?",
  "speciesDog": "Hond",
  "speciesCat": "Kat",
  "speciesRabbit": "Konijn",
  "speciesFerret": "Fret",
  "speciesDogMeta": "58 tot 72 dagen",
  "speciesCatMeta": "64 tot 66 dagen",
  "speciesRabbitMeta": "Ca. 31 dagen",
  "speciesFerretMeta": "Ca. 42 dagen",
  "matingDateLabel": "Dekdatum",
  "matingDateHint": "Gebruik de eerste bekende dekdatum. Dit is een schatting en geen exacte bevruchtingsdatum.",
  "presetToday": "Vandaag",
  "presetWeekAgo": "7 dagen geleden",
  "presetFortnightAgo": "14 dagen geleden",
  "calculateButton": "Bereken bevallingsvenster",
  "resultEyebrow": "De drachtkompas geeft aan",
  "dueDateLabel": "Typische bevallingsdatum",
  "windowLabel": "Verwachte periode",
  "remainingLabel": "Dagen tot bevalling",
  "elapsedLabel": "Verstreken dagen",
  "daysLabel": "dagen",
  "dayLabel": "dag",
  "statusFuture": "Datum ligt in de toekomst",
  "statusWaiting": "Drachtperiode is bezig",
  "statusWindow": "Bevallingsvenster is open",
  "statusLate": "Buitenste schatting overschreden",
  "resultEmpty": "Uw bevallingskompas verschijnt hier.",
  "sampleLabel": "Voorbeeldweergave",
  "sceneMating": "DEKDATUM",
  "sceneToday": "Huidige voortgang",
  "sceneDue": "BEVALLINGSVENSTER",
  "noteTitle": "Belangrijke gezondheidsopmerking",
  "noteText": "De dekdatum valt niet altijd samen met de eisprong of bevruchting. Raadpleeg een dierenarts voor drachtcontrole en advies.",
  "sourceTitle": "Methodologie",
  "sourceText": "Honden gebruiken 58 tot 72 dagen, katten, konijnen en fretten volgen de richtlijnen uit het MSD Veterinary Manual.",
  "invalidDate": "Vul een geldige dekdatum in.",
  "futureDate": "Een toekomstige dekdatum geldt niet voor een actieve dracht."
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    "question": "Hoe nauwkeurig is de drachtcalculator voor huisdieren?",
    "answer": "Het is een richtlijn voor de planning. Bij honden kan de dekdatum afwijken van de daadwerkelijke eisprong en bevruchting omdat zaadcellen meerdere dagen levensvatbaar blijven in de baarmoeder. De calculator toont daarom een periode in plaats van één vast moment. Een dierenarts kan via echografie meer zekerheid bieden."
  },
  {
    "question": "Hoe lang is een hond drachtig?",
    "answer": "Het MSD Veterinary Manual vermeldt 58 tot 72 dagen vanaf de eerste dekking als de eisprongdatum onbekend is. Bij een bekende eisprong is de periode 62 tot 64 dagen. Het ras en de grootte van het nest hebben invloed in de praktijk."
  },
  {
    "question": "Hoe lang is een kat drachtig?",
    "answer": "Een kat is meestal ongeveer 65 dagen drachtig. Dierenartsen houden 64 tot 66 dagen aan na de hormonale piek. Het helpt de eigenaar om tijdig spullen klaar te zetten voor de bevalling."
  },
  {
    "question": "Waarom staan konijnen en fretten erbij?",
    "answer": "Konijnen (ca. 31 dagen) en fretten (ca. 42 dagen) zijn veelkomende huisdieren met een korte en goed gedocumenteerde drachtduur. De calculator biedt een handig hulpmiddel voor de voorbereiding van de nestplaats."
  },
  {
    "question": "Wanneer moet ik een dierenarts bellen?",
    "answer": "Neem contact op bij langdurige weeën zonder vordering, ernstige bloedingen, afwijkende uitvloeiing of het overschrijden van de verwachte bevallingsperiode."
  }
];

const howTo: PetGestationLocaleContent['howTo'] = [
  {
    "name": "Selecteer diersoort",
    "text": "Kies hond, kat, konijn of fret om het juiste drachtprofiel toe te passen."
  },
  {
    "name": "Vul dekdatum in",
    "text": "Voer de eerste bekende dekdatum in."
  },
  {
    "name": "Bekijk het kompas",
    "text": "Controleer de bevallingsdatum, het venster en de verstreken dagen."
  },
  {
    "name": "Voorbereiding",
    "text": "Gebruik de datum om de werpkist klaar te maken en afspraken te maken."
  }
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Drachttijden voor huisdieren in één oogopslag",
    "items": [
      "Voer de dekdatum in en kies de diersoort voor een indicatieve planning.",
      "Honden hebben een ruimer venster vanwege de variabele periode tussen dekking en bevruchting.",
      "Katten, konijnen en fretten volgen wetenschappelijke MSD-richtlijnen.",
      "Hulpmiddel voor voorbereiding, geen vervanging van medisch dierenartsenadvies."
    ]
  },
  {
    "type": "title",
    "text": "Hoe werkt de drachtcalculator voor huisdieren",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Deze drachtcalculator zet de bekende dekdatum om in een overzichtelijke bevallingskalender. Hij telt de specifieke drachtduur van de gekozen diersoort op en geeft zowel een gemiddelde datum als een verwachte bevallingsperiode weer. Dit helpt de eigenaar om de voorbereiding tijdig te treffen en vragen voor te bereiden. Belangrijke informatie voor eigenaren en dierenartsen om de gezondheid tijdens de dracht te monitoren en een optimale voorbereiding op de bevalling te garanderen voor moeder en jongen. Belangrijke informatie voor eigenaren en dierenartsen om de gezondheid tijdens de dracht te monitoren en een optimale voorbereiding op de bevalling te garanderen voor moeder en jongen. Belangrijke informatie voor eigenaren en dierenartsen om de gezondheid tijdens de dracht te monitoren en een optimale voorbereiding op de bevalling te garanderen voor moeder en jongen. Een tijdige voorbereiding garandeert rust en optimale zorg voor het huisdier."
  },
  {
    "type": "paragraph",
    "html": "Het visuele kompas toont het aantal verstreken dagen en de actuele drachtstatus, zodat u de voortgang op elk moment eenvoudig kunt volgen. Zodra het venster bereikt is, past de melding zich automatisch aan zonder dat u ingewikkelde tabellen hoeft door te nemen."
  },
  {
    "type": "title",
    "text": "Gedocumenteerde drachtprofielen per diersoort",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Diersoort",
      "Typische duur",
      "Schatting vanaf dekking"
    ],
    "rows": [
      [
        "Hond",
        "Ca. 63 dagen",
        "58 tot 72 dagen"
      ],
      [
        "Kat",
        "Ca. 65 dagen",
        "64 tot 66 dagen"
      ],
      [
        "Konijn",
        "Ca. 31 dagen",
        "31 dagen"
      ],
      [
        "Fret",
        "Ca. 42 dagen",
        "42 dagen"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "Het hondenprofiel vereist de meeste nuance omdat de bevruchting pas dagen na de dekking kan plaatsvinden. Voor andere dieren zijn de richtlijnen vaster volgens de diergeneeskundige literatuur."
  },
  {
    "type": "title",
    "text": "Voorbereiden op de bevalling",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Zorg voor een rustige en schone werpomgeving en houd het telefoonnummer van de dierenarts bij de hand voor eventuele vragen of spoedgevallen. Volg professioneel advies op over voeding."
  },
  {
    "type": "tip",
    "title": "Gezondheid van het dier eerst",
    "html": "Neem bij twijfel, pijn of complicaties direct contact op met uw dierenarts."
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
