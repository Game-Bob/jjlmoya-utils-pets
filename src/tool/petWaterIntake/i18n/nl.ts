import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'rechner-waterbehoefte-honden-katten';
const title = 'Rekenmachine dagelijkse waterbehoefte voor honden en katten';
const description = 'Bereken de dagelijkse waterbehoefte van uw hond of kat op basis van gewicht, voeding, activiteit en temperatuur.';

const ui: PetWaterIntakeUI = {
  "journeyHint": "Kies het dier, voer het lichaamsgewicht in en stel het voer en het weer van vandaag in.",
  "instantHint": "Elke optie past de waterstand direct aan. Dit is een oriënterende richtlijn.",
  "unitLegend": "Eenheden",
  "metricUnit": "Metrisch",
  "imperialUnit": "Imperiaal",
  "speciesLegend": "Voor wie is de waterbak?",
  "speciesDog": "Hond",
  "speciesCat": "Kat",
  "speciesDogMeta": "Richtlijn onderhoud 60 mL per kg",
  "speciesCatMeta": "Richtlijn onderhoud 40 mL per kg",
  "weightLabel": "Lichaamsgewicht",
  "weightHint": "Voer het huidige gezonde gewicht in.",
  "weightKg": "kg",
  "weightLb": "lb",
  "dietLegend": "Hoeveel water komt uit de voeding?",
  "dietDry": "Voornamelijk droogvoer (brokken)",
  "dietDryMeta": "Het meeste water wordt uit de bak gedronken",
  "dietMixed": "Gemengde voeding",
  "dietMixedMeta": "Een deel van het water komt uit de maaltijden",
  "dietWet": "Voornamelijk natvoer (blik/zakjes)",
  "dietWetMeta": "Voeding levert het grootste deel van het vocht",
  "activityLegend": "Activiteit vandaag",
  "activityCalm": "Rustig / Rust",
  "activityTypical": "Matig / Normaal",
  "activityActive": "Intensief / Zeer actief",
  "heatLegend": "Klimaat en temperatuur",
  "heatNormal": "Gematigd / Normaal",
  "heatWarm": "Warm",
  "heatHot": "Zeer warm / Hittegolf",
  "resultEyebrow": "Schatting waterstand",
  "totalRangeLabel": "Totaal benodigd water (alle bronnen)",
  "drinkingRangeLabel": "Indicatieve richtlijn voor de drinkbak",
  "totalRangeHint": "Totale dagelijkse marge inclusief vocht uit voeding.",
  "drinkingRangeHint": "Geschat deel dat direct uit de bak gedronken wordt.",
  "statusEveryday": "Standaardomstandigheden",
  "statusActive": "Actieve dag",
  "statusWarm": "Warm weer",
  "statusDemanding": "Zware omstandigheden",
  "statusDetailEveryday": "Basisonderhoudsprofiel zonder extra hitte- of inspanningsfactoren.",
  "statusDetailActive": "Inspanning verhoogt het vochtverlies. Zorg altijd voor vers drinkwater.",
  "statusDetailWarm": "Hitte verhoogt het hijgen. Schaduw en koelte hebben prioriteit.",
  "statusDetailDemanding": "Hoge activiteit en hitte gecombineerd. Houd het dier goed in de gaten.",
  "resultEmpty": "Voer een geldig gewicht in om de waterstand te zien.",
  "sceneAria": "Waterreservoir voor het geselecteerde dier",
  "sceneTotal": "TOTAAL WATER",
  "sceneBowl": "midden van de dagelijkse marge",
  "methodTitle": "Berekeningsmethode",
  "methodText": "Volgens de AAHA-richtlijnen van 60 mL/kg voor honden en 40 mL/kg voor katten, aangepast aan voer en weer.",
  "noteTitle": "Een drinkbak vervangt geen diagnose",
  "noteText": "Zorg altijd voor schoon drinkwater. Raadpleeg een dierenarts bij plotselinge veranderingen in dorst.",
  "invalidWeight": "Voer een geldig lichaamsgewicht in.",
  "weightRange": "Het gewicht moet tussen 0.5 kg en 100 kg liggen."
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    "question": "Hoeveel water moet een hond of kat per dag drinken?",
    "answer": "De AAHA aanbevolen richtlijn is ongeveer 60 mL/kg per dag voor honden en 40 mL/kg voor katten. Dit varieert afhankelijk van voeding, beweging en temperatuur."
  },
  {
    "question": "Vermindert natvoer de behoefte om uit de bak te drinken?",
    "answer": "Ja, natvoer bestaat voor 75% tot 82% uit water en dekt een groot deel van de hydratatie. Dieren die natvoer eten drinken minder uit de bak."
  },
  {
    "question": "Wanneer moet ik mij zorgen maken over de waterinname?",
    "answer": "Raadpleeg een dierenarts als u een plotselinge toename van dorst (polydipsie) of weigering om te drinken opmerkt, wat kan duiden op nierziekten of diabetes."
  },
  {
    "question": "Verdubbelt warm weer de waterbehoefte?",
    "answer": "Ja, hijgen bij warm weer verhoogt het vochtverlies. Zorg altijd voor vers water en schaduw."
  }
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  {
    "name": "Kies diersoort en gewicht",
    "text": "Kies hond of kat en voer het gezonde gewicht in kg of lb in."
  },
  {
    "name": "Bepaal het type voeding",
    "text": "Kies droog, gemengd of natvoer om de vochtinname uit maaltijden te berekenen."
  },
  {
    "name": "Stel activiteit en weer in",
    "text": "Stel het bewegingsniveau en de temperatuur in voor het vochtverlies."
  },
  {
    "name": "Bekijk de schattingen",
    "text": "Controleer het totale benodigde water en de geschatte hoeveelheid om uit de bak te drinken."
  }
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Belangrijkste gids voor hydratatie van honden en katten",
    "items": [
      "Basisonderhoud: Honden ~60 mL/kg per dag; Katten ~40 mL/kg per dag volgens de AAHA.",
      "Impact van voeding: Natvoer levert tot 80% water, wat het drinken uit de bak vermindert.",
      "Hitte en beweging: Hijgen verhoogt het vochtverlies en vereist continu vers water.",
      "Waarschuwingssignalen: Plotselinge veranderingen in dorst vereisen een dierenartsbezoek.",
      "Vrije toegang: Plaats meerdere schone waterbakken in huis."
    ]
  },
  {
    "type": "title",
    "text": "Berekening van dagelijkse hydratatie voor huisdieren",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Voldoende en continue hydratatie bij honden en katten is absoluut essentieel voor het in stand houden van het metabolisme, een gezonde spijsvertering, de smering van gewrichten en de nierfunctie op lange termijn. Water maakt ongeveer 60% tot 70% van het totale lichaamsgewicht van een volwassen huisdier uit, en zelfs een klein vochttekort kan vitale fysiologische processen verstoren. De wetenschappelijke richtlijnen van de American Animal Hospital Association (AAHA) stellen de dagelijkse basisbehoefte op ongeveer 60 mL per kilogram lichaamsgewicht voor honden en 40 mL per kilogram voor katten."
  },
  {
    "type": "paragraph",
    "html": "Dit getal geeft de totale dagelijkse benodigde hoeveelheid water aan en niet uitsluitend de hoeveelheid die het dier direct uit de drinkbak moet drinken. De totale dagelijkse vochtinname van een huisdier bestaat uit drie bronnen: direct gedronken water, vocht uit commerciële of maaltijden, en een kleine hoeveelheid metabolisch water dat vrijkomt bij de celademhaling. Dit inzicht geruststelt eigenaren wanneer hun dier bij natvoeding minder vaak naar de waterbak gaat."
  },
  {
    "type": "title",
    "text": "Totaal water vs Water uit de bak",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Het type voeding speelt een doorslaggevende rol bij de hoeveelheid water die een huisdier actief uit de bak zal drinken. Droogvoer (brokken) bevat slechts 6% tot 10% vocht, waardoor het dier bijna zijn gehele dagelijkse vochtbehoefte direct uit de waterbak moet drinken. Natvoer in blik of zakjes bestaat daarentegen voor 75% tot 82% uit water. Een hond of kat die voornamelijk natvoer eet, krijgt het grootste deel van de hydratatie al binnen via de maaltijden, wat leidt tot zeldzame en fysiologisch volkomen normale bezoeken aan de drinkbak."
  },
  {
    "type": "table",
    "headers": [
      "Factor",
      "Impact op hydratatie",
      "Opmerkingen"
    ],
    "rows": [
      [
        "Diersoort",
        "Bepaalt de basiswaarde",
        "Honden ~60 mL/kg, Katten ~40 mL/kg"
      ],
      [
        "Gewicht",
        "Past het totale volume aan",
        "Gebruik het gezonde gewicht"
      ],
      [
        "Voeding",
        "Bepaalt water uit voeding",
        "Natvoer vermindert drinken uit de bak"
      ],
      [
        "Klimaat / Activiteit",
        "Verhoogt het vochtverlies",
        "Vereist meer vers water"
      ]
    ]
  },
  {
    "type": "title",
    "text": "Praktische tips voor eigenaren",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Zorg altijd voor vers en schoon drinkwater. Voor katten kunnen drinkfonteinen of brede bakken het drinken stimuleren."
  },
  {
    "type": "card",
    "title": "Droogvoeding",
    "icon": "mdi:food-drumstick",
    "html": "Dieren op brokken zijn afhankelijk van de waterbak. Ververs het water dagelijks."
  },
  {
    "type": "card",
    "title": "Natvoeding",
    "icon": "mdi:food-drumstick",
    "html": "Blikvoer zorgt voor uitstekende hydratatie. Het is normaal dat het dier minder uit de bak drinkt."
  },
  {
    "type": "card",
    "title": "Hitte en Beweging",
    "icon": "mdi:weather-sunny",
    "html": "Op warme dagen verhoogt hijgen het vochtverlies. Zorg voor schaduw en rust."
  },
  {
    "type": "tip",
    "title": "Waarschuwingssignalen",
    "html": "Extreem veel dorst of weigeren te drinken zijn klinische signalen. Raadpleeg direct een dierenarts."
  }
];

const schemas: PetWaterIntakeLocaleContent['schemas'] = [
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

export const content: PetWaterIntakeLocaleContent = {
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
