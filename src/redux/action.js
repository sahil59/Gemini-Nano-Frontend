// user authentication 
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

// user settings 
export const THEME_CHANGE = 'THEME_CHANGE';

export const themeChange = (theme) => {
    return {type: THEME_CHANGE, payload: theme}
}

// gemini chat toggle 
export const CHAT_TOGGLE = 'CHAT_TOGGLE';

export const chatToggle = () => {
    return {type: CHAT_TOGGLE}
}

// gemini chat 
export const CHAT_REQUEST = 'CHAT_REQUEST';
export const CHAT_SUCCESS = 'CHAT_SUCCESS';
export const CHAT_FAILURE = 'CHAT_FAILURE';

export const chatRequest = () => {
    return {type: CHAT_REQUEST}
}

export const chatSuccess = (chat) => {
    return {type: CHAT_SUCCESS, payload: chat}
}

export const chatFailure = (error) => {
    return {type: CHAT_FAILURE, payload: error}
}

// file active 
export const FILE_ACTIVE = 'FILE_ACTIVE';

export const fileActive = (file) => {
    return {type: FILE_ACTIVE, payload: file}
}

// file actions
export const FILE_ACTION_TYPE = 'FILE_ACTION_TYPE';

export const fileActionType = (actionType, fileData) => {
    return {type: FILE_ACTION_TYPE, actionType: actionType, fileData: fileData}
}