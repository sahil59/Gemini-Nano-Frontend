import { combineReducers } from "redux";
import { authReducer, chatReducer, chatToggleReducer, fileActionsReducer, fileActiveReducer, userSettingsReducer } from "./reducer";

const rootReducer = combineReducers({
    authState: authReducer,
    userSettingsState: userSettingsReducer,
    chatToggleState: chatToggleReducer,
    chatState: chatReducer,
    fileActiveState: fileActiveReducer,
    fileActionState: fileActionsReducer
});

export default rootReducer;