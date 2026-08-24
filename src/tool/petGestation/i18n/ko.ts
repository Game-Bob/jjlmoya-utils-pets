import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';

const slug = 'pet-gestation-calculator';
const title = '반려동물 임신 기간 계산기';
const description = '교배일을 기준하여 개, 고양이, 토끼, 페럿의 예상 출산일과 출산 기간을 계산합니다.';

const ui: PetGestationLocaleContent['ui'] = {
  "journeyHint": "반려동물 종류를 선택하고 교배일을 입력하여 출산 예정일을 확인하세요.",
  "instantHint": "설정을 변경하면 즉시 일정이 업데이트됩니다.",
  "speciesLegend": "반려동물의 종류는 무엇인가요?",
  "speciesDog": "개",
  "speciesCat": "고양이",
  "speciesRabbit": "토끼",
  "speciesFerret": "페럿",
  "speciesDogMeta": "58~72일",
  "speciesCatMeta": "64~66일",
  "speciesRabbitMeta": "약 31일",
  "speciesFerretMeta": "약 42일",
  "matingDateLabel": "교배일",
  "matingDateHint": "첫 교배일을 입력하세요. 추정치이며 확정된 수정일이 아닙니다.",
  "presetToday": "오늘",
  "presetWeekAgo": "7일 전",
  "presetFortnightAgo": "14일 전",
  "calculateButton": "출산 예정 기간 계산",
  "resultEyebrow": "출산 계산기 결과",
  "dueDateLabel": "대표 예상 출산일",
  "windowLabel": "예상 출산 기간",
  "remainingLabel": "예정일까지 남은 일수",
  "elapsedLabel": "경과 일수",
  "daysLabel": "일",
  "dayLabel": "일",
  "statusFuture": "미래 날짜가 입력되었습니다",
  "statusWaiting": "임신 기간 진행 중",
  "statusWindow": "출산 예정 기간 진입",
  "statusLate": "예상 범위를 초과함",
  "resultEmpty": "계산 결과가 여기에 표시됩니다.",
  "sampleLabel": "예시",
  "sceneMating": "교배일",
  "sceneToday": "현재 진행 상태",
  "sceneDue": "출산 예정 기간",
  "noteTitle": "건강 관련 중요 안내",
  "noteText": "교배일이 항상 수정일과 일치하지는 않습니다. 정확한 임신 확인 및 건강 관리는 수의사와 상담하세요.",
  "sourceTitle": "계산 근거",
  "sourceText": "개가 58~72일 범위를 사용하며, 고양이, 토끼, 페럿은 MSD 수의학 매뉴얼 기준을 따릅니다.",
  "invalidDate": "올바른 교배일을 입력하세요.",
  "futureDate": "미래 교배일은 진행 중인 임신에 적용할 수 없습니다."
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    "question": "반려동물 임신 계산기는 얼마나 정확한가요?",
    "answer": "추정치 입니다. 개의 경우 교배일 과 배란일 이 다를 수 있으며 정자 가 체내 에서 수일간 생존 할 수 있습니다. 따라서 계산기 는 단일 날짜 가 아닌 기간 범위를 제공 합니다. 정확한 진단 은 수의사 의 초음파 검사 가 필요 합니다. 보호자 가 계획 을 세우는 데 도움 을 줍니다."
  },
  {
    "question": "개의 임신 기간은 얼마인가요?",
    "answer": "MSD 수의학 매뉴얼 에 따르면 첫 교배 후 약 58 ~ 72일 입니다. 배란일 이 정확히 확인 된 경우 62 ~ 64일 로 좁혀집니다. 품종 과 태아 수 도 출산일 에 영향 을 줍니다. 충분한 유연성 을 갖고 준비 하세요."
  },
  {
    "question": "고양이의 임신 기간은 얼마인가요?",
    "answer": "고양이 의 임신 기간 은 보통 약 65일 (64 ~ 66일) 입니다. 교배 자극 으로 배란 이 유발 되기 때문에 개보다 일정 합니다. 출산 상자 준비 에 유용 합니다."
  },
  {
    "question": "토끼와 페럿이 포함된 이유는 무엇인가요?",
    "answer": "토끼 (약 31일) 와 페럿 (약 42일) 은 자주 키우는 반려동물 로 명확한 임신 기간 정보 가 존재 합니다. 보호자 를 위한 보조 도구 입니다."
  },
  {
    "question": "언제 수의사에게 연락해야 하나요?",
    "answer": "예정일 이 지나도 출산 이 시작 되지 않거나 통증 이 심하고 출혈 이 있는 경우 즉시 수의사 와 상담 하세요."
  }
];

