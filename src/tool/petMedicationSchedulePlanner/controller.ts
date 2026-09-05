import { generateSchedule, type ScheduleMode } from './logic';
import { clearMedicationState, loadMedicationState, saveMedicationState, type MedicationStorageState } from './storage';
import { renderSchedule } from './dom-views';
import type { PetMedicationSchedulePlannerUI } from './ui';

function todayValue(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function defaultState(): MedicationStorageState {
  return { medicationName: 'Example medicine', startDate: todayValue(), startTime: '08:00', mode: 'interval', intervalHours: 8, dailyTimes: '08:00, 16:00, 00:00', durationDays: 5, instructions: 'Give exactly as prescribed by your veterinarian.', completedIds: [] };
}

function readUI(root: HTMLElement): PetMedicationSchedulePlannerUI {
  const script = root.querySelector<HTMLScriptElement>('[data-medication-ui]');
  return JSON.parse(script?.textContent || '{}') as PetMedicationSchedulePlannerUI;
}

function mergeState(stored: Partial<MedicationStorageState>): MedicationStorageState {
  const state = { ...defaultState(), ...stored, completedIds: Array.isArray(stored.completedIds) ? stored.completedIds : [] };
  if (!state.medicationName.trim()) state.medicationName = defaultState().medicationName;
  return state;
}

function readForm(root: HTMLElement, state: MedicationStorageState): void {
  const read = (selector: string): string => root.querySelector<HTMLInputElement | HTMLTextAreaElement>(selector)?.value ?? '';
  state.medicationName = read('[data-medication-name]');
  state.startDate = read('[data-start-date]');
  state.startTime = read('[data-start-time]');
  state.intervalHours = Number(read('[data-interval-hours]'));
  state.dailyTimes = read('[data-daily-times]');
  state.durationDays = Number(read('[data-duration-days]'));
  state.instructions = read('[data-instructions]');
}

function syncForm(root: HTMLElement, state: MedicationStorageState): void {
  const set = (selector: string, value: string | number): void => { const input = root.querySelector<HTMLInputElement | HTMLTextAreaElement>(selector); if (input) input.value = String(value); };
  set('[data-medication-name]', state.medicationName);
  set('[data-start-date]', state.startDate);
  set('[data-start-time]', state.startTime);
  set('[data-interval-hours]', state.intervalHours);
  set('[data-daily-times]', state.dailyTimes);
  set('[data-duration-days]', state.durationDays);
  set('[data-instructions]', state.instructions);
  root.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((button) => { const active = button.dataset.mode === state.mode; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
  const interval = root.querySelector<HTMLElement>('[data-interval-wrap]');
  const times = root.querySelector<HTMLElement>('[data-times-wrap]');
  if (interval) interval.hidden = state.mode !== 'interval';
  if (times) times.hidden = state.mode !== 'times';
}

function renderEmptyState(root: HTMLElement, error: HTMLElement | null): void {
  if (error) error.textContent = '';
  root.querySelector<HTMLElement>('[data-result]')?.classList.remove('is-ready');
  root.querySelector<HTMLElement>('[data-empty-schedule]')?.removeAttribute('hidden');
  root.querySelector<HTMLElement>('[data-schedule-list]')?.replaceChildren();
}

function renderValidState(root: HTMLElement, state: MedicationStorageState, ui: PetMedicationSchedulePlannerUI, error: HTMLElement | null): void {
  try {
    const doses = generateSchedule(state);
    saveMedicationState(state);
    renderSchedule(root, doses, { completedIds: state.completedIds, now: new Date() }, ui);
    if (error) error.textContent = '';
    root.querySelector<HTMLElement>('[data-result]')?.classList.add('is-ready');
  } catch {
    if (error) error.textContent = ui.invalidInput;
    root.querySelector<HTMLElement>('[data-result]')?.classList.remove('is-ready');
    const empty = root.querySelector<HTMLElement>('[data-empty-schedule]');
    if (empty) empty.hidden = false;
    root.querySelector<HTMLElement>('[data-schedule-list]')?.replaceChildren();
  }
}

function render(root: HTMLElement, state: MedicationStorageState, ui: PetMedicationSchedulePlannerUI): void {
  readForm(root, state);
  const error = root.querySelector<HTMLElement>('[data-error]');
  if (!state.medicationName.trim()) {
    renderEmptyState(root, error);
    return;
  }
  renderValidState(root, state, ui, error);
}

export function initMedicationSchedulePlanner(root: HTMLElement): void {
  const ui = readUI(root);
  const state = mergeState(loadMedicationState());
  syncForm(root, state);
  root.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((button) => button.addEventListener('click', () => { state.mode = (button.dataset.mode || 'interval') as ScheduleMode; syncForm(root, state); render(root, state, ui); }));
  root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-input]').forEach((input) => input.addEventListener('input', () => { state.completedIds = []; render(root, state, ui); }));
  root.querySelector<HTMLElement>('[data-schedule-list]')?.addEventListener('click', (event) => { const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-dose-id]'); if (!button) return; const id = button.dataset.doseId; if (!id) return; state.completedIds = state.completedIds.includes(id) ? state.completedIds.filter((item) => item !== id) : [...state.completedIds, id]; render(root, state, ui); });
  root.querySelector<HTMLButtonElement>('[data-reset]')?.addEventListener('click', () => { clearMedicationState(); Object.assign(state, defaultState()); syncForm(root, state); render(root, state, ui); });
  render(root, state, ui);
}
