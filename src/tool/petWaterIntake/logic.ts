export type PetSpecies = 'dog' | 'cat';
export type UnitSystem = 'metric' | 'imperial';
export type DietType = 'dry' | 'mixed' | 'wet';
export type ActivityLevel = 'calm' | 'typical' | 'active';
export type HeatContext = 'normal' | 'warm' | 'hot';

export interface WaterCalculationInput {
  species: PetSpecies;
  weightKg: number;
  diet: DietType;
  activity: ActivityLevel;
  heat: HeatContext;
}

export interface WaterCalculationResult {
  species: PetSpecies;
  weightKg: number;
  totalMlMin: number;
  totalMlMax: number;
  bowlMlMin: number;
  bowlMlMax: number;
  statusKey: 'statusEveryday' | 'statusActive' | 'statusWarm' | 'statusDemanding';
  statusDetailKey: 'statusDetailEveryday' | 'statusDetailActive' | 'statusDetailWarm' | 'statusDetailDemanding';
}

const BASE_ML_PER_KG: Record<PetSpecies, number> = {
  dog: 60,
  cat: 40,
};

const DIET_BOWL_SHARE: Record<DietType, { min: number; max: number }> = {
  dry: { min: 0.85, max: 0.95 },
  mixed: { min: 0.50, max: 0.70 },
  wet: { min: 0.20, max: 0.40 },
};

const ACTIVITY_MULTIPLIER: Record<ActivityLevel, number> = {
  calm: 1.0,
  typical: 1.1,
  active: 1.3,
};

const HEAT_MULTIPLIER: Record<HeatContext, number> = {
  normal: 1.0,
  warm: 1.2,
  hot: 1.4,
};

function getWaterStatusKeys(activity: ActivityLevel, heat: HeatContext) {
  if (activity === 'active' && heat === 'hot') {
    return { statusKey: 'statusDemanding' as const, statusDetailKey: 'statusDetailDemanding' as const };
  }
  if (activity === 'active') {
    return { statusKey: 'statusActive' as const, statusDetailKey: 'statusDetailActive' as const };
  }
  if (heat === 'hot' || heat === 'warm') {
    return { statusKey: 'statusWarm' as const, statusDetailKey: 'statusDetailWarm' as const };
  }
  return { statusKey: 'statusEveryday' as const, statusDetailKey: 'statusDetailEveryday' as const };
}

export function calculatePetWaterIntake(input: WaterCalculationInput): WaterCalculationResult {
  const { species, weightKg, diet, activity, heat } = input;
  const baseMl = weightKg * BASE_ML_PER_KG[species];
  const totalCenter = baseMl * ACTIVITY_MULTIPLIER[activity] * HEAT_MULTIPLIER[heat];
  const totalMlMin = Math.round(totalCenter * 0.9);
  const totalMlMax = Math.round(totalCenter * 1.1);

  const bowlShare = DIET_BOWL_SHARE[diet];
  const bowlMlMin = Math.round(totalMlMin * bowlShare.min);
  const bowlMlMax = Math.round(totalMlMax * bowlShare.max);

  const { statusKey, statusDetailKey } = getWaterStatusKeys(activity, heat);

  return { species, weightKg, totalMlMin, totalMlMax, bowlMlMin, bowlMlMax, statusKey, statusDetailKey };
}

export function kgToLb(kg: number): number {
  return Math.round(kg * 2.20462 * 10) / 10;
}

export function lbToKg(lb: number): number {
  return Math.round((lb / 2.20462) * 10) / 10;
}
