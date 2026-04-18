export * from './entry';
export const PET_RATION_TOOL: ToolDefinition = {
  entry: petRation,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
