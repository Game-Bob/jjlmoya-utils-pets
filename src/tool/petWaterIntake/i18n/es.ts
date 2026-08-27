import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'calculadora-agua-diaria-perros-gatos';
const title = 'Calculadora de agua diaria para perros y gatos';
const description = 'Calcula las necesidades diarias de agua de tu perro o gato según peso, dieta, actividad y clima con una guía clara de ingesta total y agua de cuenco.';

const ui: PetWaterIntakeUI = {
  journeyHint: 'Selecciona la mascota, indica su peso corporal y ajusta la dieta y el clima del día.',
  instantHint: 'Cada opción actualiza la estimación al instante. Es una guía orientativa, no un diagnóstico.',
  unitLegend: 'Unidades',
  metricUnit: 'Métrico',
  imperialUnit: 'Imperial',
  speciesLegend: '¿Para quién es el bebedero?',
  speciesDog: 'Perro',
  speciesCat: 'Gato',
  speciesDogMeta: 'Guía de mantenimiento 60 mL por kg',
  speciesCatMeta: 'Guía de mantenimiento 40 mL por kg',
  weightLabel: 'Peso corporal',
  weightHint: 'Indica el peso sano actual de tu mascota.',
  weightKg: 'kg',
  weightLb: 'lb',
  dietLegend: '¿Cuánta agua aporta la alimentación?',
  dietDry: 'Principalmente pienso seco',
  dietDryMeta: 'La gran mayoría del agua se bebe del cuenco',
  dietMixed: 'Alimentación mixta',
  dietMixedMeta: 'Una parte del agua proviene de la comida',
  dietWet: 'Principalmente latas o comida húmeda',
  dietWetMeta: 'La comida aporta la mayor parte de la humedad',
  activityLegend: 'Actividad habitual hoy',
  activityCalm: 'Tranquilo / Reposo',
  activityTypical: 'Moderada / Normal',
  activityActive: 'Intensa / Muy activo',
  heatLegend: 'Clima y temperatura',
  heatNormal: 'Templado / Normal',
  heatWarm: 'Cálido',
  heatHot: 'Caluroso / Bochorno',
  resultEyebrow: 'Estimación de volumen',
  totalRangeLabel: 'Agua total necesaria (todas las fuentes)',
  drinkingRangeLabel: 'Guía aproximada de agua a beber del cuenco',
  totalRangeHint: 'Rango diario total incluyendo la humedad de los alimentos.',
  drinkingRangeHint: 'Estimación orientativa de la parte a beber en bebedero.',
  statusEveryday: 'Condiciones estándar',
  statusActive: 'Día de alta actividad',
  statusWarm: 'Clima caluroso',
  statusDemanding: 'Condiciones de alta exigencia',
  statusDetailEveryday: 'Perfil de mantenimiento base sin factores extra de calor o esfuerzo.',
  statusDetailActive: 'El ejercicio incrementa las pérdidas hídricas. Garantiza agua fresca constante.',
  statusDetailWarm: 'El calor aumenta las pérdidas por jadeo. La sombra y el aire limpio son prioritarios.',
  statusDetailDemanding: 'Alta actividad y calor combinados. Supervisa de cerca la hidratación de la mascota.',
  resultEmpty: 'Introduce un peso válido para calcular el volumen de agua.',
  sceneAria: 'Depósito de agua para la mascota seleccionada',
  sceneTotal: 'AGUA TOTAL',
  sceneBowl: 'zona media de ingesta estimada',
  methodTitle: 'Método de cálculo',
  methodText: 'El centro del cálculo sigue la guía de mantenimiento de la AAHA (60 mL/kg en perros y 40 mL/kg en gatos). La dieta, la actividad y el calor aplican factores de ajuste contextualmente.',
  noteTitle: 'El cuenco de agua no es un instrumento de diagnóstico',
  noteText: 'Mantén siempre agua limpia y fresca a libre disposición. Ante cualquier cambio brusco en la ingesta o micción, o sospecha de deshidratación, acude al veterinario.',
  invalidWeight: 'Por favor, introduce un peso corporal válido.',
  weightRange: 'El peso debe estar entre 0.5 kg y 100 kg.',
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    question: '¿Cuánta agua debe beber un perro o un gato al día?',
    answer: 'La guía veterinaria general de la AAHA establece una ingesta de mantenimiento de unos 60 mL por kg de peso en perros y 40 mL por kg en gatos al día. Sin embargo, el volumen varía según el peso, la dieta (pienso o lata), la temperatura ambiente y el nivel de ejercicio.',
  },
  {
    question: '¿La comida húmeda reduce la necesidad de beber agua del bebedero?',
    answer: 'Sí. La comida en lata contiene entre un 75% y un 82% de agua, cubriendo gran parte de los requerimientos hídricos en las comidas. Por ello, las mascotas alimentadas con comida húmeda suelen beber con menor frecuencia del cuenco.',
  },
  {
    question: '¿Cuándo debo preocuparme por cambios en la ingesta de agua?',
    answer: 'Debes consultar al veterinario de inmediato si notas un aumento repentino y exagerado de sed (polidipsia) o una falta total de interés por el agua (adipsia). Pueden ser señales de diabetes, insuficiencia renal o infecciones.',
  },
  {
    question: '¿El calor y el ejercicio pueden duplicar la necesidad de agua?',
    answer: 'Sí. Las altas temperaturas y el ejercicio intenso aumentan la pérdida de humedad a través del jadeo, que es el mecanismo principal de termorregulación en perros y gatos. Es vital ofrecer sombra y agua fresca constante.',
  },
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  { name: 'Seleccionar especie y peso', text: 'Elige si la consulta es para un perro o un gato e introduce su peso sano actual en kg o lb.' },
  { name: 'Ajustar tipo de alimentación', text: 'Elige si la dieta es seca, mixta o húmeda para descontar el porcentaje de agua aportado directamente por las raciones de comida.' },
  { name: 'Definir clima y actividad', text: 'Selecciona el nivel de ejercicio y la temperatura ambiente del día para calcular las pérdidas adicionales por respiración y jadeo.' },
  { name: 'Revisar la guía de hidratación', text: 'Consulta tanto la ingesta total estimada de todas las fuentes como la cantidad aproximada que debería beber del cuenco de agua.' },
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Guía Clave de Hidratación para Mascotas',
    items: [
      'Mantenimiento base: Perros ~60 mL/kg diarios; gatos ~40 mL/kg diarios según pautas AAHA.',
      'Impacto de la dieta: El alimento húmedo aporta hasta un 80% de agua, reduciendo las visitas al bebedero.',
      'Calor y ejercicio: El jadeo incrementa la pérdida de fluidos y exige agua fresca constante.',
      'Señales de alerta: Cambios bruscos en la ingesta requieren evaluación veterinaria inmediata.',
      'Acceso libre: Se deben disponer varios bebederos limpios y bien situados en el hogar.',
    ],
  },
  {
    type: 'title',
    text: 'Cálculo de Hidratación Diaria para Perros y Gatos',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La hidratación adecuada en perros y gatos es fundamental para el metabolismo, la digestión, la regulación térmica y la salud renal. El agua representa entre el 60% y el 70% del peso corporal total en un animal adulto. La American Animal Hospital Association (AAHA) establece pautas base de ingesta hídrica de 60 mL por kg en perros y 40 mL por kg en gatos, que sirven como referencia para la gestión del bebedero.',
  },
  {
    type: 'paragraph',
    html: 'No obstante, esta cifra de mantenimiento representa el requerimiento hídrico total y no únicamente el agua consumida en el recipiente. El agua total proviene de la bebida directa, la humedad propia de los alimentos comerciales y el agua metabólica. Comprender esta diferencia evita preocupaciones innecesarias en los tutores cuando las mascotas comen alimentos ricos en humedad.',
  },
  {
    type: 'title',
    text: 'Diferencia entre Agua Total y Agua de Bebedero',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El tipo de dieta es el factor que más influye en el volumen de agua que beberá una mascota directamente de la taza. El pienso seco suele contener entre un 6% y un 10% de agua, obligando al animal a cubrir casi todo su requerimiento en el bebedero. En cambio, la comida en lata alcanza entre un 75% y un 82% de humedad, aportando la gran mayoría del agua necesaria durante las comidas.',
  },
  {
    type: 'table',
    headers: ['Factor', 'Efecto en la hidratación', 'Consideración principal'],
    rows: [
      ['Especie', 'Define la tasa metabólica base de agua', 'Perros ~60 mL/kg, Gatos ~40 mL/kg'],
      ['Peso corporal', 'Escala el volumen total requerido', 'Usar peso sano de referencia'],
      ['Tipo de dieta', 'Modifica el aporte de humedad en raciones', 'El alimento húmedo reduce ingesta en bebedero'],
      ['Clima y ejercicio', 'Incrementa las pérdidas hídricas', 'Requiere mayor disponibilidad de agua fresca'],
    ],
  },
  {
    type: 'title',
    text: 'Recomendaciones de Gestión de Agua y Cuidados',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Los tutores deben garantizar el acceso libre a agua limpia y renovada diariamente. En el caso de los gatos, que suelen tener un instinto de sed bajo, utilizar fuentes de agua, recipientes anchos y varios puntos de bebida por la casa ayuda a estimular la ingesta voluntaria.',
  },
  {
    type: 'card',
    title: 'Alimentación Seca',
    icon: 'mdi:food-drumstick',
    html: 'Los animales alimentados con pienso seco dependen casi al 100% de la bebida en el cuenco. Mantén el bebedero siempre lleno y limpio en un lugar tranquilo.',
  },
  {
    type: 'card',
    title: 'Alimentación Húmeda',
    icon: 'mdi:food-drumstick',
    html: 'Las latas de comida proporcionan una hidratación excelente. Es normal que beban menos del recipiente, pero se debe mantener agua fresca disponible siempre.',
  },
  {
    type: 'card',
    title: 'Días Calurosos y Ejercicio',
    icon: 'mdi:weather-sunny',
    html: 'Durante episodios de calor o tras el juego intenso, las pérdidas por jadeo aumentan exponencialmente. Proporciona sombra y descansos regulares con acceso a agua fresca.',
  },
  {
    type: 'tip',
    title: 'Atención a las Variaciones Bruscas',
    html: 'La polidipsia (aumento excesivo de sed) o la adipsia (rechazo del agua) son señales de alerta clínica de diabetes, insuficiencia renal o infecciones. Nunca limites el acceso al agua y acude al veterinario ante cualquier duda.',
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
