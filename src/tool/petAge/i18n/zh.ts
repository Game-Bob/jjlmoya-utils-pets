import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'pet-age-calculator';
const title = '宠物年龄换算器';
const description = '了解您的爱犬或爱猫换算成人类后的真实年龄。告别过时的“乘7规则”。使用我们基于最新兽医学研究的计算器，精准掌握宠物的生命阶段。';

const ui: PetAgeUI = {
  toolTitle: '年龄计算器',
  toolSubtitle: '您的毛茸茸的朋友换算成人类后到底多少岁了？',
  petNameLabel: '宠物姓名（可选）',
  petNamePlaceholder: '例如：巴迪',
  petTypeDog: '狗',
  petTypeCat: '猫',
  sizeSmall: '小型',
  sizeMedium: '中型',
  sizeLarge: '大型',
  sizeGiant: '巨型',
  birthYearLabel: '出生年份',
  humanAgeLabel: '换算成人类年龄为',
  humanAgeUnit: '岁',
  humanAgeYears: '岁',
  lifeStageLabel: '生命阶段',
  milestoneLabel: '下一个里程碑',
  shareBtn: '分享结果',
  shareSuccess: '复制成功！正在打开卡片...',
  humanAgeTitle: '神奇年龄',
  recalculateBtn: '计算其他年龄',
  realAgeLabel: '实际年龄',
  defaultPetName: '您的宠物',
  stageDogPuppy: '顽皮幼犬期',
  stageDogTeen: '叛逆青春期',
  stageDogAdult: '巅峰成年期',
  stageDogMature: '优雅成熟期',
  stageDogSenior: '睿智暮年期',
  stageCatKitten: '好奇幼猫期',
  stageCatYouth: '活泼青少期',
  stageCatReign: '主宰成猫期',
  stageCatVeteran: '受宠老猫期',
  stageCatVenerable: '德高望重长寿期',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: '“狗的一岁等于人类的七岁”是真的吗？',
    answer: '不 是 真的。 这 是 一个 过度 简化 的 规则， 已经被 现代 兽医学 研究所 否定。 宠物 在 生命 的 最初 两年 成长 极其 迅速， 之后 这个 过程 会 随着 体重 和 品种 的 不同 而 显著 放缓。 最新 的 研究 发现 ， 这种 传统 的 乘 7 比例 完全 无法 描绘 宠物 生物学 层面 的 老化 曲线。',
  },
  {
    question: '为什么大型犬老得更快？',
    answer: '大型 犬 具有 更快的 代谢 和 生长 速度， 这 会 导致 其 细胞 产生 更大的 氧化 应激。 这 意味着 与 小型犬 相比， 它们的 预期 寿命 通常 会 更短。 兽医 观察 到 大型 犬 的 器官 在 较低 的 年代 龄 时 就 开始 表现 出 老化 迹象。',
  },
  {
    question: '猫与人类相比是如何衰老的？',
    answer: '猫 在 一个月 大时 结束 婴儿期， 6 个月 大时 进入 青春期， 并在 2 岁 时 达到 成年 （相当于 人类 的 24 岁）。 之后， 猫 的 每一个 寿年 大约 相当于 人类 的 4 岁。 与 犬 类 相比 ， 猫 的 衰老 曲线 相对 稳定 且 线性。',
  },
  {
    question: '宠物多大岁数被认为是“老年”？',
    answer: '通常 而言， 当 宠物 达到 其 预期 寿命 的 75% 时 就 被 视为 老年。 对于 猫 来说， 通常 是 从 7 到 11 岁 开始， 具体 取决于 它们的 健康 状况。 高龄 宠物 需要 更加 频繁 的 医疗 检查 和 专门 的 营养 支持。',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: '选择宠物种类', text: '选择 您 拥有 的 是 狗 还是 猫， 以 应用 正确 的 生物学 计算 公式。' },
  { name: '输入体型（仅限犬类）', text: '对于 狗 来说， 体重 是 关键 因素。 请 标明 它是 小型 （10 公斤 以下）、 中型 （10 至 25 公斤）、 大型 （25 至 45 公斤） 还是 巨型 （45 公斤 以上）。' },
  { name: '输入出生年份', text: '输入 您的 宠物 出生 的 年份， 以 计算 它们的 年代 龄。' },
  { name: '分析生命阶段', text: '查看 结果 以 了解 您的 宠物 与 人类 相比 处于 幼年 、 青年 、 成年 还是 老年 阶段。' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '关于宠物衰老您需要了解的知识',
    items: [
      '“乘 7 规则” 是 一个 误区 ： 宠物 在 最初 的 2 年 呈 指数 级 成熟。',
      '1 岁 的 狗 相当于 15 岁 的 人类 ； 2 岁 的 狗 相当于 24 岁 的 人类。',
      '2 岁 之后， 大型 犬 的 衰老 速度 快于 小型 犬。',
      '猫 遵循 更加 线性 的 曲线 ： 2 岁 后 每一个 猫 寿年 等于 人类 的 4 岁。',
      '了解 真实 的 生命 阶段 有助于 提供 针对性 的 医疗 护理。',
      '饮食 和 锻炼 环境 是 决定 宠物 衰老 速度 的 外部 关键 因素。',
    ],
  },
  { type: 'title', text: '关于您宠物年龄的科学真相', level: 2 },
  {
    type: 'paragraph',
    html: '您 知道 吗 ？ 一只 2 岁 的 猫 已经 具备了 人类 24 岁 的 成熟度。 探索 为什么 “乘 7 规则” 只是 段子。 那个 “1 个 狗 年 等于 7 个 人 类 年” 的 老 传说 只是 一种 过度 的 简化。 生物学 上 的 现实 要 有趣 得 多 ： 宠物 在 生命 的 最初 两年 以 惊人的 速度 成熟， 极快 地 达到 性成熟 和 体成熟。 之后， 这种 衰老 曲线 会 趋于 平缓 并 放缓。',
  },
  {
    type: 'paragraph',
    html: '通过 这个 科学 工具 ， 您 可以 更好 地 了解 伴侣 动物 的 生理 状态 。 衰老 是 一个 复杂 的 生理 过程 ， 涉及 细胞 修复 能力 的 下降 和 代谢 率 的 变化 。 最新 的 表观 遗传学 标记 研究 表明 ， 狗 的 衰老 过程 在 早期 是 极富 爆发性 的 。 这种 知识 有助于 宠物 主人 在 正确 的 时间 进行 疫苗 接种 和 健康 筛查 。 从 幼年 的 发育 支持 到 老年 的 慢性病 预警 ， 年龄 换算 器 都 能 提供 宝贵的 参考 。',
  },
  { type: 'title', text: '计算背后的科学原理', level: 3 },
  {
    type: 'paragraph',
    html: '此 工具 采用 <strong>美国 兽医 协会 (AAHA)</strong> 的 官方 指南 以及 关于 犬 类 DNA 甲基化 的 最新 研究 模型 ， 旨在 为 您 提供 尽可能 准确 的 估算 。 DNA 甲基化 分析 被 称为 “表观 遗传 钟” ， 通过 检测 遗传物质 上 的 化学 变化 来 揭示 生命体 内部 的 生物 年龄 。',
  },
  {
    type: 'paragraph',
    html: '我们的 算法 将 这些 前沿 数据 与 数百万 临床 案例 相 结合 ， 为 不同 体型 的 犬 类 定制了 专属 的 折算系数 。 无论 您 的 宠物 是 娇小 的 贵宾 还是 壮硕 的 藏獒 ， 都能 得到 符合 其实际 生理 状况 的 评价 。 这 这种 科学 的 态度 能够 极大 地 提升 宠物 的 福利水平 。',
  },
  {
    type: 'table',
    headers: ['物种', '第 1 年', '第 2 年', '第 3 年起'],
    rows: [
      ['猫', '15 岁 人类', '24 岁 人类', '每年 增加 4 岁'],
      ['小型犬', '15 岁 人类', '24 岁 人类', '每年 增加 5 岁'],
      ['中型犬', '15 岁 人类', '24 岁 人类', '每年 增加 6 岁'],
      ['大型犬', '15 岁 人类', '24 岁 人类', '每年 增加 7 岁'],
      ['巨型犬', '15 岁 人类', '24 岁 人类', '每年 增加 8 岁'],
    ],
  },
  { type: 'title', text: '生命阶段 ： 每个 阶段 应该 注意 什么 ？', level: 3 },
  {
    type: 'paragraph',
    html: '了解 您 宠物 的 真实 年齢 有助于 您 理解 它们 在 每个 阶段 的 医疗 和 情感 需求 。 处于 不同 时期 的 动物 对 蛋白质 、 脂肪 以及 锻炼 量的 要求 完全 不同 。',
  },
  {
    type: 'card',
    title: '幼犬 或 少年期 （从 0 到 1 岁）',
    icon: 'mdi:star-shooting',
    html: '这是 爆发性 生长 的 阶段 。 骨骼 在 发育 ， 牙齿 在 更换 ， 大脑 像 海绵 一样 吸收 信息 。 疫苗 接种 和 早期 社交 在 此 阶段 至关重要 。 保证 优质 的 幼宠 粮 是 建立 坚实 健康 基础 的 关键 步骤 。',
  },
  {
    type: 'card',
    title: '成年期 （从 2 到 6 岁）',
    icon: 'mdi:shield-check',
    html: '身体 和 心理 的 巅峰 状态 。 性格 已经 定型 。 这是 享受 高强度 户外 活动 的 黄金 时间 。 保持 理想 体重 以 预防 未来 可能 出现 的 关节 或 心脏 疾病 是 这一 阶段 的 核心 任务 。',
  },
  {
    type: 'card',
    title: '老年期 （7 岁 以上）',
    icon: 'mdi:heart-pulse',
    html: '口鼻 周围 开始 出现 白毛 ， 睡眠 时间 增加 。 代谢 明显 放缓 。 从 此 阶段 开始 ， 建议 每 6 个月 进行 一次 兽医 检查 。 密切 关注 关节炎 和 牙齿 健康 。 合理 使用 膳食 补充剂 可以 显著 提升 晚年 生存 质量 。',
  },
  {
    type: 'tip',
    title: '兽医专业建议',
    html: '计算 出 的 年龄 是 一个 平均 的 生物学 估算 。 品种 、 遗传 以及 生活 方式 等 因素 都会 显著 影响 您 宠物 的 实际 衰老 速度 。 请 务必 定期 咨询 专业 兽医 以 获取 一对一 的 个性化 护理 方案 。',
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
  
  faq,
  bibliography,
  howTo,
  schemas,
};
