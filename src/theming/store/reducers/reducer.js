import { actionTypes } from '../actions';

export const initialState = {
	currentTheme: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_THEME:
			return { ...state, currentTheme: action.value };
		default:
			return state;
	}
};

export default reducer;
