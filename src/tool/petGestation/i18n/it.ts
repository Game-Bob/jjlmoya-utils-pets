import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';

const slug = 'calcolatore-gestazione-animali';
const title = 'Calcolatore di gestazione per animali domestici';
const description = 'Calcola la data presunta del parto per cani, gatti, conigli o furetti dalla data di accoppiamento con intervallo documentato e guida veterinaria.';

const ui: PetGestationLocaleContent['ui'] = {
  "journeyHint": "Scegli la specie, inserisci la data di accoppiamento e segui la bussola verso la finestra del parto.",
  "instantHint": "Modifica un parametro e il calendario si aggiornerà all istante.",
  "speciesLegend": "Che tipo di animale domestico è?",
  "speciesDog": "Cane",
  "speciesCat": "Gatto",
  "speciesRabbit": "Coniglio",
  "speciesFerret": "Furetto",
  "speciesDogMeta": "Da 58 a 72 giorni",
  "speciesCatMeta": "Da 64 a 66 giorni",
  "speciesRabbitMeta": "Circa 31 giorni",
  "speciesFerretMeta": "Circa 42 giorni",
  "matingDateLabel": "Data di accoppiamento",
  "matingDateHint": "Utilizza la prima data nota. È una stima orientativa e non una data di fecondazione certa.",
  "presetToday": "Oggi",
  "presetWeekAgo": "7 giorni fa",
  "presetFortnightAgo": "14 giorni fa",
  "calculateButton": "Calcola finestra del parto",
  "resultEyebrow": "La bussola di nidificazione indica",
  "dueDateLabel": "Data presunta del parto",
  "windowLabel": "Finestra attesa",
  "remainingLabel": "Giorni al parto",
  "elapsedLabel": "Giorni trascorsi",
  "daysLabel": "giorni",
  "dayLabel": "giorno",
  "statusFuture": "La data inserita è futura",
  "statusWaiting": "Gestazione in corso",
  "statusWindow": "La finestra del parto è aperta",
  "statusLate": "Superato l intervallo massimo stimato",
  "resultEmpty": "La tua bussola comparirà qui.",
  "sampleLabel": "Esempio pratico",
  "sceneMating": "ACCOPPIAMENTO",
  "sceneToday": "Stato attuale",
  "sceneDue": "FINESTRA DI PARTO",
  "noteTitle": "Nota importante sulla salute",
  "noteText": "La data di accoppiamento non coincide sempre con l ovulazione o la fecondazione. Consulta un veterinario per controlli prénatali e conferma della gravidanza.",
  "sourceTitle": "Metodologia",
  "sourceText": "I cani utilizzano un intervallo da 58 a 72 giorni, mentre gatti, conigli e furetti seguono il Manuale Veterinario MSD.",
  "invalidDate": "Inserisci una data di accoppiamento valida.",
  "futureDate": "Una data futura non può indicare una gravidanza attiva."
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    "question": "Quanto è preciso il calcolatore di gestazione per animali?",
    "answer": "Si tratta di una stima orientativa utile alla pianificazione. Nel cane la data di accoppiamento può differire dall ovulazione perché gli spermatozoi sopravvivono diversi giorni nel tratto riproduttivo. Il calcolatore mostra un intervallo temporale anziché un singolo giorno rigido. Il veterinario può confermare la data precisa mediante ecografia o esame clinico."
  },
  {
    "question": "Quanto dura la gravidanza di un cane?",
    "answer": "Il Manuale Veterinario MSD indica da 58 a 72 giorni dal primo accoppiamento quando la data di ovulazione non è nota. Se l ovulazione è accertata, il periodo è più ristretto, tra 62 e 64 giorni. La razza e la dimensione della cucciolata possono influenzare la durata effettivo del parto."
  },
  {
    "question": "Quanto dura la gravidanza di un gatto?",
    "answer": "La gravidanza della gatta dura in genere circa 65 giorni, con parto stimato tra 64 e 66 giorni dall incremento ormonale. Lo strumento serve come guida di pianificazione familiare per preparare al meglio l ambiente di nascita."
  },
  {
    "question": "Perché sono inclusi conigli e furetti?",
    "answer": "Conigli e furetti sono animali da compagnia diffusi con durate di gravidanza brevi e ben documentate (circa 31 giorni per i conigli e 42 per i furetti). Questo calcolatore fornisce indicazioni utili per entrambe le specie."
  },
  {
    "question": "Quando contattare il veterinario?",
    "answer": "Rivolgiti immediatamente a un veterinario se la gravidanza supera l intervallo massimo, se il travaglio si prolunga senza progressi, o in presenza di dolore, emorragia o perdite anomale della femmina."
  }
];

