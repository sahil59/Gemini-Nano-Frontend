const FilesGrid = () => {

    const files = [
        {
            name: 'Docs',
            icon: 'docs',
            color: 'text-[#0086F9]',
            numberOfFiles: 10,
        },
        {
            name: 'Sheets',
            icon: 'table',
            color: 'text-[#00AD3C]',
            numberOfFiles: 5,
        },
        {
            name: 'Slides',
            icon: 'co_present',
            color: 'text-[#FFC107]',
            numberOfFiles: 3,
        },
        {
            name: 'PDFs',
            icon: 'picture_as_pdf',
            color: 'text-[#E20001]',
            numberOfFiles: 7,
        },
        {
            name: 'Images',
            icon: 'image',
            color: 'text-[#8929FF]',
            numberOfFiles: 12,
        },
        {
            name: 'Videos',
            icon: 'video_library',
            color: 'text-[#FF5722]',
            numberOfFiles: 3,
        }
    ];

    return (
        <section className="grid xl:grid-cols-3 lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-3 grid-cols-2 col-span-1 xl:col-span-1 sm:col-span-2 gap-[10px] flex-1 min-w-[300px] w-full h-full xl:min-h-[160px]">
            {
                files.map((file, index) => (
                    <div className="xl:min-h-[60px] min-h-[100px] bg-white dark:bg-[#282A2C] duration-300 ease-in-out rounded-[10px] shadow-md p-[10px]" key={index}>
                        <div className="flex flex-col items-start justify-between gap-[3px] h-full">
                            <span className={`material-symbols-outlined ${file.color} text-[1rem]`}>
                                {file.icon}
                            </span>
                            <div className="flex flex-col items-start">
                                <h3 className="font-Medium dark:text-[#f1f1f1] text-[0.8rem] duration-300 ease-in-out">{file.name}</h3>
                                <p className="text-[0.7rem] dark:text-[#f1f1f1] duration-300 ease-in-out">{file.numberOfFiles} files</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default FilesGrid;