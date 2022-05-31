import axios from 'axios';
import { setAlert } from './alert';
import { LOAD_PROFILE, PROFILE_ERROR } from './types';

// get current user's profile
export const getCurrentProfile = () => async (dispatch: any) => {
	try {
		const res = await axios.get('/api/profile/me');
		dispatch({
			type: LOAD_PROFILE,
			payload: res.data
		});
	} catch (err: any) {
		dispatch({
			type: PROFILE_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status
			}
		});
	}
};
