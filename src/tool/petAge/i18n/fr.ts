import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'calculatrice-age-animaux';
const title = 'Calculatrice d\'Âge des Animaux | Chiens et Chats en Années Humaines';
const description = 'Découvrez l\'âge réel de votre chien ou chat en années humaines. Oubliez la règle de multiplier par 7. Utilisez notre calculatrice basée sur la science vétérinaire actuelle.';

const ui: PetAgeUI = {
  toolTitle: 'Calculatrice d\'Âge',
  toolSubtitle: 'Combien d\'années humaines a vraiment votre compagnon ?',
  petNameLabel: 'Nom (Optionnel)',
  petNamePlaceholder: 'Ex. Fido',
  petTypeDog: 'Chien',
  petTypeCat: 'Chat',
  sizeSmall: 'Petit',
  sizeMedium: 'Moyen',
  sizeLarge: 'Grand',
  sizeGiant: 'Géant',
  birthYearLabel: 'Année de naissance',
  humanAgeLabel: 'L\'âge humain de',
  humanAgeUnit: 'ans',
  humanAgeYears: 'ans',
  lifeStageLabel: 'Stade de Vie',
  milestoneLabel: 'Prochain Jalon',
  shareBtn: 'Partager le Résultat',
  shareSuccess: 'Copié ! Ouverture de la carte...',
  humanAgeTitle: 'Âge Magique',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: 'Est-il vrai qu\'une année de chien équivaut à 7 années humaines ?',
    answer: 'Non. C\'est une règle simplifiée que la science vétérinaire moderne a démystifiée. Les chiens mûrissent très vite au cours de leurs deux premières années, puis le processus ralentit, variant beaucoup selon le poids et la race.',
  },
  {
    question: 'Pourquoi les grands chiens vieillissent-ils plus vite ?',
    answer: 'Les chiens de grandes races ont un métabolisme et une croissance plus rapides, ce qui provoque un stress oxydatif plus important dans leurs cellules. Cela signifie que leur espérance de vie est plus courte que celle des petits chiens.',
  },
  {
    question: 'Comment les chats vieillissent-ils par rapport aux humains ?',
    answer: 'Un chat termine son enfance à un mois, son adolescence à 6 mois et atteint la maturité (équivalent à 24 ans humains) à 2 ans. Après cela, chaque année de chat équivaut à environ 4 ans humains.',
  },
  {
    question: 'À quel âge un animal est-il considéré comme Senior ?',
    answer: 'Généralement, un chien est considéré comme senior lorsqu\'il a atteint 75 % de son espérance de vie prévue. Pour les chats, c\'est généralement à partir de 7-11 ans, selon leur état de santé.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Choisir le type d\'animal', text: 'Sélectionnez si vous avez un chien ou un chat pour appliquer la bonne formule biologique.' },
  { name: 'Entrer la taille (chiens uniquement)', text: 'Pour les chiens, le poids est essentiel. Indiquez s\'il est petit (jusqu\'à 10 kg), moyen (10-25 kg), grand (25-45 kg) ou géant (+45 kg).' },
  { name: 'Indiquer l\'année de naissance', text: 'Entrez l\'année de naissance de votre animal pour calculer son âge chronologique.' },
  { name: 'Analyser le stade de vie', text: 'Consultez le résultat pour savoir si votre animal est au stade enfant, jeune, adulte ou senior par rapport à un humain.' },
];

const bibliography: PetAgeLocaleContent['bibliography'] = [
  { name: 'AAHA Senior Care Guidelines for Dogs and Cats', url: 'https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2023-aaha-senior-care-guidelines-for-dogs-and-cats/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats.pdf' },
  { name: 'AKC: How to Calculate Dog Years to Human Years', url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Ce que Vous Devez Savoir sur le Vieillissement des Animaux',
    items: [
      'La règle "fois 7" est un mythe : les chiens mûrissent de façon exponentielle les 2 premières années.',
      'Un chien d\'1 an équivaut à 15 ans humains ; un de 2 ans équivaut à 24 ans humains.',
      'Les grands chiens vieillissent plus vite que les petits après 2 ans.',
      'Les chats suivent une courbe plus linéaire : chaque année féline équivaut à 4 ans humains après 2 ans.',
    ],
  },
  { type: 'title', text: 'La Vérité Scientifique sur l\'Âge de votre Animal', level: 2 },
  {
    type: 'paragraph',
    html: 'Saviez-vous qu\'un chat de 2 ans a déjà la maturité d\'une personne de 24 ans ? Découvrez pourquoi la règle de multiplier par 7 est un mythe. Le vieux mythe selon lequel "1 an de chien équivaut à 7 ans humains" est une simplification excessive. La réalité biologique est beaucoup plus fascinante : les animaux mûrissent à une vitesse vertigineuse durant leurs deux premières années de vie. Après cela, cette courbe de vieillissement s\'aplatit et ralentit.',
  },
  { type: 'title', text: 'La Science derrière le Calcul', level: 3 },
  {
    type: 'paragraph',
    html: 'Cet outil utilise les directives officielles de l\'<strong>American Animal Hospital Association (AAHA)</strong> et les dernières études sur la méthylation de l\'ADN canin pour vous donner l\'estimation la plus précise possible.',
  },
  {
    type: 'table',
    headers: ['Espèce', 'Année 1', 'Année 2', 'Année 3+'],
    rows: [
      ['Chat', '15 ans humains', '24 ans humains', '+4 ans par an'],
      ['Petit chien', '15 ans humains', '24 ans humains', '+5 ans par an'],
      ['Chien moyen', '15 ans humains', '24 ans humains', '+6 ans par an'],
      ['Grand chien', '15 ans humains', '24 ans humains', '+7 ans par an'],
      ['Chien géant', '15 ans humains', '24 ans humains', '+8 ans par an'],
    ],
  },
  { type: 'title', text: 'Stades de Vie : À Quoi s\'Attendre ?', level: 3 },
  {
    type: 'paragraph',
    html: 'Connaître l\'âge réel de votre animal vous aide à comprendre ses besoins médicaux et émotionnels à chaque phase.',
  },
  {
    type: 'card',
    title: 'Chiot / Junior (0 - 1 an)',
    icon: 'mdi:star-shooting',
    html: 'C\'est la phase de croissance explosive. Ses os grandissent, ses dents changent et son cerveau absorbe les informations comme une éponge. La vaccination et la socialisation précoce sont essentielles ici.',
  },
  {
    type: 'card',
    title: 'Adulte (2 - 6 ans)',
    icon: 'mdi:shield-check',
    html: 'Plénitude physique et mentale. Sa personnalité est maintenant définie. C\'est le moment idéal pour profiter d\'activités physiques intenses et maintenir son poids idéal.',
  },
  {
    type: 'card',
    title: 'Senior (+7 ans)',
    icon: 'mdi:heart-pulse',
    html: 'Des cheveux gris commencent à apparaître sur le museau et il dort plus. Le métabolisme ralentit. À partir de là, les contrôles vétérinaires doivent être tous les 6 mois. Attention à l\'arthrite et à la santé dentaire.',
  },
  {
    type: 'tip',
    title: 'Conseil Vétérinaire',
    html: 'L\'âge calculé est une estimation biologique moyenne. Des facteurs tels que la race, la génétique et le mode de vie peuvent influencer le vieillissement réel de votre animal. Consultez toujours votre vétérinaire.',
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
];

export const content: PetAgeLocaleContent = {
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
