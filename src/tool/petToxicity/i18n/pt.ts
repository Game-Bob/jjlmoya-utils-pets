import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'verificador-alimentos-toxicos-caes-gatos';
const title = 'Verificador de alimentos tóxicos para cães e gatos';
const description = 'Verifique alimentos perigosos para cães e gatos, entenda os sinais de alerta e saiba quando contactar um veterinário.';

const ui: PetToxicityUI = {
  "journeyHint": "Selecione o animal, abra o atlas de alimentos e leia o aviso específico da espécie antes de decidir.",
  "speciesLabel": "Espécie",
  "speciesDog": "Cão",
  "speciesCat": "Gato",
  "speciesDogMeta": "Perfil canino",
  "speciesCatMeta": "Perfil felino",
  "foodLabel": "Alimento ou ingrediente",
  "foodPlaceholder": "Escolha um alimento",
  "foodMenuHint": "A lista muda com o animal porque o risco é específico para cada espécie.",
  "resultEyebrow": "O atlas de alimentos indica",
  "resultEmpty": "Escolha um alimento para abrir a ficha de segurança.",
  "sceneLabel": "Mapa de exposição",
  "sceneReady": "Escolha um alimento",
  "sceneSelected": "Ficha específica aberta",
  "riskCritical": "Urgência crítica",
  "riskHigh": "Risco elevado",
  "riskCaution": "Precaução",
  "riskUnknown": "Dados insuficientes",
  "riskLabel": "Nível de risco",
  "whyLabel": "Por que é importante",
  "signsLabel": "Sinais a observar",
  "actionLabel": "O que fazer",
  "callVetLabel": "O passo mais seguro é aconselhamento profissional.",
  "callVetText": "Uma calculadora não substitui o exame veterinário nem calcula doses seguras.",
  "sourceLabel": "Evidências utilizadas",
  "sourceText": "Perfis baseados em diretrizes de toxicologia veterinária da ASPCA, FDA e Manual Veterinário MSD.",
  "emergencyTitle": "Se o seu animal ingeriu algo preocupante",
  "emergencyText": "Ligue imediatamente para o veterinário ou clínica de urgência. Guarde a embalagem, lista de ingredientes e quantidade estimada.",
};

const faq: PetToxicityLocaleContent['faq'] = [
  {
    "question": "Este verificador garante que o meu animal está seguro?",
    "answer": "Não. É um guia educativo sobre perigos alimentares, não um diagnóstico. Contacte sempre um veterinário em caso de ingestão."
  },
  {
    "question": "Que alimentos são muito perigosos para cães?",
    "answer": "Xilitol, chocolate, cafeína, uvas, passas, cebola, alho, álcool e massa de levedura crua."
  },
  {
    "question": "Cebola e alho são perigosos para gatos?",
    "answer": "Sim. Os gatos são especialmente suscetíveis a danos nos glóbulos vermelhos causados por plantas Allium."
  },
  {
    "question": "Por que o xilitol mostra avisos diferentes para cães e gatos?",
    "answer": "O xilitol causa uma queda rápida e grave de açúcar no sangue dos cães. Nos gatos, o risco é menos documentado pela FDA."
  },
  {
    "question": "O que fazer se o alimento não estiver listado?",
    "answer": "A ausência na lista não garante segurança. Guarde a embalagem e consulte um veterinário."
  }
];

const howTo: PetToxicityLocaleContent['howTo'] = [
  {
    "name": "Selecionar a espécie",
    "text": "Escolha Cão ou Gato para carregar as informações específicas."
  },
  {
    "name": "Escolher o alimento",
    "text": "Abra o menu e selecione o ingrediente correspondente."
  },
  {
    "name": "Ler a ficha de segurança",
    "text": "Verifique o nível de risco, sintomas prováveis e ação recomendada."
  },
  {
    "name": "Contactar um profissional",
    "text": "Em caso de ingestão real, ligue para o veterinário com os detalhes do produto."
  }
];

const seo: PetToxicityLocaleContent['seo'] = [
  {
    type: 'summary',
    title: "Verificação rápida de segurança alimentar em cães e gatos",
    items: [
      "Selecione a espécie primeiro, pois o mesmo ingrediente tem impactos diferentes.",
      "Utilize as fichas para entender o perigo e a urgência necessária.",
      "Trate a ingestão de xilitol em cães como uma emergência médica.",
      "Contacte um veterinário para qualquer ingestão confirmada."
],
  },
  {
    type: 'title',
    text: "Como usar responsavelmente o verificador de alimentos tóxicos",
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Este verificador de alimentos tóxicos foi criado para apoiar nos primeiros minutos após um cão ou gato ingerir algo inadequado. Selecione o animal e abra a ficha para organizar o contacto veterinário. Evita sobressaltos e orienta a conversa de forma clara no atendimento de urgência. As informações fornecidas ajudam a identificar rapidamente a gravidade potencial, os sintomas visíveis e as recomendações prioritárias para orientar o tutor.",
  },
  {
    type: 'paragraph',
    html: "A diferenciação de espécies é essencial. Cães e gatos metabolizam substâncias de forma distinta. O xilitol provoca hipoglicemia severa em cães, enquanto a cebola afeta os glóbulos vermelhos dos gatos. Identificar corretamente estes pontos garante uma decisão prudente antes do contacto clínico. A avaliação clínica precoce por um profissional de medicina veterinária é fundamental para prevenir complicações hepatotóxicas ou renais irreversíveis.",
  },
  {
    type: 'title',
    text: "Principais perigos alimentares e fatores-chave",
    level: 2,
  },
  {
    type: 'table',
    headers: ["Alimento ou ingrediente","Perigo principal","Contexto importante"],
    rows: [["Chocolate e cafeína","Efeitos cardíacos e nervosos","A concentração de cacau e o peso são determinantes."],["Xilitol","Queda rápida de açúcar em cães","Verifique pastilhas sem açúcar e doces."],["Uvas e passas","Possível lesão renal em cães","Não considere pequenas quantidades seguras."],["Cebola e alho","Danos nos glóbulos vermelhos","Formas em pó e desidratadas concentram o risco."],["Massa de levedura crua","Expansão do estômago e álcool","A fermentação gera pressão e álcool."]],
  },
  {
    type: 'paragraph',
    html: "Além da toxicidade química, existem riscos físicos como obstruções por ossos e inflamações no pâncreas causadas por alimentos gordurosos. A observação cuidadosa é vital para agir a tempo com o apoio de uma equipa médica. Os ossos cozinhados podem fragmentar-se em lascas afiadas que perfuram a mucosa digestiva, enquanto as refeições ricas em gordura despoletam crises dolorosas de pancreatite.",
  },
  {
    type: 'title',
    text: "O que fazer após uma possível exposição",
    level: 2,
  },
  {
    type: 'list',
    items: [
      "Retire o alimento restante e guarde a embalagem.",
      "Anote espécie, peso, alimento, quantidade e hora.",
      "Ligue para o veterinário ou centro antiveneno.",
      "Não provoque o vómito sem indicação médica.",
      "Procure ajuda imediata em caso de convulsões ou colapso."
],
  },
  {
    type: 'tip',
    title: "A saúde do animal em primeiro lugar",
    html: "Os sintomas podem demorar a surgir. Não espere que o animal piore para pedir ajuda.",
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
