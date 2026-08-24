import type { FoodId, PetSpecies } from './logic';

interface SavedState {
  species: PetSpecies;
  foodId: FoodId;
}

const STORAGE_KEY = 'jjlmoya-pet-toxicity-state';

function isSpecies(value: unknown): value is PetSpecies {
  return value === 'dog' || value === 'cat';
}

function isSavedState(value: unknown): value is SavedState {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  return isSpecies(record.species) && typeof record.foodId === 'string';
}

export function loadSavedState(): SavedState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isSavedState(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveState(state: SavedState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
}
