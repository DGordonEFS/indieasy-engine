import * as actionTypes from './actionTypes';

export const setCurrentTip = (managerId, value) => {
	value = value ? value.toUpperCase() : value;
	return {
		type: actionTypes.SET_CURRENT_TIP,
		managerId: managerId,
		value: value,
	};
};

export const watchTip = (managerId, value) => {
	return {
		type: actionTypes.WATCH_TIP,
		managerId: managerId,
		value: value.toUpperCase(),
	};
};

export const unwatchTip = (managerId, value) => {
	return {
		type: actionTypes.UNWATCH_TIP,
		managerId: managerId,
		value: value.toUpperCase(),
	};
};
