import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'calculadora-racao-diaria-pets';
const title = 'Calculadora de Ração Diária de Pets';
const description = 'Calcule a quantidade exata de comida que o seu cão ou gato necessita. Ferramenta baseada nas fórmulas veterinárias RER e DER para um peso saudável.';

const ui: PetRationUI = {
  toolTitle: 'Calculadora de Ração Diária',
  sectionProfile: '1. Perfil do Pet',
  labelAnimal: 'Animal',
  labelStage: 'Fase da Vida',
  labelWeight: 'Peso Corporal',
  labelActivity: 'Atividade Física',
  sectionDiet: '2. Dieta e Alimento',
  labelDietType: 'Tipo de Alimentação',
  speciesDog: 'Cão',
  speciesCat: 'Gato',
  speciesRabbit: 'Coelho',
  stagePuppy: 'Cachorro ou Gatinho',
  stageAdult: 'Adulto',
  stageSenior: 'Sénior',
  activityLow: 'Baixa',
  activityMod: 'Normal',
  activityHigh: 'Alta',
  dietDry: 'Apenas Seco',
  dietMixed25: 'Misto (25%)',
  dietHalf: 'Metade-Metade (50%)',
  dietWet: 'Apenas Húmido',
  manualAdjust: 'Ajuste manual (1-99%)',
  wetPercentLabel: '% de comida húmida na dieta',
  tagDry: 'Seco',
  tagWet: 'Húmido',
  totalKcal: 'Total',
  kcalUnit: 'kcal/dia',
  statusPuppy: 'Fase de crescimento rápido',
  statusSenior: 'Metabolismo maduro',
  statusLargeDog: 'Raça grande: Cuidado articular',
  statusDefault: 'Peso equilibrado',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'O que é o RER e por que é importante?',
    answer: 'O RER (Resting Energy Requirement) é a energia mínima que o seu animal de estimação necessita para manter as suas funções vitais básicas em repouso. É a base científica para o cálculo da ração diária, evitando a sub ou sobrealimentação. Compreender o RER permite aos donos ajustar a ingestão de alimentos às necessidades biológicas específicas do seu animal, assegurando que não consomem mais do que os seus órgãos podem processar de forma eficiente.',
  },
  {
    question: 'Como é que a esterilização afecta a ração do meu animal?',
    answer: 'Os animais esterilizados tendem a ter um metabolismo basal cerca de 15 a 20 por cento inferior. Podem necessitar de uma ração ligeiramente menor ou de um nível de atividade ajustado para Baixo na calculadora para evitar o aumento de peso. As alterações hormonais após o procedimento alteram a forma como o corpo armazena gordura e queima energia, tornando a vigilância sobre a tigela de comida ainda mais importante para a saúde a longo prazo.',
  },
  {
    question: 'Posso usar esta calculadora para cachorros?',
    answer: 'Os cachorros em crescimento têm necessidades energéticas muito mais elevadas (até 3 vezes o RER). Esta calculadora está optimizada para cães e gatos adultos. Para cachorros, consulte sempre o seu veterinário para um plano de crescimento específico. Uma alimentação inadequada durante a fase de crescimento inicial pode levar a graves problemas esqueléticos mais tarde na vida, pois o excesso de calorias pode forçar o desenvolvimento ósseo demasiado depressa.',
  },
  {
    question: 'Quantas vezes por dia devo distribuir a ração?',
    answer: 'O ideal é repartir a quantidade total resultante em 2 ou 3 refeições por dia. Isto ajuda a manter níveis estáveis de glicose e melhora a digestão, especialmente em raças propensas à torção gástrica. Horários de refeição consistentes também ajudam a manter o seu animal saciado e com menos probabilidades de implorar por restos entre as refeições programadas.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Selecione a espécie cuidadosamente', text: 'Indique se o cálculo é para um cão ou um gato, pois os seus metabolismos e limites de peso variam significativamente com base nos seus traços biológicos únicos.' },
  { name: 'Ajuste para o peso exato', text: 'Mova o controlo deslizante para o peso atual do seu animal em quilogramas. É vital utilizar um peso medido recentemente para um cálculo preciso do requerimento energético.' },
  { name: 'Defina o seu nível de atividade', text: 'Escolha entre atividade baixa, normal ou alta com base no exercício diário real e nos níveis de energia demonstrados pelo seu companheiro de quatro patas.' },
  { name: 'Introduza as calorias do alimento por kg', text: 'Procure na embalagem do alimento para animais o valor exato de kcal/kg para que o cálculo da ração final em gramas seja o mais preciso possível para uma saúde óptima.' },
];

