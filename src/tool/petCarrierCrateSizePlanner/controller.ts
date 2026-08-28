import { calculateCarrier, convertLength, convertWeight, formatInputValue, type PetSpecies, type TravelMode, type UnitSystem } from './logic';
import { renderEvaluation, renderScene } from './dom-views';
import { loadCarrierState, saveCarrierState, type CarrierStorageState } from './storage';
import type { PetCarrierCrateSizePlannerUI } from './ui';

type LengthField = 'noseToTail' | 'elbowHeight' | 'shoulderWidth' | 'standingHeight' | 'bedding';
type ControllerState = CarrierStorageState;

const presets: Record<string, Omit<CarrierStorageState, 'unit' | 'mode' | 'snubNosed'>> = {
  cat: { species: 'cat', noseToTail: 45, elbowHeight: 15, shoulderWidth: 16, standingHeight: 35, bedding: 2, weight: 5 },
  smallDog: { species: 'dog', noseToTail: 45, elbowHeight: 16, shoulderWidth: 18, standingHeight: 38, bedding: 2, weight: 7 },
  mediumDog: { species: 'dog', noseToTail: 70, elbowHeight: 30, shoulderWidth: 22, standingHeight: 55, bedding: 3, weight: 18 },
  largeDog: { species: 'dog', noseToTail: 90, elbowHeight: 38, shoulderWidth: 28, standingHeight: 72, bedding: 4, weight: 32 },
};

function readUI(root: HTMLElement): PetCarrierCrateSizePlannerUI {
  const script = root.querySelector<HTMLScriptElement>('[data-carrier-ui]');
  return JSON.parse(script?.textContent || '{}') as PetCarrierCrateSizePlannerUI;
}

function defaultState(): ControllerState {
  return {
    species: 'cat',
    mode: 'car',
    unit: 'metric',
    noseToTail: 45,
    elbowHeight: 15,
    shoulderWidth: 16,
    standingHeight: 35,
    bedding: 2,
    weight: 5,
    snubNosed: false,
  };
}

function mergeState(stored: Partial<ControllerState>): ControllerState {
  const cleanStored = { ...stored } as Partial<ControllerState> & { theme?: unknown };
  delete cleanStored.theme;
  return { ...defaultState(), ...cleanStored };
}

function setPressed(root: HTMLElement, attribute: string, value: string): void {
  root.querySelectorAll<HTMLButtonElement>(`[data-${attribute}]`).forEach((button) => {
    const active = button.dataset[attribute] === value;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function setInput(root: HTMLElement, field: string, value: number): void {
  const input = root.querySelector<HTMLInputElement>(`[data-field="${field}"]`);
  if (input) input.value = formatInputValue(value);
}

function syncStateToForm(root: HTMLElement, state: ControllerState, ui: PetCarrierCrateSizePlannerUI): void {
  (Object.keys(state) as (keyof ControllerState)[]).forEach((field) => {
    if (typeof state[field] === 'number') setInput(root, field, state[field] as number);
  });
  setPressed(root, 'species', state.species);
  setPressed(root, 'mode', state.mode);
  setPressed(root, 'unit', state.unit);
  const snub = root.querySelector<HTMLInputElement>('[data-snub-nosed]');
  if (snub) snub.checked = state.snubNosed;
  root.querySelectorAll<HTMLElement>('[data-length-unit]').forEach((element) => { element.textContent = state.unit === 'metric' ? ui.cmUnit : ui.inchUnit; });
  const weightUnit = root.querySelector<HTMLElement>('[data-weight-unit]');
  if (weightUnit) weightUnit.textContent = state.unit === 'metric' ? ui.kgUnit : ui.lbUnit;
}

function readNumbers(root: HTMLElement, state: ControllerState): void {
  const fields: LengthField[] = ['noseToTail', 'elbowHeight', 'shoulderWidth', 'standingHeight', 'bedding'];
  fields.forEach((field) => { const input = root.querySelector<HTMLInputElement>(`[data-field="${field}"]`); if (input) state[field] = Number(input.value); });
  const weight = root.querySelector<HTMLInputElement>('[data-field="weight"]');
  if (weight) state.weight = Number(weight.value);
}

function render(root: HTMLElement, state: ControllerState, ui: PetCarrierCrateSizePlannerUI): void {
  try {
    readNumbers(root, state);
    const result = calculateCarrier(state);
    saveCarrierState(state);
    const scene = root.querySelector<HTMLElement>('[data-scene]');
    if (scene) renderScene(scene, result, ui);
    renderEvaluation(root, result, ui);
    const error = root.querySelector<HTMLElement>('[data-error]');
    if (error) error.textContent = '';
  } catch {
    const error = root.querySelector<HTMLElement>('[data-error]');
    if (error) error.textContent = ui.invalidInput;
  }
}

function changeUnit(root: HTMLElement, state: ControllerState, ui: PetCarrierCrateSizePlannerUI, unit: UnitSystem): void {
  if (state.unit === unit) return;
  const fields: LengthField[] = ['noseToTail', 'elbowHeight', 'shoulderWidth', 'standingHeight', 'bedding'];
  fields.forEach((field) => { state[field] = convertLength(state[field], state.unit, unit); });
  state.weight = convertWeight(state.weight, state.unit, unit);
  state.unit = unit;
  syncStateToForm(root, state, ui);
  render(root, state, ui);
}

function applyPreset(root: HTMLElement, state: ControllerState, ui: PetCarrierCrateSizePlannerUI, key: string): void {
  const preset = presets[key];
  if (!preset) return;
  const currentUnit = state.unit;
  const metric = { ...preset, unit: 'metric' as const, mode: state.mode, snubNosed: state.snubNosed };
  Object.assign(state, metric, { unit: currentUnit });
  if (currentUnit === 'imperial') {
    const fields: LengthField[] = ['noseToTail', 'elbowHeight', 'shoulderWidth', 'standingHeight', 'bedding'];
    fields.forEach((field) => { state[field] = convertLength(state[field], 'metric', 'imperial'); });
    state.weight = convertWeight(state.weight, 'metric', 'imperial');
  }
  syncStateToForm(root, state, ui);
  render(root, state, ui);
}

export function initCarrierController(root: HTMLElement): void {
  const ui = readUI(root);
  const state = mergeState(loadCarrierState());
  syncStateToForm(root, state, ui);
  root.querySelectorAll<HTMLButtonElement>('[data-species]').forEach((button) => button.addEventListener('click', () => { state.species = (button.dataset.species || 'cat') as PetSpecies; setPressed(root, 'species', state.species); render(root, state, ui); }));
  root.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((button) => button.addEventListener('click', () => { state.mode = (button.dataset.mode || 'car') as TravelMode; setPressed(root, 'mode', state.mode); render(root, state, ui); }));
  root.querySelectorAll<HTMLButtonElement>('[data-unit]').forEach((button) => button.addEventListener('click', () => changeUnit(root, state, ui, (button.dataset.unit || 'metric') as UnitSystem)));
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => button.addEventListener('click', () => applyPreset(root, state, ui, button.dataset.preset || 'cat')));
  root.querySelectorAll<HTMLInputElement>('[data-field]').forEach((input) => input.addEventListener('input', () => render(root, state, ui)));
  root.querySelector<HTMLInputElement>('[data-snub-nosed]')?.addEventListener('change', (event) => { state.snubNosed = (event.target as HTMLInputElement).checked; render(root, state, ui); });
  render(root, state, ui);
}
