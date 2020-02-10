// Export all the explicitly exported components, this file will contain our
// components when built by webpack and sent off to the world.

import TutorialTipManager, { initStore } from './TutorialTips';
export const TutorialTips = { TutorialTipManager, initStore };
