import { describe, expect, it } from 'vitest';
import {
  calculatePetCollarSize,
  evaluateAllowance,
  fromCentimetres,
  toCentimetres,
} from './logic';

describe('pet collar size calculator', () => {
  it('converts inches and centimetres without changing the physical value', () => {
    expect(toCentimetres(10, 'in')).toBeCloseTo(25.4);
    expect(fromCentimetres(25.4, 'in')).toBeCloseTo(10);
    expect(toCentimetres(25.4, 'cm')).toBe(25.4);
  });

  it('adds the selected allowance and returns a two centimetre search window', () => {
    const result = calculatePetCollarSize({
      neckCircumference: 32,
      allowance: 2,
      unit: 'cm',
      collarType: 'flat',
    });

    expect(result.valid).toBe(true);
    expect(result.minimumCm).toBe(34);
    expect(result.targetCm).toBe(35);
    expect(result.maximumCm).toBe(36);
    expect(result.status).toBe('balanced');
  });

  it('keeps the calculation in centimetres when the user enters inches', () => {
    const result = calculatePetCollarSize({
      neckCircumference: 12.5984,
      allowance: 0.7874,
      unit: 'in',
      collarType: 'breakaway',
    });

    expect(result.valid).toBe(true);
    expect(result.neckCm).toBeCloseTo(32);
    expect(result.allowanceCm).toBeCloseTo(2);
    expect(result.minimumCm).toBeCloseTo(34);
    expect(result.collarType).toBe('breakaway');
  });

  it('rejects impossible measurements while preserving a diagnostic result', () => {
    const result = calculatePetCollarSize({
      neckCircumference: 0,
      allowance: 2,
      unit: 'cm',
      collarType: 'martingale',
    });

    expect(result.valid).toBe(false);
    expect(result.minimumCm).toBe(2);
  });

  it('classifies the selected allowance for the visual review', () => {
    expect(evaluateAllowance(1)).toBe('tight');
    expect(evaluateAllowance(2)).toBe('balanced');
    expect(evaluateAllowance(5)).toBe('loose');
  });
});
