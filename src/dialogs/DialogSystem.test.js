import DialogManager from './DialogManager';
import manager, { system } from './DialogSystem';
import reducer from './store/reducers';
import { createStore, getStore } from 'store';

describe('System', () => {
	test('create system', () => {
		expect(system._stateName).toBe('dialogs');
		expect(system._reducer).toBe(reducer);
		expect(system._managerClass).toBe(DialogManager);
	});

	test('createManager', () => {
		const m2 = system.createManager('m2');

		expect(manager instanceof DialogManager).toBe(true);
		expect(manager.id).toBe('_DEFAULT');

		expect(m2 instanceof DialogManager).toBe(true);
		expect(m2.id).toBe('M2');
	});

	test('getManager', () => {
		expect(system.getManager('_default')).toBe(manager);
	});

	test('registerReducer', () => {
		createStore();
		expect(manager.getState()).toBe(
			getStore().getState()['dialogs']['_default']
		);
		expect(system.getManager('m2').getState()).toBe(
			getStore().getState()['dialogs']['m2']
		);
	});
});
