import { Link } from "react-router-dom";
import ToggleButton from "./header/ToggleButton";

const Sidebar = ({ sidebar, setSidebar }) => {

    const items = [
        {
            name: 'Home',
            icon: 'home',
            link: '/'
        },
        {
            name: 'Workspace',
            icon: 'view_list',
            link: '/manage-workspace'
        },
        {
            name: 'Settings',
            icon: 'settings',
            link: '/settings'
        }
    ];

    return (
        <aside className={`fixed top-0 left-0 h-screen w-full shadow-md bg-black bg-opacity-20 z-30  transform transition-transform duration-300 ease-in-out ${sidebar ? 'translate-x-0' : '-translate-x-[calc(100%)]'}`} onClick={() => setSidebar(false)}>
            <div className="flex flex-col w-64 h-[calc(100dvh-20px)] rounded-r-[10px] my-[10px] py-[10px] bg-white dark:bg-[#282A2C] border-r border-[#00000020] dark:border-[#ffffff08] duration-300 ease-in-out overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-start">
                    <h3 className="text-black dark:text-white duration-300 ease-in-out p-2">
                        Workspace dashboard
                    </h3>
                </div>
                <div className="overflow-y-auto">
                    {items.map((item, index) => (
                        <Link key={index} to={item.link} onClick={() => setSidebar(false)} className="flex items-center p-2 gap-2 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 duration-300 ease-in-out relative">
                            <div className="absolute w-[0.1rem] h-full bg-[#3367d6] top-0 left-0"></div>
                            <span className="material-symbols-outlined text-[1rem]">
                                {item.icon}
                            </span>
                            <span className="text-[0.9rem]">{item.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="xl:hidden flex">
                    <ToggleButton />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

