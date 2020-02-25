import { createStore as createBaseStore, combineReducers } from 'redux';

const reducers = {};
let store;

export const addReducer = (id, reducer) => {
	reducers[id] = reducer;
};

export const createStore = () => {
	store = createBaseStore(combineReducers(reducers));
	return store;
};

export const getStore = () => store;
