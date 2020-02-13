import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

let initialState:InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state=initialState, action:any):InitialStateType => {
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

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: {
        userId:number | null,
        email:string | null,
        login:string | null,
        isAuth:boolean
    }
}

export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth:boolean):SetAuthUserDataActionType => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const authMe = () => async (dispatch:any) => {
    let response = await authAPI.authMe();

    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const userLogin = (email:string | null, password:string | null, rememberMe:boolean) => async (dispatch:any) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.resultCode === 0) {
        dispatch(authMe);
    }
    if (response.resultCode !== 0) {
        dispatch(stopSubmit("login", {_error: (response.messages.length > 0 ? response.messages : 'Some Error')}));
    }
};
export const userLogout = () => async (dispatch:any) => {
    let response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};

export default authReducer;