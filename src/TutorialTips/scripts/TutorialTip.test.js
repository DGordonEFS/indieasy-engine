import { TutorialTip } from 'TutorialTips';

describe('TutorialTip', () => {
	test('it has a working constructor', () => {
		const tip = new TutorialTip(
			't02',
			'popup',
			'Title',
			'Text',
			't03',
			't01',
			() => true
		);

		expect(TutorialTipManager.getTip(tip.id)).toBe('t02');
		expect(TutorialTipManager.getTip(tip.type)).toBe('popup');
		expect(TutorialTipManager.getTip(tip.title)).toBe('Title');
		expect(TutorialTipManager.getTip(tip.text)).toBe('Text');
		expect(TutorialTipManager.getTip(tip.next)).toBe('t03');
		expect(TutorialTipManager.getTip(tip.prev)).toBe('t01');
		expect(TutorialTipManager.getTip(tip.onStoreChange())).toBe(true);
	});
});
