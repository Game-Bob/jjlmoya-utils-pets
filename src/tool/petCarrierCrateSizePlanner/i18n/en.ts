import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'pet-carrier-crate-size-planner';
const title = 'Pet Carrier Crate Size Planner';
const description = 'Estimate practical internal carrier dimensions for a dog or cat from six measurements, with a separate air travel review and a clear comfort checklist.';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: 'Measure first. Buy with confidence.',
  journeyHint: 'Choose the pet and journey, enter the measurements, then use the blueprint as a shopping starting point for the carrier interior.',
  unitLegend: 'Display units',
  speciesStep: 'Start with the animal',
  metricUnit: 'Metric',
  imperialUnit: 'Imperial',
  speciesLegend: 'Who is traveling?',
  speciesDog: 'Dog',
  speciesCat: 'Cat',
  modeLegend: 'Where is the journey?',
  modeCar: 'Car',
  modeAir: 'Air travel',
  measurementsLegend: 'Measure the pet',
  noseTailLabel: 'Nose to tail base',
  noseTailHint: 'Measure without the tail curve',
  elbowHeightLabel: 'Ground to elbow',
  shoulderWidthLabel: 'Shoulder width',
  standingHeightLabel: 'Standing height',
  beddingLabel: 'Bedding thickness',
  weightLabel: 'Pet weight',
  cmUnit: 'cm',
  inchUnit: 'in',
  kgUnit: 'kg',
  lbUnit: 'lb',
  snubNosedLabel: 'Short nosed breed',
  snubNosedHint: 'Air travel adds the IATA adjustment. Ask your veterinarian and airline about suitability.',
  presetLegend: 'Start with a profile',
  presetCat: 'Cat',
  presetSmallDog: 'Small dog',
  presetMediumDog: 'Medium dog',
  presetLargeDog: 'Large dog',
  resultEyebrow: 'Your measuring frame',
  resultTitle: 'A room to turn in',
  resultDimensionLabel: 'Minimum internal starting dimensions',
  lengthLabel: 'Length',
  widthLabel: 'Width',
  heightLabel: 'Height',
  petWeightLabel: 'Pet weight',
  journeyLabel: 'Journey',
  statusComfort: 'Comfort baseline',
  statusAirReview: 'Air travel review',
  statusSnub: 'Short nose adjustment',
  resultDetail: 'Check the real carrier interior, door shape, ventilation, construction, and the operator rules before buying or traveling.',
  checklistTitle: 'The four body checks',
  checklistStand: 'The pet can stand and sit upright without the roof pressing down.',
  checklistTurn: 'The pet can turn around normally while standing.',
  checklistLie: 'The pet can lie in a natural position on the bedding.',
  checklistAirline: 'For air travel, confirm airline limits, ventilation, secure fasteners, leak protection, and required labels.',
  invalidInput: 'Enter positive values for every pet measurement and weight.',
  noteTitle: 'Use this as a fit study, not a travel approval',
  noteText: 'Carrier rules vary by airline, vehicle, route, animal, and container. A veterinarian can help assess health and travel suitability, especially for short nosed breeds or animals with breathing, anxiety, or mobility concerns.',
  methodTitle: 'Method',
  methodText: 'The internal baseline follows IATA guidance: length is nose to tail plus half the elbow height, width is twice the shoulder width, and height is standing height plus bedding. A 10% dimensional adjustment is applied when short nosed air travel is selected.',
  blueprintLabel: 'A measured carrier blueprint showing the pet inside and the internal length and height guides',
  dimensionInside: 'Interior dimensions',
  checkMark: 'OK',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: 'How do I measure my dog or cat for a carrier?',
    answer: 'Measure from the tip of the nose to the base of the tail, from the ground to the elbow, across the widest part of the shoulders, and from the ground to the top of the head or ear tip, whichever is higher. Measure the bedding thickness separately because it reduces usable height. Keep the animal standing naturally and use the largest realistic posture rather than a curled sleeping position.',
  },
  {
    question: 'What carrier dimensions does this planner calculate?',
    answer: 'It estimates internal length as nose to tail plus half the elbow height, internal width as twice the shoulder width, and internal height as standing height plus bedding. These are starting dimensions for a single animal. Door arches, sloped roofs, bowls, padding, and structural ribs can reduce usable space, so compare the result with the actual interior shape.',
  },
  {
    question: 'Is the result enough to meet an airline rule?',
    answer: 'No. The air option applies a sizing reference and keeps an airline review visible, but airlines and routes can impose additional limits. Confirm the current operator policy, accepted container construction, ventilation, labels, weight rules, documentation, and cabin or hold restrictions before travel. A carrier that fits the animal can still be rejected for another reason.',
  },
  {
    question: 'Why does a short nosed breed receive a larger result for air travel?',
    answer: 'IATA guidance indicates that short nosed breeds require a larger container. This planner applies a 10% dimensional adjustment as a visible planning allowance when that option is selected. It does not decide whether a particular animal should fly. Ask a veterinarian about respiratory risk and ask the airline whether the breed and route are accepted.',
  },
  {
    question: 'Should a car carrier be as large as possible?',
    answer: 'It should be large enough for the animal to stand, sit, turn, and lie naturally, while remaining secure in the vehicle. A very loose carrier can move during braking and may not work with the available restraint system. Check the vehicle instructions and use a carrier and restraint arrangement appropriate for the animal and journey.',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: 'Choose the journey', text: 'Select car or air travel. Air travel keeps an additional operator review visible because the fit calculation cannot approve a route or carrier.' },
  { name: 'Take six measurements', text: 'Measure nose to tail base, elbow height, shoulder width, standing height, bedding thickness, and body weight while the animal is calm and standing naturally.' },
  { name: 'Read the interior blueprint', text: 'Use the length, width, and height as minimum internal starting dimensions. Check the real carrier at its narrowest and lowest usable points.' },
  { name: 'Verify the journey', text: 'Before purchase or departure, confirm the carrier construction, ventilation, restraint, handling, documentation, and current rules with the relevant airline, vehicle guidance, and veterinarian.' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Find a carrier that gives your pet room to move',
    items: [
      'Measure the animal instead of choosing a carrier from weight alone.',
      'Use the internal dimensions as a starting point for comparing real carriers.',
      'A correct fit still needs a construction, ventilation, restraint, and operator check.',
      'Air travel needs extra preparation, and a short nosed breed needs professional advice.',
    ],
  },
  { type: 'title', text: 'How to use the pet carrier size planner', level: 2 },
  {
    type: 'paragraph',
    html: 'A carrier is a small room that must support four ordinary movements: standing, sitting upright, turning around, and lying down naturally. This planner converts the body measurements that describe those movements into a practical internal length, width, and height. It is useful when a product listing gives an outside size, when a carrier has a sloped roof, or when a cat or dog is between common commercial sizes. Enter the dimensions in the unit system you use for shopping. The unit switch preserves the same physical animal while changing the displayed values.',
  },
  {
    type: 'paragraph',
    html: 'The result is deliberately an internal starting dimension, not an external product recommendation. Compare it with the usable space inside the exact carrier. A thick bed, raised floor, door frame, taper, divider, bowl, or structural rib can take away room even when the headline dimensions look generous. Measure the lowest roof point and the narrowest section that the animal must actually use. If a carrier barely meets one dimension, choose a different shape or size so the animal is not forced to crouch, twist, or lie against hardware.',
  },
  { type: 'title', text: 'What each measurement means', level: 2 },
  {
    type: 'table',
    headers: ['Measurement', 'Why it matters', 'Used in'],
    rows: [
      ['Nose to tail base', 'Sets the main front to back space without depending on a curled posture.', 'Length'],
      ['Ground to elbow', 'Adds turning and posture room to the length estimate.', 'Length'],
      ['Shoulder width', 'Sets side to side clearance at the widest body area.', 'Width'],
      ['Standing height', 'Protects the head and ears from the roof.', 'Height'],
      ['Bedding thickness', 'Keeps the usable height honest after the bed is installed.', 'Height'],
      ['Pet weight', 'Helps you check the carrier and vehicle or operator load information.', 'Review'],
    ],
  },
  {
    type: 'paragraph',
    html: 'The formulas follow the dimension guidance published by the International Air Transport Association for dogs and cats: internal length is A plus one half of B, internal width is C multiplied by two, and internal height is D plus bedding. In that guidance, A is nose to tail base, B is ground to elbow, C is the greater of shoulder width or the widest point, and D is standing height to the top of the head or ear tip. The planner uses the same structure for a car fit study, while making clear that a car journey has different restraint and crash safety questions.',
  },
  { type: 'title', text: 'Air travel needs a second review', level: 2 },
  {
    type: 'paragraph',
    html: 'A dimension calculation cannot certify a carrier for air travel. The current airline, route, aircraft, season, animal health, and container design all matter. IATA and USDA APHIS guidance describe additional concerns such as secure construction, ventilation, leak protection, handling, labels, food and water arrangements, and documentation. A soft carrier that fits under one seat may be unsuitable for another aircraft or airline. Ask the operator for its current policy before buying a carrier or arriving at the airport.',
  },
  {
    type: 'tip',
    title: 'The fit check is a real world movement test',
    html: 'Place the animal in the carrier while calm and observe whether it can stand, sit upright, turn around, and lie naturally without its body pressing into the door, roof, bowl, or bedding. Stop and seek professional advice if breathing, anxiety, pain, weakness, or mobility is a concern. The calculator helps you compare dimensions; it cannot assess an animal or approve a journey.',
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
