import { createStore } from 'store';
import tutorialTips, { TutorialTip, TutorialGroup } from 'TutorialTips';

const store = createStore();

describe('TutorialTips TutorialManager', () => {
	test('add tip and get tip', () => {
		const tip = new TutorialTip('t01', 'popup', 'Title', 'Text');

		tutorialTips.manager.addTip(tip);

		expect(tutorialTips.manager.getTip(tip.id)).toBe(tip);
		expect(tutorialTips.manager.getTip('T01')).toBe(tip);
	});

	test('remove tip', () => {
		const tip = new TutorialTip('t01', 'popup', 'Title', 'Text');

		tutorialTips.manager.addTip(tip);
		tutorialTips.manager.removeTip(tip.id);

		expect(tutorialTips.manager.getTip(tip.id)).toBe(undefined);
	});

	test('clear', () => {
		const tip = new TutorialTip('t01', 'popup', 'Title', 'Text');

		tutorialTips.manager.addTip(tip);
		tutorialTips.manager.clear();

		expect(tutorialTips.manager.getTips().length).toBe(0);
	});

	test('getTips', () => {
		tutorialTips.manager.clear();
		tutorialTips.manager.addTip(
			new TutorialTip('t01', 'popup', 'Title', 'Text')
		);
		tutorialTips.manager.addTip(
			new TutorialTip('t02', 'popup', 'Title', 'Text')
		);
		tutorialTips.manager.addTip(
			new TutorialTip('t03', 'popup', 'Title', 'Text')
		);

		expect(tutorialTips.manager.getTips().length).toBe(3);
	});

	test('getWatchedTips', () => {
		let tip = new TutorialTip('t01', 'popup', 'Title', 'Text');

		tutorialTips.manager.clear();
		tutorialTips.manager.addTip(tip);
		expect(tutorialTips.manager.getWatchedTips().length).toBe(0);

		tip = new TutorialTip('t02', 'popup', 'Title', 'Text');
		tip.onStoreChange = () => {};
		tutorialTips.manager.addTip(tip);
		tutorialTips.manager.watch(tip);
		expect(tutorialTips.manager.getWatchedTips().length).toBe(1);
	});

	test('add group', () => {
		const group = new TutorialGroup();
		group.addTip(new TutorialTip('t01', 'popup', 'Title', 'Text'));
		group.addTip(new TutorialTip('t02', 'popup', 'Title', 'Text'));
		group.addTip(new TutorialTip('t03', 'popup', 'Title', 'Text'));

		tutorialTips.manager.clear();
		tutorialTips.manager.addGroup(group);

		expect(tutorialTips.manager.getTip('t01')).toBe(group.getTips()[0]);
		expect(tutorialTips.manager.getTip('t02')).toBe(group.getTips()[1]);
		expect(tutorialTips.manager.getTip('t03')).toBe(group.getTips()[2]);
		expect(tutorialTips.manager.getTips().length).toBe(3);
	});

	test('setCurrentTip and getCurrentTip', () => {
		const tip = new TutorialTip('t01', 'popup', 'Title', 'Text');

		tutorialTips.manager.clear();
		tutorialTips.manager.addTip(tip);

		tutorialTips.manager.setCurrentTip(tip.id);

		expect(tutorialTips.manager.getCurrentTip().id).toBe(tip.id);
	});

	test('next tip with id string', () => {
		const group = new TutorialGroup('g01', true);
		group.addTip(new TutorialTip('t01', 'popup', 'Title', 'Text'));
		group.addTip(new TutorialTip('t02', 'popup', 'Title', 'Text'));
		group.addTip(new TutorialTip('t03', 'popup', 'Title', 'Text'));

		tutorialTips.manager.clear();
		tutorialTips.manager.addGroup(group);
		tutorialTips.manager.setCurrentTip('T01');

		expect(tutorialTips.manager.getCurrentTip().id).toBe('T01');
		tutorialTips.manager.nextTip();
		expect(tutorialTips.manager.getCurrentTip().id).toBe('T02');
		tutorialTips.manager.nextTip();
		expect(tutorialTips.manager.getCurrentTip().id).toBe('T03');
		tutorialTips.manager.nextTip();
		expect(tutorialTips.manager.getCurrentTip().id).toBe('T01');
	});

	test('next tip with id function', () => {
		tutorialTips.manager.clear();
		let tip = tutorialTips.manager.addTip(
			new TutorialTip('t01', 'popup', 'Title', 'Text')
		);
		tip.next = () => 't02';
		tip = tutorialTips.manager.addTip(
			new TutorialTip('t02', 'popup', 'Title', 'Text')
		);
		tip.next = () => 't03';

		tutorialTips.manager.setCurrentTip('T01');

		expect(tutorialTips.manager.getCurrentTip().id).toBe('T01');
		tutorialTips.manager.nextTip();
		expect(tutorialTips.manager.getCurrentTip().id).toBe('T02');
		try {
			tutorialTips.manager.nextTip();
		} catch (error) {
			expect(error).toBe(`TutorialManager.setCurrentTip -- invalid tip id T03`);
		}
	});

	test('prev tip with id string', () => {
		const group = new TutorialGroup('g01', true);
		group.addTip(new TutorialTip('t01', 'popup', 'Title', 'Text'));
		group.addTip(new TutorialTip('t02', 'popup', 'Title', 'Text'));
		group.addTip(new TutorialTip('t03', 'popup', 'Title', 'Text'));

		tutorialTips.manager.clear();
		tutorialTips.manager.addGroup(group);
		tutorialTips.manager.setCurrentTip('T03');

		expect(tutorialTips.manager.getCurrentTip().id).toBe('T03');
		tutorialTips.manager.prevTip();
		expect(tutorialTips.manager.getCurrentTip().id).toBe('T02');
		tutorialTips.manager.prevTip();
		expect(tutorialTips.manager.getCurrentTip().id).toBe('T01');
		tutorialTips.manager.prevTip();
		expect(tutorialTips.manager.getCurrentTip().id).toBe('T03');
	});

	test('prev tip with id function', () => {
		tutorialTips.manager.clear();
		let tip = tutorialTips.manager.addTip(
			new TutorialTip('t02', 'popup', 'Title', 'Text')
		);
		tip.prev = () => 't01';
		tip = tutorialTips.manager.addTip(
			new TutorialTip('t01', 'popup', 'Title', 'Text')
		);
		tip.prev = () => 't03';

		tutorialTips.manager.setCurrentTip('T02');

		expect(tutorialTips.manager.getCurrentTip().id).toBe('T02');
		tutorialTips.manager.prevTip();
		expect(tutorialTips.manager.getCurrentTip().id).toBe('T01');
		try {
			tutorialTips.manager.prevTip();
		} catch (error) {
			expect(error).toBe(`TutorialManager.setCurrentTip -- invalid tip id T03`);
		}
	});

	test('onStoreChange', (done) => {
		tutorialTips.manager.clear();

		let tip = tutorialTips.manager.addTip(
			new TutorialTip('t01', 'popup', 'Title', 'Text')
		);
		tip.onStoreChange = () => {
			throw 'TutorialTip.onStoreChange should not have triggered for tip with watchStore set to false!';
		};

		tip = tutorialTips.manager.addTip(
			new TutorialTip('t02', 'popup', 'Title', 'Text')
		);
		tutorialTips.manager.watch(tip);
		tip.onStoreChange = () => {
			done();
		};

		tutorialTips.manager.addTip(
			new TutorialTip('t03', 'popup', 'Title', 'Text')
		);
		tutorialTips.manager.setCurrentTip('T03');
	});

	test('onStoreChange set current TutorialTip', (done) => {
		tutorialTips.manager.clear();

		let tip = tutorialTips.manager.addTip(
			new TutorialTip('t01', 'popup', 'Title', 'Text')
		);
		tutorialTips.manager.watch(tip);
		tip.onStoreChange = (state) => {
			tutorialTips.manager.unwatch(tip);
			expect(tutorialTips.manager.getCurrentTip().id).toBe('T03');
			tutorialTips.manager.setCurrentTip(tip.id);
			expect(tutorialTips.manager.getCurrentTip().id).toBe(tip.id);
			expect(tutorialTips.manager.getCurrentTip().id).not.toBe('T03');
			done();
		};

		tutorialTips.manager.addTip(
			new TutorialTip('t03', 'popup', 'Title', 'Text')
		);
		tutorialTips.manager.setCurrentTip('T03');
	});
});
