import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'pets',
  title: 'Pet Tools',
  description: 'Free calculators and utilities for pet owners. Find out your dog or cat\'s real age and calculate their daily ration with veterinary precision.',
  seo: [
    { type: 'title', text: 'Animal Nutrition and Wellbeing: Science in the Service of Your Pet', level: 2 },
    {
      type: 'paragraph',
      html: 'Caring for a dog, cat, or rabbit is much more than giving them food and affection. It involves understanding their biology, their aging rhythm, and their specific energy needs. In this section we offer <strong>free veterinary calculators</strong> that apply validated scientific formulas to help you make better decisions about your companion\'s health.',
    },
    {
      type: 'paragraph',
      html: 'From the curiosity of knowing how many human years your dog really has, to the precise calculation of the daily ration based on RER (Resting Energy Requirement), our tools transform complex veterinary concepts into clear, actionable answers for the responsible pet owner.',
    },
    { type: 'title', text: 'Your Pet\'s Real Age: Beyond the "Times 7" Myth', level: 2 },
    {
      type: 'paragraph',
      html: 'The popular belief that one dog year equals seven human years has been debunked by modern veterinary science for decades. The reality is that dogs mature exponentially in their first two years of life, reaching the equivalent of 15 human years at 12 months and 24 years at 24 months. Afterwards, the pace slows and depends enormously on the <strong>size of the animal</strong>: a giant dog over 45 kg can age up to 60% faster than a small breed.',
    },
    {
      type: 'paragraph',
      html: 'Cats, on the other hand, follow a more linear aging curve: after the first two years of accelerated development, each feline year is approximately equivalent to four human years. Knowing your pet\'s life stage is not just curiosity, it is relevant medical information: it determines when to schedule geriatric checkups, when to adjust the diet, and what health signs you should monitor.',
    },
    { type: 'title', text: 'Precision Nutrition: Calculate the Exact Daily Ration', level: 2 },
    {
      type: 'paragraph',
      html: 'Obesity affects more than 50% of domestic pets in developed countries and is the direct cause of joint and cardiovascular problems and a reduced life expectancy. The problem is not a lack of love from owners, but the <strong>absence of precise caloric references</strong>. Our daily ration calculator applies the standard veterinary RER formula (70 × weight^0.75) and multiplies it by the corresponding DER factor for your animal\'s species, life stage, and activity level.',
    },
    {
      type: 'list',
      items: [
        '<strong>Pet Age Calculator:</strong> Converts chronological years to human equivalent based on species and size, with life stage and next veterinary milestone.',
        '<strong>Daily Ration Calculator:</strong> Calculates grams of dry and wet food based on RER and DER for dogs, cats, and rabbits.',
      ],
    },
    {
      type: 'tip',
      title: 'Veterinary Advice',
      html: 'These tools provide scientific starting references, but every animal is unique. Always consult your vet to adjust the diet and health plan to your pet\'s individual needs.',
    },
    {
      type: 'paragraph',
      html: 'Investing in knowledge about your pet\'s biology is the most effective form of preventive medicine. A healthy weight and timely veterinary care can add years of quality life to your faithful companion.',
    },
  ],
};
