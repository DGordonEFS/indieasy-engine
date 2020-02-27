import TutorialManager from './TutorialManager';
import { TutorialTip } from 'TutorialTips';
import manager, { system } from './TutorialSystem';
import reducer, { initialState } from '../store/reducers';
import { createStore, getStore } from 'store';

describe('TutorialTips TutorialSystem', () => {
	test('create system', () => {
		expect(system._stateName).toBe('tutorialtips');
		expect(system._reducer).toBe(reducer);
		expect(system._managerClass).toBe(TutorialManager);
	});

	test('createManager', () => {
		const m2 = system.createManager('m2');

		createStore();

		expect(manager instanceof TutorialManager).toBe(true);
		expect(manager.id).toBe('_DEFAULT');

		expect(m2 instanceof TutorialManager).toBe(true);
		expect(m2.id).toBe('M2');
	});

	test('getManager', () => {
		expect(system.getManager('_default')).toBe(manager);
	});

	test('registerReducer', () => {
		expect(manager.getState()).toBe(
			getStore().getState()['tutorialtips']['_default']
		);
		expect(system.getManager('m2').getState()).toBe(
			getStore().getState()['tutorialtips']['m2']
		);
		expect(manager.getState()).toEqual(initialState);
		expect(system.getManager('m2').getState()).toEqual(initialState);
	});

	test('multiple managers', () => {
		manager.addTip(new TutorialTip('t01', 'popup', 'Title', 'Text'));
		manager.addTip(new TutorialTip('t02', 'popup', 'Title', 'Text'));

		system.getManager('m2').addTip(new TutorialTip('t01', 'tip', 'abc', 'def'));

		manager.setCurrentTip('t02');
		system.getManager('m2').setCurrentTip('t01');

		expect(manager.getCurrentTip()).toBe(manager.getTip('t02'));
		expect(system.getManager('m2').getCurrentTip()).toBe(
			system.getManager('m2').getTip('t01')
		);
	});
});
