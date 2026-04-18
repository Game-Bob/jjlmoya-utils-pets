import { petAge } from './entry';
export * from './entry';
export const PET_AGE_TOOL: ToolDefinition = {
  entry: petAge,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
