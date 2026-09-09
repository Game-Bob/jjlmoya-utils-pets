import type { PetCollarSizeCalculatorUI } from './ui';
import type { CollarType, CollarUnit, PetCollarSizeResult } from './logic';
import { getFitReview } from './evaluator';

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character] ?? character);
}

export function formatMeasurement(valueCm: number, unit: CollarUnit): string {
  const value = unit === 'in' ? valueCm / 2.54 : valueCm;
  return value.toFixed(1).replace(/\.0$/, '');
}

function unitLabel(unit: CollarUnit, ui: PetCollarSizeCalculatorUI): string {
  return unit === 'in' ? ui.inches : ui.centimetres;
}

function collarTypeLabel(type: CollarType, ui: PetCollarSizeCalculatorUI): string {
  return { flat: ui.flatCollar, breakaway: ui.breakawayCollar, martingale: ui.martingaleCollar }[type];
}

function collarCheckText(type: CollarType, ui: PetCollarSizeCalculatorUI): string {
  return { flat: ui.checkFlat, breakaway: ui.checkBreakaway, martingale: ui.checkMartingale }[type];
}

function point(cx: number, cy: number, radius: number, degrees: number): { x: number; y: number } {
  const radians = (degrees * Math.PI) / 180;
  return { x: cx + Math.cos(radians) * radius, y: cy + Math.sin(radians) * radius };
}

interface ArcPathArgs {
  cx: number;
  cy: number;
  radius: number;
  start: number;
  end: number;
}

function arcPath(args: ArcPathArgs): string {
  const first = point(args.cx, args.cy, args.radius, args.start);
  const last = point(args.cx, args.cy, args.radius, args.end);
  const largeArc = Math.abs(args.end - args.start) > 180 ? 1 : 0;
  return `M${first.x.toFixed(1)} ${first.y.toFixed(1)}A${args.radius} ${args.radius} 0 ${largeArc} 1 ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;
}

function renderWheelTicks(): string {
  const ticks = Array.from({ length: 12 }, (_, index) => {
    const angle = index * 30;
    const inner = point(196, 204, 153, angle);
    const outer = point(196, 204, index % 3 === 0 ? 166 : 160, angle);
    return `<line class="pet-collar-wheel-tick" x1="${inner.x.toFixed(1)}" y1="${inner.y.toFixed(1)}" x2="${outer.x.toFixed(1)}" y2="${outer.y.toFixed(1)}" />`;
  });
  return ticks.join('');
}

function renderBuckle(): string {
  return '<path class="pet-collar-wheel-buckle" d="M325 82h27v45h-27m0-35h19m-19 25h19" />';
}

function renderWheel(result: PetCollarSizeResult, ui: PetCollarSizeCalculatorUI): string {
  const roomOffset = Math.min(30, Math.max(2, result.allowanceCm * 3));
  const collarStart = 104 + roomOffset;
  const collarEnd = collarStart + 24;
  const neckPath = arcPath({ cx: 196, cy: 204, radius: 80, start: 205, end: 505 });
  const spanPath = arcPath({ cx: 196, cy: 204, radius: collarStart, start: 205, end: 505 });
  const endPath = arcPath({ cx: 196, cy: 204, radius: collarEnd, start: 205, end: 505 });
  const roomPoint = point(196, 204, 92, 252);
  const spanPoint = point(196, 204, collarEnd + 10, 318);
  return `<svg class="pet-collar-fit-wheel" viewBox="0 0 720 420" role="img" aria-label="${escapeHtml(ui.sceneAria)}">
    <circle class="pet-collar-wheel-paper" cx="196" cy="204" r="173" />
    ${renderWheelTicks()}
    <path class="pet-collar-wheel-neck" d="${neckPath}" />
    <path class="pet-collar-wheel-band" d="${spanPath}" />
    <path class="pet-collar-wheel-edge" d="${endPath}" />
    ${renderBuckle()}
    <circle class="pet-collar-wheel-center" cx="196" cy="204" r="5" />
    <path class="pet-collar-wheel-leader pet-collar-wheel-leader-room" d="M${roomPoint.x.toFixed(1)} ${roomPoint.y.toFixed(1)}L92 342H36" />
    <path class="pet-collar-wheel-leader pet-collar-wheel-leader-span" d="M${spanPoint.x.toFixed(1)} ${spanPoint.y.toFixed(1)}L446 286H516" />
    <text class="pet-collar-wheel-label pet-collar-wheel-label-neck" x="196" y="198" text-anchor="middle">${escapeHtml(ui.neckMarker)}</text>
    <text class="pet-collar-wheel-sublabel" x="196" y="220" text-anchor="middle">fit circle</text>
    <text class="pet-collar-wheel-label" x="36" y="362">${escapeHtml(ui.easeMarker)}</text>
    <text class="pet-collar-wheel-sublabel" x="36" y="381">+${escapeHtml(formatMeasurement(result.allowanceCm, result.unit))} ${escapeHtml(unitLabel(result.unit, ui))}</text>
    <text class="pet-collar-wheel-label pet-collar-wheel-label-span" x="516" y="306">${escapeHtml(ui.rangeMarker)}</text>
    <text class="pet-collar-wheel-sublabel" x="516" y="325">${escapeHtml(ui.minimumMarker)} to ${escapeHtml(ui.maximumMarker)}</text>
  </svg>`;
}

function renderReading(result: PetCollarSizeResult, ui: PetCollarSizeCalculatorUI): string {
  const unit = unitLabel(result.unit, ui);
  return `<div class="pet-collar-reading"><span class="pet-collar-reading-label">${escapeHtml(ui.fitWindowLabel)}</span><strong>${escapeHtml(formatMeasurement(result.minimumCm, result.unit))} <small>to</small> ${escapeHtml(formatMeasurement(result.maximumCm, result.unit))}<em>${escapeHtml(unit)}</em></strong><div class="pet-collar-reading-metrics"><div><span>${escapeHtml(ui.measuredLabel)}</span><b>${escapeHtml(formatMeasurement(result.neckCm, result.unit))} ${escapeHtml(unit)}</b></div><div><span>${escapeHtml(ui.roomLabel)}</span><b>+${escapeHtml(formatMeasurement(result.allowanceCm, result.unit))} ${escapeHtml(unit)}</b></div></div></div>`;
}

export function renderScene(result: PetCollarSizeResult, ui: PetCollarSizeCalculatorUI): string {
  if (!result.valid) return `<div class="pet-collar-invalid" role="status">${escapeHtml(ui.invalidInput)}</div>`;
  return `<div class="pet-collar-stage"><div class="pet-collar-wheel-wrap">${renderWheel(result, ui)}<span class="pet-collar-stage-index">fit / 01</span></div>${renderReading(result, ui)}</div>`;
}

export function renderResult(result: PetCollarSizeResult, ui: PetCollarSizeCalculatorUI): string {
  if (!result.valid) return `<div class="pet-collar-result-invalid" role="status">${escapeHtml(ui.invalidInput)}</div>`;
  const review = getFitReview(result);
  const statusLabel = ui[review.labelKey];
  const statusDetail = ui[review.detailKey];
  const collarType = collarTypeLabel(result.collarType, ui);
  return `<div class="pet-collar-guidance"><div class="pet-collar-guidance-main"><span class="pet-collar-status pet-collar-status-${review.status}">${escapeHtml(statusLabel)}</span><span>${escapeHtml(statusDetail)}</span></div><p><span>${escapeHtml(ui.checkLabel)}</span><strong>${escapeHtml(collarType)}</strong>${escapeHtml(collarCheckText(result.collarType, ui))}</p></div>`;
}
