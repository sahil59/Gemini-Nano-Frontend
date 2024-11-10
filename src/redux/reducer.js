// user authentication reducer
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./action";

const initialAuthState = {
    user: null,
    loading: false,
    error: null
};

export const authReducer = (state = initialAuthState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true}
        case LOGIN_SUCCESS:
            return {...state, user: action.payload}
        case LOGIN_FAILURE:
            return {...state, loading: false, error: action.payload}
        case LOGOUT:
            return {...state, user: null}
        default:
            return state
    }
};

// user settings reducer
import { THEME_CHANGE} from "./action";

const initialUserSettingsState = {
    theme: 'dark'
};

export const userSettingsReducer = (state = initialUserSettingsState, action) => {
    switch(action.type) {
        case THEME_CHANGE:
            return {...state, theme: action.payload}
        default:
            return state
    }
};