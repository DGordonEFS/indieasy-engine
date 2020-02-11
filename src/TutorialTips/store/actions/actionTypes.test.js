import * as actionTypes from './actionTypes';

describe('TutorialTips actionTypes', () => {
	test('* as actionTypes', () => {
		expect(actionTypes).toEqual({
			SET_CURRENT_TIP: 'setCurrentTip',
			WATCH_TIP: 'watchTip',
			UNWATCH_TIP: 'unwatchTip',
		});
	});
});
