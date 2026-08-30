import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';

const slug = 'pet-gestation-calculator';
const title = '宠物怀孕周期计算器';
const description = '根据交配日期推算狗、猫、兔子或雪山貂的预产期和预计生产时间段。';

const ui: PetGestationLocaleContent['ui'] = {
  "journeyHint": "选择宠物种类，输入交配日期，查看预计生产时间段。",
  "instantHint": "修改任意选项，孕期日历将实时更新。",
  "speciesLegend": "这是哪种宠物？",
  "speciesDog": "狗",
  "speciesCat": "猫",
  "speciesRabbit": "兔子",
  "speciesFerret": "雪山貂",
  "speciesDogMeta": "58至72天",
  "speciesCatMeta": "64至66天",
  "speciesRabbitMeta": "约31天",
  "speciesFerretMeta": "约42天",
  "matingDateLabel": "交配日期",
  "matingDateHint": "请输入已知最早的交配日期。此结果仅供参考。",
  "presetToday": "今天",
  "presetWeekAgo": "7天前",
  "presetFortnightAgo": "14天前",
  "resultEyebrow": "孕期指南针显示",
  "dueDateLabel": "典型预产期",
  "windowLabel": "预计生产时间段",
  "remainingLabel": "距离预产期天数",
  "elapsedLabel": "已怀孕天数",
  "daysLabel": "天",
  "dayLabel": "天",
  "statusFuture": "输入的日期在未来",
  "statusWaiting": "孕期正常进行中",
  "statusWindow": "已进入预产时间段",
  "statusLate": "已超过预计最晚日期",
  "resultEmpty": "计算结果将在此处显示。",
  "sampleLabel": "示例展示",
  "sceneMating": "交配日",
  "sceneToday": "当前进度",
  "sceneDue": "预产时间段",
  "noteTitle": "重要健康提示",
  "noteText": "交配日期与实际受精日期可能存在差异。请咨询兽医师进行B超检查和产前护理。",
  "sourceTitle": "计算依据",
  "sourceText": "犬类采用58至72天区间，猫、兔子和雪山貂参考MSD兽医手册标准。",
  "invalidDate": "请输入有效的交配日期。",
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    "question": "宠物怀孕计算器有多准确？",
    "answer": "此结果 为 推算值 。 犬类 交配日 与 排卵 受精日 可能 相差 数天 ， 精子 在 母犬 体内 可 存活 数天 。 计算器 提供 预测 时间段 而非 单一 绝对 日期 。 建议 由 兽医 通过 B超 确认 。 帮助 主人 做好 计划 。"
  },
  {
    "question": "狗的怀孕期是多少天？",
    "answer": "根据 MSD 兽医 手册 ， 从 首次 交配 起 约为 58 至 72天 。 若 确定 排卵日 ， 则 范围 缩短 为 62 至 64天 。 品种 与 胎儿 数量 也会 影响 生产 。"
  },
  {
    "question": "猫的怀孕期是多少天？",
    "answer": "猫 的 怀孕期 通常 约为 65天 （64 至 66天） 。 交配 刺激 会 诱发 排卵 ， 孕期 相对 稳定 。 方便 主人 提前 准备 产房 。"
  },
  {
    "question": "为什么包含兔子和雪山貂？",
    "answer": "兔子 （约31天） 和 雪山貂 （约42天） 是 常见 宠物 ， 且 具有 明确 的 孕期 记录 。 方便 主人 查阅 参数 。"
  },
  {
    "question": "什么时候应该联系兽医？",
    "answer": "若 已 超过 预计 最晚 日期 未 生产 、 出现 难产 、 大出血 或 极度 虚弱 ， 请 立即 就医 。"
  }
];

const howTo: PetGestationLocaleContent['howTo'] = [
  {
    "name": "选择宠物种类",
    "text": "选择 狗 、 猫 、 兔子 或 雪山貂 。"
  },
  {
    "name": "输入交配日期",
    "text": "填写 记录 的 首次 交配 日期 。"
  },
  {
    "name": "查看指南针",
    "text": "检查 典型 预产期 和 预计 生产 区间 。"
  },
  {
    "name": "做好分娩准备",
    "text": "提前 准备 产房 并 联系 兽医 诊所 。"
  }
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "宠物孕期概览",
    "items": [
      "输入 交配 日期 并 选择 宠物 种类 计算 预产期 。",
      "犬类 因 受精 时间 差异 具有 更宽 的 预产 范围 。",
      "猫 、 兔子 及 雪山貂 依据 MSD 兽医 手册 标准 。",
      "本 工具 仅用于 规划 参考 ， 不能 替代 兽医 诊断 。"
    ]
  },
  {
    "type": "title",
    "text": "宠物怀孕周期计算器工作原理",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "本 计算器 根据 交配 日期 和 不同 物种 的 孕期 生理 特征 ， 推算 预产期 及 分娩 时间段 。 犬类 交配日 与 受精日 可能 不一致 ， 因此 设定 弹性 时间段 。 帮助 主人 提前 做好 护理 准备 以及 整理 向 兽医师 咨询 的 问题 。 宠物 主人 和 兽医师 监督 孕期 健康 的 重要 指南 ， 确保 母体 和 幼崽 获得 最佳 的 分娩 准备 与 护理 支援 。 科学 监测 有利于 健康 。 宠物 主人 和 兽医师 监督 孕期 健康 的 重要 指南 ， 确保 母体 和 幼崽 获得 最佳 的 分娩 准备 与 护理 支援 。 科学 监测 有利于 健康 。 宠物 主人 和 兽医师 监督 孕期 健康 的 重要 指南 ， 确保 母体 和 幼崽 获得 最佳 的 分娩 准备 与 护理 支援 。 科学 监测 有利于 健康 。 宠物 主人 和 兽医师 监督 孕期 健康 的 重要 指南 ， 确保 母体 和 幼崽 获得 最佳 的 分娩 准备 与 护理 支援 。 科学 监测 有利于 健康 。"
  },
  {
    "type": "paragraph",
    "html": "动态 指南针 直观 展示 已 怀孕 天数 及 当前 孕期 所处 阶段 ， 帮助 宠物 主人 做好 迎接 新生命 的 准备 。 当 超过 预测 最晚 期限 时 ， 提示 信息 会 引导 及时 咨询 兽医 。"
  },
  {
    "type": "title",
    "text": "常见宠物孕期参数表",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "物种",
      "典型孕期",
      "基于交配日的推算范围"
    ],
    "rows": [
      [
        "狗",
        "约63天",
        "58至72天"
      ],
      [
        "猫",
        "约65天",
        "64至66天"
      ],
      [
        "兔子",
        "约31天",
        "31天"
      ],
      [
        "雪山貂",
        "约42天",
        "42天"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "犬类 孕期 计算 需 留有 余地 ， 因为 精子 在 母犬 体内 可 存活 数天 。 给出 时间 范围 比 给出 单一 确切 日期 更 科学 严谨 。"
  },
  {
    "type": "title",
    "text": "分娩前的准备工作",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "准备 安静 干净 的 分娩窝 ， 并 妥善 保存 宠物 医院 的 紧急 联系 方式 。 遵守 兽医 关于 营养 和 产前 检查 的 指导 。"
  },
  {
    "type": "tip",
    "title": "宠物健康高于一切",
    "html": "如 发现 异常 症状 ， 请 第一 时间 寻求 兽医师 专业 帮助 。"
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
