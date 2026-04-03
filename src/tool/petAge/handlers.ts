import { calculatePetHumanAge, getDogStageKey, getCatStageKey, getDogMilestone, getCatMilestone } from "./logic";
import type { PetSpecies, DogSize } from "./logic";

export interface PetAgeState {
  petType: PetSpecies;
  dogSize: DogSize;
  birthYear: number | null;
  petName: string;
}

export interface PetAgeElements {
  shareOverlay: HTMLElement | null;
  container: HTMLElement | null;
  sharePetName: HTMLElement | null;
  shareHumanAge: HTMLElement | null;
  shareChronologicalAge: HTMLElement | null;
  shareLifeStage: HTMLElement | null;
  shareIconDog: HTMLElement | null;
  shareIconCat: HTMLElement | null;
  petBtns: NodeListOf<HTMLElement>;
  sizeBtns: NodeListOf<HTMLElement>;
  dogSizeSelector: HTMLElement | null;
  birthYearInput: HTMLInputElement;
  humanAgeDisplay: HTMLElement | null;
  lifeStageDisplay: HTMLElement | null;
  nextMilestoneDisplay: HTMLElement | null;
  petNameInput: HTMLInputElement | null;
  resultPetNameSpan: HTMLElement | null;
  shareBtn: HTMLElement | null;
  shareText: HTMLElement | null;
  loader: HTMLElement | null;
}

export function getElements(): Partial<PetAgeElements> {
  return {
    shareOverlay: document.getElementById("share-overlay"),
    container: document.getElementById("calculator-container"),
    sharePetName: document.getElementById("share-pet-name"),
    shareHumanAge: document.getElementById("share-human-age"),
    shareChronologicalAge: document.getElementById("share-chronological-age"),
    shareLifeStage: document.getElementById("share-life-stage"),
    shareIconDog: document.getElementById("share-icon-dog"),
    shareIconCat: document.getElementById("share-icon-cat"),
    petBtns: document.querySelectorAll(".pet-type-btn") as NodeListOf<HTMLElement>,
    sizeBtns: document.querySelectorAll(".size-btn") as NodeListOf<HTMLElement>,
    dogSizeSelector: document.getElementById("dog-size-selector"),
    birthYearInput: document.getElementById("birth-year-input") as HTMLInputElement,
    humanAgeDisplay: document.getElementById("human-age"),
    lifeStageDisplay: document.getElementById("life-stage"),
    nextMilestoneDisplay: document.getElementById("next-milestone"),
    petNameInput: document.getElementById("pet-name") as HTMLInputElement,
    resultPetNameSpan: document.getElementById("result-pet-name"),
    shareBtn: document.getElementById("share-btn"),
    shareText: document.getElementById("share-text"),
    loader: document.getElementById("ageLoader"),
  };
}

export function getStageLabel(humanAge: number, petType: PetSpecies, uiData: Record<string, string>): string {
  const key = petType === "cat" ? getCatStageKey(humanAge) : getDogStageKey(humanAge);
  return uiData[key] || key;
}

export function getMilestoneLabel(chronologicalAge: number, petType: PetSpecies): string {
  return petType === "cat" ? getCatMilestone(chronologicalAge) : getDogMilestone(chronologicalAge);
}

function updateMainDisplay(state: PetAgeState, els: Partial<PetAgeElements>, uiData: Record<string, string>, currentYear: number): void {
  if (!state.birthYear) {
    if (els.humanAgeDisplay) els.humanAgeDisplay.textContent = "--";
    if (els.lifeStageDisplay) els.lifeStageDisplay.textContent = "---";
    if (els.nextMilestoneDisplay) els.nextMilestoneDisplay.textContent = "---";
  } else {
    const chronologicalAge = currentYear - state.birthYear;
    const humanAge = calculatePetHumanAge(state.petType, chronologicalAge, state.dogSize);
    if (els.humanAgeDisplay) els.humanAgeDisplay.textContent = humanAge.toString();
    if (els.lifeStageDisplay) els.lifeStageDisplay.textContent = getStageLabel(humanAge, state.petType, uiData);
    if (els.nextMilestoneDisplay) els.nextMilestoneDisplay.textContent = getMilestoneLabel(chronologicalAge, state.petType);
  }
}

function updateNameDisplay(state: PetAgeState, els: Partial<PetAgeElements>): void {
  if (!els.resultPetNameSpan) return;
  const shouldShow = state.petName.trim().length > 0;
  els.resultPetNameSpan.classList.toggle("hidden", !shouldShow);
  if (shouldShow) els.resultPetNameSpan.textContent = state.petName;
}

export function updateResultsDisplay(state: PetAgeState, els: Partial<PetAgeElements>, uiData: Record<string, string>, currentYear: number): void {
  updateMainDisplay(state, els, uiData, currentYear);
  updateNameDisplay(state, els);
}

export function renderShareCard(state: PetAgeState, els: Partial<PetAgeElements>, uiData: Record<string, string>, currentYear: number): void {
  if (!state.birthYear) return;

  const chronologicalAge = currentYear - state.birthYear;
  const humanAge = calculatePetHumanAge(state.petType, chronologicalAge, state.dogSize);

  if (els.sharePetName) els.sharePetName.textContent = state.petName;
  if (els.shareHumanAge) els.shareHumanAge.textContent = humanAge.toString();
  if (els.shareChronologicalAge) els.shareChronologicalAge.textContent = chronologicalAge.toString();
  if (els.shareLifeStage) els.shareLifeStage.textContent = getStageLabel(humanAge, state.petType, uiData);
  if (els.shareIconDog) els.shareIconDog.classList.toggle("hidden", state.petType !== "dog");
  if (els.shareIconCat) els.shareIconCat.classList.toggle("hidden", state.petType !== "cat");
}

function loadShareParams(state: PetAgeState, uiData: Record<string, string>): boolean {
  const params = new URLSearchParams(window.location.search);
  if (!params.has("birthYear") || !params.has("type")) return false;

  state.petName = params.get("name") || uiData.defaultPetName || "";
  state.petType = (params.get("type") || "dog") as PetSpecies;
  state.dogSize = (params.get("size") || "medium") as DogSize;
  state.birthYear = parseInt(params.get("birthYear") || "0");
  return true;
}

function setShareVisibility(show: boolean, els: Partial<PetAgeElements>): void {
  if (els.shareOverlay) els.shareOverlay.classList.toggle("visible", show);
  if (els.container) els.container.style.display = show ? "none" : "block";
}

export function showShareMode(state: PetAgeState, els: Partial<PetAgeElements>, uiData: Record<string, string>, currentYear: number): void {
  const hasShare = loadShareParams(state, uiData);
  if (hasShare) {
    renderShareCard(state, els, uiData, currentYear);
  }
  setShareVisibility(hasShare, els);
}

export function validateBirthYear(val: string, currentYear: number): number | null {
  const num = parseInt(val);
  return !isNaN(num) && num > 1900 && num <= currentYear ? num : null;
}

export function generateShareUrl(state: PetAgeState): string {
  const params = new URLSearchParams({ type: state.petType, birthYear: state.birthYear!.toString() });
  if (state.petName) params.set("name", state.petName);
  if (state.petType === "dog") params.set("size", state.dogSize);
  return `${window.location.origin}${window.location.pathname}?${params}`;
}
