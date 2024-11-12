import TopBar from "../../components/TopBar/TopBar"
import MenuBar from "../../components/MenuBar/MenuBar"
import React, { useState } from "react";
import MenuButton from "../../components/MenuButton/MenuButton";

const FIRST_BUTTON = "1"
const SECOND_BUTTON = "2"
const THIRD_BUTTON = "3"
const FOUTH_BUTTON = "4"


function DeviceManagement() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [currentTab, setCurrentTab] = useState("1")


    return (
        <div>
            <TopBar />
            <div className="flex top-12 fixed ">
                <MenuBar />
                <div className="overflow-y-auto h-screen overflow-hidden flex">
                    <div className="p-5 w-2/5">
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
                    <div className="flex-auto bg-[#F4F5F5] p-4">
                        <div className="bg-white p-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum aliquam non officiis fugiat dolor eaque aliquid in quod, et perferendis, nam, facilis commodi iusto cum rem corrupti maxime placeat.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum aliquam non officiis fugiat dolor eaque aliquid in quod, et perferendis, nam, facilis commodi iusto cum rem corrupti maxime placeat.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum aliquam non officiis fugiat dolor eaque aliquid in quod, et perferendis, nam, facilis commodi iusto cum rem corrupti maxime placeat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeviceManagement;