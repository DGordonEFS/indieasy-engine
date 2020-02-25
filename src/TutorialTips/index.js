import manager, {
	createManager,
	getManager,
	setActiveManager,
	getActiveManager,
} from './scripts/TutorialManager';
import TutorialTip from './scripts/TutorialTip';
import TutorialGroup from './scripts/TutorialGroup';
import * as actions from './store/actions/actions';
import * as actionTypes from './store/actions/actionTypes';

import './store';

export default {
	createManager,
	manager,
	getManager,
	setActiveManager,
	getActiveManager,
	TutorialTip,
	TutorialGroup,
	actions,
	actionTypes,
};

export { createManager };
export { getManager };
export { setActiveManager };
export { getActiveManager };
export { TutorialTip };
export { TutorialGroup };
export { actions };
export { actionTypes };
