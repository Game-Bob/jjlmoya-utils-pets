import type { MedicationScheduleInput } from './logic';

const STORAGE_KEY = 'jjlmoya-pet-medication-schedule';

export interface MedicationStorageState extends MedicationScheduleInput {
  completedIds: string[];
}

export function loadMedicationState(): Partial<MedicationStorageState> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as Partial<MedicationStorageState> : {};
  } catch {
    return {};
  }
}

export function saveMedicationState(state: MedicationStorageState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
}

export function clearMedicationState(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    return;
  }
}
