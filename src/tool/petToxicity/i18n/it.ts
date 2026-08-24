import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'verificatore-alimenti-tossici-cani-gatti';
const title = 'Verificatore di alimenti tossici per cani e gatti';
const description = 'Verifica gli alimenti pericolosi per cani e gatti, conosci i sintomi di allarme e scopri quando contattare un veterinario o il soccorso animale.';

const ui: PetToxicityUI = {
  "journeyHint": "Seleziona l animale, apri l atlante alimentare e consulta l avvertenza specifica per la specie prima di decidere.",
  "speciesLabel": "Specie",
  "speciesDog": "Cane",
  "speciesCat": "Gatto",
  "speciesDogMeta": "Profilo canino",
  "speciesCatMeta": "Profilo felino",
  "foodLabel": "Alimento o ingrediente",
  "foodPlaceholder": "Seleziona un alimento",
  "foodMenuHint": "L elenco cambia in base all animale poiché il rischio è specifico per specie.",
  "resultEyebrow": "L atlante alimentare indica",
  "resultEmpty": "Seleziona un alimento per aprire la scheda di sicurezza.",
  "sceneLabel": "Mappa di esposizione",
  "sceneReady": "Seleziona un alimento",
  "sceneSelected": "Scheda specifica aperta",
  "riskCritical": "Allerta urgente",
  "riskHigh": "Rischio elevato",
  "riskCaution": "Attenzione",
  "riskUnknown": "Dati insufficienti",
  "riskLabel": "Livello di rischio",
  "whyLabel": "Perché è importante",
  "signsLabel": "Sintomi da osservare",
  "actionLabel": "Cosa fare",
  "callVetLabel": "Il passo più sicuro è un parere professionale.",
  "callVetText": "Un calcolatore non può stimare dosi tossiche né sostituire un esame veterinario.",
  "sourceLabel": "Evidenze utilizzate",
  "sourceText": "I profili si basano sulle linee guida di tossicologia veterinaria di ASPCA, FDA e Manuale Veterinario MSD.",
  "emergencyTitle": "Se il tuo animale ha ingerito qualcosa di sospetto",
  "emergencyText": "Chiama immediatamente il veterinario, una clinica d urgenza o il centro antiveleni. Conserva la confezione, gli ingredienti e la quantità stimata.",
  "openMenu": "Apri opzioni",
  "closeMenu": "Chiudi opzioni"
};

const faq: PetToxicityLocaleContent['faq'] = [
  {
    "question": "Questo strumento garantisce la sicurezza del mio animale?",
    "answer": "No. È una guida educativa sui pericoli alimentari comuni, non una diagnosi o un calcolatore di dosi. Il rischio dipende da specie, prodotto, quantità e peso. In caso di dubbio consulta sempre un veterinario."
  },
  {
    "question": "Quali alimenti sono particolarmente pericolosi per i cani?",
    "answer": "Xilitolo, cioccolato, caffeina, uva, uvetta, cipolla, aglio, alcol, noci macadamia e pasta lievitata cruda sono tra i più pericolosi. Conservare la confezione aiuta il veterinario."
  },
  {
    "question": "Cipolla e aglio sono pericolosi per i gatti?",
    "answer": "Sì. I gatti sono particolarmente sensibili ai danni ai globuli rossi causati dalle piante Allium (cipolla, aglio, erba cipollina). Anche le forme essiccate o in polvere sono dannose."
  },
  {
    "question": "Perché lo xilitolo mostra avvertenze diverse tra cani e gatti?",
    "answer": "Nei cani lo xilitolo causa una rapida e grave ipoglicemia. Nei gatti questo pericolo è meno documentato dalla FDA, ma non è una garanzia di sicurezza."
  },
  {
    "question": "Cosa fare se l alimento non è presente nell elenco?",
    "answer": "L assenza nell elenco non è prova di sicurezza. Conserva la confezione, annota quantità e orario e contatta subito un veterinario."
  }
];

