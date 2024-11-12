import { MdDashboard, MdSettings, MdHelpOutline } from "react-icons/md";
import { TbBellRinging, TbDeviceImacCog, TbClipboardText } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";
import MenuBarItem from "../MenuBarItem/MenuBarItem";
import "./MenuBar.css"

const MenuBar = () => {

    return (
        <div className="overflow-y-auto scrollbar-hide bg-[#0D7377] h-screen max-w-min">
            <div className="text-white flex flex-col justify-between">
                <div>
                    <MenuBarItem
                        label="Dashboard"
                        to={"/monitoring/dashbord"}
                        Icon={MdDashboard}
                    />

                    <MenuBarItem
                        label="Data analytics"
                        to={"/monitoring/data-analytics"}
                        Icon={MdDashboard}
                    />

                    <MenuBarItem
                        label="Reporting"
                        to={"/monitoring/reporting"}
                        Icon={TbClipboardText}
                    />
                    <MenuBarItem
                        label="Device Management"
                        Icon={TbDeviceImacCog}
                        to={"/monitoring/device-management"}
                    />
                    <MenuBarItem
                        label="Alert"
                        Icon={TbBellRinging}
                        to={"/monitoring/alert"}
                    />
                    <MenuBarItem
                        label="Data sharing & collaboration"
                        Icon={IoAnalyticsOutline}
                        to={"/monitoring/data-sharing-collaboration"}
                    />
                </div>

                <div >
                    <MenuBarItem
                        label="Settings"
                        Icon={MdSettings}
                        to={"/monitoring/settings"}
                    />
                    <MenuBarItem
                        label="Help"
                        Icon={MdHelpOutline}
                        to={"/monitoring/help"}
                    />
                </div>
            </div>
        </div>
    );
};
export default MenuBar;