import {combineReducer } from 'redux';

import reducer from './reducers/reducer';

const _store;

export const getStore = () => _store;

export const setStore = (store) => {
  _store = store;
}

export const addReducer = reducers => {
  return combineReducer({...reducers, tutorialTips:reducer});
}