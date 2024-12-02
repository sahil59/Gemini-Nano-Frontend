const GeminiInput = () => {
    return (
        <div className="p-2">
            <div className="flex items-center p-2 gap-2 rounded-[5px] bg-white border dark:border-[#888888] dark:bg-[#252525] duration-300 ease-in-out">
                <input type="text" name="" id="" placeholder="Enter your prompt here" className="bg-transparent outline-none border-none focus:ring-0 w-full text-black dark:text-white duration-300 ease-in-out px-2 placeholder:text-[0.9rem]" />
                <button className="flex text-[#444444] dark:hover:text-[#ffffff] dark:text-[#bbbbbb] duration-300 ease-in-out" title="Send message">
                    <span className="material-symbols-outlined text-[1.25rem]">
                        send
                    </span>
                </button>
            </div>
        </div>
    )
}

export default GeminiInput
