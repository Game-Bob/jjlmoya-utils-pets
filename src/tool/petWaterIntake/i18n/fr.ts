import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'calculateur-besoin-eau-quotidien-chiens-chats';
const title = 'Calculateur de besoin quotidien en eau pour chiens et chats';
const description = "Estimez les besoins quotidiens en eau d'un chien ou d'un chat en fonction de son poids, de son alimentation, de son activité et du climat.";

const ui: PetWaterIntakeUI = {
  journeyHint: "Choisissez l'animal, entrez son poids corporel puis ajustez l'alimentation et le climat.",
  speciesLegend: 'Pour qui est la gamelle ?',
  speciesDog: 'Chien',
  speciesCat: 'Chat',
  weightLabel: 'Poids corporel',
  weightHint: 'Indiquez le poids actuel de votre animal en bonne santé.',
  weightKg: 'kg',
  dietLegend: "Quelle quantité d'eau provient de la nourriture ?",
  dietDry: 'Principalement croquettes sèches',
  dietMixed: 'Alimentation mixte',
  dietWet: 'Principalement pâtée ou nourriture humide',
  activityLegend: "Activité habituelle aujourd'hui",
  activityCalm: 'Calme / Repos',
  activityTypical: 'Modérée / Normale',
  activityActive: 'Intense / Très actif',
  heatLegend: 'Climat et température',
  heatNormal: 'Tempéré / Normal',
  heatWarm: 'Chaud',
  heatHot: 'Très chaud / Canicule',
  resultEyebrow: "Niveau d'eau estimé",
  totalRangeLabel: 'Eau totale nécessaire (toutes sources)',
  drinkingRangeLabel: 'Guide indicatif pour la gamelle',
  totalRangeHint: "Plage quotidienne globale incluant l'humidité des aliments.",
  drinkingRangeHint: 'Part estimée bue directement au récipient.',
  statusEveryday: 'Conditions habituelles',
  statusActive: 'Journée active',
  statusWarm: 'Temps chaud',
  statusDemanding: 'Conditions exigeantes',
  statusDetailEveryday: "Profil d'entretien de base sans facteurs supplémentaires de chaleur ou d'effort.",
  statusDetailActive: "L'exercice augmente les pertes en eau. Assurez un accès permanent à de l'eau fraîche.",
  statusDetailWarm: "La chaleur accroît le halètement. L'ombre et la fraîcheur restent prioritaires.",
  statusDetailDemanding: 'Activité forte et forte chaleur combinées. Surveillez attentivement votre animal.',
  resultEmpty: 'Veuillez entrer un poids valide pour afficher le niveau.',
  sceneAria: "Réservoir d'eau pour l'animal sélectionné",
  sceneTotal: 'EAU TOTALE',
  noteTitle: 'La gamelle ne remplace pas un avis vétérinaire',
  noteText: "Laissez toujours de l'eau propre à disposition. En cas de changement brutal de soif ou de symptômes de déshydratation, consultez un vétérinaire.",
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    question: 'Combien d\'eau un chien ou un chat doit-il boire par jour ?',
    answer: 'Les recommandations vétérinaires de l\'AAHA suggèrent un besoin de maintien d\'environ 60 mL/kg par jour pour les chiens et 40 mL/kg pour les chats. Ce besoin varie selon l\'alimentation, l\'exercice et la température ambiante.',
  },
  {
    question: 'La nourriture humide réduit-elle le besoin de boire à la gamelle ?',
    answer: 'Oui, la nourriture humide contient 75 % à 80 % d\'eau, couvrant une grande partie de l\'hydratation quotidienne. Les animaux nourris à la pâtée boivent naturellement moins d\'eau à la gamelle.',
  },
  {
    question: 'Quand faut-il consulter pour la consommation d\'eau ?',
    answer: 'Consultez rapidement un vétérinaire en cas d\'augmentation soudaine (polydipsie) ou de diminution marquée de la prise d\'eau, car cela peut signaler des troubles rénaux ou du diabète.',
  },
  {
    question: 'Le temps chaud augmente-t-il les besoins en eau ?',
    answer: 'Oui, le halètement lors des fortes chaleurs ou de l\'exercice augmente la perte d\'eau. Il est indispensable de laisser de l\'eau fraîche et de l\'ombre à disposition.',
  },
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  { name: 'Sélectionner l\'espèce et le poids', text: 'Choisissez chien ou chat et indiquez son poids corporel actuel en kg ou lb.' },
  { name: 'Indiquer le type d\'alimentation', text: 'Sélectionnez sèche, mixte ou humide pour prendre en compte l\'apport d\'eau de la nourriture.' },
  { name: 'Ajuster l\'activité et le climat', text: 'Définissez le niveau d\'exercice et la température pour calculer la perte d\'eau par halètement.' },
  { name: 'Consulter les estimations', text: 'Vérifiez le besoin en eau total et la quantité estimée à boire directement à la gamelle.' },
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Essentiel sur l\'hydratation des chiens et chats',
    items: [
      'Besoins de base: Chiens ~60 mL/kg par jour ; Chats ~40 mL/kg par jour selon l\'AAHA.',
      'Rôle de l\'alimentation: La nourriture humide fournit jusqu\'à 80 % de l\'eau requise.',
      'Chaleur et effort: Le halètement accroît les pertes en eau et nécessite de l\'eau fraîche.',
      'Signaux d\'alerte: Une variation brutale de la soif nécessite une visite vétérinaire.',
      'Accès libre: Disposez plusieurs points d\'eau propre dans le logement.',
    ],
  },
  {
    type: 'title',
    text: 'Calcul de l\'hydratation quotidienne pour animaux',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Une hydratation adéquate chez les chiens et les chats est absolument fondamentale pour maintenir les fonctions métaboliques, faciliter la digestion des nutriments, lubricater les articulations et préserver la santé rénale à long terme. L\'eau constitue entre 60 % et 70 % du poids corporel total d\'un animal adulte, et le moindre déficit hydrique peut perturber des processus physiologiques essentiels. Les données scientifiques établies par l\'American Animal Hospital Association (AAHA) fixent les besoins quotidiens de maintien à environ 60 mL par kilogramme de poids corporel chez les chiens et 40 mL par kilogramme chez les chats.',
  },
  {
    type: 'paragraph',
    html: 'Néanmoins, ces valeurs de référence représentent l\'ensemble du besoin hydrique quotidien et pas uniquement la quantité d\'eau que l\'animal doit boire directement au récipient. La ration hydrique totale d\'un animal domestique provient de trois sources distinctes: l\'eau bue au beurrier ou à la fontaine, l\'humidité naturally contenue dans les aliments commerciaux ou ménagers, et l\'eau métabolique produite lors de la respiration cellulaire. Bien comprendre cette distinction évite toute inquiétude inutile chez les propriétaires lorsque leur compagnon consomme des aliments humides.',
  },
  {
    type: 'title',
    text: 'Eau totale vs Eau de la gamelle',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le mode d\'alimentation joue un rôle prépondérant dans la quantité d\'eau que l\'animal recherchera de lui-même dans son beurrier. Les croquettes sèches industrielles ne contiennent que 6 % à 10 % d\'humidité, obligeant l\'animal à boire la quasi-totalité de son besoin hydrique quotidien directement à la gamelle. À l\'inverse, les pâtées et aliments en conserve renferment entre 75 % et 82 % d\'eau. Un chat ou un chien nourri exclusivement avec de la nourriture humide obtient ainsi la majeure partie de son hydratation pendant ses repas, ce qui entraîne des visites très espacées à la gamelle d\'eau, parfaitement normales sur le plan physiologique.',
  },
  {
    type: 'table',
    headers: ['Facteur', 'Impact sur l\'hydratation', 'Remarque'],
    rows: [
      ['Espèce', 'Fixe le besoin de base', 'Chiens ~60 mL/kg, Chats ~40 mL/kg'],
      ['Poids', 'Ajuste la quantité globale', 'Prendre le poids de forme'],
      ['Alimentation', 'Modifie l\'eau apportée par les repas', 'La pâtée réduit la prise à la gamelle'],
      ['Climat / Exercice', 'Augmente la perte en eau', 'Nécessite plus d\'eau fraîche'],
    ],
  },
  {
    type: 'title',
    text: 'Conseils pratiques pour les propriétaires',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Les propriétaires doivent veiller à maintenir un accès permanent et illimité à une eau propre et fraîche, plutôt que d\'essayer d\'imposer un volume strict à boire. Les gamelles doivent être lavées quotidiennement et renouvelées fréquemment. Pour les chats, dont le sentiment de soif est naturellement faible en raison de leurs origines de désert, l\'installation de fontaines à eau ou de bols larges évite le stress des moustaches et stimule fortement l\'hydratation spontanée.',
  },
  {
    type: 'card',
    title: 'Alimentation Sèche',
    icon: 'mdi:food-drumstick',
    html: 'Les animaux nourris aux croquettes dépendent presque entièrement de la gamelle d\'eau. Veillez à ce que l\'eau soit renouvelée quotidiennement et placée dans un endroit calme.',
  },
  {
    type: 'card',
    title: 'Alimentation Humide',
    icon: 'mdi:food-drumstick',
    html: 'La pâtée apporte une excellente hydratation directe lors des repas. Il est parfaitement normal que l\'animal boive moins à la gamelle d\'eau.',
  },
  {
    type: 'card',
    title: 'Chaleur et Exercice',
    icon: 'mdi:weather-sunny',
    html: 'Par temps chaud ou après l\'effort, le halètement augmente fortement la perte d\'eau. Offrez des zones d\'ombre fraîches et des pauses régulières avec de l\'eau fraîche.',
  },
  {
    type: 'tip',
    title: 'Vigilance en cas de changement',
    html: 'Une augmentation soudaine de la soif (polydipsie) ou le refus de boire (adipsie) sont des signaux cliniques majeurs de troubles rénaux, de diabète ou d\'infections. N\'essayez jamais de restreindre l\'accès à l\'eau et consultez immédiatement un vétérinaire.',
  },
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
