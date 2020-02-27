import * as actionTypes from './actionTypes';

export const setDialog = (managerId, dialog) => {
	return {
		type: actionTypes.SET_DIALOG,
		value: dialog,
	};
};
