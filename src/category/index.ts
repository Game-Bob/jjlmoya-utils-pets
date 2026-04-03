import type { PetCategoryEntry } from '../types';
import { petAge } from '../tool/petAge';
import { petRation } from '../tool/petRation';

export const petsCategory: PetCategoryEntry = {
  icon: 'mdi:paw',
  tools: [petAge, petRation],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};
