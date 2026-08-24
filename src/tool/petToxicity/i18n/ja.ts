import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'pet-food-toxicity-checker';
const title = ' 犬 と 猫 の 危 険 食 品 ・ 中 毒 チ ェ ッ カ ー ';
const description = ' 犬 や 猫 が 誤 食 し た 危 険 な 食 べ 物 や 中 毒 症 状 を 確 認 し 、 獣 医 師 に 連 絡 す べ き タ イ ミ ン グ を 把 握 す る た め の ツ ー ル で す 。 ';

const ui: PetToxicityUI = {
 "journeyHint": " ペ ッ ト の 種 類 を 選 び 、 食 品 ア ト ラ ス を 開 い て 種 別 の 警 告 を 確 認 し て く だ さ い 。 ",
 "speciesLabel": " ペ ッ ト の 種 類 ",
 "speciesDog": " 犬 ",
 "speciesCat": " 猫 ",
 "speciesDogMeta": " 犬 用 プ ロ フ ィ ー ル ",
 "speciesCatMeta": " 猫 用 プ ロ フ ィ ー ル ",
 "foodLabel": " 食 べ 物 ・ 原 材 料 ",
 "foodPlaceholder": " 食 品 を 選 択 し て く だ さ い ",
 "foodMenuHint": " リ ス ク は 動 物 の 種 類 に よ っ て 異 な る た め 、 リ ス ト が 変 化 し ま す 。 ",
 "resultEyebrow": " 食 品 ア ト ラ ス の 判 定 ",
 "resultEmpty": " 食 品 を 選 択 し て 安 全 カ ー ド を 開 い て く だ さ い 。 ",
 "sceneLabel": " 誤 食 リ ス ク マ ッ プ ",
 "sceneReady": " 食 品 を 選 択 ",
 "sceneSelected": " 種 別 カ ー ド 表 示 中 ",
 "riskCritical": " 緊 急 対 応 が 必 要 ",
 "riskHigh": " 高 い リ ス ク ",
 "riskCaution": " 注 意 が 必 要 ",
 "riskUnknown": " デ ー タ 不 足 ",
 "riskLabel": " リ ス ク レ ベ ル ",
 "whyLabel": " 危 険 性 の 理 由 ",
 "signsLabel": " 注 意 す べ き 症 状 ",
 "actionLabel": " 対 処 法 ",
 "callVetLabel": " 最 も 安 全 な 対 応 は 獣 医 師 へ の 相 談 で す 。 ",
 "callVetText": " 計 算 ツ ー ル で 致 死 量 を 正 確 に 推 定 し た り 診 察 の 代 わ り を す る こ と は で き ま せ ん 。 ",
 "sourceLabel": " 根 拠 デ ー タ ",
 "sourceText": "ASPCA 、 FDA 、 MSD 獣 医 マ ニ ュ ア ル な ど の 中 毒 ガ イ ド ラ イ ン に 基 づ い て い ま す 。 ",
 "emergencyTitle": " 危 険 な も の を 食 べ て し ま っ た 場 合 ",
 "emergencyText": " す ぐ に 獣 医 師 や 夜 間 救 急 病 院 に 連 絡 し て く だ さ い 。 パ ッ ケ ー ジ や 食 べ た 量 、 時 間 メ モ を 手 元 に 用 意 し て く だ さ い 。 ",
 "openMenu": " メ ニ ュ ー を 開 く ",
 "closeMenu": " メ ニ ュ ー を 閉 じ る "
};

