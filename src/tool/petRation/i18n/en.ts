import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'pet-daily-ration-calculator';
const title = 'Pet Daily Ration Calculator | Canine and Feline Nutrition';
const description = 'Calculate the exact amount of food your dog or cat needs. Tool based on veterinary RER and DER formulas for a healthy weight.';

const ui: PetRationUI = {
  toolTitle: 'Daily Ration Calculator',
  sectionProfile: '1. Pet Profile',
  labelAnimal: 'Animal',
  labelStage: 'Life Stage',
  labelWeight: 'Body Weight',
  labelActivity: 'Physical Activity',
  sectionDiet: '2. Diet and Food',
  labelDietType: 'Feeding Type',
  speciesDog: 'Dog',
  speciesCat: 'Cat',
  speciesRabbit: 'Rabbit',
  stagePuppy: 'Puppy',
  stageAdult: 'Adult',
  stageSenior: 'Senior',
  activityLow: 'Low',
  activityMod: 'Normal',
  activityHigh: 'High',
  dietDry: 'Dry Only',
  dietMixed25: 'Mixed (25%)',
  dietHalf: 'Half (50%)',
  dietWet: 'Wet Only',
  manualAdjust: 'Manual adjustment (1-99%)',
  wetPercentLabel: '% wet food in diet',
  tagDry: 'Dry',
  tagWet: 'Wet',
  totalKcal: 'Total',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'What is the RER and why is it important?',
    answer: 'The RER (Resting Energy Requirement) is the minimum energy your pet needs to maintain its basic vital functions at rest. It is the scientific basis for calculating the daily ration, avoiding under or overfeeding.',
  },
  {
    question: 'How does sterilisation affect my pet\'s ration?',
    answer: 'Sterilised animals tend to have a basal metabolism about 15-20% lower. They may need a slightly smaller ration or an activity level adjusted to Low in the calculator to avoid weight gain.',
  },
  {
    question: 'Can I use this calculator for puppies?',
    answer: 'Growing puppies have much higher energy needs (up to 3 times the RER). This calculator is optimised for adult dogs and cats. For puppies, always consult your vet for a specific growth plan.',
  },
  {
    question: 'How many times a day should I distribute the ration?',
    answer: 'The ideal is to spread the total resulting quantity over 2 or 3 meals a day. This helps maintain stable glucose levels and improves digestion, especially in breeds prone to gastric torsion.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Select the species', text: 'Indicate whether the calculation is for a dog or cat, as their metabolisms and weight limits vary.' },
  { name: 'Adjust the weight', text: 'Move the slider to your pet\'s current weight in kilograms.' },
  { name: 'Define their activity', text: 'Choose between low, normal or high activity based on the actual daily exercise your companion does.' },
  { name: 'Enter the food calories', text: 'Look on the pet food packaging for the kcal/kg value so the gram calculation is exact.' },
];

const bibliography: PetRationLocaleContent['bibliography'] = [
  { name: 'WSAVA: Nutrition Toolkit and Calorie Recommendations', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
  { name: 'FEDIAF: Nutritional Guidelines for Complete and Complementary Pet Food', url: 'https://fediaf.org/self-regulation/nutrition.html' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Principles of Veterinary Nutrition',
    items: [
      'The RER formula is: 70 × (weight in kg)^0.75. It is the basis of all veterinary caloric calculation.',
      'DER multiplies RER by the animal\'s lifestyle factor.',
      'A neutered dog needs up to 20% fewer calories than an intact one.',
      'Obesity affects 50% of pets and significantly reduces their life expectancy.',
    ],
  },
  { type: 'title', text: 'Complete Guide to Calculating Your Pet\'s Daily Ration', level: 2 },
  {
    type: 'paragraph',
    html: 'Feeding a dog or cat correctly is not just a matter of filling their bowl each morning. Nutrition is the fundamental pillar of their health, longevity and emotional wellbeing. A <strong>daily ration calculator for pets</strong> is an essential tool for any responsible owner who wants to avoid the two most common problems in current veterinary nutrition: malnutrition from lack of nutrients and, especially, obesity, which affects more than 50% of pets in developed countries.',
  },
  {
    type: 'paragraph',
    html: 'In this guide we will explore the scientific foundations behind caloric calculations, how to interpret food labels and how factors such as age, physical activity level and physiological status influence the amount of food your companion needs each day.',
  },
  { type: 'title', text: 'The Science Behind the Calculations: RER and DER', level: 3 },
  {
    type: 'paragraph',
    html: 'To determine how much an animal should eat, vets and nutritionists use two key concepts: the RER and the DER.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: Resting energy', value: '70 × kg^0.75' },
      { label: 'Puppy factor', value: '×2.5 - ×3.5' },
      { label: 'Active adult factor', value: '×1.6 - ×2.0' },
      { label: 'Senior factor', value: '×1.0 - ×1.4' },
    ],
  },
  { type: 'title', text: 'How to Read Your Pet Food Label', level: 3 },
  {
    type: 'paragraph',
    html: 'For the calculator to give you exact grams, you need to know the <strong>caloric density</strong> of the product. This value is usually expressed as kcal/kg or kcal/100g.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Light kibble', value: '~3000 kcal/kg' },
      { label: 'Adult kibble', value: '~3500 kcal/kg' },
      { label: 'Puppy kibble', value: '~4000 kcal/kg' },
      { label: 'Wet food', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Nutritional Note',
    html: 'Every pet is an individual. The calculator offers a solid starting point, but you should always monitor body condition by feeling your pet\'s ribs. If you can feel them without pressing hard, the weight is correct.',
  },
  { type: 'title', text: 'Nutrition in Cats vs Dogs', level: 3 },
  {
    type: 'paragraph',
    html: 'Cats are obligate carnivores and their protein metabolism is unique. In dogs, we must be careful with excess carbohydrates. Both benefit from a controlled ration that avoids excessive load on the joints and cardiovascular system.',
  },
  {
    type: 'paragraph',
    html: 'Spending a few minutes calculating the exact ration is one of the most effective forms of preventive medicine available to pet owners today. A healthy weight drastically reduces the risk of diabetes, heart problems, and joint disease. Your vet can confirm whether your animal\'s body condition is correct with a simple physical examination at any routine visit.',
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
];

export const content: PetRationLocaleContent = {
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
