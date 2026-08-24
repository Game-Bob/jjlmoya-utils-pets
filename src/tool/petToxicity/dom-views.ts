import { getRiskPresentation } from './evaluator';
import type { RiskTone } from './evaluator';
import type { FoodEvaluation, FoodOption, PetSpecies } from './logic';
import type { PetToxicityUI } from './ui';

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}

function selectedAttribute(selected: boolean): string {
  return selected ? ' aria-selected="true" data-selected="true"' : ' aria-selected="false"';
}

export function renderSpeciesMenu(species: PetSpecies, ui: PetToxicityUI): string {
  const options = [
    { id: 'dog', name: ui.speciesDog, detail: ui.speciesDogMeta },
    { id: 'cat', name: ui.speciesCat, detail: ui.speciesCatMeta },
  ];
  return options.map((option) => `<button class="pet-toxicity-menu-option" type="button" role="option" data-species-id="${option.id}"${selectedAttribute(option.id === species)}><span>${escapeHtml(option.name)}</span><small>${escapeHtml(option.detail)}</small></button>`).join('');
}

export function renderFoodMenu(options: FoodOption[], selectedId: string): string {
  return options.map((option) => `<button class="pet-toxicity-menu-option" type="button" role="option" data-food-id="${option.id}"${selectedAttribute(option.id === selectedId)}><span>${escapeHtml(option.name)}</span><small>${escapeHtml(option.detail)}</small></button>`).join('');
}

function renderMarkers(evaluation: FoodEvaluation | null): string {
  const tone = evaluation?.level ?? 'empty';
  const markerClass = evaluation ? `pet-toxicity-marker pet-toxicity-marker-${tone}` : 'pet-toxicity-marker pet-toxicity-marker-empty';
  return [0, 1, 2, 3, 4].map((index) => `<circle class="${markerClass}" cx="${74 + index * 47}" cy="${82 + (index % 2) * 34}" r="${evaluation ? 7 + index : 5}" />`).join('');
}

export function renderScene(species: PetSpecies, evaluation: FoodEvaluation | null, ui: PetToxicityUI): string {
  const speciesName = species === 'dog' ? ui.speciesDog : ui.speciesCat;
  const selectedName = evaluation?.food.name ?? ui.sceneReady;
  const stateText = evaluation ? ui.sceneSelected : ui.resultEmpty;
  return `<div class="pet-toxicity-scene-card"><div class="pet-toxicity-scene-copy"><span class="pet-toxicity-eyebrow">${escapeHtml(ui.sceneLabel)}</span><strong>${escapeHtml(selectedName)}</strong><span>${escapeHtml(speciesName)} · ${escapeHtml(stateText)}</span></div><svg class="pet-toxicity-scene" viewBox="0 0 320 180" role="img" aria-label="${escapeHtml(selectedName)} risk scene"><rect class="pet-toxicity-scene-paper" x="14" y="14" width="292" height="152" rx="18" /><path class="pet-toxicity-scene-line" d="M38 122 C80 46 124 146 166 66 S246 50 282 118" /><path class="pet-toxicity-scene-line-thin" d="M42 138 C92 84 132 138 174 98 S240 82 280 136" />${renderMarkers(evaluation)}<circle class="pet-toxicity-scene-seal" cx="258" cy="52" r="20" /><path class="pet-toxicity-scene-seal-mark" d="M258 43v12" /><circle class="pet-toxicity-scene-seal-dot" cx="258" cy="62" r="1.7" /></svg></div>`;
}

function renderSignIcon(index: number): string {
  const paths = [
    '<circle cx="8" cy="8" r="6" /><path d="M8 4.5v4" /><circle cx="8" cy="11.5" r=".7" />',
    '<path d="M1.5 9h2.5l1.5-4 2.5 6 1.6-3h2.3" />',
    '<path d="m8 1.5 6 11H2l6-11Z" /><path d="M8 5v3" /><circle cx="8" cy="10.5" r=".7" />',
  ];
  return `<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">${paths[index % paths.length]}</svg>`;
}

function renderList(items: string[]): string {
  return `<ul class="pet-toxicity-sign-list">${items.map((item, index) => `<li><span class="pet-toxicity-sign-icon">${renderSignIcon(index)}</span><span>${escapeHtml(item)}</span></li>`).join('')}</ul>`;
}

function renderRiskMeter(tone: RiskTone, label: string): string {
  const activeCount = { critical: 3, high: 2, caution: 1, unknown: 0 }[tone];
  return `<span class="pet-toxicity-risk-meter" role="img" aria-label="${escapeHtml(label)}"><span class="${activeCount >= 1 ? 'is-active' : ''}"></span><span class="${activeCount >= 2 ? 'is-active' : ''}"></span><span class="${activeCount >= 3 ? 'is-active' : ''}"></span></span>`;
}

export function renderResult(evaluation: FoodEvaluation | null, ui: PetToxicityUI): string {
  if (!evaluation) return `<div class="pet-toxicity-result-empty">${escapeHtml(ui.resultEmpty)}</div>`;
  const risk = getRiskPresentation(evaluation.level, ui);
  return `<article class="pet-toxicity-result-card pet-toxicity-result-card-${risk.tone}"><div class="pet-toxicity-result-head"><span class="pet-toxicity-eyebrow">${escapeHtml(ui.resultEyebrow)}</span><span class="pet-toxicity-risk-status"><span class="pet-toxicity-risk pet-toxicity-risk-${risk.tone}">${escapeHtml(risk.label)}</span>${renderRiskMeter(risk.tone, `${ui.riskLabel}: ${risk.label}`)}</span></div><h3>${escapeHtml(evaluation.food.name)}</h3><p class="pet-toxicity-summary">${escapeHtml(evaluation.summary)}</p><div class="pet-toxicity-result-grid"><div><span class="pet-toxicity-label">${escapeHtml(ui.whyLabel)}</span><p>${escapeHtml(evaluation.why)}</p></div><div><span class="pet-toxicity-label">${escapeHtml(ui.signsLabel)}</span>${renderList(evaluation.signs)}</div><div class="pet-toxicity-action"><span class="pet-toxicity-label">${escapeHtml(ui.actionLabel)}</span><p>${escapeHtml(evaluation.action)}</p></div></div><div class="pet-toxicity-callout"><strong>${escapeHtml(ui.callVetLabel)}</strong><span>${escapeHtml(ui.callVetText)}</span></div></article>`;
}
