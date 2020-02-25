import { theming, toolTips, tutorialTips, store } from './index';

import ThemeManager from './theming/ThemeManager';
import ToolTipManager from './tooltips/ToolTipManager';
import { getManager } from './tutorialtips/scripts/TutorialManager';
import { createStore } from './store';

createStore();

describe('index', () => {
	test('theming', () => {
		expect(theming.manager).toBe(ThemeManager);
	});

	test('tooltips', () => {
		expect(toolTips.manager).toBe(ToolTipManager);
	});

	test('tutorialtips', () => {
		expect(tutorialTips.getManager()).toBe(getManager());
	});

	test('store', () => {
		expect(store.createStore).toBe(createStore);
	});
});
