export type PetSpecies = 'dog' | 'cat';
export type TravelMode = 'car' | 'air';
export type UnitSystem = 'metric' | 'imperial';

export interface CarrierInput {
  species: PetSpecies;
  mode: TravelMode;
  unit: UnitSystem;
  noseToTail: number;
  elbowHeight: number;
  shoulderWidth: number;
  standingHeight: number;
  bedding: number;
  weight: number;
  snubNosed: boolean;
}

export interface CarrierDimensions {
  lengthCm: number;
  widthCm: number;
  heightCm: number;
  isSnubNosedAdjusted: boolean;
}

export interface CarrierResult {
  input: CarrierInput;
  dimensions: CarrierDimensions;
  totalVolumeLitres: number;
  airReviewRequired: boolean;
}

const INCH_TO_CM = 2.54;
const LB_TO_KG = 0.45359237;

function toMetric(value: number, unit: UnitSystem, factor: number): number {
  return unit === 'metric' ? value : value * factor;
}

function validateInput(input: CarrierInput): void {
  const measurements = [input.noseToTail, input.elbowHeight, input.shoulderWidth, input.standingHeight, input.bedding, input.weight];
  if (measurements.some((value) => !Number.isFinite(value) || value < 0)) throw new Error('Invalid measurement');
  if (input.noseToTail === 0 || input.elbowHeight === 0 || input.shoulderWidth === 0 || input.standingHeight === 0 || input.weight === 0) {
    throw new Error('Missing measurement');
  }
}

export function calculateCarrier(input: CarrierInput): CarrierResult {
  validateInput(input);
  const noseToTail = toMetric(input.noseToTail, input.unit, INCH_TO_CM);
  const elbowHeight = toMetric(input.elbowHeight, input.unit, INCH_TO_CM);
  const shoulderWidth = toMetric(input.shoulderWidth, input.unit, INCH_TO_CM);
  const standingHeight = toMetric(input.standingHeight, input.unit, INCH_TO_CM);
  const bedding = toMetric(input.bedding, input.unit, INCH_TO_CM);
  const multiplier = input.mode === 'air' && input.snubNosed ? 1.1 : 1;
  const dimensions = {
    lengthCm: (noseToTail + elbowHeight / 2) * multiplier,
    widthCm: shoulderWidth * 2 * multiplier,
    heightCm: (standingHeight + bedding) * multiplier,
    isSnubNosedAdjusted: multiplier > 1,
  };
  const totalVolumeLitres = dimensions.lengthCm * dimensions.widthCm * dimensions.heightCm / 1000;
  return { input, dimensions, totalVolumeLitres, airReviewRequired: input.mode === 'air' };
}

export function convertLength(value: number, from: UnitSystem, to: UnitSystem): number {
  if (from === to) return value;
  return from === 'metric' ? value / INCH_TO_CM : value * INCH_TO_CM;
}

export function convertWeight(value: number, from: UnitSystem, to: UnitSystem): number {
  if (from === to) return value;
  return from === 'metric' ? value / LB_TO_KG : value * LB_TO_KG;
}

export function formatInputValue(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
}
