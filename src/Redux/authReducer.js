import {authAPI, securityAPI} from "../API/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_ERROR_MESSAGE = 'auth/SET_ERROR_MESSAGE';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    error: false,
    captchaUrl: null
}

const authReducer = (state= initialState, action) => {

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

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});
export const getCaptchaUrlSuccess = captchaUrl => ({
    type: GET_CAPTCHA_URL, payload: {captchaUrl}
});
export const toggleErrorMessage = (error) => ({type: SET_ERROR_MESSAGE, error: error})


export const getAuthUserData = () => async dispatch => {
    let res = await authAPI.authMe()

    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const setAuthUserData = (email, password, terms, captcha) => async dispatch => {
    let res = await authAPI.authUser(email, password, terms, captcha)

    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        console.log(res.data)
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }

        dispatch(toggleErrorMessage(true));
    }
}

export const logoutAuthUserData = () => async dispatch => {
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