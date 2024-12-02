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
    theme: 'light'
};

export const userSettingsReducer = (state = initialUserSettingsState, action) => {
    switch(action.type) {
        case THEME_CHANGE:
            return {...state, theme: action.payload}
        default:
            return state
    }
};

// gemini chat toggle reducer
import { CHAT_TOGGLE } from "./action";

const initialChatToggleState = {
    chatarea: false
};

export const chatToggleReducer = (state = initialChatToggleState, action) => {
    switch(action.type) {
        case CHAT_TOGGLE:
            return {...state, chatarea: !state.chatarea}
        default:
            return state
    }
};

// gemini chat reducer
import { CHAT_REQUEST, CHAT_SUCCESS, CHAT_FAILURE } from "./action";

const initialChatState = {
    chatMessages: [],
    loading: false,
    error: null
};

export const chatReducer = (state = initialChatState, action) => {
    switch(action.type) {
        case CHAT_REQUEST:
            return {...state, loading: true}
        case CHAT_SUCCESS:
            return {...state, chatMessages: action.payload}
        case CHAT_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
};

// file active reducer
import { FILE_ACTIVE } from "./action";

const initialFileActiveState = {
    file: 'All'
};

export const fileActiveReducer = (state = initialFileActiveState, action) => {
    switch(action.type) {
        case FILE_ACTIVE:
            return {...state, file: action.payload}
        default:
            return state
    }
};