import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'gefahrliche-lebensmittel-hunde-katzen-prufer';
const title = 'Prüfer für gefährliche Lebensmittel bei Hunden und Katzen';
const description = 'Prüfen Sie häufige Futtermittelbelastungen bei Hunden und Katzen, verstehen Sie Warnzeichen und wissen Sie, wann ein Tierarzt zu kontaktieren ist.';

const ui: PetToxicityUI = {
  "journeyHint": "Wählen Sie das Tier, öffnen Sie den Lebensmittelatlas und lesen Sie die artspezifische Warnung vor der weiteren Entscheidung.",
  "speciesLabel": "Tierart",
  "speciesDog": "Hund",
  "speciesCat": "Katze",
  "speciesDogMeta": "Hundeprofil",
  "speciesCatMeta": "Katzenprofil",
  "foodLabel": "Lebensmittel oder Zutat",
  "foodPlaceholder": "Wählen Sie ein Lebensmittel",
  "foodMenuHint": "Die Liste ändert sich mit der Tierart, da das Risiko artspezifisch ist.",
  "resultEyebrow": "Der Lebensmittelatlas zeigt",
  "resultEmpty": "Wählen Sie ein Lebensmittel, um die Sicherheitskarte zu öffnen.",
  "sceneLabel": "Expositionskarte",
  "sceneReady": "Wählen Sie ein Lebensmittel",
  "sceneSelected": "Artspezifische Karte geöffnet",
  "riskCritical": "Dringendes Bedenken",
  "riskHigh": "Hohes Bedenken",
  "riskCaution": "Vorsicht",
  "riskUnknown": "Nicht genügend Daten",
  "riskLabel": "Risikostufe",
  "whyLabel": "Warum es wichtig ist",
  "signsLabel": "Zu beobachtende Zeichen",
  "actionLabel": "Was zu tun ist",
  "callVetLabel": "Der sicherste nächste Schritt ist professioneller Rat.",
  "callVetText": "Ein Rechner kann keine toxische Dosis schätzen, eine Exposition bestätigen oder eine Untersuchung ersetzen.",
  "sourceLabel": "Verwendete Nachweise",
  "sourceText": "Die Lebensmittelprofile basieren auf Richtlinien der Giftnotrufzentralen und der Tiertoxikologie von ASPCA, FDA und MSD Veterinary Manual.",
  "emergencyTitle": "Wenn Ihr Haustier etwas Bedenkliches gefressen hat",
  "emergencyText": "Rufen Sie sofort Ihren Tierarzt, eine Notfallklinik oder den Giftnotruf an. Halten Sie Verpackung, Zutatenliste, geschätzte Menge und Zeitpunkt bereit. Leiten Sie kein Erbrechen ein.",
  "openMenu": "Optionen öffnen",
  "closeMenu": "Optionen schließen"
};

const faq: PetToxicityLocaleContent['faq'] = [
  {
    "question": "Kann dieser Prüfer mir sagen, ob mein Haustier sicher ist?",
    "answer": "Nein. Es ist ein pädagogischer Leitfaden für häufige Lebensmittelgefahren, keine Diagnose oder Dosisberechnung. Das Risiko hängt von Tierart, Produkt, Menge, Körpergewicht und Zeit seit der Aufnahme ab. Kontaktieren Sie bei Verdacht stets einen Tierarzt."
  },
  {
    "question": "Welche Lebensmittel sind für Hunde besonders gefährlich?",
    "answer": "Zu den schwerwiegenden Gefahren gehören Xylit, Schokolade und Koffein, Weintrauben und Rosinen, Zwiebeln und Knoblauch, Alkohol, Makadamianüsse und roher Hefeteig. Ein Produktetikett hilft dem Tierarzt bei der Beurteilung."
  },
  {
    "question": "Sind Zwiebeln und Knoblauch für Katzen gefährlich?",
    "answer": "Ja. Katzen reagieren besonders empfindlich auf Schäden an den roten Blutkörperchen durch Allium-Pflanzen wie Zwiebeln, Knoblauch und Schnittlauch. Rohe, gekochte, getrocknete und pulverisierte Formen sind relevant."
  },
  {
    "question": "Warum zeigt Xylit für Katzen und Hunde unterschiedliche Warnungen?",
    "answer": "Xylit führt bei Hunden zu einem raschen, lebensbedrohlichen Abfall des Blutzuckers. Bei Katzen ist diese Gefahr in Leitlinien weniger klar belegt, was jedoch kein Sicherheitsversprechen ist."
  },
  {
    "question": "Was soll ich tun, wenn das gefressene Lebensmittel nicht gelistet ist?",
    "answer": "Ein fehlender Eintrag ist kein Beweis für Sicherheit. Sichern Sie die Verpackung, notieren Sie Menge sowie Zeitpunkt und kontaktieren Sie umgehend einen Tierarzt oder Giftnotruf."
  }
];

