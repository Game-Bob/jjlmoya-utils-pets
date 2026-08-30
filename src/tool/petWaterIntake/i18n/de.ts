import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'wasserbedarf-rechner-hunde-katzen';
const title = 'Täglicher Wasserbedarf Rechner für Hunde und Katzen';
const description = 'Berechnen Sie den täglichen Wasserbedarf Ihres Hundes oder Ihrer Katze basierend auf Gewicht, Fütterung, Aktivität und Umgebungstemperatur.';

const ui: PetWaterIntakeUI = {
  journeyHint: 'Wählen Sie das Tier aus, geben Sie das Körpergewicht ein und stellen Sie Futterart und Klima ein.',
  speciesLegend: 'Für wen ist der Wassernapf?',
  speciesDog: 'Hund',
  speciesCat: 'Katze',
  weightLabel: 'Körpergewicht',
  weightHint: 'Geben Sie das aktuelle gesunde Gewicht an.',
  weightKg: 'kg',
  dietLegend: 'Wie viel Wasser liefert das Futter?',
  dietDry: 'Überwiegend Trockenfutter',
  dietMixed: 'Mischfütterung',
  dietWet: 'Überwiegend Nassfutter',
  activityLegend: 'Aktivität heute',
  activityCalm: 'Ruhig',
  activityTypical: 'Normal',
  activityActive: 'Sehr aktiv',
  heatLegend: 'Wetter und Temperatur',
  heatNormal: 'Normal',
  heatWarm: 'Warm',
  heatHot: 'Sehr heiß',
  resultEyebrow: 'Wasserstandsanzeige',
  totalRangeLabel: 'Gesamter Wasserbedarf (alle Quellen)',
  drinkingRangeLabel: 'Richtwert für den Wassernapf',
  totalRangeHint: 'Täglicher Zielbereich inklusive Futterfeuchtigkeit.',
  drinkingRangeHint: 'Geschätzter Anteil, der getrunken werden sollte.',
  statusEveryday: 'Standardbedingungen',
  statusActive: 'Aktiver Tag',
  statusWarm: 'Warmes Wetter',
  statusDemanding: 'Hohe Anforderungen',
  statusDetailEveryday: 'Nutzt den Grundbedarf ohne zusätzliche Hitze- oder Aktivitätsfaktoren.',
  statusDetailActive: 'Bewegung erhöht den Bedarf. Stellen Sie stets frisches Wasser bereit.',
  statusDetailWarm: 'Hitze steigert den Verlust durch Hecheln. Schatten hat Priorität.',
  statusDetailDemanding: 'Kombination aus hoher Aktivität und Hitze. Beobachten Sie das Tier genau.',
  resultEmpty: 'Geben Sie ein gültiges Gewicht ein, um den Wasserbedarf anzuzeigen.',
  sceneAria: 'Wasserbehälter für das ausgewählte Tier',
  sceneTotal: 'GESAMTWASSER',
  noteTitle: 'Wassernäpfe ersetzen keine Diagnostik',
  noteText: 'Halten Sie immer frisches Wasser bereit. Bei plötzlichen Veränderungen der Trinkmenge suchen Sie einen Tierarzt auf.',
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    question: 'Wie viel Wasser sollte ein Hund oder eine Katze am Tag trinken?',
    answer: 'Tierärztliche Richtlinien der AAHA empfehlen einen Erhaltungsbedarf von ca. 60 mL pro kg Körpergewicht bei Hunden und 40 mL pro kg bei Katzen pro Tag. Die tatsächliche Trinkmenge schwankt je nach Futterart, Temperatur und Bewegung.',
  },
  {
    question: 'Reduziert Nassfutter die Trinkmenge aus dem Napf?',
    answer: 'Ja, Nassfutter besteht zu 75% bis 82% aus Feuchtigkeit und deckt einen Großteil des Tagesbedarfs ab. Tiere bei Nassfütterung trinken daher deutlich seltener zusätzlich aus der Wasserschale.',
  },
  {
    question: 'Wann sollte ich mir wegen des Trinkverhaltens Sorgen machen?',
    answer: 'Suchen Sie einen Tierarzt auf, wenn Sie plötzlichen extremen Durst (Polydipsie) oder völlige Wasserverweigerung (Adipsia) bemerken. Dies können Anzeichen für Diabetes oder Nierenerkrankungen sein.',
  },
  {
    question: 'Können Hitze und Bewegung den Wasserbedarf verdoppeln?',
    answer: 'Ja. Hohe Temperaturen und Bewegung erhöhen den Verdunstungsverlust durch Hecheln erheblich. Schattige Ruheplätze und kühles Trinkwasser sind dann essenziell.',
  },
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  { name: 'Tierart und Gewicht wählen', text: 'Wählen Sie Hund oder Katze und tragen Sie das aktuelle gesunde Körpergewicht in kg oder lb ein.' },
  { name: 'Futterart angeben', text: 'Wählen Sie Trockenfutter, Mischfütterung oder Nassfutter, um die Feuchtigkeit aus den Mahlzeiten einzurechnen.' },
  { name: 'Aktivität und Klima anpassen', text: 'Stellen Sie das Bewegungslevel und die Temperatur ein, um den Verlust durch Hecheln zu berücksichtigen.' },
  { name: 'Empfehlungen ablesen', text: 'Prüfen Sie den Gesamtwasserbedarf sowie den geschätzten Richtwert für die reine Trinkmenge aus dem Napf.' },
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Wichtige Richtlinien für den täglichen Wasserbedarf von Haustieren',
    items: [
      'Grundlegende Erhaltung: Hunde benötigen täglich ca. 60 mL/kg Körpergewicht; Katzen benötigen ca. 40 mL/kg gemäß AAHA-Empfehlungen.',
      'Einfluss der Ernährung: Feuchtfutter liefert 70-80% Feuchtigkeit und reduziert die Besuche am Wassernapf erheblich.',
      'Hitze & Bewegung: Durch Hecheln steigt der Verdunstungsverlust, was den täglichen Hydratationsbedarf spürbar erhöht.',
      'Gesundheitliche Warnzeichen: Plötzlicher starker Durst oder Verweigerung von Wasser erfordert sofortige tierärztliche Abklärung.',
      'Zugang zu Frischwasser: Mehrere saubere Wassernäpfe an ruhigen Orten fördern ein gesundes und regelmäßiges Trinkverhalten.',
    ],
  },
  {
    type: 'title',
    text: 'Tägliche Flüssigkeitsberechnung und Hydratation für Hunde und Katzen',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Eine ausreichende und kontinuierliche Hydratation von Hunden und Katzen ist eine grundlegende Voraussetzung für den Stoffwechsel, die Verdauung, die Gelenkschmierung, die Thermoregulation und die langfristige Nierenfunktion. Wasser macht etwa 60% bis 70% des gesamten Körpergewichts eines ausgewachsenen Haustieres aus, und selbst ein geringfügiges Flüssigkeitsdefizit kann lebenswichtige physiologische Prozesse beeinträchtigen. Die veterinärmedizinische Fachliteratur der American Animal Hospital Association (AAHA) legt den täglichen Grundbedarf auf ca. 60 mL pro Kilogramm Körpergewicht bei Hunden und 40 mL pro Kilogramm bei Katzen fest.',
  },
  {
    type: 'paragraph',
    html: 'Diese wissenschaftlichen Orientierungswerte stellen jedoch den Gesamtwasserbedarf dar und nicht die reine Trinkmenge aus der Wasserschale. Die tägliche Flüssigkeitsaufnahme eines Tieres setzt sich aus drei Hauptquellen zusammen: dem direkt getrunkenen Wasser, der im kommerziellen oder selbst zubereiteten Futter enthaltenen Feuchtigkeit sowie einer kleineren Menge an Stoffwechselwasser, das bei der zellulären Atmung entsteht. Dieses Verständnis hilft Haltern, das Trinkverhalten realistisch einzuschätzen und unnötige Sorgen bei Fütterung feuchter Nahrung zu vermeiden.',
  },
  {
    type: 'title',
    text: 'Gesamtwasserbedarf versus reine Trinkmenge aus dem Wassernapf',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Die Futterform spielt eine entscheidende Rolle bei der Bestimmung, wie viel Wasser ein Haustier aktiv aus dem Napf aufnehmen muss. Herkömmliches Trockenfutter enthält meist nur 6% bis 10% Feuchtigkeit, weshalb das Tier fast seinen gesamten täglichen Flüssigkeitsbedarf über den Wassernapf decken muss. Nassfutter aus Dosen oder Beuteln hingegen besteht zu 75% bis 82% aus Wasser. Eine Katze oder ein Hund bei reiner Nassfütterung deckt somit bereits den Großteil des Tagesbedarfs über die Mahlzeiten ab, wodurch zusätzliche Trinkversuche selten werden.',
  },
  {
    type: 'table',
    headers: ['Einflussfaktor', 'Wirkung auf Hydratation', 'Wichtiger klinischer Kernaspekt'],
    rows: [
      ['Tierart & Rasse', 'Bestimmt den Grundbedarf pro kg', 'Hunde-Basis ~60 mL/kg; Katzen-Basis ~40 mL/kg'],
      ['Körpergewicht', 'Skaliert die benötigte Gesamtmenge', 'Bei Übergewicht das gesundes Zielgewicht als Basis nutzen'],
      ['Futterfeuchtigkeit', 'Verändert die Wasserzufuhr über Mahlzeiten', 'Nassfutter deckt bis zu 80% des täglichen Flüssigkeitsbedarfs'],
      ['Klima & Aktivität', 'Erhöht den Verlust durch Atmung & Hecheln', 'Höhere Temperaturen erfordern deutlich mehr frisches Trinkwasser'],
    ],
  },
  {
    type: 'title',
    text: 'Praktische Empfehlungen für das tägliche Hydratationsmanagement',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Tierhalter sollten sich darauf konzentrieren, stets freien und uneingeschränkten Zugang zu sauberem, frischem Wasser zu gewährleisten, anstatt zu versuchen, eine starre numerische Zielmenge zu erzwingen. Wassernäpfe sollten täglich gründlich gereinigt und mit neuem Wasser befüllt werden. Insbesondere bei Katzen, die von wüstenbewohnenden Vorfahren abstammen und oft ein geringes Durstgefühl zeigen, können Trinkbrunnen, breite flache Schalen gegen Schnurrhaarreizung und mehrere Trinkstationen im Haus das freiwillige Trinken wirksam fördern.',
  },
  {
    type: 'card',
    title: 'Management bei Trockenfütterung',
    icon: 'mdi:food-drumstick',
    html: 'Tiere bei Trockenfütterung sind vollständig auf das Trinken aus der Wasserschale angewiesen. Sorgen Sie dafür, dass die Näpfe an ruhigen, gut zugänglichen Orten abseits von Katzentoiletten stehen.',
  },
  {
    type: 'card',
    title: 'Management bei Nassfütterung',
    icon: 'mdi:food-drumstick',
    html: 'Nassfutter bietet eine hervorragende kontinuierliche Hydratation. Auch wenn die Tiere seltener am Napf trinken, muss rund um die Uhr frisches Trinkwasser zur Verfügung stehen.',
  },
  {
    type: 'card',
    title: 'Hitze und sportliche Aktivität',
    icon: 'mdi:weather-sunny',
    html: 'Bei hohen Sommerwerten oder intensiver Bewegung steigt der Flüssigkeitsverlust durch Hecheln rasch an. Stellen Sie schattige Ruheplätze und kühles Wasser bereit.',
  },
  {
    type: 'tip',
    title: 'Tierärztliche Warnsignale und Symptome',
    html: 'Eine plötzliche Veränderung des Trinkverhaltens - sei es stark gesteigerter Durst (Polydipsie) oder völlige Wasserverweigerung - ist ein wichtiges klinisches Symptom. Erkrankungen wie Niereninsuffizienz, Diabetes mellitus oder Schilddrüsenüberfunktion äußern sich häufig über den Durst. Suchen Sie bei anhaltenden Auffälligkeiten sofort einen Tierarzt auf.',
  },
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
