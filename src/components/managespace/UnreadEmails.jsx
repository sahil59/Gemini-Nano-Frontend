import googleMailIcon from '../../assets/mailIcon.svg';

const UnreadEmails = () => {
    return (
        <section className="flex flex-col items-start bg-white dark:bg-[#282A2C] duration-300 ease-in-out rounded-[10px] w-full shadow-md p-[10px] lg:col-span-1 col-span-3 h-full gap-4">
            <div className='flex gap-2'>
                <img src={googleMailIcon} alt="" className='w-4' />
                <span className='font-semibold text-black dark:text-white duration-300 ease-in-out'>Manage mails</span>
            </div>
            <div className='w-full'>
                <div className='text-[#4C4C4C] dark:text-[#c4c4c4] text-[0.8rem] py-2 px-4 bg-[#EFF6FF] dark:bg-[#383a3c] rounded-[5px] duration-300 ease-in-out'>
                    Email analyzer and summarizer will soon will be available with exciting features. Join our newsletter to get updates. <span className='text-[#3367D6] dark:text-[#70B1FF] duration-300 ease-in-out'>Learn more</span>
                </div>
            </div>
        </section>
    )
}

export default UnreadEmails;