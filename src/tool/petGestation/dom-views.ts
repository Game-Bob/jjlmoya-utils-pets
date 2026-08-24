import type { GestationResult } from './logic';
import type { PetGestationUI } from './ui';
import { evaluateGestation } from './evaluator';

function escapeText(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character] || character));
}

function formatDate(value: string): string {
  return new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
}

function sceneMarkup(result: GestationResult, ui: PetGestationUI): string {
  const markerY = 142 - Math.round(result.progress * 94);
  const windowTop = 142 - Math.min(94, Math.round(result.progress * 94) + 14);
  return `<svg viewBox="0 0 280 190" role="img" aria-label="${escapeText(ui.sceneToday)}" class="gestation-nest-scene">
    <path class="scene-reed" d="M140 151 C136 126 144 101 137 77 C132 58 142 38 140 27" />
    <path class="scene-window" d="M125 ${windowTop} Q140 ${windowTop - 5} 155 ${windowTop} L155 ${Math.min(143, windowTop + 22)} Q140 ${Math.min(148, windowTop + 27)} 125 ${Math.min(143, windowTop + 22)} Z" />
    <circle class="scene-marker" cx="140" cy="${markerY}" r="7" />
    <circle class="scene-marker-ring" cx="140" cy="${markerY}" r="12" />
    <path class="scene-nest" d="M66 145 Q140 177 214 145 Q207 174 140 181 Q73 174 66 145 Z" />
    <path class="scene-nest-line" d="M83 153 Q140 169 197 153 M94 162 Q140 175 186 162" />
    <ellipse class="scene-egg scene-egg-left" cx="123" cy="151" rx="13" ry="18" />
    <ellipse class="scene-egg scene-egg-right" cx="157" cy="151" rx="13" ry="18" />
    <text x="140" y="18" class="scene-label">${escapeText(ui.sceneMating)}</text>
    <text x="179" y="58" class="scene-label scene-label-accent scene-label-right">${escapeText(ui.sceneDue)}</text>
    <text x="140" y="104" class="scene-day">${result.elapsedDays < 0 ? '0' : result.elapsedDays}</text>
    <text x="140" y="117" class="scene-caption">${escapeText(ui.elapsedLabel)}</text>
  </svg>`;
}

export function renderScene(element: HTMLElement, result: GestationResult, ui: PetGestationUI): void {
  element.innerHTML = sceneMarkup(result, ui);
}

function setText(root: HTMLElement, selector: string, value: string): void {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = value;
}

function setStatus(root: HTMLElement, result: GestationResult, ui: PetGestationUI): void {
  const evaluation = evaluateGestation(result, ui);
  const status = root.querySelector<HTMLElement>('[data-status]');
  if (!status) return;
  status.textContent = evaluation.label;
  status.dataset.tone = evaluation.tone;
  setText(root, '[data-status-detail]', evaluation.detail);
}

export function renderEvaluation(root: HTMLElement, result: GestationResult, ui: PetGestationUI): void {
  const remainingUnit = result.remainingDays === 1 ? ui.dayLabel : ui.daysLabel;
  const elapsedUnit = result.elapsedDays === 1 ? ui.dayLabel : ui.daysLabel;
  setText(root, '[data-due-date]', formatDate(result.dueDate));
  setText(root, '[data-window-date]', `${formatDate(result.windowStart)} to ${formatDate(result.windowEnd)}`);
  setText(root, '[data-remaining]', `${Math.max(0, result.remainingDays)} ${remainingUnit}`);
  setText(root, '[data-elapsed]', `${Math.max(0, result.elapsedDays)} ${elapsedUnit}`);
  setStatus(root, result, ui);
  const resultPanel = root.querySelector<HTMLElement>('[data-result]');
  if (resultPanel) resultPanel.hidden = false;
}
