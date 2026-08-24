export type PetSpecies = 'dog' | 'cat';
export type FoodId =
  | 'chocolate'
  | 'xylitol'
  | 'grapes-raisins'
  | 'onion-garlic'
  | 'alcohol'
  | 'macadamia-nuts'
  | 'yeast-dough';
export type RiskLevel = 'critical' | 'high' | 'caution' | 'unknown';

export interface SpeciesAdvice {
  level: RiskLevel;
  summary: string;
  why: string;
  signs: string[];
  action: string;
}

export interface FoodProfile {
  id: FoodId;
  name: string;
  detail: string;
  advice: Partial<Record<PetSpecies, SpeciesAdvice>>;
}

export interface FoodOption {
  id: FoodId;
  name: string;
  detail: string;
}

export interface FoodEvaluation extends SpeciesAdvice {
  food: FoodProfile;
  species: PetSpecies;
}

export const FOOD_CATALOG: readonly FoodProfile[] = [
  {
    id: 'chocolate',
    name: 'Chocolate and caffeine',
    detail: 'Chocolate, coffee, tea, energy drinks',
    advice: {
      dog: {
        level: 'high',
        summary: 'Methylxanthines can affect the heart and nervous system.',
        why: 'Cocoa products contain theobromine and caffeine. Dark chocolate, baking chocolate, cocoa powder, and concentrated drinks are more concerning than milk chocolate, but the product, amount, and body weight all matter.',
        signs: ['Vomiting or diarrhea', 'Restlessness or rapid heartbeat', 'Tremors or seizures'],
        action: 'Call a veterinarian or animal poison service promptly. Keep the package and note the type, amount, and time eaten.',
      },
      cat: {
        level: 'high',
        summary: 'Caffeine and cocoa compounds can disturb the heart and nervous system.',
        why: 'Cats can be affected by methylxanthines in chocolate and caffeinated drinks. A cat may eat less than a dog, but a small amount is not a reason to guess at safety.',
        signs: ['Vomiting or diarrhea', 'Agitation or fast breathing', 'Tremors or seizures'],
        action: 'Call your veterinarian or an animal poison service promptly with the product label and estimated amount.',
      },
    },
  },
  {
    id: 'xylitol',
    name: 'Xylitol',
    detail: 'Sugar-free gum, sweets, baked goods, some nut butters',
    advice: {
      dog: {
        level: 'critical',
        summary: 'Xylitol can cause a rapid, dangerous fall in blood sugar in dogs.',
        why: 'Xylitol is used in some sugar-free foods and personal-care products. In dogs it can trigger a potent insulin release, and serious effects may appear quickly or be delayed.',
        signs: ['Vomiting or marked sleepiness', 'Weakness, staggering, or collapse', 'Shaking, seizures, or bleeding problems'],
        action: 'Treat this as an emergency. Call a veterinarian, emergency clinic, or animal poison service immediately and take the product packaging.',
      },
      cat: {
        level: 'caution',
        summary: 'Xylitol is not considered as dangerous to cats as it is to dogs, but a product exposure still needs context.',
        why: 'Available FDA guidance describes a much clearer danger for dogs. Do not turn that difference into a safety guarantee because the product may contain other hazards and the amount may be unknown.',
        signs: ['Vomiting or unusual tiredness', 'Weakness or poor coordination', 'Any sudden change after eating a product'],
        action: 'Call your veterinarian with the ingredient list and product amount instead of waiting for signs.',
      },
    },
  },
  {
    id: 'grapes-raisins',
    name: 'Grapes and raisins',
    detail: 'Fresh grapes, raisins, sultanas, baked goods',
    advice: {
      dog: {
        level: 'high',
        summary: 'Exposure can damage the kidneys, and the risky amount is not reliably predictable at home.',
        why: 'Veterinary poison-control guidance links grapes and raisins with kidney injury in dogs. Individual sensitivity varies, so a seemingly small amount should not be dismissed.',
        signs: ['Vomiting or diarrhea', 'Lethargy or loss of appetite', 'Changes in drinking or urination'],
        action: 'Call a veterinarian or animal poison service promptly, even if your dog looks normal. Note the food, amount, and time.',
      },
      cat: {
        level: 'caution',
        summary: 'Do not offer grapes or raisins to cats, and ask a veterinarian about any known exposure.',
        why: 'The clearest documented kidney-risk pattern is in dogs, while cat-specific evidence is less established. Uncertainty is not the same as proof of safety.',
        signs: ['Vomiting or diarrhea', 'Unusual tiredness or loss of appetite', 'Changes in drinking or urination'],
        action: 'Call your veterinarian with the food, amount, and time rather than waiting for a symptom-based answer.',
      },
    },
  },
  {
    id: 'onion-garlic',
    name: 'Onion, garlic and chives',
    detail: 'Raw, cooked, dried, powdered, sauces and soup mixes',
    advice: {
      dog: {
        level: 'high',
        summary: 'Allium plants can damage red blood cells and cause anemia.',
        why: 'Onion, garlic, chives, and leeks can be harmful in raw, cooked, dehydrated, or concentrated forms. Powdered ingredients and soup mixes can hide a meaningful exposure.',
        signs: ['Vomiting or diarrhea', 'Weakness, pale gums, or fast breathing', 'Dark urine, collapse, or marked tiredness'],
        action: 'Call a veterinarian for exposure guidance. Do not wait for anemia signs, which may appear days after ingestion.',
      },
      cat: {
        level: 'critical',
        summary: 'Cats are especially susceptible to red blood cell damage from allium plants.',
        why: 'Veterinary toxicology references identify cats as the most susceptible common companion species. Concentrated flakes, powders, and soup mixes deserve particular caution.',
        signs: ['Weakness or pale gums', 'Fast breathing or dark urine', 'Collapse or severe tiredness'],
        action: 'Call a veterinarian promptly for any known exposure, even when the cat seems well. Delayed signs are possible.',
      },
    },
  },
  {
    id: 'alcohol',
    name: 'Alcohol',
    detail: 'Drinks, extracts, desserts and fermented mixtures',
    advice: {
      dog: {
        level: 'high',
        summary: 'Alcohol can depress the nervous system and affect breathing and blood chemistry.',
        why: 'Pets are much smaller than people and may ingest concentrated drinks, extracts, or alcohol-containing foods without an adult realizing how much they received.',
        signs: ['Vomiting or diarrhea', 'Poor coordination or unusual sleepiness', 'Slow breathing, tremors, or collapse'],
        action: 'Call a veterinarian or emergency clinic promptly and keep the container available for identification.',
      },
      cat: {
        level: 'high',
        summary: 'Alcohol can depress the nervous system and affect breathing in cats.',
        why: 'Alcohol-containing drinks, extracts, and desserts are not suitable pet treats. The concentration and amount matter, and a cat can deteriorate quickly.',
        signs: ['Vomiting or diarrhea', 'Poor coordination or unusual sleepiness', 'Slow breathing, tremors, or collapse'],
        action: 'Call a veterinarian or emergency clinic promptly with the product and estimated amount.',
      },
    },
  },
  {
    id: 'macadamia-nuts',
    name: 'Macadamia nuts',
    detail: 'Whole nuts, cookies, nut mixes and spreads',
    advice: {
      dog: {
        level: 'high',
        summary: 'Macadamia nuts can cause weakness, incoordination, vomiting, and tremors in dogs.',
        why: 'The toxic mechanism is not fully understood, but dogs can become ill after eating macadamia nuts. Fat-rich recipes may add a separate digestive risk.',
        signs: ['Weakness or difficulty walking', 'Vomiting or depression', 'Tremors or overheating'],
        action: 'Call your veterinarian for exposure guidance and keep the product packaging.',
      },
    },
  },
  {
    id: 'yeast-dough',
    name: 'Raw yeast dough',
    detail: 'Bread dough, pizza dough and rising dough',
    advice: {
      dog: {
        level: 'high',
        summary: 'Rising dough can expand in the stomach and produce alcohol.',
        why: 'Raw yeast dough can continue fermenting after ingestion. Expansion and alcohol production can create a dangerous combination that needs veterinary advice.',
        signs: ['A swollen or painful abdomen', 'Unsteady behavior or unusual sleepiness', 'Repeated retching or collapse'],
        action: 'Call a veterinarian or emergency clinic promptly. Do not wait to see whether the dough finishes rising.',
      },
      cat: {
        level: 'high',
        summary: 'Raw yeast dough can expand and ferment inside a cat.',
        why: 'Rising dough can create abdominal distension and alcohol exposure. The risk depends on the dough and amount, so a professional should assess it.',
        signs: ['A swollen or painful abdomen', 'Unsteady behavior or unusual sleepiness', 'Repeated retching or collapse'],
        action: 'Call a veterinarian or emergency clinic promptly and keep the recipe or packaging available.',
      },
    },
  },
];

export function getFoodOptions(species: PetSpecies): FoodOption[] {
  return FOOD_CATALOG
    .filter((food) => Boolean(food.advice[species]))
    .map(({ id, name, detail }) => ({ id, name, detail }));
}

export function getFoodEvaluation(species: PetSpecies, foodId: string): FoodEvaluation | null {
  const food = FOOD_CATALOG.find((candidate) => candidate.id === foodId);
  const advice = food?.advice[species];
  if (!food || !advice) return null;
  return { ...advice, food, species };
}
