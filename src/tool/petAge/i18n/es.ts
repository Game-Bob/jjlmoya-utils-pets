import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'calculadora-edad-mascotas';
const title = 'Calculadora de Edad de Mascotas | Perros y Gatos a Años Humanos';
const description = 'Descubre la edad real de tu perro o gato en años humanos. Olvida la regla de multiplicar por 7. Usa nuestra calculadora basada en ciencia veterinaria actual.';

const ui: PetAgeUI = {
  toolTitle: 'Calculadora de Edad',
  toolSubtitle: '¿Cuántos años humanos tiene realmente tu peludo?',
  petNameLabel: 'Nombre (Opcional)',
  petNamePlaceholder: 'Ej. Toby',
  petTypeDog: 'Perro',
  petTypeCat: 'Gato',
  sizeSmall: 'Peque',
  sizeMedium: 'Med',
  sizeLarge: 'Grande',
  sizeGiant: 'Gigante',
  birthYearLabel: 'Año de nacimiento',
  humanAgeLabel: 'La edad humana de',
  humanAgeUnit: 'años',
  humanAgeYears: 'años',
  lifeStageLabel: 'Etapa Vital',
  milestoneLabel: 'Próximo Hito',
  shareBtn: 'Compartir Resultado',
  shareSuccess: '¡Copiado! Abriendo tarjeta...',
  humanAgeTitle: 'Edad Mágica',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: '¿Es cierto que un año de perro equivale a 7 años humanos?',
    answer: 'No. Esa es una regla simplificada que la ciencia veterinaria moderna ha desmentido. Los perros maduran muy rápido en sus dos primeros años y luego el proceso se ralentiza, variando mucho según el peso y la raza.',
  },
  {
    question: '¿Por qué los perros grandes envejecen antes?',
    answer: 'Los perros de razas grandes tienen un metabolismo y un crecimiento más acelerado, lo que provoca un estrés oxidativo mayor en sus células. Esto hace que su esperanza de vida sea menor que la de perros pequeños.',
  },
  {
    question: '¿Cómo envejecen los gatos comparados con los humanos?',
    answer: 'Un gato termina su infancia al mes de vida, su adolescencia a los 6 meses y alcanza la mayoría de edad (equiv. 24 años humanos) a los 2 años. A partir de ahí, cada año gatuno equivale a unos 4 años humanos.',
  },
  {
    question: '¿A qué edad se considera a una mascota como Senior?',
    answer: 'Generalmente, un perro se considera senior cuando ha cumplido el 75% de su esperanza de vida esperada. En gatos, suele ser a partir de los 7-11 años, dependiendo de su estado de salud.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Elegir tipo de mascota', text: 'Selecciona si tienes un perro o un gato para aplicar la fórmula biológica correcta.' },
  { name: 'Introducir tamaño (solo perros)', text: 'En perros, el peso es fundamental. Indica si es pequeño (hasta 10kg), mediano (10-25kg), grande (25-45kg) o gigante (+45kg).' },
  { name: 'Indicar año de nacimiento', text: 'Introduce el año de nacimiento de tu mascota para calcular su edad cronológica.' },
  { name: 'Analizar etapa vital', text: 'Consulta el resultado para saber si tu mascota está en etapa infantil, joven, adulta o senior en comparación con un humano.' },
];

const bibliography: PetAgeLocaleContent['bibliography'] = [
  { name: 'AAHA Senior Care Guidelines for Dogs and Cats', url: 'https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2023-aaha-senior-care-guidelines-for-dogs-and-cats/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats.pdf' },
  { name: 'AKC: How to Calculate Dog Years to Human Years', url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Lo Que Debes Saber Sobre el Envejecimiento de las Mascotas',
    items: [
      'La regla del "por 7" es un mito: los perros maduran de forma exponencial los primeros 2 años.',
      'Un perro de 1 año equivale a 15 años humanos; uno de 2 años, a 24 años humanos.',
      'Los perros grandes envejecen más rápido que los pequeños tras los 2 años.',
      'Los gatos siguen una curva más lineal: cada año felino equivale a 4 años humanos después de los 2.',
    ],
  },
  { type: 'title', text: 'La Verdad Científica Sobre la Edad de tu Mascota', level: 2 },
  {
    type: 'paragraph',
    html: '¿Sabías que un gato de 2 años ya tiene la madurez de una persona de 24? Descubre por qué la regla de multiplicar por 7 es un mito. El viejo mito de "1 año de perro equivale a 7 años humanos" es una simplificación excesiva. La realidad biológica es mucho más fascinante: las mascotas maduran a una velocidad vertiginosa durante sus dos primeros años, alcanzando la madurez sexual y física muy rápido. Después, esta curva de envejecimiento se aplana y ralentiza.',
  },
  { type: 'title', text: 'La Ciencia tras el Cálculo', level: 3 },
  {
    type: 'paragraph',
    html: 'Esta herramienta utiliza las directrices oficiales de la <strong>Asociación Americana de Hospitales Médicos Veterinarios (AAHA)</strong> y los últimos estudios sobre metilación del ADN canino para ofrecerte la estimación más precisa posible.',
  },
  {
    type: 'table',
    headers: ['Especie', 'Año 1', 'Año 2', 'Año 3+'],
    rows: [
      ['Gato', '15 años humanos', '24 años humanos', '+4 años por año'],
      ['Perro pequeño', '15 años humanos', '24 años humanos', '+5 años por año'],
      ['Perro mediano', '15 años humanos', '24 años humanos', '+6 años por año'],
      ['Perro grande', '15 años humanos', '24 años humanos', '+7 años por año'],
      ['Perro gigante', '15 años humanos', '24 años humanos', '+8 años por año'],
    ],
  },
  { type: 'title', text: 'Etapas de Vida: ¿Qué esperar?', level: 3 },
  {
    type: 'paragraph',
    html: 'Saber la edad real te ayuda a entender las necesidades médicas y emocionales de tu compañero en cada fase.',
  },
  {
    type: 'card',
    title: 'Cachorro / Junior (0 - 1 año)',
    icon: 'mdi:star-shooting',
    html: 'Es la etapa de crecimiento explosivo. Sus huesos crecen, sus dientes cambian y su cerebro absorbe información como una esponja. La vacunación y la socialización temprana son críticas aquí.',
  },
  {
    type: 'card',
    title: 'Adulto (2 - 6 años)',
    icon: 'mdi:shield-check',
    html: 'Plenitud física y mental. Ya tienen su personalidad definida. Es el momento dorado para disfrutar de actividades físicas intensas y mantener su peso ideal para prevenir enfermedades futuras.',
  },
  {
    type: 'card',
    title: 'Senior (+7 años)',
    icon: 'mdi:heart-pulse',
    html: 'Empiezan a aparecer canas en el hocico y duermen más. El metabolismo se ralentiza. A partir de aquí, los chequeos veterinarios deben ser cada 6 meses. Atención a artritis y salud dental.',
  },
  {
    type: 'tip',
    title: 'Consejo Veterinario',
    html: 'La edad calculada es una estimación biológica promedio. Factores como la raza, la genética y el estilo de vida pueden influir en el envejecimiento real de tu mascota. Consulta siempre con tu veterinario.',
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
