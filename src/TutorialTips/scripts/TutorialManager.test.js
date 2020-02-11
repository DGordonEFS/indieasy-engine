import { createStore } from 'redux';
import tutorialTips, {
	TutorialTip,
	TutorialManager,
	TutorialGroup,
} from 'TutorialTips';

const rootReducer = tutorialTips.addReducer({});
const store = createStore(rootReducer);
tutorialTips.setStore(store);

describe('TutorialTips TutorialManager', () => {
	test('TutorialManager()', () => {
		expect(TutorialManager().constructor.name).toBe('TutorialManager');
	});

	test('add tip and get tip', () => {
		const tip = new TutorialTip('t01', 'popup', 'Title', 'Text');

		const tutorialManager = TutorialManager();
		tutorialManager.addTip(tip);

		expect(tutorialManager.getTip(tip.id)).toBe(tip);
		expect(tutorialManager.getTip('T01')).toBe(tip);
	});

	test('remove tip', () => {
		const tip = new TutorialTip('t01', 'popup', 'Title', 'Text');

		const tutorialManager = TutorialManager();
		tutorialManager.addTip(tip);
		tutorialManager.removeTip(tip.id);

		expect(tutorialManager.getTip(tip.id)).toBe(undefined);
	});

	test('clear', () => {
		const tip = new TutorialTip('t01', 'popup', 'Title', 'Text');

		const tutorialManager = TutorialManager();
		tutorialManager.addTip(tip);
		tutorialManager.clear();

		expect(tutorialManager.getTips().length).toBe(0);
	});

	test('getTips', () => {
		const tutorialManager = TutorialManager();
		tutorialManager.clear();
		tutorialManager.addTip(new TutorialTip('t01', 'popup', 'Title', 'Text'));
		tutorialManager.addTip(new TutorialTip('t02', 'popup', 'Title', 'Text'));
		tutorialManager.addTip(new TutorialTip('t03', 'popup', 'Title', 'Text'));

		expect(tutorialManager.getTips().length).toBe(3);
	});

	test('getWatchedTips', () => {
		let tip = new TutorialTip('t01', 'popup', 'Title', 'Text');
		const tutorialManager = TutorialManager();
		tutorialManager.clear();
		tutorialManager.addTip(tip);
		expect(tutorialManager.getWatchedTips().length).toBe(0);

		tip = new TutorialTip('t02', 'popup', 'Title', 'Text');
		tip.onStoreChange = () => {};
		tutorialManager.addTip(tip);
		expect(tutorialManager.getWatchedTips().length).toBe(1);
	});

	test('add group', () => {
		const group = new TutorialGroup();
		group.addTip(new TutorialTip('t01', 'popup', 'Title', 'Text'));
		group.addTip(new TutorialTip('t02', 'popup', 'Title', 'Text'));
		group.addTip(new TutorialTip('t03', 'popup', 'Title', 'Text'));

		const tutorialManager = TutorialManager();
		tutorialManager.clear();
		tutorialManager.addGroup(group);

		expect(tutorialManager.getTip('t01')).toBe(group.getTips()[0]);
		expect(tutorialManager.getTip('t02')).toBe(group.getTips()[1]);
		expect(tutorialManager.getTip('t03')).toBe(group.getTips()[2]);
		expect(tutorialManager.getTips().length).toBe(3);
	});

	test('setCurrentTip and getCurrentTip', () => {
		const tip = new TutorialTip('t01', 'popup', 'Title', 'Text');

		const tutorialManager = TutorialManager();
		tutorialManager.clear();
		tutorialManager.addTip(tip);

		tutorialManager.setCurrentTip(tip.id);

		expect(tutorialManager.getCurrentTip().id).toBe(tip.id);
	});

	test('next tip with id string', () => {
		const group = new TutorialGroup('g01', true);
		group.addTip(new TutorialTip('t01', 'popup', 'Title', 'Text'));
		group.addTip(new TutorialTip('t02', 'popup', 'Title', 'Text'));
		group.addTip(new TutorialTip('t03', 'popup', 'Title', 'Text'));

		const tutorialManager = TutorialManager();
		tutorialManager.clear();
		tutorialManager.addGroup(group);
		tutorialManager.setCurrentTip('T01');

		expect(tutorialManager.getCurrentTip().id).toBe('T01');
		tutorialManager.nextTip();
		expect(tutorialManager.getCurrentTip().id).toBe('T02');
		tutorialManager.nextTip();
		expect(tutorialManager.getCurrentTip().id).toBe('T03');
		tutorialManager.nextTip();
		expect(tutorialManager.getCurrentTip().id).toBe('T01');
	});

	test('next tip with id function', () => {
		const tutorialManager = TutorialManager();
		tutorialManager.clear();
		let tip = tutorialManager.addTip(
			new TutorialTip('t01', 'popup', 'Title', 'Text')
		);
		tip.next = () => 't02';
		tip = tutorialManager.addTip(
			new TutorialTip('t02', 'popup', 'Title', 'Text')
		);
		tip.next = () => 't03';

		tutorialManager.setCurrentTip('T01');

		expect(tutorialManager.getCurrentTip().id).toBe('T01');
		tutorialManager.nextTip();
		expect(tutorialManager.getCurrentTip().id).toBe('T02');
		try {
			tutorialManager.nextTip();
		} catch (error) {
			expect(error).toBe(`TutorialManager.setCurrentTip -- invalid tip id T03`);
		}
	});

	test('prev tip with id string', () => {
		const group = new TutorialGroup('g01', true);
		group.addTip(new TutorialTip('t01', 'popup', 'Title', 'Text'));
		group.addTip(new TutorialTip('t02', 'popup', 'Title', 'Text'));
		group.addTip(new TutorialTip('t03', 'popup', 'Title', 'Text'));

		const tutorialManager = TutorialManager();
		tutorialManager.clear();
		tutorialManager.addGroup(group);
		tutorialManager.setCurrentTip('T03');

		expect(tutorialManager.getCurrentTip().id).toBe('T03');
		tutorialManager.prevTip();
		expect(tutorialManager.getCurrentTip().id).toBe('T02');
		tutorialManager.prevTip();
		expect(tutorialManager.getCurrentTip().id).toBe('T01');
		tutorialManager.prevTip();
		expect(tutorialManager.getCurrentTip().id).toBe('T03');
	});

	test('prev tip with id function', () => {
		const tutorialManager = TutorialManager();
		tutorialManager.clear();
		let tip = tutorialManager.addTip(
			new TutorialTip('t02', 'popup', 'Title', 'Text')
		);
		tip.prev = () => 't01';
		tip = tutorialManager.addTip(
			new TutorialTip('t01', 'popup', 'Title', 'Text')
		);
		tip.prev = () => 't03';

		tutorialManager.setCurrentTip('T02');

		expect(tutorialManager.getCurrentTip().id).toBe('T02');
		tutorialManager.prevTip();
		expect(tutorialManager.getCurrentTip().id).toBe('T01');
		try {
			tutorialManager.prevTip();
		} catch (error) {
			expect(error).toBe(`TutorialManager.setCurrentTip -- invalid tip id T03`);
		}
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

	test('onStoreChange with active manager', (done) => {
		const tutorialManager = TutorialManager();
		tutorialManager.clear();
		tutorialTips.setActiveManager(tutorialManager.id);

		let tip = tutorialManager.addTip(
			new TutorialTip('t01', 'popup', 'Title', 'Text')
		);
		tip.watchStore = false;
		tip.onStoreChange = () => {
			throw 'TutorialTip.onStoreChange should not have triggered for tip with watchStore set to false!';
		};

		tip = tutorialManager.addTip(
			new TutorialTip('t02', 'popup', 'Title', 'Text')
		);
		tip.watchStore = true;
		tip.onStoreChange = () => {
			done();
		};

		tutorialManager.addTip(new TutorialTip('t03', 'popup', 'Title', 'Text'));
		tutorialManager.setCurrentTip('T03');
	});

	test('onStoreChange with inactive manager', () => {
		const tutorialManager = TutorialManager();
		tutorialManager.clear();
		tutorialTips.setActiveManager(tutorialManager.id);

		let tip = tutorialManager.addTip(
			new TutorialTip('t01', 'popup', 'Title', 'Text')
		);
		tip.onStoreChange = () => {
			throw 'TutorialTip.onStoreChange should not have triggered for tip in inactive TutorialManager!';
		};

		tutorialManager.addTip(new TutorialTip('t03', 'popup', 'Title', 'Text'));

		const manager = tutorialTips.createManager('m01');
		manager.addTip(new TutorialTip('t100', 'popup', 'Title', 'Text'));
		tutorialTips.setActiveManager(manager.id);
		manager.setCurrentTip('T100');

		tutorialManager.setCurrentTip('T03');
	});

	test('onStoreChange set current TutorialTip', (done) => {
		const tutorialManager = TutorialManager();
		tutorialManager.clear();
		tutorialTips.setActiveManager(tutorialManager.id);

		let tip = tutorialManager.addTip(
			new TutorialTip('t01', 'popup', 'Title', 'Text')
		);
		tip.watchStore = true;
		tip.onStoreChange = (state) => {
			tip.watchStore = false;
			expect(tutorialManager.getCurrentTip().id).toBe('T03');
			tutorialManager.setCurrentTip(tip.id);
			expect(tutorialManager.getCurrentTip().id).toBe(tip.id);
			expect(tutorialManager.getCurrentTip().id).not.toBe('T03');
			done();
		};

		tutorialManager.addTip(new TutorialTip('t03', 'popup', 'Title', 'Text'));
		tutorialManager.setCurrentTip('T03');
	});
});
