import TutorialManager, {
	createManager,
	getManager,
	setActiveManager,
	getActiveManager,
} from './scripts/TutorialManager';
import TutorialTip from './scripts/TutorialTip';
import TutorialGroup from './scripts/TutorialGroup';
import { getStore } from './store/store';
import { setStore } from './store/store';
import { addReducer } from './store/store';
import * as actions from './store/actions/actions';
import * as actionTypes from './store/actions/actionTypes';

export default {
	TutorialManager,
	createManager,
	getManager,
	setActiveManager,
	getActiveManager,
	TutorialTip,
	TutorialGroup,
	getStore,
	setStore,
	addReducer,
	actions,
	actionTypes,
};

export { TutorialManager };
export { createManager };
export { getManager };
export { setActiveManager };
export { getActiveManager };
export { TutorialTip };
export { TutorialGroup };
export { getStore };
export { setStore };
export { addReducer };
export { actions };
export { actionTypes };
