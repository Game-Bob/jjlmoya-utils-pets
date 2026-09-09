import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'halsband-groesse-haustier-berechnen';
const title = 'Halsbandgröße für Haustiere berechnen';
const description = 'Messen Sie den Halsumfang, addieren Sie Bewegungsfreiheit und finden Sie einen verstellbaren Halsbandbereich für die Handprüfung.';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: 'Halsumfang', unitLabel: 'Anzeige', centimetres: 'Zentimeter', inches: 'Zoll', allowanceLabel: 'Bewegungsfreiheit', collarTypeLabel: 'Halsbandtyp', flatCollar: 'Flach', breakawayCollar: 'Sicherheitsverschluss', martingaleCollar: 'Martingale', statusTight: 'Mehr Raum einplanen', statusBalanced: 'Bereit zur Prüfung', statusLoose: 'Sicherheit prüfen', statusTightDetail: 'Mehr Raum einplanen.', statusBalancedDetail: 'Diesen Bereich von Hand prüfen.', statusLooseDetail: 'Prüfen, dass es nicht abrutschen kann.', fitStudyLabel: 'Halsband-Passformstudie', fitWindowLabel: 'Diesen Bereich suchen', measuredLabel: 'Gemessener Hals', roomLabel: 'Bewegungsfreiheit', checkLabel: 'Prüfung von Hand', sceneAria: 'Passformstudie mit Halsring und verstellbarem Halsbandbereich', neckMarker: 'Hals', easeMarker: 'Raum', rangeMarker: 'Halsbandbereich', minimumMarker: 'Start', maximumMarker: 'Ende', checkFlat: 'Bequem, sicher, ohne Reibung.', checkBreakaway: 'Bequeme Passform und korrekte Auslösevorrichtung prüfen.', checkMartingale: 'Die Zugschlaufe darf den Hals nicht einengen.', invalidInput: 'Geben Sie einen gültigen Halsumfang und Bewegungsraum ein.',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: 'Wie messe ich den Halsumfang meines Tieres?', answer: 'Legen Sie ein flexibles Maßband dort um den Hals, wo das Halsband sitzen soll. Halten Sie es gerade und nah am Fell, ohne Haut oder Fell zusammenzudrücken. Messen Sie erneut, wenn sich die Position, das Fell oder die Haltung des Tieres ändert.' },
  { question: 'Warum zeigt der Rechner einen Bereich statt einer Groesse?', answer: 'Verstellbare Halsbaender haben unterschiedliche Einstellbereiche und Hersteller verwenden keine einheitlichen Groessen. Der Rechner addiert Ihren gewaehlten Bewegungsraum und gibt einen kleinen Einkaufsbereich aus. Danach muss das konkrete Halsband am Tier geprueft werden.' },
  { question: 'Wie viel Bewegungsfreiheit soll ich einplanen?', answer: 'Es gibt keinen universellen Zentimeterwert. Fell, Halsbandbreite, Bauform und Nutzung verändern die passende Einstellung. Verwenden Sie den Wert als sichtbare Annahme und bestätigen Sie die Passform anschließend mit einer ruhigen Handprüfung.' },
  { question: 'Gilt die Rechnung auch fuer Martingale-Halsbaender?', answer: 'Die erste Groessenschaetzung beginnt mit demselben Halsumfang. Bei einem Martingale-Halsband ist die Sicherheitspruefung jedoch anders: Die Zugschlaufe muss begrenzt sein und darf den Hals nicht einengen. Beachten Sie immer die Herstellerangaben.' },
  { question: 'Kann ich den Bereich bei einem jungen Tier verwenden?', answer: 'Ja, als Momentaufnahme. Junge Tiere wachsen und verändern ihr Fell, deshalb sollte die Messung regelmäßig wiederholt werden. Ein heutiger Bereich ersetzt keine spätere Kontrolle.' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: 'Hals messen', text: 'Messen Sie den ruhigen, natuerlich stehenden Hals dort, wo das Halsband liegen wird. Das Massband soll flach und nicht straff sein.' },
  { name: 'Bewegungsraum waehlen', text: 'Stellen Sie den Raum zwischen Hals und Halsband als sichtbaren Eingabewert ein. Zwei Zentimeter sind nur ein leicht lesbares Beispiel.' },
  { name: 'Halsbandtyp auswaehlen', text: 'Waehlen Sie Flach, Sicherheitsverschluss oder Martingale, damit die abschliessende Pruefung zum Verschluss passt.' },
  { name: 'Einstellbereich vergleichen', text: 'Suchen Sie ein verstellbares Halsband, das den gesamten Bereich abdeckt, und pruefen Sie es anschliessend am Tier.' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Vom Halsmass zum passenden Einkaufsbereich', items: ['Messen Sie dort, wo das Halsband wirklich sitzen wird.', 'Machen Sie den Bewegungsraum sichtbar statt nach Rasse oder Gewicht zu raten.', 'Vergleichen Sie den Bereich mit der echten Verstellspanne des Produkts.', 'Beenden Sie die Auswahl mit einer ruhigen Handpruefung.'] },
  { type: 'title', text: 'Was diese Halsbandberechnung entscheidet', level: 2 },
  { type: 'paragraph', html: 'Eine Groessentabelle ist oft unklar, wenn ein Tier zwischen zwei Groessen liegt, dichtes Fell hat oder noch waechst. Dieser Rechner beginnt mit einem Messwert, den Sie selbst kontrollieren: dem Umfang an der Stelle, an der das Halsband liegen soll. Dazu kommt der Bewegungsraum, den Sie bewusst waehlen. Das Ergebnis ist kein Marketinglabel wie klein, mittel oder gross, sondern ein konkreter Bereich, den Sie mit Produktangaben vergleichen koennen.' },
  { type: 'paragraph', html: 'Der Bereich bleibt absichtlich klein. Verstellbare Halsbaender werden nicht nach einer weltweit einheitlichen Norm gefertigt, und die nutzbare Laenge kann sich von der Bezeichnung auf einer Produktseite unterscheiden. Ein Produkt passt erst dann in die Auswahl, wenn seine Verstellung den ganzen Bereich abdeckt. Danach pruefen Sie Kanten, Verschluss, Fell, Bewegung und die Angaben des Herstellers.' },
  { type: 'title', text: 'So messen Sie vor dem Einkauf', level: 2 },
  { type: 'list', items: ['Messen Sie, wenn das Tier ruhig steht und normal atmet.', 'Halten Sie das Band gerade und druecken Sie Fell oder Haut nicht zusammen.', 'Wiederholen Sie die Messung, wenn das Halsband hoeher oder tiefer sitzen soll.', 'Bei jungen Tieren das Datum notieren und die Passform regelmaessig neu pruefen.'] },
  { type: 'paragraph', html: 'Der Bewegungsraum ist eine Annahme, keine Sicherheitsgarantie. Fell, Halsbandbreite, Material, Verschluss und Aktivitaet beeinflussen die richtige Einstellung. Eine allgemeine Fingerpruefung kann helfen, ersetzt aber keine Beobachtung des individuellen Tieres. Wenn Reiben, Husten, Schmerzen, Atemprobleme oder Stress auftreten, nehmen Sie das Halsband ab und holen Sie fachkundige Hilfe.' },
  { type: 'title', text: 'Die Signale im Passformrad lesen', level: 2 },
  { type: 'table', headers: ['Signal', 'Bedeutung', 'Naechster Schritt'], rows: [['Gemessener Hals', 'Der Umfang vor dem Bewegungsraum.', 'Messung bei Bedarf wiederholen.'], ['Start', 'Halsumfang plus Ihr Bewegungsraum.', 'Als untere Grenze der Verstellung verwenden.'], ['Ende', 'Ein kleiner Vergleichsbereich oberhalb des Starts.', 'Produkt suchen, das ihn vollstaendig abdeckt.'], ['Pruefung', 'Hinweis auf die gewaehlte Annahme.', 'Am Tier von Hand bestaetigen.']] },
  { type: 'title', text: 'Der Halsbandtyp ändert die letzte Prüfung', level: 2 },
  { type: 'paragraph', html: 'Ein flaches Halsband braucht eine andere Handprüfung als ein Sicherheitsverschluss oder ein Martingale-Modell. Achten Sie auf die Kante, die Schnalle und die Begrenzung der Zugschlaufe. Die Zahl hilft bei der Auswahl; das ruhige Tier und die Herstellerangaben entscheiden über die tatsächliche Verwendung.' },
  { type: 'tip', title: 'Leise Handpruefung', html: 'Legen Sie das Halsband an, wenn das Tier ruhig ist. Es soll sich bewegen, atmen, fressen und trinken koennen, ohne dass das Halsband scheuert oder ueber den Kopf rutscht. Nach Fellpflege, Wachstum, Gewichtsveraenderung oder einer neuen Position erneut pruefen.' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
