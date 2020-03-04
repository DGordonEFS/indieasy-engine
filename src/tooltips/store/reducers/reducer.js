import { actionTypes } from '../actions';

export const initialState = {
	currentToolTip: null,
};

const reducer = (managerId, state = initialState, action) => {
	if (!action || managerId != action.managerId) return state;

	switch (action.type) {
		case actionTypes.SHOW:
			return { ...state, currentToolTip: action.value };
		case actionTypes.HIDE:
			return { ...state, currentToolTip: null };
		default:
			return state;
	}
};

export default reducer;
