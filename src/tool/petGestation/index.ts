import type { ToolDefinition } from '../../types';
import { petGestation } from './entry';

export * from './entry';

export const PET_GESTATION_TOOL: ToolDefinition = {
  entry: petGestation,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
