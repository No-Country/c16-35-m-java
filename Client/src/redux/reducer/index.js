import { LOGIN, LOGOUT, RELOAD_USER, SIGN_UP } from '../actions/types';

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

		default:
			return state;
	}
}

export default rootReducer;
