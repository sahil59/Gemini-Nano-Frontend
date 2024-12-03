import { useSelector } from "react-redux";
import GeminiPoster from "../components/home/GeminiPoster";
import Hero from "../components/home/Hero";
import IncludedApplications from "../components/home/IncludedApplications";

const Home = () => {

    const { chatarea } = useSelector(state => state.chatToggleState);

    return (
        <main className={`bg-white dark:bg-[#282A2C] duration-300 ease-in-out rounded-[10px] flex flex-col gap-14 justify-center items-center shadow-md overflow-hidden ${chatarea ?'md:w-full md:p-[20px] md:pt-[40px] w-0 md:flex hidden' : 'w-full p-[20px] pt-[40px]'}`}>
            <Hero />
            <IncludedApplications />
            <GeminiPoster />
        </main>
    )
}

export default Home;