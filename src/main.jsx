import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

const clientId = import.meta.env.VITE_OAUTH_CLIENT_ID

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId={clientId}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </GoogleOAuthProvider>
    </Provider>,
)
