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

// create or update a profile

export const createOrUpdateProfile =
	(formData: any, history: any, edit = false) =>
	async (dispatch: any) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const res = await axios.post('/api/profile', formData, config);
			dispatch({
				type: LOAD_PROFILE,
				payload: res.data
			});
			dispatch(
				setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success')
			);
			if (!edit) {
				history.push('/dashboard');
			}
		} catch (err: any) {
			const errors = err.response.data.errors;
			if (errors) {
				errors.forEach((error: any) => {
					dispatch(setAlert(error.msg, 'danger', 3000));
				});
			}
			dispatch({
				type: PROFILE_ERROR,
				payload: {
					msg: err.response.statusText,
					status: err.response.status
				}
			});
		}
	};
