import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'dog-cat-water-intake-calculator';
const title = 'Dog and Cat Water Intake Calculator';
const description = 'Estimate daily water needs for a dog or cat from body weight, diet, activity, and heat context, with a clear guide to total water and bowl drinking.';

const ui: PetWaterIntakeUI = {
  journeyHint: 'Choose the pet, enter body weight, then set the food and day around the water bowl.',
  speciesLegend: 'Who is the bowl for?',
  speciesDog: 'Dog',
  speciesCat: 'Cat',
  weightLabel: 'Body weight',
  weightHint: 'Use the current healthy weight when you know it.',
  weightKg: 'kg',
  dietLegend: 'How much water comes from food?',
  dietDry: 'Mostly dry',
  dietMixed: 'Mixed food',
  dietWet: 'Mostly wet',
  activityLegend: 'Typical activity today',
  activityCalm: 'Calm',
  activityTypical: 'Typical',
  activityActive: 'Active',
  heatLegend: 'Heat and weather',
  heatNormal: 'Normal',
  heatWarm: 'Warm',
  heatHot: 'Hot',
  resultEyebrow: 'The waterline reads',
  totalRangeLabel: 'Total water from all sources',
  drinkingRangeLabel: 'Orientative bowl guide',
  totalRangeHint: 'A daily planning band that includes food moisture.',
  drinkingRangeHint: 'A rough share that may come from drinking, based on diet.',
  statusEveryday: 'Everyday conditions',
  statusActive: 'Active day',
  statusWarm: 'Warm weather',
  statusDemanding: 'Demanding conditions',
  statusDetailEveryday: 'The guide uses the selected maintenance profile without an extra activity or heat signal.',
  statusDetailActive: 'Movement can raise demand. Offer fresh water and watch the pet rather than forcing a target.',
  statusDetailWarm: 'Warm surroundings can raise demand. Shade, airflow, and access to fresh water matter more than a precise number.',
  statusDetailDemanding: 'Activity and heat are both elevated. Treat this as a prompt for close observation and veterinary advice if anything seems wrong.',
  resultEmpty: 'The waterline will appear as soon as the weight is valid.',
  sceneAria: 'Water reservoir for the selected pet',
  sceneTotal: 'TOTAL WATER',
  noteTitle: 'Water bowls are not diagnostic instruments',
  noteText: 'Keep clean, fresh water available. A sudden change in drinking or urination, repeated vomiting or diarrhea, weakness, dry gums, heat stress, or any concern about dehydration needs veterinary advice. Do not restrict water or use this estimate to replace an examination.',
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    question: 'How much water should a dog or cat drink per day?',
    answer: "General veterinary guidance suggests a baseline maintenance intake of roughly 60 mL per kg of body weight for dogs and 40 mL per kg for cats per day. However, actual water intake fluctuates based on diet, environmental temperature, exercise level, and individual health status. Animals consuming dry kibble will drink significantly more from a bowl than those on a wet canned diet.",
  },
  {
    question: 'Does wet food reduce the amount of water a pet drinks from the bowl?',
    answer: "Yes, wet canned food typically contains between 70% and 80% moisture, providing a major portion of a pet's daily hydration through meals alone. Pets fed exclusively wet food often visit the water bowl far less frequently, which is entirely normal as long as their total fluid intake requirements are met through their diet.",
  },
  {
    question: 'When should I be concerned about changes in my pet\'s water consumption?',
    answer: "You should seek prompt veterinary advice if you notice a sudden, dramatic increase (polydipsia) or decrease (adipsia) in drinking or urination. Excessive drinking can be an early clinical sign of conditions such as diabetes mellitus, chronic kidney disease, or Cushing's disease, while refusing water can rapidly lead to severe dehydration.",
  },
  {
    question: 'Can hot weather and exercise double a pet\'s daily water needs?',
    answer: "Yes. High temperatures and intense physical activity increase fluid loss through panting in both dogs and cats. Panting is the primary evaporative cooling mechanism for pets, and replacing lost respiratory moisture requires easy access to clean, cool water alongside adequate shade and rest opportunities.",
  },
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  { name: 'Select species and weight', text: 'Choose whether you are calculating for a dog or cat, and enter their current healthy body weight in kilograms or pounds.' },
  { name: 'Specify primary diet type', text: 'Select whether your pet eats mostly dry kibble, a mixed diet, or canned wet food to account for dietary moisture contribution.' },
  { name: 'Adjust activity and heat context', text: 'Set today\'s expected physical activity level and environmental temperature to factor in increased fluid loss from panting.' },
  { name: 'Review fluid range guidelines', text: 'Check both the total recommended fluid volume and the estimated portion expected directly from the water bowl.' },
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Essential Guidelines for Pet Daily Water Needs',
    items: [
      'Baseline maintenance: Dogs require ~60 mL/kg daily; cats require ~40 mL/kg daily.',
      'Diet impact: Wet food provides 70-80% moisture, significantly reducing water bowl visits.',
      'Heat & exercise: Panting increases evaporative fluid loss, boosting daily hydration needs.',
      'Health warning: Sudden increases or decreases in drinking require veterinary evaluation.',
      'Fresh water access: Multiple clean water bowls promote healthy hydration habits.',
    ],
  },
  {
    type: 'title',
    text: 'Understanding Daily Hydration Needs for Dogs and Cats',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Proper hydration is fundamental to metabolic function, digestion, joint lubrication, and renal health in domestic pets. Water makes up between 60% and 70% of an adult dog or cat\'s total body weight, and even a modest fluid deficit can impair vital physiological processes. Veterinary literature from the American Animal Hospital Association (AAHA) establishes baseline maintenance daily requirements at approximately 60 mL per kilogram of body weight for canine companions and 40 mL per kilogram for felines.',
  },
  {
    type: 'paragraph',
    html: 'However, these maintenance baseline figures represent total daily fluid intake requirements rather than the amount an animal must consume directly from a bowl. A pet\'s total daily water supply is comprised of drinking water, moisture contained within commercial or home-prepared food, and a small volume of metabolic water produced during cellular respiration. Understanding this distinction helps pet owners avoid unnecessary worry when a cat or dog visits the water bowl less frequently on certain diets.',
  },
  {
    type: 'title',
    text: 'Total Daily Water vs. Water Bowl Consumption',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'The form of food provided plays a dominant role in determining how much water a pet will seek out from a bowl. Dry commercial kibble contains only 6% to 10% moisture, requiring the animal to drink almost all of its daily fluid requirement directly from a water vessel. In contrast, canned wet food typically consists of 75% to 82% water content. A feline eating exclusively canned food may obtain nearly all of its baseline hydration directly from meals, resulting in infrequent water bowl visits that are physiologically normal.',
  },
  {
    type: 'table',
    headers: ['Input Factor', 'Impact on Fluid Requirement', 'Key Clinical Consideration'],
    rows: [
      ['Species Profile', 'Sets baseline maintenance rate', 'Canine baseline ~60 mL/kg; Feline baseline ~40 mL/kg'],
      ['Body Weight', 'Scales overall baseline volume', 'Use ideal target weight for overweight animals'],
      ['Diet Moisture', 'Determines proportion supplied by food', 'Wet food supplies up to 80% of daily fluid needs'],
      ['Activity & Heat', 'Increases evaporative panting losses', 'Elevated temperatures require proportional fluid boosts'],
    ],
  },
  {
    type: 'title',
    text: 'Practical Guidelines for Pet Hydration Management',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Pet owners should focus on facilitating free, unrestricted access to fresh, clean water at all times rather than attempting to enforce a specific numeric volumetric target. Water bowls should be washed daily and replenished with fresh water. For cats, who often have a low thirst drive inherited from desert-dwelling ancestors, incorporating pet fountains, wide shallow dishes that avoid whisker fatigue, and multiple drinking stations throughout the home can encourage healthy voluntary drinking behavior.',
  },
  {
    type: 'card',
    title: 'Dry Kibble Diets',
    icon: 'mdi:food-drumstick',
    html: 'Pets on dry kibble rely heavily on voluntary drinking from water bowls. Ensure bowls are kept clean and placed in quiet, accessible locations away from litter boxes or noisy appliances to encourage consistent hydration throughout the day.',
  },
  {
    type: 'card',
    title: 'Wet Canned Food Diets',
    icon: 'mdi:food-drumstick',
    html: 'Wet food diets provide substantial dietary moisture. While pets eating canned food will naturally drink less from bowls, fresh water must still remain accessible at all times, especially during warmer weather or periods of high activity.',
  },
  {
    type: 'card',
    title: 'Active & Warm Weather Management',
    icon: 'mdi:weather-sunny',
    html: 'During warm weather or vigorous play, evaporative loss through panting increases rapidly. Always provide shaded rest areas, cool water breaks, and avoid strenuous exercise during peak summer heat hours to prevent heat stress and dehydration.',
  },
  {
    type: 'tip',
    title: 'Veterinary Red Flags for Hydration',
    html: 'A sudden, unexplained change in drinking patterns - either drinking significantly more water (polydipsia) or refusing water altogether - is a major clinical indicator. Conditions like kidney disease, diabetes, hyperthyroidism, and urinary tract disorders frequently manifest through altered thirst. If you observe persistent changes in drinking habits, lethargy, dry gums, or vomiting, consult a veterinarian immediately.',
  },
];

const schemas: PetWaterIntakeLocaleContent['schemas'] = [
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

export const content: PetWaterIntakeLocaleContent = {
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
