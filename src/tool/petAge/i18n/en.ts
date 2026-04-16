import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'pet-age-calculator';
const title = 'Pet Age Calculator';
const description = 'Discover your dog or cat\'s true age in human years. Forget the "multiply by 7 rule." Use our calculator based on current veterinary science for precise results.';

const ui: PetAgeUI = {
  toolTitle: 'Age Calculator',
  toolSubtitle: 'How many human years does your furry friend really have?',
  petNameLabel: 'Name (Optional)',
  petNamePlaceholder: 'e.g., Buddy',
  petTypeDog: 'Dog',
  petTypeCat: 'Cat',
  sizeSmall: 'Small',
  sizeMedium: 'Medium',
  sizeLarge: 'Large',
  sizeGiant: 'Giant',
  birthYearLabel: 'Birth year',
  humanAgeLabel: 'Human age',
  humanAgeUnit: 'years',
  humanAgeYears: 'years',
  lifeStageLabel: 'Life stage',
  milestoneLabel: 'Next milestone',
  shareBtn: 'Share result',
  shareSuccess: 'Copied! Opening card...',
  humanAgeTitle: 'Magic Age',
  recalculateBtn: 'Calculate another age',
  realAgeLabel: 'Real Age',
  defaultPetName: 'Your pet',
  stageDogPuppy: 'Playful Puppy',
  stageDogTeen: 'Rebellious Teenager',
  stageDogAdult: 'Peak Adult',
  stageDogMature: 'Distinguished Mature',
  stageDogSenior: 'Senior Wisdom',
  stageCatKitten: 'Infantile Curiosity',
  stageCatYouth: 'Feline Youth',
  stageCatReign: 'Domestic Reign',
  stageCatVeteran: 'Spoiled Veteran',
  stageCatVenerable: 'Venerable Elder',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: 'Is it true that one dog year equals seven human years?',
    answer: 'No. That is a simplified rule that modern veterinary science has debunked. Dogs mature very quickly during their first two years, and the process then slows down, varying greatly by weight and breed. Recent studies on DNA methylation have allowed for more precise aging formulas that better reflect the true biological development of pets throughout their lifespan.',
  },
  {
    question: 'Why do large dogs age faster?',
    answer: 'Large breed dogs have a more accelerated metabolism and growth, which causes greater oxidative stress in their cells. This means their life expectancy is shorter than that of small dogs. Biological markers show that giant breeds can reach senior status as early as 5 human years of age, while small breeds might not reach it until 10 or 11.',
  },
  {
    question: 'How do cats age compared to humans?',
    answer: 'A cat finishes its infancy at one month, its adolescence at 6 months, and reaches adulthood (equivalent to 24 human years) at 2 years. After that, each year of a cat\'s life is equivalent to approximately 4 human years. This pattern is fairly consistent across different cat breeds, unlike the significant variation seen in dogs.',
  },
  {
    question: 'At what age is a pet considered Senior?',
    answer: 'Generally, a dog is considered senior when it has reached 75% of its expected lifespan. For cats, it is usually from 7 to 11 years, depending on their health status. Regular veterinary checkups become increasingly critical during this phase to monitor for common age-related conditions such as kidney disease or cognitive decline.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Select pet species', text: 'Choose whether you have a dog or a cat to apply the correct biological formula for their specific metabolic rate.' },
  { name: 'Indicate size (dogs only)', text: 'For dogs, weight is the key factor in determining biological age. Specify if it is small (up to 10 kg), medium (10 to 25 kg), large (25 to 45 kg), or giant (over 45 kg).' },
  { name: 'Enter birth year', text: 'Enter your pet\'s birth year to calculate their chronological age. Our system will then process this information against the established aging curves.' },
  { name: 'Analyze life stage', text: 'Check the result to know if your pet is in the infant, young, adult, or senior stage compared to a human and understand their current needs.' },
];

