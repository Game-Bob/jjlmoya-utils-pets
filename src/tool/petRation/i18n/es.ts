import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'calculadora-racion-diaria-mascotas';
const title = 'Calculadora de Ración Diaria para Mascotas | Nutrición Canina y Felina';
const description = 'Calcula la cantidad exacta de comida que necesita tu perro o gato. Herramienta basada en fórmulas veterinarias RER y DER para un peso saludable.';

const ui: PetRationUI = {
  toolTitle: 'Calculadora de Ración Diaria',
  sectionProfile: '1. Perfil de la Mascota',
  labelAnimal: 'Animal',
  labelStage: 'Etapa Vital',
  labelWeight: 'Peso Corporal',
  labelActivity: 'Actividad Física',
  sectionDiet: '2. Dieta y Alimento',
  labelDietType: 'Tipo de Alimentación',
  speciesDog: 'Perro',
  speciesCat: 'Gato',
  speciesRabbit: 'Conejo',
  stagePuppy: 'Cachorro',
  stageAdult: 'Adulto',
  stageSenior: 'Senior',
  activityLow: 'Baja',
  activityMod: 'Normal',
  activityHigh: 'Alta',
  dietDry: 'Solo Seco',
  dietMixed25: 'Mixta (25%)',
  dietHalf: 'Mitad (50%)',
  dietWet: 'Solo Húmedo',
  manualAdjust: 'Ajuste manual (1-99%)',
  wetPercentLabel: '% de comida húmeda en la dieta',
  tagDry: 'Seco',
  tagWet: 'Húmedo',
  totalKcal: 'Total',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: '¿Qué es el RER y por qué es importante?',
    answer: 'El RER (Resting Energy Requirement) es la energía mínima que tu mascota necesita para mantener sus funciones vitales básicas en reposo. Es la base científica para calcular la ración diaria evitando el infra o sobre-alimentación.',
  },
  {
    question: '¿Cómo influye la esterilización en la ración de mi mascota?',
    answer: 'Los animales esterilizados suelen tener un metabolismo basal un 15-20% más bajo. Por ello, es común que necesiten una ración ligeramente menor o un nivel de actividad ajustado a Baja en la calculadora para evitar el aumento de peso.',
  },
  {
    question: '¿Puedo usar esta calculadora para cachorros?',
    answer: 'Los cachorros en crecimiento tienen necesidades energéticas mucho más altas (hasta 3 veces el RER). Esta calculadora está optimizada para perros y gatos adultos. Para cachorros, consulta siempre con tu veterinario para un plan de crecimiento específico.',
  },
  {
    question: '¿Cuántas veces al día debo repartir la ración?',
    answer: 'Lo ideal es repartir la cantidad total resultante en 2 o 3 tomas al día. Esto ayuda a mantener niveles de glucosa estables y mejora la digestión, especialmente en razas propensas a la torsión gástrica.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Selecciona la especie', text: 'Indica si el cálculo es para un perro o un gato, ya que sus metabolismos y límites de peso varían.' },
  { name: 'Ajusta el peso', text: 'Mueve el deslizador hasta el peso actual de tu mascota en kilogramos.' },
  { name: 'Define su actividad', text: 'Elige entre actividad baja, normal o alta basándote en el ejercicio diario real que realiza tu compañero.' },
  { name: 'Introduce las calorías del alimento', text: 'Busca en el envase del pienso el valor de kcal/kg para que el cálculo en gramos sea exacto.' },
];

const bibliography: PetRationLocaleContent['bibliography'] = [
  { name: 'WSAVA: Nutrition Toolkit and Calorie Recommendations', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
  { name: 'FEDIAF: Nutritional Guidelines for Complete and Complementary Pet Food', url: 'https://fediaf.org/self-regulation/nutrition.html' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Principios de Nutrición Veterinaria',
    items: [
      'La fórmula RER es: 70 × (peso en kg)^0.75. Es la base de todo cálculo calórico veterinario.',
      'El DER multiplica el RER por el factor de estilo de vida del animal.',
      'Un perro esterilizado necesita hasta un 20% menos de calorías que uno entero.',
      'La obesidad afecta al 50% de mascotas y reduce significativamente su esperanza de vida.',
    ],
  },
  { type: 'title', text: 'Guía Completa para Calcular la Ración Diaria de tu Mascota', level: 2 },
  {
    type: 'paragraph',
    html: 'Alimentar correctamente a un perro o un gato no es solo una cuestión de llenar su cuenco cada mañana. La nutrición es el pilar fundamental de su salud, longevidad y bienestar emocional. Una <strong>calculadora de ración diaria para mascotas</strong> es una herramienta esencial para cualquier propietario responsable que desee evitar los dos problemas más comunes en la nutrición veterinaria actual: la desnutrición por falta de nutrientes y, especialmente, la obesidad, que afecta a más del 50% de las mascotas en países desarrollados.',
  },
  {
    type: 'paragraph',
    html: 'En esta guía exploraremos los fundamentos científicos detrás de los cálculos calóricos, cómo interpretar las etiquetas de los alimentos y de qué manera factores como la edad, el nivel de actividad física y el estado fisiológico influyen en la cantidad de alimento que tu compañero necesita cada día.',
  },
  { type: 'title', text: 'La Ciencia Detrás de los Cálculos: RER y DER', level: 3 },
  {
    type: 'paragraph',
    html: 'Para determinar cuánto debe comer un animal, los veterinarios y nutricionistas utilizan dos conceptos clave: el RER y el DER.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: Energía en reposo', value: '70 × kg^0.75' },
      { label: 'Factor cachorro', value: '×2.5 - ×3.5' },
      { label: 'Factor adulto activo', value: '×1.6 - ×2.0' },
      { label: 'Factor senior', value: '×1.0 - ×1.4' },
    ],
  },
  { type: 'title', text: 'Cómo Leer la Etiqueta de tu Pienso', level: 3 },
  {
    type: 'paragraph',
    html: 'Para que la calculadora te dé los gramos exactos, necesitas conocer la <strong>densidad calórica</strong> del producto. Este valor suele expresarse como kcal/kg o kcal/100g.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Pienso Light', value: '~3000 kcal/kg' },
      { label: 'Pienso Adulto', value: '~3500 kcal/kg' },
      { label: 'Pienso Puppy', value: '~4000 kcal/kg' },
      { label: 'Comida Húmeda', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Nota Nutricional',
    html: 'Cada mascota es un individuo. La calculadora ofrece un punto de partida sólido, pero siempre debes monitorizar la condición corporal palpando las costillas de tu mascota. Si las notas sin tener que apretar, el peso es correcto.',
  },
  { type: 'title', text: 'Nutrición en Gatos vs Perros', level: 3 },
  {
    type: 'paragraph',
    html: 'Los gatos son carnívoros obligados y su metabolismo proteico es único. En perros, debemos tener cuidado con los excesos de carbohidratos. Ambos se benefician de una ración controlada que evite la carga excesiva sobre las articulaciones y el sistema cardiovascular. Un peso saludable reduce el riesgo de diabetes y problemas cardíacos drásticamente.',
  },
  {
    type: 'paragraph',
    html: 'Invertir minutos en calcular la ración exacta es medicina preventiva. Un peso saludable reduce el riesgo de diabetes y problemas cardíacos drásticamente. Tu veterinario puede confirmar si la condición corporal de tu animal es la correcta con una simple exploración física.',
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
