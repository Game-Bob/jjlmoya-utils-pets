import type { ToolDefinition } from '../../types';
import { petCollarSizeCalculator } from './entry';

export * from './entry';

export const PET_COLLAR_SIZE_CALCULATOR_TOOL: ToolDefinition = {
  entry: petCollarSizeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
