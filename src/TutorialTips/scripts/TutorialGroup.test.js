import { TutorialGroup, TutorialTip } from 'TutorialTips';

describe('TutorialGroup', () => {
	test('addTip works', () => {
		const group = new TutorialGroup();
		group.addTip(new TutorialTip('t01'));
		group.addTip(new TutorialTip('t02'));

		expect(TutorialTipManager._tips.length).toBe(2);
		expect(TutorialTipManager._tips[0].next).toBe('t02');
		expect(TutorialTipManager._tips[0].prev).toBe(null);
		expect(TutorialTipManager._tips[1].next).toBe(null);
		expect(TutorialTipManager._tips[1].prev).toBe('t01');
	});

	test('getTips works', () => {
		const group = new TutorialGroup();
		group.addTip(new TutorialTip('t01'));
		group.addTip(new TutorialTip('t02'));

		expect(TutorialTipManager.getTips().length).toBe(2);
		expect(TutorialTipManager.getTips()[0].next).toBe('t02');
		expect(TutorialTipManager.getTips()[1].prev).toBe('t01');
	});
});
