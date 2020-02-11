import { createStore } from 'redux';
import tutorialTips, { TutorialTip, TutorialManager } from 'TutorialTips';

const reducer = {};
const rootReducer = tutorialTips.addReducer(reducer);

const store = createStore(rootReducer);
tutorialTips.setStore(store);

describe('TutorialManager', () => {
	test('add tip', () => {
		const tip = new TutorialTip('t01', 'popup', 'Title', 'Text');
		TutorialManager.addTip(tip);

		expect(TutorialManager.getTip(tip.id)).toBe(tip);
	});
});
