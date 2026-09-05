import type { ToolDefinition } from '../../types';
import { petMedicationSchedulePlanner } from './entry';

export * from './entry';
export * from './logic';

export const PET_MEDICATION_SCHEDULE_PLANNER_TOOL: ToolDefinition = {
  entry: petMedicationSchedulePlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
