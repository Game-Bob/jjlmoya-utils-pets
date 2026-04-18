import { PET_AGE_TOOL } from './tool/petAge';
import { PET_RATION_TOOL } from './tool/petRation';
import type { ToolDefinition } from './types';

export const ALL_TOOLS: ToolDefinition[] = [
  PET_AGE_TOOL,
  PET_RATION_TOOL,
];

export {
  PET_AGE_TOOL,
  PET_RATION_TOOL,
};

export const ALL_ENTRIES = ALL_TOOLS.map(t => t.entry);
