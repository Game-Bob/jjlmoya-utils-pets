import type { PetCarrierCrateSizePlannerUI } from './ui';
import type { CarrierResult } from './logic';

export interface CarrierEvaluation {
  label: string;
  detail: string;
  tone: 'calm' | 'review' | 'adjusted';
}

export function evaluateCarrier(result: CarrierResult, ui: PetCarrierCrateSizePlannerUI): CarrierEvaluation {
  if (result.dimensions.isSnubNosedAdjusted) return { label: ui.statusSnub, detail: ui.resultDetail, tone: 'adjusted' };
  if (result.airReviewRequired) return { label: ui.statusAirReview, detail: ui.resultDetail, tone: 'review' };
  return { label: ui.statusComfort, detail: ui.resultDetail, tone: 'calm' };
}
