import * as actionTypes from '../actions/actionTypes';

export const initialState = {
	currentTip: null,
	watchTips: {},
};

const setCurrentTip = (state, action) => {
	return { ...state, currentTip: action.value };
};

const watchTip = (state, action) => {
	const watchTips = state.watchTips;
	watchTips[action.value] = true;
	return { ...state, watchTips: watchTips };
};

const unwatchTip = (state, action) => {
	const watchTips = state.watchTips;
	delete watchTips[action.value];
	return { ...state, watchTips: watchTips };
};

const reducer = (managerId, state = initialState, action) => {
	if (!action || managerId != action.managerId) return state;

	switch (action.type) {
		case actionTypes.SET_CURRENT_TIP:
			return setCurrentTip(state, action);
		case actionTypes.WATCH_TIP:
			return watchTip(state, action);
		case actionTypes.UNWATCH_TIP:
			return unwatchTip(state, action);
		default:
			return state;
	}
};

export default reducer;
