import { useSelector } from 'react-redux';
import helloIllustration from '../../assets/helloIllustration.svg';
import DateDay from './DateDay';
import Time from './Time';

const TimeWidget = () => {

    const {chatarea} = useSelector(state => state.chatToggleState);

    return (
        <section className={`bg-white dark:bg-[#282A2C] duration-300 ease-in-out rounded-[10px] flex gap-5 xs:flex-row flex-col items-center p-[20px] shadow-md flex-1 ${!chatarea ? 'min-w-[300px] justify-between' : 'justify-center'} w-full sm:h-[160px]`}>
            <div className="flex flex-col gap-1 items-center justify-center">
                <Time/>
                <DateDay/>
            </div>
            <div className={`flex flex-col items-center gap-2 w-full ${chatarea && 'lg:flex md:hidden'}`}>
                <img src={helloIllustration} alt="hello illustration" className="w-full h-full max-h-[160px] object-fill" />
            </div>
        </section>
    )
}

export default TimeWidget;