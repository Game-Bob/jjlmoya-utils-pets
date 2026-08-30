import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';

const slug = 'calculadora-gestacao-animais';
const title = 'Calculadora de gestação de animais de estimação';
const description = 'Calcule a data provável do parto para cães, gatos, coelhos ou furões a partir da data de cruzamento com margem documentada.';

const ui: PetGestationLocaleContent['ui'] = {
  "journeyHint": "Escolha a espécie, insira a data do cruzamento e acompanhe a bússola até ao parto.",
  "instantHint": "Altere qualquer opção e o calendário ajusta-se instantaneamente.",
  "speciesLegend": "Qual é o tipo de animal?",
  "speciesDog": "Cão",
  "speciesCat": "Gato",
  "speciesRabbit": "Coelho",
  "speciesFerret": "Furão",
  "speciesDogMeta": "58 a 72 dias",
  "speciesCatMeta": "64 a 66 dias",
  "speciesRabbitMeta": "Cerca de 31 dias",
  "speciesFerretMeta": "Cerca de 42 dias",
  "matingDateLabel": "Data de cruzamento",
  "matingDateHint": "Utilize a primeira data conhecida. É uma estimativa e não uma data exata de conceção.",
  "presetToday": "Hoje",
  "presetWeekAgo": "Há 7 dias",
  "presetFortnightAgo": "Há 14 dias",
  "resultEyebrow": "A bússola de gestação indica",
  "dueDateLabel": "Data provável do parto",
  "windowLabel": "Intervalo esperado",
  "remainingLabel": "Dias até ao parto",
  "elapsedLabel": "Dias decorridos",
  "daysLabel": "dias",
  "dayLabel": "dia",
  "statusFuture": "A data inserida é futura",
  "statusWaiting": "Gestação em curso",
  "statusWindow": "O período de parto começou",
  "statusLate": "Ultrapassada a estimativa máxima",
  "resultEmpty": "A sua bússola de parto aparecerá aqui.",
  "sampleLabel": "Exemplo ilustrativo",
  "sceneMating": "CRUZAMENTO",
  "sceneToday": "Estado atual",
  "sceneDue": "PERÍODO DE PARTO",
  "noteTitle": "Nota importante de saúde",
  "noteText": "A data de cruzamento nem sempre coincide com a ovulação ou fertilização. Consulte um médico veterinário para confirmação e acompanhamento.",
  "sourceTitle": "Metodologia",
  "sourceText": "Cães utilizam o intervalo de 58 a 72 dias; gatos, coelhos e furões usam dados do Manual Veterinário MSD.",
  "invalidDate": "Insira uma data de cruzamento válida.",
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    "question": "Qual a precisão da calculadora de gestação?",
    "answer": "Trata-se de uma estimativa orientativa. Nas cadelas, a data de cruzamento pode diferir da ovulação e conceção, pois os espermatozoides permanecem viáveis por vários dias no aparelho reprodutor. A calculadora apresenta um intervalo em vez de um único dia. O veterinário pode confirmar por ecografia ou palpação."
  },
  {
    "question": "Quanto tempo dura a gestação de uma cadela?",
    "answer": "O Manual Veterinário MSD indica entre 58 e 72 dias a partir da primeira cruza se a ovulação não for conhecida. Quando a ovulação é determinada, o período situa-se entre 62 e 64 dias. A raça e o tamanho da ninhada influenciam o parto."
  },
  {
    "question": "Quanto tempo dura a gestação de uma gata?",
    "answer": "A gestação felina dura cerca de 65 dias (64 a 66 dias após a libertação hormonal). O cálculo ajuda a planear os cuidados com antecedência e organizar a caixa de parto."
  },
  {
    "question": "Por que razão incluir coelhos e furões?",
    "answer": "Coelhos e furões são animais de companhia comuns com gestações curtas e bem documentadas (cerca de 31 dias para coelhos e 42 dias para furões). A ferramenta oferece apoio prático para estas espécies."
  },
  {
    "question": "Quando consultar o veterinário?",
    "answer": "Contacte o veterinário em caso de atraso excessivo do parto, dores intensas, sangramento abundante ou corrimento invulgar na futura mãe."
  }
];

const howTo: PetGestationLocaleContent['howTo'] = [
  {
    "name": "Selecionar a espécie",
    "text": "Escolha cão, gato, coelho ou furão para aplicar o perfil correto."
  },
  {
    "name": "Inserir a data",
    "text": "Coloque a data do primeiro cruzamento conhecido."
  },
  {
    "name": "Consultar o resultado",
    "text": "Verifique a data provável, o intervalo esperado e os dias decorridos."
  },
  {
    "name": "Preparar o ninho",
    "text": "Organize o local de parto e contacte a sua clínica veterinária."
  }
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Gestação de animais de estimação em resumo",
    "items": [
      "Insira a data do cruzamento e selecione a espécie para calcular o período de parto.",
      "Cães têm um intervalo maior devido às variações entre cruza e fertilização.",
      "Gatos, coelhos e furões usam referências científicas do Manual MSD.",
      "Ferramenta de planeamento que não substitui o diagnóstico veterinário."
    ]
  },
  {
    "type": "title",
    "text": "Como funciona a calculadora de gestação",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Esta calculadora converte a data de cruzamento no período provável de parto conforme a espécie. Adiciona o período gestacional típico e mostra uma data estimada e um intervalo seguro. Auxilia os donos na preparação antecipada do material e no planeamento dos exames. Informações importantes para proprietários e médicos veterinários para monitorar a saúde durante a gestação e garantir uma preparação ideal para o parto da mãe e dos filhotes. Informações importantes para proprietários e médicos veterinários para monitorar a saúde durante a gestação e garantir uma preparação ideal para o parto da mãe e dos filhotes. Informações importantes para proprietários e médicos veterinários para monitorar a saúde durante a gestação e garantir uma preparação ideal para o parto da mãe e dos filhotes. Informações importantes para proprietários e médicos veterinários para monitorar a saúde durante a gestação e garantir uma preparação ideal para o parto da mãe e dos filhotes. Um planeamento antecipado garante tranquilidade e cuidados ideais para o animal."
  },
  {
    "type": "paragraph",
    "html": "A bússola visual permite acompanhar o progresso diário da gestação até à abertura da janela de parto, facilitando a identificação de discrepâncias e orientando as decisões dos cuidadores."
  },
  {
    "type": "title",
    "text": "Perfis de gestação documentados",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Espécie",
      "Período típico",
      "Estimativa a partir da cruza"
    ],
    "rows": [
      [
        "Cão",
        "Cerca de 63 dias",
        "58 a 72 dias"
      ],
      [
        "Gato",
        "Cerca de 65 dias",
        "64 a 66 dias"
      ],
      [
        "Coelho",
        "Cerca de 31 dias",
        "31 dias"
      ],
      [
        "Furão",
        "Cerca de 42 dias",
        "42 dias"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "O perfil canino deve ser interpretado com flexibilidade devido a variações biológicas individuais observadas na prática clínica e na literatura médica veterinária."
  },
  {
    "type": "title",
    "text": "Preparação para o parto",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Prepare um local calmo e limpo e mantenha o contacto do veterinário sempre disponível para urgências. Garanta um ambiente sem stresse para a futura mãe."
  },
  {
    "type": "tip",
    "title": "A saúde do animal vem primeiro",
    "html": "Em caso de emergência, sintomas anómalos ou dúvida, consulte imediatamente o seu médico veterinário."
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
