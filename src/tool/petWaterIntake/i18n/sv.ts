import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'berakna-vattenbehov-hund-katt';
const title = 'Räknare för dagligt vattenbehov för hundar och katter';
const description = 'Beräkna det dagliga vattenbehovet för din hund eller katt baserat på kroppsvikt, foder, aktivitet och temperatur.';

const ui: PetWaterIntakeUI = {
  "journeyHint": "Välj djur, ange kroppsvikt och ställ in foder och väder för dagen.",
  "instantHint": "Varje val uppdaterar vattennivån direkt. Detta är en vägledande guideline.",
  "unitLegend": "Enheter",
  "metricUnit": "Metrisk",
  "imperialUnit": "Imperial",
  "speciesLegend": "Vem är vattenskålen till för?",
  "speciesDog": "Hund",
  "speciesCat": "Katt",
  "speciesDogMeta": "Underhållsriktlinje 60 mL per kg",
  "speciesCatMeta": "Underhållsriktlinje 40 mL per kg",
  "weightLabel": "Kroppsvikt",
  "weightHint": "Ange ditt djurs nuvarande hälsosamma vikt.",
  "weightKg": "kg",
  "weightLb": "lb",
  "dietLegend": "Hur mycket vatten kommer från fodret?",
  "dietDry": "Huvudsakligen torrfoder (kulor)",
  "dietDryMeta": "Det mesta vattnet dricks från skålen",
  "dietMixed": "Blandad utfodring",
  "dietMixedMeta": "En del av vattnet kommer från måltiderna",
  "dietWet": "Huvudsakligen våtfoder (burk/påse)",
  "dietWetMeta": "Fodret ger det mesta av fukten",
  "activityLegend": "Aktivitet idag",
  "activityCalm": "Lugn / Vila",
  "activityTypical": "Måttlig / Normal",
  "activityActive": "Intensiv / Mycket aktiv",
  "heatLegend": "Klimat och temperatur",
  "heatNormal": "Tempererat / Normalt",
  "heatWarm": "Varmt",
  "heatHot": "Mycket varmt / Heatwave",
  "resultEyebrow": "Uppskattad vattennivå",
  "totalRangeLabel": "Totalt vattenbehov (alla källor)",
  "drinkingRangeLabel": "Riktlinje för vattenskålen",
  "totalRangeHint": "Totalt dagligt intervall inklusive fukt från fodret.",
  "drinkingRangeHint": "Uppskattad andel som dricks direkt från skålen.",
  "statusEveryday": "Standardförhållanden",
  "statusActive": "Aktiv dag",
  "statusWarm": "Varmt väder",
  "statusDemanding": "Krävande förhållanden",
  "statusDetailEveryday": "Basunderhållsprofil utan extra faktorer för värme eller ansträngning.",
  "statusDetailActive": "Motion ökar vätskeförlusten. Se till att det alltid finns färskt vatten.",
  "statusDetailWarm": "Värme ökar flämtandet. Skugga och kyla har högsta prioritet.",
  "statusDetailDemanding": "Hög aktivitet och värme kombinerat. Håll noggrann uppsikt över djuret.",
  "resultEmpty": "Ange en giltig vikt för att se vattennivån.",
  "sceneAria": "Vattenbehållare för det valda djuret",
  "sceneTotal": "TOTALT VATTEN",
  "sceneBowl": "mitten av det dagliga intervallet",
  "methodTitle": "Beräkningsmetod",
  "methodText": "Enligt AAHA-riktlinjer på 60 mL/kg för hundar och 40 mL/kg för katter, anpassat efter foder och väder.",
  "noteTitle": "Vattenskålen ersätter inte en diagnos",
  "noteText": "Ha alltid rent färskt vatten tillgängligt. Kontakta veterinär vid plötsliga förändringar i törst.",
  "invalidWeight": "Ange en giltig kroppsvikt.",
  "weightRange": "Vikten måste vara mellan 0.5 kg och 100 kg."
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    "question": "Hur mycket vatten bör en hund eller katt dricka per dag?",
    "answer": "AAHA-riktlinjerna rekommenderar ett underhållsbehov på cirka 60 mL/kg per dag för hundar och 40 mL/kg för katter. Det varierar beroende på foder, motion och temperatur."
  },
  {
    "question": "Minskar våtfoder behovet av att dricka från skålen?",
    "answer": "Ja, våtfoder innehåller 75% till 82% vatten och täcker en stor del av vätskebehovet. Djur som äter våtfoder dricker mindre ur skålen."
  },
  {
    "question": "När bör jag vara orolig över vattenintaget?",
    "answer": "Kontakta veterinär om du märker en plötslig ökning av törst (polydipsi) eller vägran att dricka, vilket kan tyda på njursjukdom eller diabetes."
  },
  {
    "question": "Dubblar varmt väder vattenbehovet?",
    "answer": "Ja, flämtande i värme ökar vätskeförlusten. Se alltid till att färskt vatten och skugga finns tillgängligt."
  }
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  {
    "name": "Välj djurslag och vikt",
    "text": "Välj hund eller katt och ange hälsosam vikt i kg eller lb."
  },
  {
    "name": "Ange fodertyp",
    "text": "Välj torr, blandad eller våt mat för att beräkna vatten från måltider."
  },
  {
    "name": "Ställ in aktivitet och väder",
    "text": "Ställ in motionsnivå och temperatur för vätskeförlust."
  },
  {
    "name": "Se uppskattningarna",
    "text": "Kontrollera totalt vattenbehov samt uppskattad mängd att dricka från skålen."
  }
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Viktiga Riktlinjer för Hundars och Katters Dagliga Vattenbehov",
    "items": [
      "Basbehov underhåll: Hundar behöver ~60 mL/kg dagligen; katter behöver ~40 mL/kg dagligen enligt AAHA.",
      "Fodrets betydelse: Våtfoder ger 70-80% fuktighet, vilket avsevärt minskar drickandet ur skålen.",
      "Värme och motion: Flämtande ökar vätskeförlusten och höjer det dagliga hydreringsbehovet.",
      "Hälsovarning: Plötsliga ökningar eller minskningar i drickande kräver omedelbar veterinärbedömning.",
      "Färskt vatten: Flera rena vattenskålar på lugna platser främjar goda vätskevanor."
    ]
  },
  {
    "type": "title",
    "text": "Förstå det Dagliga Vätskebehovet för Hundar och Katter",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "En tillräcklig och kontinuerlig hydrering är absolut avgörande för metabolisk funktion, näringsupptag, ledsmörjning och långsiktig njurhälsa hos både hundar och katter. Vatten utgör mellan 60% och 70% av den totala kroppsvikten hos ett vuxet husdjur, och även en liten vätskebrist kan störa vitala fysiologiska processer. Den vetenskapliga litteraturen från American Animal Hospital Association (AAHA) sätter det dagliga underhållsbehovet till cirka 60 mL per kg kroppsvikt för hundar och 40 mL per kg för katter."
  },
  {
    "type": "paragraph",
    "html": "Dessa referenssiffror representerar dock det totala dagliga vätskebehovet och inte enbart den mängd djuret måste dricka direkt ur vattenskålen. Ett husdjurs totala intag av vätska härrör från tre skilda källor: dricksvatten ur skålen eller vattenfontänen, fukt som naturligt finns i kommersiellt eller hemlagat foder, samt metaboliskt vatten som bildas i cellerna under cellandningen. Att förstå denna skillnad lugnar djurägare när deras husdjur dricker mindre ur skålen vid utfodring med våtfoder."
  },
  {
    "type": "title",
    "text": "Totalt Vatten vs Intag från Skålen",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Fodertypen spelar en helt avgörande roll för hur mycket vatten djuret självmant söker upp och dricker ur skålen. Kommersiellt torrfoder innehåller endast 6% till 10% fukt, vilket tvingar djuret att dricka nästan hela sitt dagliga vätskebehov direkt ur skålen. I kontrast innehåller konserverat våtfoder eller blötmat mellan 75% och 82% vatten. En hund eller katt som huvudsakligen äter våtfoder får därmed i sig den största delen av sin hydrering i samband med måltiderna, vilket leder till sällsynta och fysiologiskt helt normala besök vid vattenskålen."
  },
  {
    "type": "table",
    "headers": [
      "Inmatningsfaktor",
      "Inverkan på Vätskebehov",
      "Klinisk Obs"
    ],
    "rows": [
      [
        "Djurslag",
        "Sätter basnivån",
        "Hund bas ~60 mL/kg; Katt bas ~40 mL/kg"
      ],
      [
        "Kroppsvikt",
        "Skalar total volym",
        "Använd målvikt för överviktiga djur"
      ],
      [
        "Fodrets Fukt",
        "Bestämmer andel från maten",
        "Våtfoder ger upp till 80% av vattnet"
      ],
      [
        "Aktivitet & Värme",
        "Ökar förluster från flämtande",
        "Höga temperaturer kräver mer vatten"
      ]
    ]
  },
  {
    "type": "title",
    "text": "Praktiska Riktlinjer för Vätskehantering",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Djurägare bör fokusera på fri tillgång till rent färskt vatten. För katter kan vattenfontäner eller breda skålar stimulera drickandet."
  },
  {
    "type": "card",
    "title": "Torrfoderdiet",
    "icon": "mdi:food-drumstick",
    "html": "Djur på torrfoder är starkt beroende av att dricka ur skålen. Se till att skålarna är rena och står på lugna platser."
  },
  {
    "type": "card",
    "title": "Våtfoderdiet",
    "icon": "mdi:food-drumstick",
    "html": "Våtfoder ger betydande fukt. Det är normalt att djur på våtfoder dricker mindre ur skålen, men färskt vatten måste alltid finnas."
  },
  {
    "type": "card",
    "title": "Värme och Aktiva Dagar",
    "icon": "mdi:weather-sunny",
    "html": "Vid värme ökar flämtande vätskeförlusten. Erbjud skugga och vattenpauser."
  },
  {
    "type": "tip",
    "title": "Veterinära Varningsflaggor",
    "html": "Plötsliga förändringar i dricksmönster - dricker mycket mer (polydipsi) eller vägrar dricka - kräver omedelbar veterinärkontakt."
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
