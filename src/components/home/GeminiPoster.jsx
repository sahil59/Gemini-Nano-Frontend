import geminiIcon from '../../assets/geminiIcon.svg';

const GeminiPoster = () => {
    return (
        <article className="flex items-center justify-center bg-gradient-to-r from-[#3B6BFF] via-[#2E96FF] to-[#ACB7FF] dark:*:from-[#1A202C] dark:*:via-[#1A202C] dark:*:to-[#1A202C] rounded-[10px] gap-5 w-full max-w-[1200px] p-5">
            <div className="flex flex-col items-center gap-5">
                <img src={geminiIcon} alt="Gemini icon" className='w-5' />
                <div className="flex flex-col gap-2 items-center">
                    <h3 className="text-white duration-300 ease-in-out text-[1.5rem] text-center">
                        Gemini Nano for Google Workspace
                    </h3>
                    <p className="text-[#dddddd] duration-300 ease-in-out text-[0.9rem] text-center md:w-[60%]">
                        Easily explore and analyze documents, spreadsheets, emails, and more with the advanced capabilities of Gemini Nano. Streamline your workflow and gain insights efficiently across various file types.
                    </p>
                </div>
                <button className="flex items-center justify-center bg-white text-[#3B6BFF] dark:text-[#3B6BFF] duration-300 ease-in-out px-5 py-2 rounded-[5px] text-[0.9rem]">
                    Learn more
                </button>
            </div>
        </article>
    )
}

export default GeminiPoster;