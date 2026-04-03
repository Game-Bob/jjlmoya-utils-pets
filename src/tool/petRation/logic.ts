export type RationSpecies = 'dog' | 'cat' | 'rabbit';
export type LifeStage = 'puppy' | 'adult' | 'senior';
export type ActivityLevel = 'low' | 'mod' | 'high';

type MultiplierMap = Record<RationSpecies, Record<LifeStage, Record<ActivityLevel, number>>>;

export const MULTIPLIERS: MultiplierMap = {
  dog: { puppy: { low: 2.5, mod: 3.0, high: 3.5 }, adult: { low: 1.2, mod: 1.6, high: 2.0 }, senior: { low: 1.0, mod: 1.2, high: 1.4 } },
  cat: { puppy: { low: 2.0, mod: 2.5, high: 3.0 }, adult: { low: 1.0, mod: 1.2, high: 1.4 }, senior: { low: 0.9, mod: 1.0, high: 1.1 } },
  rabbit: { puppy: { low: 1.5, mod: 2.0, high: 2.5 }, adult: { low: 1.0, mod: 1.2, high: 1.4 }, senior: { low: 0.8, mod: 1.0, high: 1.2 } },
};

export const CALORIC_STANDARDS = { kDry: 3500, kWet: 1000 };

export const WEIGHT_RANGES: Record<RationSpecies, number> = {
  dog: 85,
  cat: 20,
  rabbit: 10,
};

export function calculateRER(weightKg: number): number {
  return 70 * Math.pow(weightKg, 0.75);
}

export function calculateDER(rer: number, species: RationSpecies, stage: LifeStage, activity: ActivityLevel): number {
  return rer * (MULTIPLIERS[species][stage][activity] || 1.6);
}

export function calculateRation(der: number, wetPct: number): { dryGrams: number; wetGrams: number } {
  const dryPct = 1 - wetPct;
  return {
    dryGrams: Math.round((der * dryPct / CALORIC_STANDARDS.kDry) * 1000),
    wetGrams: Math.round((der * wetPct / CALORIC_STANDARDS.kWet) * 1000),
  };
}

export function getStatusMessage(species: RationSpecies, stage: LifeStage, weightKg: number): string {
  if (stage === 'puppy') return 'Fase de crecimiento rápido';
  if (stage === 'senior') return 'Metabolismo maduro';
  if (weightKg > 40 && species === 'dog') return 'Raza grande: Control articular';
  return 'Peso equilibrado';
}
