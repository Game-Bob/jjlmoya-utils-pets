import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'pet-food-toxicity-checker';
const title = ' 猫 狗 有 毒 危 险 食 物 自 查 Tool';
const description = ' 检 查 猫 狗 误 食 的 常 见 危 险 食 物 与 中 毒 症 状 ， 了 解 何 时 需 要 紧 急 联 系 兽 医 。 ';

const ui: PetToxicityUI = {
 "journeyHint": " 选 择 宠 物 类 型 ， 打 开 食 物 图 鉴 ， 查 看 针 对 该 物 种 的 危 险 警 告 。 ",
 "speciesLabel": " 宠 物 种 类 ",
 "speciesDog": " 狗 ",
 "speciesCat": " 猫 ",
 "speciesDogMeta": " 犬 类 档 案 ",
 "speciesCatMeta": " 猫 类 档 案 ",
 "foodLabel": " 食 物 或 成 分 ",
 "foodPlaceholder": " 请 选 择 食 物 ",
 "foodMenuHint": " 不 同 物 种 的 毒 性 风 险 不 同 ， 列 表 会 自 动 切 换 。 ",
 "resultEyebrow": " 食 物 图 鉴 判 定 ",
 "resultEmpty": " 请 选 择 食 物 以 打 开 安 全 卡 片 。 ",
 "sceneLabel": " 误 食 风 险 地 图 ",
 "sceneReady": " 请 选 择 食 物 ",
 "sceneSelected": " 专 属 安 全 卡 片 已 打 开 ",
 "riskCritical": " 紧 急 警 示 ",
 "riskHigh": " 高 风 险 ",
 "riskCaution": " 需 警 惕 ",
 "riskUnknown": " 数 据 不 足 ",
 "riskLabel": " 风 险 等 级 ",
 "whyLabel": " 危 险 原 因 ",
 "signsLabel": " 需 观 察 的 症 状 ",
 "actionLabel": " 应 对 措 施 ",
 "callVetLabel": " 最 安 全 的 做 法 是 咨 询 专 业 兽 医 。 ",
 "callVetText": " 计 算 工 具 无 法 精 准 估 算 毒 性 剂 量 ， 也 不 能 替 代 兽 医 检 查 。 ",
 "sourceLabel": " 参 考 依 据 ",
 "sourceText": " 数 据 基 于 ASPCA 、 FDA 及 MSD 兽 医 手 册 的 中 毒 指 南 。 ",
 "emergencyTitle": " 如 果 宠 物 误 食 了 危 险 物 品 ",
 "emergencyText": " 请 立 即 联 系 兽 医 或 宠 物 急 诊 。 保 留 包 装 、 成 分 表 、 估 计 食 用 量 及 时 间 。 ",
};

const faq: PetToxicityLocaleContent['faq'] = [
 {
 "question": " 此 工 具 能 保 证 我 的 宠 物 安 全 吗 ？",
 "answer": " 不 能 。 本 工 具 仅 供 科 普 参 考 ， 不 能 作 为 诊 断 或 剂 量 计 算 依 据 。 如 有 误 食 请 及 时 就 医 。 "
 },
 {
 "question": " 哪 些 食 物 对 狗 特 别 危 险 ？",
 "answer": " 木 糖 醇 、 巧 克 力 、 咖 啡 因 、 葡 萄 、 葡 萄 干 、 洋 葱 、 大 蒜 、 酒 精 及 生 酵 母 面 团 等 。 "
 },
 {
 "question": " 洋 葱 和 大 蒜 对 猫 危 险 吗 ？",
 "answer": " 是 的 。 猫 对 葱 属 植 物 （ 洋 葱 、 大 蒜 、 韭 菜 ） 引 起 的 红 细 胞 破 坏 非 常 敏 感 。 "
 },
 {
 "question": " 为 什 么 木 糖 醇 对 猫 和 狗 的 警 告 不 同 ？",
 "answer": " 木 糖 醇 会 导 致 狗 出 现 快 速 且 危 险 的 低 血 糖 。 对 猫 的 危 害 在 官 方 指 南 中 尚 无 明 确 结 论 。 "
 },
 {
 "question": " 如 果 误 食 的 食 物 不 在 列 表 中 怎 么 办 ？",
 "answer": " 未 列 出 不 代 表 安 全 。 请 保 留 包 装 并 立 即 咨 询 兽 医 。 "
 }
];

const howTo: PetToxicityLocaleContent['howTo'] = [
 {
 "name": " 选 择 宠 物 种 类 ",
 "text": " 选 择 狗 或 猫 以 加 载 专 有 数 据 。 "
 },
 {
 "name": " 选 择 食 物 成 分 ",
 "text": " 打 开 菜 单 并 选 择 相 近 的 食 物 或 成 分 。 "
 },
 {
 "name": " 查 看 安 全 卡 片 ",
 "text": " 了 解 风 险 等 级 、 可 能 出 现 的 症 状 及 建 议 应 对 措 施 。 "
 },
 {
 "name": " 及 时 联 系 兽 医 ",
 "text": " 如 发 生 实 际 误 食 ， 请 带 上 食 物 信 息 联 系 兽 医 。 "
 }
];

