import './store';
import { createStore } from 'store';

const store = createStore();

const expectedInitialState = {
	currentToolTip: null,
};

describe('ToolTips store', () => {
	test('initial state', () => {
		expect(store.getState().tooltips).toEqual(expectedInitialState);
	});
});
