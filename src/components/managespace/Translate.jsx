import { useEffect, useState } from 'react';
import { checkTranslatorSupport, getTranslatorCapabilities, translateContent } from '../../functions/translate';
import LoaderSpinner from '../reusable/LoaderSpinner';
import { useDispatch } from 'react-redux';
import { fileActionType } from '../../redux/action';
import PropTypes from 'prop-types';

const Translate = ({fileDetails}) => {
    const [streamedText, setStreamedText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [support, setSupport] = useState(null);
    const [supportLoading, setSupportLoading] = useState(true);
    const [available, setAvailable] = useState(null);
    const [availableLoading, setAvailableLoading] = useState(true);

    const dispatch = useDispatch();

    const fetchStreamingTranslatedText = async () => {
        try {
            const stream = await translateContent('History of Latin type The rich history of type design and the technical evolution of typesetting are woven into our everyday practice of typography, from how we select fonts to how we use spacing. And while the tools we have today are more capable than ever, designing is still about problem solving. Looking to the challenges and solutions from the past helps give us a deeper understanding of how type works.');
            let accumulatedText = '';

            for await (const char of stream) {
                accumulatedText += char;
                setStreamedText(accumulatedText);
            }

            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching streamed translated text:', error);
        }
    };

    useEffect(() => {
        const runTranslator = async () => {
            const support = checkTranslatorSupport();
            if (support) {
                setSupport(true);
                setSupportLoading(false);
                const availableType = await getTranslatorCapabilities();
                if (availableType === 'readily') {
                    setAvailable(true);
                    setAvailableLoading(false);
                    fetchStreamingTranslatedText();
                } else {
                    setAvailable(false);
                    setAvailableLoading(false);
                }
            } else {
                setSupport(false);
                setSupportLoading(false);
                setAvailableLoading(false);
            }
        }
        runTranslator();
    }, []);

    return (
        <section className='flex flex-col items-start w-full gap-2'>
            <div className='flex items-start justify-start gap-2'>
                <button className='flex items-center justify-center mt-1' onClick={() => dispatch(fileActionType(null,null))}>
                    <span className="material-symbols-outlined text-[1rem] text-black dark:text-white duration-300 ease-in-out">
                        arrow_back
                    </span>
                </button>
                <h2 className='font-bold w-full text-black dark:text-white duration-300 ease-in-out'>
                    Translation of file - {fileDetails.name} in Hindi
                </h2>
            </div>
            <div className='flex flex-col gap-2 bg-[#EFF6FF] dark:bg-[#383a3c] py-2 px-4 rounded-[5px] w-full duration-300 ease-in-out'>
                <span className='text-black dark:text-white duration-300 ease-in-out text-[0.9rem]'>
                    Browser compatibility
                </span>
                <div className="flex flex-col gap-1">
                    {supportLoading ? (
                        <div className='flex gap-1 items-start'>
                            <LoaderSpinner />
                            <span className='text-[0.8rem] text-[#4C4C4C] dark:text-[#c4c4c4] duration-300 ease-in-out animate-pulse'>
                                Checking support...
                            </span>
                        </div>
                    ) : (
                        <div>
                            {support ?
                                <div className='flex gap-1 items-start'>
                                    <span className="material-symbols-outlined text-[#3367d6] dark:text-[#70B1FF] duration-300 ease-in-out text-[0.8rem] pt-[3px]">
                                        check_circle
                                    </span>
                                    <span className='text-[0.8rem] text-[#4C4C4C] dark:text-[#c4c4c4] duration-300 ease-in-out'>
                                        Translator is supported in your browser.
                                    </span>
                                </div>
                                :
                                <div className='flex gap-1 items-start'>
                                    <span className="material-symbols-outlined text-[#DB4437] text-[0.8rem] pt-[3px]">
                                        cancel
                                    </span>
                                    <span className='text-[0.8rem] text-[#4C4C4C] dark:text-[#c4c4c4] duration-300 ease-in-out'>
                                        Translator is not supported in your browser.
                                    </span>
                                </div>
                            }
                        </div>
                    )}
                    {availableLoading
                        ? (
                            <div className='flex gap-1 items-start'>
                                <LoaderSpinner />
                                <span className='text-[0.8rem] text-[#4C4C4C] dark:text-[#c4c4c4] duration-300 ease-in-out animate-pulse'>
                                    Checking availability...
                                </span>
                            </div>
                        )
                        : (
                            <div>
                                {available ?
                                    <div className='flex gap-1 items-start'>
                                        <span className="material-symbols-outlined text-[#3367d6] dark:text-[#70B1FF] duration-300 ease-in-out text-[0.8rem] pt-[3px]">
                                            check_circle
                                        </span>
                                        <span className='text-[0.8rem] text-[#4C4C4C] dark:text-[#c4c4c4] duration-300 ease-in-out'>
                                            Translator is available in your browser.
                                        </span>
                                    </div>
                                    :
                                    support ?
                                    <div className='flex gap-1 items-start'>
                                        <span className="material-symbols-outlined text-[#F4B400] text-[0.8rem] pt-[3px]">
                                            warning
                                        </span>
                                        <span className='text-[0.8rem] text-[#4C4C4C] dark:text-[#c4c4c4] duration-300 ease-in-out'>
                                            Translator is supported but not available in your browser.
                                        </span>
                                    </div>
                                    :
                                    <div className='flex gap-1 items-start'>
                                        <span className="material-symbols-outlined text-[#DB4437] text-[0.8rem] pt-[3px]">
                                            cancel
                                        </span>
                                        <span className='text-[0.8rem] text-[#4C4C4C] dark:text-[#c4c4c4] duration-300 ease-in-out'>
                                            Translator is neither supported nor available in your browser.
                                        </span>
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='text-black dark:text-white duration-300 ease-in-out'>
                {streamedText}
                {isLoading && support && available && (
                    <div className="inline-block w-2 h-2 bg-black dark:bg-white duration-300 ease-in-out rounded-full animate-pulse"></div>
                )}
            </div>
        </section>
    );
}

Translate.propTypes = {
    fileDetails: PropTypes.object.isRequired
}

export default Translate;