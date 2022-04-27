import uuid from 'uuid';
import { SERT_ALERT, REMOVE_ALERT, SET_Alert} from './types';

export const setAlert =(msg, alertType) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_Alert,
        payload: { msg, alertType, id }

    })
}