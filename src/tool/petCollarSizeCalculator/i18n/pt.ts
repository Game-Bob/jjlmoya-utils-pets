import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'calculadora-tamanho-coleira-animal';
const title = 'Calculadora de tamanho de coleira para animais';
const description = 'Meça o pescoço, acrescente espaço de conforto e encontre uma faixa ajustável para conferir manualmente.';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: 'Circunferência do pescoço', unitLabel: 'Mostrar', centimetres: 'Centímetros', inches: 'Polegadas', allowanceLabel: 'Espaço de conforto', collarTypeLabel: 'Tipo de coleira', flatCollar: 'Tradicional', breakawayCollar: 'Com abertura', martingaleCollar: 'Martingale', statusTight: 'Acrescente espaço', statusBalanced: 'Pronto para conferir', statusLoose: 'Confira a segurança', statusTightDetail: 'Acrescente espaço.', statusBalancedDetail: 'Confira esta faixa à mão.', statusLooseDetail: 'Confira se não pode escorregar.', fitStudyLabel: 'Estudo de ajuste da coleira', fitWindowLabel: 'Encontre esta faixa', measuredLabel: 'Pescoço medido', roomLabel: 'Espaço de conforto', checkLabel: 'Conferência manual', sceneAria: 'Estudo de ajuste com o círculo do pescoço e a faixa ajustável', neckMarker: 'pescoço', easeMarker: 'espaço', rangeMarker: 'faixa da coleira', minimumMarker: 'início', maximumMarker: 'fim', checkFlat: 'Confortável, segura e sem atrito.', checkBreakaway: 'Confira o ajuste e o mecanismo de abertura.', checkMartingale: 'O laço de tensão não deve apertar o pescoço.', invalidInput: 'Digite uma circunferência e um espaço válidos.',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: 'Como medir o pescoço do meu animal?', answer: 'Passe uma fita flexível no local onde a coleira ficará. Mantenha-a nivelada e próxima do pelo, sem apertar a pele ou o manto. Repita a medição se mudarem a posição da coleira, o pelo ou a postura do animal.' },
  { question: 'Por que o resultado é uma faixa?', answer: 'Coleiras ajustáveis têm percursos diferentes e os tamanhos não são iguais entre fabricantes. A calculadora soma o espaço escolhido e cria uma pequena faixa de comparação. Depois é preciso testar a coleira real no animal.' },
  { question: 'Quanto espaço de conforto devo usar?', answer: 'Não existe um número universal. O pelo, a largura, o material e a atividade mudam o ajuste. Use o valor como uma hipótese visível e confirme conforto e segurança com uma conferência manual tranquila.' },
  { question: 'A fórmula serve para uma coleira martingale?', answer: 'A primeira estimativa parte da mesma circunferência. A verificação final muda: o laço de tensão deve ser limitado e nunca pode sufocar. Siga as instruções do fabricante quando o mecanismo não for familiar.' },
  { question: 'Posso usar o resultado para um filhote?', answer: 'Sim, como uma fotografia do ajuste atual. Animais jovens crescem e mudam de pelo, por isso a medida deve ser repetida com frequência e conferida com cuidado.' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: 'Meça o pescoço', text: 'Meça o animal calmo e em pé, no ponto onde a coleira ficará. A fita deve permanecer plana e sem apertar.' },
  { name: 'Escolha o espaço', text: 'Ajuste o espaço entre pescoço e coleira no controle visível. Os 2 cm iniciais são apenas um exemplo.' },
  { name: 'Escolha o tipo', text: 'Selecione tradicional, com abertura ou martingale para receber o lembrete adequado ao mecanismo.' },
  { name: 'Compare a regulagem', text: 'Procure uma coleira cuja faixa ajustável cubra todo o resultado e termine com um teste físico.' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Da medida a uma faixa para comprar', items: ['Meça onde a coleira ficará de verdade.', 'Deixe o espaço de conforto visível em vez de adivinhar pela raça.', 'Compare o resultado com a regulagem real do produto.', 'Finalize com uma conferência tranquila no animal.'] },
  { type: 'title', text: 'Que decisão esta calculadora ajuda a tomar', level: 2 },
  { type: 'paragraph', html: 'Tabelas de tamanho ficam confusas quando o animal está entre duas medidas, tem pelo espesso ou ainda está crescendo. Esta ferramenta começa com um dado que você pode conferir: a circunferência no ponto onde a coleira ficará. Depois soma o espaço de conforto escolhido. O resultado não tenta adivinhar um rótulo comercial como pequeno, médio ou grande; cria uma faixa concreta para comparar com a regulagem dos produtos.' },
  { type: 'paragraph', html: 'A faixa é curta de propósito e funciona como ponto de partida para a compra. Coleiras ajustáveis não seguem uma norma mundial e o comprimento útil pode ser diferente do nome do tamanho anunciado. Um produto entra na seleção quando sua regulagem cobre toda a faixa. Mesmo assim, o número não confirma sozinho a borda, a fivela, o pelo ou o funcionamento do modelo.' },
  { type: 'title', text: 'Como medir antes de comprar', level: 2 },
  { type: 'list', items: ['Meça quando o animal estiver calmo e em pé naturalmente.', 'Mantenha a fita nivelada sem comprimir pelo ou pele.', 'Repita se a coleira for ficar mais acima ou mais abaixo.', 'Para animais jovens, anote a data e confira o ajuste durante o crescimento.'] },
  { type: 'paragraph', html: 'O espaço de conforto é uma hipótese explícita, não uma garantia de segurança. O valor depende do animal, do manto, da largura, do material e do uso. A conferência com os dedos pode servir de referência, mas não transforma um número em regra para todos. Se houver atrito, tosse, dor, dificuldade para respirar, angústia ou movimento limitado, retire a coleira e procure orientação qualificada.' },
  { type: 'title', text: 'Leia a roda de ajuste', level: 2 },
  { type: 'table', headers: ['Sinal', 'O que significa', 'Próximo passo'], rows: [['Pescoço medido', 'Circunferência antes do espaço.', 'Repita se a fita estava inclinada ou apertada.'], ['Início', 'Pescoço mais o espaço escolhido.', 'Use como limite inferior da regulagem.'], ['Fim', 'Pequena janela para comparar.', 'Procure uma regulagem que cubra toda a janela.'], ['Conferência', 'Lembrete ligado ao espaço escolhido.', 'Confirme no animal.']] },
  { type: 'title', text: 'O tipo de coleira muda a revisão final', level: 2 },
  { type: 'paragraph', html: 'Uma coleira tradicional pede uma revisão de conforto e segurança, enquanto os modelos com abertura ou martingale acrescentam uma pergunta sobre o mecanismo. Confira bordas, fivela, pelo e laços de tensão. O número ajuda a filtrar produtos, mas a decisão final depende do animal calmo e das instruções do fabricante.' },
  { type: 'tip', title: 'Faça uma conferência tranquila', html: 'Coloque a coleira com o animal relaxado. Ele deve conseguir se mover, respirar, comer, beber e virar a cabeça sem atrito. Confira também se não pode passar pela cabeça quando deve permanecer no lugar. Repita após tosa, crescimento, alteração de peso ou mudança de posição.' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
