import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert =
	(msg: String, alertType: String) =>
	(
		dispatch: (arg0: {
			type: string;
			payload: { msg: String; alertType: String; id: String };
		}) => void
	) => {
		const id = uuid();
		dispatch({
			type: SET_ALERT,
			payload: { msg, alertType, id }
		});
	};
