import './store';
import { createStore } from 'store';

import manager from '../ToolTipSystem';

const store = createStore();

const expectedInitialState = {
	currentToolTip: null,
};

describe('ToolTips store', () => {
	test('initial state', () => {
		const initialState = manager.getState();
		expect(initialState).toEqual(expectedInitialState);
	});
});
