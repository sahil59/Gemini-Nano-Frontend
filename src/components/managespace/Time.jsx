import { useEffect, useState } from "react"

const Time = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [time])

    return (
        <>
            <span className="whitespace-nowrap text-black dark:text-white duration-300 ease-in-out">
                {
                    new Date().getHours() < 12 ? 'Good Morning' :
                    new Date().getHours() < 18 ? 'Good Afternoon' :
                    new Date().getHours() < 21 ? 'Good Evening' : 'Good Night'
                }, Sahil
            </span>
            <span className="text-[2.2rem] whitespace-nowrap text-black dark:text-white duration-300 ease-in-out">
                {time}
            </span>
        </>
    )
}

export default Time