const bibliography: PetAgeLocaleContent['bibliography'] = [
  { name: 'AAHA Senior Care Guidelines for Dogs and Cats', url: 'https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2023-aaha-senior-care-guidelines-for-dogs-and-cats/resources/2023-aaha-senior-care-guidelines-for-dogs-and-cats.pdf' },
  { name: 'AKC: How to Calculate Dog Years to Human Years', url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'What You Need to Know About Pet Aging',
    items: [
      'The "rule of 7" is a myth: dogs mature exponentially during the first 2 years.',
      'A 1-year-old dog is like 15 human years; a 2-year-old equals 24 human years.',
      'Large dogs age faster than small ones after 2 years of age due to biological stress.',
      'Cats follow a more linear curve: each cat year equals 4 human years after age 2.',
      'Biological age is a better predictor of health needs than chronological age alone.',
      'Regular screenings can help detect age-related issues before they become severe.',
    ],
  },
  { type: 'title', text: 'The Scientific Truth About Your Pet\'s Age', level: 2 },
  {
    type: 'paragraph',
    html: 'Did you know that a 2-year-old cat already has the maturity of a 24-year-old person? Discover why the rule of multiplying by 7 is a myth and how understanding biological reality can improve your pet\'s care. The old myth that "1 dog year equals 7 human years" is an oversimplification that doesn\'t account for the massive developmental changes seen in early life. Pets mature at a breakneck speed during their first two years of life, reaching sexual and physical maturity very quickly. After that, this aging curve flattens out and slows down significantly.',
  },
  {
    type: 'paragraph',
    html: 'Modern research, including studies on epigenetic clocks and DNA methylation, has provided us with a much more nuanced view. These studies show that the chemical modifications to a dog\'s DNA change at different rates throughout their life. In early puppyhood, these changes are rapid and intense, whereas in adulthood the metabolic and genetic shifts are more gradual. This understanding allowed scientists to develop logarithmic formulas that are far more accurate than any linear multiplication could ever be.',
  },
  { type: 'title', text: 'The Science Behind the Calculation', level: 3 },
  {
    type: 'paragraph',
    html: 'This tool uses the official guidelines from the <strong>American Animal Hospital Association (AAHA)</strong> and the latest studies on DNA methylation in dogs to give you the most accurate estimate possible. By combining size-specific data with breed-independent biological markers, we create a comprehensive model of pet development. This approach acknowledges that a Chihuahua and a Great Dane have vastly different life experiences and aging profiles from the moment they are born.',
  },
  {
    type: 'paragraph',
    html: 'Understanding these differences is crucial for responsible pet owners. It allows for better timing of veterinary interventions, such as shifting to a senior diet or starting preventative joint supplements. Our calculator bridge the gap between complex peer-reviewed science and practical, everyday knowledge for pet lovers worldwide.',
  },
  {
    type: 'table',
    headers: ['Species', 'Year 1', 'Year 2', 'Year 3 onwards'],
    rows: [
      ['Cat', '15 human years', '24 human years', '+4 years per year'],
      ['Small Dog', '15 human years', '24 human years', '+5 years per year'],
      ['Medium Dog', '15 human years', '24 human years', '+6 years per year'],
      ['Large Dog', '15 human years', '24 human years', '+7 years per year'],
      ['Giant Dog', '15 human years', '24 human years', '+8 years per year'],
    ],
  },
  { type: 'title', text: 'Life Stages: What to Expect and How to Prepare', level: 3 },
  {
    type: 'paragraph',
    html: 'Knowing your pet\'s real age helps you understand their medical and emotional needs in each phase. Just as humans go through distinct life stages, dogs and cats experience specific physiological and psychological changes as they grow. Being aware of these transitions allows you to provide the right support at the right time, whether it is high-energy play for a teenager or specialized orthopedic care for a senior.',
  },
  {
    type: 'card',
    title: 'Puppy or Junior (0 to 1 year)',
    icon: 'mdi:star-shooting',
    html: 'This is the stage of explosive growth and development. Their bones are growing at an incredible rate, their temporary teeth are falling out to make room for permanent ones, and their brain is absorbing information like a sponge. Vaccination and early socialization are critical here to ensure they grow into well-adjusted adults. This is also the best time to establish good habits that will last a lifetime.',
  },
  {
    type: 'card',
    title: 'Adult (2 to 6 years)',
    icon: 'mdi:shield-check',
    html: 'This is the peak of physical and mental form for most pets. Their personality is now defined, and they are usually at their most active. This is the golden moment to enjoy intense physical activities and maintain an ideal body weight to prevent future diseases. Consistent exercise and a balanced diet are the pillars of health during these years, helping to build strong immune systems and resilient bodies.',
  },
  {
    type: 'card',
    title: 'Senior (over 7 years)',
    icon: 'mdi:heart-pulse',
    html: 'Gray hair begins to appear on the muzzle and the pet tends to sleep more. Their metabolism slows down significantly, and they may become less interested in high-impact play. From here on, veterinary checkups should happen every six months. Keep an eye out for signs of arthritis, changes in dental health, and any shifts in behavior that might indicate discomfort. Early detection of senior ailments is the best way to ensure their quality of life remains high.',
  },
  {
    type: 'tip',
    title: 'Veterinary Advice on Aging',
    html: 'The calculated age is an average biological estimate based on vast datasets. Factors such as specific breed, genetics, diet, and lifestyle can all have a significant impact on your pet\'s actual rate of aging. Some pets remain youthful well into their teens, while others may require extra care earlier. For personalized advice and a comprehensive health assessment, always consult your veterinarian who knows your companion best.',
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
