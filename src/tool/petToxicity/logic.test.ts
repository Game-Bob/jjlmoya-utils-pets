import { describe, expect, it } from 'vitest';
import { getFoodEvaluation, getFoodOptions } from './logic';

describe('pet toxicity logic', () => {
  it('returns the foods documented for each species', () => {
    const dogFoods = getFoodOptions('dog');
    const catFoods = getFoodOptions('cat');

    expect(dogFoods.length).toBeGreaterThan(catFoods.length);
    expect(dogFoods.map((food) => food.id)).toContain('macadamia-nuts');
    expect(catFoods.map((food) => food.id)).not.toContain('macadamia-nuts');
  });

  it('keeps xylitol as an emergency for dogs', () => {
    const evaluation = getFoodEvaluation('dog', 'xylitol');

    expect(evaluation?.level).toBe('critical');
    expect(evaluation?.action).toContain('immediately');
  });

  it('keeps cat-specific allium risk distinct', () => {
    const evaluation = getFoodEvaluation('cat', 'onion-garlic');

    expect(evaluation?.level).toBe('critical');
    expect(evaluation?.why).toContain('susceptible');
  });

  it('rejects foods without a species-specific profile', () => {
    expect(getFoodEvaluation('cat', 'macadamia-nuts')).toBeNull();
    expect(getFoodEvaluation('dog', 'not-a-food')).toBeNull();
  });
});
