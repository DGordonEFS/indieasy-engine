import * as actionTypes from './actionTypes';
import * as actions from './actions';

describe('ToolTips actions', () => {
	test('show', () => {
		const tip = { x: 5, y: 5, data: {} };
		expect(actions.show('test', tip)).toEqual({
			type: actionTypes.SHOW,
			value: tip,
			managerId: 'test',
		});
	});
	test('hide', () => {
		expect(actions.hide('test')).toEqual({
			type: actionTypes.HIDE,
			value: undefined,
			managerId: 'test',
		});
	});
});
