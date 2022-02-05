// @ts-ignore
import {authAPI, securityAPI} from "../API/api.ts";
import {Dispatch} from "redux";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_ERROR_MESSAGE = 'auth/SET_ERROR_MESSAGE';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';


type initialStateType = {
    userId: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    error: boolean,
    captchaUrl: string | null
}

let initialState : initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    error: false,
    captchaUrl: null
}

const authReducer = (state= initialState, action: ActionsType) : initialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case SET_ERROR_MESSAGE:
            return {
                ...state,
                error: action.error
            }

        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}


type ActionsType = setAuthUserDataActionType | getCaptchaUrlActionType | toggleErrorMessageActionType;

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: object
}

export const setUserData = (userId: number, email: string, login: string, isAuth: boolean) : setAuthUserDataActionType => ({
    type: SET_USER_DATA, data: {userId, email, login, isAuth}
});


type getCaptchaUrlActionType = {
    type: typeof GET_CAPTCHA_URL,
    payload: {captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl) : getCaptchaUrlActionType => ({
    type: GET_CAPTCHA_URL, payload: {captchaUrl}
});


type toggleErrorMessageActionType = {
    type: typeof SET_ERROR_MESSAGE,
    error: boolean
}

export const toggleErrorMessage = (error) : toggleErrorMessageActionType => ({type: SET_ERROR_MESSAGE, error: error})


export const getAuthUserData = () => async (dispatch: Dispatch<ActionsType>) => {
    let res = await authAPI.authMe()

    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const setAuthUserData = (email: string, password: string, terms: boolean, captcha: string)  => async (dispatch) => {
    let res = await authAPI.authUser(email, password, terms, captcha)

    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }

        dispatch(toggleErrorMessage(true));
    }
}

export const logoutAuthUserData = () => async (dispatch: Dispatch<ActionsType>) => {
    let res = await authAPI.authLogout();

    if (res.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async dispatch => {
    let res = await securityAPI.getCaptchaUrl();

    const captchaUrl = res.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;