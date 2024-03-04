import Educaflex from '../../utils/NetworkingUtils';
import {
	getLoggedInUser,
	handleUserLogin,
	handleUserLogout,
	handleUserSignUp,
} from '../../utils/UserUtils';
import {
	GET_ANUNCIO,
	LOGIN,
	LOGOUT,
	RELOAD_USER,
	SAVE_TEACHERS,
	SIGN_UP,
} from './types';

export function saveTeachers() {
	return async function (dispatch) {
		try {
			const { data } = await Educaflex.get('/api/client');

			return dispatch({
				type: SAVE_TEACHERS,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getAnuncio(id) {
	return async function (dispatch) {
		try {
			const { data } = await Educaflex.get(`/api/calendary/teacher/5`);

			return dispatch({
				type: GET_ANUNCIO,
				payload: data,
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
