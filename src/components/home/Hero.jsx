import StartFreeTrialButton from "../reusable/StartFreeTrialButton";
import geminiLogo from "../../assets/homeHero.svg";

const Hero = () => {

    return (
        <section className="flex lg:flex-row flex-col lg:gap-10 gap-14 items-center justify-between w-full max-w-[1200px]">
            <div className="flex flex-col gap-5 lg:items-start items-center">
                <div className="flex flex-col gap-5">
                    <h1 className="sm:text-5xl text-3xl font-medium text-black dark:text-white duration-300 ease-in-out lg:text-left text-center">
                        Manage your google workspace on one click
                    </h1>
                    <p className="text-[#666666] dark:text-[#aaaaaa] lg:text-left text-center flex flex-col duration-300 ease-in-out lg:text-[1rem] text-[0.9rem]">
                        In the era of Gemini let AI manage your workspace and notify you about the important tasks by keeping privacy and security in mind. A single platform to manage all your workspace applications.
                    </p>
                </div>
                <div className="flex gap-5">
                    <StartFreeTrialButton />
                    <button className="text-[#3367D6] dark:text-bg-blue-800 py-2 px-4 rounded-[5px] duration-300 ease-in-out text-[0.9rem] hover:bg-[#bfbfbf20]">Learn more</button>
                </div>
            </div>
            <div className="flex w-full h-full lg:max-w-[500px] sm:max-w-[500px] lg:p-0 p-5">
                <img src={geminiLogo} alt="Gemini wordmark with workspace logos" className="w-full h-full object-fill" />
            </div>
        </section>
    )
};

export default Hero;