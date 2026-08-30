import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'pet-food-toxicity-checker';
const title = 'Pet Food Toxicity Checker';
const description = 'Check common food exposures for dogs and cats, understand the main warning signs, and know when to contact a veterinarian or animal poison service.';

const ui: PetToxicityUI = {
  journeyHint: 'Choose the animal, open the food atlas, and read the species-specific warning before deciding what to do next.',
  speciesLabel: 'Animal',
  speciesDog: 'Dog',
  speciesCat: 'Cat',
  speciesDogMeta: 'Dog profile',
  speciesCatMeta: 'Cat profile',
  foodLabel: 'Food or ingredient',
  foodPlaceholder: 'Choose a food',
  foodMenuHint: 'The list changes with the animal because risk is species-specific.',
  resultEyebrow: 'The food atlas says',
  resultEmpty: 'Choose a food to open its safety card.',
  sceneLabel: 'Exposure map',
  sceneReady: 'Choose a food',
  sceneSelected: 'species-specific card open',
  riskCritical: 'Urgent concern',
  riskHigh: 'High concern',
  riskCaution: 'Caution',
  riskUnknown: 'Not enough data',
  riskLabel: 'Risk level',
  whyLabel: 'Why it matters',
  signsLabel: 'Signs to watch',
  actionLabel: 'What to do',
  callVetLabel: 'The safest next step is professional advice.',
  callVetText: 'A calculator cannot estimate a toxic dose, confirm an exposure, or replace an examination.',
  sourceLabel: 'Evidence used',
  sourceText: 'The food profiles are based on poison control and veterinary toxicology guidance from the ASPCA, FDA, and Merck Veterinary Manual. The guide is educational and does not calculate treatments or safe doses.',
  emergencyTitle: 'If your pet has eaten something concerning',
  emergencyText: 'Call your veterinarian, an emergency animal clinic, or an animal poison service now. Keep the package, ingredient list, estimated amount, and time of exposure. Do not induce vomiting or give a home remedy unless a veterinary professional tells you to.',
};

const faq: PetToxicityLocaleContent['faq'] = [
  {
    question: 'Can this pet food toxicity checker tell me whether my pet is safe?',
    answer: 'No. It is an educational guide to common food hazards, not a diagnosis or dose calculator. The risk depends on the species, product, amount, body size, health history, and time since exposure. If your pet has eaten a concerning food, contact a veterinarian or animal poison service even when the animal looks normal.',
  },
  {
    question: 'What foods are especially dangerous for dogs?',
    answer: 'Common serious concerns include xylitol, chocolate and caffeine, grapes and raisins, onions and garlic, alcohol, macadamia nuts, and raw yeast dough. The list is not complete. A product label and an accurate estimate of the amount help a veterinary professional assess the situation.',
  },
  {
    question: 'Are onions and garlic dangerous for cats?',
    answer: 'Yes. Veterinary toxicology guidance identifies cats as especially susceptible to red blood cell damage from allium plants such as onions, garlic, chives, and leeks. Raw, cooked, dried, powdered, and concentrated forms can matter. Delayed signs are possible, so contact a veterinarian after a known exposure instead of waiting for weakness or pale gums.',
  },
  {
    question: 'Why does xylitol show a different warning for cats and dogs?',
    answer: 'Xylitol is associated with a rapid and potentially life-threatening fall in blood sugar in dogs. FDA guidance describes a much clearer danger for dogs than for cats, but that difference is not a promise that every product is safe for a cat. Check the ingredient list and ask a veterinarian about any exposure.',
  },
  {
    question: 'What should I do if my pet ate a food that is not listed?',
    answer: 'Do not treat an absent entry as proof of safety. Save the packaging, identify the ingredients, note the amount and time, and contact a veterinarian or animal poison service. The guide intentionally keeps its profiles narrow where species-specific evidence is important.',
  },
];

