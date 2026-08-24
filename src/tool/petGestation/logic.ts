export type GestationSpecies = 'dog' | 'cat' | 'rabbit' | 'ferret';

export interface GestationProfile {
  minDays: number;
  typicalDays: number;
  maxDays: number;
}

export interface GestationInput {
  species: GestationSpecies;
  matingDate: string;
  today?: Date;
}

export interface GestationResult {
  species: GestationSpecies;
  matingDate: string;
  windowStart: string;
  dueDate: string;
  windowEnd: string;
  elapsedDays: number;
  remainingDays: number;
  progress: number;
  state: 'future' | 'waiting' | 'window' | 'late';
}

export const GESTATION_PROFILES: Record<GestationSpecies, GestationProfile> = {
  dog: { minDays: 58, typicalDays: 63, maxDays: 72 },
  cat: { minDays: 64, typicalDays: 65, maxDays: 66 },
  rabbit: { minDays: 31, typicalDays: 31, maxDays: 31 },
  ferret: { minDays: 42, typicalDays: 42, maxDays: 42 },
};

function parseDateParts(value: string): [number, number, number] {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) throw new Error('Invalid date');
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  return [year, month, day];
}

function parseDate(value: string): Date {
  const [year, month, day] = parseDateParts(value);
  const date = new Date(Date.UTC(year, month - 1, day));
  const valid = Number.isFinite(year) && Number.isFinite(month) && Number.isFinite(day)
    && date.getUTCFullYear() === year
    && date.getUTCMonth() === month - 1
    && date.getUTCDate() === day;
  if (!valid) throw new Error('Invalid date');
  return date;
}

function toISODate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date.getTime());
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

function startOfUTCDate(date: Date): Date {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
}

function differenceInDays(later: Date, earlier: Date): number {
  return Math.round((later.getTime() - earlier.getTime()) / 86400000);
}

function getState(elapsedDays: number, profile: GestationProfile): GestationResult['state'] {
  if (elapsedDays < 0) return 'future';
  if (elapsedDays < profile.minDays) return 'waiting';
  if (elapsedDays <= profile.maxDays) return 'window';
  return 'late';
}

export function calculateGestation({ species, matingDate, today = new Date() }: GestationInput): GestationResult {
  const start = parseDate(matingDate);
  const profile = GESTATION_PROFILES[species];
  const todayDate = startOfUTCDate(today);
  const elapsedDays = differenceInDays(todayDate, start);
  return {
    species,
    matingDate,
    windowStart: toISODate(addDays(start, profile.minDays)),
    dueDate: toISODate(addDays(start, profile.typicalDays)),
    windowEnd: toISODate(addDays(start, profile.maxDays)),
    elapsedDays,
    remainingDays: profile.typicalDays - elapsedDays,
    progress: Math.max(0, Math.min(1, elapsedDays / profile.typicalDays)),
    state: getState(elapsedDays, profile),
  };
}

export function formatDateInput(date: Date): string {
  return toISODate(startOfUTCDate(date));
}

export function getDateOffset(offset: number, today = new Date()): string {
  return formatDateInput(addDays(startOfUTCDate(today), offset));
}
