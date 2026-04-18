export { petAge } from './tool/petAge/entry';
export type { PetAgeUI, PetAgeLocaleContent } from './tool/petAge/entry';
export { petRation } from './tool/petRation/entry';
export type { PetRationUI, PetRationLocaleContent } from './tool/petRation/entry';
export { petsCategory } from './category';
import { petAge } from './tool/petAge/entry';
import { petRation } from './tool/petRation/entry';
export const ALL_ENTRIES = [petAge, petRation];