const howTo: PetToxicityLocaleContent['howTo'] = [
  { name: 'Choose the animal', text: 'Select Dog or Cat so the food atlas shows the relevant species-specific evidence and warning.' },
  { name: 'Choose the food', text: 'Open the food or ingredient menu and choose the closest match. Read the detail line because concentrated, cooked, powdered, and mixed products can change the context.' },
  { name: 'Read the safety card', text: 'Review why the food matters, which general signs may appear, and the recommended next step. A caution label is not a safe-dose calculation.' },
  { name: 'Contact a professional when needed', text: 'If exposure happened, contact a veterinarian, emergency animal clinic, or animal poison service with the product, amount, time, and pet details. Do not use a home remedy unless instructed.' },
];

const seo: PetToxicityLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'A quick food safety check for dogs and cats',
    items: [
      'Choose the species first because the same ingredient can create different concerns for dogs and cats.',
      'Use the food cards to understand the hazard, common warning signs, and the appropriate urgency.',
      'Treat xylitol exposure in dogs as an urgent concern and do not wait for symptoms.',
      'Contact a veterinarian or animal poison service for a real exposure. The checker does not calculate doses or treatments.',
    ],
  },
  {
    type: 'title',
    text: 'How to use a pet food toxicity checker responsibly',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'This pet food toxicity checker is built for the anxious first minute after a dog or cat finds something it should not eat. Choose the animal, open the closest food profile, and use the card to organize the next conversation with a veterinary professional. The result separates the reason a food matters from the signs an owner might notice and the action that makes sense. That structure is more useful than a single green or red label because food exposures are not determined by the name of an ingredient alone.',
  },
  {
    type: 'paragraph',
    html: 'The species selector is essential. Dogs and cats do not process every substance in the same way, and a difference in evidence must not be mistaken for a guarantee of safety. Xylitol is a clear example: it can cause a rapid and dangerous blood sugar problem in dogs, while available public guidance describes a less established risk for cats. Onions and garlic show the opposite kind of nuance because cats are especially susceptible to red blood cell damage. The food list therefore changes with the animal rather than pretending that one universal table is enough.',
  },
  {
    type: 'title',
    text: 'Common food hazards and the details that change the answer',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Food or ingredient', 'Main concern', 'Important context'],
    rows: [
      ['Chocolate and caffeine', 'Heart and nervous system effects', 'Cocoa concentration, product type, amount, and body size matter.'],
      ['Xylitol', 'Rapid low blood sugar in dogs', 'Check sugar-free products, gum, sweets, baked goods, and some nut butters.'],
      ['Grapes and raisins', 'Possible kidney injury in dogs', 'Do not assume a small amount is harmless because sensitivity varies.'],
      ['Onion and garlic', 'Red blood cell damage and anemia', 'Raw, cooked, dried, powdered, and concentrated forms can matter.'],
      ['Raw yeast dough', 'Expansion and alcohol production', 'A rising dough can create both pressure and fermentation risk.'],
    ],
  },
  {
    type: 'paragraph',
    html: 'A food exposure can also be dangerous for a reason that is not classic poisoning. Raw dough may expand and ferment. Fatty foods can trigger digestive upset or pancreatitis risk in some animals. Bones, pits, and corn cobs can obstruct the digestive tract. If the item is not in this checker, that is a signal to ask a professional, not permission to wait. Keep the original packaging because brand recipes, sweetener names, cocoa concentration, and serving size can change the assessment.',
  },
  {
    type: 'title',
    text: 'What to do after a possible exposure',
    level: 2,
  },
  {
    type: 'list',
    items: [
      'Move the remaining food away and keep the package or ingredient list.',
      'Write down the pet species, approximate weight, food, amount, and time of exposure.',
      'Call a veterinarian, emergency animal clinic, or animal poison service for case-specific advice.',
      'Do not induce vomiting, give milk, give charcoal, or use another home remedy unless a professional directs you.',
      'Seek urgent help for collapse, seizures, breathing trouble, repeated vomiting, pale gums, severe weakness, or a swollen painful abdomen.',
    ],
  },
  {
    type: 'tip',
    title: 'The animal comes before the calendar',
    html: 'Symptoms can be delayed, absent at first, or caused by an ingredient that the checker does not cover. If something happened in real life, professional advice is the result you need. This tool helps you prepare useful information for that call; it does not replace the call.',
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
