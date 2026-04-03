import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'mascotas',
  title: 'Herramientas para Mascotas',
  description: 'Calculadoras y utilidades gratuitas para propietarios de mascotas. Descubre la edad real de tu perro o gato y calcula su ración diaria con precisión veterinaria.',
  seo: [
    { type: 'title', text: 'Nutrición y Bienestar Animal: Ciencia al Servicio de tu Mascota', level: 2 },
    {
      type: 'paragraph',
      html: 'Cuidar a un perro, un gato o un conejo es mucho más que darles comida y cariño. Implica entender su biología, su ritmo de envejecimiento y sus necesidades energéticas concretas. En esta sección ofrecemos <strong>calculadoras veterinarias gratuitas</strong> que aplican fórmulas científicas validadas para ayudarte a tomar mejores decisiones sobre la salud de tu compañero.',
    },
    {
      type: 'paragraph',
      html: 'Desde la curiosidad de saber cuántos años humanos tiene realmente tu perro hasta el cálculo preciso de la ración diaria basado en el RER (Resting Energy Requirement), nuestras herramientas transforman conceptos veterinarios complejos en respuestas claras y accionables para el propietario responsable.',
    },
    { type: 'title', text: 'Edad Real de tu Mascota: Más Allá del Mito del "Por 7"', level: 2 },
    {
      type: 'paragraph',
      html: 'La popular creencia de que un año de perro equivale a siete años humanos lleva décadas siendo desmentida por la veterinaria moderna. La realidad es que los perros maduran de forma exponencial en sus primeros dos años de vida, alcanzando la equivalencia de 15 años humanos a los 12 meses y de 24 años a los 24 meses. Después, el ritmo se ralentiza y depende enormemente del <strong>tamaño del animal</strong>: un perro gigante de más de 45 kg puede envejecer hasta un 60% más rápido que uno de talla pequeña.',
    },
    {
      type: 'paragraph',
      html: 'Los gatos, por su parte, siguen una curva de envejecimiento más lineal: tras los dos primeros años de desarrollo acelerado, cada año felino equivale aproximadamente a cuatro años humanos. Conocer la etapa vital de tu mascota no es solo curiosidad, es información médica relevante: determina cuándo programar chequeos geriátricos, cuándo ajustar la dieta y qué señales de salud debes vigilar.',
    },
    { type: 'title', text: 'Nutrición de Precisión: Calcula la Ración Diaria Exacta', level: 2 },
    {
      type: 'paragraph',
      html: 'La obesidad afecta a más del 50% de las mascotas domésticas en países desarrollados y es la causa directa de problemas articulares, cardiovasculares y una esperanza de vida reducida. El problema no es la falta de amor de los propietarios, sino la <strong>ausencia de referencias calóricas precisas</strong>. Nuestra calculadora de ración diaria aplica la fórmula veterinaria estándar RER (70 × peso^0.75) y la multiplica por el factor DER correspondiente a la especie, etapa vital y nivel de actividad de tu animal.',
    },
    {
      type: 'list',
      items: [
        '<strong>Calculadora de Edad de Mascotas:</strong> Convierte años cronológicos a equivalente humano según especie y tamaño, con etapa vital y próximo hito veterinario.',
        '<strong>Calculadora de Ración Diaria:</strong> Calcula gramos de pienso seco y húmedo basándose en RER y DER para perros, gatos y conejos.',
      ],
    },
    {
      type: 'tip',
      title: 'Consejo Veterinario',
      html: 'Estas herramientas ofrecen referencias científicas de partida, pero cada animal es único. Consulta siempre con tu veterinario para ajustar la dieta y el plan de salud a las necesidades individuales de tu mascota.',
    },
    {
      type: 'paragraph',
      html: 'Invertir en conocimiento sobre la biología de tu mascota es la forma más efectiva de medicina preventiva. Un peso saludable y una atención veterinaria en el momento correcto pueden añadir años de calidad de vida a tu compañero fiel.',
    },
  ],
};
