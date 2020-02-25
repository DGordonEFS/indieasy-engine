import { addReducer, createStore, getStore } from 'store';

const initialState = {
	value: 5,
};

addReducer('test', (state = initialState, action) => state);
const store = createStore();

describe('store', () => {
	test('createStore', () => {
		expect(store).not.toBeNull();
	});

	test('getStore', () => {
		expect(getStore()).not.toBeNull();
		expect(getStore()).toBe(store);
	});

	test('addReducer', () => {
		expect(getStore().getState().test).toBe(initialState);
	});
});
