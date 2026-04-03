import { calculateRER, calculateDER, calculateRation, getStatusKey, WEIGHT_RANGES } from "./logic";
import type { RationSpecies, LifeStage, ActivityLevel } from "./logic";

export interface RationState {
  species: RationSpecies;
  stage: LifeStage;
  activity: ActivityLevel;
  weight: number;
  wetPct: number;
}

function getSelectedValue(name: string): string {
  return (document.querySelector(`input[name="${name}"]:checked`) as HTMLInputElement)?.value || "";
}

function getInputValues() {
  const weightRange = document.getElementById("weightRange") as HTMLInputElement;
  const ratioRange = document.getElementById("dietRatioRange") as HTMLInputElement;
  return {
    weight: parseFloat(weightRange?.value || "0") || 0,
    wetPct: parseInt(ratioRange?.value || "0") / 100,
  };
}

export function getFormState(): RationState {
  const { weight, wetPct } = getInputValues();
  return {
    species: (getSelectedValue("petType") || "dog") as RationSpecies,
    stage: (getSelectedValue("lifeStage") || "adult") as LifeStage,
    activity: (getSelectedValue("activity") || "mod") as ActivityLevel,
    weight,
    wetPct,
  };
}

export function setRadioValue(name: string, value: string): void {
  const el = document.querySelector(`input[name="${name}"][value="${value}"]`) as HTMLInputElement;
  if (el) el.checked = true;
}

export function setMaxWeightRange(species: string): void {
  const weightRange = document.getElementById("weightRange") as HTMLInputElement;
  if (weightRange) {
    weightRange.max = (WEIGHT_RANGES[species as RationSpecies] || 85).toString();
  }
}

function getParamOrStored(param: string, storedKey: string, defaultVal: string) {
  const params = new URLSearchParams(window.location.search);
  const stored = JSON.parse(localStorage.getItem("pet_v2_state") || "{}");
  return params.get(param) || stored[storedKey] || defaultVal;
}

export function getStoredConfig() {
  const params = new URLSearchParams(window.location.search);
  const stored = JSON.parse(localStorage.getItem("pet_v2_state") || "{}");
  const defaultR = stored.wetPct ? (stored.wetPct * 100).toString() : "0";

  return {
    s: getParamOrStored("s", "species", "dog"),
    st: getParamOrStored("st", "stage", "adult"),
    a: getParamOrStored("a", "activity", "mod"),
    w: getParamOrStored("w", "weight", "10"),
    r: params.get("r") || defaultR,
  };
}

export function applyPresetLogic(ratioValue: string): void {
  const presets = document.getElementsByName("dietRatioPreset") as NodeListOf<HTMLInputElement>;
  const manualBox = document.getElementById("manualSliderBox");
  const showManual = document.getElementById("showManualSlider");

  const preset = Array.from(presets).find((p) => p.value === ratioValue);
  if (preset) {
    preset.checked = true;
  } else if (manualBox && ratioValue !== "0" && ratioValue !== "100") {
    manualBox.style.display = "block";
    if (showManual) showManual.style.display = "none";
  }
}

interface CalcResult {
  dryGrams: number;
  wetGrams: number;
  der: number;
}

function updateResultNumbers(state: RationState, result: CalcResult, uiData: Record<string, string>): void {
  const weightDisplay = document.getElementById("weightDisplay");
  if (weightDisplay) weightDisplay.innerText = state.weight.toString();

  const ratioLabel = document.getElementById("ratioValDisplay");
  if (ratioLabel) ratioLabel.innerText = `${Math.round(state.wetPct * 100)}%`;

  const dryVal = document.getElementById("dryResVal");
  if (dryVal) dryVal.innerText = result.dryGrams.toString();

  const wetVal = document.getElementById("wetResVal");
  if (wetVal) wetVal.innerText = result.wetGrams.toString();

  const kcalTotal = document.getElementById("kcalTotalVal");
  if (kcalTotal) kcalTotal.innerText = Math.round(result.der).toString();

  const status = document.getElementById("statusBoxV2");
  if (status) status.innerText = uiData[getStatusKey(state.species, state.stage, state.weight)] || "";
}

function updateCardVisibility(state: RationState): void {
  const dryCard = document.getElementById("dryResCard");
  if (dryCard) dryCard.style.display = (1 - state.wetPct) > 0 ? "flex" : "none";

  const wetCard = document.getElementById("wetResCard");
  if (wetCard) wetCard.style.display = state.wetPct > 0 ? "flex" : "none";
}

function updateStateAndUrl(state: RationState): void {
  localStorage.setItem(
    "pet_v2_state",
    JSON.stringify({ species: state.species, stage: state.stage, activity: state.activity, weight: state.weight, wetPct: state.wetPct })
  );

  const url = new URL(window.location.href);
  url.searchParams.set("w", state.weight.toString());
  url.searchParams.set("s", state.species);
  url.searchParams.set("st", state.stage);
  url.searchParams.set("a", state.activity);
  url.searchParams.set("r", document.getElementById("dietRatioRange")?.value || "0");
  window.history.replaceState({}, "", url.toString());
}

export function updateDisplay(state: RationState, uiData: Record<string, string>): void {
  const rer = calculateRER(state.weight);
  const der = calculateDER(rer, state.species, state.stage, state.activity);
  const { dryGrams, wetGrams } = calculateRation(der, state.wetPct);

  updateResultNumbers(state, { dryGrams, wetGrams, der }, uiData);
  updateCardVisibility(state);
  updateStateAndUrl(state);
}
