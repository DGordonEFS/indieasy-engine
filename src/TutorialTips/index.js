import TutorialManager, {
	createManager,
	getManager,
	setActiveManager,
	getActiveManager,
} from './scripts/TutorialManager';
import TutorialTip from './scripts/TutorialTip';
import TutorialGroup from './scripts/TutorialGroup';
import { getStore, setStore, addReducer, setupForTesting } from './store/store';
import * as actions from './store/actions/actions';
import * as actionTypes from './store/actions/actionTypes';

export default {
	createManager,
	getManager,
	setActiveManager,
	getActiveManager,
	TutorialTip,
	TutorialGroup,
	getStore,
	setStore,
	addReducer,
	setupForTesting,
	actions,
	actionTypes,
};

export { createManager };
export { getManager };
export { setActiveManager };
export { getActiveManager };
export { TutorialTip };
export { TutorialGroup };
export { getStore };
export { setStore };
export { addReducer };
export { setupForTesting };
export { actions };
export { actionTypes };
