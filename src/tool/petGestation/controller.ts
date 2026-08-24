import { calculateGestation, getDateOffset, type GestationSpecies } from './logic';
import { renderEvaluation, renderScene } from './dom-views';
import { loadGestationState, saveGestationState } from './storage';
import type { PetGestationUI } from './ui';

interface ControllerState {
  species: GestationSpecies;
  matingDate: string;
}

function readUI(root: HTMLElement): PetGestationUI {
  const script = root.querySelector<HTMLScriptElement>('[data-gestation-ui]');
  return JSON.parse(script?.textContent || '{}') as PetGestationUI;
}

function setSpecies(root: HTMLElement, species: GestationSpecies): void {
  root.querySelectorAll<HTMLButtonElement>('[data-species]').forEach((button) => {
    const active = button.dataset.species === species;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function calculate(root: HTMLElement, state: ControllerState, ui: PetGestationUI): void {
  const dateInput = root.querySelector<HTMLInputElement>('[data-mating-date]');
  const error = root.querySelector<HTMLElement>('[data-error]');
  if (!dateInput?.value) {
    if (error) error.textContent = ui.invalidDate;
    return;
  }
  try {
    state.matingDate = dateInput.value;
    const result = calculateGestation(state);
    saveGestationState(state);
    if (error) error.textContent = '';
    renderScene(root.querySelector<HTMLElement>('[data-scene]') as HTMLElement, result, ui);
    renderEvaluation(root, result, ui);
  } catch {
    if (error) error.textContent = ui.invalidDate;
  }
}

export function initGestationController(root: HTMLElement): void {
  const ui = readUI(root);
  const stored = loadGestationState();
  const state: ControllerState = {
    species: stored.species || 'dog',
    matingDate: stored.matingDate || '',
  };
  const dateInput = root.querySelector<HTMLInputElement>('[data-mating-date]');
  setSpecies(root, state.species);
  if (dateInput) dateInput.value = state.matingDate || getDateOffset(-14);
  root.querySelectorAll<HTMLButtonElement>('[data-species]').forEach((button) => {
    button.addEventListener('click', () => {
      state.species = (button.dataset.species || 'dog') as GestationSpecies;
      setSpecies(root, state.species);
      saveGestationState(state);
      calculate(root, state, ui);
    });
  });
  root.querySelectorAll<HTMLButtonElement>('[data-offset]').forEach((button) => {
    button.addEventListener('click', () => {
      if (dateInput) dateInput.value = getDateOffset(Number(button.dataset.offset || 0));
      calculate(root, state, ui);
    });
  });
  dateInput?.addEventListener('input', () => calculate(root, state, ui));
  calculate(root, state, ui);
}
