import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'pet-collar-size-calculator';
const title = '반려동물 목줄 사이즈 계산기';
const description = '목둘레를 측정하고 여유 공간을 더해 손으로 확인할 수 있는 조절 범위를 찾습니다.';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: '목둘레', unitLabel: '표시', centimetres: '센티미터', inches: '인치', allowanceLabel: '여유 공간', collarTypeLabel: '목줄 종류', flatCollar: '일반형', breakawayCollar: '안전 해제형', martingaleCollar: '마틴게일', statusTight: '여유를 늘리세요', statusBalanced: '확인할 준비 완료', statusLoose: '안전성을 확인하세요', statusTightDetail: '여유를 늘리세요.', statusBalancedDetail: '이 범위를 손으로 확인하세요.', statusLooseDetail: '빠지지 않는지 확인하세요.', fitStudyLabel: '목줄 맞춤 연구', fitWindowLabel: '이 범위의 제품 찾기', measuredLabel: '측정한 목', roomLabel: '여유 공간', checkLabel: '손으로 확인', sceneAria: '목 둘레와 조절 가능한 목줄 범위를 보여 주는 맞춤 연구', neckMarker: '목', easeMarker: '여유', rangeMarker: '목줄 범위', minimumMarker: '시작', maximumMarker: '끝', checkFlat: '편안하고 안전하며 쓸림이 없습니다.', checkBreakaway: '맞춤과 해제 장치를 확인하세요.', checkMartingale: '조임 고리가 목을 압박하지 않아야 합니다.', invalidInput: '올바른 목둘레와 여유 공간을 입력하세요.',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: '반려동물의 목둘레는 어떻게 측정하나요?', answer: '목줄이 놓일 위치에 부드러운 줄자를 둘러 주세요. 피부나 털을 누르지 말고 털 가까이에서 수평을 유지합니다. 목줄 위치, 털의 양, 동물의 자세가 달라지면 다시 측정하세요.' },
  { question: '왜 하나의 사이즈가 아니라 범위로 나오나요?', answer: '조절식 목줄은 제조사마다 조절 폭이 다르고 사이즈 표기도 통일되어 있지 않습니다. 선택한 여유를 더해 작은 비교 범위를 만듭니다. 마지막에는 실제 목줄을 동물에게 착용해 확인해야 합니다.' },
  { question: '여유 공간은 얼마나 선택해야 하나요?', answer: '모든 동물에 같은 값이 맞지는 않습니다. 털, 폭, 소재, 활동량에 따라 달라집니다. 숫자는 보이는 가정으로 사용하고 편안함과 안전성을 차분하게 손으로 확인하세요.' },
  { question: '마틴게일 목줄에도 사용할 수 있나요?', answer: '첫 계산은 같은 목둘레에서 시작합니다. 최종 확인은 다릅니다. 조임 고리는 제한되어야 하며 절대 목을 조이면 안 됩니다. 구조를 잘 모르면 제조사 안내를 따르세요.' },
  { question: '어린 반려동물에게도 결과를 사용할 수 있나요?', answer: '현재 맞춤을 확인하는 참고값으로 사용할 수 있습니다. 어린 동물은 성장하고 털도 변하므로 측정을 자주 반복하고 매번 주의 깊게 확인하세요.' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: '목둘레 측정', text: '동물이 편안하게 자연스럽게 서 있을 때 목줄이 놓일 위치를 측정합니다. 줄자는 평평하게 두고 당기지 않습니다.' },
  { name: '여유 선택', text: '보이는 조절기를 사용해 목과 목줄 사이의 여유를 설정합니다. 처음의 2센티미터는 예시일 뿐입니다.' },
  { name: '종류 선택', text: '일반형, 안전 해제형, 마틴게일 중에서 선택해 장치에 맞는 확인 안내를 봅니다.' },
  { name: '조절 폭 비교', text: '계산된 범위를 모두 덮는 목줄을 찾은 뒤 동물에게 직접 착용해 확인합니다.' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: '측정값을 구매 범위로 바꾸기', items: ['목줄이 실제로 놓일 위치에서 측정하세요.', '품종으로 추측하지 말고 여유 공간을 표시하세요.', '제품의 실제 조절 폭과 결과를 비교하세요.', '동물에게 차분하게 착용해 확인하세요.'] },
  { type: 'title', text: '이 계산기가 도와주는 결정', level: 2 },
  { type: 'paragraph', html: '동물이 두 사이즈 사이에 있거나 털이 많거나 성장 중이면 사이즈표가 모호해집니다. 이 도구는 직접 확인할 수 있는 값인 목줄이 놓일 위치의 목둘레에서 시작합니다. 그 다음 원하는 여유 공간을 더합니다. 작은 사이즈, 중간 사이즈, 큰 사이즈 같은 판매용 이름을 추측하는 대신 제품의 조절 치수와 비교할 수 있는 구체적인 범위를 만듭니다.' },
  { type: 'paragraph', html: '범위는 비교하기 쉽도록 짧게 만들었습니다. 조절식 목줄에는 전 세계 공통 규격이 없고 실제 사용 가능한 길이가 판매 페이지의 사이즈 이름과 다를 수 있습니다. 조절 폭이 범위 전체를 덮는 제품을 후보로 삼으세요. 그래도 숫자만으로 가장자리, 버클, 털, 소재 또는 구조의 적합성을 보장할 수는 없습니다.' },
  { type: 'title', text: '구매 전 측정 방법', level: 2 },
  { type: 'list', items: ['동물이 편안하고 자연스럽게 서 있을 때 측정하세요.', '털이나 피부를 누르지 말고 줄자를 수평으로 유지하세요.', '목줄을 더 높거나 낮게 착용할 예정이면 다시 측정하세요.', '어린 동물은 날짜를 적고 성장하는 동안 맞춤을 확인하세요.'] },
  { type: 'paragraph', html: '여유 공간은 명시적인 가정이지 안전 보장이 아닙니다. 적절한 값은 동물, 털, 폭, 소재와 사용 방식에 따라 달라집니다. 손가락 확인은 참고가 될 수 있지만 숫자가 모든 동물에게 적용되는 규칙이 되지는 않습니다. 쓸림, 기침, 통증, 호흡 곤란, 불안 또는 움직임 제한이 있으면 목줄을 제거하고 전문가에게 문의하세요.' },
  { type: 'title', text: '맞춤 원 읽기', level: 2 },
  { type: 'table', headers: ['신호', '의미', '다음 단계'], rows: [['측정한 목', '여유를 더하기 전의 둘레.', '줄자가 기울었거나 조였다면 다시 측정하세요.'], ['시작', '목둘레에 선택한 여유를 더한 값.', '조절 폭의 아래 경계로 사용하세요.'], ['끝', '비교를 위한 작은 창.', '창 전체를 덮는 조절 폭을 찾으세요.'], ['확인', '선택한 여유에 대한 안내.', '동물에게 직접 확인하세요.']] },
  { type: 'title', text: '목줄 종류에 따라 마지막 확인이 달라집니다', level: 2 },
  { type: 'paragraph', html: '일반형은 편안함과 안전성을 확인하고, 안전 해제형이나 마틴게일은 장치의 작동도 확인해야 합니다. 가장자리, 버클, 털과 조임 고리를 살펴보세요. 숫자는 제품을 고르는 데 도움을 주지만 마지막 판단은 편안한 동물과 제조사 안내를 바탕으로 해야 합니다.' },
  { type: 'tip', title: '차분하게 손으로 확인하기', html: '동물이 편안할 때 목줄을 착용하세요. 쓸림 없이 움직이고, 숨 쉬고, 먹고, 마시고, 고개를 돌릴 수 있어야 합니다. 계속 착용해야 하는 목줄이라면 머리 위로 빠지지 않는지도 확인하세요. 미용, 성장, 체중 변화 또는 위치 변경 후에는 다시 확인하세요.' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
