import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'pet-daily-ration-calculator';
const title = 'ペットの給餌量計算機';
const description = '愛犬・愛猫に必要な食事量を正確に計算します。適正体重維持のため、獣医学的なRER（安静時エネルギー要求量）およびDER（日当たりエネルギー要求量）の公式に基づいています。';

const ui: PetRationUI = {
  toolTitle: '給餌量計算機',
  sectionProfile: '1. ペットのプロフィール',
  labelAnimal: '動物の種類',
  labelStage: 'ライフステージ',
  labelWeight: '体重',
  labelActivity: '身体活動量',
  sectionDiet: '2. 食事とフード',
  labelDietType: '給餌タイプ',
  speciesDog: '犬',
  speciesCat: '猫',
  speciesRabbit: 'うさぎ',
  stagePuppy: '成長期 ステージ',
  stageAdult: '成犬 ・ 成猫',
  stageSenior: 'シニア ステージ',
  activityLow: '低い',
  activityMod: '普通',
  activityHigh: '高い',
  dietDry: 'ドライフードのみ',
  dietMixed25: 'ミックス (25%)',
  dietHalf: 'ハーフ (50%)',
  dietWet: 'ウェットフードのみ',
  manualAdjust: '手動調整 (1-99%)',
  wetPercentLabel: '食事中のウェットフードの割合 (%)',
  tagDry: 'ドライ',
  tagWet: 'ウェット',
  totalKcal: '合計',
  kcalUnit: 'kcal/日',
  statusPuppy: '成長期 です',
  statusSenior: '高齢期 です',
  statusLargeDog: '大型犬 です',
  statusDefault: '健康体重 です',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'RERとは何ですか？なぜ重要なのですか？',
    answer: 'RER ( Resting Energy Requirement , 安静 時 エネルギー 要求 量 ) とは、 ペット が 安静 時 に 基本 的な 生命 機能 を 維持 する ため に 必要な 最小限 の エネルギー 量 です。 これ は 、 科学 的 な 給餌 計算 の 基礎 と なり、 肥満 や 栄養 不足 を 防ぐ ため の 重要 な 指標 です。 RER を 正確 に 理解 する こと で、 飼い主 は 愛犬 ・ 愛猫 の 生物 学 的 な 必要 量 に 合わせた 食事 管理 が 可能 に なります。',
  },
  {
    question: '不妊・去勢手術は給餌量にどう影響しますか？',
    answer: '不妊 ・ 去勢 手術 を 受けた 動物 は、 基礎 代謝 が 約 15% から 20% 低下 する 傾向 が あります。 体重 増加 を 避ける ため に、 給餌 量 を 少し 減らす か、 計算機 で 活動 レベル を 「低い」 に 設定 して カロリー 摂取 量 を 調整 する 必要 が あります。 ホルモン バランス の 変化 により 脂肪 が 蓄積 し やすく なる ため、 食事 への 注意 が 健康 維持 の 鍵 と なります。',
  },
  {
    question: 'この計算機は子犬や子猫にも使えますか？',
    answer: '成長 期 の 子犬 や 子猫 は、 成体 より も はるかに 多く の エネルギー を 必要 と します ( RER の 最大 3 倍 )。 この 計算機 は 成犬 ・ 成猫 用 に 最適化 されています。 成長 期 の ペット に ついて は、 必ず 獣医師 に 相談 して 具体的 な 成長 段階 ごと の プラン を 立てて ください。 幼い 時 の 不 適切 な 給餌 は、 将来 の 骨格 形成 など に 影響 を 与える 可能性 が あります。',
  },
  {
    question: '1日の給餌量は何回に分けて与えるべきですか？',
    answer: '理想 的には、 合計 量 を 1日 2回 から 3回 に 分けて 与える のが 最善 です。 これに より 血糖 値 を 安定 させ、 消化 効率 を 高め、 特に 胃 捻転 を 起こし やすい 大型 犬種 の 健康 を 守る こと が できます。 また、 規則 正しい 食事 は ペット の 精神 的 な 安定 にも つながり ます。',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: '動物 の 種類 を 正確 に 選択 して ください', text: '犬 と 猫 では 代謝 の 仕組み や 体重 の 基準 が 異なる ため、 正しい 対象 を 選択 する こと が 給餌 量 計算 の 第一歩 です。' },
  { name: '現在 の 体重 で スライダー を 調整', text: 'スライダー を 使って、 ペット の 現在 の 正確な 体重 （ kg ） を 設定 して ください。 正確な エネルギー 要求 量 を 算出 する には、 最近 測定 した 体重 データ が 不可欠 です。' },
  { name: '実際 の 活動 レベル を 定義 して ください', text: '1日 の 散歩 時間 や 普段 の エネルギー レベル を 考慮 して、 低い ・ 普通 ・ 高い から 最も 適切 な ライフスタイル を 選びます。' },
  { name: 'フード パッケージ の カロリー を 入力', text: 'フード の 袋 に 記載 されている kcal/kg の 数値 を 確認 して 入力 して ください。 この 数値 が 正確 で ある こと で、 グラム 単位 の 給餌 量 が 健康 に 最適 な 値 で 算出 されます。' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '獣医 栄養学 と 健康 管理 の 核心 的 原則',
    items: [
      'RER 公式 は 70 × ( 体重 kg )^0.75 であり、 現代 の 獣医 学 的 な カロリー 計算 の 標準 的 基礎 です。',
      'DER は RER に ペット の 具体 的な ライフスタイル 係数 を 掛け合わせる こと で、 1日 の 必要 量 を 算出し ます。',
      '去勢 済み の ペット は ホルモン バランス の 変化 により、 以前 より も 最大 20% 少ない カロリー で 足りる 場合 が あります。',
      '今日 、 ペット の 約 50% が 肥満 に 悩んで おり、 これ は 寿命 と 生活 の 質 を 劇的 に 下げる 原因 と なります。',
      '正確な 給餌 量 を 計算 する こと は、 飼い主 が 実施 できる 最も 効率 的な 「 予防 医療 」 の 一つ です。',
      'キッチン スケール を 使用 して 科学 的な 給餌 プラン に 沿って 正確 に 計量 し、 給与 する 習慣 を 推奨 します。',
    ],
  },
  { type: 'title', text: 'ペット の 最適 な 健康 の ため の 日当たり 給餌 量 計算 完全 ガイド', level: 2 },
  {
    type: 'paragraph',
    html: '愛犬 や 愛猫 に 適切 な 量 の 食事 を 与える こと は、 単に フード ボウル を 満たす 以上 の 意味 が あります。 栄養 は ペット の 健康 、 長寿 、 そして 精神 的 な 幸福 を 支える 最も 重要 な 柱 です。 <strong>ペット 用 給餌 量 計算機</strong> は、 現代 の 獣医 栄養学 が 警告 する 栄養 不足 と、 特に 先進 国 の ペット の 50% 以上 が 患って いる 肥満 を 防ぐ ため の ツール です。',
  },
  {
    type: 'paragraph',
    html: 'この ガイド では 、 カロリー 計算 の 背景 に ある 科学 的 根拠 、 フード ラベル の 専門 的な 読み方 、 そして 年齢 や 活動 レベル が 実際 の 1日 の 必要 量 に どの ように 影響 する か を 詳しく 解説 します。 日当たり の 給餌 量 の 小さな 調整 が 、 糖尿 病 や 関節 の 問題 、 心臓 の 健康 を 守る 上 で いかに 大きな 違い を 生む か を お伝え します。',
  },
  { type: 'title', text: '計算 の 科学 ： RER と DER の 仕組み を 深く 理解 する', level: 3 },
  {
    type: 'paragraph',
    html: '動物 が 毎日 どれ くらい 食べる べき か を 判断 する ため に 、 獣医師 や 栄養士 は RER と DER という 2つ の 概念 を 使用 します。 RER は 安静 時 に 必要 な エネルギー で、 DER は それ に 活動 量 を 加味 した もの です。',
  },
  {
    type: 'paragraph',
    html: 'RER は 、 安静 時 の 呼吸 や 循環器 、 器官 の 維持 に 必要 な エネルギー を カバー します。 DER は その 数値 に ライフスタイル や ライフ ステージ を 反映 さ せ ます。 これ らの 値 を 正確 に キャリブレーション する こと で 、 長期 的 に 健康 的な ボディ コンディション スコア を 維持 する ため の バランス を 実現 でき ます。',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: 安静時 エネルギー', value: '70 × kg^0.75' },
      { label: '成長期 係数', value: 'x2.5 から x3.5' },
      { label: 'アクティブ 期 係数', value: 'x1.6 から x2.0' },
      { label: 'シニア 期 係数', value: 'x1.0 から x1.4' },
    ],
  },
  { type: 'title', text: 'フード ラベル の 栄養 成分 表示 を 読み解く コツ', level: 3 },
  {
    type: 'paragraph',
    html: '計算機 が 正確 な グラム 数 を 算出 する には、 製品 の <strong> カロリー 密度 </strong> を 知る 必要 が あります。 通常 パッケージ に kcal/kg や kcal/100g 単位 で 表示 されて い ます。 正確 に 入力 する こと で 、 過不足 の ない 完璧 な 食生活 を デザイン でき ます。',
  },
  {
    type: 'stats',
    items: [
      { label: 'ダイエット 用 療法 食', value: '約 3000 kcal/kg' },
      { label: '標準 的な 成 犬 用 フード', value: '约 3500 kcal/kg' },
      { label: '高 カロリー 成長 期 フード', value: '约 4000 kcal/kg' },
      { label: '水分 の 多い 缶詰 フード', value: '约 1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: '獣医師 から の 栄養 管理 アドバイス',
    html: 'すべて の ペット には 個体 差 が あります。 計算機 は 非常 に 信頼 できる 出発 点 です が、 飼い主 は 常に ペット の 肋骨 部分 を 触って 、 実際 の 体 格 コンディション を チェック して ください。 軽く 触れる 程度 で 肋骨 が 分かる のが 理想 的 な 体重 です。 もし 脂肪 に 隠れて 肋骨 が 分かり にくい 場合 は、 給餌 量 の 制限 が 必要 かもしれません。',
  },
  { type: 'title', text: '猫 と 犬 の 食性 および 栄養 学 的 違い について', level: 3 },
  {
    type: 'paragraph',
    html: '猫 は 肉食 動物 で あり、 特有 の タンパク質 代謝 を 持って います。 一方 で 犬 は 雑食 性 です が、 炭水化物 の 摂り すぎ には 注意 が 必要 です。 どちら の 場合 も、 関節 や 心臓 へ の 負担 を 減らす ため に、 給餌 管理 を 行う こと が 強く 推奨 されます。',
  },
  {
    type: 'paragraph',
    html: '数 分 を かけて 正確 な 給餌 量 を 計算 する こと は 、 現代 の 飼い主 が 実践 できる 最も 効率 的 な 「 予防 医療 」 の 一つ です。 健康 体重 を 維持 する こと は、 糖尿 病 や 心臓 疾患 、 関節 炎 の リスク を 劇的 に 減少 さ せ、 ペット と の 幸せ な 時間 を 増やして くれる でしょ う。 定期 健診 の 際 は、 ぜひ 獣医師 に 給餌 管理 案 が 最適 か どう か を 確認 して みて ください。',
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
