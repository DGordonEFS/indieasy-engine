import { createStore } from 'redux';

import tutorialTips, {
	getManager,
	TutorialGroup,
	TutorialTip,
} from 'TutorialTips';

describe('TutorialTips index', () => {
	let store;

	test('addReducer', () => {
		const reducer = {};
		const rootReducer = tutorialTips.addReducer(reducer);
		store = createStore(rootReducer);

		expect(store.getState().tutorialTips).not.toBe(undefined);
		expect(store.getState().tutorialTips).not.toBe(null);
	});

	test('setStore and getStore', () => {
		tutorialTips.setStore(store);
		expect(tutorialTips.getStore()).toBe(store);
	});

	test('setupForTesting', () => {
		tutorialTips.setupForTesting;
		expect(tutorialTips.getStore()).not.toBeNull();
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
