import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'pet-age-calculator';
const title = 'Pet Age Calculator | Dogs and Cats to Human Years';
const description = 'Find out your dog or cat\'s real age in human years. Forget the multiply-by-7 rule. Use our calculator based on current veterinary science.';

const ui: PetAgeUI = {
  toolTitle: 'Age Calculator',
  toolSubtitle: 'How many human years does your furry friend really have?',
  petNameLabel: 'Name (Optional)',
  petNamePlaceholder: 'E.g. Buddy',
  petTypeDog: 'Dog',
  petTypeCat: 'Cat',
  sizeSmall: 'Small',
  sizeMedium: 'Med',
  sizeLarge: 'Large',
  sizeGiant: 'Giant',
  birthYearLabel: 'Birth year',
  humanAgeLabel: 'The human age of',
  humanAgeUnit: 'years',
  humanAgeYears: 'years',
  lifeStageLabel: 'Life Stage',
  milestoneLabel: 'Next Milestone',
  shareBtn: 'Share Result',
  shareSuccess: 'Copied! Opening card...',
  humanAgeTitle: 'Magic Age',
  recalculateBtn: 'Calculate another age',
  realAgeLabel: 'Real Age',
  defaultPetName: 'Your pet',
  stageDogPuppy: 'Playful Puppy',
  stageDogTeen: 'Rebellious Teen',
  stageDogAdult: 'Prime Adult',
  stageDogMature: 'Distinguished Maturity',
  stageDogSenior: 'Senior Wisdom',
  stageCatKitten: 'Infant Curiosity',
  stageCatYouth: 'Feline Youth',
  stageCatReign: 'Domestic Reign',
  stageCatVeteran: 'Pampered Veteran',
  stageCatVenerable: 'Venerable Feline',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: 'Is it true that one dog year equals 7 human years?',
    answer: 'No. That is an oversimplified rule that modern veterinary science has debunked. Dogs mature very quickly in their first two years and the process then slows down, varying a lot by weight and breed.',
  },
  {
    question: 'Why do large dogs age faster?',
    answer: 'Large breed dogs have a more accelerated metabolism and growth, which causes greater oxidative stress in their cells. This means their life expectancy is shorter than that of small dogs.',
  },
  {
    question: 'How do cats age compared to humans?',
    answer: 'A cat finishes its infancy at one month, adolescence at 6 months, and reaches adulthood (equivalent to 24 human years) at 2 years. After that, each cat year is equivalent to about 4 human years.',
  },
  {
    question: 'At what age is a pet considered Senior?',
    answer: 'Generally, a dog is considered senior when it has reached 75% of its expected lifespan. In cats, it is usually from 7-11 years, depending on their state of health.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Choose pet type', text: 'Select whether you have a dog or cat to apply the correct biological formula.' },
  { name: 'Enter size (dogs only)', text: 'For dogs, weight is key. Indicate if it is small (up to 10kg), medium (10-25kg), large (25-45kg) or giant (+45kg).' },
  { name: 'Enter birth year', text: 'Enter your pet\'s birth year to calculate their chronological age.' },
  { name: 'Analyse the life stage', text: 'Check the result to know if your pet is in infant, young, adult or senior stage compared to a human.' },
];

const bibliography: PetAgeLocaleContent['bibliography'] = [
  { name: 'AAHA Senior Care Guidelines for Dogs and Cats', url: 'https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2023-aaha-senior-care-guidelines-for-dogs-and-cats/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats.pdf' },
  { name: 'AKC: How to Calculate Dog Years to Human Years', url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'What You Need to Know About Pet Ageing',
    items: [
      'The "times 7" rule is a myth: dogs mature exponentially in the first 2 years.',
      'A 1-year-old dog is equivalent to 15 human years; a 2-year-old is equivalent to 24 human years.',
      'Large dogs age faster than small ones after 2 years.',
      'Cats follow a more linear curve: each feline year equals 4 human years after age 2.',
    ],
  },
  { type: 'title', text: 'The Scientific Truth About Your Pet\'s Age', level: 2 },
  {
    type: 'paragraph',
    html: 'Did you know that a 2-year-old cat already has the maturity of a 24-year-old person? Discover why the rule of multiplying by 7 is a myth. The old myth that "1 dog year equals 7 human years" is an oversimplification. The biological reality is much more fascinating: pets mature at a dizzying speed during their first two years of life, reaching sexual and physical maturity very quickly. After that, this ageing curve flattens and slows down.',
  },
  { type: 'title', text: 'The Science Behind the Calculation', level: 3 },
  {
    type: 'paragraph',
    html: 'This tool uses the official guidelines of the <strong>American Animal Hospital Association (AAHA)</strong> and the latest studies on canine DNA methylation to give you the most accurate estimate possible.',
  },
  {
    type: 'table',
    headers: ['Species', 'Year 1', 'Year 2', 'Year 3+'],
    rows: [
      ['Cat', '15 human years', '24 human years', '+4 years per year'],
      ['Small dog', '15 human years', '24 human years', '+5 years per year'],
      ['Medium dog', '15 human years', '24 human years', '+6 years per year'],
      ['Large dog', '15 human years', '24 human years', '+7 years per year'],
      ['Giant dog', '15 human years', '24 human years', '+8 years per year'],
    ],
  },
  { type: 'title', text: 'Life Stages: What to Expect?', level: 3 },
  {
    type: 'paragraph',
    html: 'Knowing your pet\'s real age helps you understand their medical and emotional needs at each phase.',
  },
  {
    type: 'card',
    title: 'Puppy / Junior (0 - 1 year)',
    icon: 'mdi:star-shooting',
    html: 'This is the stage of explosive growth. Their bones grow, their teeth change and their brain absorbs information like a sponge. Vaccination and early socialisation are critical here.',
  },
  {
    type: 'card',
    title: 'Adult (2 - 6 years)',
    icon: 'mdi:shield-check',
    html: 'Physical and mental prime. Their personality is now defined. This is the golden moment to enjoy intense physical activities and maintain their ideal weight to prevent future diseases.',
  },
  {
    type: 'card',
    title: 'Senior (+7 years)',
    icon: 'mdi:heart-pulse',
    html: 'Grey hairs start appearing on the muzzle and they sleep more. Metabolism slows down. From here, veterinary check-ups should be every 6 months. Watch for arthritis and dental health.',
  },
  {
    type: 'tip',
    title: 'Veterinary Advice',
    html: 'The calculated age is an average biological estimate. Factors such as breed, genetics and lifestyle can all significantly influence your pet\'s actual rate of ageing. Always consult your vet for personalised advice.',
  },
];

const schemas: PetAgeLocaleContent['schemas'] = [
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

export const content: PetAgeLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faqTitle: 'Frequently Asked Questions',
  faq,
  bibliographyTitle: 'Bibliography',
  bibliography,
  howTo,
  schemas,
};
