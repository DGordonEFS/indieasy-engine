import { createStore } from 'store';
import { TutorialTip } from 'TutorialTips';

createStore();

describe('TutorialTip', () => {
	test('it has a working constructor', () => {
		const tip = new TutorialTip('t02', 'Title', 'Text', {
			type: 'popup',
			next: 't03',
			prev: 't01',
			onStoreChange: () => true,
		});

		expect(tip.id).toBe('T02');
		expect(tip.type).toBe('popup');
		expect(tip.title).toBe('Title');
		expect(tip.text).toBe('Text');
		expect(tip.next).toBe('t03');
		expect(tip.prev).toBe('t01');
		expect(tip.onStoreChange()).toBe(true);
	});
});
