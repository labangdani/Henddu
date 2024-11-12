import TopBar from "../../components/TopBar/TopBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import MenuButton from "../../components/MenuButton/MenuButton";
import React from "react";
import { useState } from "react"

const FIRST_BUTTON = "1"
const SECOND_BUTTON = "2"
const THIRD_BUTTON = "3"
const FOUTH_BUTTON = "4"
const FIVE_BUTTON = "5"

function Reporting() {

    const [currentTab, setCurrentTab] = useState("1")

    return (
        <div>
            <TopBar />
            <div className="flex top-12 fixed ">
                <MenuBar />
                <div className="overflow-y-auto h-screen overflow-hidden flex">
                    <div className="p-5 w-2/5">
                        <h1 className="text-[#103A5E] text-lg font-semibold">Reporting</h1>
                        <div className="bg-white border-2 rounded p-4 border-slate-300 mt-5 shadow">
                            <MenuButton
                            title={"Periodic analysis of air quality"}
                            tabId={FIRST_BUTTON}
                            currentTab={currentTab}
                            setCurrentTab={setCurrentTab}
                            />
                            <MenuButton
                            title={"Daily profiles"}
                            tabId={SECOND_BUTTON}
                            currentTab={currentTab}
                            setCurrentTab={setCurrentTab}
                            />
                            <MenuButton
                            title={"Weather analysis"}
                            tabId={THIRD_BUTTON}
                            currentTab={currentTab}
                            setCurrentTab={setCurrentTab}
                            />
                            <MenuButton
                            title={"Annual AQI calendar"}
                            tabId={FOUTH_BUTTON}
                            currentTab={currentTab}
                            setCurrentTab={setCurrentTab}
                            />
                            <MenuButton
                            title={"Correlation analysis"}
                            tabId={FIVE_BUTTON}
                            currentTab={currentTab}
                            setCurrentTab={setCurrentTab}
                            />
                            

                        </div>



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

export default Reporting;