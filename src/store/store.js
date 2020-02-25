import { createStore as createBaseStore, combineReducers } from 'redux';

let store;
const reducers = {};

export const addReducer = (id, reducer) => {
  reducers[id] = reducer;
};

export const createStore = () => {
  store = createBaseStore(combineReducers(reducers));
  return store;
};

export const getStore = () => store;
