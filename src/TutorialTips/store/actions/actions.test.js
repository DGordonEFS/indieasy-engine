import * as actionTypes from './actionTypes';
import * as actions from './actions';

describe('TutorialTips actions', () => {
	test('setCurrentTip', () => {
		expect(actions.setCurrentTip('t01')).toEqual({
			type: actionTypes.SET_CURRENT_TIP,
			value: 'T01',
		});
	});

	test('watchTip', () => {
		expect(actions.watchTip('t01')).toEqual({
			type: actionTypes.WATCH_TIP,
			value: 'T01',
		});
	});

	test('unwatchTip', () => {
		expect(actions.unwatchTip('t01')).toEqual({
			type: actionTypes.UNWATCH_TIP,
			value: 'T01',
		});
	});
});
