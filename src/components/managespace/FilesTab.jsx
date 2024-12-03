import { useDispatch, useSelector } from "react-redux";
import { fileActive } from "../../redux/action";

const FilesTab = () => {

    const dispatch = useDispatch();
    const { file } = useSelector(state => state.fileActiveState);
    console.log(file);

    const tabItems = ['All', 'Docs', 'Sheets', 'Slides', 'PDFs', 'Images', 'Videos'];

    return (
        <div className="overflow-hidden">
            <div className="flex bg-[#EEEEEE] dark:bg-[#1b1b1b] duration-300 ease-in-out items-center justify-start overflow-x-auto p-1 rounded-[5px] no-scrollbar w-full max-w-fit whitespace-nowrap">
                {
                    tabItems.map((item, index) => (
                        <button key={index} className={`${file === item ? "bg-white dark:bg-[#282A2C] text-[#3367D6] dark:text-[#70B1FF] dark: shadow-md" : "text-[#4c4c4c] dark:text-[#c4c4c4]"} py-2 px-3 rounded-[3px] text-[0.8rem] duration-300 ease-in-out`} onClick={() => dispatch(fileActive(item))}>
                            {item}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default FilesTab
