import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'calcolatore-razione-giornaliera-animali';
const title = 'Calcolatore di Razione Giornaliera per Animali';
const description = 'Calcola l\'esatta quantità di cibo di cui il tuo cane o gatto ha bisogno. Strumento basato sulle formule veterinarie RER e DER per un peso sano.';

const ui: PetRationUI = {
  toolTitle: 'Calcolatore di Razione Giornaliera',
  sectionProfile: '1. Profilo Animale',
  labelAnimal: 'Animale',
  labelStage: 'Fase di Vita',
  labelWeight: 'Peso Corporeo',
  labelActivity: 'Attività Fisica',
  sectionDiet: '2. Dieta e Cibo',
  labelDietType: 'Tipo di Alimentazione',
  speciesDog: 'Cane',
  speciesCat: 'Gatto',
  speciesRabbit: 'Coniglio',
  stagePuppy: 'Cucciolo o Gattino',
  stageAdult: 'Adulto',
  stageSenior: 'Senior',
  activityLow: 'Bassa',
  activityMod: 'Normale',
  activityHigh: 'Alta',
  dietDry: 'Solo Secco',
  dietMixed25: 'Misto (25%)',
  dietHalf: 'Metà-Metà (50%)',
  dietWet: 'Solo Umido',
  manualAdjust: 'Regolazione manuale (1-99%)',
  wetPercentLabel: '% cibo umido nella dieta',
  tagDry: 'Secco',
  tagWet: 'Umido',
  totalKcal: 'Totale',
  kcalUnit: 'kcal/giorno',
  statusPuppy: 'Fase di crescita rapida',
  statusSenior: 'Metabolismo maturo',
  statusLargeDog: 'Grande razza: Cura articolare',
  statusDefault: 'Peso equilibrato',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'Cos\'è il RER e perché è importante?',
    answer: 'Il RER (Resting Energy Requirement) è l\'energia minima di cui il tuo animale ha bisogno per mantenere le sue funzioni vitali di base a riposo. È la base scientifica per calcolare la razione giornaliera, evitando la sotto- o sovralimentazione. Comprendere il RER consente ai proprietari di adattare l\'assunzione di cibo ai bisogni biologici specifici del proprio animale, assicurando che non consumino più di quanto i loro organi possano elaborare in modo efficiente.',
  },
  {
    question: 'In che modo la sterilizzazione influisce sulla razione del mio animale?',
    answer: 'Gli animali sterilizzati tendono ad avere un metabolismo basale circa il 15-20% inferiore. Potrebbero aver bisogno di una razione leggermente più piccola o di un livello di attività impostato su Basso nel calcolatore per evitare l\'aumento di peso. I cambiamenti ormonali dopo la procedura alterano il modo in cui il corpo immagazzina il grasso e brucia l\'energia, rendendo la vigilanza sulla ciotola del cibo ancora più importante per la salute a lungo termine.',
  },
  {
    question: 'Posso usare questo calcolatore per i cuccioli?',
    answer: 'I cuccioli in crescita hanno bisogni energetici molto più elevati (fino a 3 volte il RER). Questo calcolatore è ottimizzato per cani e gatti adulti. Per i cuccioli, consulta sempre il tuo veterinario per un piano di crescita specifico. Un\'alimentazione impropria durante la fase di crescita precoce può portare a seri problemi scheletrici più avanti nella vita, poiché l\'eccesso di calorie può forzare lo sviluppo osseo troppo rapidamente.',
  },
  {
    question: 'Quante volte al giorno dovrei distribuire la razione?',
    answer: 'L\'ideale è spalmare la quantità totale risultante in 2 o 3 pasti al giorno. Ciò aiuta a mantenere livelli di glucosio stabili e migliora la digestione, specialmente nelle razze soggette a torsione gastrica. Orari dei pasti costanti aiutano anche a mantenere il tuo animale sazio e meno propenso a mendicare avanzi tra i pasti programmati.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Seleziona la specie con cura', text: 'Indica se il calcolo è per un cane o un gatto, poiché i loro metabolismi e i limiti di peso variano in modo significativo in base ai loro tratti biologici unici.' },
  { name: 'Regola per il peso esatto', text: 'Sposta il cursore sul peso attuale del tuo animale in chilogrammi. È fondamentale utilizzare un peso misurato di recente per un calcolo accurato del fabbisogno energetico.' },
  { name: 'Definisci il loro livello di attività', text: 'Scegli tra attività bassa, normale o alta in base all\'esercizio quotidiano effettivo e ai livelli di energia mostrati dal tuo compagno a quattro zampe.' },
  { name: 'Inserisci le calorie del cibo per kg', text: 'Cerca sulla confezione del cibo per animali il valore esatto di kcal/kg in modo che il calcolo della razione finale in grammi sia il più preciso possibile per una salute ottimale.' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Principi Chiave della Nutrizione e Salute Veterinaria',
    items: [
      'La formula RER è: 70 × (peso in kg)^0,75. È il fondamento scientifico di ogni moderno calcolo calorico veterinario.',
      'Il DER moltiplica il RER per il fattore di stile di vita specifico dell\'animale per fornire un fabbisogno giornaliero.',
      'Un cane castrato ha bisogno fino al 20% di calorie in meno rispetto a uno intero a causa di spostamenti ormonali.',
      'L\'obesità colpisce il 50% degli animali domestici oggi e riduce significativamente la loro aspettativa e qualità di vita.',
      'Calcolare l\'esatta razione è una delle forme più efficaci di medicina preventiva per i proprietari di animali domestici.',
      'L\'uso di una bilancia da cucina fornisce la precisione necessaria per seguire un piano alimentare basato sulla scienza.',
    ],
  },
  { type: 'title', text: 'Guida Completa al Calcolo della Razione Giornaliera del Tuo Animale per una Salute Ottimale', level: 2 },
  {
    type: 'paragraph',
    html: 'Nutrire correttamente un cane o un gatto non è solo una questione di riempire la loro ciotola ogni mattina. La nutrizione è il pilastro fondamentale della loro salute, longevità e benessere emotivo. Un <strong>calcolatore di razione giornaliera per animali domestici</strong> è uno strumento essenziale per ogni proprietario responsabile che voglia evitare i due problemi più comuni nella nutrizione veterinaria attuale: malnutrizione per mancanza di nutrienti e, soprattutto, l\'obesità, che colpisce più del 50% degli animali domestici nei paesi sviluppati.',
  },
  {
    type: 'paragraph',
    html: 'In questa guida esploreremo le basi scientifiche dietro i calcoli calorici, come interpretare le etichette degli alimenti e come fattori quali l\'età, il livello di attività fisica e lo stato fisiologico influenzano la quantità di cibo di cui il tuo compagno ha bisogno ogni giorno. Ti aiuteremo a capire come piccoli aggiustamenti nella razione giornaliera possano fare un\'enorme differenza nella prevenzione del diabete, dei problemi articolari e della salute cardiaca per il tuo animale.',
  },
  { type: 'title', text: 'La Scienza dietro i Calcoli: Capire RER e DER', level: 3 },
  {
    type: 'paragraph',
    html: 'Per determinare esattamente quanto un animale debba mangiare ogni giorno, veterinari e nutrizionisti utilizzano due concetti chiave: il RER e il DER. Questi acronimi stanno rispettivamente per Resting Energy Requirement (Fabbisogno Energetico a Riposo) e Daily Energy Requirement (Fabbisogno Energetico Giornaliero). Capire come questi interagiscono è fondamentale per gestire il peso e il benessere del tuo animale in modo sicuro e controllato.',
  },
  {
    type: 'paragraph',
    html: 'Il RER copre l\'energia necessaria per le funzioni organiche di base, la respirazione e la circolazione mentre l\'animale è a riposo. Il DER prende poi questo valore e lo adatta allo stile di vita dell\'animale, che si tratti di un cane da prestazione attivo o di un gatto d\'interno tranquillo. Calibrando correttamente questi valori, possiamo raggiungere un equilibrio che promuove un punteggio di condizione corporea sano nel tempo.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: Energia a riposo', value: '70 × kg^0,75' },
      { label: 'Fattore cucciolo', value: 'x2.5 a x3.5' },
      { label: 'Fattore adulto attivo', value: 'x1.6 a x2.0' },
      { label: 'Fattore senior', value: 'x1.0 a x1.4' },
    ],
  },
  { type: 'title', text: 'Come Leggere e Interpretare l\'Etichetta del Cibo del Tuo Animale Domestico', level: 3 },
  {
    type: 'paragraph',
    html: 'Affinché il calcolatore ti dia i grammi esatti, devi conoscere la <strong>densità calorica</strong> del prodotto, nota anche come la sua energia metabolizzabile. Questo valore è solitamente espresso come kcal/kg o kcal/100g sulla confezione. Inserendo questi numeri con precisione, puoi progettare una dieta che non sia né carente né eccessiva.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Crocchette per dieta leggera', value: '~3000 kcal/kg' },
      { label: 'Crocchette per adulti standard', value: '~3500 kcal/kg' },
      { label: 'Crocchette per cuccioli ad alta energia', value: '~4000 kcal/kg' },
      { label: 'Cibo umido in scatola', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Nota Nutrizionale del Veterinario',
    html: 'Ogni animale domestico è un individuo con il proprio metabolismo unico. Il calcolatore offre un punto di partenza supportato scientificamente, ma dovresti sempre monitorare la condizione corporea reale palpando le costole del tuo animale. Se riesci a sentirle facilmente senza premere forte, il peso è ideale. Se le costole sono difficili da trovare sotto uno strato di grasso, potrebbe essere il momento di limitare la razione.',
  },
  { type: 'title', text: 'Differenze Nutrizionali tra Gatti e Cani', level: 3 },
  {
    type: 'paragraph',
    html: 'I gatti sono carnivori obbligati e il loro metabolismo è ottimizzato per trarre energia dalle proteine animali. Nei cani, vediamo un metabolismo onnivoro più flessibile, ma si deve comunque fare attenzione all\'eccesso di carboidrati che può portare all\'aumento di peso. Entrambe le specie prosperano con una razione controllata che eviti un carico eccessivo sulle articolazioni e sul sistema cardiovascolare durante la loro vita.',
  },
  {
    type: 'paragraph',
    html: 'Dedicare qualche minuto a calcolare l\'esatta razione è uno degli investimenti più proficui in medicina preventiva che tu possa fare come proprietario. Un peso sano riduce drasticamente il rischio di malattie croniche e dà al tuo migliore amico la migliore possibilità di una vita lunga e vibrante. Consulta il tuo veterinario alla prossima visita di routine per assicurarti che la tua attuale strategia di alimentazione sia ottimale.',
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
