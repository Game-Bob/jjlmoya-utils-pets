import type { GestationSpecies } from './logic';

const STORAGE_KEY = 'jjlmoya-pet-gestation';

export interface GestationStorageState {
  species: GestationSpecies;
  matingDate: string;
}

export function loadGestationState(): Partial<GestationStorageState> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const value = JSON.parse(raw) as Partial<GestationStorageState>;
    return value;
  } catch {
    return {};
  }
}

export function saveGestationState(state: GestationStorageState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
