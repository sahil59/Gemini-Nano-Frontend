import { Link } from "react-router-dom";
import StartFreeTrialButton from "../reusable/StartFreeTrialButton";
import SearchBar from "./header/SearchBar";
import ToggleButton from "./header/ToggleButton";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setSidebar(!sidebar);
        console.log("sidebar triggred");
    }

    return (
        <header className="bg-white dark:bg-[#282A2C] duration-300 ease-in-out rounded-[10px] h-[60px] flex items-center px-[10px] shadow-md">
            <nav className="flex items-center justify-between w-full">
                <div className="flex justify-start gap-4 sm:w-fit w-full">
                    <button className="flex" onClick={handleToggleSidebar}>
                        <span className="material-symbols-outlined text-[#444444] dark:text-[#bbbbbb] duration-300 ease-in-out">
                            menu
                        </span>
                    </button>
                    <div className="flex items-center gap-1 sm:w-fit w-full justify-center">
                        <Link to="/">
                            <img src="/images/googleLogo.svg" alt="Google logo" className="w-4" />
                        </Link>
                        <Link to="/" className="text-[#666666] dark:text-[#aaaaaa] duration-300 ease-in-out">
                            Workspace Dashboard
                        </Link>
                    </div>
                </div>
                <div className="md:flex gap-4 hidden">
                    <SearchBar />
                    <ToggleButton />
                    <div className="lg:flex hidden gap-2">
                        <button className="border border-[#bfbfbf] text-[#3367D6] dark:text-[#bfbfbf] py-2 px-4 rounded-[5px] duration-300 ease-in-out text-[0.9rem] hover:bg-[#bfbfbf20]">Help</button>
                        <StartFreeTrialButton />
                    </div>
                </div>
                <div className="sm:flex gap-2 hidden">
                    <button className="border-[0.5px] border-[#bfbfbf] flex p-2 rounded-full">
                        <span className="material-symbols-outlined text-[#444444] dark:text-[#bfbfbf] duration-300 ease-in-out">
                            notifications
                        </span>
                    </button>
                    <button className="p-2 group">
                        <img src="/images/googleGeminiIcon.svg" alt="Google gemini icon" className="group-hover:rotate-90 duration-700 ease-in-out" />
                    </button>
                </div>
            </nav>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </header>
    )
}

export default Header;