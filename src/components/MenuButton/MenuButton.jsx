import React, { useEffect, useState } from "react";
//
function MenuBarItem({ title, tabId, currentTab, setCurrentTab }) {

    const [active, setActive] = useState(currentTab === tabId)

    useEffect(() => {
        setActive(currentTab === tabId)
    }, [currentTab])


    return (
        <div onClick={() => setCurrentTab(tabId)} className={`border cursor-pointer h-14 mb-4 flex justify-between items-center rounded-md px-4 py-2 text-sm shadow ${active ? 'bg-[#103A5E] text-white' : 'bg-[#F2F2F2] text-black'} `}>
            <div className="w-2/3"><span>{title}</span></div>
            <div className="flex flex-col justify-center"><svg className={`h-5 w-5 ${active ? 'text-white' : 'text-black'} `} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg></div>
        </div>
    );
}

export default MenuBarItem;
