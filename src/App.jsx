import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './view/Home';
import GeminiChatarea from './components/gemini chat/GeminiChatarea';
// import ProtectedRoute from './protected route/ProtectedRoute';
import Managespace from './view/Managespace';

const App = () => {
    const theme = useSelector(state => state.userSettingsState.theme);

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
        <Router>
            <div className='bg-[#eeeeee] dark:bg-[#1b1b1b] min-h-screen duration-300 ease-in-out p-[10px] flex flex-col gap-[10px] max-w-[1600px] w-full'>
                <Header />
                <div className={`flex gap-[10px] transition-all duration-700 ease-in-out`}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<h1>About</h1>} />
                        {/* <Route element={<ProtectedRoute />} > */}
                            <Route path='/managespace' element={<Managespace />} />
                        {/* </Route> */}
                        <Route path='*' element={<h1>Not Found</h1>} />
                    </Routes>
                    <GeminiChatarea />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
