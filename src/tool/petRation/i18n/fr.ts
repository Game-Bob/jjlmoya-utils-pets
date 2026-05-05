import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'calculateur-ration-journaliere-animaux';
const title = 'Calculateur de Ration Journalière d\'Animaux';
const description = 'Calculez la quantité exacte de nourriture dont votre chien ou chat a besoin. Outil basé sur les formules vétérinaires RER et DER pour un poids santé.';

const ui: PetRationUI = {
  toolTitle: 'Calculateur de Ration Journalière',
  sectionProfile: '1. Profil de l\'Animal',
  labelAnimal: 'Animal',
  labelStage: 'Étape de Vie',
  labelWeight: 'Poids Corporel',
  labelActivity: 'Activité Physique',
  sectionDiet: '2. Régime et Nourriture',
  labelDietType: 'Type d\'Alimentation',
  speciesDog: 'Chien',
  speciesCat: 'Chat',
  speciesRabbit: 'Lapin',
  stagePuppy: 'Chiot ou Chaton',
  stageAdult: 'Adulte',
  stageSenior: 'Senior',
  activityLow: 'Faible',
  activityMod: 'Normale',
  activityHigh: 'Élevée',
  dietDry: 'Sec Uniquement',
  dietMixed25: 'Mixte (25%)',
  dietHalf: 'Moitié-Moitié (50%)',
  dietWet: 'Humide Uniquement',
  manualAdjust: 'Ajustement manuel (1-99%)',
  wetPercentLabel: '% de nourriture humide dans le régime',
  tagDry: 'Sec',
  tagWet: 'Humide',
  totalKcal: 'Total',
  kcalUnit: 'kcal/jour',
  statusPuppy: 'Phase de croissance rapide',
  statusSenior: 'Métabolisme mature',
  statusLargeDog: 'Grande race : Soin articulaire',
  statusDefault: 'Poids équilibré',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'Qu\'est-ce que le RER et pourquoi est-ce important ?',
    answer: 'Le RER (Resting Energy Requirement) est l\'énergie minimale dont votre animal a besoin pour maintenir ses fonctions vitales de base au repos. C\'est la base scientifique pour calculer la ration journalière, évitant la sous ou la suralimentation. Comprendre le RER permet aux propriétaires d\'adapter l\'apport alimentaire aux besoins biologiques spécifiques de leur animal, en veillant à ce qu\'il ne consomme pas plus que ce que ses organes peuvent traiter efficacement.',
  },
  {
    question: 'Comment la stérilisation affecte-t-elle la ration de mon animal ?',
    answer: 'Les animaux stérilisés ont tendance à avoir un métabolisme de base environ 15 à 20 pour cent inférieur. Ils peuvent avoir besoin d\'une ration légèrement plus petite ou d\'un niveau d\'activité ajusté sur Faible dans le calculateur pour éviter la prise de poids. Les changements hormonaux après la procédure modifient la façon dont le corps stocke les graisses et brûle l\'énergie, rendant la vigilance sur le bol de nourriture encore plus importante pour la santé à long terme.',
  },
  {
    question: 'Puis-je utiliser ce calculateur pour les chiots ?',
    answer: 'Les chiots en croissance ont des besoins énergétiques beaucoup plus élevés (jusqu\'à 3 fois le RER). Ce calculateur est optimisé pour les chiens et chats adultes. Pour les chiots, consultez toujours votre vétérinaire pour un plan de croissance spécifique. Une alimentation inappropriée pendant la phase de croissance précoce peut entraîner de graves problèmes squelettiques plus tard dans la vie, car l\'excès de calories peut forcer le développement osseux trop rapidement.',
  },
  {
    question: 'Combien de fois par jour dois-je distribuer la ration ?',
    answer: 'L\'idéal est de répartir la quantité totale résultante en 2 ou 3 repas par jour. Cela aide à maintenir des niveaux de glucose stables et améliore la digestion, en particulier chez les races sujettes à la torsion gastrique. Des horaires de repas réguliers aident également à garder votre animal rassasié et moins susceptible de quémander des restes entre les repas programmés.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Sélectionnez l\'espèce avec soin', text: 'Indiquez si le calcul est destiné à un chien ou un chat, car leurs métabolismes et leurs limites de poids varient considérablement en fonction de leurs traits biologiques uniques.' },
  { name: 'Ajustez pour un poids exact', text: 'Déplacez le curseur sur le poids actuel de votre animal en kilogrammes. Il est essentiel d\'utiliser un poids récemment mesuré pour un calcul précis du besoin énergétique.' },
  { name: 'Définissez leur niveau d\'activité', text: 'Choisissez entre une activité faible, normale ou élevée en fonction de l\'exercice quotidien réel et des niveaux d\'énergie manifestés par votre compagnon à quatre pattes.' },
  { name: 'Entrez les calories de la nourriture par kg', text: 'Regardez sur l\'emballage de la nourriture pour animaux la valeur exacte en kcal/kg afin que le calcul de la ration finale en grammes soit aussi précis que possible pour une santé optimale.' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Principes Clés de la Nutrition Vétérinaire',
    items: [
      'La formule RER est : 70 × (poids en kg)^0,75. C\'est la base scientifique de tout calcul calorique vétérinaire moderne.',
      'Le DER multiplie le RER par le facteur de mode de vie spécifique de l\'animal pour fournir un besoin quotidien.',
      'Un chien castré a besoin de jusqu\'à 20 pour cent de calories en moins qu\'un chien entier en raison des changements hormonaux.',
      'L\'obésité touche 50 pour cent des animaux de compagnie aujourd\'hui et réduit considérablement leur espérance et leur qualité de vida.',
      'Calculer la ration exacte est l\'une des formes les plus efficaces de médecine préventive pour les propriétaires d\'animaux.',
      'L\'utilisation d\'une balance de cuisine fournit la précision nécessaire pour suivre un plan d\'alimentation basé sur la science.',
    ],
  },
  { type: 'title', text: 'Guide Complet pour Calculer la Ration Journalière de votre Animal pour une Santé Optimale', level: 2 },
  {
    type: 'paragraph',
    html: 'Nourrir correctement un chien ou un chat n\'est pas seulement une question de remplir son bol chaque matin. La nutrition est le pilier fondamental de sa santé, de sa longévité et de son bien-être émotionnel. Un <strong>calculateur de ration journalière pour animaux</strong> est un outil essentiel pour tout propriétaire responsable qui souhaite éviter les deux problèmes les plus courants de la nutrition vétérinaire actuelle : la malnutrition par manque de nutriments et, surtout, l\'obésité, qui touche plus de 50 % des animaux de compagnie dans les pays développés.',
  },
  {
    type: 'paragraph',
    html: 'Dans ce guide, nous explorerons les fondements scientifiques des calculs caloriques, comment interpréter les étiquettes des aliments et comment des facteurs tels que l\'âge, le niveau d\'activité physique et le statut physiologique influencent la quantité de nourriture dont votre compagnon a besoin chaque jour. Nous vous aiderons à comprendre comment de petits ajustements dans la ration journalière peuvent faire une énorme différence dans la prévention du diabète, des problèmes articulaires et de la santé cardiaque de votre animal.',
  },
  { type: 'title', text: 'La Science derrière les Calculs : Comprendre le RER et le DER', level: 3 },
  {
    type: 'paragraph',
    html: 'Pour déterminer exactement combien un animal doit manger chaque jour, les vétérinaires et les nutritionnistes utilisent deux concepts clés : le RER et le DER. Ces acronymes signifient respectivement Besoin Énergétique au Repos et Besoin Énergétique Quotidien. Comprendre comment ils interagissent est crucial pour gérer le poids et le bien-être de votre animal de manière sûre et contrôlée.',
  },
  {
    type: 'paragraph',
    html: 'Le RER couvre l\'énergie nécessaire aux fonctions organiques de base, à la respiration et à la circulation pendant que l\'animal est au repos. Le DER prend ensuite cette valeur et l\'ajuste en fonction du mode de vie de l\'animal, qu\'il s\'agisse d\'un chien de performance actif ou d\'un chat d\'intérieur calme. En calibrant correctement ces valeurs, nous pouvons atteindre un équilibre qui favorise un score de condition corporelle sain sur le long terme.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER : Énergie au repos', value: '70 × kg^0,75' },
      { label: 'Facteur chiot', value: 'de x2.5 à x3.5' },
      { label: 'Facteur adulte actif', value: 'de x1.6 à x2.0' },
      { label: 'Facteur senior', value: 'de x1.0 à x1.4' },
    ],
  },
  { type: 'title', text: 'Comment Lire et Interpréter l\'Étiquette des Aliments de votre Animal', level: 3 },
  {
    type: 'paragraph',
    html: 'Pour que le calculateur vous donne des grammes exacts, vous devez connaître la <strong>densité calorique</strong> du produit, également connue sous le nom d\'énergie métabolisable. Cette valeur est généralement exprimée en kcal/kg ou kcal/100g sur l\'emballage. En saisissant ces chiffres avec précision, vous pouvez concevoir un régime qui n\'est ni déficient ni excessif.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Croquettes de régime léger', value: '~3000 kcal/kg' },
      { label: 'Croquettes standard pour adultes', value: '~3500 kcal/kg' },
      { label: 'Croquettes pour chiots à haute énergie', value: '~4000 kcal/kg' },
      { label: 'Nourriture humide en conserve', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Note Nutritionnelle du Vétérinaire',
    html: 'Chaque animal est un individu avec son propre métabolisme unique. Le calculateur offre un point de départ scientifiquement étayé, maar vous devriez toujours surveiller la condition corporelle réelle en tâtant les côtes de votre animal. Si vous pouvez les sentir facilement sans appuyer fort, le poids est idéal. Si les côtes sont difficiles à trouver sous une couche de graisse, il est peut-être temps de restreindre la ration.',
  },
  { type: 'title', text: 'Différences de Nutrition Entre les Chats et les Chiens', level: 3 },
  {
    type: 'paragraph',
    html: 'Les chats sont des carnivores obligats et leur métabolisme est optimisé pour tirer de l\'énergie des protéines animales. Chez les chiens, nous voyons un métabolisme omnivore plus flexible, mais il faut tout de même faire attention à l\'excès de glucides qui peut entraîner une prise de poids. Les deux espèces prospèrent avec une ration contrôlée qui évite une charge excessive sur les articulations et le système cardiovasculaire tout au long de leur vie.',
  },
  {
    type: 'paragraph',
    html: 'Passer quelques minutes à calculer la ration exacte est l\'un des investissements les plus rentables en médecine préventive que vous puissiez faire en tant que propriétaire. Un poids santé réduit considérablement le risque de maladies chroniques et donne à votre meilleur ami la meilleure chance d\'avoir une vie longue et dynamique. Consultez votre vétérinaire lors de votre prochaine visite de routine pour vous assurer que votre stratégie d\'alimentation actuelle est optimale.',
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
