import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'pet-daily-ration-calculator';
const title = '宠物每日喂食量计算器';
const description = '计算您的爱犬或爱猫所需的准确喂食量。本工具基于兽医通用的 RER 和 DER 公式，助力宠物维持健康体重。';

const ui: PetRationUI = {
  toolTitle: '每日喂食量计算器',
  sectionProfile: '1. 宠物资料',
  labelAnimal: '动物',
  labelStage: '生命阶段',
  labelWeight: '体重',
  labelActivity: '身体活动量',
  sectionDiet: '2. 饮食与食物',
  labelDietType: '喂养类型',
  speciesDog: '狗',
  speciesCat: '猫',
  speciesRabbit: '兔子',
  stagePuppy: '幼年 或 少年 阶段',
  stageAdult: '成年 阶段',
  stageSenior: '老年 阶段',
  activityLow: '低',
  activityMod: '常规',
  activityHigh: '高',
  dietDry: '仅干粮',
  dietMixed25: '混合 (25%)',
  dietHalf: '一半 (50%)',
  dietWet: '仅湿粮',
  manualAdjust: '手动调整 (1-99%)',
  wetPercentLabel: '饮食中湿粮的百分比',
  tagDry: '干粮',
  tagWet: '湿粮',
  totalKcal: '总计',
  kcalUnit: '千卡(kcal)/天',
  statusPuppy: '快速成长阶段',
  statusSenior: '成熟型代谢率',
  statusLargeDog: '大型犬：注意关节',
  statusDefault: '理想体重范围',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: '什么是 RER，为什么它很重要？',
    answer: 'RER ( Resting Energy Requirement , 静止 能量 需求 ) 是 您的 宠物 在 休息 状态 下 维持 基本 生命 功能 必需 的 最低 能量 。 它是 科学 制定 每日 喂食 量 的 基础 ， 能够 有效 预防 营养 不良 或 过度 肥胖 。 理解 RER 有助于 宠物 主人 根据 实际 生理 需求 调整 饮食 ， 确保 它们 获得 的 能量 既不 缺乏 也 不会 造成 器官 负担 。',
  },
  {
    question: '绝育对宠物的喂食量有什么影响？',
    answer: '绝育 后 的 动物 基础 代谢 通常 会 降低 约 15% 至 20% 。 为了 避免 体重 快速 增加 ， 您 可能 需要 适当 减少 喂食 量 ， 或者 在 计算器 中 将 活动 水平 调整 为 “ 低 ” 以 匹配 它们 的 总 消耗 。 绝育 后 激素 的 变化 会 影响 脂肪 的 代谢 模式 ， 因此 此时 的 饮食 监测 显得 尤为 重要 。',
  },
  {
    question: '这个计算器可以给幼犬使用吗？',
    answer: '处于 快速 增长期 的 幼犬 需要 的 能量 远 高于 成犬 ， 有时 甚至 高达 RER 的 3 倍 。 本 计算器 专门 针对 成年 的 犬 猫 进行了 优化 。 对于 幼年 期 宠物 ， 请 务必 定期 咨询 兽医 以 制定 量身 定制 的 饮食 计划 。 过早 的 营养 盈余 或 缺乏 都会 给 骨骼 等 发育 带来 不利 影响 。',
  },
  {
    question: '每天应该分几次喂食？',
    answer: '理想 的 做法 是 将 计算 出的 每日 总 喂食 量 分成 2 次 到 3 次 投放 。 这 有助于 维持 宠物 血糖 水平 的 稳定 并 有助于 消化 系统 的 健康 ， 特别是 对于 易患 胃 扭转 的 某些 大型 品种 。 规律 的 进食 还能 让 宠物 在 心理 上 更有 安全感 。',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: '请 选择 宠物 种类 并 检查', text: '准确 标注 您 的 宠物 是 狗 还是 猫 ， 因为 它们 的 代谢率 和 体重 计算 标准 存在 显著 差异 。 这是 准确 计算 的 基础 。' },
  { name: '使用 滑块 确认 准确 体重', text: '通过 滑块 将 指标 移动 到 您的 宠物 当前 的 准确 体重 ( kg ) 位置 。 建议 使用 近期 的 称重 数据 以 获得 最佳 的 能量 指引 。' },
  { name: '设定 您 伙伴 的 实际 活动量', text: '根据 您 的 伙伴 每天 在 户外 实际 锻炼 的 情况 ， 在 低 、 常规 或 高 之间 选择 一个 合适 的 选项 。 这 将 修改 最终 的 能量 系数 。' },
  { name: '查阅 并 输入 粮袋 的 卡路里', text: '查阅 宠物 食品 包装 上 标注 的 kcal/kg 数值 后 输入 ， 这样 计算器 就能 自动 算出 精确 到 克 的 每日 喂食 重量 。' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '兽医 营养学 与 宠物 健康 管理 的 核心 原则',
    items: [
      'RER 的 计算 公式 是 70 × ( 体重 kg )^0.75 。 这是 所有 科学 热量 计算 的 生理学 基础 。',
      'DER 是 在 RER 的 基础 上 乘以 宠物 生活 方式 系数 后 得到 的 精确 能量 指南 。',
      '完成 绝育 后 的 宠物 相比 未 绝育 的 同类 ， 所 需 的 热量 可能会 减少 20% 左右 。',
      '目前 约有 50% 的 伴侣 宠物 受 肥胖 困扰 ， 这 会 严重 缩短 寿命 并 导致 多种 慢性病 。',
      '精确 的 喂食量 控制 是 宠物 主人 所能 采取 的 最为 便捷 的 預防 医疗 方法 。',
      '强烈 建议 使用 电子 秤 按照 科学 的 喂食 计划 进行 投喂 。',
    ],
  },
  { type: 'title', text: '制定 宠物 科学 理想 每日 喂食量 的 深度 全方位 指南', level: 2 },
  {
    type: 'paragraph',
    html: '正确 喂养 猫 狗 不仅仅 是 在 每晚 填满 它们 的 碗 那么 简单 。 科学 的 营养 是 支撑 它们 长期 健康 、 长寿 以及 心理 状态 稳定 的 核心 支柱 。 <strong>宠物 每日 喂食量 计算器</strong> 是 每一位 有 责任感 的 宠物 主人 必备 的 精准 工具 ， 旨在 避免 现代 兽医 营养 学 中 极其 常见 的 两大 难题 ： 由于 长期 营养 缺乏 导致 的 疾病 ， 以及 常 发生 在 全球 范围 内 的 宠物 肥胖 危机 。',
  },
  {
    type: 'paragraph',
    html: '在 本 指南 中 ， 我们 将 深入 探讨 热量 需求 计算 背后 的 生理 基础 ， 手把手 教学 宠物 家长 如何 识别 食品 包装 的 核心 标签 信息 ， 以及 年龄 、 身体 活动量 和 生理 状态 是 如何 具体 耦合 并 影响 您 的 伙伴 每天 所 需 的 食物 份量 。 通过 这些 知识 的 应用 ， 您 可以 帮助 宠物 维持 在 最 理想 的 体 况 ， 降低 糖尿病 以及 关节炎 的 风险 。',
  },
  { type: 'title', text: '喂养 背后 的 营养 科学 ： 彻底 理解 RER 与 DER 的 关系', level: 3 },
  {
    type: 'paragraph',
    html: '为了 确定 一个 动物 每天 需要 消耗 多少 的 能量 ， 兽医 营养学家 通用 两个 指引 指标 ： RER 及其 衍生 的 DER 。 RER 代表 静息 代谢 ， 而 DER 则是 最终 的 消耗 指标 。',
  },
  {
    type: 'paragraph',
    html: 'RER 负责 提供 维持 呼吸 、 血液 循环 以及 基础 器官 运行 所 需 的 动力 。 而 DER 则 会 根据 宠物 是 活泼 的 猎犬 还是 安静 的 室内 猫 来 修改 这个 基准 。 只有 当 这 二者 达到 动态 平衡 时 ， 才能 确保 宠物 长久 保持 出色 的 体 态 评分 ( BCS ) 。',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: 实测 静息 能量', value: '70 × kg^0.75' },
      { label: '幼年 成长 阶段 系数', value: 'x2.5 至 x3.5' },
      { label: '活泼 成体 阶段 系数', value: 'x1.6 至 x2.0' },
      { label: '高龄 老年 阶段 系数', value: 'x1.0 至 x1.4' },
    ],
  },
  { type: 'title', text: '如何 准确 提取 宠物 食品 中 的 “ 代谢能 ” 数值', level: 3 },
  {
    type: 'paragraph',
    html: '为了 让 算法 算出 最为 准确 的 喂食 重量 ， 您 需要 提供 粮食 的 <strong>热量 密度</strong> 。 这 通常 标注 在 “ 保证 分析 ” 或 “ 典型 值 ” 一栏 中 ， 以 kcal/kg 为 单位 。 如果 包装 信息 缺失 ， 请 务必 咨询 品牌 或 使用 本 手册 的 参考 均值 。 配合 厨房 秤 使用 ， 您 就能 达到 精确 喂养 的 专业 级别 。',
  },
  {
    type: 'stats',
    items: [
      { label: '轻体 减肥 专用粮', value: '约 3000 kcal/kg' },
      { label: '中端 成犬 综合粮', value: '约 3500 kcal/kg' },
      { label: '高能 幼宠 专门粮', value: '约 4000 kcal/kg' },
      { label: '湿润 罐头 食品', value: '约 1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: '来自 宠物 医生 的 投喂 建议',
    html: '请 记住 ， 每一只 宠物 都 是 独一无二 的 。 计算器 提供 了 强大 的 基础 线 ， 但 您 仍需 通过 定期 触摸 肋骨 来 确认 体 态 。 如果 您 手指 轻轻 一 扫 就能 触摸 到 肋骨 ， 说明 它们 处于 完美 体重 ； 如果 感觉 需要 穿过 一层 厚 脂肪 ， 那么 就 该 考虑 限制 摄入 了 。',
  },
  { type: 'title', text: '解析 猫 与 狗 在 营养 代谢 上的 生物学 差异', level: 3 },
  {
    type: 'paragraph',
    html: '猫 是 专性 肉食 动物 ， 拥有 极其 严格 的 蛋白质 偏好 。 相比之下 ， 狗 虽 具有 杂食 性 ， 但 摄入 过多 的 淀粉 仍然 会 导致 体重 飙升 。 无论 是 猫 还是 狗 ， 维持 苗条 的 体型 都是 减轻 心肺 系统 压力 以及 延长 运动 器官 寿命 的 最佳 方案 。 这种 长期 的 坚持 将 会 在 宠物 的 晚年 得到 厚报 。',
  },
  {
    type: 'paragraph',
    html: '每天 哪怕 只 花 三 分钟 来 使用 计算器 ， 都 是 一项 极具 回报 的 投资 。 它 不仅 能 省下 未来的 医疗 费 ， 还能 让 您 的 伙伴 陪伴 您 更 长 的 时间 。 在 下次 预约 家庭 兽医 时 ， 记得 展示 您 的 给 药 与 喂食 计划 ， 以便 获得 更 具 针对性 的 专业 验证 。',
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
  faqTitle: '常见 问题 与 解答 ( FAQ )': '更多 参考文献',
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