const faq: PetToxicityLocaleContent['faq'] = [
 {
 "question": " こ の チ ェ ッ カ ー で 安 全 か ど う か 確 認 で き ま す か ？",
 "answer": " い い え 。 一 般 的 な 誤 食 リ ス ク の 啓 発 ツ ー ル で あ り 、 診 断 や 致 死 量 計 算 を 行 う も の で は あ り ま せ ん 。 誤 食 の 疑 い が あ る 場 合 は 獣 医 師 に ご 相 談 く だ さ い 。 "
 },
 {
 "question": " 犬 に と っ て 特 に 危 険 な 食 べ 物 は 何 で す か ？",
 "answer": " キ シ リ ト ー ル 、 チ ョ コ レ ー ト 、 カ フ ェ イ ン 、 ブ ド ウ 、 レ ー ズ ン 、 玉 ね ぎ 、 ニ ン ニ ク 、 ア ル コ ー ル 、 生 イ ー ス ト 生 地 な ど が 挙 げ ら れ ま す 。 "
 },
 {
 "question": " 玉 ね ぎ や ニ ン ニ ク は 猫 に も 危 険 で す か ？",
 "answer": " は い 。 猫 は 玉 ね ぎ や ニ ン ニ ク な ど の ユ リ 科 ネ ギ 属 に よ る 赤 血 球 の 破 壊 に 対 し て 非 常 に 脆 弱 で す 。 "
 },
 {
 "question": " な ぜ キ シ リ ト ー ル の 警 告 は 犬 と 猫 で 異 な る の で す か ？",
 "answer": " キ シ リ ト ー ル は 犬 に お い て 急 激 な 低 血 糖 を 引 き 起 こ し ま す 。 猫 で の 危 険 性 は 現 在 研 究 段 階 で す 。 "
 },
 {
 "question": " リ ス ト に な い も の を 食 べ た 場 合 は ど う す れ ば よ い で す か ？",
 "answer": " リ ス ト に な い か ら と い っ て 安 全 と は 限 り ま せ ん 。 パ ッ ケ ー ジ を 保 管 し 、 す ぐ に 獣 医 師 に 相 談 し て く だ さ い 。 "
 }
];

const howTo: PetToxicityLocaleContent['howTo'] = [
 {
 "name": " ペ ッ ト の 種 類 を 選 択 ",
 "text": " 犬 ま た は 猫 を 選 択 し 、 専 用 の 情 報 を 表 示 さ せ ま す 。 "
 },
 {
 "name": " 食 品 を 選 択 ",
 "text": " メ ニ ュ ー か ら 該 当 す る 食 品 や 原 材 料 を 選 び ま す 。 "
 },
 {
 "name": " 安 全 カ ー ド を 確 認 ",
 "text": " 危 険 性 、 出 現 し う る 症 状 、 推 奨 さ れ る 対 応 を 確 認 し ま す 。 "
 },
 {
 "name": " 必 要 に 応 じ て 獣 医 師 に 連 絡 ",
 "text": " 実 際 に 誤 食 が あ っ た 場 合 は 、 食 品 の 情 報 を 持 っ て 獣 医 師 に 相 談 し て く だ さ い 。 "
 }
];

