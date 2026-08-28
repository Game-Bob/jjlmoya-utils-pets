import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'calculateur-taille-cage-transport-animaux';
const title = 'Calculateur de Taille de Cage de Transport pour Animaux';
const description = 'Calculez les dimensions intérieures recommandées pour la cage de transport de votre chien ou chat à partir de six mesures corporelles.';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: 'Mesurez d abord. Achetez en toute sérénité.',
  journeyHint: 'Choisissez l animal et le mode de transport, saisissez les mesures et utilisez le schéma intérieur comme guide d achat.',
  unitLegend: 'Unités d affichage',
  speciesStep: 'Sélectionnez l animal',
  metricUnit: 'Métrique',
  imperialUnit: 'Impérial',
  speciesLegend: 'Qui voyage?',
  speciesDog: 'Chien',
  speciesCat: 'Chat',
  modeLegend: 'Quel est le mode de transport?',
  modeCar: 'Voiture',
  modeAir: 'Avion',
  measurementsLegend: 'Mesurez votre animal',
  noseTailLabel: 'Truffe à la base de la queue',
  noseTailHint: 'Mesurez sans inclure la courbure de la queue',
  elbowHeightLabel: 'Sol au coude',
  shoulderWidthLabel: 'Largeur d épaules',
  standingHeightLabel: 'Hauteur en position debout',
  beddingLabel: 'Épaisseur du coussin ou tapis',
  weightLabel: 'Poids de l animal',
  cmUnit: 'cm',
  inchUnit: 'po',
  kgUnit: 'kg',
  lbUnit: 'lb',
  snubNosedLabel: 'Race à nez court ou brachycéphale',
  snubNosedHint: 'Le transport aérien requiert des ajustements IATA. Consultez votre vétérinaire et la compagnie aérienne.',
  presetLegend: 'Commencez avec un profil type',
  presetCat: 'Chat',
  presetSmallDog: 'Petit chien',
  presetMediumDog: 'Chien moyen',
  presetLargeDog: 'Grand chien',
  resultEyebrow: 'Gabarit de mesure recommandé',
  resultTitle: 'Un espace suffisant pour se retourner',
  resultDimensionLabel: 'Dimensions intérieures minimales conseillées',
  lengthLabel: 'Longueur',
  widthLabel: 'Largeur',
  heightLabel: 'Hauteur',
  petWeightLabel: 'Poids de l animal',
  journeyLabel: 'Mode de transport',
  statusComfort: 'Confort de base',
  statusAirReview: 'Vérification transport aérien',
  statusSnub: 'Ajustement nez court',
  resultDetail: 'Vérifiez l intérieur réel de la cage, l ouverture de porte, la ventilation et la réglementation avant tout achat ou départ.',
  checklistTitle: 'Les quatre contrôles corporels',
  checklistStand: 'L animal peut se tenir debout et s asseoir sans que la tête ou les oreilles ne touchent le plafond.',
  checklistTurn: 'L animal peut se retourner naturellement lorsqu il est debout.',
  checklistLie: 'L animal peut s allonger confortablement sur son coussin.',
  checklistAirline: 'Pour l avion, vérifiez les limites de la compagnie, la ventilation, la fermeture et l étanchéité.',
  invalidInput: 'Veuillez saisir des valeurs positives pour chaque mesure et pour le poids.',
  noteTitle: 'Outil de simulation de dimensions, non une autorisation de vol',
  noteText: 'Les règles de transport varient selon la compagnie, le véhicule et l animal. Un vétérinaire doit évaluer la santé de l animal.',
  methodTitle: 'Méthode de calcul',
  methodText: 'La formule s inspire des directives IATA: la longueur équivaut à la longueur truffe-queue plus la moitié de la hauteur du coude, la largeur au double de la largeur d épaules, et la hauteur à la hauteur debout plus l épaisseur du tapis.',
  blueprintLabel: 'Plan mesuré de la cage montrant l animal à l intérieur avec les repères de longueur et de hauteur',
  dimensionInside: 'Dimensions intérieures',
  checkMark: 'OK',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: 'Comment mesurer mon chien ou mon chat pour choisir une cage de transport?',
    answer: 'Mesurez de la pointe du museau à la base de la queue, du sol au coude, la largeur des épaules, et du sol au sommet de la tête ou des oreilles. Ajoutez l épaisseur du coussin séparément.',
  },
  {
    question: 'Quelles dimensions intérieures ce calculateur fournit-il?',
    answer: 'Il estime la longueur intérieure minimale à partir de la longueur du corps et du coude, la largeur à partir de la largeur d épaules et la hauteur globale en incluant le coussin.',
  },
  {
    question: 'Les résultats garantissent-ils l acceptation par une compagnie aérienne?',
    answer: 'Non. Le mode aérien intègre les règles IATA de référence, mais chaque compagnie applique des normes spécifiques. Vérifiez toujours la réglementation officielle de votre transporteur.',
  },
  {
    question: 'Pourquoi les chiens brachycéphales nécessitent-ils une cage plus grande en avion?',
    answer: 'Les recommandations IATA préconisent une marge supplémentaire pour les races à nez court afin de prévenir la surchauffe et les difficultés respiratoires pendant le vol.',
  },
  {
    question: 'Une cage pour la voiture doit-elle être la plus grande possible?',
    answer: 'Non. Elle doit offrir suffisamment d espace pour se tourner et s allonger, tout en restant bien fixée dans le véhicule pour éviter les secousses inutiles.',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: 'Choisir le mode de transport', text: 'Sélectionnez voiture ou avion afin d ajuster les critères de vérification.' },
  { name: 'Saisir les six mesures', text: 'Prenez les mesures du corps et le poids de l animal lorsqu il est calme.' },
  { name: 'Lire les dimensions intérieures', text: 'Utilisez la longueur, la largeur et la hauteur recommandées pour comparer les cages disponibles.' },
  { name: 'Vérifier la conformité', text: 'Avant l achat, contrôlez la solidité de la fermeture, la ventilation et les règles de votre transporteur.' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Conseils pour bien choisir la cage de transport de votre animal',
    items: [
      'Prenez les mesures corporelles précises au lieu de vous fier uniquement au poids total de l animal.',
      'Fiez-vous aux dimensions intérieures utiles pour comparer efficacement les modèles commercialisés.',
      'Contrôlez systématiquement la fermeture de sécurité, les fixations et l aération globale de la cage.',
      'Le transport en avion exige une préparation spécifique approfondie et l avis préalable de votre vétérinaire.',
    ],
  },
  { type: 'title', text: 'Comment calculer les dimensions d une cage de transport', level: 2 },
  {
    type: 'paragraph',
    html: 'Une cage de transport adaptée doit garantir quatre mouvements naturels essentiels à votre chien ou votre chat: se tenir debout sans baisser la tête ni plier les oreilles, s asseoir normalement en toute aisance, se retourner sans blocage sur son propre axe et s allonger confortablement dans une position détendue. Ce calculateur détermine la longueur, la largeur et la hauteur intérieures nécessaires de manière personnalisée et rigoureuse.',
  },
  {
    type: 'paragraph',
    html: 'Les dimensions obtenues correspondent à l espace intérieur réel et utile pour l animal. Veillez à ce que les éléments internes indispensables comme les gamelles d eau, les coussins épais ou la forme biseautée des parois ne réduisent pas cet espace utile lors de votre achat final dans le commerce.',
  },
  { type: 'title', text: 'Rôle des mesures corporelles', level: 2 },
  {
    type: 'table',
    headers: ['Mesure corporelle', 'Utilité pour l animal', 'Application dans le calcul'],
    rows: [
      ['Truffe à la base de la queue', 'Fixe la longueur de base du corps sans compter la queue.', 'Longueur intérieure'],
      ['Sol au coude', 'Ajoute de l aisance pour se retourner et bouger les pattes avant.', 'Longueur intérieure'],
      ['Largeur d épaules', 'Définit la largeur minimale aux points les plus larges du corps.', 'Largeur intérieure'],
      ['Hauteur en position debout', 'Protège la tête et les oreilles contre tout contact avec le plafond.', 'Hauteur intérieure'],
      ['Épaisseur du coussin', 'Préserve la hauteur utile sous plafond après installation du lit.', 'Hauteur intérieure'],
      ['Poids de l animal', 'Permet de vérifier la charge maximale admise par le conteneur.', 'Vérification de charge'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Les formules reposent directement sur les normes IATA relatives au transport d animaux vivants par voie aérienne et terrestre: la longueur intérieure combine la longueur du corps et la moitié de la hauteur du coude, la largeur équivaut au double de la largeur d épaules, et la hauteur inclut la hauteur debout augmentée de l épaisseur du coussin de sol.',
  },
  { type: 'title', text: 'Spécificités pour les voyages en avion', level: 2 },
  {
    type: 'paragraph',
    html: 'Une simulation de taille ne constitue pas une validation d embarquement officielle auprès d une compagnie aérienne. Des paramètres cruciaux comme le type d appareil, les conditions de température ambiante et le système de ventilation sur les quatre côtés sont pris en compte par la compagnie. Renseignez-vous toujours à l avance auprès du transporteur avant le jour du voyage.',
  },
  {
    type: 'tip',
    title: 'Test pratique d ajustement à la maison',
    html: 'Installez l animal dans la cage dans un endroit calme et observez ses mouvements naturels pendant plusieurs minutes. S il doit se courber exagérément pour se retourner ou s asseoir, optez sans hésiter pour la taille supérieure pour préserver son confort et sa santé.',
  },
];

const schemas: PetCarrierCrateSizePlannerLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
  } as WithContext<HowTo>,
];

export const content: PetCarrierCrateSizePlannerLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
