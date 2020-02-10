import * as actionTypes from '../actions/actionTypes';

const initialState = {
	currentTip: null,
};

const setCurrentTip = (state, action) => {
	return { ...state, currentTip: action.value };
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_CURRENT_TIP:
			return setCurrentTip(state, action);
		default:
			return state;
	}
};

export default reducer;
