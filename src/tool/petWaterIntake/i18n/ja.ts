import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'dog-cat-water-intake-calculator';
const title = '犬猫の1日水分補給量計算ツール';
const description = '体重、フードの種類、活動量、気温から犬や猫の1日に必要な水分量を計算します。';

const ui: PetWaterIntakeUI = {
  "journeyHint": "ペットの種類を選択し、体重を入力して、フードと気温を設定してください。",
  "speciesLegend": "対象のペット",
  "speciesDog": "犬",
  "speciesCat": "猫",
  "weightLabel": "体重",
  "weightHint": "現在の適正体重を入力してください。",
  "weightKg": "kg",
  "dietLegend": "フードからの水分補給量",
  "dietDry": "主にドライフード（カリカリ）",
  "dietMixed": "ミックス食（ドライ＋ウェット）",
  "dietWet": "主にウェットフード（缶詰・パウチ）",
  "activityLegend": "今日の活動量",
  "activityCalm": "おとなしい / 休息",
  "activityTypical": "普通 / 標準的",
  "activityActive": "活発 / 運動量多め",
  "heatLegend": "気温と環境",
  "heatNormal": "適温 / 普通",
  "heatWarm": "暖かい",
  "heatHot": "暑い / 猛暑",
  "resultEyebrow": "推定量",
  "totalRangeLabel": "必要総水量（全供給源を含む）",
  "drinkingRangeLabel": "水飲み場（ボウル）からの目安飲水量",
  "totalRangeHint": "フードの水分を含む1日の合計水分量です。",
  "drinkingRangeHint": "ボウルから直接飲む水量の推定値です。",
  "statusEveryday": "標準的な環境",
  "statusActive": "運動量の多い日",
  "statusWarm": "気温が高い日",
  "statusDemanding": "高負荷環境",
  "statusDetailEveryday": "追加の暑さや運動負荷のない基本維持プロファイルです。",
  "statusDetailActive": "運動により水分損失が増加します。常に新鮮な水を用意してください。",
  "statusDetailWarm": "暑さでパンティング（喘鳴）が増えます。日陰と涼しい環境が最優先です。",
  "statusDetailDemanding": "高活動量と暑さが重なっています。ペットの状態を注意深く観察してください。",
  "resultEmpty": "正しい体重を入力すると推定量が表示されます。",
  "sceneAria": "選択されたペットの給水量",
  "sceneTotal": "必要総水量",
  "noteTitle": "水飲みボウルは診断器具ではありません",
  "noteText": "常に清潔な新鮮水を用意してください。飲水量や排尿量の急激な変化がある場合は獣医師にご相談ください。",
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    "question": "犬や猫は1日にどれくらい水を飲むべきですか？",
    "answer": "AAHAの一般的な獣医ガイドラインでは、犬は体重1kgあたり約60mL、猫は約40mLが維持基本量とされています。フードや気温、運動量で大きく変動します。"
  },
  {
    "question": "ウェットフードを与えると水飲み場の水を飲む量が減りますか？",
    "answer": "はい、ウェットフードは約75%〜82%が水分であるため、食事から多くの水分を摂取できます。そのためボウルから飲む量が減るのは正常です。"
  },
  {
    "question": "飲水量について病院を受診すべきタイミングは？",
    "answer": "急激な多飲（多渇）や全く水を飲まなくなる（拒水）症状が見られた場合は、腎臓病や糖尿病のサインの可能性があるため速やかに獣医師にご相談ください。"
  },
  {
    "question": "暑さや運動で水分の必要量は倍増しますか？",
    "answer": "はい、体温調節のパンティング（喘鳴）により水分が急速に失われるため、暑い日や運動後はより多くの新鮮な水が必要になります。"
  }
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  {
    "name": "ペットの種類と体重を選択",
    "text": "犬か猫を選び、現在の健康な体重をkgまたはlbで入力します。"
  },
  {
    "name": "フードの種類を指定",
    "text": "ドライ、ミックス、ウェットの中から普段の食事タイプを選択します。"
  },
  {
    "name": "活動量と気温を設定",
    "text": "今日の運動量と周囲の気温レベルを設定し、呼吸による水分損失を加味します。"
  },
  {
    "name": "推定量を確認",
    "text": "1日の必要総水量と、ボウルから飲むべき目安水量を確認します。"
  }
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "犬と猫の水分補給に関する重要ガイド",
    "items": [
      "維持基本量：犬は1日あたり約60 mL/kg、猫は約40 mL/kgがAAHAの推奨基準です。",
      "フードの影響：ウェットフードは最大80%の水分を含み、水飲み場の摂取量を大きく減らします。",
      "暑さと運動：パンティング（呼吸）により水分損失が増加するため、常に新鮮な水が必要です。",
      "注意すべきサイン：飲水量の急激な変化は早期の獣医受診が必要です。",
      "新鮮な水の提供：家の中に複数の給水ポイントを設置しましょう。"
    ]
  },
  {
    "type": "title",
    "text": "犬と猫の1日必要水分量の計算と健康管理",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "犬 や 猫 の 適 切 な 水 分 補 給 は 、 代 謝 機 能 、 消 化 吸 収 、 関 節 の 潤 滑 、 そ し て 腎 臓 の 健 康 維 持 に 不 可 欠 で す 。 成 犬 ・ 成 猫 の 体 重 の 約 6 0 % 〜 7 0 % は 水 分 で 構 成 さ れ て お り 、 わ ず か な 水 分 不 足 で あ っ て も 重 要 な 生 理 機 能 を 低 下 さ せ る 可 能 性 が あ り ま す 。 米 国 動 物 病 院 協 会 （ A A H A ） の 文 献 で は 、 犬 で 1 k g あ た り 約 6 0   m L 、 猫 で 約 4 0   m L が 1 日 の 維 持 必 要 量 と さ れ て い ま す 。"
  },
  {
    "type": "paragraph",
    "html": "た だ し 、 こ の 数 値 は 「 1 日 に 必 要 な 総 水 分 量 」 で あ り 、 必 ず し も ボ ウ ル か ら 飲 む 水 分 の 量 だ け を 意 味 す る わ け で は あ り ま せ ん 。 ペ ッ ト の 1 日 の 総 水 分 量 は 、 直 接 飲 む 水 、 キ ャ ッ ト フ ー ド や ド ッ グ フ ー ド に 含 ま れ る 水 分 、 そ し て 代 謝 に よ っ て 体 内 で 生 成 さ れ る 水 分 か ら 構 成 さ れ て い ま す 。 こ の 違 い を 理 解 す る こ と で 、 ウ ェ ッ ト フ ー ド を 与 え て い る 際 に ペ ッ ト が 水 を 飲 む 回 数 が 少 な く て も 、 過 度 に 心 配 す る 必 要 が な い こ と が 分 か り ま す 。"
  },
  {
    "type": "title",
    "text": "必要総水分量と水飲みボウルからの摂取量の違い",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "与 え て い る フ ー ド の 形 態 は 、 ペ ッ ト が 水 飲 み 場 か ら ど れ だ け の 水 を 摂 取 す る か を 決 定 す る 最 大 の 要 因 で す 。 市 販 の ド ラ イ フ ー ド （ カ リ カ リ ） の 水 分 含 有 量 は わ ず か 6 % 〜 1 0 % で あ る た め 、 ペ ッ ト は 1 日 の 必 要 水 分 量 の ほ と ん ど を 水 飲 み ボ ウ ル か ら 直 接 摂 取 し な け れ ば な り ま せ ん 。 一 方 で 缶 詰 や パ ウ チ な ど の ウ ェ ッ ト フ ー ド に は 約 7 5 % 〜 8 2 % の 水 分 が 含 ま れ て い ま す 。 ウ ェ ッ ト フ ー ド の み を 食 べ て い る 場 合 、 食 事 だ け で 一 日 に 必 要 な 水 分 の 大 部 分 を 摂 取 で き る た め 、 ボ ウ ル か ら 水 を 飲 む 回 数 が 非 常 に 少 な く な る の は 生 理 的 に 至 極 正 常 な こ と で す 。"
  },
  {
    "type": "table",
    "headers": [
      "要因",
      "水分量への影響",
      "主な考慮事項"
    ],
    "rows": [
      [
        "ペットの種類",
        "基準率を決定",
        "犬 約60 mL/kg、猫 約40 mL/kg"
      ],
      [
        "体重",
        "全体の必要量をスケール",
        "適正体重を基準にする"
      ],
      [
        "フードの水分",
        "食事からの供給量を決定",
        "ウェットフードはボウル摂取量を減少させる"
      ],
      [
        "気温・活動量",
        "パンティングによる損失を増加",
        "暑い日はより多くの水が必要"
      ]
    ]
  },
  {
    "type": "title",
    "text": "日常の給水管理に関する実践的アドバイス",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "飼 い 主 様 は 数 値 目 標 を 厳 密 に 強 制 し よ う と す る の で は な く 、 常 に 清 潔 で 新 鮮 な 水 を 自 由 に 飲 め る 環 境 を 整 え る こ と に 集 中 す る べ き で す 。 水 飲 み ボ ウ ル は 毎 日 洗 っ て 清 潔 に 保 ち 、 新 鮮 な 水 を 補 充 し て く だ さ い 。 特 に 砂 漠 の 祖 先 を 持 つ 猫 は 喉 の 渇 き を 感 じ に く い た め 、 自 動 給 水 器 の 導 入 や ヒ ゲ が 当 た ら な い 広 い ボ ウ ル の 使 用 、 家 の 中 の 複 数 箇 所 へ の 水 飲 み 場 設 置 が 有 効 で す 。"
  },
  {
    "type": "card",
    "title": "ドライフード主食の場合",
    "icon": "mdi:food-drumstick",
    "html": "ボ ウ ル か ら の 自 発 的 な 飲 水 に 大 き く 依 存 し ま す 。 ト イ レ や 騒 音 の す る 家 電 か ら 離 れ た 静 か で ア ク セ ス し や す い 場 所 に 清 潔 な 水 飲 み 場 を 用 意 し て く だ さ い 。"
  },
  {
    "type": "card",
    "title": "ウェットフード主食の場合",
    "icon": "mdi:food-drumstick",
    "html": "食 事 か ら 十 分 な 水 分 が 得 ら れ る た め 、 ボ ウ ル か ら 飲 む 量 が 少 な く て も 心 配 い り ま せ ん 。 た だ し 、 夏 場 や 運 動 後 は い つ で も 水 が 飲 め る よ う に し て お き ま し ょ う 。"
  },
  {
    "type": "card",
    "title": "暑い日や運動後の管理",
    "icon": "mdi:weather-sunny",
    "html": "高 温 環 境 や 激 し い 運 動 時 は 、 パ ン テ ィ ン グ に よ る 蒸 発 で 水 分 が 速 や か に 失 わ れ ま す 。 日 陰 で の 休 息 と 十 分 な 水 分 補 給 を 行 い 熱 中 症 を 予 防 し て く だ さ い 。"
  },
  {
    "type": "tip",
    "title": "獣医師の診察が必要な異常サイン",
    "html": "急 に 水 を 飲 む 量 が 異 常 に 増 え た （ 多 渇 ） 、 あ る い は ま っ た く 水 を 飲 ま な く な っ た 場 合 は 重 大 な 臨 床 サ イ ン で す 。 慢 性 腎 臓 病 、 糖 尿 病 、 甲 状 腺 疾 患 な ど の 初 期 症 状 で あ る 可 能 性 が あ り ま す 。 継 続 的 な 変 化 が 見 ら れ る 場 合 は 速 や か に 獣 医 師 に ご 相 談 く だ さ い 。"
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
