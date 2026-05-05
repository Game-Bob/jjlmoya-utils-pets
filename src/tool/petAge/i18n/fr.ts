import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'calculateur-age-animaux';
const title = 'Calculateur d\'Âge pour Animaux';
const description = 'Découvrez l\'âge réel de votre chien ou chat en années humaines. Oubliez la "règle du 7". Utilisez notre calculateur basé sur la science vétérinaire actuelle pour des résultats précis.';

const ui: PetAgeUI = {
  toolTitle: 'Calculateur d\'Âge',
  toolSubtitle: 'Quel est l\'âge humain de votre compagnon à quatre pattes ?',
  petNameLabel: 'Nom (Optionnel)',
  petNamePlaceholder: 'ex., Buddy',
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
  lifeStageLabel: 'Étape de vie',
  milestoneLabel: 'Prochaine étape',
  shareBtn: 'Partager le résultat',
  shareSuccess: 'Copié ! Ouverture de la carte...',
  humanAgeTitle: 'Âge Magique',
  recalculateBtn: 'Calculer un autre âge',
  realAgeLabel: 'Âge Réel',
  defaultPetName: 'Votre animal',
  stageDogPuppy: 'Chiot Joueur',
  stageDogTeen: 'Ado Rebelle',
  stageDogAdult: 'Adulte en Forme',
  stageDogMature: 'Maturité Distinguée',
  stageDogSenior: 'Sagesse Senior',
  stageCatKitten: 'Curiosité Infantile',
  stageCatYouth: 'Jeunesse Féline',
  stageCatReign: 'Règne Domestique',
  stageCatVeteran: 'Vétéran Gâté',
  stageCatVenerable: 'Vénérable Ancien',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: 'Est-il vrai qu\'une année de chien équivaut à sept années humaines ?',
    answer: 'Non. C\'est une règle simplifiée que la science vétérinaire moderne a démentie. Les chiens mûrissent très rapidement au cours de leurs deux premières années, et le processus ralentit ensuite, variant considérablement selon le poids et la race. Des études récentes sur la méthylation de l\'ADN ont permis de développer des formules de vieillissement bien plus précises qui reflètent mieux le développement biologique réel des animaux tout au long de leur vie.',
  },
  {
    question: 'Pourquoi les grands chiens vieillissent-ils plus vite ?',
    answer: 'Les races de grands chiens ont un métabolisme et une croissance plus accélérés, ce qui provoque un stress oxydatif plus important dans leurs cellules. Cela signifie que leur espérance de vie est plus courte que celle des petits chiens. Les marqueurs biologiques montrent que les races géantes peuvent atteindre le statut de senior dès l\'âge de 5 ans humains, tandis que les petites races pourraient ne l\'atteindre qu\'à 10 ou 11 ans.',
  },
  {
    question: 'Comment les chats vieillissent-ils par rapport aux humains ?',
    answer: 'Un chat termine sa petite enfance à un mois, son adolescence à 6 mois et atteint l\'âge adulte (équivalent à 24 ans humains) à 2 ans. Après cela, chaque année de la vie d\'un chat équivaut à environ 4 ans humains. Ce modèle est assez constant selon les différentes races de chats, contrairement à l\'importante variation observée chez les chiens.',
  },
  {
    question: 'À quel âge un animal est-il considéré comme Senior ?',
    answer: 'Geralement, un chien est considéré comme senior lorsqu\'il a atteint 75 % de son espérance de vie prévue. Pour les chats, c\'est généralement de 7 à 11 ans, selon leur état de santé. Les examens vétérinaires réguliers deviennent de plus en plus critiques au cours de cette phase pour surveiller les problèmes courants liés à l\'âge, comme les maladies rénales ou le déclin cognitif.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Sélectionnez l\'espèce', text: 'Choisissez si vous avez un chien ou un chat pour appliquer la formule biologique correcte selon leur taux métabolique spécifique.' },
  { name: 'Indiquez la taille', text: 'Pour les chiens, le poids est le facteur clé pour déterminer l\'âge biologique. Précisez s\'il est petit (jusqu\'à 10 kg), moyen (10 à 25 kg), grand (25 à 45 kg) ou géant (plus de 45 kg).' },
  { name: 'Entrez l\'année de naissance', text: 'Entrez l\'année de naissance de votre animal pour calculer son âge chronologique. Notre système traitera ces informations par rapport aux courbes de vieillissement établies.' },
  { name: 'Analysez l\'étape de vie', text: 'Vérifiez le résultat pour savoir si votre animal est au stade de chiot, jeune, adulte ou senior par rapport à un humain et comprenez ses besoins actuels.' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Ce que vous devez savoir sur le vieillissement des animaux',
    items: [
      'La "règle de 7" est un mythe : les chiens mûrissent les 2 premières années.',
      'Un chien de 1 an équivaut à 15 ans humains ; un chien de 2 ans équivaut à 24 ans humains.',
      'Les grands chiens vieillissent plus vite que les petits après 2 ans.',
      'Les chats suivent une courbe plus linéaire : l\'année de chat équivaut à 4 ans humains après 2 ans.',
      'L\'âge biologique est un meilleur prédicteur des besoins de santé que l\'âge chronologique.',
      'Des dépistages réguliers peuvent aider à détecter les problèmes liés à l\'âge.',
    ],
  },
  { type: 'title', text: 'La Vérité Scientifique sur l\'Âge de votre Animal', level: 2 },
  {
    type: 'paragraph',
    html: 'Saviez-vous qu\'un chat de 2 ans possède déjà la maturité d\'une personne de 24 ans ? Découvrez pourquoi la règle de multiplication par 7 est un mythe et comment comprendre la réalité biologique peut améliorer les soins de votre animal. Le vieux mythe selon lequel "1 année de chien équivaut à 7 années humaines" est une simplification qui ne tient pas compte des changements de développement massifs observés au début de la vie. Les animaux mûrissent à une vitesse vertigineuse au cours de leurs deux premières années de vie, atteignant la maturité physique très rapidement. Après cela, cette courbe de vieillissement s\'aplatit et ralentit considérablement.',
  },
  {
    type: 'paragraph',
    html: 'La recherche moderne, y compris les études sur les horloges épigénétiques et la méthylation de l\'ADN, nous a fourni une vision nuancée. Ces études montrent que les modifications chimiques de l\'ADN d\'un chien changent à différents rythmes. Au stade de chiot, ces changements sont rapides, alors qu\'à l\'âge adulte les changements métaboliques sont plus graduels. Cette compréhension a permis aux scientifiques de développer des formules logarithmiques qui sont bien plus précises que n\'importe quelle multiplication linéaire.',
  },
  { type: 'title', text: 'La Science derrière le Calcul', level: 3 },
  {
    type: 'paragraph',
    html: 'Cet outil utilise les directives officielles de l\'<strong>American Animal Hospital Association (AAHA)</strong> et les dernières études sur la méthylation de l\'ADN pour vous donner l\'estimation la plus précise possible. En combinant des données spécifiques à la taille avec des marqueurs biologiques, nous créons un modèle complet du développement de l\'animal. Cette approche reconnaît qu\'un Chihuahua et un Grand Danois ont des expériences de vie et des profils de vieillissement très différents dès leur naissance.',
  },
  {
    type: 'paragraph',
    html: 'Comprendre ces différences est crucial pour les propriétaires d\'animaux responsables. Cela permet d\'ajuster les interventions vétérinaires, comme le passage à un régime senior ou le début de suppléments préventifs pour les articulations. Notre calculateur fait le pont entre la science complexe et la connaissance pratique et quotidienne pour les amoureux des animaux du monde entier.',
  },
  {
    type: 'table',
    headers: ['Espèce', 'Année 1', 'Année 2', 'Année 3 et plus'],
    rows: [
      ['Chat', '15 ans humains', '24 ans humains', '+4 ans par an'],
      ['Petit chien', '15 ans humains', '24 ans humains', '+5 ans par an'],
      ['Moyen chien', '15 ans humains', '24 ans humains', '+6 ans par an'],
      ['Grand chien', '15 ans humains', '24 ans humains', '+7 ans par an'],
      ['Chien géant', '15 ans humains', '24 ans humains', '+8 ans par an'],
    ],
  },
  { type: 'title', text: 'Étapes de la Vie et Préparation', level: 3 },
  {
    type: 'paragraph',
    html: 'Connaître l\'âge réel de votre animal vous aide à comprendre ses besoins médicaux à chaque phase. Tout comme les humains traversent des étapes de vie, les chiens et les chats connaissent des changements physiologiques spécifiques à mesure qu\'ils grandissent. Être conscient de ces transitions vous permet de fournir le bon soutien au bon moment, qu\'il s\'agisse de jeux pour un adolescent ou de soins orthopédiques pour un senior.',
  },
  {
    type: 'card',
    title: 'Chiot ou Junior',
    icon: 'mdi:star-shooting',
    html: 'C\'est l\'étape de croissance et de développement explosifs. Leurs os grandissent à un rythme incroyable, leurs dents de lait tombent pour laisser place aux dents définitives. La vaccination et la socialisation précoce sont critiques ici pour assurer qu\'ils deviennent des adultes équilibrés. C\'est aussi le meilleur moment pour établir de bonnes habitudes qui dureront toute la vie.',
  },
  {
    type: 'card',
    title: 'Adulte',
    icon: 'mdi:shield-check',
    html: 'C\'est le sommet de la forme physique pour la plupart des animaux. Leur personnalité est maintenant définie et ils sont généralement à leur moment le plus actif. C\'est le moment idéal pour profiter d\'activités physiques intenses et maintenir un poids corporel idéal pour prévenir de futures maladies. Un exercice constant et une alimentation équilibrée sont les piliers de la santé pendant ces années.',
  },
  {
    type: 'card',
    title: 'Senior',
    icon: 'mdi:heart-pulse',
    html: 'Des poils gris commencent à apparaître sur le museau et l\'animal a tendance à dormir davantage. Leur métabolisme ralentit considérablement et ils peuvent montrer moins d\'intérêt pour les jeux. À partir de là, les examens vétérinaires devraient avoir lieu tous les six mois. Surveillez les signes d\'arthrite et tout changement de comportement. La détection précoce des maux senior est le meilleur moyen de s\'assurer que leur qualité de vie reste élevée.',
  },
  {
    type: 'tip',
    title: 'Conseil Vétérinaire',
    html: 'L\'âge calculé est une estimation biologique moyenne. Des facteurs tels que la race, la génétique et le mode de vie peuvent avoir un impact sur le vieillissement réel de votre animal. Pour des conseils personnalisés et une évaluation de la santé, consultez votre vétérinaire.',
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
