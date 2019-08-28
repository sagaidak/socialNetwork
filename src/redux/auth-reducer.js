import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const authMe = () => (dispatch) => {
    return authAPI.authMe()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
};
export const userLogin = (email, password, rememberMe) => (dispatch) => {
    return authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(authMe);
            }
            if (response.resultCode !== 0) {
                dispatch(stopSubmit("login", {_error: (response.messages.length > 0 ? response.messages : 'Some Error')}));
            }
        })
};
export const userLogout = () => (dispatch) => {
    return authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }

        })
};

export default authReducer;