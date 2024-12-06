import TopBar from "../../../components/TopBar/TopBar"
import MenuBar from "../../../components/MenuBar/MenuBar"
import React, { useState } from "react";
import MenuButton from "../../../components/MenuButton/MenuButton";
import Information from "../../../views/Information";
import IntegrationApi from "../../../views/IntegrationApi";
import DataValidation from "../../../views/DataValidation";
import Calibration from "../../../views/Calibration";

const FIRST_BUTTON = "1"
const SECOND_BUTTON = "2"
const THIRD_BUTTON = "3"
const FOUTH_BUTTON = "4"


function DeviceManagement() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [currentTab, setCurrentTab] = useState("1")

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
                        <div className="flex ">
                            <div className="p-5 w-80 fixed">
                                <h1 className="text-[#103A5E] text-lg font-semibold">Device management</h1>
                                <hr />
                                <div className="w-full mt-5 flex rounded-md divide-x-1 text-xs">
                                    <button
                                        onClick={() => setActiveIndex(0)}
                                        className={`py-1 w-full rounded-l-md ${activeIndex === 0 ? 'bg-[#103A5E] text-white' : 'text-[#103A5E] bg-gray-200'}`}
                                    >
                                        <span>Network's devices</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveIndex(1)}
                                        className={`py-1 w-full rounded-r-md ${activeIndex === 1 ? 'bg-[#103A5E] text-white' : 'text-[#103A5E] bg-gray-200'}`}
                                    >
                                        <span>External devices</span>
                                    </button>
                                </div>

                                {activeIndex === 0 && <div className="bg-white border-2 rounded p-4 border-slate-300 mt-5 shadow">
                                    <MenuButton
                                        title={"Integration (API)"}
                                        tabId={FIRST_BUTTON}
                                        currentTab={currentTab}
                                        setCurrentTab={setCurrentTab}
                                    />
                                    <MenuButton
                                        title={"Information"}
                                        tabId={SECOND_BUTTON}
                                        currentTab={currentTab}
                                        setCurrentTab={setCurrentTab}
                                    />
                                    <MenuButton
                                        title={"Calibration"}
                                        tabId={THIRD_BUTTON}
                                        currentTab={currentTab}
                                        setCurrentTab={setCurrentTab}
                                    />
                                    <MenuButton
                                        title={"Data validation"}
                                        tabId={FOUTH_BUTTON}
                                        currentTab={currentTab}
                                        setCurrentTab={setCurrentTab}
                                    />

                                </div>}

                                {activeIndex === 1 && <div className="mt-5">
                                    External device content
                                </div>
                                }
                            </div>
                            <div className="ml-80 bg-[#F4F5F5] p-4 w-screen h-screen">
                                {currentTab === FIRST_BUTTON && <div>
                                    <IntegrationApi />
                                </div>}

                                {currentTab === SECOND_BUTTON && <div>
                                    <Information />
                                </div>}
                                {currentTab === THIRD_BUTTON && <div>
                                    <Calibration />
                                </div>}
                                {currentTab === FOUTH_BUTTON && <div>
                                    <DataValidation />
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeviceManagement;