import type { CarrierResult, PetSpecies, UnitSystem } from './logic';
import { convertLength, convertWeight, formatInputValue } from './logic';
import { evaluateCarrier } from './evaluator';
import type { PetCarrierCrateSizePlannerUI } from './ui';

function escapeText(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character] || character));
}

function formatMeasure(valueCm: number, unit: UnitSystem): string {
  const value = convertLength(valueCm, 'metric', unit);
  return `${formatInputValue(Number(value.toFixed(1)))} ${unit === 'metric' ? 'cm' : 'in'}`;
}

function formatWeight(valueKg: number, unit: UnitSystem): string {
  const value = convertWeight(valueKg, 'metric', unit);
  return `${formatInputValue(Number(value.toFixed(1)))} ${unit === 'metric' ? 'kg' : 'lb'}`;
}

interface DimensionArrow {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  className: string;
}

interface PetPlacement {
  species: PetSpecies;
  boxX: number;
  boxY: number;
  boxWidth: number;
  boxHeight: number;
}

function dimensionArrow({ x1, y1, x2, y2, label, className }: DimensionArrow): string {
  return `<line class="measure-line ${className}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" /><text class="measure-label ${className}" x="${(x1 + x2) / 2}" y="${(y1 + y2) / 2 - 5}">${escapeText(label)}</text>`;
}

function petMarkup({ species, boxX, boxY, boxWidth, boxHeight }: PetPlacement): string {
  const size = Math.min(72, boxWidth - 32, boxHeight - 18);
  const offsetX = boxX + (boxWidth - size) / 2;
  const offsetY = boxY + (boxHeight - size) / 2;
  const figure = species === 'dog'
    ? 'm19 3l-4 4l3 3l1-1l1 1l2-2l-3-3zM3 7L2 8l3 3v3l-1 1v6h2v-3l2-3h7v6h2V11l-3-3l-1 1H5z'
    : 'm12 8l-1.33.09C9.81 7.07 7.4 4.5 5 4.5c0 0-1.97 2.96-.04 6.91c-.55.83-.89 1.26-.96 2.25l-1.93.29l.21.98l1.76-.26l.14.71l-1.57.94l.47.89l1.45-.89C5.68 18.76 8.59 20 12 20s6.32-1.24 7.47-3.68l1.45.89l.47-.89l-1.57-.94l.14-.71l1.76.26l.21-.98l-1.93-.29c-.07-.99-.41-1.42-.96-2.25C20.97 7.46 19 4.5 19 4.5c-2.4 0-4.81 2.57-5.67 3.59zm-3 3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 3h2l-.7 1.39c.2.64.76 1.11 1.45 1.11a1.5 1.5 0 0 0 1.5-1.5h.5a2 2 0 0 1-2 2c-.75 0-1.4-.41-1.75-1c-.35.59-1 1-1.75 1a2 2 0 0 1-2-2h.5a1.5 1.5 0 0 0 1.5 1.5c.69 0 1.25-.47 1.45-1.11z';
  return `<svg class="pet-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" x="${offsetX}" y="${offsetY}" width="${size}" height="${size}"><path d="${figure}" /></svg>`;
}

function sceneMarkup(result: CarrierResult, ui: PetCarrierCrateSizePlannerUI): string {
  const { dimensions } = result;
  const width = Math.min(300, Math.max(220, dimensions.lengthCm * 2.3));
  const height = Math.min(150, Math.max(90, dimensions.heightCm * 1.5));
  const boxX = 54;
  const boxY = 50;
  const boxRight = boxX + width;
  const boxBottom = boxY + height;
  const unit = result.input.unit;
  return `<svg viewBox="0 0 430 230" role="img" aria-label="${escapeText(ui.blueprintLabel)}" class="carrier-blueprint">
    <defs><marker id="measure-start" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M6 0L0 3L6 6Z" fill="currentColor" /></marker><marker id="measure-end" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="currentColor" /></marker></defs>
    <rect class="blueprint-paper" x="12" y="12" width="406" height="206" rx="18" />
    <path class="blueprint-grid" d="M30 42H400M30 76H400M30 110H400M30 144H400M30 178H400M80 28V202M130 28V202M180 28V202M230 28V202M280 28V202M330 28V202M380 28V202" />
    <rect class="carrier-outline" x="${boxX}" y="${boxY}" width="${width}" height="${height}" rx="16" />
    <path class="carrier-door" d="M${boxRight - 4} ${boxY + 12}V${boxBottom - 12} M${boxRight - 18} ${boxY + 26}H${boxRight - 7} M${boxRight - 18} ${boxBottom - 26}H${boxRight - 7}" />
    ${petMarkup({ species: result.input.species, boxX, boxY, boxWidth: width, boxHeight: height })}
    ${dimensionArrow({ x1: boxX, y1: boxBottom + 22, x2: boxRight, y2: boxBottom + 22, label: formatMeasure(dimensions.lengthCm, unit), className: 'length' })}
    ${dimensionArrow({ x1: boxRight + 24, y1: boxY, x2: boxRight + 24, y2: boxBottom, label: formatMeasure(dimensions.heightCm, unit), className: 'height' })}
    <text class="blueprint-caption" x="30" y="34">${escapeText(ui.dimensionInside)}</text>
    <text class="blueprint-badge" x="${boxX + 14}" y="${boxY + 20}">${escapeText(ui.checkMark)}</text>
  </svg>`;
}

export function renderScene(element: HTMLElement, result: CarrierResult, ui: PetCarrierCrateSizePlannerUI): void {
  element.innerHTML = sceneMarkup(result, ui);
}

function setText(root: HTMLElement, selector: string, value: string): void {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = value;
}

export function renderEvaluation(root: HTMLElement, result: CarrierResult, ui: PetCarrierCrateSizePlannerUI): void {
  const evaluation = evaluateCarrier(result, ui);
  setText(root, '[data-status]', evaluation.label);
  setText(root, '[data-status-detail]', evaluation.detail);
  setText(root, '[data-length-result]', formatMeasure(result.dimensions.lengthCm, result.input.unit));
  setText(root, '[data-width-result]', formatMeasure(result.dimensions.widthCm, result.input.unit));
  setText(root, '[data-height-result]', formatMeasure(result.dimensions.heightCm, result.input.unit));
  setText(root, '[data-weight-result]', formatWeight(result.input.weight, result.input.unit));
  setText(root, '[data-mode-result]', result.input.mode === 'air' ? ui.modeAir : ui.modeCar);
  const panel = root.querySelector<HTMLElement>('[data-result]');
  if (panel) panel.hidden = false;
  const status = root.querySelector<HTMLElement>('[data-status]');
  if (status) status.dataset.tone = evaluation.tone;
}
