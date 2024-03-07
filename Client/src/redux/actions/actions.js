import Educaflex from '../../utils/NetworkingUtils';
import {
	getLoggedInUser,
	handleUserLogin,
	handleUserLogout,
	handleUserSignUp,
} from '../../utils/UserUtils';
import {
	CLEAN_CALENDARY,
	CLEAN_RESERVAS,
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
} from './types';

export function cleanReservas() {
	return function (dispatch) {
		return dispatch({
			type: CLEAN_RESERVAS,
		});
	};
}

export function cleanCalendary() {
	return function (dispatch) {
		return dispatch({
			type: CLEAN_CALENDARY,
		});
	};
}

export function getReservas(idCalendary) {
	return async function (dispatch) {
		try {
			const { data } = await Educaflex.get(
				`/api/reservation/calendary/${idCalendary}`,
			);
			return dispatch({
				type: GET_RESERVAS,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getCalendary(id) {
	return async function (dispatch) {
		try {
			const { data } = await Educaflex.get(`/api/calendary/teacher/${id}`);
			return dispatch({
				type: GET_CALENDARY,
				payload: data[0],
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function postAnuncio(anuncio, id) {
	return async function (dispatch) {
		try {
			console.log(anuncio, '---------', id);
			const { data } = await Educaflex.post(
				`/api/calendary/teacher/${id}`,
				anuncio,
			);
			return dispatch({
				type: POST_ANUNCIO,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getTeachersBySubject(subject) {
	return async function (dispatch) {
		try {
			const { data } = await Educaflex.get(`/api/client/teaching/${subject}`);
			const payload = {
				data,
				subject,
			};
			return dispatch({
				type: SAVE_TEACHERS,
				payload,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function cleanTeacher() {
	return function (dispatch) {
		return dispatch({
			type: CLEAN_TEACHER,
		});
	};
}

export function getAnuncio(id, profe) {
	return async function (dispatch) {
		try {
			const { data } = await Educaflex.get(`/api/calendary/teacher/${id}`);
			const payload = {
				profe,
				anuncios: data,
			};
			return dispatch({
				type: GET_ANUNCIO,
				payload,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function reloadUser() {
	return function (dispatch) {
		if (getLoggedInUser()) {
			return dispatch({
				type: RELOAD_USER,
				payload: getLoggedInUser(),
			});
		} else {
			console.log('Usuario no encontrado en localStorage');
		}
	};
}

export function signUp(user) {
	return async function (dispatch) {
		try {
			const response = await Educaflex.post('/api/client', user);
			console.log(response.data);
			handleUserSignUp(response.data);
			console.log(getLoggedInUser());
			return dispatch({
				type: SIGN_UP,
				payload: getLoggedInUser(),
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function login(user) {
	return async function (dispatch) {
		try {
			const response = await Educaflex.post('/authenticate', user);
			handleUserLogin(response.data.jwtToken);
			return dispatch({
				type: LOGIN,
				payload: getLoggedInUser(), //obtiene el objeto user
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function logout() {
	return async function (dispatch) {
		try {
			handleUserLogout();
			return dispatch({
				type: LOGOUT,
				payload: {},
			});
		} catch (error) {
			console.log(error);
		}
	};
}
