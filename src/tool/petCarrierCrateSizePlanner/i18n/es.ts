import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'planificador-dimensiones-transportin-mascotas';
const title = 'Planificador de Dimensiones de Transportín para Mascotas';
const description = 'Calcula las dimensiones internas del transportín para perro o gato a partir de seis medidas corporales, con revisión para viajes en avión y lista de comprobación de confort.';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: 'Mide primero. Compra con total seguridad.',
  journeyHint: 'Selecciona la mascota y el tipo de viaje, introduce las medidas y utiliza la plantilla como punto de partida para comprobar el interior del transportín.',
  unitLegend: 'Unidades de visualización',
  speciesStep: 'Empieza por la mascota',
  metricUnit: 'Métrico',
  imperialUnit: 'Imperial',
  speciesLegend: '¿Quién viaja?',
  speciesDog: 'Perro',
  speciesCat: 'Gato',
  modeLegend: '¿Dónde se realiza el viaje?',
  modeCar: 'Coche',
  modeAir: 'Avión',
  measurementsLegend: 'Mide a tu mascota',
  noseTailLabel: 'Hocico a la base de la cola',
  noseTailHint: 'Mide sin incluir la curvatura de la cola',
  elbowHeightLabel: 'Suelo al codo',
  shoulderWidthLabel: 'Anchura de hombros',
  standingHeightLabel: 'Altura de pie',
  beddingLabel: 'Grosor de la manta o colchoneta',
  weightLabel: 'Peso de la mascota',
  cmUnit: 'cm',
  inchUnit: 'pulg',
  kgUnit: 'kg',
  lbUnit: 'lb',
  snubNosedLabel: 'Raza braquicéfala o chata',
  snubNosedHint: 'El viaje en avión requiere ajustes de la normativa IATA. Consulta con tu veterinario y la aerolínea sobre su aptitud.',
  presetLegend: 'Comienza con un perfil',
  presetCat: 'Gato',
  presetSmallDog: 'Perro pequeño',
  presetMediumDog: 'Perro mediano',
  presetLargeDog: 'Perro grande',
  resultEyebrow: 'Marco de medición recomendado',
  resultTitle: 'Espacio adecuado para girarse',
  resultDimensionLabel: 'Dimensiones internas mínimas de partida',
  lengthLabel: 'Longitud',
  widthLabel: 'Anchura',
  heightLabel: 'Altura',
  petWeightLabel: 'Peso del animal',
  journeyLabel: 'Modo de viaje',
  statusComfort: 'Nivel base de confort',
  statusAirReview: 'Revisión de transporte aéreo',
  statusSnub: 'Ajuste por hocico corto',
  resultDetail: 'Comprueba el interior real del transportín, la puerta, la ventilación, el cierre y la normativa de la compañía antes de comprar o viajar.',
  checklistTitle: 'Las cuatro comprobaciones corporales',
  checklistStand: 'La mascota puede estar de pie y sentada erguida sin que el techo toque su cabeza o orejas.',
  checklistTurn: 'La mascota puede darse la vuelta de forma natural mientras está de pie.',
  checklistLie: 'La mascota puede tumbarse en una posición cómoda sobre su manta.',
  checklistAirline: 'Para viajes en avión, confirma los límites de la aerolínea, ventilación, cierres de seguridad, suelo estanco y etiquetas obligatorias.',
  invalidInput: 'Introduce valores positivos para cada medida corporal y peso de la mascota.',
  noteTitle: 'Utiliza esta herramienta como estudio de espacio, no como aprobación de viaje',
  noteText: 'Las normativas de transporte varían según la aerolínea, el vehículo, la ruta y el animal. Un veterinario debe evaluar la salud y aptitud de la mascota, especialmente en razas chatas o animales con problemas respiratorios o de ansiedad.',
  methodTitle: 'Método de cálculo',
  methodText: 'El cálculo base sigue las pautas de IATA: la longitud equivale al hocico a base de cola más la mitad de la altura del codo, la anchura al doble del ancho de hombros y la altura a la postura de pie más el grosor de la colchoneta. Se aplica un margen del 10% cuando se activa el transporte aéreo para razas chatas.',
  blueprintLabel: 'Esquema medido del transportín que muestra la mascota en el interior y las guías de longitud y altura',
  dimensionInside: 'Dimensiones interiores',
  checkMark: 'OK',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: '¿Cómo debo medir a mi perro o gato para elegir transportín?',
    answer: 'Mide desde la punta del hocico hasta la base de la cola, desde el suelo hasta la articulación del codo, el ancho en el punto más amplio de los hombros y la altura desde el suelo hasta la parte más alta de la cabeza o de las orejas. Añade el grosor de la manta aparte, ya que reduce la altura útil. Mantén a la mascota de pie en posición natural.',
  },
  {
    question: '¿Qué dimensiones calcula esta herramienta?',
    answer: 'Estima la longitud interna como la distancia del hocico a la cola más la mitad de la altura del codo, la anchura como el doble del ancho de hombros y la altura como la altura de pie más el colchón. Son medidas mínimas de partida para un solo animal. Los marcos de las puertas, techos inclinados y bebederos pueden reducir el espacio real.',
  },
  {
    question: '¿El resultado asegura la aprobación de una aerolínea?',
    answer: 'No. El modo aéreo aplica las fórmulas de referencia de la normativa IATA, pero cada aerolínea y ruta pueden exigir requisitos adicionales. Verifica siempre la normativa actual de la compañía, materiales aceptados, ventilación, etiquetas y peso máximo antes de viajar.',
  },
  {
    question: '¿Por qué las razas chatas reciben una dimensión mayor para volar?',
    answer: 'Las directrices internacionales de IATA recomiendan contenedores más espaciosos para razas braquicéfalas debido al riesgo de sobrecalentamiento y estrés respiratorio. La calculadora añade un margen dimensional del 10%, pero debes consultar obligatoriamente con un veterinario antes de planificar el vuelo.',
  },
  {
    question: '¿Debe ser un transportín de coche lo más grande posible?',
    answer: 'No necesariamente. Debe permitir que el animal se ponga de pie, se siente, se gire y se tumbe cómodamente, pero manteniéndose estable en el vehículo. Un transportín demasiado holgado puede restar eficacia a los sistemas de retención y cinturones de seguridad.',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: 'Elige el tipo de viaje', text: 'Selecciona si el trayecto se realizará en coche o en avión para ajustar las comprobaciones necesarias.' },
  { name: 'Toma las seis medidas', text: 'Mide la distancia hocico a cola, altura del codo, anchura de hombros, altura de pie, grosor del colchón y peso del animal mientras esté tranquilo.' },
  { name: 'Consulta el esquema interior', text: 'Utiliza la longitud, anchura y altura calculadas como punto de partida mínimo para comparar modelos comerciales.' },
  { name: 'Verifica la homologación final', text: 'Antes de comprar, comprueba la estructura del transportín, cierres, ventilación y la normativa vigente con la aerolínea o veterinario.' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Guía para elegir el transportín adecuado según la anatomía de tu mascota',
    items: [
      'Mide el cuerpo de la mascota en lugar de guiarte únicamente por su peso corporal.',
      'Utiliza las dimensiones internas mínimas como referencia para comparar modelos comerciales.',
      'Revisa siempre los cierres de seguridad, la ventilación y la estructura del contenedor.',
      'El transporte aéreo requiere una preparación específica y atención prioritaria a las razas chatas.',
    ],
  },
  { type: 'title', text: 'Cómo planificar las dimensiones del transportín', level: 2 },
  {
    type: 'paragraph',
    html: 'Un transportín adecuado debe actuar como una habitación segura y confortable que permita cuatro movimientos fundamentales a tu perro o gato: ponerse de pie sin encoger la cabeza, sentarse erguido de forma natural, girarse sobre su propio eje sin dificultad y tumbarse plácidamente en una posición relajada. Esta calculadora traduce la anatomía concreta de tu mascota en una longitud, anchura y altura interiores recomendadas de partida. Resulta especialmente útil cuando los fabricantes solo proporcionan las dimensiones exteriores del producto o cuando la caja de transporte presenta formas redondeadas, techos inclinados o esquinas achaflanadas que reducen el volumen real aprovechable.',
  },
  {
    type: 'paragraph',
    html: 'El resultado obtenido representa el espacio útil interior mínimo que necesita el animal para no sufrir estrés ni lesiones posturales. Compara siempre estos datos con la cota interior real medida en los puntos más estrechos y bajos del habitáculo. Elementos esenciales como colchonetas o mantas gruesas, bebederos acoplados a la puerta, o el propio estrechamiento de las paredes laterales pueden restar centímetros valiosos. Si un modelo comercial cumple justo con una de las medidas pero queda justo en las demás, es sumamente aconsejable optar por la talla superior para favorecer el bienestar durante todo el trayecto.',
  },
  { type: 'title', text: 'Importancia de cada medida corporal', level: 2 },
  {
    type: 'table',
    headers: ['Medida corporal', 'Por qué es importante para la mascota', 'Aplicación en el cálculo del transportín'],
    rows: [
      ['Hocico a base de cola', 'Define la longitud básica del cuerpo sin depender de la postura al dormir.', 'Longitud del habitáculo'],
      ['Suelo al codo', 'Aporta margen de giro y movilidad a las extremidades delanteras.', 'Longitud del habitáculo'],
      ['Anchura de hombros', 'Aporta holgura lateral adecuada en el punto corporal más ancho.', 'Anchura del habitáculo'],
      ['Altura de pie', 'Evita que el techo o la cubierta compriman la cabeza o las orejas.', 'Altura del habitáculo'],
      ['Grosor del colchón', 'Mantiene la altura útil real tras colocar el lecho acolchado.', 'Altura del habitáculo'],
      ['Peso corporal', 'Permite comprobar la resistencia máxima y homologación del contenedor.', 'Revisión de carga'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Las fórmulas aplicadas en este planificador siguen las directrices oficiales de transporte de animales vivos de la Asociación de Transporte Aéreo Internacional (IATA) y la experiencia veterinaria. La longitud interna se calcula sumando la distancia desde la punta del hocico hasta la base de la cola más la mitad de la altura del suelo al codo. La anchura interna equivale al doble del ancho de hombros para permitir giros sin presión lateral. Por último, la altura interna corresponde a la altura total de pie desde el suelo hasta la parte superior de la cabeza o punta de las orejas, más el grosor de la colchoneta elegida.',
  },
  { type: 'title', text: 'Consideraciones para el viaje en avión y razas chatas', level: 2 },
  {
    type: 'paragraph',
    html: 'Es fundamental recordar que un cálculo de medidas no sustituye la aprobación oficial de una compañía aérea. Factores como el modelo de avión, la temporada del año, la ventilación del contenedor en los cuatro costados, el tipo de cierre metálico de la puerta y la estanqueidad del suelo son totalmente determinantes. En el caso de razas braquicéfalas o chatas (como bulldogs, pugs, bóxers o gatos persas), las normativas internacionales exigen mayor espacio y aireación debido al riesgo de sobrecalentamiento y distrés respiratorio. Consulta siempre a un veterinario y a la aerolínea con suficiente antelación.',
  },
  {
    type: 'tip',
    title: 'Comprobación práctica del espacio en casa',
    html: 'Antes de realizar un viaje largo, coloca a la mascota en el transportín en un entorno tranquilo y libre de estímulos estresantes. Observa detenidamente sus movimientos corporales durante varios minutos. Si notas que debe encoger la cabeza, doblar la espalda o empujar las paredes para girarse, elige una talla superior y consulta con tu veterinario si tienes dudas sobre su nivel de confort.',
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
