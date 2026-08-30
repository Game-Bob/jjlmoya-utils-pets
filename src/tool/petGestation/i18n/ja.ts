import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';

const slug = 'pet-gestation-calculator';
const title = 'ペット妊娠期間計算ツール';
const description = '交配日から犬、猫、ウサギ、フェレットの出産予定日と予定期間を正確に計算します。';

const ui: PetGestationLocaleContent['ui'] = {
  "journeyHint": "ペットの種類を選び、交配日を入力して出産予定日を確認してください。",
  "instantHint": "設定を変更するとすぐにスケジュールが更新されます。",
  "speciesLegend": "ペットの種類を選択してください",
  "speciesDog": "犬",
  "speciesCat": "猫",
  "speciesRabbit": "ウサギ",
  "speciesFerret": "フェレット",
  "speciesDogMeta": "58〜72日間",
  "speciesCatMeta": "64〜66日間",
  "speciesRabbitMeta": "約31日間",
  "speciesFerretMeta": "約42日間",
  "matingDateLabel": "交配日",
  "matingDateHint": "最初の交配日を入力してください。目安としての計算です。",
  "presetToday": "今日",
  "presetWeekAgo": "7日前",
  "presetFortnightAgo": "14日前",
  "resultEyebrow": "出産予定コンパスの計算結果",
  "dueDateLabel": "標準的な出産予定日",
  "windowLabel": "予想される出産期間",
  "remainingLabel": "予定日までの日数",
  "elapsedLabel": "経過日数",
  "daysLabel": "日",
  "dayLabel": "日",
  "statusFuture": "未来の日付が入力されています",
  "statusWaiting": "妊娠期間中",
  "statusWindow": "出産予定期間に入りました",
  "statusLate": "予定期間を過ぎています",
  "resultEmpty": "計算結果がここに表示されます。",
  "sampleLabel": "計算例",
  "sceneMating": "交配日",
  "sceneToday": "現在の進捗",
  "sceneDue": "出産予定期間",
  "noteTitle": "健康に関する重要なお知らせ",
  "noteText": "交配日が必ずしも受精日とは限りません。妊娠の確定や健康管理については獣医師にご相談ください。",
  "sourceTitle": "計算の根拠",
  "sourceText": "犬は58〜72日、猫・ウサギ・フェレットはMSD獣医マニュアルの基準値を参照しています。",
  "invalidDate": "正しい交配日を入力してください。",
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    "question": "ペット妊娠計算の正確性はどのくらいですか？",
    "answer": "あくまで 目安 です。 犬 の 場合、 交配日 と 排卵 ・ 受精日 が ずれる ことが あります。 精子 は 体内 で 数日間 生存 できる ため です。 獣医師 による 超音波 検査 や 触診 で より 正確な 日時 を 確認 できます。 飼い主 が 出産 の 準備 を 進める ための 計画 補助 ツール です。"
  },
  {
    "question": "犬の妊娠期間はどのくらいですか？",
    "answer": "MSD 獣医 マニュアル によると、 初回 交配 から 約 58 〜 72日 です。 排卵日 が 特定 されている 場合 は 62 〜 64日 と 短く なります。 犬種 や 胎児 数 も 実際の 出産日 に 影響 します。 個体差 に 配慮 して 期間 幅 で 表示 します。"
  },
  {
    "question": "猫の妊娠期間はどのくらいですか？",
    "answer": "猫 の 妊娠 期間 は 通常 約 65日（ 64 〜 66日 ） です。 交配 刺激 によって 排卵 が 誘発 される ため、 犬 よりも 期間 が 安定 しています。 産箱 の 準備 に 役立ちます。"
  },
  {
    "question": "なぜウサギやフェレットも含まれているのですか？",
    "answer": "ウサギ（ 約 31日 ） や フェレット（ 約 42日 ） も 一般的 な ペット であり、 明確な 妊娠 期間 データ が 存在 する ため、 併せて サポート しています。 飼い主 への 計画 ツール です。"
  },
  {
    "question": "どのような時に獣医師に連絡すべきですか？",
    "answer": "予定 期間 を 過ぎても 出産 が 始まらない 場合 や、 強い 陣痛 が 続いている のに 出産 しない 場合、 出血 や 異常な 分秘物、 母体 の 弱り が 見られる 際 は 直ちに 獣医師 に 相談 してください。"
  }
];

