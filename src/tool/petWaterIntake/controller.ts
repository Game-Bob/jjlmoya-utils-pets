import type { WaterCalculationInput } from './logic';
import { calculatePetWaterIntake } from './logic';
import { renderResult, renderScene } from './dom-views';
import type { PetWaterIntakeUI } from './ui';

export interface PetWaterIntakeConfig {
  ui: PetWaterIntakeUI;
}

function parseFormString(data: FormData, key: string, fallback: string): string {
  const val = data.get(key);
  return typeof val === 'string' && val.length > 0 ? val : fallback;
}

function getWaterInput(form: HTMLFormElement): WaterCalculationInput | null {
  const data = new FormData(form);
  const weightVal = parseFloat(parseFormString(data, 'weight', '0'));
  if (isNaN(weightVal) || weightVal <= 0 || weightVal > 100) return null;

  return {
    species: parseFormString(data, 'species', 'dog') as WaterCalculationInput['species'],
    weightKg: weightVal,
    diet: parseFormString(data, 'diet', 'dry') as WaterCalculationInput['diet'],
    activity: parseFormString(data, 'activity', 'typical') as WaterCalculationInput['activity'],
    heat: parseFormString(data, 'heat', 'normal') as WaterCalculationInput['heat'],
  };
}

export function mountPetWaterIntake(root: HTMLElement, config: PetWaterIntakeConfig): void {
  const { ui } = config;
  const form = root.querySelector<HTMLFormElement>('[data-water-form]');
  const sceneEl = root.querySelector<HTMLElement>('[data-scene]');
  const resultEl = root.querySelector<HTMLElement>('[data-result]');

  if (!form || !sceneEl || !resultEl) return;

  function update(): void {
    const input = getWaterInput(form!);
    const res = input ? calculatePetWaterIntake(input) : null;
    sceneEl!.innerHTML = renderScene(res, ui);
    resultEl!.innerHTML = renderResult(res, ui);
  }

  form.addEventListener('input', update);
  form.addEventListener('change', update);
  update();
}
