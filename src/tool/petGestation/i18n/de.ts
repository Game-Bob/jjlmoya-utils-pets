import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';

const slug = 'trachtigkeitsrechner-haustiere';
const title = 'Trächtigkeitsrechner für Haustiere';
const description = 'Schätzen Sie den Geburtstermin von Hund, Katze, Kaninchen oder Frettchen anhand des Deckdatums mit einem dokumentierten Zeitraum und tierärztlichen Hinweisen.';

const ui: PetGestationLocaleContent['ui'] = {
  "journeyHint": "Wählen Sie die Tierart, geben Sie das Deckdatum ein und folgen Sie dem Kompass zum erwarteten Geburtsfenster.",
  "instantHint": "Ändern Sie eine Einstellung und der Nistkalender aktualisiert sich sofort.",
  "speciesLegend": "Welche Haustierart ist das?",
  "speciesDog": "Hund",
  "speciesCat": "Katze",
  "speciesRabbit": "Kaninchen",
  "speciesFerret": "Frettchen",
  "speciesDogMeta": "58 bis 72 Tage",
  "speciesCatMeta": "64 bis 66 Tage",
  "speciesRabbitMeta": "Ca. 31 Tage",
  "speciesFerretMeta": "Ca. 42 Tage",
  "matingDateLabel": "Deckdatum",
  "matingDateHint": "Geben Sie das erste bekannte Deckdatum ein. Das Deckdatum ist eine Schätzung und kein Befruchtungstag.",
  "presetToday": "Heute",
  "presetWeekAgo": "Vor 7 Tagen",
  "presetFortnightAgo": "Vor 14 Tagen",
  "resultEyebrow": "Der Nistkompass zeigt",
  "dueDateLabel": "Typischer Geburtstermin",
  "windowLabel": "Erwarteter Zeitraum",
  "remainingLabel": "Tage bis zum Termin",
  "elapsedLabel": "Verstrichene Tage",
  "daysLabel": "Tage",
  "dayLabel": "Tag",
  "statusFuture": "Dieses Datum liegt in der Zukunft",
  "statusWaiting": "Trächtigkeitsperiode läuft",
  "statusWindow": "Geburtsfenster ist geöffnet",
  "statusLate": "Äußerer Schätzwert überschritten",
  "resultEmpty": "Ihr Geburtskompass erscheint hier.",
  "sampleLabel": "Beispielanzeige",
  "sceneMating": "DECKDATUM",
  "sceneToday": "Aktueller Verlauf",
  "sceneDue": "GEBURTTSZEITRAUM",
  "noteTitle": "Wichtiger Hinweis zur Gesundheit",
  "noteText": "Das Deckdatum stimmt nicht immer mit dem Eisprung oder der Befruchtung überein. Konsultieren Sie stets einen Tierarzt für Trächtigkeitsuntersuchungen und geburtshilfliche Begleitung.",
  "sourceTitle": "Methodik",
  "sourceText": "Die Hundespanne nutzt 58 bis 72 Tage ab Bedeckung, während Katzen, Kaninchen und Frettchen Richtwerte aus dem MSD Veterinary Manual verwenden.",
  "invalidDate": "Geben Sie ein gültiges Deckdatum ein.",
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    "question": "Wie genau ist der Trächtigkeitsrechner für Haustiere?",
    "answer": "Es handelt sich um eine orientierende Schätzung für die Vorbereitung und Planung. Bei Hündinnen kann das Deckdatum vom tatsächlichen Eisprung und der Befruchtung abweichen, da Spermien mehrere Tage im Genitaltrakt überleben können. Der Rechner zeigt daher einen realistischen Zeitraum anstelle eines fixen Datums. Ein Tierarzt kann den genauen Entwicklungsstand per Ultraschall oder Palpation bestimmen."
  },
  {
    "question": "Wie lange ist eine Hündin trächtig?",
    "answer": "Das MSD Veterinary Manual beschreibt einen Zeitraum von etwa 58 bis 72 Tagen ab der ersten Bedeckung, wenn der genaue Eisprungzeitpunkt unbekannt ist. Ist der Eisprung bekannt, verengt sich der Zeitraum auf 62 bis 64 Tage. Rasse, Wurfgröße und exakte Aufzeichnungen beeinflussen den praktischen Geburtsverlauf maßgeblich."
  },
  {
    "question": "Wie lange ist eine Katze trächtig?",
    "answer": "Die Trächtigkeit einer Katze dauert üblicherweise etwa 65 Tage. Veterinärmedizinische Quellen beschreiben den Geburtszeitraum meist zwischen 64 und 66 Tagen nach dem hormonellen Auslöser. Da Tierhalter meist nur das Deckdatum kennen, dient der Rechner als praktische Planungshilfe für das Wurfzimmer."
  },
  {
    "question": "Warum sind Kaninchen und Frettchen enthalten?",
    "answer": "Kaninchen und Frettchen sind beliebte Heimtiere mit gut dokumentierten Trächtigkeitsdauern. Kaninchen tragen etwa 31 Tage und Frettchen etwa 42 Tage. Der Rechner bietet für diese Tierarten transparente und fundierte Anhaltspunkte für die Nistvorbereitung."
  },
  {
    "question": "Wann sollte ich einen Tierarzt kontaktieren?",
    "answer": "Wenden Sie sich an einen Tierarzt, wenn die Trächtigkeit das äußere Zeitfenster überschreitet, die Geburt stagniert, starke Schmerzen, Blutungen oder auffälliger Ausfluss auftreten. Die Gesundheit des Muttertiers und der Welpen geht jedem Kalenderwert vor."
  }
];