const howTo: PetGestationLocaleContent['howTo'] = [
  {
    "name": "ペットの種類を選択",
    "text": "犬、 猫、 ウサギ、 フェレット から 該当 する 種類 を 選択 します。"
  },
  {
    "name": "交配日を入力",
    "text": "確認 されている 最初の 交配日 を 入力 します。"
  },
  {
    "name": "コンパスを確認",
    "text": "標準 予定日、 予想 期間、 経過 日数 を 確認 します。"
  },
  {
    "name": "出産準備を進める",
    "text": "計算 結果 を 参考に 産箱 や 緊急 連絡先 を 準備 します。"
  }
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "ペットの妊娠期間概要",
    "items": [
      "交配日 と ペット の 種類 を 入力 して 出産 予定日 を 計算 します。",
      "犬 は 受精 時期 の 変動 の ため 予定幅 が 広め に 設定 されています。",
      "猫 ・ ウサギ ・ フェレット は MSD 獣医 マニュアル の 基準 に 準拠 しています。",
      "出産 準備 の ための ツール であり、 獣医師 の 診察 に 代わる ものではありません。"
    ]
  },
  {
    "type": "title",
    "text": "ペット妊娠期間計算ツールの仕組み",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "この ツール は 交配日 を 基準 に、 動物 ごとの 生理的 妊娠 期間 を 加算 して 予定日 を 算出 します。 犬 では 交配日 と 受精日 が 一致 しない ことが 多いため、 特定の 1日 だけ でなく 期間 幅 を 提示 します。 飼い主 が 出産 の 準備 や 獣医師 への 相談 タイミング を 把握 する のに 役立ちます。 飼い主 や 獣医師 が 妊娠 中 の 健康 を 観察 し 、 母体 と 子犬 ・ 子猫 の 安全な 出産 準備 を 最適に 進める ための 重要 な 指針 と なります 。 正しい 観察 と 準備 が 大切 です 。"
  },
  {
    "type": "paragraph",
    "html": "ビジュアル コンパス は 交配日 からの 経過 日数 と 現在 の 状態 を 直感的に 表示 します。 出産 予定 期間 に 入ると ステータス が 切り替わり、 準備 の タイミング を 逃しません。 期間 を 超過 した 際 も 注意 を 促します。 カレンダー は 判断 の 助け と なります。"
  },
  {
    "type": "title",
    "text": "各ペットの妊娠期間データ比較",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "種類",
      "標準期間",
      "交配日からの推定幅"
    ],
    "rows": [
      [
        "犬",
        "約 63日",
        "58 〜 72日"
      ],
      [
        "猫",
        "約 65日",
        "64 〜 66日"
      ],
      [
        "ウサギ",
        "約 31日",
        "31日"
      ],
      [
        "フェレット",
        "約 42日",
        "42日"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "犬 の 妊娠 期間 は 最も 個体差 が 大きいため、 余裕 を 持った 期間 表示 を 行っています。 猫 や 小動物 は 比較 的 安定した 日数 で 推移 します。 獣医学 的な 根拠 に 基づいて 適切な 観察 を 行いましょう。"
  },
  {
    "type": "title",
    "text": "出産を迎えるための事前準備",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "計算 結果 を 活用 して、 静かで 温かい 産箱 を 用意 し、 かかりつけ の 動物 病院 の 診察 時間 や 夜間 救急 の 連絡先 を 事前に 確認 しておきましょう。 栄養 や 衛生 管理 も 大切 です。 自己 判断 で 薬 を 与えたり 陣痛 を 促そう と しては いけません。"
  },
  {
    "type": "tip",
    "title": "ペットの健康と安全を最優先に",
    "html": "体調 不良 や 陣痛 の 異常、 予定日 の 大幅な 超過 が 見られる 場合は、 迷わず 獣医師 に 連絡 してください。"
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
