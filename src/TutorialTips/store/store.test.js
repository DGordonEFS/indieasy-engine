import { createStore } from 'store';
import './store';

import manager from '../scripts/TutorialSystem';

const expectedInitialState = {
	currentTip: null,
	watchTips: {},
};

const store = createStore();

describe('TutorialTips store', () => {
	test('initial state', () => {
		const initialState = manager.getState();
		expect(initialState).toEqual(expectedInitialState);
	});
});
