import * as actionTypes from './actionTypes';

export const show = (managerId, toolTip) => {
	return {
		type: actionTypes.SHOW,
		managerId: managerId,
		value: toolTip,
	};
};

export const hide = (managerId) => {
	return {
		type: actionTypes.HIDE,
		managerId: managerId,
	};
};
