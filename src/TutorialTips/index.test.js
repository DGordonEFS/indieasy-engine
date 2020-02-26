import { createStore } from 'store';

import tutorialTips, {
	manager,
	TutorialGroup,
	TutorialTip,
} from 'TutorialTips';

const store = createStore();

describe('TutorialTips index', () => {
	test('addReducer', () => {
		expect(store.getState().tutorialtips).not.toBe(undefined);
		expect(store.getState().tutorialtips).not.toBe(null);
	});

	test('TutorialGroup', () => {
		expect(TutorialGroup.name).toBe('TutorialGroup');
	});

	test('TutorialGroup', () => {
		expect(TutorialTip.name).toBe('TutorialTip');
	});
});
