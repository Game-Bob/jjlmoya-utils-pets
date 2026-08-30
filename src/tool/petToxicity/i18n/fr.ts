import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'aliments-toxiques-chiens-chats-verificateur';
const title = 'Vérificateur d aliments toxiques pour chiens et chats';
const description = 'Vérifiez la dangerosité des aliments pour chiens et chats, identifiez les signes d alerte et sachez quand contacter un vétérinaire.';

const ui: PetToxicityUI = {
  "journeyHint": "Sélectionnez l animal, ouvrez l atlas alimentaire et consultez l avertissement spécifique à l espèce avant de décider.",
  "speciesLabel": "Espèce",
  "speciesDog": "Chien",
  "speciesCat": "Chat",
  "speciesDogMeta": "Profil canin",
  "speciesCatMeta": "Profil félin",
  "foodLabel": "Aliment ou ingrédient",
  "foodPlaceholder": "Choisissez un aliment",
  "foodMenuHint": "La liste s adapte à l espèce car les risques sont spécifiques.",
  "resultEyebrow": "L atlas alimentaire indique",
  "resultEmpty": "Choisissez un aliment pour ouvrir sa fiche de sécurité.",
  "sceneLabel": "Carte d exposition",
  "sceneReady": "Choisissez un aliment",
  "sceneSelected": "Fiche spécifique ouverte",
  "riskCritical": "Urgence critique",
  "riskHigh": "Risque élevé",
  "riskCaution": "Attention",
  "riskUnknown": "Données insuffisantes",
  "riskLabel": "Niveau de risque",
  "whyLabel": "Pourquoi c est important",
  "signsLabel": "Signes à surveiller",
  "actionLabel": "Que faire",
  "callVetLabel": "Le choix le plus sûr est un avis professionnel.",
  "callVetText": "Un calculateur ne peut pas estimer une dose toxique ni remplacer une consultation.",
  "sourceLabel": "Sources utilisées",
  "sourceText": "Les fiches reposent sur les recommandations de toxicologie vétérinaire de l ASPCA, de la FDA et du Manuel Vétérinaire MSD.",
  "emergencyTitle": "Si votre animal a ingéré un produit suspect",
  "emergencyText": "Appelez immédiatement votre vétérinaire, une clinique d urgence ou un centre antipoison. Conservez l emballage et la quantité estimée.",
};

const faq: PetToxicityLocaleContent['faq'] = [
  {
    "question": "Ce vérificateur garantit-il la sécurité de mon animal ?",
    "answer": "Non. Il s agit d un guide éducatif sur les dangers alimentaires, pas d un outil de diagnostic ou de calcul de dose. Le risque dépend de l espèce, du produit, de la quantité et du poids."
  },
  {
    "question": "Quels aliments sont particulièrement dangereux pour les chiens ?",
    "answer": "Le xylitol, le chocolat, la caféine, les raisins, les oignons, l ail, l alcool et la pâte à pain crue figurent parmi les plus toxiques."
  },
  {
    "question": "L oignon et l ail sont-ils dangereux pour les chats ?",
    "answer": "Oui. Les chats sont particulièrement sensibles aux dommages causés aux globules rouges par les plantes du genre Allium (oignons, ail, ciboulette)."
  },
  {
    "question": "Pourquoi le xylitol affiche-t-il un avertissement différent selon l espèce ?",
    "answer": "Chez le chien, le xylitol entraîne une chute brutale et dangereuse de la glycémie. Chez le chat, ce risque est moins documenté par la FDA."
  },
  {
    "question": "Que faire si l aliment ingéré n est pas listé ?",
    "answer": "L absence d un aliment ne garantit pas sa sécurité. Conservez l emballage, notez les détails et contactez un vétérinaire."
  }
];

