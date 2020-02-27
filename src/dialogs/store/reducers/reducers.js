import { actionTypes } from '../actions';

export const initialState = {
	currentDialog: null,
	managerId: null,
};

const reducer = (managerId, state = initialState, action) => {
	if (!action || managerId != action.managerId) return state;

	switch (action.type) {
		case actionTypes.SET_DIALOG:
			return { ...state, currentDialog: action.value };
		default:
			return state;
	}
};

export default reducer;
