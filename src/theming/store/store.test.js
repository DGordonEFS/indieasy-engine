import './store';
import { createStore } from 'store';

const store = createStore();

const expectedInitialState = {
	currentTheme: null,
};

describe('ToolTips store', () => {
	test('initial state', () => {
		expect(store.getState().theming).toEqual(expectedInitialState);
	});
});
