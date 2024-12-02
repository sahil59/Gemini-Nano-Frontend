import FilesTab from "./FilesTab";
import googleDriveIcon from '../../assets/driveIcon.svg';
import SearchFiles from "./SearchFiles";
import FilesTable from "./FilesTable";

const ManageFiles = () => {
    return (
        <section className="lg:col-span-2 col-span-3 bg-white dark:bg-[#282A2C] duration-300 ease-in-out rounded-[10px] w-full shadow-md p-[10px] h-full">
            <div className='flex gap-2'>
                <img src={googleDriveIcon} alt="" className='w-4' />
                <span className='font-semibold text-black dark:text-white duration-300 ease-in-out'>Manage files</span>
            </div>
            <div className="flex sm:flex-row flex-col-reverse my-4 justify-between gap-5">
                <FilesTab />
                <SearchFiles />
            </div>
            <FilesTable />
        </section>
    )
}

export default ManageFiles;