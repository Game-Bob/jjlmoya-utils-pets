import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'haustier-transportbox-groessenplaner';
const title = 'Haustier Transportbox Größenplaner';
const description = 'Berechnen Sie die passenden Innenmaße einer Transportbox für Hund oder Katze anhand von sechs Körpermaßen, inklusive Flugreise-Check und Komfortliste.';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: 'Messen Sie zuerst. Kaufen Sie mit Sicherheit.',
  journeyHint: 'Wählen Sie das Haustier und die Reiseart, geben Sie die Maße ein und nutzen Sie die Skizze als Orientierung für den Innenraum der Transportbox.',
  unitLegend: 'Anzeigeeinheiten',
  speciesStep: 'Beginnen Sie mit dem Tier',
  metricUnit: 'Metrisch',
  imperialUnit: 'Imperial',
  speciesLegend: 'Wer reist mit?',
  speciesDog: 'Hund',
  speciesCat: 'Katze',
  modeLegend: 'Wie wird gereist?',
  modeCar: 'Auto',
  modeAir: 'Flugzeug',
  measurementsLegend: 'Messen Sie Ihr Haustier',
  noseTailLabel: 'Nasenspitze bis Rutenansatz',
  noseTailHint: 'Messen Sie ohne die Krümmung der Rute',
  elbowHeightLabel: 'Boden bis Ellenbogen',
  shoulderWidthLabel: 'Schulterbreite',
  standingHeightLabel: 'Höhe im Stehen',
  beddingLabel: 'Dicke der Decke oder Einlage',
  weightLabel: 'Gewicht des Haustiers',
  cmUnit: 'cm',
  inchUnit: 'in',
  kgUnit: 'kg',
  lbUnit: 'lb',
  snubNosedLabel: 'Kurzschnäuzige Rasse',
  snubNosedHint: 'Bei Flugreisen gelten IATA Anpassungen. Sprechen Sie mit Ihrem Tierarzt und der Fluggesellschaft.',
  presetLegend: 'Starten Sie mit einem Profil',
  presetCat: 'Katze',
  presetSmallDog: 'Kleiner Hund',
  presetMediumDog: 'Mittlerer Hund',
  presetLargeDog: 'Großer Hund',
  resultEyebrow: 'Empfohlener Messrahmen',
  resultTitle: 'Ausreichend Raum zum Umdrehen',
  resultDimensionLabel: 'Mindestinnenmaße für den Start',
  lengthLabel: 'Länge',
  widthLabel: 'Breite',
  heightLabel: 'Höhe',
  petWeightLabel: 'Gewicht des Tieres',
  journeyLabel: 'Reiseart',
  statusComfort: 'Komfort Basisstandard',
  statusAirReview: 'Flugreise Prüfung',
  statusSnub: 'Anpassung für Kurzschnauzer',
  resultDetail: 'Prüfen Sie den tatsächlichen Innenraum, die Türöffnung, Belüftung und Bestimmungen vor dem Kauf oder der Abreise.',
  checklistTitle: 'Die vier Körperprüfungen',
  checklistStand: 'Das Tier kann aufrecht stehen und sitzen, ohne dass das Dach den Kopf berührt.',
  checklistTurn: 'Das Tier kann sich im Stehen mühelos umdrehen.',
  checklistLie: 'Das Tier kann in natürlicher Haltung auf der Decke liegen.',
  checklistAirline: 'Bei Flugreisen sind Fluggesellschaftsregeln, Belüftung, Verriegelung und Etiketten zu prüfen.',
  invalidInput: 'Bitte geben Sie für alle Maße und das Gewicht positive Werte ein.',
  noteTitle: 'Nutzen Sie dies als Orientierung, nicht als Flugzulassung',
  noteText: 'Bestimmungen variieren je nach Fluggesellschaft, Fahrzeug und Tier. Ein Tierarzt sollte die gesundheitliche Eignung prüfen, besonders bei stumpfschnäuzigen Rassen.',
  methodTitle: 'Berechnungsmethode',
  methodText: 'Die Berechnung basiert auf den IATA Richtlinien: Länge entspricht Nase bis Rutenansatz plus halbe Ellenbogenhöhe, Breite der doppelten Schulterbreite und Höhe der Stehhöhe plus Deckenstärke.',
  blueprintLabel: 'Maßskizze der Transportbox mit Haustier und Führungslinien für Länge und Höhe',
  dimensionInside: 'Innenabmessungen',
  checkMark: 'OK',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: 'Wie messe ich meinen Hund oder meine Katze richtig für eine Transportbox?',
    answer: 'Messen Sie von der Nasenspitze bis zum Rutenansatz, vom Boden bis zum Ellenbogengelenk, die breiteste Stelle der Schultern sowie die Höhe vom Boden bis zur Kopfspitze oder den Ohren. Die Dicke der Liegedecke wird separat hinzugerechnet.',
  },
  {
    question: 'Welche Innenmaße berechnet dieser Planer?',
    answer: 'Er berechnet die Mindestinnenlänge aus Körperlänge plus halber Ellenbogenhöhe, die Innenbreite als doppelte Schulterbreite und die Innenhöhe aus Stehhöhe plus Deckenstärke.',
  },
  {
    question: 'Garantieren die Ergebnisse die Zulassung bei einer Fluggesellschaft?',
    answer: 'Nein. Der Reisemodus wendet IATA Referenzwerte an, jedoch legt jede Fluggesellschaft eigene Bestimmungen fest. Prüfen Sie stets die aktuellen Vorgaben der Airline vor der Buchung.',
  },
  {
    question: 'Warum benötigen kurzschnäuzige Rassen bei Flugreisen mehr Platz?',
    answer: 'IATA Richtlinien empfehlen für brachycephale Rassen größere Transportboxen, um Überhitzung und Atembeschwerden vorzubeugen. Der Rechner berechnet einen Zuschlag von 10% zur Orientierung.',
  },
  {
    question: 'Sollte eine Autobox so groß wie möglich sein?',
    answer: 'Nein. Die Box muss ausreichend Platz zum Aufstehen, Sitzen, Drehen und Liegen bieten, sollte jedoch im Fahrzeug stabil gesichert werden können und nicht zu viel Spielraum bei Bremsmanövern lassen.',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: 'Reiseart wählen', text: 'Wählen Sie zwischen Auto und Flugzeug, um die entsprechenden Vorgaben zu berücksichtigen.' },
  { name: 'Sechs Maße eingeben', text: 'Messen Sie Körperlänge, Ellenbogenhöhe, Schulterbreite, Stehhöhe, Deckendicke und Gewicht Ihres Tieres im ruhigen Zustand.' },
  { name: 'Innenmaße ablesen', text: 'Nutzen Sie Länge, Breite und Höhe als Mindestmaße beim Vergleich kommerzieller Boxen.' },
  { name: 'Bestimmungen prüfen', text: 'Prüfen Sie vor dem Kauf Verriegelung, Belüftung und Vorgaben von Fluggesellschaft oder Tierarzt.' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Wichtige Hinweise zur Auswahl der passenden Transportbox',
    items: [
      'Messen Sie das Tier anstelle sich nur am reinen Körpergewicht zu orientieren.',
      'Nutzen Sie reale Innenmaße zum Vergleich kommerzieller Transportboxen.',
      'Prüfen Sie Belüftung, Verriegelung und Stabilität des Behälters.',
      'Flugreisen erfordern besondere Vorbereitung und eine Tierarztberatung.',
    ],
  },
  { type: 'title', text: 'So planen Sie die Abmessungen der Transportbox', level: 2 },
  {
    type: 'paragraph',
    html: 'Eine geeignete Transportbox muss dem Tier vier Grundbewegungen ermöglichen: aufrechtes Stehen ohne den Kopf zu krümmen, aufrechtes Sitzen, müheloses Umdrehen um die eigene Achse und natürliches Liegen in entspannter Haltung. Dieser Rechner ermittelt auf Basis der individuellen Körpermaße die passenden Innenabmessungen für Länge, Breite und Höhe. Dies ist besonders nützlich, wenn Hersteller nur Außenmaße angeben oder die Box abgerundete Ecken aufweist.',
  },
  {
    type: 'paragraph',
    html: 'Die berechneten Werte stellen das reine nutzbare Innenmaß dar. Achten Sie beim Kauf darauf, dass dicke Liegedecken, Futternäpfe oder schräge Außenwände das tatsächliche Innenvolumen verringern können. Sollte ein Modell an einer Stelle knapp bemessen sein, empfiehlt sich die nächstgrößere Variante.',
  },
  { type: 'title', text: 'Bedeutung der einzelnen Körpermaße', level: 2 },
  {
    type: 'table',
    headers: ['Körpermaß', 'Bedeutung für das Tier', 'Verwendung im Rechner'],
    rows: [
      ['Nase bis Rutenansatz', 'Bestimmt die Grundlänge ohne Rute.', 'Innenlänge'],
      ['Boden bis Ellenbogen', 'Ermöglicht Bewegungsfreiheit beim Drehen.', 'Innenlänge'],
      ['Schulterbreite', 'Garantiert ausreichende Breite an der stärksten Stelle.', 'Innenbreite'],
      ['Stehhöhe', 'Schützt Kopf und Ohren vor dem Boxendach.', 'Innenhöhe'],
      ['Deckendicke', 'Sichert die effektive Höhe nach Einlegen der Decke.', 'Innenhöhe'],
      ['Körpergewicht', 'Dient der Überprüfung der maximalen Traglast.', 'Prüfung'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Die Berechnung basiert auf den offiziellen IATA Vorgaben für den Transport von Lebendtieren. Die Innenlänge entspricht der Körperlänge plus der halben Ellenbogenhöhe, die Breite der doppelten Schulterbreite und die Höhe der Stehhöhe zuzüglich der Deckendicke. Diese Parameter garantieren Wohlbefinden und Sicherheit während der gesamten Reise.',
  },
  { type: 'title', text: 'Besonderheiten bei Flugreisen und Stumpfschnauzen', level: 2 },
  {
    type: 'paragraph',
    html: 'Eine reine Maßberechnung ersetzt nicht die formelle Freigabe durch die Fluggesellschaft. Faktoren wie Flugzeugtyp, Temperatur und Kennzeichnung sind entscheidend. Kurzschnäuzige Rassen benötigen wegen des Risikos von Hitzestress mehr Raum und Belüftung. Erkundigen Sie sich rechtzeitig vor Abflug bei Ihrer Airline und Ihrem Tierarzt.',
  },
  {
    type: 'tip',
    title: 'Praktische Passformprüfung im Alltag',
    html: 'Setzen Sie das Tier in ruhiger Umgebung in die Box und beobachten Sie die Bewegungsfreiheit für einige Minuten. Das Tier sollte sich ungehindert drehen können. Wenn es eingeengt wirkt, wählen Sie eine Nummer größer.',
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
