import type { PetSpecies, TravelMode, UnitSystem } from './logic';

const STORAGE_KEY = 'jjlmoya-pet-carrier-crate-size';

export interface CarrierStorageState {
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

export function loadCarrierState(): Partial<CarrierStorageState> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as Partial<CarrierStorageState> : {};
  } catch {
    return {};
  }
}

export function saveCarrierState(state: CarrierStorageState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
