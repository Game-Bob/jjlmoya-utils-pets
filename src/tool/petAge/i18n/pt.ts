import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'calculadora-idade-mascotas';
const title = 'Calculadora de Idade para Mascotas';
const description = 'Descubra a idade real do seu cão ou gato em anos humanos. Esqueça a "regra do 7". Use a nossa calculadora baseada na ciência veterinária atual para obter resultados precisos.';

const ui: PetAgeUI = {
  toolTitle: 'Calculadora de Idade',
  toolSubtitle: 'Quantos anos humanos tem realmente o seu amigo peludo?',
  petNameLabel: 'Nome (Opcional)',
  petNamePlaceholder: 'ex. Buddy',
  petTypeDog: 'Cão',
  petTypeCat: 'Gato',
  sizeSmall: 'Pequeno',
  sizeMedium: 'Médio',
  sizeLarge: 'Grande',
  sizeGiant: 'Gigante',
  birthYearLabel: 'Ano de nascimento',
  humanAgeLabel: 'A idade humana de',
  humanAgeUnit: 'anos',
  humanAgeYears: 'anos',
  lifeStageLabel: 'Etapa de vida',
  milestoneLabel: 'Próximo marco',
  shareBtn: 'Partilhar resultado',
  shareSuccess: 'Copiado! A abrir cartão...',
  humanAgeTitle: 'Idade Mágica',
  recalculateBtn: 'Calcular outra idade',
  realAgeLabel: 'Idade Real',
  defaultPetName: 'A sua mascota',
  stageDogPuppy: 'Cachorro Brincalhão',
  stageDogTeen: 'Adolescente Rebelde',
  stageDogAdult: 'Adulto em Forma',
  stageDogMature: 'Madurez Distinguida',
  stageDogSenior: 'Sabedoria Sénior',
  stageCatKitten: 'Curiosidade Infantil',
  stageCatYouth: 'Juventude Felina',
  stageCatReign: 'Reinado Doméstico',
  stageCatVeteran: 'Veterano Mimado',
  stageCatVenerable: 'Venerável Ancião',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: 'É verdade que um ano de cão equivale a sete anos humanos?',
    answer: 'Não. É uma regra simplificada que a ciência veterinária moderna desmentiu. Os cães amadurecem muito rápido nos primeiros dois anos, e o processo abranda depois, variando segundo o peso e a raça. Estudos recentes sobre metilação do ADN permitiram desenvolver fórmulas de envelhecimento muito mais precisas que refletem o desenvolvimento biológico real dos animais ao longo da sua vida.',
  },
  {
    question: 'Porque é que os cães grandes envelhecem mais depressa?',
    answer: 'As raças de cães grandes têm um metabolismo e crescimento mais acelerados, o que provoca um stress oxidativo maior nas suas células. Isto significa que a sua esperança de vida é mais curta do que a dos cães pequenos. Os marcadores biológicos mostram que as raças gigantes podem atingir o estatuto de sénior aos 5 anos, enquanto as raças pequenas poderiam não atingi-lo até aos 10 ou 11 anos.',
  },
  {
    question: 'Como envelhecem os gatos em comparação com os humanos?',
    answer: 'Um gato termina a sua infância ao mês, a sua adolescência aos 6 meses e atinge a idade adulta (24 anos humanos) aos 2 anos. Depois, cada ano de vida de um gato equivale a cerca de 4 anos humanos. Este modelo é bastante constante nas diferentes raças de gatos, ao contrário da grande variação observada nos cães.',
  },
  {
    question: 'A que idade se considera uma mascota como Sénior?',
    answer: 'Geralmente um cão é sénior quando atinge 75% da sua esperança de vida prevista. Para os gatos costuma ser dos 7 aos 11 anos, segundo a sua saúde. Os exames veterinários regulares são críticos nesta fase para vigiar problemas comuns como doenças renais ou o declínio cognitivo.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Selecione a espécie', text: 'Escolha se tem um cão ou um gato para aplicar a fórmula biológica correta segundo a sua taxa metabólica.' },
  { name: 'Indique o tamanho', text: 'Para cães, o peso é chave para determinar a idade biológica. Indique se é pequeno (até 10kg), médio (10-25kg), grande (25-45kg) ou gigante (mais de 45kg).' },
  { name: 'Introduza o ano de nascimento', text: 'Entre o ano da sua mascota para calcular a sua idade cronológica. O nosso sistema processará esta informação face às curvas de envelhecimento estabelecidas.' },
  { name: 'Analise a sua etapa de vida', text: 'Reveja o resultado para conhecer se a sua mascota está em etapa de cachorro, jovem, adulto ou sénior frente a um humano e compreenda as suas necessidades atuais.' },
];

