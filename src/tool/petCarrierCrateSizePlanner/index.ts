import type { ToolDefinition } from '../../types';
import { petCarrierCrateSizePlanner } from './entry';

export * from './entry';
export { calculateCarrier } from './logic';

export const PET_CARRIER_CRATE_SIZE_PLANNER_TOOL: ToolDefinition = {
  entry: petCarrierCrateSizePlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