const howTo: PetToxicityLocaleContent['howTo'] = [
  {
    "name": "Sélectionner l espèce",
    "text": "Choisissez Chien ou Chat pour afficher les données spécifiques."
  },
  {
    "name": "Choisir l aliment",
    "text": "Ouvrez le menu et sélectionnez l ingrédient correspondant."
  },
  {
    "name": "Lire la fiche de sécurité",
    "text": "Consultez la gravité du risque, les signes possibles et la démarche conseillée."
  },
  {
    "name": "Contacter un spécialiste",
    "text": "En cas d ingestion réelle, appelez un vétérinaire muni des informations du produit."
  }
];

const seo: PetToxicityLocaleContent['seo'] = [
  {
    type: 'summary',
    title: "Vérification rapide de la sécurité alimentaire canine et féline",
    items: [
      "Sélectionnez d abord l espèce, les risques variant selon l animal.",
      "Utilisez les fiches pour comprendre le danger et le niveau d urgence.",
      "Traitez l ingestion de xylitol chez le chien comme une urgence absolue.",
      "Contactez un vétérinaire en cas de doute ou d ingestion avérée."
],
  },
  {
    type: 'title',
    text: "Comment utiliser ce vérificateur d aliments toxiques",
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Cet outil vous aide à réagir rapidement après une ingestion suspecte. Il structure les informations essentielles avant de contacter les services vétérinaires. Cela permet d aborder la conversation avec sérénité et efficacité lors d un appel d urgence en clinique vétérinaire de garde.",
  },
  {
    type: 'paragraph',
    html: "Les réactions physiologiques des chiens et des chats diffèrent fortement. Par exemple, le xylitol est critique pour le chien tandis que l oignon affecte lourdement le chat. Prendre en compte ces spécificités évite des erreurs d interprétation dommageables pour la santé de l animal domestique.",
  },
  {
    type: 'title',
    text: "Principaux aliments dangereux et facteurs clés",
    level: 2,
  },
  {
    type: 'table',
    headers: ["Aliment ou ingrédient","Danger principal","Contexte important"],
    rows: [["Chocolat et caféine","Effets cardiaques et nerveux sévères","La teneur en cacao, le type de chocolat et le poids de l animal sont totalement déterminants."],["Xylitol","Hypoglycémie sévère et soudaine chez le chien","Présent dans les chewing-gums sans sucre, bonbons et pâtisseries industrielles."],["Raisins frais et secs","Risque d insuffisance rénale aiguë","Sensibilité très variable; aucune quantité ingérée ne peut être considérée sans danger."],["Oignon et ail","Destruction des globules rouges et anémie","Les formes en poudre, déshydratées ou cuites restent extrêmement concentrées."],["Pâte à levure crue","Dilatation de l estomac et intoxication éthylique","La fermentation dans l estomac génère du gaz et de l alcool toxique."]],
  },
  {
    type: 'paragraph',
    html: "Outre la toxicité chimique classique, des risques mécaniques d obstruction digestive par des os ou des noyaux, ainsi que des risques de pancréatite aiguë liés aux aliments très gras existent. Une évaluation rigoureuse de la situation permet de donner des précisions très utiles au praticien vétérinaire.",
  },
  {
    type: 'title',
    text: "Que faire après une exposition suspecte",
    level: 2,
  },
  {
    type: 'list',
    items: [
      "Éloignez immédiatement le reste de l aliment et gardez soigneusement l emballage.",
      "Notez précisément l espèce, le poids, l aliment, la quantité et l heure d ingestion.",
      "Contactez rapidement un vétérinaire ou un centre antipoison vétérinaire agréé.",
      "Ne faites pas vomir l animal sans un avis médical vétérinaire explicite.",
      "Consultez en urgence en cas de convulsions, de malaise ou de difficultés respiratoires."
],
  },
  {
    type: 'tip',
    title: "La santé de l animal est prioritaire",
    html: "Les symptômes peuvent mettre plusieurs heures à apparaître. N attendez pas l apparition de signes graves pour demander conseil à un professionnel.",
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
