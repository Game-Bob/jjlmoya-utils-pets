import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'pet-daily-ration-calculator';
const title = '반려동물 일일 급여량 계산기';
const description = '여러분의 강아지나 고양이가 필요로 하는 정확한 사료 양을 계산해 보세요. 건강한 체중을 위한 수의학적 RER 및 DER 공식을 기반으로 한 도구입니다.';

const ui: PetRationUI = {
  toolTitle: '일일 급여량 계산기',
  sectionProfile: '1. 반려동물 프로필',
  labelAnimal: '반려동물',
  labelStage: '생애 단계',
  labelWeight: '몸무게',
  labelActivity: '신체 활동량',
  sectionDiet: '2. 식단 및 사료',
  labelDietType: '급여 방식',
  speciesDog: '강아지',
  speciesCat: '고양이',
  speciesRabbit: '토끼',
  stagePuppy: '퍼피 또는 키튼',
  stageAdult: '어덜트',
  stageSenior: '시니어',
  activityLow: '낮음',
  activityMod: '보통',
  activityHigh: '높음',
  dietDry: '건식 사료만',
  dietMixed25: '혼합 급여 (25%)',
  dietHalf: '절반씩 급여 (50%)',
  dietWet: '습식 사료만',
  manualAdjust: '수동 조정 (1-99%)',
  wetPercentLabel: '식단 내 습식 사료 비율 (%)',
  tagDry: '건식',
  tagWet: '습식',
  totalKcal: '총계',
  kcalUnit: 'kcal/일',
  statusPuppy: '빠른 성장 단계',
  statusSenior: '성숙한 대사 상태',
  statusLargeDog: '대형견: 관절 관리 필요',
  statusDefault: '균형 잡힌 체중 상태',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'RER이란 무엇이며 왜 중요한가요?',
    answer: 'RER ( Resting Energy Requirement , 휴식기 에너지 요구량 ) 은 반려동물 이 휴식 상태 에서 기본적인 생체 기능 을 유지 하는 데 필요한 최소 에너지 입니다 . 이는 일일 급여량 을 산출 하는 과학적 기초 가 되어 영양 부족 이나 과잉 을 미연에 방지 합니다 . RER 을 정확히 이해 하면 보호자 가 반려동물 의 생물학적 요구 에 맞춰 사료 양 을 조절 할 수 있어 건강 유지 에 큰 도움 이 됩니다 .',
  },
  {
    question: '중성화 수술이 반려동물의 급여량에 어떤 영향을 미치나요?',
    answer: '중성화 된 동물 은 기초 대사량 이 약 15% 에서 20% 정도 낮아지는 경향 이 있습니다 . 체중 증가 를 막기 위해 급여량 을 조금 줄이 거나 계산기 에서 활동 수준 을 " 낮음 " 으로 설정 하여 칼로리 섭취량 을 조절 해야 합니다 . 수술 후 호르몬 변화 로 인해 지방 축적 이 쉬워 지므로 식단 관리 가 더욱 중요해 집니다 .',
  },
  {
    question: '이 계산기를 새끼 강아지에게 사용해도 되나요?',
    answer: '성장기 새끼 강아지 는 훨씬 높은 에너지 ( RER 의 최대 3 배 ) 를 필요로 합니다 . 이 계산기 는 주로 성견 및 성묘 용 으로 최적화 되어 있습니다 . 새끼 강아지 의 경우 반드시 수의사 와 상담 하여 정교한 성장 단계 형 식단 계획 을 세우는 것 이 좋습니다 . 어린 시기 의 영양 불균형 은 성견 이 되었을 때 골격 문제 를 일으킬 수 있기 때문 입니다 .',
  },
  {
    question: '급여량을 하루에 몇 번 나누어 주는 것이 좋은가요?',
    answer: '계산 된 총량 을 하루 2 회 에서 3 회 정도 나누어 급여 하는 것 이 가장 이상적 입니다 . 이는 혈당 수치 를 안정적 으로 유지 하고 소화 효율 을 높이며 , 특히 위염전 위험 이 있는 대형견 품종 의 건강 을 지키는 데 효과적 입니다 . 또한 규칙적인 식사 는 반려동물 이 정서적 으로 안정감 을 느끼게 해줍니다 .',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: '품종 및 동물 선택 을 정확히 하세요', text: '강아지 와 고양이 는 대사량 과 체중 기준 이 다르기 때문에 올바른 대상 을 선택 하는 것 이 급여량 계산 의 첫걸음 입니다 .' },
  { name: '현재 몸무게 로 슬라이더 조정', text: '슬라이더 를 이용 하여 반려동물 의 현재 정확한 몸무게 ( kg ) 를 설정 하세요 . 정확한 에너지 요구량 을 계산 하려면 최근 에 측정 한 몸무게 데이터 가 필수적 입니다 .' },
  { name: '실제 활동 수준 을 정의 하세요', text: '하루 산책 시간 과 평소 의 에너지 수준 을 고려 하여 낮음 , 보통 , 높음 중에서 가장 적합한 라이프스타일 을 선택 하세요 .' },
  { name: '사료 포장지 의 칼로리 입력', text: '사료 포장지 에 적힌 kcal/kg 수치 를 확인 하여 입력 하세요 . 이 정보 가 정확 해야 그람 ( g ) 단위 의 급여량 이 건강 에 최적화 된 값 으로 산출 됩니다 .' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '수의 영양학 과 건강 관리 의 핵심 원칙',
    items: [
      'RER 공식 은 70 × ( 몸무게 kg )^0.75 이며 , 이는 현대 수의학적 칼로리 계산 의 표준 기초 입니다 .',
      'DER 은 RER 에 반려동물 의 구체적인 라이프스타일 계수 를 곱하여 하루 필요량 을 제공 합니다 .',
      '중성화 된 반려동물 은 호르몬 변화 로 인해 이전 보다 최대 20% 적은 칼로리 만을 필요로 할 수 있습니다 .',
      '오늘날 반려동물 의 50% 가 비만 을 겪고 있으며 , 이는 기대 수명 과 삶 의 질 을 무려 2 년 이상 단축 시킵니다 .',
      '정확한 급여량 을 산출 하는 것 은 보호자 가 실천 할 수 있는 가장 효과적인 " 예방 의학 " 중 하나 입니다 .',
      '주방 저울 을 사용 하여 과학적 식단 계획 에 따라 정확하게 계량 하여 급여 하는 습관 을 추천 합니다 .',
    ],
  },
  { type: 'title', text: '반려동물 의 최적 건강 을 위한 일일 급여량 계산 완벽 가이드', level: 2 },
  {
    type: 'paragraph',
    html: '강아지 나 고양이 에게 사료 를 올바르게 급여 하는 것 은 단순히 매일 아침 그릇 을 채우는 것 이상 의 의미 를 갖습니다 . 영양 은 반려동물 의 건강 , 장수 , 그리고 정서적 웰빙 을 지탱 하는 가장 근본적인 기둥 입니다 . <strong>반려동물 용 일일 급여량 계산기</strong> 는 오늘날 수의 영양학 에서 경고 하는 두 가지 문제 , 즉 영양 부족 과 특히 선진국 반려동물 의 50% 이상 이 겪고 있는 비만 을 방지 하기 위해 모든 책임감 있는 보호자 에게 필수적인 도구 입니다 .',
  },
  {
    type: 'paragraph',
    html: '본 가이드 에서는 칼로리 계산 뒤에 숨겨진 과학적 근거 , 사료 라벨 을 해석 하는 방법 , 그리고 연령 , 활동 수준 , 생리학적 상태 가 매일 필요로 하는 사료 양 에 어떻게 구체적 으로 영향 을 미치 는지 설명 합니다 . 일일 급여량 의 작은 조절 이 당뇨병 , 관절 문제 , 심장 건강 을 예방 하는 데 얼마나 큰 차이 를 만드는지 이해 하도록 도와 드립니다 .',
  },
  { type: 'title', text: '계산 뒤 의 과학 : RER 과 DER 의 연관성 이해 하기', level: 3 },
  {
    type: 'paragraph',
    html: '동물 이 매일 얼마나 먹어야 하는지 정확히 결정 하기 위해 수의사 와 영양학자 들 은 두 가지 핵심 개념 인 RER 과 DER 을 사용 합니다 . 이러한 약어 는 각각 Resting Energy Requirement ( 휴식기 에너지 요구량 ) 와 Daily Energy Requirement ( 일일 에너지 요구량 ) 를 의미 합니다 . 이들 의 상호작용 을 이해 하는 것 은 반려동물 의 체중 과 건강 을 안전 하고 통제 된 방식 으로 관리 하는 데 중요 합니다 .',
  },
  {
    type: 'paragraph',
    html: 'RER 은 동물 이 휴식 하는 동안 장기 기능 , 호흡 , 순환 과 같은 기본 기능 에 필요한 에너지 를 보충 합니다 . DER 은 이 값 에 활동량 이나 생애 단계 에 따른 라이프스타일 을 반영 하여 보정 합니다 . 이러한 값 들 을 올바르게 조정 함으로써 시간 이 지남 에 따라 건강한 신체 컨디션 점수 를 유지 할 수 있는 균형 을 이룰 수 있습니다 .',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: 휴식기 에너지', value: '70 × kg^0.75' },
      { label: '성장기 주니어 계수', value: 'x2.5 에서 x3.5' },
      { label: '활기찬 성체 계수', value: 'x1.6 에서 x2.0' },
      { label: '노년기 시니어 계수', value: 'x1.0 에서 x1.4' },
    ],
  },
  { type: 'title', text: '사료 포장지 의 영양 라벨 을 읽고 해석 하는 요령', level: 3 },
  {
    type: 'paragraph',
    html: '계산기 가 정확한 그람 ( g ) 수 를 제공 하려면 사용 중인 사료 의 <strong>에너지 밀도</strong> 또는 대사 에너지 값 을 알아야 합니다 . 이 값 은 보통 포장지 에 kcal/kg 또는 kcal/100g 단위 로 표시 되어 있습니다 . 이 수치 를 정확히 입력 하면 부족 하거나 과하지 않은 완벽한 식단 을 설계 할 수 있습니다 .',
  },
  {
    type: 'stats',
    items: [
      { label: '다이어트 용 저칼로리 사료', value: '약 3000 kcal/kg' },
      { label: '표준 성견 성묘용 사료', value: '약 3500 kcal/kg' },
      { label: '고에너지 성장기 전용 사료', value: '약 4000 kcal/kg' },
      { label: '캔 형태 의 일반 습식 사료', value: '약 1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: '수의사 가 전하는 영양 관리 메모',
    html: '모든 반려동물 은 자신 만의 고유한 대사 체계 를 가진 개별 체 입니다 . 계산기 는 과학적 근거 가 있는 출발점 을 제공 하지만 , 보호자 는 항상 반려동물 의 갈비뼈 부분 을 만져 보며 실제 신체 컨디션 을 모니터링 해야 합니다 . 강하게 누르지 않고 도 갈비뼈 가 기분 좋게 느껴 진다면 이상적인 체중 입니다 . 만약 지방 층 아래 에서 갈비뼈 를 찾기 어렵다면 급여량 을 제한 해야 할 때 일 수 있습니다 .',
  },
  { type: 'title', text: '고양이 와 강아지 기호성 및 영양 학적 차이', level: 3 },
  {
    type: 'paragraph',
    html: '고양이 는 완전 육식동물 이며 그들 의 대사 는 동물성 단백질 로부터 에너지 를 얻는 데 최적화 되어 있습니다 . 반면 강아지 는 좀 더 유연한 잡식 성향 을 보이지만 , 과도한 탄수화물 섭취 는 체중 증가 로 이어질 수 있으므로 주위 가 필요 합니다 . 두 종 모두 평생 동안 관절 과 심혈관계 에 과도한 부담 을 주지 않도록 통제 된 급여 체계 하에서 건강 하게 자랄 수 있습니다 .',
  },
  {
    type: 'paragraph',
    html: '단 몇 분 만 투자 하여 정확한 급여량 을 계산 하는 것 은 보호자 가 할 수 있는 가장 수익성 높은 예방 의학 투자 입니다 . 건강한 체중 은 만성 질환 의 위험 을 획기적 으로 줄여 주며 , 여러분 의 소중한 친구 에게 길고 활기찬 삶 을 선물 할 것 입니다 . 다음 번 정기 검진 시 수의사 와 상담 하여 현재 의 급여 전략 이 최상 인지 다시 한번 확인 하세요 .',
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
