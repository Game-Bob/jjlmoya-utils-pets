import { describe, expect, it } from 'vitest';
import {
  calculateCatHumanAge,
  calculateDogHumanAge,
  calculatePetHumanAge,
  getCatStageKey,
  getDogMilestone,
} from '../tool/petAge/logic';
import {
  calculateDER,
  calculateRation,
  calculateRER,
  getStatusKey,
} from '../tool/petRation/logic';

describe('pet age reference calculations', () => {
  it('uses the documented first-year and second-year anchors', () => {
    expect(calculateDogHumanAge(1, 'small')).toBe(15);
    expect(calculateDogHumanAge(2, 'small')).toBe(24);
    expect(calculateCatHumanAge(1)).toBe(15);
    expect(calculateCatHumanAge(2)).toBe(24);
  });

  it('handles zero and size-specific adult progression', () => {
    expect(calculatePetHumanAge('dog', 0, 'giant')).toBe(0);
    expect(calculatePetHumanAge('cat', 0)).toBe(0);
    expect(calculateDogHumanAge(3, 'small')).toBe(29);
    expect(calculateDogHumanAge(3, 'giant')).toBe(32);
    expect(getCatStageKey(80)).toBe('stageCatVenerable');
    expect(getDogMilestone(8)).toBe('Chequeo Geriátrico Semestral');
  });
});

describe('pet ration reference calculations', () => {
  it('calculates RER and DER using the selected profile', () => {
    expect(calculateRER(10)).toBeCloseTo(393.64, 1);
    expect(calculateDER(400, 'dog', 'adult', 'low')).toBe(480);
    expect(calculateDER(400, 'dog', 'adult', 'high')).toBe(800);
  });

  it('keeps dry and wet ration outputs non-negative and preserves the split', () => {
    const ration = calculateRation(700, 0.4);
    expect(ration.dryGrams).toBe(120);
    expect(ration.wetGrams).toBe(280);
    expect(calculateRation(0, 0)).toEqual({ dryGrams: 0, wetGrams: 0 });
    expect(getStatusKey('dog', 'puppy', 5)).toBe('statusPuppy');
    expect(getStatusKey('dog', 'adult', 50)).toBe('statusLargeDog');
  });
});
