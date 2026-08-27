import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'calculadora-necessidade-agua-caes-gatos';
const title = 'Calculadora de necessidade diária de água para cães e gatos';
const description = 'Calcule a necessidade diária de água do seu cão ou gato com base no peso corporal, dieta, atividade e temperatura ambiente.';

const ui: PetWaterIntakeUI = {
  "journeyHint": "Escolha o animal, introduza o peso corporal e ajuste a alimentação e o clima do dia.",
  "instantHint": "Cada opção altera o nível de água instantaneamente. É um guia orientativo.",
  "unitLegend": "Unidades",
  "metricUnit": "Métrico",
  "imperialUnit": "Imperial",
  "speciesLegend": "Para quem é a taça de água?",
  "speciesDog": "Cão",
  "speciesCat": "Gato",
  "speciesDogMeta": "Guia de manutenção 60 mL por kg",
  "speciesCatMeta": "Guia de manutenção 40 mL por kg",
  "weightLabel": "Peso corporal",
  "weightHint": "Indique o peso saudável atual do seu animal.",
  "weightKg": "kg",
  "weightLb": "lb",
  "dietLegend": "Quanta água vem da comida?",
  "dietDry": "Principalmente comida seca",
  "dietDryMeta": "A maioria da água é bebida na taça",
  "dietMixed": "Alimentação mista",
  "dietMixedMeta": "Uma parte da água vem das refeições",
  "dietWet": "Principalmente comida húmida",
  "dietWetMeta": "A comida fornece a maioria da humidade",
  "activityLegend": "Atividade de hoje",
  "activityCalm": "Calmo / Repouso",
  "activityTypical": "Moderada / Normal",
  "activityActive": "Intensa / Muito ativo",
  "heatLegend": "Clima e temperatura",
  "heatNormal": "Temperado / Normal",
  "heatWarm": "Quente",
  "heatHot": "Muito quente / Canícula",
  "resultEyebrow": "Estimativa do nível de água",
  "totalRangeLabel": "Água total necessária (todas as fontes)",
  "drinkingRangeLabel": "Guia orientativo para a taça",
  "totalRangeHint": "Intervalo diário global incluindo a humidade dos alimentos.",
  "drinkingRangeHint": "Estimativa da parte bebida diretamente na taça.",
  "statusEveryday": "Condições normais",
  "statusActive": "Dia ativo",
  "statusWarm": "Tempo quente",
  "statusDemanding": "Condições exigentes",
  "statusDetailEveryday": "Perfil de manutenção base sem fatores extra de calor ou esforço.",
  "statusDetailActive": "O exercício aumenta as perdas de água. Garanta água fresca constante.",
  "statusDetailWarm": "O calor aumenta o arfar. A sombra e a frescura são prioritárias.",
  "statusDetailDemanding": "Atividade elevada e calor forte combinados. Vigie atentamente o animal.",
  "resultEmpty": "Introduza um peso válido para ver o nível de água.",
  "sceneAria": "Reservatório de água para o animal selecionado",
  "sceneTotal": "ÁGUA TOTAL",
  "sceneBowl": "meio do intervalo diário",
  "methodTitle": "Método de cálculo",
  "methodText": "Segue as orientações AAHA de 60 mL/kg em cães e 40 mL/kg em gatos, ajustadas à comida e clima.",
  "noteTitle": "A taça de água não substitui um diagnóstico",
  "noteText": "Mantenha sempre água limpa disponível. Em caso de alterações na sede, consulte um veterinário.",
  "invalidWeight": "Por favor introduza um peso corporal válido.",
  "weightRange": "O peso deve estar entre 0.5 kg e 100 kg."
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    "question": "Quanta água deve beber um cão ou gato por dia?",
    "answer": "As diretrizes veterinárias da AAHA recomendam cerca de 60 mL/kg por dia para cães e 40 mL/kg para gatos. O valor varia conforme a alimentação, exercício e temperatura."
  },
  {
    "question": "A comida húmida reduz a necessidade de beber da taça?",
    "answer": "Sim, a comida húmida contém entre 75% e 82% de água, cobrindo grande parte da hidratação. Animais que comem comida húmida bebem menos na taça."
  },
  {
    "question": "Quando devo preocupar-me com o consumo de água?",
    "answer": "Consulte o veterinário se notar um aumento repentino na sede (polidipsia) ou recusa em beber água, sinais de problemas renais ou diabetes."
  },
  {
    "question": "O calor duplica as necessidades de água?",
    "answer": "Sim, o arfar em dias quentes aumenta a perda de água. Garanta sempre água fresca e sombra disponível."
  }
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  {
    "name": "Selecionar espécie e peso",
    "text": "Escolha cão ou gato e introduza o peso saudável em kg ou lb."
  },
  {
    "name": "Definir o tipo de comida",
    "text": "Escolha seca, mista ou húmida para calcular o aporte de água da comida."
  },
  {
    "name": "Ajustar atividade e clima",
    "text": "Defina o nível de exercício e a temperatura ambiente para a perda de água."
  },
  {
    "name": "Verificar as estimativas",
    "text": "Consulte a água total necessária e a quantidade estimada para beber na taça."
  }
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Diretrizes Essenciais para a Necessidade Diária de Água dos Animais",
    "items": [
      "Manutenção base: Cães necessitam de ~60 mL/kg diariamente; gatos necessitam de ~40 mL/kg segundo a AAHA.",
      "Impacto da dieta: A alimentação húmida fornece 70-80% de humidade, reduzindo significativamente as idas à taça de água.",
      "Calor e exercício: O arfar aumenta a perda evaporativa de fluidos, aumentando as necessidades diárias de hidratação.",
      "Aviso de saúde: Aumentos ou diminuições repentinas na ingestão de água requerem avaliação veterinária imediata.",
      "Acesso a água fresca: Múltiplas taças de água limpa promovem hábitos saudáveis de hidratação."
    ]
  },
  {
    "type": "title",
    "text": "Compreender as Necessidades Diárias de Hidratação de Cães e Gatos",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Uma hidratação adequada e contínua é absolutamente fundamental para a função metabólica, digestão de nutrientes, lubrificação articular e preservação da saúde renal a longo prazo em cães e gatos. A água constitui entre 60% e 70% do peso corporal total de um animal adulto, e mesmo um pequeno défice de fluidos pode prejudicar processos fisiológicos vitais. A literatura veterinária da American Animal Hospital Association (AAHA) estabelece as necessidades diárias de manutenção em cerca de 60 mL por quilograma de peso corporal para cães e 40 mL por quilograma para gatos."
  },
  {
    "type": "paragraph",
    "html": "No entanto, estes valores de referência representam o requisito hídrico total diário e não apenas a quantidade que o animal deve beber diretamente da taça de água. O aporte hídrico total de um animal de estimação provém de três fontes distintas: a água bebida na taça ou fonte, a humidade naturalmente contida na comida comercial ou caseira, e a água metabólica produzida durante a respiração celular. Compreender esta distinção tranquiliza os tutores quando os seus animais bebem menos água ao consumir alimentos húmidos."
  },
  {
    "type": "title",
    "text": "Água Total Diária vs Consumo da Taça",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "O tipo de alimento desempenha um papel dominante na quantidade de água que o animal procurará beber da taça. A comida seca comercial (ração) contém apenas 6% a 10% de humidade, exigindo que o animal beba quase a totalidade das suas necessidades hídricas diárias diretamente da taça. Em contrapartida, a comida húmida em lata ou saqueta contém entre 75% e 82% de água. Um cão ou gato alimentado exclusivamente com comida húmida obtém assim a maior parte da sua hidratação durante as refeições, resultando em idas muito raras à taça de água, o que é fisiologicamente perfeitamente normal."
  },
  {
    "type": "table",
    "headers": [
      "Fator de Entrada",
      "Impacto nas Necessidades Hídricas",
      "Consideração Clínica"
    ],
    "rows": [
      [
        "Espécie",
        "Define a taxa de manutenção base",
        "Base canina ~60 mL/kg; Base felina ~40 mL/kg"
      ],
      [
        "Peso Corporal",
        "Escala o volume total",
        "Usar peso ideal para animais com excesso de peso"
      ],
      [
        "Humidade da Dieta",
        "Determina a proporção da comida",
        "Comida húmida fornece até 80% da água"
      ],
      [
        "Atividade e Calor",
        "Aumenta perdas por arfar",
        "Temperaturas altas exigem mais água"
      ]
    ]
  },
  {
    "type": "title",
    "text": "Diretrizes Práticas para a Gestão da Hidratação",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Os tutores devem garantir acesso livre a água limpa e fresca. Para gatos, fontes de água ou taças largas encorajam o consumo voluntário."
  },
  {
    "type": "card",
    "title": "Dieta de Comida Seca",
    "icon": "mdi:food-drumstick",
    "html": "Animais com comida seca dependem fortemente de beber da taça. Mantenha as taças limpas e em locais tranquilos."
  },
  {
    "type": "card",
    "title": "Dieta de Comida Húmida",
    "icon": "mdi:can",
    "html": "A comida húmida fornece humidade substancial. É normal beberem menos da taça, mas a água fresca deve estar sempre disponível."
  },
  {
    "type": "card",
    "title": "Gestão em Dias Quentes e Ativos",
    "icon": "mdi:weather-sunny",
    "html": "Durante o calor ou brincadeiras intencas, o arfar aumenta a perda de água. Proporcione sombra e descansos com água."
  },
  {
    "type": "tip",
    "title": "Sinais de Alerta Veterinário",
    "html": "Alterações repentinas no padrão de bebida - beber muito mais água (polidipsia) ou recusar totalmente - requerem consulta veterinária urgente."
  }
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
