import googleDocsIcon from '../../assets/docsIcon.svg';
import googleSheetsIcon from '../../assets/sheetsIcon.svg';
import googleSlidesIcon from '../../assets/slidesIcon.svg';
import googleDriveIcon from '../../assets/driveIcon.svg';
import googleMailIcon from '../../assets/mailIcon.svg';
import googleCalendarIcon from '../../assets/calendarIcon.svg';

const IncludedApplications = () => {

    const applications = [
        { name: 'Docs', icon: googleDocsIcon },
        { name: 'Sheets', icon: googleSheetsIcon },
        { name: 'Slides', icon: googleSlidesIcon },
        { name: 'Drive', icon: googleDriveIcon },
        { name: 'Gmail', icon: googleMailIcon },
        { name: 'Calendar', icon: googleCalendarIcon },
    ];

    return (
        <div className="flex flex-col gap-10 items-center w-full max-w-[589px]">
            <div className="flex flex-col gap-2 items-center">
                <h2 className="text-black dark:text-white duration-300 ease-in-out text-2xl">Included Applications</h2>
                <p className="text-[#666666] dark:text-[#aaaaaa] duration-300 ease-in-out text-[0.9rem] text-center">
                    Gemini is designed to work with the most popular Google Workspace applications. More applications are coming soon.
                </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] gap-10 grid-rows-[max-content] w-full place-items-center justify-center lg:justify-start">
                {applications.map((app, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 w-full">
                        <img src={app.icon} alt={app.name} className="w-10 h-10 object-cover" />
                        <p className="text-black dark:text-white duration-300 ease-in-out whitespace-nowrap text-[0.8rem]">{app.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IncludedApplications;