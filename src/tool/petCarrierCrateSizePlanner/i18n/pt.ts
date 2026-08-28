import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'calculadora-tamanho-caixa-transporte-animais';
const title = 'Calculadora de Tamanho de Caixa de Transporte para Animais';
const description = 'Calcule as dimensões internas ideais da caixa de transporte para cães ou gatos com base em seis medições corporais e verificação para voos.';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: 'Meça primeiro. Compre com total confiança.',
  journeyHint: 'Escolha o animal e o tipo de viagem, insira as medições e use o esquema gráfico como guia para o espaço interior da caixa.',
  unitLegend: 'Unidades de exibição',
  speciesStep: 'Comece pelo animal',
  metricUnit: 'Métrico',
  imperialUnit: 'Imperial',
  speciesLegend: 'Quem vai viajar?',
  speciesDog: 'Cão',
  speciesCat: 'Gato',
  modeLegend: 'Onde será a viagem?',
  modeCar: 'Carro',
  modeAir: 'Avião',
  measurementsLegend: 'Meça o seu animal de estimação',
  noseTailLabel: 'Focinho até à base da cauda',
  noseTailHint: 'Meça sem incluir a curvatura da cauda',
  elbowHeightLabel: 'Chão até ao cotovelo',
  shoulderWidthLabel: 'Largura dos ombros',
  standingHeightLabel: 'Altura em posição de pé',
  beddingLabel: 'Espessura da almofada ou tapete',
  weightLabel: 'Peso do animal',
  cmUnit: 'cm',
  inchUnit: 'pol',
  kgUnit: 'kg',
  lbUnit: 'lb',
  snubNosedLabel: 'Raça de focinho curto ou braquicefálica',
  snubNosedHint: 'Viagens de avião exigem ajustes IATA. Consulte o seu veterinário e a companhia aérea.',
  presetLegend: 'Inicie com um perfil',
  presetCat: 'Gato',
  presetSmallDog: 'Cão pequeno',
  presetMediumDog: 'Cão médio',
  presetLargeDog: 'Cão grande',
  resultEyebrow: 'Gabarito de medição recomendado',
  resultTitle: 'Espaço suficiente para dar a volta',
  resultDimensionLabel: 'Dimensões internas mínimas iniciais',
  lengthLabel: 'Comprimento',
  widthLabel: 'Largura',
  heightLabel: 'Altura',
  petWeightLabel: 'Peso do animal',
  journeyLabel: 'Tipo de viagem',
  statusComfort: 'Nível básico de conforto',
  statusAirReview: 'Verificação de transporte aéreo',
  statusSnub: 'Ajuste para focinho curto',
  resultDetail: 'Verifique o interior real da caixa, a abertura da porta, a ventilação e os regulamentos da companhia antes de comprar.',
  checklistTitle: 'As quatro verificações corporais',
  checklistStand: 'O animal consegue ficar de pé e sentar-se sem que a cabeça ou as orelhas toquem no teto.',
  checklistTurn: 'O animal consegue dar a volta naturalmente estando de pé.',
  checklistLie: 'O animal consegue deitar-se numa posição natural sobre a almofada.',
  checklistAirline: 'Para voos, confirme os limites da companhia, ventilação, fechos e impermeabilidade do fundo.',
  invalidInput: 'Insira valores positivos para cada medição corporal e peso.',
  noteTitle: 'Use como estimativa de espaço, não como autorização de voo',
  noteText: 'As regras variam de acordo com a companhia aérea, veículo e animal. Um veterinário deve avaliar a saúde e aptidão.',
  methodTitle: 'Método de cálculo',
  methodText: 'O cálculo segue as diretrizes IATA: o comprimento é a distância do focinho à cauda mais metade da altura do cotovelo, a largura é o dobro da largura dos ombros e a altura inclui a altura em pé mais a espessura da almofada.',
  blueprintLabel: 'Desenho cotado da caixa de transporte com o animal dentro e linhas de guia de comprimento e altura',
  dimensionInside: 'Dimensões internas',
  checkMark: 'OK',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: 'Como devo medir o meu cão ou gato para uma caixa de transporte?',
    answer: 'Meça da ponta do focinho à base da cauda, do chão à articulação do cotovelo, a largura dos ombros no ponto mais largo e a altura do chão ao ponto mais alto da cabeça ou orelhas. Adicione a espessura da almofada separadamente.',
  },
  {
    question: 'Que dimensões internas calcula este simulador?',
    answer: 'Estima o comprimento interno mínimo com base no corpo e cotovelo, a largura interna com base nos ombros e a altura total incluindo a almofada.',
  },
  {
    question: 'Os resultados garantem a aprovação por uma companhia aérea?',
    answer: 'Não. O modo avião aplica as fórmulas de referência da IATA, mas cada companhia aérea tem regulamentos próprios. Verifique sempre as normas oficiais da transportadora.',
  },
  {
    question: 'Por que razões raças de focinho curto precisam de caixas maiores em voos?',
    answer: 'As diretrizes IATA recomendam espaço adicional para raças braquicefálicas de modo a prevenir o superaquecimento e dificuldades respiratórias durante o voo.',
  },
  {
    question: 'Uma caixa de transporte para o carro deve ser o maior possível?',
    answer: 'Não. A caixa deve oferecer espaço suficiente para o animal ficar de pé, virar-se e deitar-se, mas deve ser fixada com segurança no veículo.',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: 'Escolha o tipo de viagem', text: 'Selecione carro ou avião para ajustar os critérios de verificação.' },
  { name: 'Insira as seis medições', text: 'Tome as medidas do corpo e o peso do animal quando ele estiver calmo.' },
  { name: 'Leia as dimensões internas', text: 'Utilize o comprimento, largura e altura recomendados para comparar modelos no mercado.' },
  { name: 'Verifique a conformidade', text: 'Antes de comprar, controle o fecho de segurança, a ventilação e as exigências da companhia.' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Guia para escolher a caixa de transporte ideal para o seu animal',
    items: [
      'Meça o corpo do animal com precisão em vez de se basear apenas no peso corporal total do cão ou gato.',
      'Utilize as dimensões internas úteis para comparar caixas de transporte reais em lojas físicas ou online.',
      'Verifique sempre o mecanismo de fecho de segurança, a estabilidade da porta e a ventilação da caixa.',
      'O transporte aéreo exige uma preparação específica cuidadosa, verificação de regulamentos e conselho veterinário.',
    ],
  },
  { type: 'title', text: 'Como calcular as dimensões de uma caixa de transporte', level: 2 },
  {
    type: 'paragraph',
    html: 'Uma caixa de transporte adequada deve garantir quatro movimentos naturais essenciais ao seu cão ou gato: ficar de pé sem curvar a cabeça nem dobrar as orelhas, sentar-se ereto em posição natural com todo o conforto, dar a volta sobre o seu próprio eixo sem obstáculos laterais e deitar-se confortavelmente numa posição relaxada. Este simulador calcula o comprimento, largura e altura internos necessários de forma personalizada e rigorosa para a segurança do animal.',
  },
  {
    type: 'paragraph',
    html: 'As dimensões obtidas representam o espaço interno útil e real da caixa de transporte. Certifique-se de que elementos internos indispensáveis, tais como comedouros, bebedouros de água, almofadas espessas ou o formato inclinado das paredes não reduzam esse espaço útil ao efetuar a compra final na loja de animais. Em caso de dúvida escolha sempre o tamanho superior.',
  },
  { type: 'title', text: 'Importância de cada medição corporal para o animal', level: 2 },
  {
    type: 'table',
    headers: ['Medição corporal', 'Utilidade para o animal', 'Aplicação no cálculo'],
    rows: [
      ['Focinho à base da cauda', 'Define o comprimento base do corpo sem incluir a cauda.', 'Comprimento interno'],
      ['Do chão ao cotovelo', 'Adiciona espaço para a rotação das patas dianteiras e mobilidade.', 'Comprimento interno'],
      ['Largura dos ombros', 'Garante largura suficiente no ponto corporal mais largo.', 'Largura interna'],
      ['Altura em posição de pé', 'Protege a cabeça e as orelhas contra impactos no teto.', 'Altura interna'],
      ['Espessura da almofada', 'Mantém a altura útil real após colocar a cama.', 'Altura interna'],
      ['Peso corporal', 'Permite verificar a capacidade máxima de carga do recipiente.', 'Verificação de carga'],
    ],
  },
  {
    type: 'paragraph',
    html: 'As fórmulas baseiam-se nas normas oficiais da IATA para o transporte de animais vivos por via aérea e terrestre: o comprimento interno combina o comprimento do corpo e metade da altura do cotovelo, a largura é o dobro dos ombros e a altura inclui a altura em pé mais a espessura da almofada.',
  },
  { type: 'title', text: 'Cuidados e considerações para viagens de avião', level: 2 },
  {
    type: 'paragraph',
    html: 'A estimativa de tamanho não substitui uma autorização oficial de embarque por parte da companhia aérea. Fatores essenciais como o tipo de aeronave, as condições de temperatura ambiente e o sistema de ventilação nos quatro lados são decisivos para a segurança e saúde do seu animal.',
  },
  {
    type: 'tip',
    title: 'Teste prático de espaço em casa antes de viajar',
    html: 'Coloque o animal na caixa de transporte num ambiente calmo e observe os seus movimentos naturais durante alguns minutos. Se parecer excessivamente apertado ao dar a volta ou sentar-se, opte sem hesitar pelo tamanho superior para garantir o seu bem-estar.',
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
