import { MdDashboard, MdSettings, MdHelpOutline } from "react-icons/md";
import { TbBellRinging, TbDeviceImacCog, TbClipboardText } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";
import MenuBarItem from "../MenuBarItem/MenuBarItem";

const MenuBar = () => {
    return (
        <div className="bg-[#0D7377] max-w-min h-full flex justify-center ">
            <div className="text-white">
                <MenuBarItem label="Dashboard" Icon={MdDashboard} onClick={() => console.log('Dashboard clicked')} />
                <MenuBarItem label="Data analytics" Icon={MdDashboard} onClick={() => console.log('Dashboard clicked')} />
                <MenuBarItem label="Reporting" Icon={TbClipboardText} onClick={() => console.log('Dashboard clicked')} />
                <MenuBarItem label="Device Management" Icon={TbDeviceImacCog} onClick={() => console.log('Dashboard clicked')} />
                <MenuBarItem label="Alert" Icon={TbBellRinging} onClick={() => console.log('Dashboard clicked')} />
                <MenuBarItem label="Data sharing & collaboration" Icon={IoAnalyticsOutline} onClick={() => console.log('Dashboard clicked')} />
                <MenuBarItem label="Settings" Icon={MdSettings}  onClick={() => console.log('Settings clicked')} />
                <MenuBarItem label="Help" Icon={MdHelpOutline} onClick={() => console.log('Settings clicked')} />

            </div>
        </div>
    );
};
export default MenuBar;