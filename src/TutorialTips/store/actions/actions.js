import * as actionTypes from './actionTypes';

export const setCurrentTip = (value) => {
	return { type: actionTypes.SET_CURRENT_TIP, value: value.toUpperCase() };
};

export const watchTip = (value) => {
	return { type: actionTypes.WATCH_TIP, value: value.toUpperCase() };
};

export const unwatchTip = (value) => {
	return { type: actionTypes.UNWATCH_TIP, value: value.toUpperCase() };
};
