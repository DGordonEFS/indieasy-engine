import { createStore as createBaseStore, combineReducers } from 'redux';

const reducers = {};
let store;
let storePreCreatedListeners = [];
let storeCreatedListeners = [];

export const addReducer = (id, reducer) => {
	reducers[id] = reducer;
};

export const onPreStoreCreated = (callback) => {
	storePreCreatedListeners.push(callback);
};

export const onStoreCreated = (callback) => {
	storeCreatedListeners.push(callback);
};

export const createStore = () => {
	storePreCreatedListeners.forEach((listener) => listener());
	storePreCreatedListeners = [];
	store = createBaseStore(combineReducers(reducers));
	storeCreatedListeners.forEach((listener) => listener());
	storeCreatedListeners = [];
	return store;
};

export const getStore = () => store;
