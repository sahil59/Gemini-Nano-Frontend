import { useSelector } from "react-redux";
import GeminiInput from "./GeminiInput";
import ConversationArea from "./ConversationArea";

const GeminiChatarea = () => {
    const { chatarea } = useSelector(state => state.chatToggleState);

    return (
        <div className={`relative ${chatarea ? 'md:w-[500px] w-full' : 'w-0 hidden'}`}>
            <div className={`sticky top-[10px] flex bg-white dark:bg-[#282A2C] min-h-[calc(100vh-20px)] p-[10px] shadow-md  duration-300 ease-in-out rounded-[10px] overflow-hidden lg:`}>
                <div className="bg-[#F8F9FA] border dark:border-[#121212] w-full rounded-[5px] dark:bg-[#222222] duration-300 ease-in-out flex flex-col overflow-hidden">
                    <h4 className="py-4 px-2 border-b dark:border-[#121212] rounded-t-[5px] text-[#666666] dark:text-[#aaaaaa] duration-300 ease-in-out transition-all">
                        Chat with Gemini
                    </h4>
                    <ConversationArea />
                    <GeminiInput />
                </div>
            </div>
        </div>
    )
}

export default GeminiChatarea;
