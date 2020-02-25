import reducer, { initialState } from './reducer';

import { actions } from '../actions';

const expectedInitialState = {
	currentTheme: null,
};

describe('Theming reducer', () => {
	test('initial state', () => {
		expect(initialState).toEqual(expectedInitialState);
	});

	test('setTheme', () => {
		const themeId = 'test';
		const action = actions.setTheme(themeId);
		const expectedAfterState = {
			...expectedInitialState,
			currentTheme: themeId,
		};
		expect(reducer(expectedInitialState, action)).toEqual(expectedAfterState);
	});
});