const bibliography: PetAgeLocaleContent['bibliography'] = [
  { name: 'Diretrizes da AAHA sobre cuidados com idosos para cães e gatos', url: 'https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2023-aaha-senior-care-guidelines-for-dogs-and-cats/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats.pdf' },
  { name: 'AKC: Como calcular os anos de cão em anos humanos', url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'O que deve saber sobre o envelhecimento animal',
    items: [
      'A "regra do 7" é um mito: os cães amadurecem exponencialmente os 2 primeiros anos.',
      'Um cão de 1 ano equivale a 15 anos humanos; um cão de 2 anos equivale a 24 anos humanos.',
      'Os cães grandes envelhecem mais depressa do que os pequenos após os 2 anos.',
      'Os gatos seguem uma curva mais linear: cada ano de gato equivale a 4 humanos após os 2 anos.',
      'A idade biológica é melhor preditor de necessidades de saúde do que a idade cronológica.',
      'Checkups regulares ajudam a detetar problemas antes que sejam graves.',
    ],
  },
  { type: 'title', text: 'La Verdade Científica sobre a Idade da sua Mascota', level: 2 },
  {
    type: 'paragraph',
    html: 'Sabia que um gato de 2 anos já tem a maturidade de uma pessoa de 24 anos? Descubra porque a regra de multiplicar por 7 é um mito e como entender a realidade biológica pode melhorar os cuidados da sua mascota. O velho mito de que "1 ano de cão equivale a 7 anos humanos" é uma simplificação que não tem em conta os ganhos de desenvolvimento massivos no início da vida. Os animais amadurecem a grande velocidade os primeiros dois anos de vida, alcançando a maturidade física muito rápido. Depois, esta curva de envelhecimento abranda.',
  },
  {
    type: 'paragraph',
    html: 'A investigação moderna, incluindo estudos sobre relógios epigenéticos e metilação do ADN, deu-nos uma visão matizada. Estes estudos mostram que as alterações químicas no ADN de um cão mudam a ritmos distintos. Na etapa de cachorro as mudanças são rápidas, enquanto na idade adulta os metabolismos são mais graduais. Esta compreensão permitiu aos cientistas desenvolver fórmulas que são muito mais precisas do que qualquer multiplicação linear.',
  },
  { type: 'title', text: 'A Ciência por trás do Cálculo', level: 3 },
  {
    type: 'paragraph',
    html: 'Esta ferramenta usa as diretrizes oficiais da <strong>American Animal Hospital Association (AAHA)</strong> e os últimos estudos sobre metilação de ADN em cães para lhe dar a estimativa mais precisa possível. Ao combinar dados específicos de tamanho com marcadores biológicos, criamos um modelo completo do desenvolvimento do animal. Este enfoque reconhece que um Chihuahua e um Cão de Fila têm perfis de envelhecimento muito distintos desde o nascimento.',
  },
  {
    type: 'paragraph',
    html: 'Entender estas diferenças é crucial para os donos responsáveis. Isto permite ajustar as intervenventos veterinárias, como a mudança para uma dieta sénior ou o início de suplementos para articulações. O nosso calculador une a ciência complexa com o conhecimento prático diário para os amantes dos animais de todo o mundo.',
  },
  {
    type: 'table',
    headers: ['Espécie', 'Ano 1', 'Ano 2', 'Ano 3 e mais'],
    rows: [
      ['Gato', '15 anos humanos', '24 anos humanos', '+4 anos por ano'],
      ['Cão pequeno', '15 anos humanos', '24 anos humanos', '+5 anos por ano'],
      ['Cão médio', '15 anos humanos', '24 anos humanos', '+6 anos por year'],
      ['Cão grande', '15 anos humanos', '24 anos humanos', '+7 anos por ano'],
      ['Cão gigante', '15 anos humanos', '24 anos humanos', '+8 anos por ano'],
    ],
  },
  { type: 'title', text: 'Etapas da Vida e Preparação', level: 3 },
  {
    type: 'paragraph',
    html: 'Conhecer a idade real da sua mascota ajuda-o a entender as suas necessidades médicas em cada fase. Igual aos humanos que passam por etapas, cães e gatos têm mudanças fisiológicas específicas ao crescer. Ser consciente destas transições permite-lhe dar o apoio correto no momento adequado, sejam jogos para um adolescente ou cuidados para um sénior.',
  },
  {
    type: 'card',
    title: 'Cachorro ou Junior',
    icon: 'mdi:star-shooting',
    html: 'É a fase de crescimento explosivo. Os seus ossos crescem a grande ritmo e os dentes de leite caem para deixar sítio aos definitivos. A vacinação e socialização precoce são críticas aqui para assegurar que se tornem adultos equilibrados. É também o melhor momento para criar bons hábitos para toda a vida.',
  },
  {
    type: 'card',
    title: 'Adulto',
    icon: 'mdi:shield-check',
    html: 'É o pico de forma física para a maioria dos animais. A sua personalidade está definida e costumam estar no seu momento mais ativo. É o momento ideal para desfrutar de atividade intensa e manter um peso ideal para prevenir futuras doenças. O exercício constante e o alimento equilibrado são os pilares da saúde nestes anos.',
  },
  {
    type: 'card',
    title: 'Sénior',
    icon: 'mdi:heart-pulse',
    html: 'Começam os pelos brancos no focinho e o animal tende a dormir mais. O seu metabolismo abranda e podem mostrar menos interesse pelo jogo. Daqui em diante, os checkups deveriam ser cada seis meses. Vigie sinais de artrite e qualquer mudança de conduta. A deteção precoce de males sénior é a melhor via para assegurar que a qualidade de vida siga alta.',
  },
  {
    type: 'tip',
    title: 'Conselho Veterinário',
    html: 'A idade calculada é uma estimativa biológica média. Factores como raça, genética e estilo de vida podem impactar no envelhecimento real da sua mascota. Para conselhos personalizados e avaliação de saúde, consulte o seu veterinário.',
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
  faqTitle: 'Perguntas Frequentes',
  faq,
  bibliographyTitle: 'Bibliografia',
  bibliography,
  howTo,
  schemas,
};
