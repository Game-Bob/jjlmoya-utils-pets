import { describe, expect, it } from 'vitest';
import { calculatePetWaterIntake, kgToLb, lbToKg } from './logic';

describe('pet water intake logic', () => {
  it('calculates baseline water for 10kg dog on dry diet', () => {
    const res = calculatePetWaterIntake({
      species: 'dog',
      weightKg: 10,
      diet: 'dry',
      activity: 'calm',
      heat: 'normal',
    });

    expect(res.totalMlMin).toBe(540);
    expect(res.totalMlMax).toBe(660);
    expect(res.bowlMlMin).toBe(459);
    expect(res.bowlMlMax).toBe(627);
    expect(res.statusKey).toBe('statusEveryday');
  });

  it('calculates baseline water for 4kg cat on wet diet', () => {
    const res = calculatePetWaterIntake({
      species: 'cat',
      weightKg: 4,
      diet: 'wet',
      activity: 'calm',
      heat: 'normal',
    });

    expect(res.totalMlMin).toBe(144);
    expect(res.totalMlMax).toBe(176);
    expect(res.bowlMlMin).toBe(29);
    expect(res.bowlMlMax).toBe(70);
  });

  it('handles active + hot demanding status', () => {
    const res = calculatePetWaterIntake({
      species: 'dog',
      weightKg: 20,
      diet: 'mixed',
      activity: 'active',
      heat: 'hot',
    });

    expect(res.statusKey).toBe('statusDemanding');
  });

  it('converts weight units correctly', () => {
    expect(kgToLb(10)).toBe(22.0);
    expect(lbToKg(22)).toBe(10.0);
  });
});
