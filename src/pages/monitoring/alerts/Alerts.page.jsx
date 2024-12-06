import TopBar from "../../../components/TopBar/TopBar"
import MenuBar from "../../../components/MenuBar/MenuBar"
import React, { useState } from "react";
import AlertsContent from "../../../components/AlertsContent/AlertsContent";
import NotificationsContent from "../../../components/NotificationsContent/NotificationsContent";



const FIRST_TAB = "alerts"
const SECOND_TAB = "notifications"

function Alerts() {
    const [activeTab, setActiveTab] = useState(FIRST_TAB);

    const handleButtonClick = (tab) => {
        setActiveTab(tab)
    };

    return (
        <div>
            <div className="overflow-y-auto h-full overflow-hidden w-full">
                <div className="fixed w-full">
                    <TopBar />
                </div>
                <div className="flex pt-12">
                    <div className="fixed">
                        <MenuBar />
                    </div>
                    <div className="ml-20">
                        <div className="overflow-y-auto h-screen overflow-hidden flex-auto bg-[#F1F1F1] p-7">
                            <h1 className="font-semibold capitalize">{activeTab}</h1>
                            <div className="border-b-2 border-gray-200 mb-5">
                                <ul className="flex flex-wrap -mb-px">
                                    <li className="mr-4">
                                        <button
                                            onClick={(e) => { e.preventDefault(); handleButtonClick(FIRST_TAB) }}
                                            className={`inline-block text-gray-500 rounded-t-lg py-2 text-sm font-medium text-center ${activeTab === FIRST_TAB ? ' border-[#103A5E] border-b-2 ' : ''}`}
                                        >
                                            <span className={`rounded p-1 -ml-1 hover:bg-gray-200 ${activeTab === FIRST_TAB ? 'text-[#103A5E]' : ''}`}> Alerts </span>
                                        </button>
                                    </li>
                                    <li className="mr-4">
                                        <button
                                            onClick={(e) => { e.preventDefault(); handleButtonClick(SECOND_TAB) }}
                                            className={`inline-block text-gray-500 rounded-t-lg py-2 text-sm font-medium text-center ${activeTab === SECOND_TAB ? 'border-[#103A5E] border-b-2 ' : ''}`}
                                        >
                                            <span className={`rounded p-1 -ml-1 hover:bg-gray-200" ${activeTab === SECOND_TAB ? 'text-[#103A5E]' : ''}`}> Notifications </span>
                                        </button>
                                    </li>

                                </ul>
                            </div>
                            {activeTab === FIRST_TAB &&
                                <AlertsContent />
                            }

                            {activeTab === SECOND_TAB &&
                                <NotificationsContent />
                            }
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
}

export default Alerts;