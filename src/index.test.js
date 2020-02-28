import { theming, toolTips, tutorialTips, store, utils } from './index';

import ThemeManager from './theming/ThemeManager';
import ToolTipManager from './tooltips/ToolTipManager';
import TutorialTipManager from './tutorialtips/scripts/TutorialSystem';
import { createStore } from './store';
import { url } from './utils';

createStore();

describe('index', () => {
	test('theming', () => {
		expect(theming.manager).toBe(ThemeManager);
	});

	test('tooltips', () => {
		expect(toolTips.manager).toBe(ToolTipManager);
	});

	test('tutorialtips', () => {
		expect(tutorialTips.manager).toBe(TutorialTipManager);
	});

	test('store', () => {
		expect(store.createStore).toBe(createStore);
	});

	test('utils url', () => {
		expect(utils.url).toBe(url);
	});
});
