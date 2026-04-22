import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'pet-age-calculator';
const title = '반려동물 나이 계산기';
const description = '여러분의 강아지나 고양이의 실제 나이를 사람 나이로 환산해 보세요. "7을 곱하는 규칙"은 이제 잊으세요. 최신 수의학에 기반한 계산기를 사용해 정확한 나이를 알아보세요.';

const ui: PetAgeUI = {
  toolTitle: '나이 계산기',
  toolSubtitle: '여러분의 털 뭉치 친구는 실제로 몇 살일까요?',
  petNameLabel: '이름 (선택 사항)',
  petNamePlaceholder: '예: 바디',
  petTypeDog: '강아지',
  petTypeCat: '고양이',
  sizeSmall: '소형',
  sizeMedium: '중형',
  sizeLarge: '대형',
  sizeGiant: '초대형',
  birthYearLabel: '출생 연도',
  humanAgeLabel: '사람 나이로 환산하면',
  humanAgeUnit: '살',
  humanAgeYears: '살',
  lifeStageLabel: '생애 단계',
  milestoneLabel: '다음 성장 단계',
  shareBtn: '결과 공유하기',
  shareSuccess: '복사되었습니다! 카드를 여는 중...',
  humanAgeTitle: '마법의 나이',
  recalculateBtn: '다른 나이 계산하기',
  realAgeLabel: '실제 나이',
  defaultPetName: '여러분의 반려동물',
  stageDogPuppy: '장난꾸러기 강아지',
  stageDogTeen: '반항적인 청소년기',
  stageDogAdult: '건강한 성견기',
  stageDogMature: '기품 있는 성숙기',
  stageDogSenior: '지혜로운 노령기',
  stageCatKitten: '호기심 많은 아기 고양이',
  stageCatYouth: '활기찬 청년기',
  stageCatReign: '근엄한 성묘기',
  stageCatVeteran: '관리를 받는 베테랑기',
  stageCatVenerable: '경건한 장수묘기',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: '강아지 나이 1살이 사람 나이 7살과 같다는 게 사실인가요?',
    answer: '아니요. 그것은 매우 단순화된 규칙이며 최신 수의학에서는 더 이상 사실이 아닌 것으로 밝혀졌습니다. 강아지는 처음 2년 동안 매우 빠르게 성숙하며 그 이후에는 속도가 느려지고, 무게와 품종에 따라 큰 차이가 있습니다. 최근 연구에 따르면 세포 수준에서의 노화 속도는 견종의 크기에 따라 크게 달라집니다.',
  },
  {
    question: '대형견이 더 빨리 늙는 이유는 무엇인가요?',
    answer: '대형견은 대사와 성장이 더 활발하여 세포에 더 큰 산화 스트레스가 발생합니다. 이는 생물학적 노화를 촉진하여 소형견보다 기대 수명이 짧다는 것을 의미합니다. 대형견의 1년은 소형견의 1년보다 신체에 더 많은 부담을 줍니다.',
  },
  {
    question: '고양이는 사람과 비교하여 어떻게 나이가 드나요?',
    answer: '고양이는 생후 1개월에 유아기를 마치고, 6개월에 사춘기를 거쳐, 2세에 성묘(사람 나이 24세 해당)가 됩니다. 그 이후에는 고양이의 1년이 사람의 약 4년에 해당합니다. 고양이는 강아지보다 좀 더 일정한 노화 곡선을 그리는 경향이 있습니다.',
  },
  {
    question: '몇 살부터 노령(Senior) 반려동물로 간주되나요?',
    answer: '일반적으로 예상 수명의 75%에 도달했을 때 노령 반려동물로 간주됩니다. 강아지의 경우 품종에 따라 다르지만 보통 7세에서 9세 사이이며, 고양이의 경우 건강 상태에 따라 보통 7세에서 11세부터입니다. 이 시기부터는 정기적인 건강 검진이 필수적입니다.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: '반려동물 유형 선택', text: '정확한 생물학적 공식을 적용하기 위해 먼저 강아지인지 고양이인지 선택하세요.' },
  { name: '크기 입력(강아지 전용)', text: '강아지의 경우 몸무게가 핵심입니다. 소형(10kg 미만), 중형(10-25kg), 대형(25-45kg), 초대형(45kg 이상) 중에서 정확히 표시하세요.' },
  { name: '출생 연도 입력', text: '정확한 연대기적 나이를 계산하려면 반려동물이 태어난 연도를 정확하게 입력하세요.' },
  { name: '생애 단계 분석', text: '계산 결과를 확인하여 사람 나이와 비교했을 때 현재 반려동물이 어느 단계에 있는지, 그리고 어떤 관리가 필요한지 분석하세요.' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '반려동물의 노화에 대해 알아야 할 필수 지식',
    items: [
      '"7의 법칙"은 과학적 근거가 없는 미신입니다. 강아지는 첫 2년 동안 지수 함수적으로 빠르게 성숙합니다.',
      '1세 강아지는 사람 나이 15세와 비슷하며, 2세 강아지는 이미 사람 나이 24세와 같은 수준의 성숙도를 보입니다.',
      '대형견은 신체적 부하가 크기 때문에 2세 이후 소형견보다 훨씬 더 빨리 늙는 경향이 있습니다.',
      '고양이는 강아지보다 좀 더 선형적인 곡선을 따르며, 2세 이후 고양이의 1년은 사람의 4년과 같습니다.',
      '반려동물의 생물학적 나이를 아는 것은 적절한 예방 의학적 조치를 취하는 데 결정적인 역할을 합니다.',
      '정기적인 수의사 방문은 노화 과정에서 발생할 수 있는 질환을 조기에 발견하는 데 도움이 됩니다.',
    ],
  },
  { type: 'title', text: '반려동물의 나이에 관한 최신 수의학적 진실', level: 2 },
  {
    type: 'paragraph',
    html: '여러분의 사랑스러운 반려동물이 실제로 몇 살인지 정확히 알고 계신가요? 2살 된 고양이가 이미 24살 된 사람의 성숙도를 가지고 있다는 사실은 많은 반려인들을 놀라게 합니다. 과거에 널리 알려졌던 "강아지 나이에 7을 곱하는 규칙"은 생물학적 실제를 반영하지 못하는 지나치게 단순화된 미신입니다. 반려동물은 생애 초기인 첫 2년 동안 믿을 수 없을 만큼 빠른 속도로 성숙하며, 이 시기에 이미 신체적, 성적 성숙의 정점에 도달하게 됩니다. 그 이후에는 노화의 곡선이 다소 완만해지며 서서히 진행됩니다.',
  },
  {
    type: 'paragraph',
    html: '이러한 노화 과정은 종과 품종, 그리고 생활 환경에 따라 매우 큰 차이를 보입니다. 최신 유전학 연구에 따르면, 노화는 단순히 시간의 흐름이 아니라 세포 내에서 일어나는 복잡한 생화학적 변화의 결과입니다. 특히 산화 스트레스와 DNA의 변화는 반려동물의 노화 속도를 결정하는 중요한 요인 중 하나입니다. 따라서 반려인들은 숫자로 된 나이뿐만 아니라 반려동물이 보여주는 신체적 신호에도 주의를 기울여야 합니다.',
  },
  { type: 'title', text: '나이 계산의 과학적 배경과 원리', level: 3 },
  {
    type: 'paragraph',
    html: '이 계산 도구는 <strong>미국 동물병원 협회(AAHA)</strong>에서 제공하는 공식 임상 가이드라인과 개의 DNA 메틸화를 분석한 최신 에피제네틱 시계(Epigenetic Clock) 연구를 기반으로 설계되었습니다. 이를 통해 기존의 단순 산술 방식보다 훨씬 더 실제 생물학적 연령에 근접한 예측치를 제공할 수 있습니다.',
  },
  {
    type: 'paragraph',
    html: '에피제네틱 연구는 시간이 지남에 따라 DNA에 축적되는 화학적 변화를 측정하여 생물의 실제 내부 나이를 측정하는 혁신적인 방법입니다. 수만 마리의 반려동물 데이터를 분석하여 도출된 이 수치들은 반려인이 반려동물의 각 생애 단계에 맞는 영양 공급과 의료 서비스를 계획하는 데 귀중한 지침이 됩니다.',
  },
  {
    type: 'table',
    headers: ['유형', '1년차', '2년차', '3년차 이후'],
    rows: [
      ['고양이', '사람 나이 15세', '사람 나이 24세', '매년 약 4세씩 추가'],
      ['소형견', '사람 나이 15세', '사람 나이 24세', '매년 약 5세씩 추가'],
      ['중형견', '사람 나이 15세', '사람 나이 24세', '매년 약 6세씩 추가'],
      ['대형견', '사람 나이 15세', '사람 나이 24세', '매년 약 7세씩 추가'],
      ['초대형견', '사람 나이 15세', '사람 나이 24세', '매년 약 8세씩 추가'],
    ],
  },
  { type: 'title', text: '주요 생애 단계별 특징과 관리 방법', level: 3 },
  {
    type: 'paragraph',
    html: '반려동물의 실제 나이를 이해하는 것은 단순히 흥미를 넘어, 각 단계에서 필요한 의학적 및 정서적 요구를 충족시키는 데 도움을 줍니다. 생애 주기마다 집중해야 할 건강 포인트가 다릅니다.',
  },
  {
    type: 'card',
    title: '퍼피 또는 주니어 단계(0세에서 1세까지)',
    icon: 'mdi:star-shooting',
    html: '이 시기는 폭발적인 성장이 일어나는 골든 타임입니다. 뼈가 빠르게 자라고 유치가 영구치로 바뀌며, 뇌는 주변의 모든 정보를 스펀지처럼 흡수합니다. 따라서 기초 예방 접종과 초기 사회화 교육이 이 시기에 반드시 이루어져야 합니다. 평생의 건강과 성격이 결정되는 가장 중요한 시기라고 할 수 있습니다.',
  },
  {
    type: 'card',
    title: '어덜트 또는 성숙 단계(2세에서 6세까지)',
    icon: 'mdi:shield-check',
    html: '신체적으로나 정신적으로 가장 건강하고 활기찬 전성기입니다. 성격이 완전히 형성되어 안정감을 주는 시기이기도 합니다. 이 골든 타임에는 규칙적인 고강도 활동을 통해 근육량을 유지하고, 비만을 예방하기 위한 식단 관리에 집중해야 합니다. 이 시기의 올바른 생활 습관이 노년기의 삶의 질을 결정합니다.',
  },
  {
    type: 'card',
    title: '시니어 또는 노령 단계(7세 이상)',
    icon: 'mdi:heart-pulse',
    html: '사람과 마찬가지로 입 주변에 흰 털이 늘어나고 수면 시간이 눈에 띄게 증가합니다. 대사 속도가 느려지므로 사료의 양과 질을 조절해야 합니다. 이 단계부터는 6개월마다 정기 검진을 받아 관절염, 신장 질환, 치아 건강 등을 세심하게 관리해야 합니다. 노화에 따른 인지 기능 변화에도 주의를 기울여야 합니다.',
  },
  {
    type: 'tip',
    title: '전문의의 조언',
    html: '계산된 나이는 수의학적 통계에 기반한 평균적인 생물학적 추정치입니다. 실제 노화 속도는 유전적 요인, 식단, 운동량, 그리고 스트레스 수준과 같은 개별적인 생활 방식에 의해 크게 달라질 수 있습니다. 따라서 이 계산 결과를 참고하되, 정확한 건강 상태와 개별적인 관리 계획에 대해서는 반드시 전문 수의사와 정기적으로 상담하시기 바랍니다.',
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
  faqTitle: '자주 묻는 질문',
  faq: '참고 문헌',
  bibliography,
  howTo,
  schemas,
};
