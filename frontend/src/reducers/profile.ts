import { LOAD_PROFILE, PROFILE_ERROR } from '../actions/types';
const initialState = {
	profile: null,
	profiles: [],
	repos: [],
	loading: true,
	error: {}
};

export default function (state = initialState, action: any): any {
	const { type, payload } = action;
	switch (type) {
		case LOAD_PROFILE:
			return {
				...state,
				profile: payload,
				loading: false
			};

		case PROFILE_ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};

		default:
			return state;
	}
}
