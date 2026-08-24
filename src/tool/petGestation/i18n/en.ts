import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';
import type { PetGestationUI } from '../ui';

const slug = 'pet-gestation-calculator';
const title = 'Pet Gestation Calculator';
const description = 'Estimate a dog, cat, rabbit, or ferret delivery date from the mating date, with a documented range and a clear reminder that veterinary care comes first.';

const ui: PetGestationUI = {
  journeyHint: 'Choose the species, enter the mating date, and follow the compass to the expected delivery window.',
  instantHint: 'Change either control and the nesting calendar moves with you instantly.',
  speciesLegend: 'What kind of pet is this?',
  speciesDog: 'Dog',
  speciesCat: 'Cat',
  speciesRabbit: 'Rabbit',
  speciesFerret: 'Ferret',
  speciesDogMeta: '58 to 72 days',
  speciesCatMeta: '64 to 66 days',
  speciesRabbitMeta: 'About 31 days',
  speciesFerretMeta: 'About 42 days',
  matingDateLabel: 'Mating date',
  matingDateHint: 'Use the first or best known mating date. Breeding date is an estimate, not a diagnosis.',
  presetToday: 'Today',
  presetWeekAgo: '7 days ago',
  presetFortnightAgo: '14 days ago',
  calculateButton: 'Plot the delivery window',
  resultEyebrow: 'The nesting compass says',
  dueDateLabel: 'Typical due date',
  windowLabel: 'Expected window',
  remainingLabel: 'To typical date',
  elapsedLabel: 'Days elapsed',
  daysLabel: 'days',
  dayLabel: 'day',
  statusFuture: 'That date is still ahead',
  statusWaiting: 'Still in the growing season',
  statusWindow: 'The delivery window is open',
  statusLate: 'Past the outer estimate',
  resultEmpty: 'Your delivery compass will appear here.',
  sampleLabel: 'A live example',
  sceneMating: 'MATING',
  sceneToday: 'Live nesting timeline',
  sceneDue: 'DELIVERY WINDOW',
  noteTitle: 'A calm but important note',
  noteText: 'Mating dates do not always match conception or ovulation. Contact a veterinarian for pregnancy confirmation, prenatal monitoring, or any concern about labor, pain, discharge, or an overdue pregnancy.',
  sourceTitle: 'Method',
  sourceText: 'The dog range uses 58 to 72 days from breeding, while cat, rabbit, and ferret profiles use the approximate periods documented by the MSD Veterinary Manual.',
  invalidDate: 'Enter a real mating date to plot the window.',
  futureDate: 'A future mating date cannot describe an active pregnancy.',
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    question: 'How accurate is a pet pregnancy due date from the mating date?',
    answer: 'It is an estimate. In dogs especially, the date of mating can differ from ovulation and conception because sperm can remain viable in the reproductive tract for several days. The calculator therefore shows a window instead of presenting one date as certain. A veterinarian can improve dating with reproductive history, hormone testing, ultrasound, or other appropriate examinations.',
  },
  {
    question: 'How long are dogs pregnant?',
    answer: 'The MSD Veterinary Manual describes about 58 to 72 days from the first time a female dog permits breeding when the cycle timing is unknown. When ovulation is known, the interval is much narrower, commonly about 62 to 64 days. Breed, litter size, and the accuracy of the breeding record can affect the practical estimate.',
  },
  {
    question: 'How long are cats pregnant?',
    answer: 'A cat pregnancy is commonly around 65 days, with the MSD Veterinary Manual describing parturition around 64 to 66 days from the luteinizing hormone surge triggered by copulation. Because the owner usually records mating rather than the hormone surge, the calculator should be treated as a planning aid and not as a substitute for a veterinary assessment.',
  },
  {
    question: 'Why does the calculator include rabbits and ferrets?',
    answer: 'Rabbits and ferrets are common companion animals with short, well documented approximate gestation periods. The MSD Veterinary Manual lists about 31 days for rabbits and 42 days for ferrets. The calculator keeps these profiles simple and transparent rather than pretending that a single formula works equally well for every species.',
  },
  {
    question: 'When should I call a veterinarian?',
    answer: 'Call a veterinarian if the pregnancy has passed the expected outer range, if labor seems difficult or prolonged, or if there is pain, weakness, heavy bleeding, foul discharge, collapse, or any sudden change that worries you. Do not use a date calculator to decide whether an animal needs urgent care. The animal\'s condition always matters more than the calendar estimate.',
  },
];

