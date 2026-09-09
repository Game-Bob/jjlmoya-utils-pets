import { calculatePetCollarSize, fromCentimetres, toCentimetres, type CollarType, type CollarUnit } from './logic';
import { renderResult, renderScene } from './dom-views';
import { loadCollarState, saveCollarState } from './storage';
import type { PetCollarSizeCalculatorUI } from './ui';

interface ControllerConfig {
  ui: PetCollarSizeCalculatorUI;
}

function toNumber(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function setUnitConstraints(root: HTMLElement, unit: CollarUnit): void {
  const neck = root.querySelector<HTMLInputElement>('[data-neck-input]');
  const allowanceRange = root.querySelector<HTMLInputElement>('[data-allowance-range]');
  if (!neck || !allowanceRange) return;

  const constraints = unit === 'in'
    ? { neckMin: '2', neckMax: '98.4', neckStep: '0.1', allowanceMin: '0.2', allowanceMax: '3.9', allowanceStep: '0.1' }
    : { neckMin: '5', neckMax: '250', neckStep: '0.5', allowanceMin: '0.5', allowanceMax: '10', allowanceStep: '0.5' };
  neck.min = constraints.neckMin;
  neck.max = constraints.neckMax;
  neck.step = constraints.neckStep;
  allowanceRange.min = constraints.allowanceMin;
  allowanceRange.max = constraints.allowanceMax;
  allowanceRange.step = constraints.allowanceStep;
}

function updateAllowanceOutput(root: HTMLElement, value: string, unit: CollarUnit): void {
  const output = root.querySelector<HTMLOutputElement>('[data-allowance-output]');
  if (!output) return;
  output.firstChild?.replaceWith(document.createTextNode(value));
  output.querySelector('[data-unit-suffix]')?.replaceChildren(document.createTextNode(unit === 'in' ? 'in' : 'cm'));
}

function selectUnit(root: HTMLElement, unit: CollarUnit): void {
  root.querySelectorAll<HTMLElement>('[data-unit-choice]').forEach((button) => {
    const active = button.dataset.unitChoice === unit;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  root.querySelectorAll<HTMLElement>('[data-unit-suffix]').forEach((suffix) => {
    suffix.textContent = unit === 'in' ? 'in' : 'cm';
  });
}

export function mountPetCollarSizeCalculator(root: HTMLElement, config: ControllerConfig): void {
  const elements = getMountElements(root);
  if (!elements) return;
  const state = prepareInitialState(root, elements);
  const update = createUpdater({ ...elements, config, state });
  bindTypeInputs(root, state, update);
  bindValueInputs({ root, neck: elements.neck, allowanceRange: elements.allowanceRange, unit: () => state.unit, update });
  bindUnitButtons({ root, ...elements, state, update });
  update();
}

interface MountElements {
  neck: HTMLInputElement;
  allowanceRange: HTMLInputElement;
  scene: HTMLElement;
  resultView: HTMLElement;
}

function getMountElements(root: HTMLElement): MountElements | null {
  const neck = root.querySelector<HTMLInputElement>('[data-neck-input]');
  const allowanceRange = root.querySelector<HTMLInputElement>('[data-allowance-range]');
  const scene = root.querySelector<HTMLElement>('[data-collar-scene]');
  const resultView = root.querySelector<HTMLElement>('[data-collar-result]');
  if (!neck || !allowanceRange || !scene || !resultView) return null;
  return { neck, allowanceRange, scene, resultView };
}

function prepareInitialState(root: HTMLElement, elements: MountElements): { unit: CollarUnit; collarType: CollarType } {
  const stored = loadCollarState();
  const state = { unit: stored.unit ?? 'cm', collarType: stored.collarType ?? 'flat' };
  setUnitConstraints(root, state.unit);
  elements.neck.value = String(stored.neckCircumference ?? 32);
  elements.allowanceRange.value = String(stored.allowance ?? 2);
  root.querySelector<HTMLInputElement>(`[data-collar-type="${state.collarType}"]`)?.setAttribute('checked', '');
  selectUnit(root, state.unit);
  updateAllowanceOutput(root, elements.allowanceRange.value, state.unit);
  return state;
}

interface UpdaterArgs {
  neck: HTMLInputElement;
  allowanceRange: HTMLInputElement;
  scene: HTMLElement;
  resultView: HTMLElement;
  config: ControllerConfig;
  state: { unit: CollarUnit; collarType: CollarType };
}

function createUpdater(args: UpdaterArgs): () => void {
  return () => {
    const result = calculatePetCollarSize({
      neckCircumference: toNumber(args.neck.value, 0),
      allowance: toNumber(args.allowanceRange.value, 0),
      unit: args.state.unit,
      collarType: args.state.collarType,
    });
    args.scene.innerHTML = renderScene(result, args.config.ui);
    args.resultView.innerHTML = renderResult(result, args.config.ui);
    saveCollarState({
      neckCircumference: toNumber(args.neck.value, 0),
      allowance: toNumber(args.allowanceRange.value, 0),
      unit: args.state.unit,
      collarType: args.state.collarType,
    });
  };
}

function bindTypeInputs(root: HTMLElement, state: { collarType: CollarType }, update: () => void): void {
  root.querySelectorAll<HTMLInputElement>('[data-collar-type]').forEach((input) => input.addEventListener('change', () => {
    if (input.checked) state.collarType = input.value as CollarType;
    update();
  }));
}

interface ValueBindingArgs {
  root: HTMLElement;
  neck: HTMLInputElement;
  allowanceRange: HTMLInputElement;
  unit: () => CollarUnit;
  update: () => void;
}

function bindValueInputs(args: ValueBindingArgs): void {
  args.neck.addEventListener('input', args.update);
  args.allowanceRange.addEventListener('input', () => {
    updateAllowanceOutput(args.root, args.allowanceRange.value, args.unit());
    args.update();
  });
}

interface UnitBindingArgs {
  root: HTMLElement;
  neck: HTMLInputElement;
  allowanceRange: HTMLInputElement;
  state: { unit: CollarUnit };
  update: () => void;
}

function bindUnitButtons(args: UnitBindingArgs): void {
  args.root.querySelectorAll<HTMLElement>('[data-unit-choice]').forEach((button) => button.addEventListener('click', () => {
    const nextUnit = button.dataset.unitChoice as CollarUnit;
    const neckCm = toCentimetres(toNumber(args.neck.value, 0), args.state.unit);
    const allowanceCm = toCentimetres(toNumber(args.allowanceRange.value, 0), args.state.unit);
    args.state.unit = nextUnit;
    setUnitConstraints(args.root, nextUnit);
    args.neck.value = String(Number(fromCentimetres(neckCm, nextUnit).toFixed(1)));
    args.allowanceRange.value = String(Number(fromCentimetres(allowanceCm, nextUnit).toFixed(1)));
    selectUnit(args.root, nextUnit);
    updateAllowanceOutput(args.root, args.allowanceRange.value, nextUnit);
    args.update();
  }));
}
