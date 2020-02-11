import { createStore } from 'redux';
import tutorialTips, { TutorialTip, TutorialGroup } from 'TutorialTips';

const rootReducer = tutorialTips.addReducer({});
const store = createStore(rootReducer);
tutorialTips.setStore(store);

describe('TutorialGroup', () => {
	test('addTip', () => {
		const group = new TutorialGroup('g01');
		group.addTip(new TutorialTip('t01'));
		group.addTip(new TutorialTip('t02'));

		expect(group._tips.length).toBe(2);
		expect(group._tips[0].next).toBe('T02');
		expect(group._tips[0].prev).toBe(undefined);
		expect(group._tips[1].next).toBe(undefined);
		expect(group._tips[1].prev).toBe('T01');
	});

	test('getTips', () => {
		const group = new TutorialGroup('g01');
		group.addTip(new TutorialTip('t01'));
		group.addTip(new TutorialTip('t02'));

		expect(group.getTips().length).toBe(2);
		expect(group.getTips()[0].next).toBe('T02');
		expect(group.getTips()[1].prev).toBe('T01');
	});

	test('wrap', () => {
		const group = new TutorialGroup('g01', true);
		group.addTip(new TutorialTip('t01'));
		group.addTip(new TutorialTip('t02'));
		group.addTip(new TutorialTip('t03'));

		expect(group._tips.length).toBe(3);
		expect(group._tips[0].prev).toBe('T03');
		expect(group._tips[0].id).toBe('T01');
		expect(group._tips[0].next).toBe('T02');

		expect(group._tips[1].prev).toBe('T01');
		expect(group._tips[1].id).toBe('T02');
		expect(group._tips[1].next).toBe('T03');

		expect(group._tips[2].prev).toBe('T02');
		expect(group._tips[2].id).toBe('T03');
		expect(group._tips[2].next).toBe('T01');
	});
});
