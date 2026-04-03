import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'calculatrice-ration-quotidienne-animaux';
const title = 'Calculatrice de Ration Quotidienne pour Animaux | Nutrition Canine et Féline';
const description = 'Calculez la quantité exacte de nourriture dont votre chien ou chat a besoin. Outil basé sur les formules vétérinaires RER et DER pour un poids sain.';

const ui: PetRationUI = {
  toolTitle: 'Calculatrice de Ration Quotidienne',
  sectionProfile: '1. Profil de l\'Animal',
  labelAnimal: 'Animal',
  labelStage: 'Stade de Vie',
  labelWeight: 'Poids Corporel',
  labelActivity: 'Activité Physique',
  sectionDiet: '2. Régime et Aliment',
  labelDietType: 'Type d\'Alimentation',
  speciesDog: 'Chien',
  speciesCat: 'Chat',
  speciesRabbit: 'Lapin',
  stagePuppy: 'Chiot',
  stageAdult: 'Adulte',
  stageSenior: 'Senior',
  activityLow: 'Faible',
  activityMod: 'Normale',
  activityHigh: 'Élevée',
  dietDry: 'Sec Uniquement',
  dietMixed25: 'Mixte (25%)',
  dietHalf: 'Moitié (50%)',
  dietWet: 'Humide Uniquement',
  manualAdjust: 'Ajustement manuel (1-99%)',
  wetPercentLabel: '% de nourriture humide dans le régime',
  tagDry: 'Sec',
  tagWet: 'Humide',
  totalKcal: 'Total',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'Qu\'est-ce que le RER et pourquoi est-il important ?',
    answer: 'Le RER (Resting Energy Requirement) est l\'énergie minimale dont votre animal a besoin pour maintenir ses fonctions vitales de base au repos. C\'est la base scientifique pour calculer la ration quotidienne, en évitant la sous ou la suralimentation.',
  },
  {
    question: 'Comment la stérilisation influence-t-elle la ration de mon animal ?',
    answer: 'Les animaux stérilisés ont tendance à avoir un métabolisme basal environ 15-20% plus bas. Il peut leur falloir une ration légèrement réduite ou un niveau d\'activité ajusté à Faible dans la calculatrice pour éviter la prise de poids.',
  },
  {
    question: 'Puis-je utiliser cette calculatrice pour les chiots ?',
    answer: 'Les chiots en croissance ont des besoins énergétiques beaucoup plus élevés (jusqu\'à 3 fois le RER). Cette calculatrice est optimisée pour les chiens et chats adultes. Pour les chiots, consultez toujours votre vétérinaire pour un plan de croissance spécifique.',
  },
  {
    question: 'Combien de fois par jour dois-je répartir la ration ?',
    answer: 'L\'idéal est de répartir la quantité totale en 2 ou 3 repas par jour. Cela aide à maintenir des niveaux de glucose stables et améliore la digestion, notamment pour les races sujettes à la torsion gastrique.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Sélectionnez l\'espèce', text: 'Indiquez si le calcul est pour un chien ou un chat, car leurs métabolismes et limites de poids varient.' },
  { name: 'Ajustez le poids', text: 'Déplacez le curseur jusqu\'au poids actuel de votre animal en kilogrammes.' },
  { name: 'Définissez son activité', text: 'Choisissez entre activité faible, normale ou élevée en vous basant sur l\'exercice quotidien réel de votre compagnon.' },
  { name: 'Entrez les calories de l\'aliment', text: 'Cherchez sur l\'emballage de la croquette la valeur kcal/kg pour que le calcul en grammes soit exact.' },
];

const bibliography: PetRationLocaleContent['bibliography'] = [
  { name: 'WSAVA: Nutrition Toolkit and Calorie Recommendations', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
  { name: 'FEDIAF: Nutritional Guidelines for Complete and Complementary Pet Food', url: 'https://fediaf.org/self-regulation/nutrition.html' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Principes de Nutrition Vétérinaire',
    items: [
      'La formule RER est : 70 × (poids en kg)^0.75. C\'est la base de tout calcul calorique vétérinaire.',
      'Le DER multiplie le RER par le facteur de style de vie de l\'animal.',
      'Un chien stérilisé a besoin de jusqu\'à 20% de calories en moins qu\'un entier.',
      'L\'obésité touche 50% des animaux et réduit significativement leur espérance de vie.',
    ],
  },
  { type: 'title', text: 'Guide Complet pour Calculer la Ration Quotidienne de votre Animal', level: 2 },
  {
    type: 'paragraph',
    html: 'Nourrir correctement un chien ou un chat n\'est pas seulement une question de remplir sa gamelle chaque matin. La nutrition est le pilier fondamental de sa santé, longévité et bien-être émotionnel. Une <strong>calculatrice de ration quotidienne pour animaux</strong> est un outil essentiel pour tout propriétaire responsable souhaitant éviter les deux problèmes les plus courants en nutrition vétérinaire : la malnutrition par manque de nutriments et, surtout, l\'obésité, qui touche plus de 50% des animaux dans les pays développés.',
  },
  {
    type: 'paragraph',
    html: 'Dans ce guide, nous explorerons les fondements scientifiques des calculs caloriques, comment interpréter les étiquettes des aliments et de quelle manière des facteurs comme l\'âge, le niveau d\'activité physique et l\'état physiologique influencent la quantité d\'aliment dont votre compagnon a besoin chaque jour.',
  },
  { type: 'title', text: 'La Science derrière les Calculs : RER et DER', level: 3 },
  {
    type: 'paragraph',
    html: 'Pour déterminer combien doit manger un animal, les vétérinaires et nutritionnistes utilisent deux concepts clés : le RER et le DER.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER : Énergie de repos', value: '70 × kg^0.75' },
      { label: 'Facteur chiot', value: '×2.5 - ×3.5' },
      { label: 'Facteur adulte actif', value: '×1.6 - ×2.0' },
      { label: 'Facteur senior', value: '×1.0 - ×1.4' },
    ],
  },
  { type: 'title', text: 'Comment Lire l\'Étiquette de votre Croquette', level: 3 },
  {
    type: 'paragraph',
    html: 'Pour que la calculatrice vous donne les grammes exacts, vous devez connaître la <strong>densité calorique</strong> du produit. Cette valeur est généralement exprimée en kcal/kg ou kcal/100g.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Croquettes Light', value: '~3000 kcal/kg' },
      { label: 'Croquettes Adulte', value: '~3500 kcal/kg' },
      { label: 'Croquettes Chiot', value: '~4000 kcal/kg' },
      { label: 'Nourriture Humide', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Note Nutritionnelle',
    html: 'Chaque animal est un individu. La calculatrice offre un bon point de départ, mais vous devez toujours surveiller la condition corporelle en palpant les côtes de votre animal. Si vous les sentez sans appuyer, le poids est correct.',
  },
  { type: 'title', text: 'Nutrition chez les Chats vs les Chiens', level: 3 },
  {
    type: 'paragraph',
    html: 'Les chats sont des carnivores obligatoires et leur métabolisme protéique est unique. Chez les chiens, il faut faire attention aux excès de glucides. Les deux bénéficient d\'une ration contrôlée qui évite la surcharge sur les articulations et le système cardiovasculaire. Un poids sain réduit drastiquement le risque de diabète et de problèmes cardiaques.',
  },
  {
    type: 'paragraph',
    html: 'Passer quelques minutes à calculer la ration exacte, c\'est de la médecine préventive. Votre vétérinaire peut confirmer si la condition corporelle de votre animal est correcte avec un simple examen physique.',
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
