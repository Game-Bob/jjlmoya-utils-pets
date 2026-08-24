import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'pet-food-toxicity-checker';
const title = ' 강 아 지 고 양 이 위 험 음 식 중 독 체 크 Tool';
const description = ' 강 아 지 와 고 양 이 가 섭 취 한 위 험 음 식 및 중 독 증 상 을 확 인 하 고 수 의 사 상 담 이 필 요 한 시 점 을 알 려 줍 니 다 .';

const ui: PetToxicityUI = {
 "journeyHint": " 반 려 동 물 을 선 택 하 고 음 식 아 틀 라 스 를 열 어 종 별 경 고 를 확 인 하 세 요 .",
 "speciesLabel": " 반 려 동 물 종 류 ",
 "speciesDog": " 강 아 지 ",
 "speciesCat": " 고 양 이 ",
 "speciesDogMeta": " 강 아 지 프 로 필 ",
 "speciesCatMeta": " 고 양 이 프 로 필 ",
 "foodLabel": " 음 식 또 는 성 분 ",
 "foodPlaceholder": " 음 식 을 선 택 하 세 요 ",
 "foodMenuHint": " 위 험 은 종 마 다 다 르 므 로 목 록 이 변 경 됩 니 다 .",
 "resultEyebrow": " 음 식 아 틀 라 스 결 과 ",
 "resultEmpty": " 음 식 을 선 택 하 여 안 전 카 드 를 확 인 하 세 요 .",
 "sceneLabel": " 섭 취 위 험 지 도 ",
 "sceneReady": " 음 식 선 택 ",
 "sceneSelected": " 종 별 전 용 카 드 열 림 ",
 "riskCritical": " 긴 급 주 의 ",
 "riskHigh": " 높 은 위 험 ",
 "riskCaution": " 주 의 ",
 "riskUnknown": " 데 이 터 부 족 ",
 "riskLabel": " 위 험 수 준 ",
 "whyLabel": " 위 험 한 이 유 ",
 "signsLabel": " 관 찰 할 증 상 ",
 "actionLabel": " 대 처 방 법 ",
 "callVetLabel": " 가 장 안 전 한 방 법 은 전 문 수 의 사 상 담 입 니 다 .",
 "callVetText": " 계 산 기 는 치 사 량 을 계 산 하 거 나 진 료 를 대 신 할 수 없 습 니 다 .",
 "sourceLabel": " 참 고 근 거 ",
 "sourceText": "ASPCA, FDA 및 MSD 수 의 학 매 뉴 얼 의 지 침 을 바 탕 으 로 제 공 됩 니 다 .",
 "emergencyTitle": " 위 험 한 음 식 을 섭 취 했 을 경 우 ",
 "emergencyText": " 즉 시 동 물 병 원 이 나 응 급 실 에 연 락 하 세 요 . 포 장 지 , 섭 취 량 , 시 간 을 메 모 해 두 세 요 .",
 "openMenu": " 메 뉴 열 기 ",
 "closeMenu": " 메 뉴 닫 기 "
};

const faq: PetToxicityLocaleContent['faq'] = [
 {
 "question": " 이 툴 로 반 려 동 물 의 안 전 을 확 신 할 수 있 나 요 ?",
 "answer": " 아 니 요 . 교 육 용 가 이 드 이 며 진 단 이 나 섭 취 량 계 산 을 대 신 하 지 않 습 니 다 . 이 상 이 의 심 되 면 수 의 사 와 상 담 하 세 요 ."
 },
 {
 "question": " 강 아 지 에 게 특 히 위 험 한 음 식 은 무 엇 인 가 요 ?",
 "answer": " 자 일 리 톨 , 초 콜 릿 , 카 페 인 , 포 도 , 건 포 도 , 양 파 , 마 늘 , 알 코 올 , 생 효 모 반 죽 등 이 있 습 니 다 ."
 },
 {
 "question": " 양 파 와 마 늘 은 고 양 이 에 게 도 위 험 한 가 요 ?",
 "answer": " 네 . 고 양 이 는 양 파 , 마 늘 계 열 성 분 에 의 한 적 혈 구 손 상 에 매 우 취 약 합 니 다 ."
 },
 {
 "question": " 자 일 리 톨 경 고 가 강 아 지 와 고 양 이 에 서 다 른 이 유 는 무 엇 인 가 요 ?",
 "answer": " 자 일 리 톨 은 강 아 지 에 게 급 격 한 저 혈 당 을 유 발 합 니 다 . 고 양 이 에 서 의 위 험 성 은 아 직 연 구 중 입 니 다 ."
 },
 {
 "question": " 목 록 에 없 는 음 식 을 먹 은 경 우 는 어 떻 게 하 나 요 ?",
 "answer": " 목 록 에 없 다 고 해 서 안 전 한 것 은 아 닙 니 다 . 포 장 지 를 지 참 하 고 수 의 사 에 게 문 의 하 세 요 ."
 }
];