const howTo: PetToxicityLocaleContent['howTo'] = [
  {
    "name": "Tierart auswählen",
    "text": "Wählen Sie Hund oder Katze, damit der Lebensmittelatlas die relevanten artspezifischen Nachweise anzeigt."
  },
  {
    "name": "Lebensmittel auswählen",
    "text": "Öffnen Sie das Menü und wählen Sie die passende Zutat. Beachten Sie konzentrierte oder getrocknete Produkte."
  },
  {
    "name": "Sicherheitskarte lesen",
    "text": "Überprüfen Sie, warum das Lebensmittel wichtig ist, welche Anzeichen auftreten können und welcher Schritt empfohlen wird."
  },
  {
    "name": "Bei Bedarf Fachpersonal kontaktieren",
    "text": "Rufen Sie bei einer Exposition den Tierarzt an und halten Sie Angaben zu Produkt, Menge und Tier bereit."
  }
];

const seo: PetToxicityLocaleContent['seo'] = [
  {
    type: 'summary',
    title: "Ein schneller Lebensmittelsicherheitscheck für Hunde und Katzen",
    items: [
      "Wählen Sie zuerst die Tierart, da dieselbe Zutat bei Hunden und Katzen unterschiedliche Bedenken auslöst.",
      "Nutzen Sie die Lebensmittelkarten, um Gefahr, Warnzeichen und Dringlichkeit zu verstehen.",
      "Behandeln Sie eine Xylit-Aufnahme bei Hunden als dringenden Notfall.",
      "Verständigen Sie bei einer echten Exposition sofort den Tierarzt."
],
  },
  {
    type: 'title',
    text: "Wie Sie den Prüfer für gefährliche Lebensmittel verantwortungsvoll nutzen",
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Dieser Prüfer für gefährliche Lebensmittel wurde für die entscheidende erste Minute entwickelt, nachdem ein Hund oder eine Katze etwas Unerlaubtes gefressen hat. Wählen Sie das Tier, öffnen Sie das passende Profil und nutzen Sie die Karte zur Vorbereitung des Telefonats mit der Tierarztpraxis. Die Struktur trennt den Grund der Gefahr von beobachtbaren Symptomen und empfohlenen Handlungen. Das erleichtert die Übersicht in einer anstrengenden Situation und spart wertvolle Minuten vor der Abfahrt in die Praxis.",
  },
  {
    type: 'paragraph',
    html: "Die Wahl der Tierart ist essenziell. Hunde und Katzen verstoffwechseln Substanzen unterschiedlich. Xylit verursacht bei Hunden einen schnellen Abfall des Blutzuckers, während bei Katzen Zwiebeln und Knoblauch durch eine höhere Empfindlichkeit der roten Blutkörperchen auffallen. Eine genaue Einordnung hilft dabei, Fehlinformationen in Foren vorzubeugen und die richtigen Maßnahmen zu ergreifen.",
  },
  {
    type: 'title',
    text: "Häufige Gefahren und wichtige Details",
    level: 2,
  },
  {
    type: 'table',
    headers: ["Lebensmittel oder Zutat","Hauptbedenken","Wichtiger Kontext"],
    rows: [["Schokolade und Koffein","Herz- und Nervensystemwirkungen","Kakaogehalt, Produktart, Menge und Körpergewicht sind entscheidend. Die Dosis bestimmt die Schwere der Vergiftung."],["Xylit","Schneller Blutzuckerabfall bei Hunden","Zuckerfreie Kaugummis, Süßwaren und Gebäck prüfen. Bereits geringe Mengen können lebensbedrohlich sein."],["Weintrauben und Rosinen","Mögliche Nierenschädigung bei Hunden","Auch kleine Mengen nicht als harmlos einstufen. Das Nierenversagen kann verzögert eintreten."],["Zwiebel und Knoblauch","Schädigung roter Blutkörperchen","Gekochte, getrocknete und pulverisierte Formen beachten. Die Anämie entwickelt sich oft erst nach Tagen."],["Roher Hefeteig","Magenausdehnung und Alkoholbildung","Aufgehender Teig erzeugt Druck und Gärungsprodukte. Es droht eine gefährliche Magendrehung."]],
  },
  {
    type: 'paragraph',
    html: "Eine Exposition kann auch aus mechanischen oder physikalischen Gründen gefährlich sein. Hefeteig geht im Magen auf, fettige Speisen können eine Bauchspeicheldrüsenentzündung begünstigen und Knochen bergen Erstickungs- sowie Verletzungsgefahren. Eine sorgfältige Beobachtung ist unerlässlich.",
  },
  {
    type: 'title',
    text: "Maßnahmen nach einer möglichen Exposition",
    level: 2,
  },
  {
    type: 'list',
    items: [
      "Reste entfernen und Verpackung sichern.",
      "Tierart, Gewicht, Produkt, Menge und Zeitpunkt notieren.",
      "Tierarzt oder Giftnotruf anrufen.",
      "Kein Erbrechen ohne tierärztliche Anweisung einleiten.",
      "Bei Kollaps, Atemnot oder Krämpfen sofort die Notfallklinik aufsuchen."
],
  },
  {
    type: 'tip',
    title: "Das Wohl des Tieres steht an erster Stelle",
    html: "Symptome können verzögert auftreten. Suchen Sie bei Vergiftungsverdacht stets professionelle Hilfe auf.",
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
