import * as actionTypes from './actionTypes';
import * as actions from './actions';

describe('ToolTips actions', () => {
	test('show', () => {
		const tip = { x: 5, y: 5, data: {} };
		expect(actions.show(tip)).toEqual({
			type: actionTypes.SHOW,
			value: tip,
		});
	});
	test('hide', () => {
		expect(actions.hide()).toEqual({
			type: actionTypes.HIDE,
			value: undefined,
		});
	});
});
