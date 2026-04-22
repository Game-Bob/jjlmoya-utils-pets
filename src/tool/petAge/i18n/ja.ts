import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'pet-age-calculator';
const title = 'ペットの年齢換算器';
const description = '愛犬・愛猫の本当の年齢を人間換算で調べてみましょう。「7倍する」という古いルールではなく、最新の獣医学に基づいた計算機を使用します。';

const ui: PetAgeUI = {
  toolTitle: '年齢計算機',
  toolSubtitle: 'あなたの家族であるペットは、人間でいうと本当は何歳？',
  petNameLabel: '名前（任意）',
  petNamePlaceholder: '例：バディ',
  petTypeDog: '犬',
  petTypeCat: '猫',
  sizeSmall: '小型',
  sizeMedium: '中型',
  sizeLarge: '大型',
  sizeGiant: '超大型',
  birthYearLabel: '誕生年',
  humanAgeLabel: '人間の年齢でいうと',
  humanAgeUnit: '歳',
  humanAgeYears: '歳',
  lifeStageLabel: 'ライフステージ',
  milestoneLabel: '次の節目',
  shareBtn: '結果を共有',
  shareSuccess: 'コピーしました！カードを開いています...',
  humanAgeTitle: '魔法の年齢',
  recalculateBtn: '他の年齢を計算する',
  realAgeLabel: '実年齢',
  defaultPetName: 'あなたのペット',
  stageDogPuppy: 'わんぱく子犬期',
  stageDogTeen: '反抗的思春期',
  stageDogAdult: '充実の成犬期',
  stageDogMature: '風格の成熟期',
  stageDogSenior: '知恵のシニア期',
  stageCatKitten: '好奇心旺盛な子猫期',
  stageCatYouth: '活発な若猫期',
  stageCatReign: 'お家の支配者期',
  stageCatVeteran: '甘えん坊ベテラン期',
  stageCatVenerable: '威厳ある長寿猫期',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: '「犬の1歳は人間の7歳」というのは本当ですか？',
    answer: 'いいえ。 それは あまりにも 単純化された ルール であり、 現代の 獣医学 では 否定されています。 犬 は 最初の 2年間 で 非常に 急速に 成長 し、 その後 は 体重 や 犬種 によって 大きく 異なります が、 老化 の スピード は 緩やか に なります。',
  },
  {
    question: 'なぜ大型犬は老化が早いのですか？',
    answer: '大型犬 は 代謝 と 成長 が 加速 されており、 それ が 細胞 に 大きな 酸化 ストレス を 与えます。 その 結果、 小型犬 よりも 平均寿命 が 短く なる 傾向 が あります。',
  },
  {
    question: '猫の老化は人間と比べてどうですか？',
    answer: '猫 は 生後 1ヶ月 で 乳児期 を 終え、 6ヶ月 で 思春期、 2歳 で 成人 （人間 の 24歳 相当） に 達します。 それ 以降 は、 猫 の 1年 が 人間 の 約 4年 に 相当 します。',
  },
  {
    question: 'ペットは何歳から「シニア」と呼ばれますか？',
    answer: '一般的に、 犬 は 予想寿命 の 75% に 達した とき に シニア と 見なされます。 猫 の 場合、 健康状態 にも よります が、 通常 は 7歳 から 11歳 頃 から です。',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'ペットの種類を選択', text: '正しい 生物学的 公式 を 適用 する ため に、 犬 か 猫 か を 選択 して ください。' },
  { name: 'サイズを入力（犬のみ）', text: '犬 の 場合、 体重 が 重要 です。 小型 （10kg まで） 、 中型 （10-25kg） 、 大型 （25-45kg） 、 超大型 （45kg 以上） から 選択 して ください。' },
  { name: '誕生年を入力', text: 'ペット の 誕生年 を 入力 して、 現在 の 暦 年齢 を 計算 します。' },
  { name: 'ライフステージを確認', text: '計算 結果 から、 人間 と 比較 して 現在 の ペット が 幼少期 、 青年期 、 成人期 、 シニア期 の どの 段階 に ある か を 確認 します。' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'ペットの老化について知っておくべきこと',
    items: [
      '「7倍ルール」 は 迷信 です。 犬 は 最初の 2年間 で 指数関数的 に 成長 します。',
      '犬 の 1歳 は 人間 の 15歳 に 相当 し、 2歳 は 24歳 に 相当 します。',
      '2歳 を 過ぎる と、 大型犬 は 小型犬 よりも 早く 老化 します。',
      '猫 は より 直線的 な 曲線 を たどり、 2歳 以降 の 1年 は 人間 の 4年 に 相当 します。',
      '正しい 年齢 換算 は 健康 管理 の ため の 重要 な 第一歩 と なります。',
      '定期 的 な 健康 診断 で 老化 の サイン を 早く 見つける こと が 大切 です。',
    ],
  },
  { type: 'title', text: 'ペットの年齢に関する科学的事実', level: 2 },
  {
    type: 'paragraph',
    html: '2歳 の 猫 が すでに 24歳 の 人間 と 同等 の 成熟度 を 持って いる こと を ご存知 ですか ？ 「7 を 掛ける」 という ルール が なぜ 迷信 なのか を 探って みましょう。 「犬 の 1歳 は 人間 の 7歳」 という 古い 説 は 単純化 しすぎ です。 生物学的 な 現実 は もっと 興味深い もの です。 ペット は 生後 2年間 で 驚異的 な 速さ で 成長 し、 性的 ・ 肉体的な 成熟 に 達します。 その後、 老化 の 曲線 は 緩やか に なります。',
  },
  {
    type: 'paragraph',
    html: 'この 急速な 成長期 には、 適切 な 栄養 と 社会化 が 欠かせません。 2歳 を 過ぎて からは、 メンテナンス 期 に 入り、 体調 の 変化 に 注意 を 払う 必要 が あります。 最近 の 研究 では、 犬 の DNA を 解析 することで、 より 正確な 生物学的 年齢 を 算出 できる よう に なりました。 これに より、 ライフ ステージ に 合わせた 最適な ケア を 提供 する こと が 可能 です。',
  },
  { type: 'title', text: '計算の背景にある科学', level: 3 },
  {
    type: 'paragraph',
    html: 'この ツール は 、 <strong>米国 動物 病院 協会 (AAHA)</strong> の 公式 ガイドライン と 、 犬 の DNA メチル化 に 関する 最新 の 研究 を 使用 して 、 可能 な 限り 正確な 予測 を 提供 します。 DNA メチル化 とは 、 遺伝子 の スイッチ の 役割 を 果たす 仕組み の 一つ で 、 老化 と 密接 に 関連 して います。',
  },
  {
    type: 'paragraph',
    html: '研究者 たちは 、 この 化学 的 な 変化 を 「エピジェネティック・クロック」 と 呼び 、 生体 の 内部 的 な 老化 の 進行 を 指し示す 指標 として 活用 して います。 私たちの 計算機 は 、 これら の 科学 的 プロトコル を 統合 し 、 ユーザー が 直感 的 に 理解 できる かたち で 出力 します。 これにより 、 愛犬 や 愛猫 の 健康 維持 に 役立てる こと が できます。',
  },
  {
    type: 'table',
    headers: ['種類', '1年目', '2年目', '3年目以降'],
    rows: [
      ['猫', '人間で15歳相当', '人間で24歳相当', '1年につき+4歳'],
      ['小型犬', '人間で15歳相当', '人間で24歳相当', '1年につき+5歳'],
      ['中型犬', '人間で15歳相当', '人間で24歳相当', '1年につき+6歳'],
      ['大型犬', '人間で15歳相当', '人間で24歳相当', '1年につき+7歳'],
      ['超大型犬', '人間で15歳相当', '人間で24歳相当', '1年につき+8歳'],
    ],
  },
  { type: 'title', text: 'ライフステージ：各段階で何を期待すべきか？', level: 3 },
  {
    type: 'paragraph',
    html: 'ペット の 本当 の 年齢 を 知る こと は 、 それぞれ の 段階 に おける 医学的 ・ 情緒的な ニーズ を 理解 する のに 役立ちます。 適切 な 食事 や 運動 は 、 寿命 を 延ばす ため の 鍵 と なります。',
  },
  {
    type: 'card',
    title: '子犬 または ジュニア期 (0 から 1歳 まで)',
    icon: 'mdi:star-shooting',
    html: '爆発 的 な 成長 の 段階 です。 骨 が 成長 し、 歯 が 生え変わり、 脳 は スポンジ の ように 情報 を 吸収 します。 予防 接種 と 早期 の 社会化 が 非常に 重要 です。 この 時期 の 体験 が 、 一生 の 性格 を 左右 します。',
  },
  {
    type: 'card',
    title: '成犬 または 成猫期 (2 から 6歳 まで)',
    icon: 'mdi:shield-check',
    html: '肉体 的 、 精神的な 全盛期 です。 個性 が 定まります。 激しい 運動 を 楽しみ、 将来 の 病気 を 予防 する ために 理想 的 な 体重 を 維持 する のに 最適な 時期 です。 肥満 に 注意 し、 規則正しい 生活 を 送りましょう。',
  },
  {
    type: 'card',
    title: 'シニア期 (7歳 以上)',
    icon: 'mdi:heart-pulse',
    html: 'マズル に 白髪 が 混じり 始め 、 睡眠 時間 が 増えます。 代謝 が 低下 します。 この 時期 からは 、 6ヶ月 ごと の 健康 診断 が 推奨 されます。 関節炎 や 歯 の 健康 に 注意 して ください。 サプリメント の 活用 も 検討 しましょう。',
  },
  {
    type: 'tip',
    title: '獣医師からのアドバイス',
    html: '計算 された 年齢 は 平均 的 な 生物学的 推定値 です。 犬種 、 遺伝 、 ライフスタイル など の 要因 が 、 ペット の 実際 の 老化 速度 に 大きく 影響 します。 個別 の 相談 に ついて は 、 常に 獣医師 に ご相談 ください。 長生き の ため に は 日々 の 観察 が 最も 大切 です。',
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
  faqTitle: 'よくある質問',
  faq: '参考文献',
  bibliography,
  howTo,
  schemas,
};
