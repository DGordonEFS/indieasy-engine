import reducer, { initialState } from './reducer';

import * as actions from '../actions/actions';

const expectedInitialState = {
	currentTip: null,
	watchTips: {},
};

const r = reducer.bind(null, 'test');

describe('TutorialTips reducer', () => {
	test('initial state', () => {
		expect(initialState).toEqual(expectedInitialState);
	});

	test('setCurrentTip', () => {
		const action = actions.setCurrentTip('test', 't01');
		const expectedAfterState = {
			...expectedInitialState,
			currentTip: 'T01',
		};
		expect(r(expectedInitialState, action)).toEqual(expectedAfterState);
	});

	test('watchTip', () => {
		const action = actions.watchTip('test', 't01');
		const expectedAfterState = {
			...expectedInitialState,
			watchTips: { T01: true },
		};
		expect(r(expectedInitialState, action)).toEqual(expectedAfterState);
	});

	test('unwatchTip', () => {
		let action = actions.watchTip('test', 't01');
		r(expectedInitialState, action);
		action = actions.unwatchTip('test', 't01');
		expect(r(expectedInitialState, action)).toEqual({
			...expectedInitialState,
		});
	});
});
