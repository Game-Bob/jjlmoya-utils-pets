import { describe, expect, it } from 'vitest';
import {
  calculateGestation,
  formatDateInput,
  getDateOffset,
  GESTATION_PROFILES,
} from './logic';

const today = new Date(2026, 7, 24);

describe('pet gestation logic', () => {
  it('keeps documented species profiles', () => {
    expect(GESTATION_PROFILES.dog).toEqual({ minDays: 58, typicalDays: 63, maxDays: 72 });
    expect(GESTATION_PROFILES.cat.typicalDays).toBe(65);
    expect(GESTATION_PROFILES.rabbit.typicalDays).toBe(31);
    expect(GESTATION_PROFILES.ferret.typicalDays).toBe(42);
  });

  it('calculates a dog window and progress before the due date', () => {
    const result = calculateGestation({ species: 'dog', matingDate: '2026-07-01', today });
    expect(result.windowStart).toBe('2026-08-28');
    expect(result.dueDate).toBe('2026-09-02');
    expect(result.windowEnd).toBe('2026-09-11');
    expect(result.elapsedDays).toBe(54);
    expect(result.remainingDays).toBe(9);
    expect(result.state).toBe('waiting');
    expect(result.progress).toBeCloseTo(54 / 63);
  });

  it('reports future, due window, and late states', () => {
    expect(calculateGestation({ species: 'cat', matingDate: '2026-09-01', today }).state).toBe('future');
    expect(calculateGestation({ species: 'cat', matingDate: '2026-06-20', today }).state).toBe('window');
    expect(calculateGestation({ species: 'rabbit', matingDate: '2026-06-01', today }).state).toBe('late');
  });

  it('normalizes local dates for presets', () => {
    expect(formatDateInput(today)).toBe('2026-08-24');
    expect(getDateOffset(-7, today)).toBe('2026-08-17');
  });

  it('rejects impossible calendar dates', () => {
    expect(() => calculateGestation({ species: 'dog', matingDate: '2026-02-30', today })).toThrow('Invalid date');
  });
});
