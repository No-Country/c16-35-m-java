import { LOGIN, LOGOUT, SIGN_UP } from '../actions/types';

let initialState = { allTeachers: [], user: {} };

function rootReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SIGN_UP:
		case LOGIN:
		case LOGOUT:
			return {
				...state,
				user: payload,
			};

		default:
			return state;
	}
}

export default rootReducer;
