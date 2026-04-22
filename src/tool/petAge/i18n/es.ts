import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'calculadora-edad-mascotas';
const title = 'Calculadora de Edad para Mascotas';
const description = 'Descubre la edad real de tu perro o gato en años humanos. Olvida la "regla del 7". Usa nuestra calculadora basada en la ciencia veterinaria actual para obtener resultados precisos.';

const ui: PetAgeUI = {
  toolTitle: 'Calculadora de Edad',
  toolSubtitle: '¿Cuántos años humanos tiene realmente tu amigo peludo?',
  petNameLabel: 'Nombre (Opcional)',
  petNamePlaceholder: 'ej. Buddy',
  petTypeDog: 'Perro',
  petTypeCat: 'Gato',
  sizeSmall: 'Pequeño',
  sizeMedium: 'Mediano',
  sizeLarge: 'Grande',
  sizeGiant: 'Gigante',
  birthYearLabel: 'Año de nacimiento',
  humanAgeLabel: 'La edad humana de',
  humanAgeUnit: 'años',
  humanAgeYears: 'años',
  lifeStageLabel: 'Etapa de vida',
  milestoneLabel: 'Próximo hito',
  shareBtn: 'Compartir resultado',
  shareSuccess: '¡Copiado! Abriendo tarjeta...',
  humanAgeTitle: 'Edad Mágica',
  recalculateBtn: 'Calcular otra edad',
  realAgeLabel: 'Edad Real',
  defaultPetName: 'Tu mascota',
  stageDogPuppy: 'Cachorro Juguetón',
  stageDogTeen: 'Adolescente Rebelde',
  stageDogAdult: 'Adulto en Forma',
  stageDogMature: 'Madurez Distinguida',
  stageDogSenior: 'Sabiduría Senior',
  stageCatKitten: 'Curiosidad Infantil',
  stageCatYouth: 'Juventud Felina',
  stageCatReign: 'Reinado Doméstico',
  stageCatVeteran: 'Veterano Consentido',
  stageCatVenerable: 'Venerable Anciano',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: '¿Es cierto que un año de perro equivale a siete años humanos?',
    answer: 'No. Es una regla simplificada que la ciencia veterinaria moderna ha desmentido. Los perros maduran muy rápido los primeros dos años, y el proceso se ralentiza después, variando según el peso y la raza. Estudios recientes sobre metilación del ADN han permitido desarrollar fórmulas de envejecimiento mucho más precisas que reflejan el desarrollo biológico real de los animales a lo largo de su vida.',
  },
  {
    question: '¿Por qué los perros grandes envejecen más rápido?',
    answer: 'Las razas de perros grandes tienen un metabolismo y crecimiento más acelerados, lo que provoca un estrés oxidativo mayor en sus células. Esto significa que su esperanza de vida es más corta que la de los perros pequeños. Los marcadores biológicos muestran que las razas gigantes pueden alcanzar el estatus de senior a los 5 años, mientras que las razas pequeñas podrían no alcanzarlo hasta los 10 u 11 años.',
  },
  {
    question: '¿Cómo envejecen los gatos en comparación con los humanos?',
    answer: 'Un gato termina su infancia al mes, su adolescencia a los 6 meses y alcanza la edad adulta (24 años humanos) a los 2 años. Después, cada año de vida de un gato equivale a unos 4 años humanos. Este modelo es bastante constante en las diferentes razas de gatos, a diferencia de la gran variación observada en los perros.',
  },
  {
    question: '¿A qué edad se considera a una mascota como Senior?',
    answer: 'Generalmente un perro es senior cuando alcanza el 75% de su esperanza de vida prevista. Para los gatos suele ser de los 7 a 11 años, según su salud. Los exámenes veterinarios regulares son críticos en esta fase para vigilar problemas comunes como enfermedades renales o el declive cognitivo.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Selecciona la especie', text: 'Elige si tienes un perro o gato para aplicar la fórmula biológica correcta según su tasa metabólica.' },
  { name: 'Indica el tamaño', text: 'Para perros, el peso es clave para determinar la edad biológica. Indica si es pequeño (hasta 10kg), mediano (10-25kg), grande (25-45kg) o gigante (más de 45kg).' },
  { name: 'Introduce el año de nacimiento', text: 'Entra el año de tu mascota para calcular su edad cronológica. Nuestro sistema procesará esta información frente a las curvas de envejecimiento establecidas.' },
  { name: 'Analiza su etapa de vida', text: 'Revisa el resultado para conocer si tu mascota está en etapa de cachorro, joven, adulto o senior frente a un humano y comprende sus necesidades actuales.' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Lo que debes saber sobre el envejecimiento animal',
    items: [
      'La "regla del 7" es un mito: los perros maduran de forma exponencial los 2 primeros años.',
      'Un perro de 1 año equivale a 15 años humanos; un perro de 2 años equivale a 24 años humanos.',
      'Los perros grandes envejecen más rápido que los pequeños tras los 2 años.',
      'Los gatos siguen una curva más lineal: cada año de gato equivale a 4 humanos tras los 2 años.',
      'La edad biológica es mejor predictor de necesidades de salud que la edad cronológica.',
      'Chequeos regulares ayudan a detectar problemas antes de que sean graves.',
    ],
  },
  { type: 'title', text: 'La Verdad Científica sobre la Edad de tu Mascota', level: 2 },
  {
    type: 'paragraph',
    html: '¿Sabías que un gato de 2 años ya tiene la madurez de una persona de 24 años? Descubre por qué la regla de multiplicar por 7 es un mito y cómo entender la realidad biológica puede mejorar los cuidados de tu mascota. El viejo mito de que "1 año de perro equivale a 7 años humanos" es una simplificación que no tiene en cuenta los cambios de desarrollo masivos al inicio de la vida. Los animales maduran a gran velocidad los primeros dos años de vida, alcanzando la madurez física muy rápido. Después, esta curva de envejecimiento se aplana y ralentiza.',
  },
  {
    type: 'paragraph',
    html: 'La investigación moderna, incluyendo estudios sobre relojes epigenéticos y metilación del ADN, nos ha dado una visión matizada. Estos estudios muestran que los cambios químicos en el ADN de un perro cambian a ritmos distintos. En etapa de cachorro los cambios son rápidos, mientras que en la edad adulta los cambios metabólicos son más graduales. Esta comprensión ha permitido a los científicos desarrollar fórmulas que son mucho más precisas que cualquier multiplicación lineal.',
  },
  { type: 'title', text: 'La Ciencia detrás del Cálculo', level: 3 },
  {
    type: 'paragraph',
    html: 'Esta herramienta usa las pautas oficiales de la <strong>American Animal Hospital Association (AAHA)</strong> y los últimos estudios sobre metilación de ADN en perros para darte la estimación más precisa posible. Al combinar datos específicos de tamaño con marcadores biológicos, creamos un modelo completo del desarrollo del animal. Este enfoque reconoce que un Chihuahua y un Gran Danés tienen perfiles de envejecimiento muy distintos desde su nacimiento.',
  },
  {
    type: 'paragraph',
    html: 'Entender estas diferencias es crucial para los dueños responsables. Esto permite ajustar las intervenciones veterinarias, como el cambio a una dieta senior o el inicio de suplementos para articulaciones. Nuestro calculador une la ciencia compleja con el conocimiento práctico diario para los amantes de los animales de todo el mundo.',
  },
  {
    type: 'table',
    headers: ['Especie', 'Año 1', 'Año 2', 'Año 3 y más'],
    rows: [
      ['Gato', '15 años humanos', '24 años humanos', '+4 años por año'],
      ['Perro pequeño', '15 años humanos', '24 años humanos', '+5 años por año'],
      ['Perro mediano', '15 años humanos', '24 años humanos', '+6 años por año'],
      ['Perro grande', '15 años humanos', '24 años humanos', '+7 años por año'],
      ['Perro gigante', '15 años humanos', '24 años humanos', '+8 años por año'],
    ],
  },
  { type: 'title', text: 'Etapas de la Vida y Preparación', level: 3 },
  {
    type: 'paragraph',
    html: 'Conocer la edad real de tu mascota te ayuda a entender sus necesidades médicas en cada fase. Igual que los humanos pasamos por etapas, perros y gatos tienen cambios fisiológicos específicos al crecer. Ser consciente de estas transiciones te permite dar el apoyo correcto en el momento adecuado, ya sean juegos para un adolescente o cuidados para un senior.',
  },
  {
    type: 'card',
    title: 'Cachorro o Junior',
    icon: 'mdi:star-shooting',
    html: 'Es la etapa de crecimiento explosivo. Sus huesos crecen a gran ritmo y sus dientes de leche caen para dejar sitio a los definitivos. La vacunación y socialización temprana son críticas aquí para asegurar que sean adultos equilibrados. Es también el mejor momento para crear buenos hábitos para toda la vida.',
  },
  {
    type: 'card',
    title: 'Adulto',
    icon: 'mdi:shield-check',
    html: 'Es el pico de forma física para la mayoría de animales. Su personalidad está definida y suelen estar en su momento más activo. Es el momento ideal para disfrutar de actividad intensa y mantener un peso ideal para prevenir futuras enfermedades. El ejercicio constante y el alimento equilibrado son los pilares de la salud en estos años.',
  },
  {
    type: 'card',
    title: 'Senior',
    icon: 'mdi:heart-pulse',
    html: 'Empiezan las canas en el morro y el animal tiende a dormir más. Su metabolismo se ralentiza y pueden mostrar menos interés por el juego. Desde aquí, los chequeos deberían ser cada seis meses. Vigila signos de artritis y cualquier cambio de conducta. La detección temprana de males senior es la mejor vía para asegurar que su calidad de vida siga siendo alta.',
  },
  {
    type: 'tip',
    title: 'Consejo Veterinario',
    html: 'La edad calculada es una estimación biológica media. Factores como raza, genética y estilo de vida pueden impactar en el envejecimiento real de tu mascota. Para consejos personalizados y evaluación de salud, consulta a tu veterinario.',
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
  faqTitle: 'Preguntas Frecuentes',
  faq: 'Bibliografía',
  bibliography,
  howTo,
  schemas,
};
