import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';

const slug = 'calculateur-gestation-animaux';
const title = 'Calculateur de gestation pour animaux de compagnie';
const description = 'Estimez la date de mise bas de votre chien, chat, lapin ou furet à partir de la date d accouplement avec un intervalle documenté et des conseils vétérinaires.';

const ui: PetGestationLocaleContent['ui'] = {
  "journeyHint": "Choisissez l espèce, entrez la date d accouplement et suivez le compas vers la période de mise bas.",
  "instantHint": "Modifiez un réglage et le calendrier de mise bas s adapte instantanément.",
  "speciesLegend": "Quel est le type d animal ?",
  "speciesDog": "Chien",
  "speciesCat": "Chat",
  "speciesRabbit": "Lapin",
  "speciesFerret": "Furet",
  "speciesDogMeta": "58 à 72 jours",
  "speciesCatMeta": "64 à 66 jours",
  "speciesRabbitMeta": "Environ 31 jours",
  "speciesFerretMeta": "Environ 42 jours",
  "matingDateLabel": "Date d accouplement",
  "matingDateHint": "Utilisez la première date d accouplement connue. C est une estimation et non une date de conception fixe.",
  "presetToday": "Aujourd hui",
  "presetWeekAgo": "Il y a 7 jours",
  "presetFortnightAgo": "Il y a 14 jours",
  "calculateButton": "Calculer la période de mise bas",
  "resultEyebrow": "Le compas de nidification indique",
  "dueDateLabel": "Date de mise bas estimée",
  "windowLabel": "Intervalle attendu",
  "remainingLabel": "Jours restants",
  "elapsedLabel": "Jours écoulés",
  "daysLabel": "jours",
  "dayLabel": "jour",
  "statusFuture": "Cette date est dans le futur",
  "statusWaiting": "Période de gestation en cours",
  "statusWindow": "La fenêtre de mise bas est ouverte",
  "statusLate": "Dépassement de la période estimée",
  "resultEmpty": "Votre compas de mise bas apparaîtra ici.",
  "sampleLabel": "Exemple indicatif",
  "sceneMating": "ACCOUPLEMENT",
  "sceneToday": "Suivi actuel",
  "sceneDue": "PÉRIODE DE MISE BAS",
  "noteTitle": "Note importante sur la santé",
  "noteText": "La date d accouplement ne correspond pas toujours à l ovulation ou à la fécondation. Consultez un vétérinaire pour un suivi prénatal et une confirmation de gestation.",
  "sourceTitle": "Méthodologie",
  "sourceText": "Le chien utilise une plage de 58 à 72 jours; chat, lapin et furet suivent les données documentées du Manuel Vétérinaire MSD.",
  "invalidDate": "Entrez une date d accouplement valide.",
  "futureDate": "Une date future ne peut pas correspondre à une gestation active."
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    "question": "Quelle est la précision du calculateur de gestation ?",
    "answer": "Il s agit d une estimation destinée à la planification. Chez la chienne, la date d accouplement peut différer de l ovulation et de la fécondation car les spermatozoïdes restent viables plusieurs jours dans le tractus reproducteur. Le calculateur affiche donc un intervalle plutôt qu une date unique. Le vétérinaire peut préciser la date par échographie."
  },
  {
    "question": "Combien de temps dure la gestation d une chienne ?",
    "answer": "Le Manuel Vétérinaire MSD indique environ 58 à 72 jours à compter du premier accouplement lorsque la date d ovulation est inconnue. Lorsque la date d ovulation est établie, l intervalle se situe généralement entre 62 et 64 jours."
  },
  {
    "question": "Combien de temps dure la gestation d une chatte ?",
    "answer": "La gestation féline dure généralement environ 65 jours, le Manuel Vétérinaire MSD décrivant la mise bas entre 64 et 66 jours après le pic hormonal. Comme le propriétaire connaît la date de saillie, l outil constitue un guide de préparation efficace."
  },
  {
    "question": "Pourquoi inclure les lapins et les furets ?",
    "answer": "Les lapins et furets sont des animaux de compagnie courants aux périodes de gestation courtes et bien documentées. Le Manuel Vétérinaire MSD indique environ 31 jours pour les lapins et 42 jours pour les furets."
  },
  {
    "question": "Quand faut-il consulter un vétérinaire ?",
    "answer": "Consultez un vétérinaire si la gestation dépasse la limite estimée, si le travail semble difficile ou prolongé, ou en cas de douleur, de saignement abondant, d écoulement suspect ou de faiblesse de la femelle."
  }
];

