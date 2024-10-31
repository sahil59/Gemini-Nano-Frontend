import { useGoogleLogin } from '@react-oauth/google';

const App = () => {
    
    const login = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            const { code } = tokenResponse;

            try {
                const response = await fetch('http://127.0.0.1:5000/auth/callback', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({code}),
                });

                if (!response.ok) {
                    throw new Error(`Failed to login. Status: ${response.status}`);
                }

                const data = await response.json();
                console.log('User data:', data);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        },
        onError: (error) => {
            console.error('Error during login:', error);
        },
        scope: 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
    });

    return (
        <button onClick={login}>
            Google Workspace Access
        </button>
    );
}

export default App;