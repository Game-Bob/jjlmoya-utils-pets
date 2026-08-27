import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'calcolatore-fabbisogno-acqua-giornaliero-cani-gatti';
const title = 'Calcolatore fabbisogno acqua giornaliero per cani e gatti';
const description = "Stima il fabbisogno idrico giornaliero per cani e gatti in base al peso corporeo, al tipo di alimentazione, all'attività e alla temperatura.";

const ui: PetWaterIntakeUI = {
  "journeyHint": "Scegli l'animale, inserisci il peso corporeo e imposta il cibo e il clima della giornata.",
  "instantHint": "Ogni scelta aggiorna immediatamente il livello d'acqua. È una guida orientativa.",
  "unitLegend": "Unità",
  "metricUnit": "Metrico",
  "imperialUnit": "Imperiale",
  "speciesLegend": "Per chi è la ciotola dell'acqua?",
  "speciesDog": "Cane",
  "speciesCat": "Gatto",
  "speciesDogMeta": "Guida di mantenimento 60 mL per kg",
  "speciesCatMeta": "Guida di mantenimento 40 mL per kg",
  "weightLabel": "Peso corporeo",
  "weightHint": "Inserisci il peso sano attuale del tuo animale.",
  "weightKg": "kg",
  "weightLb": "lb",
  "dietLegend": "Quanta acqua proviene dal cibo?",
  "dietDry": "Prevalentemente cibo secco",
  "dietDryMeta": "La maggior parte dell'acqua viene bevuta dalla ciotola",
  "dietMixed": "Alimentazione mista",
  "dietMixedMeta": "Una parte dell'acqua proviene dai pasti",
  "dietWet": "Prevalentemente cibo umido",
  "dietWetMeta": "Il cibo fornisce la maggior parte dell'umidità",
  "activityLegend": "Attività odierna",
  "activityCalm": "Tranquillo / Riposo",
  "activityTypical": "Moderata / Normale",
  "activityActive": "Intensa / Molto attivo",
  "heatLegend": "Clima e temperatura",
  "heatNormal": "Temperato / Normale",
  "heatWarm": "Caldo",
  "heatHot": "Molto caldo / Afoso",
  "resultEyebrow": "Stima del livello d'acqua",
  "totalRangeLabel": "Acqua totale necessaria (tutte le fonti)",
  "drinkingRangeLabel": "Guida indicativa per la ciotola",
  "totalRangeHint": "Intervallo giornaliero globale compresa l'umidità del cibo.",
  "drinkingRangeHint": "Quota stimata da bere direttamente dalla ciotola.",
  "statusEveryday": "Condizioni standard",
  "statusActive": "Giornata attiva",
  "statusWarm": "Tempo caldo",
  "statusDemanding": "Condizioni impegnative",
  "statusDetailEveryday": "Profilo di mantenimento base senza fattori extra di calore o sforzo.",
  "statusDetailActive": "L'esercizio aumenta le perdite idriche. Garantisci sempre acqua fresca.",
  "statusDetailWarm": "Il calore aumenta l'affanno. L'ombra e il fresco restano prioritari.",
  "statusDetailDemanding": "Alta attività e forte calore combinati. Monitora attentamente l'animale.",
  "resultEmpty": "Inserisci un peso valido per visualizzare il livello d'acqua.",
  "sceneAria": "Serbatoio d'acqua per l'animale selezionato",
  "sceneTotal": "ACQUA TOTALE",
  "sceneBowl": "centro dell'intervallo giornaliero",
  "methodTitle": "Metodo di calcolo",
  "methodText": "Segue le linee guida AAHA di 60 mL/kg nei cani e 40 mL/kg nei gatti, adattate a cibo e clima.",
  "noteTitle": "La ciotola dell'acqua non sostituisce la diagnosi",
  "noteText": "Lascia sempre acqua pulita a disposizione. In caso di variazioni improvvise della sete, consulta un veterinario.",
  "invalidWeight": "Inserisci un peso corporeo valido.",
  "weightRange": "Il peso deve essere compreso tra 0.5 kg e 100 kg."
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    "question": "Quanta acqua deve bere un cane o un gatto al giorno?",
    "answer": "Le linee guida AAHA suggeriscono un fabbisogno di mantenimento di circa 60 mL/kg al giorno per i cani e 40 mL/kg per i gatti. Il valore varia in base a dieta, attività e temperatura."
  },
  {
    "question": "Il cibo umido riduce l'uso della ciotola dell'acqua?",
    "answer": "Sì, il cibo umido contiene tra il 75% e l'82% di acqua, coprendo gran parte dell'idratazione. Gli animali che mangiano umido bevono meno dalla ciotola."
  },
  {
    "question": "Quando bisogna preoccuparsi per l'assunzione di acqua?",
    "answer": "Consulta subito un veterinario se noti un aumento improvviso della sete (polidipsia) o il rifiuto di bere, sintomi di possibili disturbi renali o diabete."
  },
  {
    "question": "Il caldo raddoppia il fabbisogno d'acqua?",
    "answer": "Sì, l'affanno con il caldo o il movimento aumenta la perdita d'acqua. Assicura sempre acqua fresca e ombra."
  }
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  {
    "name": "Selezionare specie e peso",
    "text": "Scegli cane o gatto e inserisci il peso sano in kg o lb."
  },
  {
    "name": "Scegliere il tipo di cibo",
    "text": "Imposta cibo secco, misto o umido per calcolare l'apporto di acqua dai pasti."
  },
  {
    "name": "Impostare attività e clima",
    "text": "Definisci il livello di esercizio e la temperatura ambiente per la perdita d'acqua."
  },
  {
    "name": "Controllare le stime",
    "text": "Verifica l'acqua totale necessaria e la quantità stimata da bere dalla ciotola."
  }
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Ligne Guida Essenziali sul Fabbisogno Idrico di Cani e Gatti",
    "items": [
      "Mantenimento base: I cani richiedono ~60 mL/kg al giorno; i gatti richiedono ~40 mL/kg al giorno secondo le linee guida AAHA.",
      "Impatto della dieta: Il cibo umido fornisce il 70-80% di umidità, riducendo significativamente le visite alla ciotola dell'acqua.",
      "Caldo ed esercizio: L'affanno aumenta la perdita evaporativa di fluidi, aumentando il fabbisogno giornaliero di idratazione.",
      "Segnali di allarme medico: Aumenti o cali improvvisi della sete richiedono una valutazione veterinaria immediata.",
      "Libero accesso all'acqua: Posizionare più ciotole pulite in luoghi tranquilli promuove abitudini di idratazione sane."
    ]
  },
  {
    "type": "title",
    "text": "Comprendere il Fabbisogno Giornaliero di Idratazione per Cani e Gatti",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Una corretta idratazione è fondamentale per la funzione metabolica, la digestione, la lubrificazione articolare e la salute renale nei cani e nei gatti. L'acqua costituisce tra il 60% e il 70% del peso corporeo totale di un animale adulto, e anche un modesto deficit di fluidi può compromettere processi fisiologici vitali. La letteratura veterinaria dell'American Animal Hospital Association (AAHA) stabilisce i requisiti giornalieri di mantenimento a circa 60 mL per chilogrammo di peso corporeo per i cani e 40 mL per chilogrammo per i gatti."
  },
  {
    "type": "paragraph",
    "html": "Tuttavia, queste cifre di mantenimento rappresentano l'apporto idrico totale giornaliero piuttosto che la quantità che l'animale deve bere direttamente dalla ciotola. L'apporto idrico totale di un animale domestico è composto da acqua potabile, umidità contenuta nel cibo commerciale o casalingo e una piccola quantità di acqua metabolica prodotta durante la respirazione cellulare. Comprendere questa distinzione aiuta i proprietari ad evitare preoccupazioni quando cani o gatti bevono meno dalla ciotola con diete umide."
  },
  {
    "type": "title",
    "text": "Acqua Totale Giornaliera vs Consumo dalla Ciotola",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "La forma del cibo somministrato gioca un ruolo dominante nel determinare quanta acqua un animale cercherà dalla ciotola. Le crocchette secche commerciali contengono solo dal 6% al 10% di umidità, richiedendo all'animale di bere quasi tutto il suo fabbisogno giornaliero dal recipiente. Al contrario, il cibo umido in scatola è composto dal 75% all'82% di contenuto d'acqua. Un felino che mangia esclusivamente cibo umido può ottenere quasi tutta la sua idratazione direttamente dai pasti, con conseguenti visite rare alla ciotola dell'acqua del tutto fisiologiche."
  },
  {
    "type": "table",
    "headers": [
      "Fattore di Ingresso",
      "Impatto sul Fabbisogno Idrico",
      "Considerazione Clinica Chiave"
    ],
    "rows": [
      [
        "Profilo Specie",
        "Imposta il tasso di mantenimento base",
        "Base canina ~60 mL/kg; Base felina ~40 mL/kg"
      ],
      [
        "Peso Corporeo",
        "Scala il volume totale di base",
        "Usare il peso forma ideale per animali in sovrappeso"
      ],
      [
        "Umidità della Dieta",
        "Determina la quota fornita dal cibo",
        "Il cibo umido fornisce fino all'80% dell'acqua giornaliera"
      ],
      [
        "Attività e Caldo",
        "Aumenta le perdite da affanno",
        "Le alte temperature richiedono aumenti idrici proporzionali"
      ]
    ]
  },
  {
    "type": "title",
    "text": "Linee Guida Pratiche per la Gestione dell'Idratazione",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "I proprietari dovrebbero concentrarsi nel facilitare un accesso libero e illimitato ad acqua fresca e pulita in ogni momento, anziché tentare di imporre un bersaglio numerico rigido. Le ciotole dell'acqua dovrebbero essere lavate quotidianamente e riempite con acqua fresca. Per i gatti, che spesso hanno uno scarso stimolo della sete ereditato dagli antenati del deserto, l'uso di fontanelle per animali e ciotole ampie stimola l'assunzione volontaria di acqua."
  },
  {
    "type": "card",
    "title": "Diete a Crocchette Secche",
    "icon": "mdi:food-drumstick",
    "html": "Gli animali alimentati con cibo secco dipendono fortemente dall'atto di bere dalla ciotola. Assicurarsi che le ciotole siano pulite e collocate in luoghi tranquilli e accessibili lontano dalle lettiere."
  },
  {
    "type": "card",
    "title": "Diete a Cibo Umido in Scatola",
    "icon": "mdi:can",
    "html": "Le diete con cibo umido forniscono una notevole umidità alimentare. Sebbene gli animali che mangiano cibo in scatola bevano naturalmente meno dalle ciotole, l'acqua fresca deve rimanere accessibile."
  },
  {
    "type": "card",
    "title": "Gestione in Giornate Calde e Attive",
    "icon": "mdi:weather-sunny",
    "html": "Durante il caldo o il gioco intenso, la perdita evaporativa da affanno aumenta rapidamente. Fornire sempre zone d'ombra e pause con acqua fresca per prevenire lo stress da calore."
  },
  {
    "type": "tip",
    "title": "Campanelli d'Allarme Veterinari per l'Idratazione",
    "html": "Un cambiamento improvviso nei modelli di bevuta - sia bere molta più acqua (polidipsia) che rifiutarla del tutto - è un importante indicatore clinico. Condizioni come malattie renali, diabete e disturbi delle vie urinarie si manifestano spesso attraverso un'alterazione della sete. Consultare immediatamente un veterinario."
  }
];

const schemas: PetWaterIntakeLocaleContent['schemas'] = [
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

export const content: PetWaterIntakeLocaleContent = {
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
