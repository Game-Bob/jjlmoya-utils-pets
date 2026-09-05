import type { ToolLocaleContent } from '../../types';

export interface PetMedicationSchedulePlannerUI {
  [key: string]: string;
  dateLocale: string;
  heroEyebrow: string;
  heroHint: string;
  medicationNameLabel: string;
  medicationNamePlaceholder: string;
  startDateLabel: string;
  startTimeLabel: string;
  scheduleModeLabel: string;
  intervalMode: string;
  timesMode: string;
  intervalHoursLabel: string;
  timesLabel: string;
  timesHint: string;
  durationLabel: string;
  durationUnit: string;
  instructionsLabel: string;
  instructionsPlaceholder: string;
  reset: string;
  scheduleTitle: string;
  scheduleSummary: string;
  nextDoseLabel: string;
  noNextDose: string;
  completedCount: string;
  markDone: string;
  markUndone: string;
  completed: string;
  upcoming: string;
  due: string;
  emptySchedule: string;
  invalidInput: string;
  localOnlyLabel: string;
  safetyTitle: string;
  safetyText: string;
  methodTitle: string;
  methodText: string;
  scheduleIllustration: string;
}

export type PetMedicationSchedulePlannerLocaleContent = ToolLocaleContent<PetMedicationSchedulePlannerUI>;
