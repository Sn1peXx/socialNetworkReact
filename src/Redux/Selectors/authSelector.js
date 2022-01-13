export const getAuthInfo = state => {
    return state.auth.isAuth;
}

export const getAuthError = state => {
    return state.auth.error;
}

export const getAuthUserId = state => {
    return state.auth.userId
}

export const getAuthLogin = state => {
    return state.auth.login;
}