import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'calculateur-taille-collier-animal';
const title = 'Calculateur de taille de collier pour animal';
const description = 'Mesurez le tour de cou, ajoutez une marge de confort et trouvez une plage de réglage à vérifier sur votre animal.';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: 'Tour de cou', unitLabel: 'Afficher', centimetres: 'Centimètres', inches: 'Pouces', allowanceLabel: 'Marge de confort', collarTypeLabel: 'Type de collier', flatCollar: 'Classique', breakawayCollar: 'À ouverture', martingaleCollar: 'Martingale', statusTight: 'Ajoutez de la marge', statusBalanced: 'Prêt à vérifier', statusLoose: 'Vérifiez la sécurité', statusTightDetail: 'Ajoutez de la marge.', statusBalancedDetail: 'Vérifiez cette plage à la main.', statusLooseDetail: 'Vérifiez qu il ne peut pas glisser.', fitStudyLabel: 'Étude de réglage du collier', fitWindowLabel: 'Trouvez cette plage', measuredLabel: 'Cou mesuré', roomLabel: 'Marge de confort', checkLabel: 'Vérification manuelle', sceneAria: 'Étude de réglage montrant le cercle du cou et la plage du collier', neckMarker: 'cou', easeMarker: 'marge', rangeMarker: 'plage du collier', minimumMarker: 'début', maximumMarker: 'fin', checkFlat: 'Confortable, sûr et sans frottement.', checkBreakaway: 'Vérifiez le confort et le mécanisme d ouverture.', checkMartingale: 'La boucle de serrage ne doit pas comprimer le cou.', invalidInput: 'Saisissez un tour de cou et une marge valides.',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: 'Comment mesurer le cou de mon animal ?', answer: 'Placez un mètre souple autour de l endroit où le collier reposera. Gardez-le horizontal et proche du pelage sans serrer la peau. Recommencez si la position du collier, le pelage ou la posture de l animal change.' },
  { question: 'Pourquoi obtenir une plage plutôt qu une taille ?', answer: 'Les colliers réglables ont des courses différentes et les tailles ne sont pas normalisées entre fabricants. Le calcul ajoute la marge choisie et produit une petite plage de comparaison. Le collier réel doit ensuite être essayé sur l animal.' },
  { question: 'Quelle marge de confort choisir ?', answer: 'Il n existe pas une valeur universelle. Le pelage, la largeur, la matière et l activité changent le réglage. Utilisez le nombre comme une hypothèse visible, puis confirmez le confort et la sécurité par une vérification calme.' },
  { question: 'Le calcul convient-il à un collier martingale ?', answer: 'La première estimation utilise le même tour de cou. Le contrôle final est différent: la boucle de serrage doit être limitée et ne jamais étrangler. Suivez la notice du fabricant si le mécanisme vous est inconnu.' },
  { question: 'Puis-je utiliser le résultat pour un jeune animal ?', answer: 'Oui, comme une photographie du réglage actuel. Un jeune animal grandit et son pelage change, donc la mesure doit être répétée régulièrement et contrôlée avec attention.' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: 'Mesurer le cou', text: 'Mesurez l animal calme et debout, à l endroit où le collier sera posé. Le mètre doit rester plat et souple.' },
  { name: 'Choisir la marge', text: 'Réglez l espace entre le cou et le collier avec le contrôle visible. Les 2 cm initiaux sont seulement un exemple.' },
  { name: 'Choisir le type', text: 'Sélectionnez classique, à ouverture ou martingale afin d obtenir le rappel adapté au mécanisme.' },
  { name: 'Comparer le réglage', text: 'Cherchez un collier dont la plage réglable couvre tout le résultat, puis faites l essai physique.' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Transformer une mesure en plage d achat', items: ['Mesurez à l endroit où le collier sera réellement placé.', 'Rendez la marge de confort visible au lieu de deviner selon la race.', 'Comparez le résultat avec la plage de réglage du produit.', 'Terminez par un contrôle calme sur l animal.'] },
  { type: 'title', text: 'La décision aidée par ce calculateur', level: 2 },
  { type: 'paragraph', html: 'Les tableaux de tailles deviennent imprécis lorsqu un animal se trouve entre deux mesures, possède un pelage épais ou grandit encore. Cet outil part d une donnée vérifiable: le tour de cou à l endroit où le collier reposera. Vous ajoutez ensuite la marge de confort souhaitée. Le résultat n essaie pas de choisir une étiquette commerciale comme petit, moyen ou grand ; il crée une plage concrète à comparer avec les dimensions réglables du produit.' },
  { type: 'paragraph', html: 'La plage reste volontairement courte pour servir de repère d achat. Les colliers réglables ne suivent pas une norme mondiale et la longueur utile peut différer du nom affiché par une boutique. Un produit entre dans la sélection quand son réglage couvre toute la plage. Le chiffre ne suffit pourtant pas à valider une bordure, une boucle, un pelage ou un mécanisme particulier.' },
  { type: 'title', text: 'Mesurer avant l achat', level: 2 },
  { type: 'list', items: ['Mesurez lorsque l animal est calme et debout naturellement.', 'Gardez le mètre droit sans comprimer le poil ni la peau.', 'Recommencez si le collier doit être posé plus haut ou plus bas.', 'Pour un jeune animal, notez la date et vérifiez régulièrement pendant la croissance.'] },
  { type: 'paragraph', html: 'La marge de confort est une hypothèse explicite, pas une garantie de sécurité. La bonne valeur dépend de l animal, du pelage, de la largeur, de la matière et de l usage. Le contrôle avec les doigts peut donner un repère, mais il ne transforme pas un nombre en règle universelle. En cas de frottement, toux, douleur, gêne respiratoire ou stress, retirez le collier et demandez un avis qualifié.' },
  { type: 'title', text: 'Lire la roue de réglage', level: 2 },
  { type: 'table', headers: ['Signal', 'Signification', 'Suite'], rows: [['Cou mesuré', 'Tour avant la marge.', 'Recommencer si le mètre était incliné ou serré.'], ['Début', 'Cou plus marge choisie.', 'Repère inférieur de la plage réglable.'], ['Fin', 'Petite fenêtre pour comparer.', 'Chercher un produit qui couvre toute la fenêtre.'], ['Contrôle', 'Rappel lié à la marge choisie.', 'Confirmer sur l animal.']] },
  { type: 'title', text: 'Le type de collier change le contrôle final', level: 2 },
  { type: 'paragraph', html: 'Un collier classique demande une vérification du confort et de la sécurité, tandis qu un modèle à ouverture ou martingale ajoute une question sur son mécanisme. Contrôlez le bord, la boucle, le pelage et la boucle de serrage. Le nombre aide à filtrer les produits, mais la décision finale dépend de l animal calme et de la notice du fabricant.' },
  { type: 'tip', title: 'Faire un contrôle calme', html: 'Posez le collier lorsque l animal est détendu. Il doit pouvoir bouger, respirer, manger, boire et tourner la tête sans frottement. Vérifiez aussi qu il ne peut pas passer par-dessus la tête lorsqu il doit rester en place. Recommencez après le toilettage, la croissance ou un changement de poids.' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
