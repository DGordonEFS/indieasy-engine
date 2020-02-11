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
