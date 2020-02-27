import * as actionTypes from './actionTypes';
import * as actions from './actions';

describe('TutorialTips actions', () => {
	test('setCurrentTip', () => {
		expect(actions.setCurrentTip('test', 't01')).toEqual({
			type: actionTypes.SET_CURRENT_TIP,
			value: 'T01',
			managerId: 'test',
		});
	});

	test('watchTip', () => {
		expect(actions.watchTip('test', 't01')).toEqual({
			type: actionTypes.WATCH_TIP,
			value: 'T01',
			managerId: 'test',
		});
	});

	test('unwatchTip', () => {
		expect(actions.unwatchTip('test', 't01')).toEqual({
			type: actionTypes.UNWATCH_TIP,
			value: 'T01',
			managerId: 'test',
		});
	});
});
