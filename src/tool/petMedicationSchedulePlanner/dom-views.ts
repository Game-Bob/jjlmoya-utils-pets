import { formatDay, formatTime, type ScheduledDose } from './logic';
import type { PetMedicationSchedulePlannerUI } from './ui';

export interface RenderState {
  completedIds: string[];
  now: Date;
}

function setText(root: HTMLElement, selector: string, value: string): void {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = value;
}

function createDoseButton(dose: ScheduledDose, state: RenderState, ui: PetMedicationSchedulePlannerUI): HTMLButtonElement {
  const completed = state.completedIds.includes(dose.id);
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `dose-row${completed ? ' is-complete' : ''}`;
  button.dataset.doseId = dose.id;
  button.setAttribute('aria-pressed', String(completed));
  button.innerHTML = '<span class="dose-check" aria-hidden="true"></span><span class="dose-time"></span><span class="dose-state"></span>';
  const time = button.querySelector<HTMLElement>('.dose-time');
  if (time) time.textContent = formatTime(dose.date, ui.dateLocale);
  const status = button.querySelector<HTMLElement>('.dose-state');
  if (status) {
    if (completed) status.textContent = ui.completed;
    else if (dose.date <= state.now) status.textContent = ui.due;
    else status.textContent = ui.upcoming;
  }
  button.title = completed ? ui.markUndone : ui.markDone;
  return button;
}

export function renderSchedule(root: HTMLElement, doses: ScheduledDose[], state: RenderState, ui: PetMedicationSchedulePlannerUI): void {
  const list = root.querySelector<HTMLElement>('[data-schedule-list]');
  if (!list) return;
  list.replaceChildren();
  const groups = new Map<string, ScheduledDose[]>();
  doses.forEach((dose) => groups.set(dose.dateKey, [...(groups.get(dose.dateKey) ?? []), dose]));
  groups.forEach((group) => {
    const first = group[0];
    if (!first) return;
    const section = document.createElement('section');
    section.className = 'dose-day';
    const heading = document.createElement('h3');
    heading.textContent = formatDay(first.date, ui.dateLocale);
    section.append(heading);
    group.forEach((dose) => section.append(createDoseButton(dose, state, ui)));
    list.append(section);
  });
  const completed = doses.filter((dose) => state.completedIds.includes(dose.id)).length;
  setText(root, '[data-completed-count]', ui.completedCount.replace('{done}', String(completed)).replace('{total}', String(doses.length)));
  const next = doses.find((dose) => !state.completedIds.includes(dose.id) && dose.date >= state.now) ?? doses.find((dose) => !state.completedIds.includes(dose.id));
  setText(root, '[data-next-dose]', next ? `${formatDay(next.date, ui.dateLocale)} · ${formatTime(next.date, ui.dateLocale)}` : ui.noNextDose);
  const empty = root.querySelector<HTMLElement>('[data-empty-schedule]');
  if (empty) empty.hidden = doses.length > 0;
}
