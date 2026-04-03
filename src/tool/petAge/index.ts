import type { PetToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import PetAgeCalculator from './component.astro';
import PetAgeSEO from './seo.astro';
import PetAgeBibliography from './bibliography.astro';

export interface PetAgeUI {
  [key: string]: string;
  toolTitle: string;
  toolSubtitle: string;
  petNameLabel: string;
  petNamePlaceholder: string;
  petTypeDog: string;
  petTypeCat: string;
  sizeSmall: string;
  sizeMedium: string;
  sizeLarge: string;
  sizeGiant: string;
  birthYearLabel: string;
  humanAgeLabel: string;
  humanAgeUnit: string;
  lifeStageLabel: string;
  milestoneLabel: string;
  shareBtn: string;
  shareSuccess: string;
  humanAgeTitle: string;
  humanAgeYears: string;
  recalculateBtn: string;
  realAgeLabel: string;
  defaultPetName: string;
  stageDogPuppy: string;
  stageDogTeen: string;
  stageDogAdult: string;
  stageDogMature: string;
  stageDogSenior: string;
  stageCatKitten: string;
  stageCatYouth: string;
  stageCatReign: string;
  stageCatVeteran: string;
  stageCatVenerable: string;
}

export type PetAgeLocaleContent = ToolLocaleContent<PetAgeUI>;

export const petAge: PetToolEntry<PetAgeUI> = {
  id: 'pet-age',
  icons: {
    bg: 'mdi:paw',
    fg: 'mdi:cake-variant',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { PetAgeCalculator, PetAgeSEO, PetAgeBibliography };

export const PET_AGE_TOOL: ToolDefinition = {
  entry: petAge,
  Component: PetAgeCalculator,
  SEOComponent: PetAgeSEO,
  BibliographyComponent: PetAgeBibliography,
};
