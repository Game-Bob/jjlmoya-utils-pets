export type CollarUnit = 'cm' | 'in';
export type CollarType = 'flat' | 'breakaway' | 'martingale';
export type AllowanceStatus = 'tight' | 'balanced' | 'loose';

export interface PetCollarSizeInput {
  neckCircumference: number;
  allowance: number;
  unit: CollarUnit;
  collarType: CollarType;
}

export interface PetCollarSizeResult {
  valid: boolean;
  unit: CollarUnit;
  collarType: CollarType;
  neckCm: number;
  allowanceCm: number;
  minimumCm: number;
  targetCm: number;
  maximumCm: number;
  status: AllowanceStatus;
}

const INCH_TO_CM = 2.54;
const RANGE_WINDOW_CM = 2;
const MIN_NECK_CM = 5;
const MAX_NECK_CM = 250;
const MIN_ALLOWANCE_CM = 0.5;
const MAX_ALLOWANCE_CM = 10;

export function toCentimetres(value: number, unit: CollarUnit): number {
  return unit === 'in' ? value * INCH_TO_CM : value;
}

export function fromCentimetres(value: number, unit: CollarUnit): number {
  return unit === 'in' ? value / INCH_TO_CM : value;
}

export function evaluateAllowance(allowanceCm: number): AllowanceStatus {
  if (allowanceCm < 1.5) return 'tight';
  if (allowanceCm > 3.5) return 'loose';
  return 'balanced';
}

function isValidInput(input: PetCollarSizeInput, neckCm: number, allowanceCm: number): boolean {
  return Number.isFinite(input.neckCircumference)
    && Number.isFinite(input.allowance)
    && neckCm >= MIN_NECK_CM
    && neckCm <= MAX_NECK_CM
    && allowanceCm >= MIN_ALLOWANCE_CM
    && allowanceCm <= MAX_ALLOWANCE_CM;
}

export function calculatePetCollarSize(input: PetCollarSizeInput): PetCollarSizeResult {
  const neckCm = toCentimetres(input.neckCircumference, input.unit);
  const allowanceCm = toCentimetres(input.allowance, input.unit);
  const valid = isValidInput(input, neckCm, allowanceCm);
  const minimumCm = neckCm + allowanceCm;
  const maximumCm = minimumCm + RANGE_WINDOW_CM;

  return {
    valid,
    unit: input.unit,
    collarType: input.collarType,
    neckCm,
    allowanceCm,
    minimumCm,
    targetCm: minimumCm + (RANGE_WINDOW_CM / 2),
    maximumCm,
    status: evaluateAllowance(allowanceCm),
  };
}
