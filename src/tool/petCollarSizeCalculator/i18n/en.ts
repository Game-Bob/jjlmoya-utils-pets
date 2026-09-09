import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'pet-collar-size-calculator';
const title = 'Pet Collar Size Calculator';
const description = 'Measure a pet neck, add breathing room, and find an adjustable collar range to check by hand.';

const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: 'Neck circumference',
  unitLabel: 'Display',
  centimetres: 'Centimetres',
  inches: 'Inches',
  allowanceLabel: 'Breathing room',
  collarTypeLabel: 'Collar type',
  flatCollar: 'Flat',
  breakawayCollar: 'Breakaway',
  martingaleCollar: 'Martingale',
  statusTight: 'Add more room',
  statusBalanced: 'Ready to check',
  statusLoose: 'Check security',
  statusTightDetail: 'Add more room.',
  statusBalancedDetail: 'Check this span by hand.',
  statusLooseDetail: 'Check it cannot slip.',
  fitStudyLabel: 'Collar fit study',
  fitWindowLabel: 'Find this span',
  measuredLabel: 'Measured neck',
  roomLabel: 'Breathing room',
  checkLabel: 'Hands-on check',
  sceneAria: 'Collar fit study showing the neck ring and adjustable collar span',
  neckMarker: 'neck',
  easeMarker: 'room',
  rangeMarker: 'collar span',
  minimumMarker: 'start',
  maximumMarker: 'end',
  checkFlat: 'Comfortable, secure, no rubbing.',
  checkBreakaway: 'Comfortable fit and correct release hardware.',
  checkMartingale: 'The tightening loop must not choke.',
  invalidInput: 'Enter a valid neck measurement and breathing room.',
};

const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  {
    question: 'How do I measure a pet neck for a collar?',
    answer: 'Use a flexible tape around the place where the collar will rest. Keep the tape level and close to the coat without compressing the neck. Record the circumference, then use the calculator to add the breathing room you want. Measure again if the animal moves, if the coat changes, or if the collar will sit in a different position.',
  },
  {
    question: 'Why does the calculator return a range instead of one collar size?',
    answer: 'Collars are adjustable and product size labels are not consistent between makers. The result adds your allowance to the measured neck and creates a small comparison span. Use it to filter product dimensions, then check the actual collar on the animal. The span is not a substitute for a physical fit test.',
  },
  {
    question: 'What is a sensible comfort allowance?',
    answer: 'There is no single allowance that fits every animal, coat, collar construction, or activity. The calculator starts at 2 cm so the first example is easy to read, but you can change it. Welfare guidance commonly describes a comfortable gap that allows a finger check without letting the collar slip. Treat the number as a planning input and confirm the result by hand.',
  },
  {
    question: 'Does a martingale collar use a different formula?',
    answer: 'The first size estimate still begins with the measured neck and selected allowance because the animal measurement does not change with the label on the collar. The important difference is the adjustment and use check: the tightening loop must not choke the animal, and the collar should be fitted by someone who understands the design if you are unsure.',
  },
  {
    question: 'Can this calculator choose a collar for a puppy or kitten?',
    answer: 'It can help you compare a current measurement, but a growing animal needs frequent rechecks. A collar that fits today may become tight quickly. Inspect the fit regularly, follow the manufacturer instructions, and get professional advice if there is rubbing, pain, coughing, breathing difficulty, or a risk of the collar catching.',
  },
];

const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: 'Measure the neck', text: 'Wrap a flexible tape around the place where the collar will sit. Keep it flat, level, and close to the coat without pulling it tight.' },
  { name: 'Choose the allowance', text: 'Enter the breathing room you want between the neck and collar. The 2 cm example is only a starting point, not a universal rule.' },
  { name: 'Select the collar type', text: 'Choose flat, breakaway, or martingale so the final review reminds you of the hardware and adjustment check that belongs to that design.' },
  { name: 'Compare the physical collar', text: 'Look for an adjustable span that covers the result, then place it on the calm animal and check comfort, security, movement, and the maker instructions.' },
];

