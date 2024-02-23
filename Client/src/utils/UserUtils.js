import jwtDecode from 'jwt-decode';

export function handleUserLogin(token) {
	const decoded = jwtDecode(token);

	const user = {
		role: decoded.roles,
		email: decoded.username,
	};

	window.localStorage.setItem('token', token);
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
