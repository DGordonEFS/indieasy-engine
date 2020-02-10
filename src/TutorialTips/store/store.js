import reducer from './reducers/reducer';

const _store;

export const getStore = () => _store;

export const initStore = (store, combineReducer) => {
  _store = store;
  combineReducer.tutorialTips = reducer;
}