const seo: PetToxicityLocaleContent['seo'] = [
 {
 type: 'summary',
 title: " 猫 狗 食 物 安 全 快 速 自 查 ",
 items: [
 " 由 于 同 种 成 分 对 猫 狗 作 用 不 同 ， 请 先 选 择 宠 物 种 类 。 ",
 " 利 用 安 全 卡 片 了 解 危 险 程 度 及 紧 急 状 况 。 ",
 " 狗 误 食 木 糖 醇 需 作 为 紧 急 情 况 处 理 。 ",
 " 发 生 实 际 误 食 时 请 务 必 咨 询 专 业 兽 医 。 "
],
 },
 {
 type: 'title',
 text: " 如 何 负 责 任 地 使 用 本 有 毒 食 物 自 查 工 具 ",
 level: 2,
 },
 {
 type: 'paragraph',
 html: " 本 有 毒 食 物 自 查 工 具 旨 在 为 宠 物 误 食 后 的 紧 张 时 刻 提 供 快 速 参 考 ， 帮 助 主 人 在 联 系 兽 医 前 整 理 好 关 键 信 息 。 避 免 慌 乱 中 遗 漏 重 要 的 产 品 参 数 与 摄 入 时 间 。 及 时 准 备 好 准 确 的 资 料 能 为 救 治 争 取 宝 贵 宝 贵 的 时 间 。 ",
 },
 {
 type: 'paragraph',
 html: " 区 分 物 种 至 关 重 要 。 木 糖 醇 会 导 致 犬 类 严 重 低 血 糖 ， 而 洋 葱 和 大 蒜 会 破 坏 猫 的 红 细 胞 。 切 勿 使 用 未 经 证 实 偏 方 自 行 处 理 。 盲 目 催 吐 可 能 造 成 严 重 的 二 次 伤 害 。 ",
 },
 {
 type: 'title',
 text: " 主 要 危 险 食 物 与 关 键 细 节 ",
 level: 2,
 },
 {
 type: 'table',
 headers: [" 食 物 或 成 分 "," 主 要 危 险 "," 重 要 细 节 "],
 rows: [[" 巧 克 力 与 咖 啡 因 "," 对 心 脏 及 神 经 系 统 的 影 响 "," 可 可 含 量 与 体 重 是 关 键 。 "],[" 木 糖 醇 "," 引 发 犬 类 急 性 低 血 糖 "," 检 查 无 糖 口 香 糖 及 糕 点 。 "],[" 葡 萄 及 葡 萄 干 "," 犬 类 急 性 肾 损 伤 风 险 "," 切 勿 认 为 少 量 即 安 全 。 "],[" 洋 葱 与 大 蒜 "," 红 细 胞 破 坏 与 贫 血 "," 脱 水 及 粉 末 形 式 风 险 集 中 。 "],[" 生 酵 母 面 团 "," 胃 部 膨 胀 与 产 生 酒 精 "," 发 酵 产 生 压 力 与 酒 精 。 "]],
 },
 {
 type: 'paragraph',
 html: " 除 了 化 学 毒 性 外 ， 骨 头 造 成 的 物 理 性 堵 塞 以 及 高 脂 食 物 引 发 的 急 性 胰 腺 炎 同 样 需 要 警 惕 。 密 切 观 察 宠 物 的 精 神 状 态 与 生 理 反 应 非 常 重 要 。 ",
 },
 {
 type: 'title',
 text: " 发 生 误 食 后 的 处 理 步 骤 ",
 level: 2,
 },
 {
 type: 'list',
 items: [
 " 移 走 剩 余 食 物 并 保 留 包 装 。 ",
 " 记 录 宠 物 体 重 、 食 物 名 称 、 误 食 量 及 时 间 。 ",
 " 拨 打 兽 医 或 宠 物 急 诊 电 话 。 ",
 " 未 经 医 嘱 切 勿 盲 目 催 吐 。 ",
 " 如 出 现 抽 搐 或 昏 迷 请 立 即 送 医 。 "
],
 },
 {
 type: 'tip',
 title: " 宠 物 的 健 康 高 于 一 切 ",
 html: " 某 些 症 状 可 能 会 延 迟 数 小 时 出 现 ， 请 勿 等 待 病 情 恶 化 。 ",
 },
];

const schemas: PetToxicityLocaleContent['schemas'] = [
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

export const content: PetToxicityLocaleContent = {
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
