import { useDispatch, useSelector } from "react-redux";
import { themeChange } from "../../../redux/action";

const ToggleButton = () => {

    const dispatch = useDispatch();
    const theme = useSelector(state => state.userSettingsState.theme);

    const toggleTheme = () => {
        if (theme === 'light') {
            dispatch(themeChange('dark'));
        } else {
            dispatch(themeChange('light'));
        }
    }

    return (
        <label className="flex justify-between items-center p-2 w-full text-[#444444] dark:text-[#bbbbbb] xl:text-[0.9rem] text-[0.9rem] duration-300 ease-in-out xl:w-fit">
            Change theme
            <input type="checkbox" className="hidden peer" onChange={toggleTheme} checked={theme === 'dark'} />
            <span className={`w-10 h-6 flex items-center flex-shrink-0 xl:ml-4 ml-14 p-1 ${theme === 'dark' ? 'bg-[#3367D6]' : 'bg-gray-300'} rounded-full after:w-4 after:h-4 after:bg-white ${theme === 'dark' && 'after:bg-gray-300'} after:rounded-full after:shadow-md duration-300 ease-in-out cursor-pointer after:duration-300 ${theme === 'dark' && 'after:translate-x-4'}`}></span>
        </label>
    )
}

export default ToggleButton;