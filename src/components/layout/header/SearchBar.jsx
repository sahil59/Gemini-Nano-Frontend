const SearchBar = () => {
    return (
        <label className="bg-[#e5e5e5] dark:bg-[#252525] duration-300 ease-in-out rounded-[5px] flex items-center justify-start px-2 w-[350px] h-[40px] gap-2">
            <span className="material-symbols-outlined text-[#444444] dark:text-[#9d9d9d] duration-300 ease-in-out text-[1rem]">
                search
            </span>
            <input type="text" name="" id="" placeholder="Search or Write any query to ask Gemini" className="text-[0.9rem] w-full bg-transparent border-none outline-none focus:ring-0 text-black dark:text-white duration-300 ease-in-out placeholder:text-[#444444c0] dark:placeholder:text-[#bbbbbbc0] placeholder:duration-300 placeholder:ease-in-out" />
        </label>
    )
}

export default SearchBar;