const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Turn a neck measurement into a collar shopping range',
    items: [
      'Measure the neck where the collar will actually sit.',
      'Add a visible comfort allowance instead of guessing from a breed label.',
      'Compare the result with the adjustable span of the product.',
      'Finish with a calm physical fit check and regular rechecks.',
    ],
  },
  { type: 'title', text: 'What this pet collar calculator helps you decide', level: 2 },
  {
    type: 'paragraph',
    html: 'A collar size chart can be difficult to use when an animal is between sizes, has a thick coat, or is growing quickly. This calculator starts with a measurement you own: the circumference around the neck where the collar will rest. It adds the comfort allowance you choose and returns a small starting span for shopping. That makes the decision more concrete than choosing small, medium, or large from a breed name alone. The unit switch changes the display while preserving the same physical measurement.',
  },
  {
    type: 'paragraph',
    html: 'The result is intentionally a range. Adjustable collars are not manufactured to one universal standard, and the usable length may be different from the headline size on a product page. Compare the result with the maker adjustment range, then check the collar on the animal. A collar can match the number and still be unsuitable because of a stiff edge, a buckle, a tightening loop, a thick coat, or a position that interferes with movement.',
  },
  { type: 'title', text: 'How to measure before you shop', level: 2 },
  {
    type: 'list',
    items: [
      'Measure while the animal is calm and standing naturally.',
      'Keep a flexible tape level around the neck and do not compress the coat or skin.',
      'Repeat the measurement if the collar will sit higher or lower than your first attempt.',
      'For a young animal, write down the date and recheck the fit as it grows or its coat changes.',
    ],
  },
  {
    type: 'paragraph',
    html: 'The comfort allowance is an explicit assumption rather than a hidden promise. The example begins at 2 cm because it gives a readable starting point, but the correct choice depends on the individual animal, the coat, the collar width, and how the collar is used. PDSA advises that a dog collar should be comfortable with space for two fingers between the collar and neck. That check is useful context, but it cannot be converted into one exact centimetre value for every pet. Use the calculator to make your assumption visible, then confirm it by hand.',
  },
  { type: 'title', text: 'Read the fitting rail', level: 2 },
  {
    type: 'table',
    headers: ['Signal', 'What it means', 'What to do next'],
    rows: [
      ['Measured neck', 'The circumference you entered before adding ease.', 'Repeat the measurement if the tape was tight, tilted, or placed differently from the collar.'],
      ['Start', 'The measured neck plus your chosen allowance.', 'Use it as the lower edge of the product adjustment span.'],
      ['End', 'A 2 cm comparison window beyond the start.', 'Look for an adjustable collar that covers this window without forcing the hardware.'],
      ['Fit review', 'A reading of the allowance you selected.', 'Use it as a prompt for a hands on check, not as a pass or fail certificate.'],
    ],
  },
  { type: 'title', text: 'Collar type changes the final check', level: 2 },
  {
    type: 'paragraph',
    html: 'A flat collar should be comfortable and secure without rubbing or pressing into the throat. A breakaway collar must be checked against the manufacturer instructions because its release hardware is part of the safety design. A martingale needs extra care: its tightening loop must be limited so it cannot choke the animal, and the person fitting it should understand how the two loops work. The calculator keeps the first measurement method consistent, then puts the type specific question beside the result.',
  },
  {
    type: 'tip',
    title: 'Do the quiet hands on check',
    html: 'Put the collar on while the animal is calm. Check that the animal can move, breathe, eat, drink, and turn its head normally, and that the collar cannot slip over the head when it should stay on. Recheck after grooming, growth, weight change, wet fur, or a change of collar position. Remove it and seek qualified advice if there is pain, coughing, rubbing, distress, or restricted movement.',
  },
];

const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
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

export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
