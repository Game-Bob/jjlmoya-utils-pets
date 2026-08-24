import type { PetToxicityUI } from './ui';
import type { FoodEvaluation, RiskLevel } from './logic';

export type RiskTone = 'critical' | 'high' | 'caution' | 'unknown';

export interface RiskPresentation {
  label: string;
  tone: RiskTone;
}

export function getRiskPresentation(level: RiskLevel, ui: PetToxicityUI): RiskPresentation {
  const labels: Record<RiskLevel, string> = {
    critical: ui.riskCritical,
    high: ui.riskHigh,
    caution: ui.riskCaution,
    unknown: ui.riskUnknown,
  };
  return { label: labels[level], tone: level };
}

export function getResultTitle(evaluation: FoodEvaluation | null, ui: PetToxicityUI): string {
  return evaluation ? evaluation.food.name : ui.resultEmpty;
}
