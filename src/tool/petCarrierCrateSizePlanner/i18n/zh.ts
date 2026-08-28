import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'pet-carrier-crate-size-planner';
const title = '宠物航空箱与出行航空箱尺寸规划器';
const description = '根据猫狗的6项身体测量数据计算理想的航空箱或出行箱内部尺寸，包含航空托运说明和舒适度检查清单。';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: '先测量，后选购。出行更安心。',
  journeyHint: '选择宠物种类与出行方式，输入体长等测量数据，即可生成内部空间与尺寸参考框。',
  unitLegend: '显示单位',
  speciesStep: '选择宠物类型',
  metricUnit: '公制',
  imperialUnit: '英制',
  speciesLegend: '谁要出行？',
  speciesDog: '犬类',
  speciesCat: '猫类',
  modeLegend: '主要出行方式',
  modeCar: '车载',
  modeAir: '航空托运',
  measurementsLegend: '输入测量数据',
  noseTailLabel: '鼻尖至尾巴根部长度',
  noseTailHint: '测量时不包含尾巴自身的弯曲长度',
  elbowHeightLabel: '地面至肘关节高度',
  shoulderWidthLabel: '肩宽',
  standingHeightLabel: '站立自然高度',
  beddingLabel: '垫子或垫褥厚度',
  weightLabel: '宠物体重',
  cmUnit: '厘米',
  inchUnit: '英寸',
  kgUnit: '公斤',
  lbUnit: '磅',
  snubNosedLabel: '短吻犬猫品种（扁脸品种）',
  snubNosedHint: '航空运输需要遵循IATA特别调整说明。请咨询兽医师与航空公司。',
  presetLegend: '选择预设模板',
  presetCat: '猫咪',
  presetSmallDog: '小型犬',
  presetMediumDog: '中型犬',
  presetLargeDog: '大型犬',
  resultEyebrow: '推荐测量框架',
  resultTitle: '能够自由转身的活动空间',
  resultDimensionLabel: '建议最小内部起始尺寸',
  lengthLabel: '长度（深度）',
  widthLabel: '宽度',
  heightLabel: '高度',
  petWeightLabel: '宠物体重',
  journeyLabel: '出行方式',
  statusComfort: '基础舒适标准',
  statusAirReview: '航空托运审查事项',
  statusSnub: '短吻品种已调整',
  resultDetail: '购买或出发前，请务必核对航空箱内部真实净空、箱门尺寸、通风口及承运商规定。',
  checklistTitle: '四项身体姿态检查',
  checklistStand: '宠物可以自然站立和端坐，头部或耳朵不触及顶部。',
  checklistTurn: '宠物可以在站立状态下顺畅地原地转身。',
  checklistLie: '宠物可以在垫子上以自然姿势舒适卧躺。',
  checklistAirline: '托运时请确认航空公司限制、通风孔比例、门锁牢固度及防漏垫。',
  invalidInput: '请输入大于零的测量数值与体重。',
  noteTitle: '本工具用于尺寸评估，不代表航班托运许可',
  noteText: '各航空公司、车辆与路线的具体要求有所差异。对于短吻品种或有健康隐患的宠物，请咨询兽医评估出行适宜性。',
  methodTitle: '计算方法',
  methodText: '计算依据IATA（国际航空运输协会）指导标准：最小内部长度为鼻尖至尾根长加上二分之一肘高；宽度为肩宽的2倍；高度为站立高度加上垫子厚度。',
  blueprintLabel: '带有内部尺寸导向线及宠物示意图的航空箱测量图',
  dimensionInside: '内部尺寸',
  checkMark: '确认',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: '如何为猫狗测量选购航空箱所需的体形数据？',
    answer: '测量从鼻尖到尾巴根部的长度、地面到肘关节的高度、双肩最宽处的宽度，以及地面到头顶或耳尖最高点的高度。垫子厚度需单独加算。',
  },
  {
    question: '本规划器计算出哪些内部尺寸？',
    answer: '根据体长和肘高估算所需的最小内部长度，根据肩宽估算内部宽度，并计算包含垫子在内的总高度。',
  },
  {
    question: '计算结果是否保证能通过航空公司的托运审核？',
    answer: '不能。航空模式采用IATA参考公式，但各航空公司有各自的具体规定。出行前请务必确认承运商的最新要求。',
  },
  {
    question: '为什么短吻品种在航空托运时需要更大的箱体？',
    answer: 'IATA指南建议为短吻品种提供更充裕的空间，以降低飞行过程中发生过热和呼吸不畅的风险。',
  },
  {
    question: '车载航空箱是不是越大越好？',
    answer: '不是。航空箱应保证宠物能站立、转身和躺下，同时尺寸应适中，以便在车内使用安全带或固定装置牢固安置。',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: '选择出行方式', text: '选择车载或航空托运，以设置对应的审查标准。' },
  { name: '输入6项测量数据', text: '在宠物情绪平稳自然站立时测量各项身体尺寸与体重。' },
  { name: '查看内部尺寸建议', text: '将生成的长度、宽度和高度作为比对市售航空箱的最小内径指标。' },
  { name: '核对规范与结构', text: '购买前确认门锁安全性、通风口配置以及航空或车辆固定要求。' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: '宠物 航空箱 与 出行箱 尺寸 挑选 全 指南 详解',
    items: [
      '切勿 仅凭 体重 选箱 务必 根据 身体 尺寸 准确 测量',
      '对比 真实 产品 时 应以 内部 有效 净空 尺寸 为准',
      '提前 检查 箱门 锁扣 及 通风口 分布 安全 情况',
      '航空 托运 需要 特别 准备 并 咨询 兽医师 专业 意见',
    ],
  },
  { type: 'title', text: '如何 规划 航空箱 内部 尺寸 与 规范', level: 2 },
  {
    type: 'paragraph',
    html: '合格的 出行箱 必须 满足 四大 自然 动作 需求 站立 端坐 顺畅 转身 以及 舒适 躺卧 。 本 计算器 根据 体型 数据 为您 推算 所需的 内部 净空 尺寸 。 为 确保 宠物 旅途 安全 舒适 请 仔细 测量 各项 身体 数据 。',
  },
  {
    type: 'paragraph',
    html: '计算 出的 数值 代表 内部 有效 空间 。 请 注意 厚垫子 或 挂式 水碗 会 占用 部分 内部 空间 。 选购 商品 时 建议 比对 实际 最窄 处 的 净空 尺寸 。 如有 疑问 建议 选择 大一号 型号 。',
  },
  { type: 'title', text: '各项 身体 测量 数据 的 用途 与 意义', level: 2 },
  {
    type: 'table',
    headers: ['测量 项目', '作用 说明', '在 计算 中的 应用'],
    rows: [
      ['鼻尖 至 尾根长', '确定 不含 尾巴 的 身体 基础 长度', '长度'],
      ['地面 至 肘高', '确保 转身 时 腿部 的 活动 余量', '长度'],
      ['肩宽', '保障 体幅 最宽处 的 横向 空间', '宽度'],
      ['站立 高度', '防止 头顶 或 耳朵 触及 箱顶', '高度'],
      ['垫子 厚度', '铺设 铺垫 后 维持 有效 净空', '高度'],
      ['宠物 体重', '用于 核对 航空箱 的 最大 承重 限制', '审查'],
    ],
  },
  {
    type: 'paragraph',
    html: '计算 公式 参考 IATA 活体 动物 运输 标准 内部 长度 为 体长 加上 二分之一 肘高 宽度 为 肩宽 的 2倍 高度 为 站立 高度 加上 垫子 厚度 。 科学 的 尺寸 规划 能 有效 缓解 宠物 长途 出行 的 焦虑 感 。',
  },
  { type: 'title', text: '航空 托运 注意 事项 与 短吻 品种 评估', level: 2 },
  {
    type: 'paragraph',
    html: '仅凭 尺寸 计算 并不 等同于 获得了 航空公司 的 登机 许可 。 机型 季节 以及 通风 条件 等 因素 均需 综合 考虑 。 短吻 犬猫 因 呼吸 结构 特殊 需要 更为 宽敞 的 箱体 与 兽医 评估 。 请在 出行 前 提前 联系 承运 航空公司 核实 最新 的 托运 标准 。',
  },
  {
    type: 'tip',
    title: '实际 空间 测试 建议 与 家中 评估',
    html: '在 安静 环境 中 让 宠物 进入 箱内 观察 其 活动 姿态 。 若 显 拥挤 请 选择 更大号 的 型号 。 守护 宠物 的 健康 与 安全 是 出行 的 首要 任务 。',
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
