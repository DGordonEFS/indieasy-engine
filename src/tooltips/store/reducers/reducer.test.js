import reducer, { initialState } from './reducer';

import { actions } from '../actions';

const expectedInitialState = {
	currentToolTip: null,
};

describe('ToolTips reducer', () => {
	test('initial state', () => {
		expect(initialState).toEqual(expectedInitialState);
	});

	test('show', () => {
		const tip = { x: 5, y: 5, data: {} };
		const action = actions.show(tip);
		const expectedAfterState = { ...expectedInitialState, currentToolTip: tip };
		expect(reducer(expectedInitialState, action)).toEqual(expectedAfterState);
	});

	test('hide', () => {
		const tip = { x: 5, y: 5, data: {} };
		const action = actions.hide();
		const expectedAfterState = { ...expectedInitialState, currentToolTip: tip };
		expect(reducer(expectedAfterState, action)).toEqual(expectedInitialState);
	});
});
