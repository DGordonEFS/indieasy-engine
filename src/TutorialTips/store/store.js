import { combineReducers } from 'redux';

import reducer from './reducers/reducer';

let _store;

export const getStore = () => _store;

export const setStore = (store) => {
	_store = store;
};

export const addReducer = (reducers) => {
	return combineReducers({ ...reducers, tutorialTips: reducer });
};
