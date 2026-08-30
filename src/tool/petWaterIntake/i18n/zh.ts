import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'dog-cat-water-intake-calculator';
const title = '猫狗每日饮水量计算器';
const description = '根据体重、饮食类型、活动量和环境温度，估算猫或狗每日所需的总水量及水碗饮水量。';

const ui: PetWaterIntakeUI = {
  "journeyHint": "选择宠物类型，输入体重，然后设置当天的食物与气候条件。",
  "speciesLegend": "这是谁的水碗？",
  "speciesDog": "狗",
  "speciesCat": "猫",
  "weightLabel": "体重",
  "weightHint": "请填写宠物目前的健康体重。",
  "weightKg": "kg",
  "dietLegend": "食物能提供多少水分？",
  "dietDry": "以干粮为主",
  "dietMixed": "干湿混合喂养",
  "dietWet": "以湿粮（罐头）为主",
  "activityLegend": "今天的活动量",
  "activityCalm": "安静 / 休息",
  "activityTypical": "适中 / 正常",
  "activityActive": "活跃 / 运动量大",
  "heatLegend": "气候与温度",
  "heatNormal": "舒适 / 正常",
  "heatWarm": "偏热",
  "heatHot": "炎热 / 酷暑",
  "resultEyebrow": "水位与饮水量估算",
  "totalRangeLabel": "全天所需总水量（包含所有来源）",
  "drinkingRangeLabel": "水碗建议饮水量参考",
  "totalRangeHint": "包含食物水分在内的全天总水分需求区间。",
  "drinkingRangeHint": "估算的从水碗中直接饮用的水量。",
  "statusEveryday": "日常标准状态",
  "statusActive": "高活动量日",
  "statusWarm": "偏热天气",
  "statusDemanding": "高消耗环境",
  "statusDetailEveryday": "基础维持模式，未叠加额外的炎热或剧烈运动消耗。",
  "statusDetailActive": "运动会增加水分流失。请保持充足新鲜凉水供应。",
  "statusDetailWarm": "高温会导致喘气散热增多。遮阴与通风比具体数值更重要。",
  "statusDetailDemanding": "高运动量与高温叠加。请密切观察宠物状态。",
  "resultEmpty": "请输入有效的体重以显示饮水量估计。",
  "sceneAria": "所选宠物的储水容器",
  "sceneTotal": "总水量",
  "noteTitle": "水碗不能替代兽医诊断",
  "noteText": "请保持清洁新鲜的水随时可用。若发现饮水量或排尿量突然异常变化，请及时就医。",
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    "question": "猫狗每天需要喝多少水？",
    "answer": "根据 AAHA 的兽医通用指引，犬类的基础维持水需求量约为每天每公斤体重 60 mL，猫类约为 40 mL。实际饮水量会根据饮食、气温和运动量有所浮动。"
  },
  {
    "question": "喂湿粮会减少宠物在水碗里的饮水量吗？",
    "answer": "是的。湿粮罐头的含水量通常在 75% 至 82% 之间，仅凭用餐就能满足很大一部分水分需求。因此吃湿粮的宠物去水碗喝水的次数变少是完全正常的。"
  },
  {
    "question": "什么时候需要警惕宠物的饮水量变化？",
    "answer": "如果您发现宠物突然大量饮水（多饮症）或完全拒绝喝水，应及时咨询兽医。这可能是糖尿病、慢性肾脏病等疾病的早期信号。"
  },
  {
    "question": "高温天气和运动会使需水量翻倍吗？",
    "answer": "是的。高温和剧烈运动会增加哈气散热造成的水分流失。请务必提供凉爽的阴凉处和充足的新鲜饮用水。"
  }
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  {
    "name": "选择物种与体重",
    "text": "选择猫或狗，并输入当前的健康体重（千克或磅）。"
  },
  {
    "name": "设定主要饮食类型",
    "text": "选择干粮、混合饮食或罐头湿粮，以计算食物所含的水分。"
  },
  {
    "name": "调整活动量与气温",
    "text": "设定今天的运动强度和环境温度，折算哈气散热带来的水分消耗。"
  },
  {
    "name": "查看水分建议区间",
    "text": "查看每日所需总水量以及预计需要从水碗中补充的水量。"
  }
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "猫狗每日饮水量与健康管理指南",
    "items": [
      "基础维持量：狗约每天 60 mL/kg，猫约每天 40 mL/kg（根据 AAHA 官方标准）。",
      "饮食影响：湿粮含水量高达 70-80%，会显著减少去水碗喝水的频率。",
      "高温与运动：哈气散热会加速水分流失，需要额外补充凉爽的新鲜饮用水。",
      "健康预警：饮水量突然暴增或骤减需及时就兽医检查。",
      "充足供应：建议在家里多个安静地点放置干净的水碗。"
    ]
  },
  {
    "type": "title",
    "text": "猫狗每日饮水需求量计算与健康管理",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "充 足 的 水 分 对 猫 狗 的 新 陈 代 谢 、 消 化 吸 收 、 关 节 润 滑 和 肾 脏 健 康 至 关 重 要 。 成 年 猫 狗 体 重 的   6 0 %   至   7 0 %   由 水 分 组 成 ， 即 使 是 轻 微 的 缺 水 也 会 干 扰 关 键 的 生 理 功 能 。 美 国 动 物 医 院 协 会 （ A A H A ） 等 权 威 文 献 指 出 ， 犬 类 的 基 础 维 持 水 需 求 量 约 为 每 天 每 公 斤 体 重   6 0   m L ， 猫 类 约 为   4 0   m L 。"
  },
  {
    "type": "paragraph",
    "html": "但 需 要 注 意 的 是 ， 这 一 数 值 代 表 的 是 ' 每 日 总 水 分 需 求 ' ， 而 不 等 同 于 宠 物 必 须 从 水 碗 里 喝 下 去 的 水 量 。 宠 物 的 每 日 总 水 分 来 源 包 括 ： 直 接 饮 水 、 食 物 中 自 带 的 水 分 以 及 细 胞 呼 吸 产 生 的 代 谢 水 。 理 解 这 一 区 别 可 以 避 免 主 人 在 喂 食 湿 粮 时 因 宠 物 去 水 碗 喝 水 少 而 产 生 不 必 要 的 焦 虑 。"
  },
  {
    "type": "title",
    "text": "总水分需求与水碗饮水量的区别",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "普 通 干 粮 的 含 水 量 仅 为   6 %   至   1 0 % ， 因 此 吃 干 粮 的 宠 物 绝 大 部 分 水 分 都 需 要 靠 去 水 碗 喝 水 来 补 充 。 而 罐 头 湿 粮 的 含 水 量 高 达   7 5 %   至   8 2 %   左 右 ， 吃 湿 粮 的 宠 物 可 以 在 用 餐 时 直 接 获 取 大 部 分 水 分 ， 导 致 去 水 碗 喝 水 的 次 数 非 常 少 ， 这 在 生 理 上 是 完 全 正 常 的 。"
  },
  {
    "type": "table",
    "headers": [
      "影响因素",
      "对水分需求的影响",
      "核心注意事项"
    ],
    "rows": [
      [
        "物种",
        "决定基础代谢水率",
        "狗约 60 mL/kg，猫约 40 mL/kg"
      ],
      [
        "体重",
        "按比例决定总量",
        "建议按理想健康体重计算"
      ],
      [
        "食物含水量",
        "决定食物提供的水分比例",
        "湿粮能极大减少水碗饮水需求"
      ],
      [
        "气温与运动",
        "增加哈气蒸散流失",
        "高温天气需大幅增加凉水供应"
      ]
    ]
  },
  {
    "type": "title",
    "text": "日常饮水管理建议",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "宠 物 主 人 应 致 力 于 随 时 提 供 干 净 新 鲜 的 饮 用 水 。 对 于 天 生 渴 感 较 弱 的 猫 咪 ， 使 用 流 动 宠 物 饮 水 机 或 宽 浅 的 猫 水 碗 有 助 于 鼓 励 自 主 饮 水 。"
  },
  {
    "type": "card",
    "title": "干粮喂养",
    "icon": "mdi:food-drumstick",
    "html": "吃 干 粮 的 宠 物 高 度 依 赖 水 碗 饮 水 。 请 保 证 水 碗 清 洁 ， 并 放 置 在 安 静 易 到 达 的 位 置 。"
  },
  {
    "type": "card",
    "title": "湿粮喂养",
    "icon": "mdi:food-drumstick",
    "html": "湿 粮 能 提 供 丰 富 的 水 分 。 即 使 宠 物 去 水 碗 喝 水 较 少 也 是 正 常 的 ， 但 仍 需 保 证 随 时 有 水 。"
  },
  {
    "type": "card",
    "title": "炎热与运动",
    "icon": "mdi:weather-sunny",
    "html": "高 温 运 动 时 哈 气 散 热 剧 烈 。 请 提 供 遮 阴 休 息 区 并 及 时 补 水 ， 防 止 中 暑 脱 水 。"
  },
  {
    "type": "tip",
    "title": "需要就医的异常信号",
    "html": "饮 水 量 突 然 暴 增 （ 多 饮 ） 或 完 全 拒 绝 喝 水 都 是 重 要 的 临 床 信 号 。 如 伴 有 呕 吐 、 精 神 萎 靡 ， 请 立 即 送 医 。"
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