const seo: PetToxicityLocaleContent['seo'] = [
 {
 type: 'summary',
 title: " 犬 と 猫 の 食 品 安 全 ク イ ッ ク チ ェ ッ ク ",
 items: [
 " 犬 と 猫 で 代 謝 や 影 響 が 異 な る た め 、 最 初 に 種 類 を 選 択 し て く だ さ い 。 ",
 " 安 全 カ ー ド で 危 険 度 の 緊 急 性 や 症 状 を 把 握 し ま す 。 ",
 " 犬 の キ シ リ ト ー ル 誤 食 は 緊 急 事 態 と し て 扱 っ て く だ さ い 。 ",
 " 実 際 に 食 べ た 場 合 は 必 ず 獣 医 師 の 診 察 を 受 け て く だ さ い 。 "
],
 },
 {
 type: 'title',
 text: " 誤 食 チ ェ ッ カ ー の 責 任 あ る 活 用 方 法 ",
 level: 2,
 },
 {
 type: 'paragraph',
 html: " こ の 誤 食 中 毒 チ ェ ッ カ ー は 、 ペ ッ ト が 食 べ て は い け な い も の を 口 に し て し ま っ た 緊 急 時 の 確 認 を サ ポ ー ト し ま す 。 獣 医 師 に 状 況 を 正 確 に 伝 え る た め の 整 理 に 役 立 ち ま す 。 愛 犬 ・ 愛 猫 の 予 期 せ ぬ 誤 食 ト ラ ブ ル 時 に 冷 静 な 対 応 を サ ポ ー ト す る た め の 必 須 ツ ー ル で す 。 適 切 な 判 断 を 促 し ま す 。 ",
 },
 {
 type: 'paragraph',
 html: " 犬 と 猫 で は 物 質 に 対 す る 代 謝 機 能 が 異 な り ま す 。 キ シ リ ト ー ル は 犬 に 重 度 の 低 血 糖 を 引 き 起 こ し 、 ネ ギ 類 は 猫 の 赤 血 球 を 破 壊 し ま す 。 誤 っ た 応 急 処 置 を 行 わ ず 病 院 へ 連 絡 し ま し ょ う 。 正 し い 観 察 が 命 を 救 い ま す 。 ",
 },
 {
 type: 'title',
 text: " 主 な 危 険 食 品 と 詳 細 情 報 ",
 level: 2,
 },
 {
 type: 'table',
 headers: [" 食 品 ・ 原 材 料 "," 主 な 危 険 性 "," 重 要 事 項 "],
 rows: [[" チ ョ コ レ ー ト と カ フ ェ イ ン "," 心 臓 ・ 神 経 系 へ の 影 響 "," カ カ オ 濃 度 と 体 重 が 重 要 。 "],[" キ シ リ ト ー ル "," 犬 の 急 激 な 低 血 糖 "," 無 糖 ガ ム や 菓 子 を 確 認 。 "],[" ブ ド ウ ・ レ ー ズ ン "," 犬 の 急 性 腎 障 害 の 危 険 "," 少 量 で も 安 全 と 判 断 し な い 。 "],[" 玉 ね ぎ ・ ニ ン ニ ク "," 赤 血 球 破 壊 ・ 貧 血 "," 乾 燥 ・ パ ウ ダ ー 状 に も 注 意 。 "],[" 生 イ ー ス ト 生 地 "," 胃 の 膨 張 と ア ル コ ー ル 発 生 "," 発 酵 に よ る 圧 迫 と ア ル コ ー ル 。 "]],
 },
 {
 type: 'paragraph',
 html: " 化 学 的 中 毒 の ほ か 、 骨 に よ る 喉 や 消 化 管 の 詰 ま り 、 高 脂 質 食 に よ る 急 性 膵 炎 な ど の 物 理 的 リ ス ク に も 注 意 が 必 要 で す 。 状 態 の 慎 重 な 観 察 が 不 可 欠 で す 。 ",
 },
 {
 type: 'title',
 text: " 誤 食 後 に 取 る べ き 行 動 ",
 level: 2,
 },
 {
 type: 'list',
 items: [
 " 残 り の 食 べ 物 を 遠 ざ け 、 パ ッ ケ ー ジ を 保 管 す る 。 ",
 " 体 重 、 食 べ た 物 、 量 、 時 間 メ モ を 作 成 す る 。 ",
 " 獣 医 師 ま た は 動 物 病 院 に 電 話 す る 。 ",
 " 指 示 な し に 無 理 に 吐 か せ な い 。 ",
 " け い れ ん や ぐ っ た り し て い る 場 合 は 直 ち に 病 院 へ 行 く 。 "
],
 },
 {
 type: 'tip',
 title: " ペ ッ ト の 健 康 が 第 一 で す ",
 html: " 症 状 が 数 時 間 後 に 出 て く る 場 合 も あ り ま す 。 自 己 判 断 せ ず 専 門 家 に 相 談 し て く だ さ い 。 ",
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
