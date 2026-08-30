import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';
import type { PetGestationUI } from '../ui';

const slug = 'calculadora-gestacion-mascotas';
const title = 'Calculadora de gestación de mascotas';
const description = 'Calcula la fecha estimada de parto de perro, gato, conejo o hurón a partir de la fecha de monta, con un rango documentado y orientación veterinaria.';

const ui: PetGestationUI = {
  journeyHint: 'Selecciona la especie, introduce la fecha de monta y observa el compás para conocer la ventana de parto.',
  instantHint: 'Cambia cualquier ajuste y el calendario de anidación se actualizará al instante.',
  speciesLegend: '¿Qué tipo de mascota es?',
  speciesDog: 'Perro',
  speciesCat: 'Gato',
  speciesRabbit: 'Conejo',
  speciesFerret: 'Hurón',
  speciesDogMeta: 'De 58 a 72 días',
  speciesCatMeta: 'De 64 a 66 días',
  speciesRabbitMeta: 'Unos 31 días',
  speciesFerretMeta: 'Unos 42 días',
  matingDateLabel: 'Fecha de monta',
  matingDateHint: 'Utiliza la primera fecha de monta conocida. La fecha de cruce es una estimación orientativa.',
  presetToday: 'Hoy',
  presetWeekAgo: 'Hace 7 días',
  presetFortnightAgo: 'Hace 14 días',
  resultEyebrow: 'El compás de anidación indica',
  dueDateLabel: 'Fecha típica de parto',
  windowLabel: 'Ventana estimada',
  remainingLabel: 'Días hasta fecha típica',
  elapsedLabel: 'Días transcurridos',
  daysLabel: 'días',
  dayLabel: 'día',
  statusFuture: 'La fecha introducida es futura',
  statusWaiting: 'En periodo de gestación',
  statusWindow: 'La ventana de parto está abierta',
  statusLate: 'Superado el rango exterior estimado',
  resultEmpty: 'El compás de parto aparecerá aquí.',
  sampleLabel: 'Ejemplo ilustrativo',
  sceneMating: 'MONTA',
  sceneToday: 'Línea de tiempo actual',
  sceneDue: 'VENTANA DE PARTO',
  noteTitle: 'Nota importante de salud',
  noteText: 'La fecha de monta no siempre coincide con la ovulación o la concepción. Consulta con un veterinario para confirmar la gestación, realizar seguimiento prenatal o ante cualquier síntoma de dolor, flujo o retraso.',
  sourceTitle: 'Metodología',
  sourceText: 'El rango canino contempla de 58 a 72 días desde la monta, mientras que los perfiles de gato, conejo y hurón utilizan los periodos aproximados documentados por el Manual Veterinario MSD.',
  invalidDate: 'Introduce una fecha de monta válida para calcular el periodo.',
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    question: '¿Qué precisión tiene la fecha estimada de parto según la fecha de monta?',
    answer: 'Es una estimación orientativa. En perras, la fecha de monta puede diferir de la ovulación y la concepción porque el esperma mantiene la viabilidad en el aparato reproductor durante varios días. Por ello, la calculadora muestra un rango en lugar de un único día exacto. El veterinario puede ajustar el cálculo mediante ecografía o citología.',
  },
  {
    question: '¿Cuánto dura la gestación de una perra?',
    answer: 'El Manual Veterinario MSD señala un periodo de 58 a 72 días desde la primera monta cuando no se conoce la fecha exacta de ovulación. Cuando se conoce la ovulación, el intervalo es más estrecho, habitualmente entre 62 y 64 días. La raza y el tamaño de la camada influyen en la fecha real.',
  },
  {
    question: '¿Cuánto dura la gestación de una gata?',
    answer: 'La gestación felina dura habitualmente unos 65 días, situándose el parto entre los 64 y 66 días tras el pico de hormona luteinizante provocado por el acoplamiento. Como se suele registrar la monta y no el pico hormonal, el cálculo sirve como guía de planificación.',
  },
  {
    question: '¿Por qué se incluyen conejos y hurones en la calculadora?',
    answer: 'Los conejos y hurones son animales de compañía habituales con periodos de gestación breves y bien documentados. El Manual Veterinario MSD indica unos 31 días para conejos y 42 días para hurones. Incluir estas especies ofrece una herramienta integral para pequeños animales.',
  },
  {
    question: '¿Cuándo debo acudir al veterinario?',
    answer: 'Debes contactar con un veterinario si el embarazo supera el rango esperado, si el parto se prolonga con esfuerzo infructuoso, o si observas sangrado abundante, flujo con mal olor, debilidad o dolor agudo. La evaluación veterinaria prima sobre cualquier estimación de calendario.',
  },
];

