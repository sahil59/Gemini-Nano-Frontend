import { useSelector } from "react-redux";
import TimeWidget from "../components/managespace/TimeWidget";
import UpcomingEvents from "../components/managespace/UpcomingEvents";
import FilesGrid from "../components/managespace/FilesGrid";
import ManageFiles from "../components/managespace/ManageFiles";
import UnreadEmails from "../components/managespace/UnreadEmails";

const Managespace = () => {

    const { chatarea } = useSelector(state => state.chatToggleState);

    return (
        <main className={`duration-300 ease-in-out rounded-[10px] flex flex-col justify-start items-start gap-[10px] ${chatarea ?'md:w-full w-0 md:flex hidden' : 'w-full'}`}>
            <section className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[10px] w-full">
                <TimeWidget />
                <UpcomingEvents />
                <FilesGrid />
            </section>
            <section className="grid grid-cols-3 gap-[10px] w-full min-h-[100vh]">
                <ManageFiles />
                <UnreadEmails />
            </section>
        </main>
    )
}

export default Managespace;