const howTo: PetGestationLocaleContent['howTo'] = [
  {
    "name": "Seleziona la specie",
    "text": "Scegli cane, gatto, coniglio o furetto per applicare il profilo di gravidanza corrispondente."
  },
  {
    "name": "Inserisci la data",
    "text": "Indica la data del primo accoppiamento noto della femmina."
  },
  {
    "name": "Leggi la bussola",
    "text": "Verifica la data presunta, l intervallo atteso e i giorni di gravidanza trascorsi."
  },
  {
    "name": "Pianifica con cura",
    "text": "Utilizza i dati per preparare la cassa parto e concordare i controlli con la clinica veterinaria."
  }
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Gestazione animali domestici in sintesi",
    "items": [
      "Inserisci la data di accoppiamento e seleziona la specie per calcolare il parto.",
      "I cani richiedono un intervallo più ampio a causa della variabilità dell ovulazione.",
      "Gatti, conigli e furetti utilizzano gli standard del Manuale Veterinario MSD.",
      "Strumento di supporto pratico che non sostituisce l esame veterinario diretto."
    ]
  },
  {
    "type": "title",
    "text": "Come funziona il calcolatore di gestazione",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Questo calcolatore trasforma la data di accoppiamento osservata in un calendario stimato del parto. Aggiunge la durata specifica della specie e mostra sia una data media sia l intervallo previsto. Questa distinzione è fondamentale: l accoppiamento non coincide sempre con la fecondazione dell uovo. Aiuta i proprietari a preparare per tempo il materiale necessario per i cuccioli e organizzare le domande per il veterinario curante. Informazioni importanti per i proprietari e i veterinari per monitorare la salute durante la gravidanza e garantire una preparazione ottimale e serena al parto per la madre e i cuccioli."
  },
  {
    "type": "paragraph",
    "html": "La bussola visuale posiziona l accoppiamento all inizio di una linea temporale circolare. L anello colorato cresce con il passare dei giorni mentre il centro indica i giorni trascorsi fino al momento del parto. Se l intervallo massimo viene superato, lo stato segnala l importanza di contattare la clinica veterinaria."
  },
  {
    "type": "title",
    "text": "Profili di gestazione documentati",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Specie",
      "Periodo tipico",
      "Stima dall accoppiamento"
    ],
    "rows": [
      [
        "Cane",
        "Circa 63 giorni",
        "Da 58 a 72 giorni"
      ],
      [
        "Gatto",
        "Circa 65 giorni",
        "Da 64 a 66 giorni"
      ],
      [
        "Coniglio",
        "Circa 31 giorni",
        "31 giorni"
      ],
      [
        "Furetto",
        "Circa 42 giorni",
        "42 giorni"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "Il profilo canino richiede maggiore cautela. Le linee guida veterinarie spiegano che la durata della gestazione varia a seconda dell evento biologico noto. Un intervallo rispetto all accoppiamento è più trasparente di un singolo numero fisso per l uso quotidiano."
  },
  {
    "type": "title",
    "text": "Preparazione prima della finestra di parto",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Sfrutta questa stima per organizzare un ambiente tranquillo, preparare i numeri di emergenza della clinica veterinaria e monitorare il benessere della femmina. Segui le raccomandazioni professionali su alimentazione e salute generale."
  },
  {
    "type": "tip",
    "title": "La salute dell animale al primo posto",
    "html": "Contatta subito il veterinario se noti sofferenza, ritardi eccessivi, perdita prolungata di forze o complicanze durante la gravidanza o il travaglio."
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
