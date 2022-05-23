import {
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT
} from '../actions/types';

const initalState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null
};

export default function (state = initalState, action: any): any {
	const { type, payload } = action;
	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false
			};

		case REGISTER_FAILED:
		case LOGIN_FAILED:
		case AUTH_ERROR:
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false
			};

		default:
			return state;
	}
}
