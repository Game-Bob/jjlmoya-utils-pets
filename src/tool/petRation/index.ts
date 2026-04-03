import type { PetToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import PetRationCalculator from './component.astro';
import PetRationSEO from './seo.astro';
import PetRationBibliography from './bibliography.astro';

export interface PetRationUI {
  [key: string]: string;
  toolTitle: string;
  sectionProfile: string;
  labelAnimal: string;
  labelStage: string;
  labelWeight: string;
  labelActivity: string;
  sectionDiet: string;
  labelDietType: string;
  speciesDog: string;
  speciesCat: string;
  speciesRabbit: string;
  stagePuppy: string;
  stageAdult: string;
  stageSenior: string;
  activityLow: string;
  activityMod: string;
  activityHigh: string;
  dietDry: string;
  dietMixed25: string;
  dietHalf: string;
  dietWet: string;
  manualAdjust: string;
  wetPercentLabel: string;
  tagDry: string;
  tagWet: string;
  totalKcal: string;
}

export type PetRationLocaleContent = ToolLocaleContent<PetRationUI>;

export const petRation: PetToolEntry<PetRationUI> = {
  id: 'pet-ration',
  icons: {
    bg: 'mdi:food-dog-bowl',
    fg: 'mdi:scale',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { PetRationCalculator, PetRationSEO, PetRationBibliography };

export const PET_RATION_TOOL: ToolDefinition = {
  entry: petRation,
  Component: PetRationCalculator,
  SEOComponent: PetRationSEO,
  BibliographyComponent: PetRationBibliography,
};
