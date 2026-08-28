import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'calcolatore-dimensioni-trasportino-animali';
const title = 'Calcolatore Dimensioni Trasportino per Animali Domestici';
const description = 'Calcola le dimensioni interne ideali del trasportino per cani o gatti partendo da sei misurazioni corporee, con verifica per viaggi in aereo e lista di controllo.';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: 'Misura prima. Acquista con sicurezza.',
  journeyHint: 'Seleziona l animale e il tipo di viaggio, inserisci le misure e usa il modello interno come guida per l acquisto.',
  unitLegend: 'Unità di visualizzazione',
  speciesStep: 'Inizia dall animale',
  metricUnit: 'Metrico',
  imperialUnit: 'Imperiale',
  speciesLegend: 'Chi viaggia?',
  speciesDog: 'Cane',
  speciesCat: 'Gatto',
  modeLegend: 'Dove si svolge il viaggio?',
  modeCar: 'Auto',
  modeAir: 'Aereo',
  measurementsLegend: 'Misura il tuo animale',
  noseTailLabel: 'Dal tartufo alla base della coda',
  noseTailHint: 'Misura senza includere la curvatura della coda',
  elbowHeightLabel: 'Dal suolo al gomito',
  shoulderWidthLabel: 'Larghezza delle spalle',
  standingHeightLabel: 'Altezza in posizione eretta',
  beddingLabel: 'Spessore della coperta o cuscino',
  weightLabel: 'Peso dell animale',
  cmUnit: 'cm',
  inchUnit: 'in',
  kgUnit: 'kg',
  lbUnit: 'lb',
  snubNosedLabel: 'Razza brachicefala o a museruola corta',
  snubNosedHint: 'Il viaggio in aereo richiede regolazioni IATA. Consulta il tuo veterinario e la compagnia aerea.',
  presetLegend: 'Inizia con un profilo',
  presetCat: 'Gatto',
  presetSmallDog: 'Cane piccolo',
  presetMediumDog: 'Cane medio',
  presetLargeDog: 'Cane grande',
  resultEyebrow: 'Gabarit di misurazione consigliato',
  resultTitle: 'Spazio sufficiente per girarsi',
  resultDimensionLabel: 'Dimensioni interne minime consigliate',
  lengthLabel: 'Lunghezza',
  widthLabel: 'Larghezza',
  heightLabel: 'Altezza',
  petWeightLabel: 'Peso dell animale',
  journeyLabel: 'Modalità di viaggio',
  statusComfort: 'Livello base di comfort',
  statusAirReview: 'Verifica trasporto aereo',
  statusSnub: 'Regolazione museruola corta',
  resultDetail: 'Controlla l interno reale del trasportino, l apertura della porta, la ventilazione e le norme della compagnia prima dell acquisto.',
  checklistTitle: 'I quattro controlli corporei',
  checklistStand: 'L animale può stare in piedi e seduto senza che la testa tocchi il soffitto.',
  checklistTurn: 'L animale può girarsi normalmente in piedi.',
  checklistLie: 'L animale può sdraiarsi in posizione naturale sul cuscino.',
  checklistAirline: 'Per i viaggi in aereo, verifica i limiti della compagnia, la ventilazione, la chiusura e la tenuta stagna.',
  invalidInput: 'Inserisci valori positivi per ciascuna misura corporea e per il peso.',
  noteTitle: 'Strumento di stima delle dimensioni, non approvazione di viaggio',
  noteText: 'Le normative variano secondo la compagnia aerea, il veicolo e l animale. Un veterinario deve valutare la salute dell animale.',
  methodTitle: 'Metodo di calcolo',
  methodText: 'La formula segue le linee guida IATA: la lunghezza è pari alla lunghezza corpo più metà altezza gomito, la larghezza è il doppio della larghezza spalle e l altezza include la postura eretta più lo spessore del cuscino.',
  blueprintLabel: 'Schema misurato del trasportino con l animale all interno e guide di lunghezza e altezza',
  dimensionInside: 'Dimensioni interne',
  checkMark: 'OK',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: 'Come devo misurare il mio cane o gatto per il trasportino?',
    answer: 'Misura dal tartufo alla base della coda, dal suolo al gomito, la larghezza nel punto più ampio delle spalle e l altezza dal suolo alla punta della testa o delle orecchie. Aggiungi lo spessore del cuscino separatamente.',
  },
  {
    question: 'Quali dimensioni interne calcola questo strumento?',
    answer: 'Stima la lunghezza interna minima dalla lunghezza del corpo e dal gomito, la larghezza minima dalle spalle e l altezza complessiva considerando il cuscino.',
  },
  {
    question: 'I risultati garantiscono l approvazione di una compagnia aerea?',
    answer: 'No. La modalità aereo applica le formule IATA di riferimento, ma ogni compagnia aerea può richiedere requisiti specifici. Verifica sempre le norme ufficiali del vettore.',
  },
  {
    question: 'Perché le razze brachicefale richiedono un trasportino più grande in aereo?',
    answer: 'Le linee guida IATA raccomandano uno spazio maggiore per le razze a museruola corta per prevenire problemi di surriscaldamento e respirazione durante il volo.',
  },
  {
    question: 'Un trasportino per l auto deve essere il più grande possibile?',
    answer: 'No. Deve consentire all animale di stare in piedi, girarsi e sdraiarsi comodamente, rimanendo ben fissato al veicolo per la massima sicurezza.',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: 'Scegli la modalità di viaggio', text: 'Seleziona auto o aereo per impostare i criteri di verifica adeguati.' },
  { name: 'Inserisci le sei misurazioni', text: 'Prendi le misure del corpo e il peso dell animale quando è calmo.' },
  { name: 'Consulta le dimensioni interne', text: 'Usa lunghezza, larghezza e altezza come riferimento per confrontare i modelli in commercio.' },
  { name: 'Verifica la conformità', text: 'Prima dell acquisto, controlla la ventilazione, le chiusure e le normative della compagnia.' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Guida alla scelta del trasportino ideale per il tuo animale domestico',
    items: [
      'Misura il corpo dell animale in modo preciso anziché basarti solo sul peso corporeo totale.',
      'Usa le dimensioni interne utili per confrontare i trasportini reali in commercio nei negozi fisici o online.',
      'Controlla sempre la chiusura di sicurezza, la stabilità della porta e la ventilazione del contenitore.',
      'Il trasporto aereo richiede una preparazione specifica approfondita e il parere del veterinario.',
    ],
  },
  { type: 'title', text: 'Come pianificare le dimensioni del trasportino', level: 2 },
  {
    type: 'paragraph',
    html: 'Un trasportino idoneo deve garantire quattro movimenti naturali essenziali al tuo cane o gatto: stare in piedi senza curvare la testa o piegare le orecchie, sedersi eretto in modo naturale in tutta comodità, girarsi sul proprio asse senza ostacoli o pressioni laterali e sdraiarsi comodamente in posizione rilassata. Questo calcolatore individua la lunghezza, larghezza e altezza interne necessarie in modo personalizzato e accurato.',
  },
  {
    type: 'paragraph',
    html: 'Le dimensioni ottenute rappresentano lo spazio interno utile e reale dell abitacolo. Assicurati che accessori interni come ciotole per l acqua, cuscini spessi o la sagomatura delle pareti non riducano tale spazio al momento dell acquisto definitivo. Nel dubbio è sempre consigliabile scegliere la taglia superiore per la salute dell animale.',
  },
  { type: 'title', text: 'Importanza delle misurazioni corporee', level: 2 },
  {
    type: 'table',
    headers: ['Misura corporea', 'Utilità per l animale', 'Applicazione nel calcolo'],
    rows: [
      ['Tartufo alla base della coda', 'Stabilisce la lunghezza base del corpo senza considerare la coda.', 'Lunghezza interna'],
      ['Dal suolo al gomito', 'Aggiunge spazio per la rotazione delle zampe e per i movimenti.', 'Lunghezza interna'],
      ['Larghezza delle spalle', 'Garantisce ampiezza sufficiente nel punto corporeo più largo.', 'Larghezza interna'],
      ['Altezza in posizione eretta', 'Protegge la testa e le orecchie dal contatto con il soffitto.', 'Altezza interna'],
      ['Spessore del cuscino', 'Mantiene l altezza utile reale dopo l inserimento del letto.', 'Altezza interna'],
      ['Peso dell animale', 'Permette di verificare la portata massima e la resistenza del contenitore.', 'Verifica di carico'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Le formule si basano sulle direttive ufficiali IATA per il trasporto di animali vivi: la lunghezza interna combina la lunghezza del corpo e metà altezza gomito, la larghezza è il doppio delle spalle e l altezza include l altezza eretta più il cuscino.',
  },
  { type: 'title', text: 'Considerazioni per i viaggi in aereo', level: 2 },
  {
    type: 'paragraph',
    html: 'La stima delle dimensioni non sostituisce l autorizzazione ufficiale della compagnia aerea. Fattori come il tipo di aeromobile, le temperature e la ventilazione su quattro lati sono decisivi per la sicurezza dell animale.',
  },
  {
    type: 'tip',
    title: 'Test pratico di abitabilità a casa',
    html: 'Posiziona l animale nel trasportino in un ambiente calmo e osserva i suoi movimenti per qualche minuto. Se appare troppo costretto nel girarsi, scegli senza esitare la taglia superiore per garantire il suo benessere.',
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
