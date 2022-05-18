import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAILED } from './types';

// Register User
export const register =
	({ name, email, password }: any) =>
	async (dispatch: any) => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const body = JSON.stringify({ name, email, password });
		try {
			const res = await axios.post('/api/users', body, config);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			});
		} catch (err: any) {
			const errors = err.response.data.errors;
			if (errors) {
				errors.forEach((error: any) => {
					dispatch(setAlert(error.msg, 'danger', 3000));
				});
			}
			dispatch({
				type: REGISTER_FAILED
			});
		}
	};
