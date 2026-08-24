import type { ToolDefinition } from '../../types';
import { petToxicity } from './entry';

export * from './entry';

export const PET_TOXICITY_TOOL: ToolDefinition = {
  entry: petToxicity,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
