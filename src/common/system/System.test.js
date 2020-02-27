import System from './System';
import { createStore, getStore } from 'store';

export const initialState = {
	test: null,
	managerId: null,
};

const reducer = (managerId, state = initialState, action) => ({
	...state,
	managerId: managerId,
});

class Manager {}

describe('System', () => {
	test('create system', () => {
		const system = new System('test', reducer, Manager, false);
		expect(system._stateName).toBe('test');
		expect(system._reducer).toBe(reducer);
		expect(system._managerClass).toBe(Manager);
	});

	test('createManager', () => {
		const system = new System('test', reducer, Manager, false);
		const manager = system.createManager('_default');
		expect(manager instanceof Manager).toBe(true);
		expect(manager.id).toBe('_DEFAULT');
		expect(manager.reducer(initialState, null)).toEqual({
			test: null,
			managerId: '_DEFAULT',
		});
	});

	test('registerReducer', () => {
		const system = new System('test', reducer, Manager);
		const m1 = system.createManager('_default');
		const m2 = system.createManager('apple');
		createStore();
		expect(m1.getState()).toBe(getStore().getState()['test']['_default']);
		expect(m2.getState()).toBe(getStore().getState()['test']['apple']);
	});

	test('getManager', () => {
		const system = new System('test', reducer, Manager, false);
		const manager = system.createManager('_default');
		expect(system.getManager('_default')).toBe(manager);
	});

	test('getManagers', () => {
		const system = new System('test', reducer, Manager, false);
		const m1 = system.createManager('_default');
		const m2 = system.createManager('apple');
		expect(system.getManagers()).toEqual([m1, m2]);
	});

	test('getManagerIds', () => {
		const system = new System('test', reducer, Manager, false);
		const m1 = system.createManager('_default');
		const m2 = system.createManager('apple');
		expect(system.getManagerIds()).toEqual([m1.id, m2.id]);
	});
});
