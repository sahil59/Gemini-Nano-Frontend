const SubscribeInupt = () => {

    const handleSubscription = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubscription} className="flex gap-2">
            <label className="bg-[#e5e5e5] dark:bg-[#252525] duration-300 ease-in-out rounded-[5px] flex items-center justify-start px-2 h-[40px] gap-2">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#444444] dark:text-[#9d9d9d] duration-300 ease-in-out text-[1rem]">
                        mail
                    </span>
                    <input type="email" placeholder="Subscribe to get updates" className="text-[0.9rem] w-full bg-transparent border-none outline-none focus:ring-0 text-black dark:text-white duration-300 ease-in-out placeholder:text-[#444444c0] dark:placeholder:text-[#bbbbbbc0] placeholder:duration-300 placeholder:ease-in-out" required />
                </div>
            </label>
            <button type="submit" className="bg-[#3367D6] duration-300 ease-in-out px-2 rounded-[5px] text-white text-[0.9rem]">Subscribe</button>
        </form>
    )
}

export default SubscribeInupt;