import * as actionTypes from './actionTypes';

describe('ToolTips actionTypes', () => {
	test('* as actionTypes', () => {
		expect(actionTypes).toEqual({
			SHOW: 'show',
			HIDE: 'hide',
		});
	});
});
