import { createStore } from 'store';
import './store';

const expectedInitialState = {
	currentTip: null,
	watchTips: {},
};

const store = createStore();

describe('TutorialTips store', () => {
	test('initial state', () => {
		const initialState = store.getState().tutorialtips;
		expect(initialState).toEqual(expectedInitialState);
	});
});
