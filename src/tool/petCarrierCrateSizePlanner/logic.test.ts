import { describe, expect, it } from 'vitest';
import { calculateCarrier, convertLength, convertWeight, formatInputValue } from './logic';

const dogInput = {
  species: 'dog' as const,
  mode: 'air' as const,
  unit: 'metric' as const,
  noseToTail: 70,
  elbowHeight: 30,
  shoulderWidth: 22,
  standingHeight: 55,
  bedding: 3,
  weight: 18,
  snubNosed: false,
};

describe('pet carrier crate size logic', () => {
  it('uses the documented internal dimension formulas', () => {
    const result = calculateCarrier(dogInput);
    expect(result.dimensions).toEqual({ lengthCm: 85, widthCm: 44, heightCm: 58, isSnubNosedAdjusted: false });
    expect(result.totalVolumeLitres).toBeCloseTo(216.92);
  });

  it('adds ten percent for an air journey with a short-nosed pet', () => {
    const result = calculateCarrier({ ...dogInput, snubNosed: true });
    expect(result.dimensions.lengthCm).toBeCloseTo(93.5);
    expect(result.dimensions.isSnubNosedAdjusted).toBe(true);
  });

  it('converts imperial inputs before calculating', () => {
    const result = calculateCarrier({ ...dogInput, unit: 'imperial', noseToTail: 27.56, elbowHeight: 11.81, shoulderWidth: 8.66, standingHeight: 21.65, bedding: 1.18, weight: 39.68 });
    expect(result.dimensions.lengthCm).toBeCloseTo(85, 0);
    expect(result.dimensions.widthCm).toBeCloseTo(44, 0);
  });

  it('exposes safe unit conversions and formatting', () => {
    expect(convertLength(100, 'metric', 'imperial')).toBeCloseTo(39.3701);
    expect(convertLength(39.37, 'imperial', 'metric')).toBeCloseTo(100, 0);
    expect(convertWeight(10, 'metric', 'imperial')).toBeCloseTo(22.0462);
    expect(convertWeight(22.0462, 'imperial', 'metric')).toBeCloseTo(10, 0);
    expect(formatInputValue(12)).toBe('12');
    expect(formatInputValue(12.5)).toBe('12.5');
  });

  it('rejects missing and negative measurements', () => {
    expect(() => calculateCarrier({ ...dogInput, noseToTail: 0 })).toThrow('Missing measurement');
    expect(() => calculateCarrier({ ...dogInput, weight: -1 })).toThrow('Invalid measurement');
  });
});
