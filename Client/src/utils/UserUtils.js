import jwtDecode from 'jwt-decode';

export function handleUserLogin(token) {
	const decoded = jwtDecode(token);

	const user = {
		id: decoded.id,
		role: decoded.roles,
		email: decoded.username,
	};

	window.localStorage.setItem('token', token);
	window.localStorage.setItem('user', JSON.stringify(user));
}

export function handleUserSignUp(userSignup) {
	const user = {
		id: userSignup.id,
		role: 'user',
		email: userSignup.email,
	};

	window.localStorage.setItem('token', 'hola :) soy un token del back');
	window.localStorage.setItem('user', JSON.stringify(user));
}

export function getLoggedInUser() {
	return JSON.parse(window.localStorage.getItem('user'));
}

export const updateUserLocal = (token) => {
	window.localStorage.removeItem('user');
	window.localStorage.removeItem('token');
	const decoded = jwtDecode(token);

	const user = {
		id: decoded.id,
		role: decoded.roles,
		email: decoded.username,
	};

	window.localStorage.setItem('token', token);
	window.localStorage.setItem('user', JSON.stringify(user));
};

export function handleUserLogout() {
	window.localStorage.removeItem('token');
	window.localStorage.removeItem('user');
}
