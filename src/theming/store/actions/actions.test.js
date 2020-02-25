import * as actionTypes from './actionTypes';
import * as actions from './actions';

describe('Theming actions', () => {
	test('setTheme', () => {
		expect(actions.setTheme('test')).toEqual({
			type: actionTypes.SET_THEME,
			value: 'test',
		});
	});
});