const howTo: PetGestationLocaleContent['howTo'] = [
  {
    "name": "동물 종류 선택",
    "text": "개, 고양이, 토끼, 페럿 중 하나를 선택합니다."
  },
  {
    "name": "교배일 입력",
    "text": "확인된 첫 교배 날짜를 입력합니다."
  },
  {
    "name": "결과 확인",
    "text": "대표 예상일과 출산 기간 범위를 확인합니다."
  },
  {
    "name": "출산 준비",
    "text": "결과를 바탕으로 안락한 출산 장소를 준비합니다."
  }
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "반려동물 임신 기간 요약 정보",
    "items": [
      "교배일 과 동물의 종류 를 입력하여 예상 출산일 을 계산 합니다.",
      "개는 수정 시기 와 배란 시기 의 차이 로 인해 넓은 범위를 제공 합니다.",
      "고양이, 토끼, 페럿 은 MSD 수의학 매뉴얼 의 표준 을 적용 합니다.",
      "출산 준비 를 위한 참고 도구 이며 수의사 진료 를 대신 하지 않습니다."
    ]
  },
  {
    "type": "title",
    "text": "반려동물 임신 기간 계산기 작동 방식",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "이 계산기 는 입력받은 교배일 에 각 동물의 생물학적 임신 기간 을 더하여 출산 예정일 과 예정 기간 을 산출 합니다. 개는 교배일 과 수정일 이 다를 수 있어 기간 범위 안내 가 필수적 입니다. 이를 통해 보호자 는 필요한 출산 용품 을 준비 하고 수의사 질문 을 정리 할 수 있습니다. 보호자 와 수의사 가 임신 중 건강 을 관찰 하고 산모 와 새끼 의 안전한 출산 준비 를 최적 으로 진행 하기 위한 중요한 지침 이 됩니다 . 세심한 정보 확인 이 필수적 입니다 . 보호자 와 수의사 가 임신 중 건강 을 관찰 하고 산모 와 새끼 의 안전한 출산 준비 를 최적 으로 진행 하기 위한 중요한 지침 이 됩니다 . 세심한 정보 확인 이 필수적 입니다 ."
  },
  {
    "type": "paragraph",
    "html": "원형 나침반 형태 의 시각적 타임라인 으로 경과 일수 와 현재 임신 상태 를 한눈에 확인 할 수 있습니다. 출산 예정 기간 에 도달 하면 안내 메시지 가 변경 되어 시각적 으로 쉽게 이해 할 수 있습니다."
  },
  {
    "type": "title",
    "text": "동물별 임신 기간 상세 비교",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "종류",
      "평균 기간",
      "교배 기준 추정 범위"
    ],
    "rows": [
      [
        "개",
        "약 63일",
        "58 ~ 72일"
      ],
      [
        "고양이",
        "약 65일",
        "64 ~ 66일"
      ],
      [
        "토끼",
        "약 31일",
        "31일"
      ],
      [
        "페럿",
        "약 42일",
        "42일"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "개의 경우 수의학적 관점 에서 교배일 기준 58 ~ 72일 이 가장 안전하고 정직한 예상 범위 입니다. 단일 날짜 보다 기간 안내 가 더 바람직 합니다."
  },
  {
    "type": "title",
    "text": "출산 전 필수 준비 사항",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "예상 출산 기간 전 조용하고 따뜻한 산실 을 마련 하고 24시간 응급 동물병원 연락처 를 미리 확보 하세요. 산모 의 영양 상태 와 건강 검진 도 함께 챙기세요."
  },
  {
    "type": "tip",
    "title": "반려동물의 건강이 최우선입니다",
    "html": "이상 증세 나 난산 징후 가 보이면 즉시 수의사 의 전문적인 도움 을 받으세요."
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
