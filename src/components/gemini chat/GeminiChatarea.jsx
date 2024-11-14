import { useSelector } from "react-redux";

const GeminiChatarea = () => {
    const { chatarea } = useSelector(state => state.chatToggleState);

    return (
        <div className={`bg-white dark:bg-[#282A2C] min-h-[100dvh] p-[10px] ${chatarea ? 'md:w-[500px] w-full' : 'w-0 hidden'} duration-300 ease-in-out rounded-[10px] overflow-hidden`}>
            <div className="bg-[#F8F9FA] h-full border dark:border-[#12121280] w-full rounded-[5px] dark:bg-[#22222280] duration-300 ease-in-out">
                <h4 className="py-4 px-2 border-b dark:border-[#12121280] rounded-t-[5px] text-[#666666] dark:text-[#aaaaaa] duration-300 ease-in-out">
                    Chat with Gemini
                </h4>
                <div>
                    
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default GeminiChatarea;
