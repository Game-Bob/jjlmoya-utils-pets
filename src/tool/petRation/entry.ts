import type { PetToolEntry, ToolLocaleContent } from '../../types';

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
  kcalUnit: string;
  statusPuppy: string;
  statusSenior: string;
  statusLargeDog: string;
  statusDefault: string;
}

export type PetRationLocaleContent = ToolLocaleContent<PetRationUI>;

export const petRation: PetToolEntry<PetRationUI> = {
  id: 'pet-ration',
  icons: {
    bg: 'mdi:dog',
    fg: 'mdi:scale',
  },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};
