import {
	GET_ANUNCIO,
	LOGIN,
	LOGOUT,
	RELOAD_USER,
	SAVE_TEACHERS,
	SIGN_UP,
	CLEAN_TEACHER
} from '../actions/types';

let initialState = { allTeachers: {}, user: {}, teacherDetail: {} };

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
				allTeachers: { ...state.allTeachers, [payload.subject]: payload.data },
			};

		case GET_ANUNCIO: {
			const teacherFiltered = state.allTeachers.filter(
				(teacher) => teacher.id === payload[0].id,
			);
			return {
				...state,
				teacherDetail: {
					...teacherFiltered[0],
                    anuncios: payload[0]

				},
			};
		}
		case CLEAN_TEACHER:{
			return{
				...state,
				teacherDetail:{}
			}
		}
		default:
			return state;
	}
}

export default rootReducer;
