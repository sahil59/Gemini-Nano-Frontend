import { useState } from "react"

const DateDay = () => {

    // update date and day after its 12:00 AM

    const [date, setDate] = useState(new Date().toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long'}))

    useState(() => {
        const interval = setInterval(() => {
            setDate(new Date().toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long'}))
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [date])

    return (
        <>
            <span className="whitespace-nowrap text-black dark:text-white duration-300 ease-in-out">
                {date}
            </span>
        </>
    )
}

export default DateDay
