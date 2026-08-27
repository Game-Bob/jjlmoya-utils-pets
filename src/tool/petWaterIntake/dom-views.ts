import type { WaterCalculationResult } from './logic';
import type { PetWaterIntakeUI } from './ui';

export function renderScene(res: WaterCalculationResult | null, ui: PetWaterIntakeUI): string {
  if (!res) {
    return `<div class="pet-water-scene-empty">${ui.resultEmpty}</div>`;
  }
  const pct = Math.min(100, Math.max(15, Math.round((res.totalMlMax / 1500) * 100)));
  return `
    <div class="pet-water-scene" aria-label="${ui.sceneAria}">
      <div class="pet-water-reservoir">
        <div class="pet-water-fill" style="height: ${pct}%">
          <div class="pet-water-wave"></div>
        </div>
      </div>
      <div class="pet-water-badge">
        <span class="pet-water-badge-label">${ui.sceneTotal}</span>
        <span class="pet-water-badge-value">${res.totalMlMin} - ${res.totalMlMax} mL</span>
      </div>
    </div>
  `;
}

export function renderResult(res: WaterCalculationResult | null, ui: PetWaterIntakeUI): string {
  if (!res) return `<div class="pet-water-result-placeholder">${ui.resultEmpty}</div>`;

  const metrics = `
    <div class="pet-water-metrics">
      <div class="pet-water-metric">
        <span class="pet-water-metric-label">${ui.totalRangeLabel}</span>
        <span class="pet-water-metric-value">${res.totalMlMin} - ${res.totalMlMax} mL/día</span>
        <small>${ui.totalRangeHint}</small>
      </div>
      <div class="pet-water-metric">
        <span class="pet-water-metric-label">${ui.drinkingRangeLabel}</span>
        <span class="pet-water-metric-value">${res.bowlMlMin} - ${res.bowlMlMax} mL/día</span>
        <small>${ui.drinkingRangeHint}</small>
      </div>
    </div>`;

  return `
    <div class="pet-water-result-card">
      <span class="pet-water-eyebrow">${ui.resultEyebrow}</span>
      ${metrics}
      <div class="pet-water-status">
        <strong>${ui[res.statusKey] || ''}</strong>
        <p>${ui[res.statusDetailKey] || ''}</p>
      </div>
      <div class="pet-water-notes">
        <h4>${ui.noteTitle}</h4>
        <p>${ui.noteText}</p>
      </div>
    </div>`;
}
