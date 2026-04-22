import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'calcolatore-eta-animali';
const title = 'Calcolatore d\'Età per Animali';
const description = 'Scopri l\'età reale del tuo cane o gatto in anni umani. Dimentica la "regola del 7". Usa il nostro calcolatore basato sulla scienza veterinaria attuale per risultati precisi.';

const ui: PetAgeUI = {
  toolTitle: 'Calcolatore d\'Età',
  toolSubtitle: 'Quanti anni umani ha davvero il tuo amico a quattro zampe?',
  petNameLabel: 'Nome (Opzionale)',
  petNamePlaceholder: 'es., Buddy',
  petTypeDog: 'Cane',
  petTypeCat: 'Gatto',
  sizeSmall: 'Piccolo',
  sizeMedium: 'Medio',
  sizeLarge: 'Grande',
  sizeGiant: 'Gigante',
  birthYearLabel: 'Anno di nascita',
  humanAgeLabel: 'L\'età umana di',
  humanAgeUnit: 'anni',
  humanAgeYears: 'anni',
  lifeStageLabel: 'Fase della vita',
  milestoneLabel: 'Prossima tappa',
  shareBtn: 'Condividi il risultato',
  shareSuccess: 'Copiato! Apertura della scheda...',
  humanAgeTitle: 'Età Magica',
  recalculateBtn: 'Calcola un\'altra età',
  realAgeLabel: 'Età Reale',
  defaultPetName: 'Il tuo animale',
  stageDogPuppy: 'Cucciolo Giocoso',
  stageDogTeen: 'Ado Ribelle',
  stageDogAdult: 'Adulto in Forma',
  stageDogMature: 'Maturità Distinta',
  stageDogSenior: 'Saggezza Senior',
  stageCatKitten: 'Curiosità Infantile',
  stageCatYouth: 'Gioventù Felina',
  stageCatReign: 'Regno Domestico',
  stageCatVeteran: 'Veterano Viziato',
  stageCatVenerable: 'Venerabile Anziano',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: 'È vero che un anno di cane equivale a sette anni umani?',
    answer: 'No. È una regola semplificata che la scienza veterinaria moderna ha smentito. I cani maturano molto velocemente nei primi due anni, e il processo rallenta poi, variando secondo peso e razza. Studi recenti sulla metilazione del DNA hanno permesso di sviluppare formule di invecchiamento molto più precise che riflettono il reale sviluppo biologico degli animali lungo la loro vita.',
  },
  {
    question: 'Perché i cani grandi invecchiano più velocemente?',
    answer: 'Le razze di cani grandi hanno un metabolismo e una crescita più accelerati, il che provoca uno stress ossidativo maggiore nelle loro cellule. Questo significa che la loro speranza di vita è più corta di quella dei cani piccoli. I marcatori biologici mostrano che le razze giganti possono raggiungere lo status di senior a 5 anni, mentre le razze piccole potrebbero non raggiungerlo fino ai 10 o 11 anni.',
  },
  {
    question: 'Come invecchiano i gatti rispetto agli umani?',
    answer: 'Un gatto termina l\'infanzia a un mese, l\'adolescenza a 6 mesi e raggiunge l\'età adulta (24 anni umani) a 2 anni. Dopo, ogni anno di vita di un gatto equivale a circa 4 anni umani. Questo modello è costante nelle diverse razze di gatti, a differenza della grande variazione osservata nei cani.',
  },
  {
    question: 'A che età un animale è considerato Senior?',
    answer: 'In genere un cane è senior quando raggiunge il 75% della sua speranza di vita prevista. Per i gatti di solito è dai 7 agli 11 anni, secondo la loro salute. Gli esami veterinari regolari sono critici in questa fase per vigilare problemi comuni come malattie renali o declino cognitivo.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Seleziona la specie', text: 'Scegli se hai un cane o un gatto per applicare la formula biologica corretta secondo il loro tasso metabolico specifico.' },
  { name: 'Indica la taglia', text: 'Per i cani, il peso è chiave per determinare l\'età biologica. Indica se è piccolo (fino a 10 kg), medio (10-25 kg), grande (25-45 kg) o gigante (oltre 45 kg).' },
  { name: 'Inserisci l\'anno di nascita', text: 'Inserisci l\'anno di nascita del tuo animale per calcolare la sua età cronologica. Il sistema elaborerà l\'informazione con le curve di invecchiamento stabilite.' },
  { name: 'Analizza la fase di vita', text: 'Verifica il risultato per sapere se il tuo animale è al stadio di cucciolo, giovane, adulto o senior rispetto a un umano e comprendi le sue necessità attuali.' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Cosa devi sapere sull\'invecchiamento animale',
    items: [
      'La "regola del 7" è un mito: i cani maturano esponenzialmente i primi 2 anni.',
      'Un cane di 1 anno equivale a 15 anni umani; un cane di 2 anni equivale a 24 anni umani.',
      'I cani grandi invecchiano più velocemente dei piccoli dopo i 2 anni.',
      'I gatti seguono una curva più lineare: ogni anno di gatto equivale a 4 umani dopo i 2 anni.',
      'L\'età biologica è un miglior predittore delle necessità di salute dell\'età cronologica.',
      'Checkup regolari aiutano a rilevare problemi prima che siano gravi.',
    ],
  },
  { type: 'title', text: 'La Verità Scientifica sull\'Età del tuo Animale', level: 2 },
  {
    type: 'paragraph',
    html: 'Sapevi che un gatto di 2 anni possiede già la maturità di una persona di 24 anni? Scopri perché la regola di moltiplicare per 7 è un mito e come capire la realtà biologica può migliorare le cure del tuo animale. Il vecchio mito che "1 anno di cane equivale a 7 anni umani" è una semplificazione che non tiene conto dei cambiamenti di sviluppo enormi all\'inizio della vita. Gli animali maturano a velocità incredibile i primi due anni, raggiungendo la maturità fisica in fretta. Dopo, questa curva di invecchiamento si appiattisce e rallenta.',
  },
  {
    type: 'paragraph',
    html: 'La ricerca moderna, inclusi studi su orologi epigenetici e metilazione del DNA, ci ha dato una visione sfumata. Questi studi mostrano che i cambiamenti chimici nel DNA di un cane cambiano a ritmi diversi. In fase di cucciolo i cambiamenti sono rapidi, mentre in età adulta i cambiamenti metabolici sono più graduali. Questa comprensione ha permesso agli scienziati di sviluppare formule che sono molto più precise di qualsiasi moltiplicazione lineare.',
  },
  { type: 'title', text: 'La Scienza dietro il Calcolo', level: 3 },
  {
    type: 'paragraph',
    html: 'Questo strumento usa le linee guida ufficiali della <strong>American Animal Hospital Association (AAHA)</strong> e gli ultimi studi sulla metilazione di DNA nei cani per darti la stima più precisa possibile. Combinando dati specifici di taglia con marcatori biologici, creiamo un modello completo dello sviluppo dell\'animale. Questo approccio riconosce che un Chihuahua e un Alano hanno profili di invecchiamento molto diversi fin dalla nascita.',
  },
  {
    type: 'paragraph',
    html: 'Capire queste differenze è cruciale per i proprietari responsabili. Questo permette di regolare gli interventi veterinari, come il passaggio a una dieta senior o l\'inizio di integratori per articolazioni. Il nostro calcolatore unisce la scienza complessa con la conoscenza pratica quotidiana per gli amanti degli animali di tutto il mondo.',
  },
  {
    type: 'table',
    headers: ['Specie', 'Anno 1', 'Anno 2', 'Anno 3 e oltre'],
    rows: [
      ['Gatto', '15 anni umani', '24 anni umani', '+4 anni all\'anno'],
      ['Cane piccolo', '15 anni umani', '24 anni umani', '+5 anni all\'anno'],
      ['Cane medio', '15 anni umani', '24 anni umani', '+6 anni all\'anno'],
      ['Cane grande', '15 anni umani', '24 anni umani', '+7 anni all\'anno'],
      ['Cane gigante', '15 anni umani', '24 anni umani', '+8 anni all\'anno'],
    ],
  },
  { type: 'title', text: 'Fasi della Vita e Preparazione', level: 3 },
  {
    type: 'paragraph',
    html: 'Conoscere l\'età reale del tuo animale ti aiuta a capire le sue necessità mediche in ogni fase. Proprio come gli umani passano per delle fasi, cani e gatti hanno cambiamenti fisiologici specifici crescendo. Essere consapevoli di queste transizioni ti permette di dare il supporto corretto al momento giusto, siano giochi per un adolescente o cure per un senior.',
  },
  {
    type: 'card',
    title: 'Cucciolo o Junior',
    icon: 'mdi:star-shooting',
    html: 'È la fase di crescita esplosiva. Le ossa crescono freneticamente e i denti da latte lasciano posto ai definitivi. La vaccinazione e socializzazione precoce sono critiche qui per rassicurare che diventino adulti equilibrati. È anche il momento migliore per creare buone abitudini per la vita.',
  },
  {
    type: 'card',
    title: 'Adulto',
    icon: 'mdi:shield-check',
    html: 'È il picco di forma fisica per la maggior parte degli animali. La loro personalità è definita e di solito sono al momento più attivo. È il momento ideale per godere di attività intense e mantenere un peso ideale per prevenire malattie future. L\'esercizio costante e l\'alimento equilibrato sono i pilastri della salute in questi anni.',
  },
  {
    type: 'card',
    title: 'Senior',
    icon: 'mdi:heart-pulse',
    html: 'Iniziano i peli grigi sul muso e l\'animale tende a dormire di più. Il metabolismo rallenta e possono mostrare meno interesse per il gioco. Da qui, i checkup dovrebbero essere ogni sei mesi. Vigila segni di artrite e cambi di condotta. La rilevazione precoce di problemi senior è la via migliore per assicurare che la loro qualità di vita resti alta.',
  },
  {
    type: 'tip',
    title: 'Consiglio Veterinario',
    html: 'L\'età calcolata è una stima biologica media. Fattori come razza, genetica e stile di vita possono impattare sull\'invecchiamento reale del tuo animale. Per consigli personalizzati e valutazioni di salute, consulta il tuo veterinario.',
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
  faqTitle: 'Domande Frequenti',
  faq: 'Bibliografia',
  bibliography,
  howTo,
  schemas,
};
