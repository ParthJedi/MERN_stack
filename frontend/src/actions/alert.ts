import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert =
	(msg: String, alertType: String, timeout = 5000) =>
	(dispatch: (arg0: { type: string; payload: any }) => void) => {
		const id = uuid();
		dispatch({
			type: SET_ALERT,
			payload: { msg, alertType, id }
		});

		setTimeout(
			() =>
				dispatch({
					type: REMOVE_ALERT,
					payload: id
				}),
			timeout
		);
	};
