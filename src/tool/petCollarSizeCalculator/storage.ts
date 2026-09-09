import type { CollarType, CollarUnit } from './logic';

export interface StoredCollarState {
  neckCircumference?: number;
  allowance?: number;
  unit?: CollarUnit;
  collarType?: CollarType;
}

const STORAGE_KEY = 'jjlmoya-pet-collar-size';

export function loadCollarState(): StoredCollarState {
  if (typeof window === 'undefined') return {};

  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) as StoredCollarState : {};
  } catch {
    return {};
  }
}

export function saveCollarState(state: StoredCollarState): void {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
