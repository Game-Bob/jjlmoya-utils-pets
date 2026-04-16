import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'haustier-tagesration-rechner';
const title = 'Haustier Tagesration Rechner';
const description = 'Berechnen Sie die genaue Futtermenge, die Ihr Hund oder Ihre Katze benötigt. Tool basierend auf den veterinärmedizinischen RER- und DER-Formeln für ein gesundes Gewicht.';

const ui: PetRationUI = {
  toolTitle: 'Tagesrationsrechner',
  sectionProfile: '1. Haustierprofil',
  labelAnimal: 'Tier',
  labelStage: 'Lebensphase',
  labelWeight: 'Körpergewicht',
  labelActivity: 'Physische Aktivität',
  sectionDiet: '2. Diät und Futter',
  labelDietType: 'Fütterungsart',
  speciesDog: 'Hund',
  speciesCat: 'Katze',
  speciesRabbit: 'Kaninchen',
  stagePuppy: 'Welpe oder Kätzchen',
  stageAdult: 'Erwachsen',
  stageSenior: 'Senior',
  activityLow: 'Niedrig',
  activityMod: 'Normal',
  activityHigh: 'Hoch',
  dietDry: 'Nur Trocken',
  dietMixed25: 'Gemischt (25%)',
  dietHalf: 'Halbe-Halbe (50%)',
  dietWet: 'Nur Nass',
  manualAdjust: 'Manuelle Anpassung (1-99%)',
  wetPercentLabel: '% Nassfutter in der Diät',
  tagDry: 'Trocken',
  tagWet: 'Nass',
  totalKcal: 'Gesamt',
  kcalUnit: 'kcal/Tag',
  statusPuppy: 'Schnelle Wachstumsphase',
  statusSenior: 'Reifer Stoffwechsel',
  statusLargeDog: 'Große Rasse: Gelenkpflege',
  statusDefault: 'Ausgewogenes Gewicht',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'Was ist der RER und warum ist er wichtig?',
    answer: 'Der RER (Resting Energy Requirement) ist die Mindestenergie, die Ihr Haustier benötigt, um seine lebenswichtigen Basisfunktionen im Ruhezustand aufrechtzuerhalten. Er ist die wissenschaftliche Grundlage für die Berechnung der Tagesration, um Unter- oder Überfütterung zu vermeiden. Das Verständnis des RER ermöglicht es Besitzern, die Futteraufnahme auf die spezifischen biologischen Bedürfnisse ihres Tieres abzustimmen und sicherzustellen, dass es nicht mehr verbraucht, als seine Organe effizient verarbeiten können.',
  },
  {
    question: 'Wie beeinflusst die Kastration die Ration meines Haustiers?',
    answer: 'Kastrierte Tiere neigen zu einem etwa 15 bis 20 Prozent niedrigeren Grundumsatz. Sie benötigen möglicherweise eine etwas kleinere Ration oder eine im Rechner auf "Niedrig" eingestellte Aktivitätsstufe, um eine Gewichtszunahme zu vermeiden. Die hormonellen Veränderungen nach dem Eingriff verändern die Art und Weise, wie der Körper Fett speichert und Energie verbrennt, was die Wachsamkeit über den Futternapf für die langfristige Gesundheit noch wichtiger macht.',
  },
  {
    question: 'Kann ich diesen Rechner für Welpen verwenden?',
    answer: 'Welpen im Wachstum haben einen viel höheren Energiebedarf (bis zum 3-fachen des RER). Dieser Rechner ist für erwachsene Hunde und Katzen optimiert. Konsultieren Sie für Welpen immer Ihren Tierarzt für einen spezifischen Wachstumsplan. Eine unsachgemäße Fütterung während der frühen Wachstumsphase kann später im Leben zu ernsthaften Skelettproblemen führen, da überschüssiges Kalzium oder Kalorien die Knochenentwicklung zu schnell vorantreiben können.',
  },
  {
    question: 'Wie oft am Tag sollte ich die Ration verteilen?',
    answer: 'Ideal ist es, die gesamte resultierende Menge auf 2 oder 3 Mahlzeiten pro Tag zu verteilen. Dies hilft, einen stabilen Blutzuckerspiegel aufrechtzuerhalten und verbessert die Verdauung, insbesondere bei Rassen, die zu Magendrehungen neigen. Konsistente Mahlzeiten tragen auch dazu bei, dass Ihr Haustier gesättigt bleibt und weniger dazu neigt, zwischen den geplanten Fütterungen um Reste zu betteln.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Tierart sorgfältig auswählen', text: 'Geben Sie an, ob die Berechnung für einen Hund oder eine Katze erfolgt, da deren Stoffwechsel und Gewichtsgrenzen je nach ihren einzigartigen biologischen Merkmalen erheblich variieren.' },
  { name: 'Auf exaktes Gewicht einstellen', text: 'Bewegen Sie den Schieberegler auf das aktuelle Gewicht Ihres Haustiers in Kilogramm. Es ist wichtig, ein vor kurzem gemessenes Gewicht für eine genaue Energiebedarfsberechnung zu verwenden.' },
  { name: 'Aktivitätsniveau definieren', text: 'Wählen Sie zwischen niedriger, normaler oder hoher Aktivität, basierend auf der tatsächlichen täglichen Bewegung und dem Energieniveau, das Ihr vierbeiniger Begleiter an den Tag legt.' },
  { name: 'Kalorien des Futters pro kg eingeben', text: 'Suchen Sie auf der Futterverpackung nach dem genauen kcal/kg-Wert, damit die endgültige Ration in Gramm so präzise wie möglich für eine optimale Gesundheit berechnet wird.' },
];

