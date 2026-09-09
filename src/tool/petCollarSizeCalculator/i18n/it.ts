import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'calcolatore-taglia-collare-animale';
const title = 'Calcolatore della taglia del collare per animali';
const description = 'Misura il collo, aggiungi spazio di comfort e trova un intervallo regolabile da controllare manualmente.';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: 'Circonferenza del collo', unitLabel: 'Mostra', centimetres: 'Centimetri', inches: 'Pollici', allowanceLabel: 'Spazio di comfort', collarTypeLabel: 'Tipo di collare', flatCollar: 'Classico', breakawayCollar: 'A sgancio', martingaleCollar: 'Martingala', statusTight: 'Aggiungi spazio', statusBalanced: 'Pronto da controllare', statusLoose: 'Controlla la sicurezza', statusTightDetail: 'Aggiungi spazio.', statusBalancedDetail: 'Controlla questo intervallo a mano.', statusLooseDetail: 'Controlla che non possa scivolare.', fitStudyLabel: 'Studio della vestibilità', fitWindowLabel: 'Trova questo intervallo', measuredLabel: 'Collo misurato', roomLabel: 'Spazio di comfort', checkLabel: 'Controllo manuale', sceneAria: 'Studio della vestibilità con anello del collo e intervallo regolabile', neckMarker: 'collo', easeMarker: 'spazio', rangeMarker: 'intervallo collare', minimumMarker: 'inizio', maximumMarker: 'fine', checkFlat: 'Comodo, sicuro e senza sfregamenti.', checkBreakaway: 'Controlla la vestibilità e il meccanismo di sgancio.', checkMartingale: 'Il passante di tensione non deve stringere il collo.', invalidInput: 'Inserisci una circonferenza e uno spazio validi.',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: 'Come misuro il collo del mio animale?', answer: 'Avvolgi un metro flessibile nel punto in cui appoggerà il collare. Tienilo diritto e vicino al pelo senza comprimere pelle o manto. Ripeti la misura se cambiano posizione, pelo o postura dell animale.' },
  { question: 'Perché il calcolatore restituisce un intervallo?', answer: 'I collari regolabili hanno escursioni diverse e le taglie non sono uniformi tra produttori. Il calcolatore aggiunge lo spazio scelto e crea un piccolo intervallo di confronto. Poi devi provare il collare reale sull animale.' },
  { question: 'Quanto spazio di comfort devo aggiungere?', answer: 'Non esiste un valore valido per tutti. Pelo, larghezza, materiale e attività cambiano la vestibilità. Usa il numero come ipotesi visibile e conferma comfort e sicurezza con un controllo manuale tranquillo.' },
  { question: 'La formula vale anche per un collare a martingala?', answer: 'La prima stima parte dalla stessa circonferenza. Il controllo finale cambia: il passante di tensione deve essere limitato e non deve mai soffocare. Segui le istruzioni del produttore se il meccanismo non ti è familiare.' },
  { question: 'Posso usare il risultato per un cucciolo?', answer: 'Sì, come fotografia della vestibilità attuale. Un animale giovane cresce e cambia pelo, quindi la misura va ripetuta spesso e controllata con attenzione.' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: 'Misura il collo', text: 'Misura l animale calmo e in piedi, nel punto in cui il collare sarà appoggiato. Il metro deve restare piatto e morbido.' },
  { name: 'Scegli lo spazio', text: 'Regola lo spazio tra collo e collare con il controllo visibile. I 2 cm iniziali sono solo un esempio.' },
  { name: 'Scegli il tipo', text: 'Seleziona classico, a sgancio o martingala per ricevere il promemoria adatto al meccanismo.' },
  { name: 'Confronta la regolazione', text: 'Cerca un collare che copra tutto l intervallo e termina con una prova fisica sull animale.' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Dalla misura a un intervallo per l acquisto', items: ['Misura dove il collare verrà davvero appoggiato.', 'Rendi visibile lo spazio di comfort invece di indovinare dalla razza.', 'Confronta l intervallo con la regolazione reale del prodotto.', 'Concludi con una prova calma sull animale.'] },
  { type: 'title', text: 'La decisione che aiuta a prendere', level: 2 },
  { type: 'paragraph', html: 'Le tabelle delle taglie diventano poco chiare quando un animale è tra due misure, ha molto pelo o sta crescendo. Questo strumento parte da un dato controllabile: la circonferenza del collo nel punto in cui il collare resterà. Poi aggiunge lo spazio di comfort che scegli. Il risultato non cerca di indovinare un etichetta commerciale come piccola, media o grande; crea un intervallo concreto da confrontare con la regolazione del prodotto.' },
  { type: 'paragraph', html: 'L intervallo è breve di proposito e serve come riferimento per confrontare gli articoli. I collari regolabili non seguono una norma mondiale e la lunghezza utile può essere diversa dal nome della taglia mostrato in negozio. Un prodotto è adatto alla selezione quando la sua escursione copre tutto l intervallo. Il numero però non convalida bordi, fibbie, pelo o meccanismi particolari.' },
  { type: 'title', text: 'Come misurare prima di comprare', level: 2 },
  { type: 'list', items: ['Misura quando l animale è calmo e sta in piedi naturalmente.', 'Tieni il metro diritto senza comprimere pelo o pelle.', 'Ripeti se il collare dovrà stare più in alto o più in basso.', 'Per un animale giovane, annota la data e ricontrolla spesso durante la crescita.'] },
  { type: 'paragraph', html: 'Lo spazio di comfort è un ipotesi esplicita, non una garanzia di sicurezza. Il valore corretto dipende da animale, manto, larghezza, materiale e uso. Il controllo con le dita può dare un riferimento, ma non trasforma un numero in una regola universale. Se noti sfregamenti, tosse, dolore, difficoltà respiratoria o stress, togli il collare e chiedi un parere qualificato.' },
  { type: 'title', text: 'Leggi la ruota di vestibilità', level: 2 },
  { type: 'table', headers: ['Segnale', 'Significato', 'Passo successivo'], rows: [['Collo misurato', 'Circonferenza prima dello spazio.', 'Ripeti se il metro era inclinato o stretto.'], ['Inizio', 'Collo più spazio scelto.', 'Usalo come limite inferiore della regolazione.'], ['Fine', 'Piccola finestra di confronto.', 'Cerca una regolazione che copra tutta la finestra.'], ['Controllo', 'Promemoria legato allo spazio scelto.', 'Conferma fisicamente sull animale.']] },
  { type: 'title', text: 'Il tipo di collare cambia il controllo finale', level: 2 },
  { type: 'paragraph', html: 'Un collare classico richiede una verifica di comfort e sicurezza, mentre un modello a sgancio o a martingala aggiunge una domanda sul meccanismo. Controlla bordi, fibbia, pelo e passanti. Il numero serve a filtrare i prodotti, ma la decisione finale dipende dall animale tranquillo e dalle istruzioni del produttore.' },
  { type: 'tip', title: 'Fai un controllo tranquillo', html: 'Metti il collare quando l animale è rilassato. Deve poter muoversi, respirare, mangiare, bere e girare la testa senza sfregamenti. Controlla anche che non possa passare sopra la testa quando deve restare fermo. Ricontrolla dopo toelettatura, crescita, variazioni di peso o cambio di posizione.' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
