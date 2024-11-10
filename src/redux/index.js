import { combineReducers } from "redux";
import { authReducer, userSettingsReducer } from "./reducer";

const rootReducer = combineReducers({
    authState: authReducer,
    userSettingsState: userSettingsReducer
});

export default rootReducer;