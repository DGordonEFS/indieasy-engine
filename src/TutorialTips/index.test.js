import { createStore } from 'store';

import tutorialTips, {
	getManager,
	TutorialGroup,
	TutorialTip,
} from 'TutorialTips';

const store = createStore();

describe('TutorialTips index', () => {
	test('addReducer', () => {
		expect(store.getState().tutorialtips).not.toBe(undefined);
		expect(store.getState().tutorialtips).not.toBe(null);
	});

	test('createManager and getManager', () => {
		const manager = tutorialTips.createManager('m01');
		expect(tutorialTips.getManager('m01')).toBe(manager);
	});

	test('setActiveManager and getActiveManager', () => {
		const manager = tutorialTips.createManager('m01');
		tutorialTips.setActiveManager('m01');
		expect(tutorialTips.getActiveManager()).toBe(manager);
	});

	test('getActiveManager', () => {
		expect(getManager().constructor.name).toBe('TutorialManager');
	});

	test('setActiveManager', () => {
		expect(getManager().constructor.name).toBe('TutorialManager');
	});

	test('TutorialGroup', () => {
		expect(TutorialGroup.name).toBe('TutorialGroup');
	});

	test('TutorialGroup', () => {
		expect(TutorialTip.name).toBe('TutorialTip');
	});
});
