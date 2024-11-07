import React, { useEffect, useState } from "react";

const TabButton = ({ title, icon, activeIcon, tabId, currentTab, setCurrentTab }) => {

    const [active, setActive] = useState(currentTab === tabId)
    useEffect(()=> {
        setActive(currentTab === tabId)
    }, [currentTab])

    return (
        <button onClick={() => setCurrentTab(tabId)} className={`px-6 py-4 border-b-4 ${active ? 'border-[#0D7377] text-[#0D7377]' : 'border-gray-500 text-gray-400'} `}>
            <div className="flex justify-center">
                <img
                    className={`mb-2 w-10`}
                    src={active ? activeIcon : icon}
                    alt="capture monitoringicon" />
            </div>
            <span className="capitalize text-center">{title}</span>
        </button>
    )

}


export default TabButton;
