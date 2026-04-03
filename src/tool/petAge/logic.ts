export type PetSpecies = 'dog' | 'cat';
export type DogSize = 'small' | 'medium' | 'large' | 'giant';

const DOG_SIZE_MULTIPLIERS: Record<DogSize, number> = {
  small: 5,
  medium: 6,
  large: 7,
  giant: 8,
};

export function calculateDogHumanAge(chronologicalAge: number, size: DogSize): number {
  if (chronologicalAge <= 0) return 0;
  if (chronologicalAge === 1) return 15;
  if (chronologicalAge === 2) return 24;
  return Math.floor(24 + (chronologicalAge - 2) * DOG_SIZE_MULTIPLIERS[size]);
}

export function calculateCatHumanAge(chronologicalAge: number): number {
  if (chronologicalAge <= 0) return 0;
  if (chronologicalAge === 1) return 15;
  if (chronologicalAge === 2) return 24;
  return 24 + (chronologicalAge - 2) * 4;
}

export function calculatePetHumanAge(species: PetSpecies, chronologicalAge: number, dogSize: DogSize = 'medium'): number {
  if (species === 'cat') return calculateCatHumanAge(chronologicalAge);
  return calculateDogHumanAge(chronologicalAge, dogSize);
}

export type DogStageKey = 'stageDogPuppy' | 'stageDogTeen' | 'stageDogAdult' | 'stageDogMature' | 'stageDogSenior';
export type CatStageKey = 'stageCatKitten' | 'stageCatYouth' | 'stageCatReign' | 'stageCatVeteran' | 'stageCatVenerable';

export function getDogStageKey(humanAge: number): DogStageKey {
  if (humanAge < 15) return 'stageDogPuppy';
  if (humanAge < 24) return 'stageDogTeen';
  if (humanAge < 60) return 'stageDogAdult';
  if (humanAge < 80) return 'stageDogMature';
  return 'stageDogSenior';
}

export function getCatStageKey(humanAge: number): CatStageKey {
  if (humanAge < 15) return 'stageCatKitten';
  if (humanAge < 24) return 'stageCatYouth';
  if (humanAge < 60) return 'stageCatReign';
  if (humanAge < 80) return 'stageCatVeteran';
  return 'stageCatVenerable';
}

export function getDogMilestone(chronologicalAge: number): string {
  if (chronologicalAge < 1) return 'Vacunación y Microchip';
  if (chronologicalAge < 7) return 'Chequeo Anual y Limpieza Dental';
  return 'Chequeo Geriátrico Semestral';
}

export function getCatMilestone(chronologicalAge: number): string {
  if (chronologicalAge < 1) return 'Esterilización y Vacunas';
  if (chronologicalAge < 10) return 'Control de Peso y Salud Dental';
  return 'Perfil Renal y Chequeo Senior';
}
