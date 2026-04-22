import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'pet-daily-ration-calculator';
const title = 'Pet Daily Ration Calculator';
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
  stagePuppy: 'Puppy or Kitten',
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
  kcalUnit: 'kcal/day',
  statusPuppy: 'Rapid growth phase',
  statusSenior: 'Mature metabolism',
  statusLargeDog: 'Large breed: Joint care',
  statusDefault: 'Balanced weight',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'What is the RER and why is it important?',
    answer: 'The RER (Resting Energy Requirement) is the minimum energy your pet needs to maintain its basic vital functions at rest. It is the scientific basis for calculating the daily ration, avoiding under or overfeeding. Understanding RER allows owners to tailor food intake to the specific biological needs of their pet, ensuring they aren\'t consuming more than their organs can process efficiently.',
  },
  {
    question: 'How does sterilisation affect my pet\'s ration?',
    answer: 'Sterilised animals tend to have a basal metabolism about 15 to 20 percent lower. They may need a slightly smaller ration or an activity level adjusted to Low in the calculator to avoid weight gain. The hormonal changes after the procedure alter how the body stores fat and burns energy, making vigilance over the food bowl even more important for long-term health.',
  },
  {
    question: 'Can I use this calculator for puppies?',
    answer: 'Growing puppies have much higher energy needs (up to 3 times the RER). This calculator is optimised for adult dogs and cats. For puppies, always consult your vet for a specific growth plan. Improper feeding during the early growth phase can lead to serious skeletal problems later in life, as excess calcium or calories can force bone development too quickly.',
  },
  {
    question: 'How many times a day should I distribute the ration?',
    answer: 'The ideal is to spread the total resulting quantity over 2 or 3 meals a day. This helps maintain stable glucose levels and improves digestion, especially in breeds prone to gastric torsion. Consistent meal times also help keep your pet satiated and less likely to beg for scraps between scheduled feedings.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Select the species carefully', text: 'Indicate whether the calculation is for a dog or cat, as their metabolisms and weight limits vary significantly based on their unique biological traits.' },
  { name: 'Adjust for exact weight', text: 'Move the slider to your pet\'s current weight in kilograms. It is vital to use a recently measured weight for an accurate energy requirement calculation.' },
  { name: 'Define their activity level', text: 'Choose between low, normal or high activity based on the actual daily exercise and energy levels your four-legged companion exhibits.' },
  { name: 'Enter the food calories per kg', text: 'Look on the pet food packaging for the exact kcal/kg value so the final ration in grams is as precise as possible for optimal health.' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Key Principles of Veterinary Nutrition',
    items: [
      'The RER formula is: 70 × (weight in kg)^0.75. It is the scientific foundation for all modern veterinary caloric calculation.',
      'DER multiplies RER by the animal\'s specific lifestyle factor to provide a daily requirement.',
      'A neutered dog needs up to 20 percent fewer calories than an intact one due to hormonal shifts.',
      'Obesity affects 50 percent of pets today and significantly reduces their life expectancy and quality of life.',
      'Calculating the exact ration is one of the most effective forms of preventive medicine for pet owners.',
      'Using a kitchen scale provides the accuracy needed to follow a scientifically based feeding plan.',
    ],
  },
  { type: 'title', text: 'Complete Guide to Calculating Your Pet\'s Daily Ration for Optimal Health', level: 2 },
  {
    type: 'paragraph',
    html: 'Feeding a dog or cat correctly is not just a matter of filling their bowl each morning. Nutrition is the fundamental pillar of their health, longevity and emotional wellbeing. A <strong>daily ration calculator for pets</strong> is an essential tool for any responsible owner who wants to avoid the two most common problems in current veterinary nutrition: malnutrition from lack of nutrients and, especially, obesity, which affects more than 50% of pets in developed countries.',
  },
  {
    type: 'paragraph',
    html: 'In this guide we will explore the scientific foundations behind caloric calculations, how to interpret food labels and how factors such as age, physical activity level and physiological status influence the amount of food your companion needs each day. We will help you understand how small adjustments in the daily ration can make a huge difference in preventing diabetes, joint issues, and heart health for your animal.',
  },
  { type: 'title', text: 'The Science Behind the Calculations: Understanding RER and DER', level: 3 },
  {
    type: 'paragraph',
    html: 'To determine exactly how much an animal should eat each day, vets and nutritionists use two key concepts: the RER and the DER. These acronyms stand for Resting Energy Requirement and Daily Energy Requirement respectively. Understanding how these interact is crucial for managing your pet\'s weight and wellness in a safe and controlled manner.',
  },
  {
    type: 'paragraph',
    html: 'RER covers the energy needed for basic organ function, respiration, and circulation while the animal is at rest. DER then takes this value and adjusts it for the animal\'s lifestyle, whether they are an active performance dog or a quiet indoor cat. By calibrating these values correctly, we can achieve a balance that promotes a healthy body condition score over time.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: Resting energy', value: '70 × kg^0.75' },
      { label: 'Puppy factor', value: 'x2.5 to x3.5' },
      { label: 'Active adult factor', value: 'x1.6 to x2.0' },
      { label: 'Senior factor', value: 'x1.0 to x1.4' },
    ],
  },
  { type: 'title', text: 'How to Read and Interpret Your Pet Food Label', level: 3 },
  {
    type: 'paragraph',
    html: 'For the calculator to give you exact grams, you need to know the <strong>caloric density</strong> of the product, also known as its metabolizable energy. This value is usually expressed as kcal/kg or kcal/100g on the packaging. By entering these numbers precisely, you can design a diet that is neither deficient nor excessive.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Light diet kibble', value: '~3000 kcal/kg' },
      { label: 'Standard adult kibble', value: '~3500 kcal/kg' },
      { label: 'High-energy puppy kibble', value: '~4000 kcal/kg' },
      { label: 'Wet canned food', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Nutritional Note from the Vet',
    html: 'Every pet is an individual with its own unique metabolism. The calculator offers a scientifically-backed starting point, but you should always monitor actual body condition by feeling your pet\'s ribs. If you can feel them easily without pressing hard, the weight is ideal. If the ribs are hard to find under a layer of fat, it might be time to restrict the ration.',
  },
  { type: 'title', text: 'Differences in Nutrition Between Cats and Dogs', level: 3 },
  {
    type: 'paragraph',
    html: 'Cats are obligate carnivores and their metabolism is optimized to derive energy from animal proteins. In dogs, we see a more flexible omnivorous metabolism, but one must still be careful with excess carbohydrates that can lead to weight gain. Both species thrive on a controlled ration that avoids excessive load on the joints and cardiovascular system throughout their lives.',
  },
  {
    type: 'paragraph',
    html: 'Spending a few minutes to calculate the exact ration is one of the most profitable investments in preventive medicine you can make as an owner. A healthy weight drastically reduces the risk of chronic diseases and gives your best friend the best chance at a long, vibrant life. Consult your vet at your next routine visit to ensure your current feeding strategy is optimal.',
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
  faqTitle: 'Frequently Asked Questions': 'Bibliography',
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
