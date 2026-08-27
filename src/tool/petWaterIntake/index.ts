import type { ToolDefinition } from '../../types';
import { petWaterIntake } from './entry';

export * from './entry';

export const PET_WATER_INTAKE_TOOL: ToolDefinition = {
  entry: petWaterIntake,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
