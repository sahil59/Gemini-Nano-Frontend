import { combineReducers } from "redux";
import { authReducer, chatReducer, chatToggleReducer, fileActiveReducer, userSettingsReducer } from "./reducer";

const rootReducer = combineReducers({
    authState: authReducer,
    userSettingsState: userSettingsReducer,
    chatToggleState: chatToggleReducer,
    chatState: chatReducer,
    fileActiveState: fileActiveReducer
});

export default rootReducer;