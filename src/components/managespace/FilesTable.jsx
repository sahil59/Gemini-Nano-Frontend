import { useState } from "react"
import googleDocsIcon from '../../assets/docsIcon.svg';
import googleSheetsIcon from '../../assets/sheetsIcon.svg';
import googleSlidesIcon from '../../assets/slidesIcon.svg';
import pdfIcon from '../../assets/pdfIcon.svg';

const FilesTable = () => {

    const filesData = [
        {
            id: "1",
            icon: googleDocsIcon,
            name: "Experiment No. 9",
            owner: "Sahil Kumar",
            lastEdited: "Nov 14, 2024",
            size: "10 MB"
        },
        {
            id: "2",
            icon: googleSheetsIcon,
            name: "Kaggle dataset",
            owner: "Pranav Singh",
            lastEdited: "Nov 15, 2024",
            size: "10 MB"
        },
        {
            id: "3",
            icon: pdfIcon,
            name: "Research paper",
            owner: "Vedant Tadia",
            lastEdited: "Nov 16, 2024",
            size: "10 MB"
        },
        {
            id: "4",
            icon: googleSlidesIcon,
            name: "WD presentation A-25",
            owner: "Aditya Khedekar",
            lastEdited: "Nov 17, 2024",
            size: "10 MB"
        },
    ]

    const [openDropdown, setOpenDropdown] = useState(null)

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id)
    }

    return (
        <div className="overflow-x-auto rounded-[5px]">
            <table className="w-full border-collapse bg-white dark:bg-[#282A2C] text-left text-sm text-gray-500 dark:text-gray-300 duration-300 ease-in-out">
                <thead className="bg-gray-50 dark:bg-[#1d1e20] duration-300 ease-in-out">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900 dark:text-white duration-300 ease-in-out">File</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900 dark:text-white duration-300 ease-in-out">Owner</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900 dark:text-white duration-300 ease-in-out">Last edited</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900 dark:text-white duration-300 ease-in-out">Size</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900 dark:text-white duration-300 ease-in-out">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-zinc-950 border-t border-gray-100 dark:border-zinc-950 duration-300 ease-in-out">
                    {filesData.map((file) => (
                        <tr key={file.id} className="hover:bg-gray-50 dark:hover:bg-[#1d1e20] duration-300 ease-in-out">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <img src={file.icon} alt="" />
                                    <span className="font-medium text-gray-700 dark:text-gray-100 duration-300 ease-in-out">{file.name}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-gray-500 dark:text-gray-300 duration-300 ease-in-out">{file.owner}</td>
                            <td className="px-6 py-4 text-gray-500 dark:text-gray-300 duration-300 ease-in-out">{file.lastEdited}</td>
                            <td className="px-6 py-4 text-gray-500 dark:text-gray-300 duration-300 ease-in-out">{file.size}</td>
                            <td className="px-6 py-4">
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900" id={`menu-button-${file.id}`} aria-expanded={openDropdown === file.id} aria-haspopup="true" onClick={() => toggleDropdown(file.id)}>
                                            <span className="material-symbols-outlined text-gray-400" aria-hidden="true">
                                                more_vert
                                            </span>
                                        </button>
                                    </div>
                                    {openDropdown === file.id && (
                                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-[#282A2C] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none duration-300 ease-in-out" role="menu" aria-orientation="vertical" aria-labelledby={`menu-button-${file.id}`} tabIndex={-1}>
                                            <div className="py-1" role="none">
                                                <a href="#" className="text-gray-700 dark:text-gray-100 duration-300 ease-in-out block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id={`menu-item-0-${file.id}`}>Summarize</a>
                                                <a href="#" className="text-gray-700 dark:text-gray-100 duration-300 ease-in-out block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id={`menu-item-1-${file.id}`}>Translate</a>
                                                <a href="#" className="text-gray-700 dark:text-gray-100 duration-300 ease-in-out block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id={`menu-item-2-${file.id}`}>Open</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FilesTable;