import type { WaterCalculationInput } from './logic';
import { calculatePetWaterIntake } from './logic';
import { renderResult, renderScene } from './dom-views';
import type { PetWaterIntakeUI } from './ui';

export interface PetWaterIntakeConfig {
  ui: PetWaterIntakeUI;
}

function getWaterInput(form: HTMLFormElement): WaterCalculationInput | null {
  const data = new FormData(form);
  const weightKg = parseFloat(String(data.get('weight') || '0'));
  if (isNaN(weightKg) || weightKg <= 0 || weightKg > 100) return null;

  return {
    species: (data.get('species') || 'dog') as any,
    weightKg,
    diet: (data.get('diet') || 'dry') as any,
    activity: (data.get('activity') || 'typical') as any,
    heat: (data.get('heat') || 'normal') as any,
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
