import { LOGIN, SIGN_UP } from '../actions/types';

let initialState = { allUsers: [], user: {} };

function rootReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case SIGN_UP:
			return {
				...state,
			};

		case LOGIN:
			return {
				...state,
				user: payload,
			};

		default:
			return state;
	}
}

export default rootReducer;