const howTo: PetGestationLocaleContent['howTo'] = [
  { name: 'Choose the species', text: 'Select dog, cat, rabbit, or ferret so the calculator applies the corresponding documented gestation profile.' },
  { name: 'Enter the mating date', text: 'Enter the first or best known mating date. If several matings occurred, use the date your veterinarian considers most useful and remember that breeding is not the same as conception.' },
  { name: 'Read the compass', text: 'Review the typical due date, the expected range, days elapsed, and the current status shown around the circular timeline.' },
  { name: 'Use the result responsibly', text: 'Use the estimate for preparation and questions, then contact a veterinarian for confirmation, prenatal monitoring, or any sign of illness or difficult labor.' },
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Pet pregnancy dates at a glance",
    "items": [
      "Enter a mating date and choose the species to estimate a likely delivery date.",
      "Dogs receive a wider range because mating, ovulation, and conception may not happen on the same day.",
      "Cats, rabbits, and ferrets use approximate periods documented in the MSD Veterinary Manual.",
      "The result is for planning and conversation with a veterinarian, not for diagnosing pregnancy or labor."
    ]
  },
  {
    "type": "title",
    "text": "How the pet gestation calculator works",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "This pet gestation calculator turns one practical record, the mating date, into a calendar estimate. It adds a species-specific pregnancy duration and shows both a typical date and an expected window. That distinction is important: the date a mating is observed is not always the date an egg is fertilized, and the reproductive biology of a dog is different from that of a cat, rabbit, or ferret. The result is designed to help a pet owner prepare supplies, organize questions, and notice when an estimate deserves professional attention."
  },
  {
    "type": "paragraph",
    "html": "The visual compass places the mating date at the start of a circular timeline. The colored orbit grows as days pass, while the center reports the number of elapsed days. When the expected range opens, the status changes so the result can be understood without reading a table of numbers. If the outer estimate has passed, the result becomes a prompt to contact a veterinarian rather than a promise that something is wrong. A calendar can orient a decision, but it cannot assess an animal's health."
  },
  {
    "type": "title",
    "text": "Documented gestation profiles",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Species",
      "Typical period",
      "Estimate used from mating"
    ],
    "rows": [
      [
        "Dog",
        "About 63 days",
        "58 to 72 days"
      ],
      [
        "Cat",
        "About 65 days",
        "64 to 66 days"
      ],
      [
        "Rabbit",
        "About 31 days",
        "31 days"
      ],
      [
        "Ferret",
        "About 42 days",
        "42 days"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "The dog profile needs the most caution. Veterinary guidance explains that a dog's normal gestation can be described in different ways depending on which biological milestone is known. A range from breeding is therefore more honest for everyday use than a single fixed number. For cats, the reference period is narrower in the veterinary literature, but the owner may still not know the exact hormonal event used by the reference. The rabbit and ferret values are approximate species periods and should be interpreted in the same responsible way."
  },
  {
    "type": "title",
    "text": "What to prepare before the expected window",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Use the estimate as a planning prompt. Make sure you know which clinic to call, how to travel there, and what signs your veterinarian has asked you to monitor. Keep the animal's environment calm and follow professional advice about nutrition, examinations, vaccination status, parasite control, and any breed-specific risks. Do not give medicines or attempt to induce labor based on an online calculation. Preparation is useful because it reduces hesitation if the animal needs help, not because the estimate can replace observation."
  },
  {
    "type": "tip",
    "title": "A date is never more important than the animal",
    "html": "Seek veterinary advice for pain, marked weakness, collapse, heavy bleeding, foul discharge, a difficult or prolonged labor, or any sudden change that concerns you. If the pregnancy appears to have passed the outer estimate, contact a veterinarian rather than waiting for the calculator to become more certain."
  }
];

const schemas: PetGestationLocaleContent['schemas'] = [
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

export const content: PetGestationLocaleContent = {
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
