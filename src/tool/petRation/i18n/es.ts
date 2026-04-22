import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'calculadora-racion-diaria-mascotas';
const title = 'Calculadora de Ración Diaria de Mascotas';
const description = 'Calcula la cantidad exacta de comida que tu perro o gato necesita. Herramienta basada en las fórmulas veterinarias RER y DER para un peso saludable.';

const ui: PetRationUI = {
  toolTitle: 'Calculadora de Ración Diaria',
  sectionProfile: '1. Perfil de la Mascota',
  labelAnimal: 'Animal',
  labelStage: 'Etapa de Vida',
  labelWeight: 'Peso Corporal',
  labelActivity: 'Actividad Física',
  sectionDiet: '2. Dieta y Alimento',
  labelDietType: 'Tipo de Alimentación',
  speciesDog: 'Perro',
  speciesCat: 'Gato',
  speciesRabbit: 'Conejo',
  stagePuppy: 'Cachorro o Gatito',
  stageAdult: 'Adulto',
  stageSenior: 'Senior',
  activityLow: 'Baja',
  activityMod: 'Normal',
  activityHigh: 'Alta',
  dietDry: 'Solo Seco',
  dietMixed25: 'Mixto (25%)',
  dietHalf: 'Mitad-Mitad (50%)',
  dietWet: 'Solo Húmedo',
  manualAdjust: 'Ajuste manual (1-99%)',
  wetPercentLabel: '% de comida húmeda en la dieta',
  tagDry: 'Seco',
  tagWet: 'Húmedo',
  totalKcal: 'Total',
  kcalUnit: 'kcal/día',
  statusPuppy: 'Fase de crecimiento rápido',
  statusSenior: 'Metabolismo maduro',
  statusLargeDog: 'Raza grande: Cuidado articular',
  statusDefault: 'Peso equilibrado',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: '¿Qué es el RER y por qué es importante?',
    answer: 'El RER (Resting Energy Requirement) es la energía mínima que tu mascota necesita para mantener sus funciones vitales básicas en reposo. Es la base científica para calcular la ración diaria, evitando la infra o sobrealimentación. Entender el RER permite a los dueños ajustar la ingesta de alimentos a las necesidades biológicas específicas de su mascota, asegurando que no consuman más de lo que sus órganos pueden procesar de manera eficiente.',
  },
  {
    question: '¿Cómo afecta la esterilización a la ración de mi mascota?',
    answer: 'Los animales esterilizados suelen tener un metabolismo basal entre un 15 y un 20 por ciento menor. Pueden necesitar una ración ligeramente más pequeña o un nivel de actividad ajustado a Bajo en la calculadora para evitar el aumento de peso. Los cambios hormonales tras el procedimiento alteran la forma en que el cuerpo almacena grasa y quema energía, haciendo que la vigilancia sobre el cuenco de comida sea aún más importante para la salud a largo plazo.',
  },
  {
    question: '¿Puedo usar esta calculadora para cachorros?',
    answer: 'Los cachorros en crecimiento tienen necesidades energéticas mucho más altas (hasta 3 veces el RER). Esta calculadora está optimizada para perros y gatos adultos. Para cachorros, consulta siempre a tu veterinario para un plan de crecimiento específico. Una alimentación inadecuada durante la fase de crecimiento temprano puede provocar problemas óseos graves más adelante en la vida, ya que el exceso de calorías puede forzar el desarrollo óseo demasiado rápido.',
  },
  {
    question: '¿Cuántas veces al día debo distribuir la ración?',
    answer: 'Lo ideal es repartir la cantidad total resultante en 2 o 3 comidas al día. Esto ayuda a mantener niveles estables de glucosa y mejora la digestión, especialmente en razas propensas a la torsión gástrica. Los horarios de comida constantes también ayudan a mantener a tu mascota saciada y con menos probabilidades de pedir sobras entre las comidas programadas.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Selecciona la especie cuidadosamente', text: 'Indica si el cálculo es para un perro o un gato, ya que sus metabolismos y límites de peso varían significativamente según sus rasgos biológicos únicos.' },
  { name: 'Ajusta por peso exacto', text: 'Mueve el control deslizante al peso actual de tu mascota en kilogramos. Es vital utilizar un peso medido recientemente para un cálculo preciso del requerimiento energético.' },
  { name: 'Define su nivel de actividad', text: 'Elige entre actividad baja, normal o alta basándote en el ejercicio diario real y los niveles de energía que muestra tu compañero de cuatro patas.' },
  { name: 'Introduce las calorías del alimento por kg', text: 'Busca en el envase del alimento para mascotas el valor exacto de kcal/kg para que la ración final en gramos sea lo más precisa posible para una salud óptima.' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Principios Clave de la Nutrición Veterinaria',
    items: [
      'La fórmula RER es: 70 × (peso en kg)^0.75. Es la base científica de todo el cálculo calórico veterinario moderno.',
      'El DER multiplica el RER por el factor de estilo de vida específico del animal para proporcionar un requerimiento diario.',
      'Un perro castrado necesita hasta un 20 por ciento menos de calorías que uno entero debido a cambios hormonales.',
      'La obesidad afecta al 50 por ciento de las mascotas hoy en día y reduce significativamente su esperanza y calidad de vida.',
      'Calcular la ración exacta es una de las formas más efectivas de medicina preventiva para los dueños de mascotas.',
      'Usar una báscula de cocina proporciona la precisión necesaria para seguir un plan de alimentación basado en la ciencia.',
    ],
  },
  { type: 'title', text: 'Guía Completa para Calcular la Ración Diaria de tu Mascota para una Salud Óptima', level: 2 },
  {
    type: 'paragraph',
    html: 'Alimentar a un perro o gato correctamente no es solo cuestión de llenar su cuenco cada mañana. La nutrición es el pilar fundamental de su salud, longevidad y bienestar emocional. Una <strong>calculadora de ración diaria para mascotas</strong> es una herramienta esencial para cualquier dueño responsable que quiera evitar los dos problemas más comunes en la nutrición veterinaria actual: la malnutrición por falta de nutrientes y, sobre todo, la obesidad, que afecta a más del 50% de las mascotas en los países desarrollados.',
  },
  {
    type: 'paragraph',
    html: 'En esta guía exploraremos los fundamentos científicos detrás de los cálculos calóricos, cómo interpretar las etiquetas de los alimentos y cómo factores como la edad, el nivel de actividad física y el estado fisiológico influyen en la cantidad de comida que tu compañero necesita cada día. Te ayudaremos a comprender cómo pequeños ajustes en la ración diaria pueden marcar una gran diferencia en la prevención de la diabetes, problemas articulares y salud cardíaca para tu animal.',
  },
  { type: 'title', text: 'La Ciencia detrás de los Cálculos: Entendiendo RER y DER', level: 3 },
  {
    type: 'paragraph',
    html: 'Para determinar exactamente cuánto debe comer un animal cada día, los veterinarios y nutricionistas utilizan dos conceptos clave: el RER y el DER. Estas siglas representan el Requerimiento Energético en Reposo y el Requerimiento Energético Diario, respectivamente. Comprender cómo interactúan es crucial para gestionar el peso y el bienestar de tu mascota de forma segura y controlada.',
  },
  {
    type: 'paragraph',
    html: 'El RER cubre la energía necesaria para las funciones orgánicas básicas, la respiración y la circulación mientras el animal está en reposo. El DER toma este valor y lo ajusta según el estilo de vida del animal, ya sea un perro de alto rendimiento activo o un gato de interior tranquilo. Al calibrar estos valores correctamente, podemos lograr un equilibrio que promueva una puntuación de condición corporal saludable a largo plazo.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: Energía en reposo', value: '70 × kg^0.75' },
      { label: 'Factor cachorro', value: 'de x2.5 a x3.5' },
      { label: 'Factor adulto activo', value: 'de x1.6 a x2.0' },
      { label: 'Factor senior', value: 'de x1.0 a x1.4' },
    ],
  },
  { type: 'title', text: 'Cómo Leer e Interpretar la Etiqueta del Alimento de tu Mascota', level: 3 },
  {
    type: 'paragraph',
    html: 'Para que la calculadora te dé los gramos exactos, necesitas conocer la <strong>densidad calórica</strong> del producto, también conocida como su energía metabolizable. Este valor suele expresarse como kcal/kg o kcal/100g en el envase. Al introducir estos números con precisión, puedes diseñar una dieta que no sea deficiente ni excesiva.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Croquetas de dieta ligera', value: '~3000 kcal/kg' },
      { label: 'Croquetas estándar para adultos', value: '~3500 kcal/kg' },
      { label: 'Croquetas para cachorros ricas en energía', value: '~4000 kcal/kg' },
      { label: 'Comida húmeda en lata', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Nota Nutricional del Veterinario',
    html: 'Cada mascota es un individuo con su propio metabolismo único. La calculadora ofrece un punto de partida respaldado por la ciencia, pero siempre debes monitorizar la condición corporal real palpando las costillas de tu mascota. Si puedes sentirlas fácilmente sin presionar fuerte, el peso es ideal. Si las costillas son difíciles de encontrar bajo una capa de grasa, podría ser el momento de restringir la ración.',
  },
  { type: 'title', text: 'Diferencias en Nutrición Entre Gatos y Perros', level: 3 },
  {
    type: 'paragraph',
    html: 'Los gatos son carnívoros obligados y su metabolismo está optimizado para obtener energía de las proteínas animales. En los perros, vemos un metabolismo omnívoro más flexible, pero aún así se debe tener cuidado con el exceso de carbohidratos que puede llevar al aumento de peso. Ambas especies prosperan con una ración controlada que evite la carga excesiva en las articulaciones y el sistema cardiovascular a lo largo de sus vidas.',
  },
  {
    type: 'paragraph',
    html: 'Dedicar unos minutos a calcular la ración exacta es una de las inversiones más rentables en medicina preventiva que puedes hacer como dueño. Un peso saludable reduce drásticamente el riesgo de enfermedades crónicas y le da a tu mejor amigo la mejor oportunidad de una vida larga y vibrante. Consulta a tu veterinario en tu próxima visita rutinaria para asegurarte de que tu estrategia de alimentación actual sea la óptima.',
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
  faqTitle: 'Preguntas Frecuentes': 'Bibliografía',
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
