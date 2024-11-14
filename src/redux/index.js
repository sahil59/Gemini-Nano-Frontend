import { combineReducers } from "redux";
import { authReducer, chatReducer, chatToggleReducer, userSettingsReducer } from "./reducer";

const rootReducer = combineReducers({
    authState: authReducer,
    userSettingsState: userSettingsReducer,
    chatToggleState: chatToggleReducer,
    chatState: chatReducer
});

export default rootReducer;