import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'buscador-alimentos-toxicos-perros-gatos';
const title = 'Buscador de alimentos tóxicos para perros y gatos';
const description = 'Comprueba alimentos peligrosos para perros y gatos, conoce sus síntomas de alerta y descubre cuándo contactar con un veterinario o urgencias.';

const ui: PetToxicityUI = {
  "journeyHint": "Selecciona el animal, abre el atlas de alimentos y consulta la advertencia específica según la especie.",
  "speciesLabel": "Especie",
  "speciesDog": "Perro",
  "speciesCat": "Gato",
  "speciesDogMeta": "Perfil canino",
  "speciesCatMeta": "Perfil felino",
  "foodLabel": "Alimento o ingrediente",
  "foodPlaceholder": "Selecciona un alimento",
  "foodMenuHint": "La lista cambia según la especie porque el riesgo es específico para cada animal.",
  "resultEyebrow": "El atlas de alimentos indica",
  "resultEmpty": "Selecciona un alimento para abrir su ficha de seguridad.",
  "sceneLabel": "Mapa de exposición",
  "sceneReady": "Selecciona un alimento",
  "sceneSelected": "Ficha específica abierta",
  "riskCritical": "Atención urgente",
  "riskHigh": "Riesgo alto",
  "riskCaution": "Precaución",
  "riskUnknown": "Datos insuficientes",
  "riskLabel": "Nivel de riesgo",
  "whyLabel": "Por qué es peligroso",
  "signsLabel": "Síntomas a observar",
  "actionLabel": "Qué debes hacer",
  "callVetLabel": "El paso más seguro es pedir opinión profesional.",
  "callVetText": "Una calculadora no puede estimar dosis tóxicas ni sustituir un examen veterinario.",
  "sourceLabel": "Evidencia utilizada",
  "sourceText": "Los perfiles se basan en guías de toxicología veterinaria de ASPCA, FDA y el Manual Veterinario MSD.",
  "emergencyTitle": "¿Tu mascota ha ingerido algo peligroso?",
  "emergencyText": "Llama inmediatamente a tu veterinario, clínica de urgencias o servicio toxicológico. Guarda el envase, ingredientes y cantidad estimada. No provoques el vómito sin indicación médica.",
  "openMenu": "Abrir opciones",
  "closeMenu": "Cerrar opciones"
};

const faq: PetToxicityLocaleContent['faq'] = [
  {
    "question": "¿Esta herramienta determina si mi mascota está fuera de peligro?",
    "answer": "No. Es una guía educativa sobre peligros alimentarios, no un diagnóstico ni un calculador de dosis. El riesgo depende de la especie, producto, cantidad, peso y tiempo transcurrido. Ante la duda, consulta siempre con un veterinario."
  },
  {
    "question": "¿Qué alimentos son especialmente peligrosos para los perros?",
    "answer": "Entre los más graves destacan el xilitol, chocolate y cafeína, uvas y pasas, cebolla y ajo, alcohol, nueces de macadamia y masa madre cruda. Conservar el envase ayuda al veterinario a valorar el caso."
  },
  {
    "question": "¿Son peligrosos la cebolla y el ajo para los gatos?",
    "answer": "Sí. Los gatos son especialmente sensibles a la destrucción de glóbulos rojos por plantas del género Allium (cebollas, ajos, puerros). Las presentaciones en polvo o deshidratadas también resultan peligrosas."
  },
  {
    "question": "¿Por qué el xilitol muestra una alerta diferente en perros y gatos?",
    "answer": "En perros, el xilitol causa una bajada rápida y grave de azúcar en sangre. En gatos, la evidencia de toxicidad severa no es tan clara según la FDA, pero ello no garantiza la seguridad del producto."
  },
  {
    "question": "¿Qué hago si mi mascota ha ingerido un alimento no listado?",
    "answer": "Que un alimento no aparezca no significa que sea seguro. Guarda el producto, anota la cantidad y contacta con un veterinario o servicio toxicológico animal."
  }
];

const howTo: PetToxicityLocaleContent['howTo'] = [
  {
    "name": "Selecciona la especie",
    "text": "Elige Perro o Gato para cargar la información y advertencias específicas de esa especie."
  },
  {
    "name": "Elige el alimento",
    "text": "Despliega la lista y selecciona el producto más parecido. Presta atención a ingredientes concentrados o en polvo."
  },
  {
    "name": "Lee la ficha de seguridad",
    "text": "Revisa el nivel de riesgo, los síntomas probables y la recomendación de actuación."
  },
  {
    "name": "Contacta con un profesional",
    "text": "Si ha habido ingesta real, consulta con un veterinario facilitando los detalles del alimento y del animal."
  }
];

