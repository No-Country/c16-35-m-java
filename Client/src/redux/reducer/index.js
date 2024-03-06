import {
	CLEAN_TEACHER,
	GET_ANUNCIO,
	GET_CALENDARY,
	GET_RESERVAS,
	LOGIN,
	LOGOUT,
	POST_ANUNCIO,
	RELOAD_USER,
	SAVE_TEACHERS,
	SIGN_UP,
} from '../actions/types';

let initialState = {
	allTeachers: {},
	user: {},
	teacherDetail: {},
	currentCalendary: {},
	reservas: [],
};

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

		case GET_RESERVAS:
			return {
				...state,
				reservas: payload,
			};

		case SAVE_TEACHERS:
			return {
				...state,
				allTeachers: { ...state.allTeachers, [payload.subject]: payload.data },
			};

		case GET_ANUNCIO: {
			const { profe, anuncios } = payload;
			return {
				...state,
				teacherDetail: {
					...profe,
					anuncios,
				},
			};
		}
		case POST_ANUNCIO: {
			return {
				...state,
			};
		}

		case GET_CALENDARY: {
			return {
				...state,
				currentCalendary: payload,
			};
		}

		case CLEAN_TEACHER: {
			return {
				...state,
				teacherDetail: {},
			};
		}
		default:
			return state;
	}
}

export default rootReducer;
