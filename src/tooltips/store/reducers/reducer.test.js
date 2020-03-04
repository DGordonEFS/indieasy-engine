import reducer, { initialState } from './reducer';

import { actions } from '../actions';

const expectedInitialState = {
	currentToolTip: null,
};

const r = reducer.bind(null, 'test');

describe('ToolTips reducer', () => {
	test('initial state', () => {
		expect(initialState).toEqual(expectedInitialState);
	});

	test('show', () => {
		const tip = { x: 5, y: 5, data: {} };
		const action = actions.show('test', tip);
		const expectedAfterState = { ...expectedInitialState, currentToolTip: tip };
		expect(r(expectedInitialState, action)).toEqual(expectedAfterState);
	});

	test('hide', () => {
		const tip = { x: 5, y: 5, data: {} };
		const action = actions.hide('test');
		const expectedAfterState = { ...expectedInitialState, currentToolTip: tip };
		expect(r(expectedAfterState, action)).toEqual(expectedInitialState);
	});
});
