import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./index";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";
import { encryptTransform } from "redux-persist-transform-encrypt";

const encryptor = encryptTransform({
    secretKey: import.meta.env.VITE_PERSIST_STATE_ENCRYPT_SECRET,
    onError: (error) => {
        console.error(error);
    }
});

const persistConfig = {
    key: 'GWMS',
    storage,
    transform: [encryptor],
    version: 1,
    whitelist: ['authState', 'userSettingsState', 'chatState']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);