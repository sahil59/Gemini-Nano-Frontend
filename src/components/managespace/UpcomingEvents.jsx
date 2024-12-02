import { Link } from 'react-router-dom';
import googleDocsIcon from '../../assets/docsIcon.svg';
// import googleSheetsIcon from '../../assets/sheetsIcon.svg';
// import googleSlidesIcon from '../../assets/slidesIcon.svg';
import googleMailIcon from '../../assets/mailIcon.svg';
import googleCalendarIcon from '../../assets/calendarIcon.svg';
import googleMeetIcon from '../../assets/meetIcon.svg';
import { useSelector } from 'react-redux';

const UpcomingEvents = () => {

    const {chatarea} = useSelector(state => state.chatToggleState);

    const events = [
        { title: 'Meeting with HR', time: '10:00 AM', day: 'Today', link: '#', bgColor: 'bg-[#009DFF33] dark:bg-[#70B1FF]', btnValue: 'Join Meet', type: 'meet' },
        { title: 'Mail to the client', time: '11:00 AM', day: 'Today', link: '#', bgColor: 'bg-[#00FF4433] dark:bg-[#94FF70]', btnValue: 'Send Mail', type: 'mail' },
        { title: 'Create a report', time: '12:00 PM', day: '21 Nov', link: '#', bgColor: 'bg-[#FFB20033] dark:bg-[#FFF170]', btnValue: 'Open Docs', type: 'doc' },
    ];

    return (
        <section className={`bg-white dark:bg-[#282A2C] duration-300 ease-in-out rounded-[10px] flex gap-5 flex-col items-start justify-between p-[10px] shadow-md flex-1 ${!chatarea && 'min-w-[300px]'} w-full h-[160px]`}>
            <div className='flex gap-2'>
                <img src={googleCalendarIcon} alt="" className='w-4' />
                <span className='font-semibold text-black dark:text-white duration-300 ease-in-out'>Upcoming events</span>
            </div>
            <div className='flex gap-[10px] overflow-x-auto overflow-y-hidden w-full h-full event pb-[1px] no-scrollbar'>
                {events.map((event, index) => (
                    <div key={index} className={`flex flex-col items-start justify-between p-[5px] gap-2 ${event.bgColor} rounded-[5px] w-full min-w-[150px] max-w-[295px] max-h-[100px] duration-300 ease-in-out`}>
                        <div className='flex flex-col w-full'>
                            <div className='flex items-center justify-between w-full text-black duration-300 ease-in-out'>
                                <span className='whitespace-nowrap text-[0.8rem] '>{event.title}</span>
                                <button className='flex items-center justify-center'>
                                    <span className="material-symbols-outlined text-[0.8rem] ">
                                        more_vert
                                    </span>
                                </button>
                            </div>
                            <div className='flex items-center justify-start gap-[2px] text-[#646464] dark:text-black duration-300 ease-in-out'>
                                <span className='text-[0.6rem]'>{event.day}</span>
                                <span className='text-[0.3rem] flex items-center justify-center mt-[1px]'>
                                    &bull;
                                </span>
                                <span className='text-[0.6rem]'>{event.time}</span>
                            </div>
                        </div>
                        <Link to={event.link} className='flex items-center justify-start text-black dark:text-white text-[0.7rem] gap-1 bg-white dark:bg-[#282A2C] py-1 px-2 rounded-full duration-300 ease-in-out'>
                            {event.type === 'meet' && <img src={googleMeetIcon} alt="" className='w-3' />}
                            {event.type === 'mail' && <img src={googleMailIcon} alt="" className='w-3' />}
                            {event.type === 'doc' && <img src={googleDocsIcon} alt="" className='w-3' />}
                            {event.btnValue}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default UpcomingEvents