const howTo: PetToxicityLocaleContent['howTo'] = [
  {
    "name": "Seleziona la specie",
    "text": "Scegli Cane o Gatto per caricare le informazioni e le avvertenze specifiche."
  },
  {
    "name": "Scegli l alimento",
    "text": "Apri il menu e seleziona l ingrediente più vicino. Presta attenzione ai prodotti concentrati."
  },
  {
    "name": "Leggi la scheda di sicurezza",
    "text": "Consulta la gravità del rischio, i sintomi probabili e l azione consigliata."
  },
  {
    "name": "Contatta un professionista",
    "text": "In caso di ingestione reale, chiama il veterinario fornendo i dettagli del prodotto."
  }
];

const seo: PetToxicityLocaleContent['seo'] = [
  {
    type: 'summary',
    title: "Controllo rapido della sicurezza alimentare per cani e gatti",
    items: [
      "Seleziona prima la specie poiché lo stesso alimento ha impatti diversi su cani e gatti.",
      "Utilizza le schede per comprendere il pericolo, i sintomi e il livello di urgenza.",
      "Tratta l ingestione di xilitolo nel cane come un emergenza medica assoluta.",
      "Contatta il veterinario per qualsiasi esposizione reale accertata."
],
  },
  {
    type: 'title',
    text: "Come usare responsabilmente il verificatore di alimenti tossici",
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Questo verificatore di alimenti tossici è stato progettato per i primi minuti critici dopo che un cane o un gatto ha ingerito cibo non idoneo. Seleziona l animale, apri il profilo dell alimento e utilizza la scheda per preparare la telefonata con la clinica veterinaria. La struttura separa il motivo del pericolo dai sintomi visibili, facilitando la gestione del panico in situazioni di tensione e urgenza medica.",
  },
  {
    type: 'paragraph',
    html: "La distinzione tra le specie è fondamentale. I cani e i gatti metabolizzano le sostanze in modo differente. Lo xilitolo provoca una grave ipoglicemia nei cani, mentre le cipolle e l aglio danneggiano gravemente i globuli rossi dei gatti. Seguire le giuste raccomandazioni evita errori di soccorso casalingo che potrebbero aggravare il quadro clinico.",
  },
  {
    type: 'title',
    text: "Principali pericoli alimentari e dettagli chiave",
    level: 2,
  },
  {
    type: 'table',
    headers: ["Alimento o ingrediente","Rischio principale","Dettagli importanti"],
    rows: [["Cioccolato e caffeina","Effetti cardiaci e nervosi","La concentrazione di cacao e il peso dell animale sono determinanti."],["Xilitolo","Rapido calo di zuccheri nei cani","Controlla gomme senza zucchero, dolci e prodotti da forno."],["Uva e uvetta","Possibile danno renale nei cani","Non considerare sicure le piccole quantità ingerite."],["Cipolla e aglio","Danno ai globuli rossi e anemia","Le forme essiccate e in polvere concentrano il rischio."],["Pasta lievitata cruda","Espansione dello stomaco e alcol","La lievitazione genera pressione e tossicità etilica."]],
  },
  {
    type: 'paragraph',
    html: "Oltre alla tossicità chimica esistono rischi fisici come ostruzioni causate da ossa o noccioli e rischi di pancreatite dovuti ad alimenti molto grassi. Un monitoraggio attento permette di intervenire per tempo prima che insorgano complicazioni sistemiche.",
  },
  {
    type: 'title',
    text: "Cosa fare dopo una possibile esposizione",
    level: 2,
  },
  {
    type: 'list',
    items: [
      "Rimuovi il cibo residuo e conserva la confezione originale.",
      "Annota specie, peso, alimento, quantità e orario di ingestione.",
      "Chiama subito il veterinario o il centro antiveleni veterinario.",
      "Non provocare il vomito senza una chiara indicazione medica.",
      "In caso di convulsioni o collasso recati subito in clinica di urgenza."
],
  },
  {
    type: 'tip',
    title: "La salute dell animale viene prima di tutto",
    html: "I sintomi possono comparire dopo diverse ore. Non attendere che l animale peggiori per chiedere aiuto professionale qualificato.",
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