const seo: PetToxicityLocaleContent['seo'] = [
  {
    type: 'summary',
    title: "Comprobación rápida de toxicidad alimentaria en perros y gatos",
    items: [
      "Selecciona primero el animal, ya que el mismo alimento puede provocar riesgos distintos en perros y gatos.",
      "Consulta las fichas para comprender la gravedad, síntomas y nivel de urgencia de la situación.",
      "La ingesta de xilitol en perros debe tratarse siempre como una urgencia veterinaria prioritaria.",
      "Ante una exposición real, contacta de inmediato con un servicio veterinario acreditado."
],
  },
  {
    type: 'title',
    text: "Cómo usar este buscador de alimentos tóxicos de forma responsable",
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Esta herramienta está diseñada para ofrecer claridad inmediata tras una posible ingesta indebida por parte de un perro o un gato. Permite consultar de forma rápida la peligrosidad de un ingrediente y preparar la información necesaria antes de llamar a la clínica veterinaria. La interfaz separa con precisión el motivo de la peligrosidad de los síntomas observables y de las acciones recomendadas para orientar al propietario de la mascota sin generar pánico injustificado.",
  },
  {
    type: 'paragraph',
    html: "Diferenciar entre perros y gatos es vital en la evaluación de riesgos alimentarios. El xilitol desencadena hipoglucemias severas y daños hepáticos en perros, mientras que las plantas de la familia de la cebolla y el ajo son especialmente dañinas para el sistema sanguíneo de los gatos al destruir sus glóbulos rojos. La selección previa de la especie garantiza que las recomendaciones y advertencias mostradas se adapten rigurosamente al perfil metabólico del animal.",
  },
  {
    type: 'title',
    text: "Principales alimentos peligrosos y factores clave de evaluación",
    level: 2,
  },
  {
    type: 'table',
    headers: ["Alimento o ingrediente","Riesgo principal","Detalles importantes de evaluación"],
    rows: [["Chocolate y cafeína","Alteraciones cardíacas y del sistema nervioso","La concentración de cacao, el tipo de producto y el peso del animal son determinantes."],["Xylitol","Bajada drástica de azúcar en sangre en perros","Presente en chicles sin azúcar, dulces, repostería y algunas mantequillas de frutos secos."],["Uvas y pasas","Daño renal agudo impredecible en perros","Sensibilidad individual variable; ninguna cantidad consumida debe considerarse completamente segura."],["Cebolla y ajo","Anemia por daño directo en glóbulos rojos","Formatos en polvo, deshidratados o concentrados en sopas aumentan exponencialmente el riesgo."],["Masa de levadura cruda","Expansión estomacal y toxicidad por alcohol","La fermentación dentro del aparato digestivo genera presión severa y intoxicación etílica."]],
  },
  {
    type: 'paragraph',
    html: "Además de la toxicidad química clásica, existen riesgos físicos muy importantes que no deben pasarse por alto. Los huesos cocinados, fragmentos de juguetes o frutos secos enteros pueden provocar obstrucciones intestinales graves o perforaciones digestivas. Del mismo modo, las comidas con alto contenido en grasas pueden desencadenar episodios de pancreatitis aguda de evolución muy dolorosa.",
  },
  {
    type: 'title',
    text: "Pasos recomendados a seguir tras una ingesta sospechosa",
    level: 2,
  },
  {
    type: 'list',
    items: [
      "Retira de inmediato los restos del alimento y conserva el envase o la etiqueta del producto.",
      "Anota la especie, el peso aproximado de la mascota, el alimento exacto, la cantidad estimada y la hora de la ingesta.",
      "Llama urgentemente a tu veterinario habitual, a la clínica de urgencias más cercana o a un servicio de toxicología.",
      "No intentes provocar el vómito ni administres remedios caseros sin la indicación expresa de un veterinario.",
      "Acude inmediatamente al centro veterinario ante signos de convulsiones, colapso, dificultad para respirar o palidez de mucosas."
],
  },
  {
    type: 'tip',
    title: "La salud y seguridad de tu mascota son lo primero",
    html: "Algunos síntomas tóxicos tardan varias horas o incluso días en manifestarse. No esperes a que el animal empeore manifiestamente para solicitar ayuda profesional cualificada.",
  },
];

const schemas: PetToxicityLocaleContent['schemas'] = [
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

export const content: PetToxicityLocaleContent = {
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
