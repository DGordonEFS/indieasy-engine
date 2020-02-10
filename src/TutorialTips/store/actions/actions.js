import * as actionTypes from './actionTypes';

export const setCurrentTip = (value) => {
	return { type: actionTypes.SET_CURRENT_TIP, value: value };
};
