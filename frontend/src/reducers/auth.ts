import { REGISTER_SUCCESS, REGISTER_FAILED } from '../actions/types';

const initalState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null
};

export default function (state = initalState, action: any) {
	const { type, payload } = action;
	switch (type) {
		case REGISTER_SUCCESS:
			localStorage.setItem('token', payload);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false
			};

		case REGISTER_FAILED:
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
