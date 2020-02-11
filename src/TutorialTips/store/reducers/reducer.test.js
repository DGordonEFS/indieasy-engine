import reducer, { initialState } from './reducer';

import * as actions from '../actions/actions';

const expectedInitialState = {
	currentTip: null,
	watchTips: {},
};

describe('TutorialTips reducer', () => {
	test('initial state', () => {
		expect(initialState).toEqual(expectedInitialState);
	});

	test('setCurrentTip', () => {
		const action = actions.setCurrentTip('t01');
		const expectedAfterState = { ...expectedInitialState, currentTip: 'T01' };
		expect(reducer(expectedInitialState, action)).toEqual(expectedAfterState);
	});

	test('watchTip', () => {
		const action = actions.watchTip('t01');
		const expectedAfterState = {
			...expectedInitialState,
			watchTips: { T01: true },
		};
		expect(reducer(expectedInitialState, action)).toEqual(expectedAfterState);
	});

	test('unwatchTip', () => {
		let action = actions.watchTip('t01');
		reducer(expectedInitialState, action);
		action = actions.unwatchTip('t01');
		expect(reducer(expectedInitialState, action)).toEqual({
			...expectedInitialState,
		});
	});
});
