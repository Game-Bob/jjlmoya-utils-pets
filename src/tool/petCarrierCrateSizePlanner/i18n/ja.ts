import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'pet-carrier-crate-size-planner';
const title = 'ペットキャリーケースサイズプランナー';
const description = '犬や猫の6つの体寸から最適なキャリーケースの内寸サイズを計算し、航空移動の注意点や快適性チェックリストを確認できます。';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: 'まず採寸。安心して選ぶ。',
  journeyHint: 'ペットと移動手段を選び、体寸を入力してキャリー内部のサイズガイドを確認してください。',
  unitLegend: '表示単位',
  speciesStep: 'ペットの選択',
  metricUnit: 'メートル法',
  imperialUnit: 'ヤード・ポンド法',
  speciesLegend: '誰が移動しますか？',
  speciesDog: '犬',
  speciesCat: '猫',
  modeLegend: '主な移動手段は？',
  modeCar: '自動車',
  modeAir: '飛行機',
  measurementsLegend: '体寸を入力',
  noseTailLabel: '鼻先から尻尾の付け根まで',
  noseTailHint: '尻尾のカーブを含めずに測定してください',
  elbowHeightLabel: '地面から肘までの高さ',
  shoulderWidthLabel: '肩幅',
  standingHeightLabel: '立位での高さ',
  beddingLabel: 'マットや敷物の厚み',
  weightLabel: '体重',
  cmUnit: 'cm',
  inchUnit: 'インチ',
  kgUnit: 'kg',
  lbUnit: 'ポンド',
  snubNosedLabel: '短頭種（鼻の短い犬種・猫種）',
  snubNosedHint: '航空輸送ではIATA規定の調整が必要です。獣医師および航空会社にご相談ください。',
  presetLegend: 'プロファイルから開始',
  presetCat: '猫',
  presetSmallDog: '小型犬',
  presetMediumDog: '中型犬',
  presetLargeDog: '大型犬',
  resultEyebrow: '推奨採寸フレーム',
  resultTitle: '方向転換できる十分なスペース',
  resultDimensionLabel: '必要な最小内部寸法',
  lengthLabel: '奥行き（長さ）',
  widthLabel: '幅',
  heightLabel: '高さ',
  petWeightLabel: '体重',
  journeyLabel: '移動手段',
  statusComfort: '基本快適基準',
  statusAirReview: '航空輸送確認事項',
  statusSnub: '短頭種調整済み',
  resultDetail: '購入前や出発前に、実際のクレート内寸、扉の大きさ、通気性、規定を確認してください。',
  checklistTitle: '4つの身体チェック',
  checklistStand: '頭や耳が天井に触れずに立ったり座ったりできる。',
  checklistTurn: '立った状態で自然に方向転換ができる。',
  checklistLie: '敷物の上で自然な体勢で横になれる。',
  checklistAirline: '航空利用時は、航空会社の制限、通気孔、施錠構造、防水底を確認してください。',
  invalidInput: '各体寸および体重に正の数値を入れてください。',
  noteTitle: '空間目安としてご活用ください（搭乗許可証ではありません）',
  noteText: '規定は航空会社、車両、動物によって異なります。特に短頭種や持病のあるペットの移動適性については獣医師の診断を受けてください。',
  methodTitle: '計算方法',
  methodText: 'IATA（国際航空運送協会）基準に基づき計算しています。必要奥行きは鼻先から尻尾根元＋肘高さの半分、幅は肩幅の2倍、高さは立位高さ＋マット厚みです。',
  blueprintLabel: 'ペットが内部に入った状態と奥行き・高さのガイド線を示す採寸図',
  dimensionInside: '内部寸法',
  checkMark: 'OK',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: 'キャリーケースを選ぶ際、ペットの体をどのように測定すればよいですか？',
    answer: '鼻先から尻尾の付け根まで、地面から肘関節まで、肩幅の最も広い部分、地面から頭頂部または耳の先までの高さを測定します。敷物の厚みは別途加算します。',
  },
  {
    question: 'このプランナーはどの内部寸法を計算しますか？',
    answer: '体長と肘高から必要な最小奥行き、肩幅から幅、マットの厚みを含めた全体の高さを推計します。',
  },
  {
    question: '計算結果は航空会社の承認を保証しますか？',
    answer: '保証しません。飛行機モードはIATA基準の計算式を使用しますが、航空会社ごとに独自の制限があります。必ず利用する航空会社の最新規約を確認してください。',
  },
  {
    question: 'なぜ短頭種は航空輸送時に大きめのクレートが必要なのですか？',
    answer: 'IATAガイドラインでは、呼吸困難や体温上昇を防ぐため、短頭種にはより余裕のある容器の使用が推奨されています。',
  },
  {
    question: '車移動用のキャリーケースはできるだけ大きい方がいいですか？',
    answer: 'いいえ。立つ、回る、横になる動作が十分にでき、かつ車内で揺れや衝撃に耐えられるようしっかり固定できる適切なサイズが推奨されます。',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: '移動手段の選択', text: '自動車または飛行機を選択し、確認基準を設定します。' },
  { name: '6つの体寸を入力', text: 'ペットが落ち着いている時に、各部の寸法と体重を測定します。' },
  { name: '内寸ガイドを確認', text: '表示された奥行き、幅、高さを基準にして、市販のキャリーを比較します。' },
  { name: '規定と構造の最終確認', text: '購入前にロック構造、通気性、航空会社や車両の規定を満たしているか確認します。' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'ペット に 適した キャリー ケース 選び の 完全 ガイド',
    items: [
      '体重 だけで 判断 せず 必ず ペット の 体 を 採寸 して ください',
      '実際 の ケース を 比較 する 際 は 外寸 ではなく 有効 内寸 を 確認 します',
      '扉 の 施錠 構造 や 通気孔 の 配置 を 事前 に チェック しましょう',
      '空輸 の 場合 は 航空会社 規約 と 獣医師 の アドバイス が 必要 です',
    ],
  },
  { type: 'title', text: 'キャリー ケース 内寸 の 計画 方法', level: 2 },
  {
    type: 'paragraph',
    html: '適切 な キャリー ケース は 立つ 座る 方向転換 する 横になる の 4つ の 自然 な 動作 が できる 空間 を 確保 する 必要 が あります 。 本 ツール は 体寸 から 必要 な 内部 寸法 を 算出 します 。 ペット が ストレス なく 安全 に 移動 できる よう 正確 な 採寸 が 推奨 されます 。',
  },
  {
    type: 'paragraph',
    html: '算出 された サイズ は 内部 の 有効 スペース です 。 厚手 の クッション や 給水器 を 設置 すると 実質的 な 空間 が 狭くなる 点 に ご注意 ください 。 市販 の キャリー を 選ぶ 際 は 最も 狭い 部分 の 内寸 を 基準 に 検討 すること が 重要 です 。',
  },
  { type: 'title', text: '各 採寸 項目 の 重要性', level: 2 },
  {
    type: 'table',
    headers: ['採寸 項目', '役割', '計算 での 用途'],
    rows: [
      ['鼻先 から 尻尾 根元', '丸まらない 姿勢 での 基準 体長 を 設定', '奥行き'],
      ['地面 から 肘 まで', '方向転換 時 の 足元 の 余裕 を 確保', '奥行き'],
      ['肩幅', '最も 太い 部分 での 横幅 を 確保', '幅'],
      ['立位 での 高さ', '頭部 や 耳 が 天井 に 当たる のを 防ぐ', '高さ'],
      ['敷物 の 厚み', 'クッション 設置後 の 有効 高さ を 維持', '高さ'],
      ['体重', 'キャリー の 耐荷重 制限 を 確認', '確認'],
    ],
  },
  {
    type: 'paragraph',
    html: '計算式 は IATA 国際 航空 運送 協会 の 動物 輸送 規定 に 基づいて います 。 内寸 奥行き は 体長 プラス 肘高 の 半分 幅 は 肩幅 の 2倍 高さ は 全高 プラス 敷物 厚み で 構成 されます 。 これにより 長時間 の 移動 でも ペット が 快適 に 過ごせる 空間 が 確保 されます 。',
  },
  { type: 'title', text: '航空 輸送 における 注意点 と 短頭種', level: 2 },
  {
    type: 'paragraph',
    html: '寸法 計算 のみ で 搭乗 許可 が 得られる わけでは ありません 。 機種 や 季節 通気 条件 なども 影響 するため 事前 の お問い合わせ が 不可欠 です 。 短頭種 の 動物 は 呼吸 障害 や 熱中症 の リスク が 高いため より 広い キャリー と 獣医師 の 診断 が 必要 です 。',
  },
  {
    type: 'tip',
    title: '実地 での サイズ 確認 テスト',
    html: '静かな 環境 で ペット を キャリー に 入れ 中 の 動作 を 確認 して ください 。 狭そう に 見える 場合 は ワンサイズ 上 の モデル を お選び ください 。 ペット の 健康 と 安全 を 最優先 に 選択 しましょう 。',
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
