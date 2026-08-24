import type { PetGestationUI } from './ui';
import { GESTATION_PROFILES, type GestationResult } from './logic';

export interface GestationEvaluation {
  label: string;
  detail: string;
  tone: 'future' | 'quiet' | 'ready' | 'late';
}

function dayText(value: number, ui: PetGestationUI): string {
  const absolute = Math.abs(value);
  const unit = absolute === 1 ? ui.dayLabel : ui.daysLabel;
  return `${absolute} ${unit}`;
}

export function evaluateGestation(result: GestationResult, ui: PetGestationUI): GestationEvaluation {
  if (result.state === 'future') {
    return { label: ui.statusFuture, detail: `${dayText(result.elapsedDays, ui)} before the mating date`, tone: 'future' };
  }
  if (result.state === 'waiting') {
    return { label: ui.statusWaiting, detail: `${dayText(result.remainingDays, ui)} until the typical due date`, tone: 'quiet' };
  }
  if (result.state === 'window') {
    return { label: ui.statusWindow, detail: 'The expected delivery window is open', tone: 'ready' };
  }
  const outerEstimate = GESTATION_PROFILES[result.species].maxDays;
  return { label: ui.statusLate, detail: `${dayText(result.elapsedDays - outerEstimate, ui)} beyond the outer estimate`, tone: 'late' };
}
