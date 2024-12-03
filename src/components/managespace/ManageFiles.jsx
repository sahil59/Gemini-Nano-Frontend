import FilesTab from "./FilesTab";
import googleDriveIcon from '../../assets/driveIcon.svg';
import SearchFiles from "./SearchFiles";
import FilesTable from "./FilesTable";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ActionsUIOverlay from "./ActionsUIOverlay";

const ManageFiles = () => {

    const {fileAction} = useSelector(state => state.fileActionState);

    return (
        <section className="lg:col-span-2 col-span-3 bg-white dark:bg-[#282A2C] duration-300 ease-in-out rounded-[10px] w-full shadow-md p-[10px] h-full flex flex-col gap-[10px]">
            <div>
            <div className='flex gap-2'>
                <img src={googleDriveIcon} alt="" className='w-4' />
                <span className='font-semibold text-black dark:text-white duration-300 ease-in-out'>Manage files</span>
            </div>
            <div className='w-full mt-4'>
                <div className='text-[#3367D6] dark:text-[#70B1FF] text-[0.8rem] py-2 px-4 bg-[#EFF6FF] dark:bg-[#383a3c] rounded-[5px] duration-300 ease-in-out flex items-start gap-1'>
                    <span className="material-symbols-outlined text-[0.8rem] pt-[3px]">
                        info
                    </span>
                    <div>
                        <strong>Note:</strong> Some actions are new and may not be available in your browser. Please update your browser to use all features. <Link className="underline">Learn more</Link>
                    </div>
                </div>
            </div>
            </div>
            {  fileAction === null ?
                <>
                    <div className="flex sm:flex-row flex-col-reverse my-4 justify-between gap-5">
                        <FilesTab />
                        <SearchFiles />
                    </div>
                    <FilesTable />
                </>
                : 
                <ActionsUIOverlay />
           }
        </section>
    )
}

export default ManageFiles;