const bibliography: PetRationLocaleContent['bibliography'] = [
  { name: 'WSAVA: Nutrition Toolkit und Kalorienempfehlungen', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
  { name: 'FEDIAF: Ernährungsrichtlinien für Alleinfuttermittel und Ergänzungsfuttermittel für Heimtiere', url: 'https://fediaf.org/self-regulation/nutrition.html' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Wichtige Prinzipien der Veterinärernährung und Gesundheit',
    items: [
      'Die RER-Formel lautet: 70 × (Gewicht in kg)^0,75. Sie ist die wissenschaftliche Grundlage jeder modernen Kalorienberechnung.',
      'Der DER multipliziert den RER mit dem spezifischen Lebensstilfaktor des Tieres für den täglichen Bedarf.',
      'Ein kastrierter Hund benötigt aufgrund hormoneller Verschiebungen bis zu 20 Prozent weniger Kalorien als ein unkastrierter.',
      'Übergewicht betrifft heute 50 Prozent der Haustiere und verkürzt deren Lebenserwartung erheblich.',
      'Die Berechnung der exakten Ration ist eine der effektivsten Formen der Präventivmedizin für Haustierbesitzer.',
      'Die Verwendung einer Küchenwaage bietet die erforderliche Genauigkeit für einen wissenschaftlich fundierten Fütterungsplan.',
    ],
  },
  { type: 'title', text: 'Vollständiger Leitfaden zur Berechnung der Tagesration Ihres Haustiers für optimale Gesundheit', level: 2 },
  {
    type: 'paragraph',
    html: 'Einen Hund oder eine Katze richtig zu füttern, ist nicht nur eine Frage des morgendlichen Befüllens des Napfes. Ernährung ist die fundamentale Säule für ihre Gesundheit, Langlebigkeit und ihr emotionales Wohlbefinden. Ein <strong>Tagesrationsrechner für Haustiere</strong> ist ein unverzichtbares Werkzeug für jeden verantwortungsbewussten Besitzer, der die zwei häufigsten Probleme der heutigen Veterinärernährung vermeiden möchte: Fehlernährung durch Nährstoffmangel und vor allem Übergewicht, das mehr als 50% der Haustiere in Industrieländern betrifft.',
  },
  {
    type: 'paragraph',
    html: 'In diesem Leitfaden untersuchen wir die wissenschaftlichen Grundlagen hinter den Kalorienberechnungen, wie man Futtermitteletiketten interpretiert und wie Faktoren wie Alter, körperliche Aktivität und physiologischer Status die Futtermenge beeinflussen, die Ihr Begleiter jeden Tag benötigt. Wir helfen Ihnen zu verstehen, wie kleine Anpassungen in der Tagesration einen großen Unterschied bei der Vorbeugung von Diabetes, Gelenkproblemen und der Herzgesundheit Ihres Tieres machen können.',
  },
  { type: 'title', text: 'Die Wissenschaft hinter den Berechnungen: RER und DER verstehen', level: 3 },
  {
    type: 'paragraph',
    html: 'Um genau zu bestimmen, wie viel ein Tier jeden Tag essen sollte, verwenden Tierärzte und Ernährungswissenschaftler zwei Schlüsselkonzepte: den RER und den DER. Diese Akronyme stehen für Resting Energy Requirement (Ruheenergiebedarf) bzw. Daily Energy Requirement (Tagesenergiebedarf). Das Verständnis ihres Zusammenspiels ist entscheidend für das Gewichtsmanagement und das Wohlbefinden Ihres Haustiers auf sichere und kontrollierte Weise.',
  },
  {
    type: 'paragraph',
    html: 'Der RER deckt die Energie ab, die für grundlegende Organfunktionen, Atmung und Kreislauf benötigt wird, während das Tier ruht. Der DER nimmt dann diesen Wert und passt ihn an den Lebensstil des Tieres an, egal ob es sich um einen aktiven Leistungshund oder eine ruhige Wohnungskatze handelt. Wenn wir diese Werte korrekt kalibrieren, können wir ein Gleichgewicht erreichen, das langfristig einen gesunden Körperzustand fördert.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: Ruheenergie', value: '70 × kg^0,75' },
      { label: 'Welpenfaktor', value: 'x2,5 bis x3,5' },
      { label: 'Aktiver Erwachsenenfaktor', value: 'x1,6 bis x2,0' },
      { label: 'Seniorfaktor', value: 'x1,0 bis x1,4' },
    ],
  },
  { type: 'title', text: 'Wie man das Etikett des Haustierfutters liest und interpretiert', level: 3 },
  {
    type: 'paragraph',
    html: 'Damit der Rechner Ihnen exakte Grammwerte liefert, müssen Sie die <strong>Kaloriendichte</strong> des Produkts kennen, auch bekannt als seine umsetzbare Energie. Dieser Wert wird normalerweise als kcal/kg oder kcal/100g auf der Verpackung angegeben. Indem Sie diese Zahlen genau eingeben, können Sie eine Diät entwerfen, die weder mangelhaft noch übertrieben ist.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Light-Trockenfutter', value: '~3000 kcal/kg' },
      { label: 'Standard-Trockenfutter', value: '~3500 kcal/kg' },
      { label: 'Energiereiches Welpenfutter', value: '~4000 kcal/kg' },
      { label: 'Dosen-Nassfutter', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Ernährungshinweis vom Tierarzt',
    html: 'Jedes Haustier ist ein Individuum mit seinem eigenen, einzigartigen Stoffwechsel. Der Rechner bietet einen wissenschaftlich fundierten Ausgangspunkt, aber Sie sollten den tatsächlichen Körperzustand immer überwachen, indem Sie die Rippen Ihres Haustiers abtasten. Wenn Sie diese leicht spüren können, ohne fest zu drücken, ist das Gewicht ideal. Wenn die Rippen unter einer Fettschicht schwer zu finden sind, könnte es an der Zeit sein, die Ration einzuschränken.',
  },
  { type: 'title', text: 'Unterschiede in der Ernährung zwischen Katzen und Hunden', level: 3 },
  {
    type: 'paragraph',
    html: 'Katzen sind obligate Fleischfresser und ihr Stoffwechsel ist darauf optimiert, Energie aus tierischen Proteinen zu gewinnen. Bei Hunden sehen wir einen flexibleren Allesfresser-Stoffwechsel, aber man muss dennoch vorsichtig mit Kohlenhydratüberschüssen sein, die zu Gewichtszunahme führen können. Beide Arten gedeihen bei einer kontrollierten Ration, die eine übermäßige Belastung der Gelenke und des Herz-Kreislauf-Systems während ihres gesamten Lebens vermeidet.',
  },
  {
    type: 'paragraph',
    html: 'Sich ein paar Minuten Zeit zu nehmen, um die exakte Ration zu berechnen, ist eine der rentabelsten Investitionen in die Präventivmedizin, die Sie als Besitzer tätigen können. Ein gesundes Gewicht reduziert das Risiko für chronische Krankheiten drastisch und gibt Ihrem besten Freund die beste Chance auf ein langes, lebendiges Leben. Fragen Sie Ihren Tierarzt bei Ihrem nächsten Routinebesuch, ob Ihre aktuelle Fütterungsstrategie optimal ist.',
  },
];

const schemas: PetRationLocaleContent['schemas'] = [
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

export const content: PetRationLocaleContent = {
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Bibliographie',
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
