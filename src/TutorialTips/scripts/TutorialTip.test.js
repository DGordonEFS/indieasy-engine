import { createStore } from 'redux';
import tutorialTips, { TutorialTip } from 'TutorialTips';

const rootReducer = tutorialTips.addReducer({});
const store = createStore(rootReducer);
tutorialTips.setStore(store);

describe('TutorialTip', () => {
	test('it has a working constructor', () => {
		const tip = new TutorialTip(
			't02',
			'popup',
			'Title',
			'Text',
			't03',
			't01',
			() => true,
			true
		);

		expect(tip.id).toBe('T02');
		expect(tip.type).toBe('popup');
		expect(tip.title).toBe('Title');
		expect(tip.text).toBe('Text');
		expect(tip.next).toBe('t03');
		expect(tip.prev).toBe('t01');
		expect(tip.onStoreChange()).toBe(true);
		expect(tip.watchStore).toBe(true);
	});
});
