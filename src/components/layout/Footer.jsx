import { Link } from "react-router-dom";
import SubscribeInupt from "./footer/SubscribeInupt";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#282A2C] duration-300 ease-in-out rounded-[10px] min-h-[60px] flex lg:flex-row flex-col-reverse gap-5 p-[10px] justify-between items-center shadow-md">
            <div>
                <span className="text-[#666666] dark:text-[#aaaaaa] duration-300 ease-in-out">
                    © {new Date().getFullYear()} Google LLC
                </span>
            </div>
            <div className="flex gap-5 text-[0.8rem]">
                <Link className="text-[#666666] hover:text-black dark:text-[#aaaaaa] dark:hover:text-white duration-300 ease-in-out">
                    About product
                </Link>
                <Link className="text-[#666666] hover:text-black dark:text-[#aaaaaa] dark:hover:text-white duration-300 ease-in-out">
                    Privacy
                </Link>
                <Link className="text-[#666666] hover:text-black dark:text-[#aaaaaa] dark:hover:text-white duration-300 ease-in-out">
                    Terms
                </Link>
            </div>
            <div>
                <SubscribeInupt />
            </div>
        </footer>
    )
}

export default Footer;