const howTo: PetToxicityLocaleContent['howTo'] = [
 {
 "name": " 반 려 동 물 선 택 ",
 "text": " 강 아 지 또 는 고 양 이 를 선 택 하 여 관 련 정 보 를 확 인 합 니 다 ."
 },
 {
 "name": " 음 식 선 택 ",
 "text": " 메 뉴 에 서 섭 취 한 성 분 을 선 택 합 니 다 ."
 },
 {
 "name": " 안 전 카 드 확 인 ",
 "text": " 위 험 도 , 나 타 날 수 있 는 증 상 , 권 장 대 처 법 을 확 인 합 니 다 ."
 },
 {
 "name": " 수 의 사 상 담 ",
 "text": " 실 제 섭 취 가 발 생 했 다 면 포 장 지 정 보 를 지 참 하 여 문 의 하 세 요 ."
 }
];

const seo: PetToxicityLocaleContent['seo'] = [
 {
 type: 'summary',
 title: " 강 아 지 고 양 이 음 식 안 전 빠 른 체 크 ",
 items: [
 " 같 은 성 분 이 라 도 강 아 지 와 고 양 이 에 게 다 르 게 작 용 하 므 로 종 을 먼 저 선 택 하 세 요 .",
 " 안 전 카 드 를 통 해 위 험 의 긴 급 성 과 증 상 을 파 악 하 세 요 .",
 " 강 아 지 의 자 일 리 톨 섭 취 는 응 급 상 황 으 로 다 루 어 야 합 니 다 .",
 " 실 제 섭 취 시 반 드 시 수 의 사 의 진 료 를 받 으 세 요 ."
],
 },
 {
 type: 'title',
 text: " 음 식 중 독 체 크 툴 책 임 감 있 게 활 용 하 기 ",
 level: 2,
 },
 {
 type: 'paragraph',
 html: " 이 위 험 음 식 중 독 체 크 툴 은 반 려 동 물 이 먹 어 서 는 안 될 음 식 을 섭 취 했 을 때 수 의 사 상 담 을 준 비 할 수 있 도 록 돕 습 니 다 . 긴 박 한 상 황 에 서 필 요 한 증 상 파 악 과 정 보 를 빠 르 게 체 계 화 하 여 진 료 에 도 움 을 줍 니 다 . 신 속 하 고 정 확 한 정 보 전 달 이 생 명 을 구 합 니 다 .",
 },
 {
 type: 'paragraph',
 html: " 강 아 지 와 고 양 이 는 대 사 체 계 가 다 릅 니 다 . 자 일 리 톨 은 강 아 지 에 게 저 혈 당 을 유 발 하 고 양 파 는 고 양 이 의 적 혈 구 를 파 괴 합 니 다 . 임 의 의 자 가 처 치 는 오 히 려 상 황 을 악 화 시 킬 수 있 으 므 로 주 의 해 야 합 니 다 .",
 },
 {
 type: 'title',
 text: " 주 요 위 험 음 식 및 세 부 정 보 ",
 level: 2,
 },
 {
 type: 'table',
 headers: [" 음 식 또 는 성 분 "," 주 요 위 험 "," 중 요 내 용 "],
 rows: [[" 초 콜 릿 및 카 페 인 "," 심 장 및 신 경 계 영 향 "," 카 카 오 함 량 과 체 중 이 중 요 함 ."],[" 자 일 리 톨 "," 강 아 지 급 성 저 혈 당 유 발 "," 무 설 탕 사 탕 및 껌 확 인 ."],[" 포 도 및 건 포 도 "," 강 아 지 신 장 손 상 위 험 "," 소 량 도 안 전 하 다 고 단 정 금 지 ."],[" 양 파 및 마 늘 "," 적 혈 구 파 괴 및 빈 혈 "," 분 말 형 태 도 위 험 함 ."],[" 생 효 모 반 죽 "," 위 팽 창 및 알 코 올 발 생 "," 발 효 로 인 한 압 박 및 알 코 올 ."]],
 },
 {
 type: 'paragraph',
 html: " 화 학 적 중 독 외 에 도 뼈 에 의 한 이 물 걸 림 , 고 지 방 음 식 으 로 인 한 췌 장 염 위 험 등 물 리 적 위 협 도 주 의 해 야 합 니 다 . 세 심 한 관 찰 과 신 속 한 대 처 가 필 수 적 입 니 다 .",
 },
 {
 type: 'title',
 text: " 섭 취 후 조 치 사 항 ",
 level: 2,
 },
 {
 type: 'list',
 items: [
 " 남 은 음 식 을 치 우 고 포 장 지 를 보 관 합 니 다 .",
 " 체 중 , 음 식 종 류 , 섭 취 량 , 시 간 을 기 록 합 니 다 .",
 " 동 물 병 원 에 전 화 하 여 상 황 을 설 명 합 니 다 .",
 " 지 시 없 이 억 지 로 토 하 게 하 지 마 세 요 .",
 " 경 련 이 나 의 식 불 명 시 즉 시 병 원 으 로 이 동 하 세 요 ."
],
 },
 {
 type: 'tip',
 title: " 반 려 동 물 의 건 강 이 최 우 선 입 니 다 ",
 html: " 증 상 이 몇 시 간 후 에 나 타 날 수 있 으 므 로 지 체 없 이 전 문 의 의 도 움 을 받 으 세 요 .",
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
