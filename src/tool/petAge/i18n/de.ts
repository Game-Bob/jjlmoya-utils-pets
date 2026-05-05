import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'haustier-alter-rechner';
const title = 'Haustier Alter Rechner';
const description = 'Entdecken Sie das wahre Alter Ihres Hundes oder Ihrer Katze in Menschenjahren. Vergessen Sie die "Mal 7 Regel". Nutzen Sie unseren auf aktueller Veterinärwissenschaft basierenden Rechner.';

const ui: PetAgeUI = {
  toolTitle: 'Altersrechner',
  toolSubtitle: 'Wie viele Menschenjahre hat Ihr pelziger Freund wirklich?',
  petNameLabel: 'Name (Optional)',
  petNamePlaceholder: 'z.B. Buddy',
  petTypeDog: 'Hund',
  petTypeCat: 'Katze',
  sizeSmall: 'Klein',
  sizeMedium: 'Mittel',
  sizeLarge: 'Groß',
  sizeGiant: 'Riesig',
  birthYearLabel: 'Geburtsjahr',
  humanAgeLabel: 'Das Menschenalter von',
  humanAgeUnit: 'Jahre',
  humanAgeYears: 'Jahre',
  lifeStageLabel: 'Lebensphase',
  milestoneLabel: 'Nächster Meilenstein',
  shareBtn: 'Ergebnis teilen',
  shareSuccess: 'Kopiert! Karte wird geöffnet...',
  humanAgeTitle: 'Magisches Alter',
  recalculateBtn: 'Weiteres Alter berechnen',
  realAgeLabel: 'Wahre Alter',
  defaultPetName: 'Ihr Haustier',
  stageDogPuppy: 'Verspielter Welpe',
  stageDogTeen: 'Rebellischer Teenager',
  stageDogAdult: 'Fitter Erwachsener',
  stageDogMature: 'Ehrwürdige Reife',
  stageDogSenior: 'Weiser Senior',
  stageCatKitten: 'Kindliche Neugier',
  stageCatYouth: 'Feline Jugend',
  stageCatReign: 'Häusliche Herrschaft',
  stageCatVeteran: 'Verwöhnter Veteran',
  stageCatVenerable: 'Ehrwürdiger Ältester',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: 'Ist es wahr, dass ein Hundejahr sieben Menschenjahren entspricht?',
    answer: 'Nein. Das ist eine vereinfachte Regel, die die moderne Veterinärwissenschaft widerlegt hat. Hunde reifen in den ersten zwei Jahren sehr schnell, und der Prozess verlangsamt sich dann, wobei er je nach Gewicht und Rasse stark variiert. Neue Studien zur DNA-Methylierung haben präzisere Altersformeln ermöglicht, die die wahre biologische Entwicklung besser widerspiegeln.',
  },
  {
    question: 'Warum altern große Hunde schneller?',
    answer: 'Große Hunderassen haben einen beschleunigten Stoffwechsel und ein schnelleres Wachstum, was zu größerem oxidativem Stress in ihren Zellen führt. Das bedeutet, dass ihre Lebenserwartung kürzer ist als die von kleinen Hunden. Riesenzuchtrassen können bereits mit 5 Menschenjahren den Seniorstatus erreichen, während kleine Rassen dies erst mit 10 oder 11 Jahren tun.',
  },
  {
    question: 'Wie altern Katzen im Vergleich zum Menschen?',
    answer: 'Eine Katze beendet ihre Kindheit mit einem Monat, ihre Adoleszenz mit 6 Monaten und erreicht das Erwachsenenalter (entspricht 24 Menschenjahren) mit 2 Jahren. Danach entspricht jedes Katzenjahr etwa 4 Menschenjahren. Dieses Muster ist bei verschiedenen Katzenrassen ziemlich konsistent, im Gegensatz zu der signifikanten Variation bei Hunden.',
  },
  {
    question: 'Ab welchem Alter gilt ein Haustier als Senior?',
    answer: 'Im Allgemeinen gilt ein Hund als Senior, wenn er 75% seiner erwarteten Lebensspanne erreicht hat. Bei Katzen ist dies in der Regel ab 7 bis 11 Jahren, abhängig von ihrem Gesundheitszustand. Regelmäßige tierärztliche Untersuchungen werden in dieser Phase immer kritischer, um altersbedingte Erkrankungen wie Nierenerkrankungen oder kognitiven Verfall zu überwachen.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Tierart auswählen', text: 'Wählen Sie Hund oder Katze, um die richtige biologische Formel für ihre spezifische Stoffwechselrate anzuwenden.' },
  { name: 'Größe angeben (nur Hunde)', text: 'Bei Hunden ist das Gewicht der Schlüsselfaktor für die Bestimmung des biologischen Alters. Geben Sie an, ob es klein (bis 10 kg), mittel (10 bis 25 kg), groß (25-45 kg) oder riesig (über 45 kg) ist.' },
  { name: 'Geburtsjahr eingeben', text: 'Geben Sie das Geburtsjahr Ihres Haustiers ein, um sein chronologisches Alter zu berechnen. Unser System verarbeitet diese Informationen anhand der etablierten Alterungskurven.' },
  { name: 'Lebensphase analysieren', text: 'Überprüfen Sie das Ergebnis, um zu wissen, ob Ihr Haustier im Vergleich zum Menschen im Säuglings-, Jugend-, Erwachsenen- oder Seniorenstadium ist.' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Was Sie über das Altern von Haustieren wissen müssen',
    items: [
      'Die "Regel von 7" ist ein Mythos: Hunde reifen in den ersten 2 Jahren exponentiell.',
      'Ein 1-jähriger Hund ist wie 15 Menschenjahre; ein 2-jähriger entspricht 24 Jahren.',
      'Große Hunde altern nach dem 2. Lebensjahr schneller als kleine aufgrund biologischer Belastung.',
      'Katzen folgen einer lineareren Kurve: Jedes Katzenjahr entspricht nach dem 2. Jahr 4 Menschenjahren.',
      'Das biologische Alter ist ein besserer Prädiktor für Gesundheitsbedürfnisse als das chronologische Alter allein.',
      'Regelmäßige Vorsorgeuntersuchungen helfen, altersbedingte Probleme frühzeitig zu erkennen.',
    ],
  },
  { type: 'title', text: 'Die wissenschaftliche Wahrheit über das Alter Ihres Haustieres', level: 2 },
  {
    type: 'paragraph',
    html: 'Wussten Sie, dass eine 2-jährige Katze bereits die Reife einer 24-jährigen Person hat? Erfahren Sie, warum die Multiplikationsregel mit 7 ein Mythos ist und wie das Verständnis der biologischen Realität die Pflege Ihres Haustieres verbessern kann. Der alte Mythos, dass "1 Hundejahr 7 Menschenjahren entspricht", ist eine Vereinfachung, die die massiven Entwicklungsveränderungen in der frühen Lebensphase nicht berücksichtigt. Haustiere reifen in den ersten zwei Lebensjahren mit atemberaubender Geschwindigkeit und erreichen sehr schnell die sexuelle und körperliche Reife. Danach flacht diese Alterungskurve ab und verlangsamt sich erheblich.',
  },
  {
    type: 'paragraph',
    html: 'Moderne Forschung, einschließlich Studien zu epigenetischen Uhren und DNA-Methylierung, hat uns eine viel differenziertere Sichtweise ermöglicht. Diese Studien zeigen, dass sich die chemischen Modifikationen an der DNA eines Hundes im Laufe seines Lebens unterschiedlich schnell ändern. Im frühen Welpenalter sind diese Veränderungen schnell und intensiv, während die metabolischen Verschiebungen im Erwachsenenalter eher graduell verlaufen. Dieses Verständnis ermöglichte es Wissenschaftlern, logarithmische Formeln zu entwickeln, die weit genauer sind als jede lineare Multiplikation.',
  },
  { type: 'title', text: 'Die Wissenschaft hinter der Berechnung', level: 3 },
  {
    type: 'paragraph',
    html: 'Dieses Tool nutzt die offiziellen Richtlinien der <strong>American Animal Hospital Association (AAHA)</strong> und die neuesten Studien zur DNA-Methylierung bei Hunden, um Ihnen die genaueste Schätzung zu geben. Durch die Kombination größenspezifischer Daten mit rassenunabhängigen biologischen Markern erstellen wir ein umfassendes Modell der Haustierentwicklung. Dieser Ansatz erkennt an, dass ein Chihuahua und eine Deutsche Dogge von Geburt an völlig unterschiedliche Lebenserfahrungen und Alterungsprofile haben.',
  },
  {
    type: 'paragraph',
    html: 'Das Verständnis dieser Unterschiede ist für verantwortungsbewusste Haustierbesitzer von entscheidender Bedeutung. Es ermöglicht ein besseres Timing tierärztlicher Interventionen, wie z.B. die Umstellung auf eine Seniorendiät oder den Beginn präventiver Gelenkergänzungen. Unser Rechner schließt die Lücke zwischen komplexer Wissenschaft und praktischem Alltagswissen für Tierliebhaber weltweit.',
  },
  {
    type: 'table',
    headers: ['Art', 'Jahr 1', 'Jahr 2', 'Ab Jahr 3'],
    rows: [
      ['Katze', '15 Menschenjahre', '24 Menschenjahre', '+4 Jahre pro Jahr'],
      ['Kleiner Hund', '15 Menschenjahre', '24 Menschenjahre', '+5 Jahre pro Jahr'],
      ['Mittlerer Hund', '15 Menschenjahre', '24 Menschenjahre', '+6 Jahre pro Jahr'],
      ['Großer Hund', '15 Menschenjahre', '24 Menschenjahre', '+7 Jahre pro Jahr'],
      ['Riesenhund', '15 Menschenjahre', '24 Menschenjahre', '+8 Jahre pro Jahr'],
    ],
  },
  { type: 'title', text: 'Lebensphasen: Was Sie erwartet und wie Sie sich vorbereiten', level: 3 },
  {
    type: 'paragraph',
    html: 'Das wahre Alter Ihres Haustieres zu kennen, hilft Ihnen, seine medizinischen und emotionalen Bedürfnisse in jeder Phase zu verstehen. Genau wie Menschen verschiedene Lebensstadien durchlaufen, erleben Hunde und Katzen beim Aufwachsen spezifische physiologische und psychologische Veränderungen. Achten Sie auf diese Übergänge, um zum richtigen Zeitpunkt die richtige Unterstützung zu bieten.',
  },
  {
    type: 'card',
    title: 'Welpe oder Junior (0 bis 1 Jahr)',
    icon: 'mdi:star-shooting',
    html: 'Dies ist die Phase des explosiven Wachstums. Ihre Knochen wachsen unglaublich schnell, Milchzähne fallen aus und ihr Gehirn saugt Informationen auf wie ein Schwamm. Impfungen und frühe Sozialisierung sind hier entscheidend. Dies ist auch der beste Zeitpunkt, um gute Gewohnheiten für das ganze Leben zu etablieren.',
  },
  {
    type: 'card',
    title: 'Erwachsen (2 bis 6 Jahre)',
    icon: 'mdi:shield-check',
    html: 'Dies ist der Höhepunkt der körperlichen und geistigen Form. Die Persönlichkeit ist nun gefestigt und sie sind meist am aktivsten. Ein goldener Moment für intensive Aktivitäten und die Aufrechterhaltung des Idealgewichts zur Vorbeugung zukünftiger Krankheiten. Regelmäßige Bewegung und ausgewogene Ernährung sind die Säulen der Gesundheit in diesen Jahren.',
  },
  {
    type: 'card',
    title: 'Senior (über 7 Jahre)',
    icon: 'mdi:heart-pulse',
    html: 'Graue Haare erscheinen an der Schnauze und das Tier schläft mehr. Der Stoffwechsel verlangsamt sich deutlich. Ab hier sollten tierärztliche Untersuchungen alle sechs Monate stattfinden. Achten Sie auf Anzeichen von Arthritis, Veränderungen der Zahngesundheit oder Verhaltensänderungen. Früherkennung ist der beste Weg, um eine hohe Lebensqualität zu erhalten.',
  },
  {
    type: 'tip',
    title: 'Tierärztlicher Rat zum Altern',
    html: 'Das berechnete Alter ist eine durchschnittliche biologische Schätzung. Faktoren wie Rasse, Genetik, Ernährung und Lebensstil können die tatsächliche Alterungsrate erheblich beeinflussen. Für eine personalisierte Beratung und eine umfassende Gesundheitsbewertung konsultieren Sie immer Ihren Tierarzt, der Ihren Begleiter am besten kennt.',
  },
];

const schemas: PetAgeLocaleContent['schemas'] = [
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

export const content: PetAgeLocaleContent = {
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
