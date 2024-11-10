import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, setSidebar }) => {

    const items = [
        {
            name: 'Home',
            icon: 'home',
            link: '/'
        },
        {
            name: 'Users',
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
        <aside className={`fixed top-0 left-0 h-[calc(100vh-20px)] w-[calc(100vw-20px)] m-[10px] shadow-md bg-black bg-opacity-20 z-30 rounded-[10px] transform transition-transform duration-700 ${sidebar ? 'translate-x-0' : '-translate-x-[calc(100%+10px)]'}`} onClick={() => setSidebar(false)}>
            <div className="w-64 h-full bg-white dark:bg-[#282A2C] rounded-[10px] p-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {items.map((item, index) => (
                    <Link key={index} to={item.link} onClick={() => setSidebar(false)} className="flex items-center p-4 gap-4 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 duration-300 ease-in-out">
                        <span className="material-symbols-outlined text-[1.2rem]">
                            {item.icon}
                        </span>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
