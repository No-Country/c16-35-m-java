import Educaflex from '../../utils/NetworkingUtils';
import {
	getLoggedInUser,
	handleUserLogin,
	handleUserSignUp,
} from '../../utils/UserUtils';
import { LOGIN, SIGN_UP } from './types';

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
			console.log(response.data);
			handleUserLogin(response.data); //decodea el token y lo pasa a localstorage

			return dispatch({
				type: LOGIN,
				payload: getLoggedInUser(), //obtiene el objeto user
			});
		} catch (error) {
			console.log(error);
		}
	};
}
