import {
	LOGIN,
	LOGOUT,
	RELOAD_USER,
	SAVE_TEACHERS,
	SIGN_UP,
} from '../actions/types';

let initialState = { allTeachers: [], user: {} };

function rootReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SIGN_UP:
		case LOGIN:
		case LOGOUT:
		case RELOAD_USER:
			return {
				...state,
				user: payload,
			};

		case SAVE_TEACHERS:
			return {
				...state,
				allTeachers: payload,
			};

		default:
			return state;
	}
}

export default rootReducer;
