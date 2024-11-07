import logo from "../../assets/logos/henddu_logo.png"
import { IoMdNotifications } from "react-icons/io";
import UserMenu from "../UserMenu/UserMenu";

const TopBar = () => {
    return (
        <header className="sticky top-0 bg-white text-white">
            <div class="px-4">
                <div class="flex items-center justify-between h-12">
                    <div className="flex items-center space-x-8 font-medium text-xs">
                        <div>
                            <img className="h-9" src={logo} alt="capture henddu logo" />
                        </div>
                        <button className="rounded-md bg-[#0D7377] p-2 text-white uppercase">
                            monitoring
                        </button>

                        <button className=" text-[#0D7377] uppercase">
                            analytics
                        </button>

                        <button className="text-[#0D7377] uppercase">
                            forecast
                        </button>
                    </div>
                    <div className="flex items-center text-black space-x-6">
                        <div className="relative items-center">
                            <IoMdNotifications className="text-gray-500" size={26} />
                            <div className="absolute top-0 -right-1 rounded-full bg-red-500 text-white h-4 w-4 flex justify-center text-[0.65rem]"><span >5</span></div>
                        </div>
                        <div><UserMenu /></div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default TopBar;