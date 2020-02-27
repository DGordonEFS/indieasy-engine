import manager, { init, system } from './scripts/TutorialSystem';
import TutorialTip from './scripts/TutorialTip';
import TutorialGroup from './scripts/TutorialGroup';
import * as actions from './store/actions/actions';
import * as actionTypes from './store/actions/actionTypes';

import './store';

export default {
	manager,
	init,
	system,
	TutorialTip,
	TutorialGroup,
	actions,
	actionTypes,
};

export { manager };
export { init };
export { system };
export { TutorialTip };
export { TutorialGroup };
export { actions };
export { actionTypes };
