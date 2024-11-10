import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './view/Home';

const App = () => {

    const theme = useSelector(state => state.userSettingsState.theme);

    // Use useEffect to set the dark mode
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className='bg-[#eeeeee] dark:bg-[#1b1b1b] min-h-screen  duration-300 ease-in-out p-[10px] flex flex-col gap-[10px]'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<h1>About</h1>} />
                    <Route path='*' element={<h1>Not Found</h1>} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;