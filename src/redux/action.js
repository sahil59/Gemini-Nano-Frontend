// user authentication actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginRequest = () => {
    return {type: LOGIN_REQUEST}
}

export const loginSuccess = (user) => {
    return {type: LOGIN_SUCCESS, payload: user}
}

export const loginFailure = (error) => {
    return {type: LOGIN_FAILURE, payload: error}
}

export const logout = () => {
    return {type: LOGOUT}
}

// user settings actions
export const THEME_CHANGE = 'THEME_CHANGE';

export const themeChange = (theme) => {
    return {type: THEME_CHANGE, payload: theme}
}