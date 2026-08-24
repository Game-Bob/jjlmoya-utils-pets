export { ALL_ENTRIES } from './entries';
import { PET_AGE_TOOL } from './tool/petAge';
import { PET_RATION_TOOL } from './tool/petRation';
import { PET_GESTATION_TOOL } from './tool/petGestation';
import type { ToolDefinition } from './types';

export const ALL_TOOLS: ToolDefinition[] = [
  PET_AGE_TOOL,
  PET_RATION_TOOL,
  PET_GESTATION_TOOL,
];

export {
  PET_AGE_TOOL,
  PET_RATION_TOOL,
  PET_GESTATION_TOOL,
};
