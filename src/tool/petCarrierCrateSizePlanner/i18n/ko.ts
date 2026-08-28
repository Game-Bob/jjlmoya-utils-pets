import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'pet-carrier-crate-size-planner';
const title = '반려동물 이동장 크기 계산기';
const description = '반려견 또는 반려동물의 6가지 신체 치수를 바탕으로 최적의 이동장 내부 크기를 계산하고 항공 이동 가이드를 확인하세요.';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: '먼저 측정하고 안심하고 구매하세요.',
  journeyHint: '반려동물과 이동 수단을 선택한 뒤 치수를 입력하여 이동장 내부 규격 가이드를 확인하세요.',
  unitLegend: '표시 단위',
  speciesStep: '반려동물 선택',
  metricUnit: '미터법',
  imperialUnit: '야드파운드법',
  speciesLegend: '누가 이동하나요?',
  speciesDog: '개',
  speciesCat: '고양이',
  modeLegend: '주요 이동 수단은 무엇인가요?',
  modeCar: '자동차',
  modeAir: '비행기',
  measurementsLegend: '신체 치수 입력',
  noseTailLabel: '코끝부터 꼬리 시작점까지',
  noseTailHint: '꼬리의 곡선을 제외하고 측정하세요',
  elbowHeightLabel: '바닥부터 팔꿈치까지 높이',
  shoulderWidthLabel: '어깨 너비',
  standingHeightLabel: '서 있을 때의 높이',
  beddingLabel: '방석 또는 매트 두께',
  weightLabel: '몸무게',
  cmUnit: 'cm',
  inchUnit: '인치',
  kgUnit: 'kg',
  lbUnit: '파운드',
  snubNosedLabel: '단두종 (코가 짧은 품종)',
  snubNosedHint: '항공 이동 시 IATA 기준 추가 조정이 필요합니다. 수의사 및 항공사와 상담하세요.',
  presetLegend: '프로필 선택',
  presetCat: '고양이',
  presetSmallDog: '소형견',
  presetMediumDog: '중형견',
  presetLargeDog: '대형견',
  resultEyebrow: '권장 측정 프레임',
  resultTitle: '회전할 수 있는 충분한 공간',
  resultDimensionLabel: '최소 내부 시작 규격',
  lengthLabel: '길이 (깊이)',
  widthLabel: '너비',
  heightLabel: '높이',
  petWeightLabel: '몸무게',
  journeyLabel: '이동 수단',
  statusComfort: '기본 편의 기준',
  statusAirReview: '항공 수송 검토 사항',
  statusSnub: '단두종 조정 적용됨',
  resultDetail: '구매 및 출발 전에 실제 이동장 내부 크기, 문 크기, 환기 상태, 규정을 확인하세요.',
  checklistTitle: '4가지 신체 체크',
  checklistStand: '머리나 귀가 천장에 닿지 않고 똑바로 서거나 앉을 수 있습니다.',
  checklistTurn: '서 있는 상태에서 자연스럽게 방향을 바꿀 수 있습니다.',
  checklistLie: '매트 위에서 자연스러운 자세로 누울 수 있습니다.',
  checklistAirline: '항공 이용 시 항공사 제한, 환기구, 잠금장치, 방수 바닥을 확인하세요.',
  invalidInput: '각 치수와 몸무게에 양수 값을 입력해 주세요.',
  noteTitle: '공간 가이드용이며 항공 탑승 승인서가 아닙니다',
  noteText: '규정은 항공사, 차량, 동물의 상태에 따라 달라집니다. 단두종이나 건강상 우려가 있는 경우 수의사의 진단을 받으세요.',
  methodTitle: '계산 방법',
  methodText: 'IATA(국제항공운송협회) 지침을 바탕으로 계산합니다. 내부 길이는 코부터 꼬리 시작점＋팔꿈치 높이의 절반, 너비는 어깨 너비의 2배, 높이는 서 있을 때 높이＋매트 두께입니다.',
  blueprintLabel: '반려동물이 내부 들어간 상태와 길이 높이 가이드라인을 보여주는 측정 도면',
  dimensionInside: '내부 규격',
  checkMark: '확인',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: '이동장을 고를 때 반려동물의 치수를 어떻게 측정해야 하나요?',
    answer: '코끝부터 꼬리 시작점, 바닥부터 팔꿈치 관절, 어깨의 가장 넓은 부분, 바닥부터 머리나 귀의 가장 높은 곳까지 측정합니다. 매트 두께는 별도로 더합니다.',
  },
  {
    question: '이 계산기는 어떤 내부 치수를 계산하나요?',
    answer: '몸길이와 팔꿈치 높이로 필요한 최소 길이, 어깨 너비로 내부 너비, 매트를 포함한 전체 높이를 추정합니다.',
  },
  {
    question: '계산 결과가 항공사의 탑승 승인을 보장하나요?',
    answer: '보장하지 않습니다. 비행기 모드는 IATA 기준 공식을 사용하지만 각 항공사마다 고유한 규정이 있으므로 반드시 최신 규정을 확인해야 합니다.',
  },
  {
    question: '단두종은 왜 항공 이동 시 더 큰 이동장이 필요한가요?',
    answer: 'IATA 지침에서는 체온 상승과 호흡 곤란을 예방하기 위해 단두종 품종에 대해 더 여유 있는 이동장 사용을 권장합니다.',
  },
  {
    question: '차량용 이동장은 무조건 큰 것이 좋은가요?',
    answer: '아닙니다. 서고, 돌고, 눕는 동작이 충분히 가능하면서도 차량 내에서 흔들리지 않게 고정할 수 있는 적절한 크기가 좋습니다.',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: '이동 수단 선택', text: '자동차 또는 비행기를 선택하여 검토 기준을 설정합니다.' },
  { name: '6가지 치수 입력', text: '반려동물이 편안한 상태일 때 신체 치수와 몸무게를 측정합니다.' },
  { name: '내부 규격 확인', text: '표시된 길이, 너비, 높이를 기준으로 시중의 이동장을 비교합니다.' },
  { name: '규정 및 구조 확인', text: '구매 전 잠금장치, 환기구, 항공사 및 차량 고정 기준을 확인합니다.' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '반려동물 에게 딱 맞는 이동장 선택 완벽 가이드 및 안내',
    items: [
      '몸무게 만으로 선택하지 말고 반드시 신체 치수를 정확히 상세하게 측정 하세요',
      '실제 이동장 을 비교할 때는 외경이 아닌 유효 내경을 꼼꼼히 신중하게 확인 합니다',
      '잠금장치 와 환기구 배치를 사전에 철저히 점검 하여 안전을 확보 하세요',
      '항공 운송 시 항공사 규정과 전문가 수의사 상담이 필수적 으로 요구 됩니다',
    ],
  },
  { type: 'title', text: '이동장 내부 크기 계획 방법 및 주의사항 안내', level: 2 },
  {
    type: 'paragraph',
    html: '적절한 이동장 은 서기 앉기 방향 바꾸기 눕기 등 4가지 자연스러운 동작이 가능한 공간을 제공해야 합니다 . 본 계산기 는 신체 치수를 바탕으로 필요한 내부 규격을 도출 합니다 . 반려동물 이 이동 중 스트레스 나 부상을 받지 않도록 정확한 측정이 필요합니다 .',
  },
  {
    type: 'paragraph',
    html: '산출된 규격은 내부 유효 공간입니다 . 두꺼운 방석이나 식기 물병을 넣으면 실제 공간이 줄어든다는 점에 유의하세요 . 시중 제품을 비교할 때는 가장 좁은 내부 폭과 낮 은 천장 높이를 기준으로 선택해야 합니다 . 약간이라도 좁다면 한 치수 큰 이동장을 선택하는 것이 바람직합니다 .',
  },
  { type: 'title', text: '각 신체 측정 항목의 중요성 및 역할 과 설명', level: 2 },
  {
    type: 'table',
    headers: ['측정 항목', '역할', '계산에서의 활용'],
    rows: [
      ['코부터 꼬리 시작점', '몸을 웅크리지 않은 기준 길이 설정', '길이'],
      ['바닥부터 팔꿈치', '방향 전환 시 발밑 여유 공간 확보', '길이'],
      ['어깨 너비', '가장 넓은 부위의 폭 확보', '너비'],
      ['서 있을 때 높이', '머리와 귀가 천장에 닿는 것 방지', '높이'],
      ['매트 두께', '방석 설치 후의 유효 높이 유지', '높이'],
      ['몸무게', '이동장의 권장 하중 확인', '검토'],
    ],
  },
  {
    type: 'paragraph',
    html: '계산 공식은 IATA 의 살아있는 동물 운송 규정 을 따릅니다 . 내부 길이는 몸길이 ＋ 팔꿈치 높이의 절반 너비는 어깨 너비의 2배 높이는 전체 높이 ＋ 매트 두께로 산정됩니다 . 장시간 이동에도 반려동물 이 편안하게 지낼 수 있는 안전한 규격입니다 .',
  },
  { type: 'title', text: '항공 이동 시 주의사항 및 단두종 안내 사항', level: 2 },
  {
    type: 'paragraph',
    html: '치수 계산만으로 탑승 승인이 완료되는 것은 아닙니다 . 기종 계절 환기 조건 등이 복합적으로 작용하므로 사전 문의가 필요합니다 . 단두종 은 호흡 곤란 위험이 있으므로 더 넓은 공간과 수의사 상담이 필수입니다 . 사전 조사를 철저히 진행하세요 .',
  },
  {
    type: 'tip',
    title: '실제 공간 확인 팁 및 관리 방법 과 체크리스트',
    html: '조용한 환경에서 반려동물을 이동장에 넣고 내부 동작을 확인하세요 . 답답해 보인다면 한 치수 큰 모델을 선택하는 것이 좋습니다 . 반려동물의 건강과 안전을 위해 신중하게 결정하세요 .',
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