const bibliography: PetRationLocaleContent['bibliography'] = [
  { name: 'WSAVA: Kit de ferramentas de nutrição e recomendações calóricas', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
  { name: 'FEDIAF: Diretrizes Nutricionais para Alimentos Completos e Complementares para Animais de Estimação', url: 'https://fediaf.org/self-regulation/nutrition.html' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Princípios Chave da Nutrição e Saúde Veterinária',
    items: [
      'A fórmula RER é: 70 × (peso em kg)^0,75. É o fundamento científico de todo o cálculo calórico veterinário moderno.',
      'O DER multiplica o RER pelo fator de estilo de vida específico do animal para fornecer um requerimento diário.',
      'Um cão castrado necessita de até 20 por cento menos calorias do que um inteiro devido a alterações hormonais.',
      'A obesidade afeta 50 por cento dos animais de estimação hoje e reduz significativamente a sua esperança e qualidade de vida.',
      'Calcular a ração exata é uma das formas mais eficazes de medicina preventiva para os donos de animais.',
      'O uso de uma balança de cozinha fornece a precisão necessária para seguir um plano de alimentação baseado na ciência.',
    ],
  },
  { type: 'title', text: 'Guia Completo para Calcular a Ração Diária do seu Pet para uma Saúde Óptima', level: 2 },
  {
    type: 'paragraph',
    html: 'Alimentar um cão ou gato corretamente não é apenas uma questão de encher a sua tigela todas as manhãs. A nutrição é o pilar fundamental da sua saúde, longevidade e bem-estar emocional. Uma <strong>calculadora de ração diária para animais de estimação</strong> é uma ferramenta essencial para qualquer dono responsável que queira evitar os dois problemas mais comuns na nutrição veterinária atual: a malnutrição por falta de nutrientes e, sobretudo, a obesidade, que afecta mais de 50% dos animais de estimação nos países desenvolvidos.',
  },
  {
    type: 'paragraph',
    html: 'Neste guia, exploraremos os fundamentos científicos por trás dos cálculos calóricos, como interpretar os rótulos dos alimentos e como fatores como a idade, o nível de atividade física e o estado fisiológico influenciam a quantidade de comida que o seu companheiro necessita todos os dias. Vamos ajudá-lo a compreender como pequenos ajustes na ração diária podem fazer uma enorme diferença na prevenção da diabetes, problemas articulares e saúde cardíaca para o seu animal.',
  },
  { type: 'title', text: 'A Ciência por Trás dos Cálculos: Compreender RER e DER', level: 3 },
  {
    type: 'paragraph',
    html: 'Para determinar exatamente quanto um animal deve comer todos os dias, os veterinários e nutricionistas utilizam dois conceitos-chave: o RER e o DER. Estes acrónimos representam respetivamente o Requisito Energético em Repouso e o Requisito Energético Diário. Compreender como estes interagem é crucial para gerir o peso e o bem-estar do seu pet de forma segura e controlada.',
  },
  {
    type: 'paragraph',
    html: 'O RER cobre a energia necessária para as funções orgânicas básicas, respiração e circulação enquanto o animal está em repouso. O DER pega então neste valor e ajusta-o ao estilo de vida do animal, seja ele um cão de performance ativo ou um gato de interior calmo. Ao calibrar estes valores corretamente, podemos atingir um equilíbrio que promove uma pontuação de condição corporal saudável ao longo do tempo.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: Energia em repouso', value: '70 × kg^0,75' },
      { label: 'Fator cachorro', value: 'x2.5 a x3.5' },
      { label: 'Fator adulto ativo', value: 'x1.6 a x2.0' },
      { label: 'Fator sénior', value: 'x1.0 a x1.4' },
    ],
  },
  { type: 'title', text: 'Como Ler e Interpretar o Rótulo do Alimento do seu Pet', level: 3 },
  {
    type: 'paragraph',
    html: 'Para que a calculadora lhe dê as gramas exatas, necessita de saber a <strong>densidade calórica</strong> do produto, também conhecida como a sua energia metabolizável. Este valor é normalmente expresso como kcal/kg ou kcal/100g na embalagem. Ao introduzir estes números com precisão, pode desenhar uma dieta que não seja insuficiente nem excessiva.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Croquetes de dieta leve', value: '~3000 kcal/kg' },
      { label: 'Croquetes de adulto padrão', value: '~3500 kcal/kg' },
      { label: 'Croquetes de cachorro de alta energia', value: '~4000 kcal/kg' },
      { label: 'Comida húmida em lata', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Nota Nutricional do Veterinário',
    html: 'Cada animal de estimação é um indivíduo com o seu próprio metabolismo único. A calculadora oferece um ponto de partida apoiado cientificamente, mas deve sempre monitorizar a condição corporal real palpando as costelas do seu animal. Se conseguir senti-las facilmente sem pressionar com força, o peso é o ideal. Se as costelas forem difíceis de encontrar sob uma camada de gordura, pode ser altura de restringir a ração.',
  },
  { type: 'title', text: 'Diferenças de Nutrição Entre Gatos e Cães', level: 3 },
  {
    type: 'paragraph',
    html: 'Os gatos são carnívoros obrigados e o seu metabolismo está optimizado para obter energia das proteínas animais. Nos cães, vemos um metabolismo omnívoro mais flexível, mas ainda assim deve ter-se cuidado com o excesso de hidratos de carbono que pode levar ao aumento de peso. Ambas as espécies prosperam com uma ração controlada que evite uma carga excessiva nas articulações e no sistema cardiovascular ao longo das suas vidas.',
  },
  {
    type: 'paragraph',
    html: 'Dedicar uns minutos a calcular a ração exata é um dos investimentos mais rentáveis em medicina preventiva que pode fazer como dono. Um peso saudável reduz drasticamente o risco de doenças crónicas e dá ao seu melhor amigo a melhor oportunidade de uma vida longa e vibrante. Consulte o seu veterinário na sua próxima visita rotineira para garantir que a sua estratégia de alimentação atual é a ideal.',
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
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Bibliografia',
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
