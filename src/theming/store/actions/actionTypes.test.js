import * as actionTypes from './actionTypes';

describe('Theming actionTypes', () => {
	test('* as actionTypes', () => {
		expect(actionTypes).toEqual({
			SET_THEME: 'setTheme',
		});
	});
});
