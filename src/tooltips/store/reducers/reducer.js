import { actionTypes } from '../actions';

export const initialState = {
	currentToolTip: null,
};

const reducer = (state = initialState, action) => {
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