const howTo: PetGestationLocaleContent['howTo'] = [
  { name: 'Selecciona la especie', text: 'Elige perro, gato, conejo o hurón para aplicar el perfil de gestación documentado correspondiente.' },
  { name: 'Introduce la fecha de monta', text: 'Indica la primera o mejor fecha de monta conocida de la hembra.' },
  { name: 'Consulta el compás', text: 'Revisa la fecha típica de parto, el rango esperado de días y el tiempo transcurrido.' },
  { name: 'Planifica con responsabilidad', text: 'Utiliza el resultado para preparar el paridero y resolver dudas con tu centro veterinario.' },
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Fechas de gestación de mascotas de un vistazo",
    "items": [
      "Introduce la fecha de monta y elige la especie para estimar la fecha aproximada de parto.",
      "Los perros tienen un rango más amplio porque monta, ovulación y concepción no siempre ocurren el mismo día.",
      "Gatos, conejos y hurones emplean los periodos de referencia descritos en el Manual Veterinario MSD.",
      "El resultado es una herramienta de planificación y no sustituye el diagnóstico veterinario."
    ]
  },
  {
    "type": "title",
    "text": "Cómo funciona la calculadora de gestación para mascotas",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Esta calculadora de gestación de mascotas transforma la fecha conocida de monta en un calendario estimativo. Suma la duración típica de la gestación de cada especie y presenta tanto una fecha probable como un intervalo esperado de parto. Esta distinción es fundamental: el día de la monta no siempre coincide con la fertilización, y la biología reproductiva canina difiere notablemente de la felina o de la de los pequeños mamíferos. El resultado está diseñado para ayudar a los propietarios a preparar suministros, organizar preguntas para la clínica y detectar cuándo una estimación merece atención profesional."
  },
  {
    "type": "paragraph",
    "html": "El compás visual situa la fecha de monta al inicio de la línea temporal. El anillo circular avanza a medida que transcurren los días, mostrando en el centro el tiempo transcurrido. Cuando se abre la ventana estimada, el estado del indicador cambia para facilitar la lectura inmediata sin necesidad de interpretar tablas complejas. Si se supera el límite exterior estimado, el resultado sirve como recordatorio para contactar con un veterinario en lugar de asumir una complicación. Un calendario puede orientar una decisión, pero nunca evaluará la salud del animal."
  },
  {
    "type": "title",
    "text": "Perfiles de gestación documentados",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Especie",
      "Periodo típico",
      "Estimación desde la monta"
    ],
    "rows": [
      [
        "Perro",
        "Unos 63 días",
        "De 58 a 72 días"
      ],
      [
        "Gato",
        "Unos 65 días",
        "De 64 a 66 días"
      ],
      [
        "Conejo",
        "Unos 31 días",
        "31 días"
      ],
      [
        "Hurón",
        "Unos 42 días",
        "42 días"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "El perfil canino requiere especial atención. La literatura veterinaria indica que la gestación canina varía según el hito biológico considerado. Por ello, mostrar un rango amplio desde el cruce es más riguroso que fijar un único día. En gatas, conejos y hurones, los datos provienen de referencias veterinarias estándar para orientar la preparación del parto."
  },
  {
    "type": "title",
    "text": "Qué preparar antes de la ventana estimada",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Aprovecha la estimación para organizar el espacio de anidación, verificar el teléfono de urgencias veterinarias y conseguir los suministros necesarios. Mantén a la madre en un entorno tranquilo y sigue las pautas profesionales sobre nutrición y desparasitación durante el periodo gestacional."
  },
  {
    "type": "tip",
    "title": "La salud del animal es lo primero",
    "html": "Consulta de inmediato a un profesional ante cualquier signo de malestar, distocia, secreción anómala o retraso significativo respecto al límite exterior de la ventana estimada."
  }
];

const schemas: PetGestationLocaleContent['schemas'] = [
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

export const content: PetGestationLocaleContent = {
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