const howTo: PetGestationLocaleContent['howTo'] = [
  {
    "name": "Tierart auswählen",
    "text": "Wählen Sie Hund, Katze, Kaninchen oder Frettchen aus, um das entsprechende Trächtigkeitsprofil anzuwenden."
  },
  {
    "name": "Deckdatum eingeben",
    "text": "Geben Sie das erste bekannte Deckdatum ein. Bei mehreren Deckungen wählen Sie das mit dem Tierarzt besprochene Datum."
  },
  {
    "name": "Kompass ablesen",
    "text": "Überprüfen Sie den errechneten typischen Geburtstermin, den erwarteten Zeitraum und die verstrichenen Trächtigkeitstage."
  },
  {
    "name": "Verantwortungsvoll vorbereiten",
    "text": "Nutzen Sie die Ergebnisse zur Vorbereitung der Wurfkiste, für Fragen an die Praxis und zur Vorbereitung auf eventuelle Notfälle."
  }
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Trächtigkeitsdaten für Haustiere auf einen Blick",
    "items": [
      "Geben Sie das Deckdatum ein und wählen Sie die Haustierart für eine präzise zeitliche Orientierung.",
      "Hunde erhalten einen breiteren Schätzzeitraum, da Bedeckung, Eisprung und Befruchtung zeitlich auseinanderliegen können.",
      "Katzen, Kaninchen und Frettchen nutzen wissenschaftlich fundierte Richtwerte aus dem MSD Veterinary Manual.",
      "Die Berechnung dient der Geburtsvorbereitung und ersetzt keinesfalls eine fachkundige Untersuchung durch den Tierarzt."
    ]
  },
  {
    "type": "title",
    "text": "Wie der Trächtigkeitsrechner für Haustiere funktioniert",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Dieser Trächtigkeitsrechner wandelt das von Ihnen beobachtete Deckdatum in einen übersichtlichen Geburtskalender um. Er addiert die typspezifische Tragzeit der gewählten Tierart und weist sowohl einen mittleren Richttermin als auch den erwarteten Geburtszeitraum aus. Diese Unterscheidung ist essenziell: Der Tag des Deckakts ist nicht zwangsläufig der Befruchtungstag, und die Fortpflanzungsbiologie von Hunden unterscheidet sich deutlich von der von Katzen oder Kleinsäugern. Das Tool unterstützt Tierhalter dabei, Vorbereitungen rechtzeitig zu treffen und Anzeichen für tierärztlichen Handlungsbedarf frühzeitig zu erkennen."
  },
  {
    "type": "paragraph",
    "html": "Der visuelle Kompass ordnet das Deckdatum am Startpunkt eines kreisförmigen Zeitstrahls ein. Der farbige Bogen wächst mit jedem verstrichenen Tag an, während im Zentrum die Anzahl der Tage angezeigt wird. Sobald das erwartete Geburtsfenster erreicht ist, ändert sich der Statuswert. So lässt sich der Fortschritt der Trächtigkeit sofort erfassen, ohne komplexe Tabellen durchsuchen zu müssen. Bei Überschreiten des Rahmens werden Halter sensibilisiert, Rücksprache zu halten."
  },
  {
    "type": "title",
    "text": "Dokumentierte Trächtigkeitsprofile der Tierarten",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Tierart",
      "Typische Tragzeit",
      "Schätzung ab Bedeckung"
    ],
    "rows": [
      [
        "Hund",
        "Ca. 63 Tage",
        "58 bis 72 Tage"
      ],
      [
        "Katze",
        "Ca. 65 Tage",
        "64 bis 66 Tage"
      ],
      [
        "Kaninchen",
        "Ca. 31 Tage",
        "31 Tage"
      ],
      [
        "Frettchen",
        "Ca. 42 Tage",
        "42 Tage"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "Das Hundeprofil erfordert die größte Aufmerksamkeit. Veterinärmedizinische Leitlinien betonen, dass die Trächtigkeitsdauer bei Hündinnen je nach Bezugspunkt variiert. Eine Zeitspanne von der Bedeckung an ist im Alltag ehrlicher als ein einzelnes fixes Datum. Bei Katzen, Kaninchen und Frettchen basieren die Werte auf wissenschaftlichen Standardreferenzen zur Geburtsplanung und Vorbereitung der Nistumgebung."
  },
  {
    "type": "title",
    "text": "Vorbereitungen vor dem erwarteten Geburtsfenster",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Nutzen Sie die Schätzung zur rechtzeitigen Geburtsvorbereitung. Stellen Sie sicher, dass eine geeignete Wurfkiste an einem ruhigen Ort bereitsteht, halten Sie Notfallnummern der Tierklinik griffbereit und achten Sie auf Anzeichen der bevorstehenden Geburt. Treffen Sie alle Vorbereitungen in Absprache mit Ihrem Tierarzt bezüglich Ernährung, Wurmfürsorge und Pflege."
  },
  {
    "type": "tip",
    "title": "Die Gesundheit des Tieres steht immer an erster Stelle",
    "html": "Suchen Sie bei Schmerzen, deutlicher Schwäche, Blutungen, unnormalem Ausfluss oder Verzug über den Schätzzeitraum hinaus umgehend tierärztliche Hilfe auf."
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
