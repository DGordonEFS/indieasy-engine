import { createStore as createBaseStore, combineReducers } from 'redux';

const reducers = {};

export const addReducer = (id, reducer) => {
	reducers[id] = reducer;
};

export const createStore = () => {
	window.store = createBaseStore(combineReducers(reducers));
	return window.store;
};

export const getStore = () => window.store;
