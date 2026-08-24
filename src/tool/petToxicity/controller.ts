import { getFoodEvaluation, getFoodOptions } from './logic';
import type { FoodId, PetSpecies } from './logic';
import { renderFoodMenu, renderResult, renderScene, renderSpeciesMenu } from './dom-views';
import { loadSavedState, saveState } from './storage';
import type { PetToxicityUI } from './ui';

interface MountPayload {
  ui: PetToxicityUI;
  defaultSpecies: PetSpecies;
  defaultFood: FoodId;
}

interface ToolState {
  species: PetSpecies;
  foodId: FoodId;
}

function findElement<T extends Element>(root: HTMLElement, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing pet toxicity element: ${selector}`);
  return element;
}

function closeMenus(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('[data-menu]').forEach((menu) => { menu.hidden = true; });
  root.querySelectorAll<HTMLElement>('[data-menu-trigger]').forEach((trigger) => { trigger.setAttribute('aria-expanded', 'false'); });
}

function toggleMenu(root: HTMLElement, menu: HTMLElement, trigger: HTMLElement): void {
  const shouldOpen = menu.hidden;
  closeMenus(root);
  menu.hidden = !shouldOpen;
  trigger.setAttribute('aria-expanded', String(shouldOpen));
}

function labelForSpecies(species: PetSpecies, ui: PetToxicityUI): string {
  return species === 'dog' ? ui.speciesDog : ui.speciesCat;
}

function setupKeyboard(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('[data-menu-trigger]').forEach((trigger) => {
    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        trigger.click();
      }
      if (event.key === 'Escape') closeMenus(root);
    });
  });
}

interface ViewElements {
  speciesTrigger: HTMLButtonElement;
  speciesMenu: HTMLElement;
  foodTrigger: HTMLButtonElement;
  foodMenu: HTMLElement;
  scene: HTMLElement;
  result: HTMLElement;
}

function renderState(elements: ViewElements, state: ToolState, payload: MountPayload): void {
  const options = getFoodOptions(state.species);
  if (!options.some((option) => option.id === state.foodId)) state.foodId = options[0]?.id ?? payload.defaultFood;
  const evaluation = getFoodEvaluation(state.species, state.foodId);
  const selectedFood = options.find((option) => option.id === state.foodId);
  elements.speciesTrigger.querySelector('[data-trigger-value]')!.textContent = labelForSpecies(state.species, payload.ui);
  elements.foodTrigger.querySelector('[data-trigger-value]')!.textContent = selectedFood?.name ?? payload.ui.foodPlaceholder;
  elements.speciesMenu.innerHTML = renderSpeciesMenu(state.species, payload.ui);
  elements.foodMenu.innerHTML = renderFoodMenu(options, state.foodId);
  elements.scene.innerHTML = renderScene(state.species, evaluation, payload.ui);
  elements.result.innerHTML = renderResult(evaluation, payload.ui);
  saveState(state);
}

function bindSelection(root: HTMLElement, elements: ViewElements, state: ToolState, render: () => void): void {
  elements.speciesTrigger.addEventListener('click', () => toggleMenu(root, elements.speciesMenu, elements.speciesTrigger));
  elements.foodTrigger.addEventListener('click', () => toggleMenu(root, elements.foodMenu, elements.foodTrigger));
  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const speciesOption = target.closest<HTMLElement>('[data-species-id]');
    const foodOption = target.closest<HTMLElement>('[data-food-id]');
    if (speciesOption) selectSpecies(speciesOption, root, state, render);
    if (foodOption) selectFood(foodOption, root, state, render);
  });
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) closeMenus(root);
  });
}

function selectSpecies(option: HTMLElement, root: HTMLElement, state: ToolState, render: () => void): void {
  state.species = option.dataset.speciesId as PetSpecies;
  closeMenus(root);
  render();
}

function selectFood(option: HTMLElement, root: HTMLElement, state: ToolState, render: () => void): void {
  state.foodId = option.dataset.foodId as FoodId;
  closeMenus(root);
  render();
}

export function mountPetToxicity(root: HTMLElement, payload: MountPayload): void {
  const saved = loadSavedState();
  const state: ToolState = { species: saved?.species ?? payload.defaultSpecies, foodId: saved?.foodId ?? payload.defaultFood };
  const elements: ViewElements = {
    speciesTrigger: findElement<HTMLButtonElement>(root, '[data-species-trigger]'),
    speciesMenu: findElement<HTMLElement>(root, '[data-species-menu]'),
    foodTrigger: findElement<HTMLButtonElement>(root, '[data-food-trigger]'),
    foodMenu: findElement<HTMLElement>(root, '[data-food-menu]'),
    scene: findElement<HTMLElement>(root, '[data-scene]'),
    result: findElement<HTMLElement>(root, '[data-result]'),
  };
  const render = () => renderState(elements, state, payload);
  bindSelection(root, elements, state, render);
  setupKeyboard(root);
  render();
}
