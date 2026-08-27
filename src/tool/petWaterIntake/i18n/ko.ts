import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'dog-cat-water-intake-calculator';
const title = '강아지 고양이 하루 일일 권장 음수량 계산기';
const description = '체중, 사료 종류, 활동량, 기온을 바탕으로 개와 고양이의 하루 필요 음수량을 계산합니다.';

const ui: PetWaterIntakeUI = {
  "journeyHint": "반려동물을 선택하고 체중을 입력한 후 사료와 기온을 설정하세요.",
  "instantHint": "선택 항목을 변경하면 수분량이 즉시 업데이트됩니다. 참고용 가이드라인입니다.",
  "unitLegend": "단위",
  "metricUnit": "미터법",
  "imperialUnit": "야드파운드법",
  "speciesLegend": "물그릇의 주인은 누구인가요?",
  "speciesDog": "강아지",
  "speciesCat": "고양이",
  "speciesDogMeta": "유지 기준 kg당 60 mL",
  "speciesCatMeta": "유지 기준 kg당 40 mL",
  "weightLabel": "체중",
  "weightHint": "현재의 건강한 체중을 입력하세요.",
  "weightKg": "kg",
  "weightLb": "lb",
  "dietLegend": "사료를 통한 수분 공급량",
  "dietDry": "주로 건식 사료 (키블)",
  "dietDryMeta": "수분의 대부분을 물그릇에서 섭취",
  "dietMixed": "혼합 급여 (건식+습식)",
  "dietMixedMeta": "수분의 일부를 식사에서 섭취",
  "dietWet": "주로 습식 사료 (캔/파우치)",
  "dietWetMeta": "식사가 수분의 대부분을 공급",
  "activityLegend": "오늘의 활동량",
  "activityCalm": "차분함 / 휴식",
  "activityTypical": "보통 / 일반적",
  "activityActive": "활동적 / 운동량 많음",
  "heatLegend": "기온 및 날씨",
  "heatNormal": "적온 / 보통",
  "heatWarm": "따뜻함 / 약간 더움",
  "heatHot": "더움 / 폭염",
  "resultEyebrow": "수분량 권장치",
  "totalRangeLabel": "총 필요 수분량 (모든 공급원 포함)",
  "drinkingRangeLabel": "물그릇에서 마셔야 할 권장량",
  "totalRangeHint": "사료의 수분을 포함한 하루 전체 필요 수분량입니다.",
  "drinkingRangeHint": "물그릇에서 직접 마시는 권장 수분량입니다.",
  "statusEveryday": "일상적인 환경",
  "statusActive": "활동량이 많은 날",
  "statusWarm": "더운 날씨",
  "statusDemanding": "고부하 환경",
  "statusDetailEveryday": "추가적인 더위나 운동 자극이 없는 기본 유지 프로필입니다.",
  "statusDetailActive": "운동으로 인해 수분 손실이 증가합니다. 항상 신선한 물을 제공하세요.",
  "statusDetailWarm": "더위로 인해 헐떡임이 증가합니다. 그늘과 시원한 환경이 최우선입니다.",
  "statusDetailDemanding": "높은 활동량과 더위가 결합되었습니다. 반려동물의 상태를 주의 깊게 관찰하세요.",
  "resultEmpty": "올바른 체중을 입력하면 수분량이 표시됩니다.",
  "sceneAria": "선택한 반려동물의 수분 탱크",
  "sceneTotal": "총 수분량",
  "sceneBowl": "하루 권장 범위의 중간값",
  "methodTitle": "계산 방법",
  "methodText": "AAHA 가이드라인(강아지 60mL/kg, 고양이 40mL/kg)을 기준으로 사료와 기온을 반영하여 산출합니다.",
  "noteTitle": "물그릇은 진단 도구가 아닙니다",
  "noteText": "항상 깨끗하고 신선한 물을 마실 수 있게 해주세요. 음수량이나 배뇨량에 급격한 변화가 있으면 수의사와 상담하세요.",
  "invalidWeight": "올바른 체중을 입력해 주세요.",
  "weightRange": "체중은 0.5 kg에서 100 kg 사이여야 합니다."
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    "question": "강아지나 고양이는 하루에 물을 얼마나 마셔야 하나요?",
    "answer": "AAHA의 일반 수의학 가이드라인에 따르면 강아지는 체중 1kg당 약 60mL, 고양이는 약 40mL가 하루 기본 권장 수분량입니다. 식단, 기온, 활동량에 따라 달라집니다."
  },
  {
    "question": "습식 사료를 먹이면 물 마시는 양이 줄어드나요?",
    "answer": "네, 습식 캔 사료는 수분 함량이 75%~82%에 달해 식사만으로 많은 수분을 섭취합니다. 따라서 물그릇에서 마시는 양이 줄어드는 것은 정상입니다."
  },
  {
    "question": "음수량 변화로 병원에 가야 하는 시점은 언제인가요?",
    "answer": "갑자기 물을 너무 많이 마시거나(다뇨/다음) 전혀 마시지 않는 증상이 보이면 신장 질환이나 당뇨병의 신호일 수 있으므로 즉시 수의사의 진료를 받으세요."
  },
  {
    "question": "더위나 운동으로 수분 필요량이 늘어나나요?",
    "answer": "네, 체온 조절을 위한 헐떡임(팬팅)으로 수분이 빠르게 손실되므로 더운 날이나 운동 후에는 신선한 물을 충분히 공급해야 합니다."
  }
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  {
    "name": "반려동물 종류 및 체중 선택",
    "text": "강아지 또는 고양이를 선택하고 현재의 건강한 체중을 kg 또는 lb 단위로 입력합니다."
  },
  {
    "name": "사료 종류 지정",
    "text": "건식, 혼합, 습식 중 평소 급여하는 사료 유형을 선택하여 식사 수분량을 반영합니다."
  },
  {
    "name": "활동량 및 기온 설정",
    "text": "오늘의 운동량과 기온 수준을 설정하여 호흡으로 인한 수분 손실을 계산합니다."
  },
  {
    "name": "권장 수분량 확인",
    "text": "하루 총 필요 수분량과 물그릇에서 마셔야 할 권장 음수량을 확인합니다."
  }
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "강아지 고양이 수분 섭취 핵심 가이드",
    "items": [
      "기본 유지량: 강아지는 하루 약 60 mL/kg, 고양이는 약 40 mL/kg이 AAHA 권장 기준입니다.",
      "사료의 영향: 습식 사료는 최대 80% 수분을 함유하여 물그릇 섭취량을 크게 줄여줍니다.",
      "더위와 운동: 헐떡임으로 수분 손실이 늘어나므로 항상 신선한 물이 필요합니다.",
      "주의 신호: 음수량의 급격한 변화는 즉각적인 수의사 진료가 필요합니다.",
      "신선한 물 제공: 집안 여러 곳에 깨끗한 물그릇을 배치하세요."
    ]
  },
  {
    "type": "title",
    "text": "강아지와 고양이의 하루 일일 권장 음수량 계산 및 관리",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "반려동물의 적절한 수분 공급은 신진대사, 소화 작용, 관절 윤활 및 신장 건강 유지에 필수적입니다. 성견과 성묘 몸무게의 약 60%~70%는 수분으로 이루어져 있으며, 미세한 수분 부족조차 중요한 생리적 기능을 저하시킬 수 있습니다. 미국동물병원협회(AAHA) 수의학 문헌에 따르면 강아지는 kg당 약 60 mL, 고양이는 kg당 약 40 mL가 하루 기본 필요 유지량입니다."
  },
  {
    "type": "paragraph",
    "html": "그러나 이 수치는 하루에 필요한 '총 필요 수분량'을 의미하며, 반드시 물그릇에서 직접 마셔야 하는 물의 양만을 뜻하지는 않습니다. 반려동물의 하루 총 수분 공급원은 마시는 물, 사료 속에 포함된 수분, 그리고 체내 세포 호흡을 통해 생성되는 대사수로 구성됩니다. 이러한 차이를 이해하면 습식 사료를 먹일 때 아이들이 물을 적게 마시더라도 불필요한 걱정을 줄일 수 있습니다."
  },
  {
    "type": "title",
    "text": "총 필요 수분량과 물그릇 음수량의 차이점",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "급여하는 사료의 형태는 반려동물이 물그릇에서 얼마나 많은 물을 스스로 마실지 결정하는 가장 결정적인 요인입니다. 시판 건식 사료(키블)의 수분 함량은 6%~10%에 불과하므로, 아이들은 하루 필요 수분량의 대부분을 물그릇에서 직접 섭취해야 합니다. 반면 캔이나 파우치 형태의 습식 사료는 수분 함량이 75%~82%에 달합니다. 습식 사료만 먹는 아이들은 식사 자체에서 수분을 충족하므로 물그릇을 찾는 횟수가 현저히 적어지는 것이 지극히 정상적인 생리 현상입니다."
  },
  {
    "type": "table",
    "headers": [
      "요인",
      "수분량에 미치는 영향",
      "주요 고려사항"
    ],
    "rows": [
      [
        "반려동물 종류",
        "기본 비율 결정",
        "강아지 약 60 mL/kg, 고양이 약 40 mL/kg"
      ],
      [
        "체중",
        "전체 필요 수분량 산출",
        "적정 체중을 기준 산정"
      ],
      [
        "사료 수분",
        "식사를 통한 수분 공급량 결정",
        "습식 사료는 물그릇 음수량을 줄임"
      ],
      [
        "기온·활동량",
        "헐떡임으로 인한 수분 손실 증가",
        "더운 날에는 추가 수분 필요"
      ]
    ]
  },
  {
    "type": "title",
    "text": "올바른 음수 관리를 위한 실전 지침",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "보호자님은 정해진 목표 수치를 강요하기보다 언제나 깨끗하고 신선한 물을 편하게 마실 수 있는 환경을 만들어 주는 데 집중하셔야 합니다. 물그릇은 매일 세척하고 신선한 물로 갈아주세요. 특히 사막 조상의 본능으로 갈증을 잘 느끼지 못하는 고양이의 경우, 정수기 사용이나 수염이 닿지 않는 넓은 물그릇, 집안 곳곳의 음수대 배치가 자발적인 음수를 유도하는 데 큰 도움이 됩니다."
  },
  {
    "type": "card",
    "title": "건식 사료 위주 급여시",
    "icon": "mdi:food-drumstick",
    "html": "물그릇을 통한 음수에 의존하므로 배변판이나 소음이 나는 가전제품과 떨어진 조용하고 접근하기 쉬운 장소에 깨끗한 물그릇을 놓아주세요."
  },
  {
    "type": "card",
    "title": "습식 사료 위주 급여시",
    "icon": "mdi:food-drumstick",
    "html": "식사 자체로 풍부한 수분이 공급되므로 물을 적게 마셔도 안심하셔도 됩니다. 다만 여름철이나 운동 후에는 항상 깨끗한 물을 마실 수 있도록 해주세요."
  },
  {
    "type": "card",
    "title": "더운 날씨 및 야외 활동시",
    "icon": "mdi:weather-sunny",
    "html": "체온 조절을 위한 헐떡임으로 수분이 빠르게 증발합니다. 시원한 그늘과 휴식 시간을 제공하여 열사병과 탈수를 예방해 주세요."
  },
  {
    "type": "tip",
    "title": "수의사 진료가 필요한 이상 신호",
    "html": "갑자기 물을 과도하게 많이 마시거나(다뇨/다음) 물을 완전히 거부하는 경우 신장 질환, 당뇨병, 갑상선 질환 등의 위험 신호일 수 있으니 지체 없이 수의사의 진료를 받으세요."
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
