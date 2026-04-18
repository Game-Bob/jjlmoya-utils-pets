export * from './tool/petAge';
export * from './tool/petRation';

export { petsCategory } from './category';
export const PetsCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  PetToolEntry,
  PetCategoryEntry,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';