const howTo: PetGestationLocaleContent['howTo'] = [
  {
    "name": "Sélectionner l espèce",
    "text": "Choisissez chien, chat, lapin ou furet pour appliquer le profil de gestation documenté correspondant."
  },
  {
    "name": "Entrer la date d accouplement",
    "text": "Indiquez la date du premier accouplement ou celle recommandée par votre vétérinaire."
  },
  {
    "name": "Consulter le compas",
    "text": "Observez la date estimée, l intervalle attendu, les jours écoulés et le statut actuel."
  },
  {
    "name": "Préparer la mise bas",
    "text": "Utilisez le résultat pour aménager le nid de mise bas et préparer la liste de questions pour votre clinique."
  }
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Dates de gestation des animaux en un coup d œil",
    "items": [
      "Entrez la date d accouplement et sélectionnez l espèce pour estimer la période de mise bas.",
      "Les chiens disposent d un intervalle plus large en raison du décalage possible entre saillie et ovulation.",
      "Les chats, lapins et furets s appuient sur les données du Manuel Vétérinaire MSD.",
      "Outil de planification prénatale qui ne remplace en aucun cas un suivi vétérinaire professionnel."
    ]
  },
  {
    "type": "title",
    "text": "Comment fonctionne le calculateur de gestation",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Ce calculateur de gestation pour animaux convertit la date d accouplement observée en un calendrier estimatif. Il ajoute la durée de gestation spécifique de l espèce sélectionnée et présente une date moyenne ainsi qu un intervalle probable de mise bas. Cette nuance est essentielle: le jour de la saillie n est pas systématiquement le jour de la fécondation, et la biologie canine diffère de celle des félins ou petits mammifères. Cet outil aide les propriétaires à anticiper les soins, organiser le calendrier prénatal et préparer le matériel nécessaire dans les meilleures conditions."
  },
  {
    "type": "paragraph",
    "html": "Le compas visuel positionne la date d accouplement au début d un axe circulaire. L anneau coloré s agrandit au fil des jours tandis que le centre indique le nombre de jours écoulés. Dès que la période estimée approche, le statut s adapte pour offrir une lecture claire et immédiate sans nécessiter de calculs complexes."
  },
  {
    "type": "title",
    "text": "Profils de gestation documentés par espèce",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Espèce",
      "Durée moyenne",
      "Estimation depuis l accouplement"
    ],
    "rows": [
      [
        "Chien",
        "Environ 63 jours",
        "58 à 72 jours"
      ],
      [
        "Chat",
        "Environ 65 jours",
        "64 à 66 jours"
      ],
      [
        "Lapin",
        "Environ 31 jours",
        "31 jours"
      ],
      [
        "Furet",
        "Environ 42 jours",
        "42 jours"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "Le profil canin demande une attention particulière en raison des variations individuelles. Présenter un intervalle est plus rigoureux que d annoncer un jour fixe. Pour les autres espèces, les valeurs reflètent les standards scientifiques reconnus en médecine vétérinaire."
  },
  {
    "type": "title",
    "text": "Que préparer avant la période estimée",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Utilisez cette estimation pour organiser un endroit calme et propre pour la mise bas, vérifier le numéro d urgence de votre vétérinaire et préparer le matériel nécessaire. Veillez au bien-être et à l alimentation de la femelle durant toute la gestation."
  },
  {
    "type": "tip",
    "title": "La santé de l animal reste la priorité absolue",
    "html": "Contactez immédiatement votre vétérinaire en cas de douleur, de saignement, d écoulement anormal ou de retard de mise bas par rapport à la période calculée."
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
