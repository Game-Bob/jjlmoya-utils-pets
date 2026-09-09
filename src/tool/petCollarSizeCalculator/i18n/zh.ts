import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'pet-collar-size-calculator';
const title = '宠物项圈尺寸计算器';
const description = '测量颈围，加入舒适余量，找到可以在宠物身上手动检查的可调项圈范围。';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: '颈围', unitLabel: '显示', centimetres: '厘米', inches: '英寸', allowanceLabel: '舒适余量', collarTypeLabel: '项圈类型', flatCollar: '普通项圈', breakawayCollar: '安全脱扣', martingaleCollar: '马丁格尔', statusTight: '增加余量', statusBalanced: '可以检查', statusLoose: '检查安全性', statusTightDetail: '请增加余量。', statusBalancedDetail: '请用手检查这个范围。', statusLooseDetail: '确认不会滑脱。', fitStudyLabel: '项圈贴合研究', fitWindowLabel: '寻找这个范围', measuredLabel: '测得颈围', roomLabel: '舒适余量', checkLabel: '手动检查', sceneAria: '显示颈部圆环和可调项圈范围的贴合研究', neckMarker: '颈部', easeMarker: '余量', rangeMarker: '项圈范围', minimumMarker: '起点', maximumMarker: '终点', checkFlat: '舒适、安全，没有摩擦。', checkBreakaway: '检查贴合度和脱扣装置。', checkMartingale: '收紧环不能压迫颈部。', invalidInput: '请输入有效的颈围和余量。',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: '如何测量宠物的颈围？', answer: '将柔软的软尺绕在项圈实际放置的位置。保持软尺水平并靠近毛发，不要压紧皮肤或毛发。如果项圈位置、毛发或宠物姿势发生变化，请重新测量。' },
  { question: '为什么结果是一个范围而不是单一尺寸？', answer: '可调项圈的调节长度不同，不同制造商的尺寸标签也不统一。计算器会加入你选择的余量，并生成一个小的比较范围。最后仍要把实际项圈戴在宠物身上检查。' },
  { question: '应该选择多少舒适余量？', answer: '没有适合所有宠物的固定数值。毛发、宽度、材料和活动都会改变贴合度。把数字当作可见的假设，再通过平静的手动检查确认舒适和安全。' },
  { question: '马丁格尔项圈也可以使用吗？', answer: '初步估算使用同一个颈围。最后的检查不同：收紧环必须有限制，不能造成勒压。如果不了解结构，请遵循制造商说明。' },
  { question: '幼年宠物也可以使用这个结果吗？', answer: '可以把它作为当前贴合度的参考。幼年宠物会成长，毛发也会变化，因此要定期重新测量并仔细检查。' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: '测量颈围', text: '宠物平静并自然站立时，在项圈放置的位置测量。软尺应保持平整，不要拉紧。' },
  { name: '选择余量', text: '用可见的滑块设置颈部与项圈之间的空间。初始的2厘米只是示例。' },
  { name: '选择类型', text: '选择普通项圈、安全脱扣或马丁格尔，查看对应结构的检查提示。' },
  { name: '比较调节范围', text: '寻找能够覆盖整个结果的项圈，然后在宠物身上实际检查。' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: '把测量值变成购买范围', items: ['在项圈实际放置的位置测量。', '让舒适余量可见，不要只按品种猜测。', '把结果和产品真实的调节范围比较。', '最后在宠物身上平静地检查。'] },
  { type: 'title', text: '这个计算器帮助你做什么决定', level: 2 },
  { type: 'paragraph', html: '当宠物处于两个尺寸之间、毛发较厚或仍在成长时，尺寸表会变得含糊。这个工具从一个可以自己确认的数值开始：项圈放置位置的颈围。然后加入你选择的舒适余量。结果不会猜测小号、中号或大号等商品标签，而是生成可以和产品可调尺寸比较的具体范围。' },
  { type: 'paragraph', html: '范围有意保持较短，用作购物时的起点。可调项圈没有全球统一标准，实际可用长度也可能和商品页面上的尺寸名称不同。当产品的调节范围覆盖整个结果时，它才适合进入候选列表。不过，数字本身不能证明边缘、扣件、毛发、材料或结构一定合适。' },
  { type: 'title', text: '购买前如何测量', level: 2 },
  { type: 'list', items: ['宠物平静并自然站立时测量。', '保持软尺水平，不要压紧毛发或皮肤。', '如果项圈要放得更高或更低，请重新测量。', '幼年宠物要记录日期，并在成长过程中持续检查贴合度。'] },
  { type: 'paragraph', html: '舒适余量是明确的假设，不是安全保证。合适的数值取决于宠物、毛发、宽度、材料和使用方式。手指检查可以提供参考，但不能把一个数字变成适用于所有宠物的规则。如果出现摩擦、咳嗽、疼痛、呼吸困难、紧张或活动受限，请取下项圈并咨询专业人士。' },
  { type: 'title', text: '阅读贴合圆环', level: 2 },
  { type: 'table', headers: ['信号', '含义', '下一步'], rows: [['测得颈围', '加入余量前的周长。', '如果软尺倾斜或太紧，请重新测量。'], ['起点', '颈围加上选择的余量。', '作为调节范围的下限。'], ['终点', '用于比较的小窗口。', '寻找覆盖整个窗口的调节范围。'], ['检查', '关于所选余量的提示。', '在宠物身上确认。']] },
  { type: 'title', text: '项圈类型会改变最后的检查', level: 2 },
  { type: 'paragraph', html: '普通项圈需要检查舒适度和安全性，安全脱扣或马丁格尔则还要检查结构。请观察边缘、扣件、毛发和收紧环。数字可以帮助筛选产品，但最后要结合放松的宠物状态和制造商说明来决定。' },
  { type: 'tip', title: '安静地用手检查', html: '宠物放松时戴上项圈。它应该能够无摩擦地移动、呼吸、进食、饮水和转动头部。如果项圈需要保持在原位，也要确认它不会从头部滑脱。美容、成长、体重变化或位置变化后都要重新检查。' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
