import { createStore as createBaseStore, combineReducers } from 'redux';

const reducers = {};
let store;
let storeCreatedListeners = [];

export const addReducer = (id, reducer) => {
	reducers[id] = reducer;
};

export const onStoreCreated = (callback) => {
	storeCreatedListeners.push(callback);
};

export const createStore = () => {
	store = createBaseStore(combineReducers(reducers));
	storeCreatedListeners.forEach((listener) => listener());
	storeCreatedListeners = [];
	return store;
};

export const getStore = () => store;
