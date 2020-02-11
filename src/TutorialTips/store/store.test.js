import { createStore } from 'redux';
import { setStore, getStore, addReducer } from './store';
import { initialState } from './reducers/reducer';

describe('TutorialTips store', () => {
	test('set and get store', () => {
		const reducer = (state = {}, action) => state;
		const store = createStore(reducer);
		setStore(store);
		expect(getStore()).toBe(store);
	});

	test('add reducer', () => {
		const rootReducer = addReducer({});
		const store = createStore(rootReducer);
		expect(store.getState().tutorialTips).toBe(initialState);
	});
});