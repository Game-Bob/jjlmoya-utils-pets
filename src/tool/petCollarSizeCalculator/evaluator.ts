import type { AllowanceStatus, CollarType, PetCollarSizeResult } from './logic';

export interface FitReview {
  status: AllowanceStatus;
  collarType: CollarType;
  labelKey: 'statusTight' | 'statusBalanced' | 'statusLoose';
  detailKey: 'statusTightDetail' | 'statusBalancedDetail' | 'statusLooseDetail';
}

export function getFitReview(result: PetCollarSizeResult): FitReview {
  const keys = {
    tight: { labelKey: 'statusTight', detailKey: 'statusTightDetail' },
    balanced: { labelKey: 'statusBalanced', detailKey: 'statusBalancedDetail' },
    loose: { labelKey: 'statusLoose', detailKey: 'statusLooseDetail' },
  } as const;

  return { status: result.status, collarType: result.collarType, ...keys[result.status] };
}
