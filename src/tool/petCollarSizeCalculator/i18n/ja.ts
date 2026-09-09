import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'pet-collar-size-calculator';
const title = 'ペットの首輪サイズ計算機';
const description = '首回りを測り、ゆとりを加えて、手で確認できる調整範囲を見つけます。';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: '首回り', unitLabel: '表示', centimetres: 'センチメートル', inches: 'インチ', allowanceLabel: 'ゆとり', collarTypeLabel: '首輪の種類', flatCollar: '通常', breakawayCollar: 'セーフティ', martingaleCollar: 'マーチンゲール', statusTight: 'ゆとりを増やす', statusBalanced: '確認の準備完了', statusLoose: '安全性を確認', statusTightDetail: 'ゆとりを増やしてください。', statusBalancedDetail: 'この範囲を手で確認してください。', statusLooseDetail: '抜け落ちないか確認してください。', fitStudyLabel: '首輪フィット研究', fitWindowLabel: 'この範囲を探す', measuredLabel: '測定した首回り', roomLabel: 'ゆとり', checkLabel: '手で確認', sceneAria: '首の円と首輪の調整範囲を示すフィット研究', neckMarker: '首', easeMarker: 'ゆとり', rangeMarker: '首輪の範囲', minimumMarker: '開始', maximumMarker: '終了', checkFlat: '快適で安全、こすれません。', checkBreakaway: '装着感と解除機構を確認してください。', checkMartingale: '締め付ける輪が首を圧迫しないようにしてください。', invalidInput: '有効な首回りとゆとりを入力してください。',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: 'ペットの首回りはどう測りますか？', answer: '首輪を着ける位置に柔らかいメジャーを回します。皮膚や毛を押しつぶさず、毛の近くで水平に保ちます。首輪の位置、毛の量、姿勢が変わった場合はもう一度測ってください。' },
  { question: 'なぜ一つのサイズではなく範囲が表示されますか？', answer: '調整式の首輪はメーカーごとに調整幅が異なり、サイズ表記も統一されていません。選んだゆとりを加えて比較用の小さな範囲を作ります。最後は実際の首輪をペットに着けて確認します。' },
  { question: 'ゆとりはどれくらい必要ですか？', answer: 'すべてのペットに同じ値はありません。毛、首輪の幅、素材、活動によって変わります。数値を見える前提として使い、落ち着いた状態で手による確認を行ってください。' },
  { question: 'マーチンゲール首輪にも使えますか？', answer: '最初の目安は同じ首回りから始めます。ただし最後の確認は異なり、締め付ける輪に制限があり、首を絞めてはいけません。仕組みが分からない場合はメーカーの説明を確認してください。' },
  { question: '子犬や子猫にも結果を使えますか？', answer: '現在のフィットを確認する目安として使えます。若いペットは成長し毛も変わるため、測定を定期的に繰り返し、毎回慎重に確認してください。' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: '首回りを測る', text: 'ペットが落ち着いて自然に立っているとき、首輪を着ける位置を測ります。メジャーは平らにし、締め付けません。' },
  { name: 'ゆとりを選ぶ', text: '見えるスライダーで首と首輪の間のゆとりを設定します。最初の2センチメートルは例にすぎません。' },
  { name: '種類を選ぶ', text: '通常、セーフティ、マーチンゲールから選び、仕組みに合った確認メッセージを表示します。' },
  { name: '調整幅を比べる', text: '計算した範囲全体を覆う首輪を探し、ペットに着けて実際に確認します。' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: '測定値を購入用の範囲に変える', items: ['首輪を実際に着ける位置で測ります。', '犬種名で推測せず、ゆとりを見える形にします。', '商品の調整幅と結果を比べます。', '落ち着いた状態でペットに着けて確認します。'] },
  { type: 'title', text: 'この計算機で判断できること', level: 2 },
  { type: 'paragraph', html: 'サイズ表は、ペットが二つのサイズの間にいる場合、毛が多い場合、成長中の場合に分かりにくくなります。この計算機は、首輪が実際に置かれる場所の首回りという確認しやすい測定から始めます。そこへ自分で選んだゆとりを加えます。小型、中型、大型という商品ラベルを推測するのではなく、商品の調整幅と比べられる具体的な範囲を作ります。' },
  { type: 'paragraph', html: '範囲は比較しやすいように短くしています。調整式の首輪に世界共通の規格はなく、実際に使える長さが販売ページのサイズ名と違うこともあります。調整幅が範囲全体を覆う商品を候補にします。ただし数値だけでは、縁、バックル、毛、素材、仕組みがペットに適しているかは判断できません。' },
  { type: 'title', text: '購入前の測り方', level: 2 },
  { type: 'list', items: ['ペットが落ち着いて自然に立っているときに測る。', '毛や皮膚を押しつぶさず、メジャーを水平に保つ。', '首輪を高い位置や低い位置に着ける場合は再測定する。', '若いペットは日付を記録し、成長中に定期的に確認する。'] },
  { type: 'paragraph', html: 'ゆとりは明示した前提であり、安全の保証ではありません。適切な値はペット、毛、幅、素材、使い方によって変わります。指を入れる確認は目安になりますが、一つの数字が全てのペットの規則になるわけではありません。こすれ、咳、痛み、呼吸のしづらさ、苦しそうな様子、動きの制限があれば首輪を外し、専門家に相談してください。' },
  { type: 'title', text: 'フィットの円を読む', level: 2 },
  { type: 'table', headers: ['表示', '意味', '次にすること'], rows: [['測定した首回り', 'ゆとりを加える前の周囲。', 'メジャーが斜めやきつかったら測り直す。'], ['開始', '首回りに選んだゆとりを加えた値。', '調整幅の下限として使う。'], ['終了', '比較のための小さな窓。', '窓全体を覆う調整幅を探す。'], ['確認', '選んだゆとりへの注意。', 'ペットに着けて確かめる。']] },
  { type: 'title', text: '首輪の種類で最後の確認が変わる', level: 2 },
  { type: 'paragraph', html: '通常の首輪では快適さと安全性を確認し、セーフティやマーチンゲールでは仕組みも確認します。縁、バックル、毛、締め付ける輪を見てください。数値は商品を絞るために役立ちますが、最後は落ち着いたペットとメーカーの説明で判断します。' },
  { type: 'tip', title: '静かに手で確認する', html: 'ペットがリラックスしているときに首輪を着けます。こすれずに動き、呼吸し、食べ、飲み、頭を回せる必要があります。着けたままにする首輪なら、頭の上から抜けないことも確認します。トリミング、成長、体重変化、位置の変更後は再確認してください。' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
