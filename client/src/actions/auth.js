import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
} from './types';
import setAuthToken from '../utils/setAuthToken'

//Load user
export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('http://localhost:5000/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

//Register User
export const register = ({ name, email, password }) => async dispatch => {
   
    const config = {
        //sending data
        headers: {
            'Contents-Type': 'application/json'
        }
    }
    // prepairing data to send(commented this part as I have already app.use(express.json()); in server.js)
    // const body = JSON.stringify({ name, email, password });

    try {
        //sending the request to get the response
        const res = await axios.post('http://localhost:5000/api/users', { name, email, password }, config);
        console.log(res);

        //tells the app that state has been updated
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: REGISTER_FAIL
        })
    }
}