import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'calculadora-talla-collar-mascotas';
const title = 'Calculadora de talla de collar para mascotas';
const description = 'Mide el cuello, añade espacio de comodidad y encuentra un rango de collar ajustable para comprobarlo a mano.';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: 'Contorno del cuello', unitLabel: 'Mostrar', centimetres: 'Centímetros', inches: 'Pulgadas', allowanceLabel: 'Espacio de comodidad', collarTypeLabel: 'Tipo de collar', flatCollar: 'Plano', breakawayCollar: 'Antiescape', martingaleCollar: 'Martingale', statusTight: 'Añade más espacio', statusBalanced: 'Listo para comprobar', statusLoose: 'Comprueba la seguridad', statusTightDetail: 'Añade más espacio.', statusBalancedDetail: 'Comprueba este rango a mano.', statusLooseDetail: 'Comprueba que no pueda deslizarse.', fitStudyLabel: 'Estudio de ajuste del collar', fitWindowLabel: 'Busca este rango', measuredLabel: 'Cuello medido', roomLabel: 'Espacio de comodidad', checkLabel: 'Comprobación manual', sceneAria: 'Estudio de ajuste con el círculo del cuello y el rango ajustable del collar', neckMarker: 'cuello', easeMarker: 'espacio', rangeMarker: 'rango del collar', minimumMarker: 'inicio', maximumMarker: 'final', checkFlat: 'Cómodo, seguro y sin rozaduras.', checkBreakaway: 'Comprueba el ajuste y el mecanismo de liberación.', checkMartingale: 'El lazo de tensión no debe apretar el cuello.', invalidInput: 'Introduce un contorno de cuello y un espacio válidos.',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: '¿Cómo mido el cuello de mi mascota?', answer: 'Rodea con una cinta flexible el punto donde se apoyará el collar. Mantenla recta y cerca del pelo, sin comprimir la piel ni el manto. Repite la medida si cambia la posición del collar, el pelo o la postura del animal.' },
  { question: '¿Por qué devuelve un rango y no una talla única?', answer: 'Los collares ajustables tienen recorridos diferentes y las etiquetas de talla no son iguales entre fabricantes. La calculadora suma el espacio que eliges y crea un pequeño rango para comparar productos. Después debes probar el collar concreto sobre la mascota.' },
  { question: '¿Cuánto espacio de comodidad debo añadir?', answer: 'No existe una cifra universal. El pelo, la anchura del collar, el material y la actividad cambian el ajuste. Usa el valor como una hipótesis visible y confirma después la comodidad y la seguridad con una revisión manual tranquila.' },
  { question: '¿La fórmula sirve para un collar martingale?', answer: 'La estimación inicial parte del mismo contorno de cuello. La revisión final cambia: el lazo de tensión debe estar limitado y nunca debe estrangular. Sigue las instrucciones del fabricante y pide ayuda si no conoces el mecanismo.' },
  { question: '¿Puedo usar el resultado con un cachorro o gatito?', answer: 'Sí, como una fotografía del ajuste actual. Los animales jóvenes crecen y cambian de pelo, así que debes repetir la medida con frecuencia y no dejar el collar puesto sin supervisión si existe riesgo de que se enganche.' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: 'Mide el cuello', text: 'Mide al animal tranquilo y de pie, justo donde se apoyará el collar. La cinta debe quedar plana y no apretar.' },
  { name: 'Elige el espacio', text: 'Ajusta el espacio entre cuello y collar con el control visible. Los 2 cm iniciales son solo un ejemplo legible.' },
  { name: 'Selecciona el tipo', text: 'Elige plano, antiescape o martingale para que el recordatorio final encaje con el mecanismo elegido.' },
  { name: 'Compara la regulación', text: 'Busca un collar ajustable que cubra todo el rango y termina con una prueba física sobre el animal.' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Convierte una medida en un rango de compra', items: ['Mide donde el collar se colocará de verdad.', 'Haz visible el espacio de comodidad en vez de adivinar por raza.', 'Compara el rango con la regulación real del producto.', 'Termina con una prueba tranquila sobre la mascota.'] },
  { type: 'title', text: 'Qué decisión ayuda a tomar esta calculadora', level: 2 },
  { type: 'paragraph', html: 'Las tablas de tallas confunden cuando una mascota queda entre dos medidas, tiene mucho pelo o todavía está creciendo. Esta herramienta comienza con un dato que puedes verificar: el contorno del cuello en el lugar donde descansará el collar. Después suma el espacio de comodidad que tú eliges. El resultado no intenta adivinar una talla comercial como pequeña, mediana o grande; crea un rango concreto para filtrar las medidas ajustables de los productos.' },
  { type: 'paragraph', html: 'El rango es deliberadamente pequeño porque sirve como punto de partida para comparar. Los collares ajustables no tienen una norma universal y la longitud útil puede no coincidir con el nombre de la talla de una tienda. Un producto entra en la selección cuando su recorrido cubre todo el rango. Aun así, el número no confirma por sí solo que el borde, la hebilla, el pelo o el mecanismo sean adecuados.' },
  { type: 'title', text: 'Cómo medir antes de comprar', level: 2 },
  { type: 'list', items: ['Mide cuando el animal esté tranquilo y de pie con naturalidad.', 'Mantén la cinta nivelada y no comprimas el pelo ni la piel.', 'Repite la medida si el collar se colocará más arriba o más abajo.', 'En animales jóvenes, anota la fecha y vuelve a comprobar el ajuste durante el crecimiento.'] },
  { type: 'paragraph', html: 'El espacio de comodidad es una suposición explícita, no una garantía de seguridad. El valor correcto depende del animal, el manto, la anchura, el material y el uso. La comprobación de los dedos puede orientarte, pero no convierte una cifra en una regla para todos. Si observas rozaduras, tos, dolor, dificultad para respirar, angustia o movimiento limitado, retira el collar y consulta a un profesional.' },
  { type: 'title', text: 'Lee el círculo de ajuste', level: 2 },
  { type: 'table', headers: ['Señal', 'Qué significa', 'Qué hacer después'], rows: [['Cuello medido', 'El contorno antes de añadir espacio.', 'Repite la medida si la cinta estaba torcida o apretada.'], ['Inicio', 'El cuello más el espacio elegido.', 'Úsalo como límite inferior de la regulación.'], ['Final', 'Una ventana corta para comparar productos.', 'Busca una regulación que cubra toda la ventana.'], ['Revisión', 'Un aviso relacionado con tu espacio elegido.', 'Confírmalo físicamente sobre el animal.']] },
  { type: 'title', text: 'El tipo de collar cambia la revisión final', level: 2 },
  { type: 'paragraph', html: 'Un collar plano se revisa por comodidad y seguridad, mientras que uno antiescape o martingale añade una pregunta sobre su mecanismo. Comprueba los bordes, la hebilla, el pelo y cualquier lazo de tensión. El número ayuda a filtrar productos, pero la decisión final depende de la mascota tranquila y de las instrucciones del fabricante.' },
  { type: 'tip', title: 'Haz una comprobación tranquila', html: 'Coloca el collar con la mascota calmada. Debe poder moverse, respirar, comer, beber y girar la cabeza sin roces. Comprueba también que no pueda salir por encima de la cabeza cuando deba permanecer puesto. Revisa el ajuste después del cepillado, el crecimiento, un cambio de peso o un cambio de posición.' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
