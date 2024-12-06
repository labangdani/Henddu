import TopBar from "../../../components/TopBar/TopBar";
import MenuBar from "../../../components/MenuBar/MenuBar";
import MenuButton from "../../../components/MenuButton/MenuButton";
import React, { useState } from "react";
import AnnualAqi from "../../../views/AnnualAqi";
import PeriodicAnalysis from "../../../views/PeriodicAnalysis/PeriodicAnalysis";
import DailyProfiles from "../../../views/DailyProfiles";
import CorrelationAnalysis from "../../../views/CorrelationAnalysis";
import WeatherAnalysis from "../../../views/WeatherAnalysis";

const FIRST_BUTTON = "1"
const SECOND_BUTTON = "2"
const THIRD_BUTTON = "3"
const FOUTH_BUTTON = "4"
const FIVE_BUTTON = "5"

function Reporting() {

    const [currentTab, setCurrentTab] = useState("1")

    return (
        <div>
            <div className="overflow-y-auto h-full overflow-hidden w-full">
                <div className="fixed w-full">
                    <TopBar />
                </div>
                <div className="flex pt-12 w-full">
                    <div className="fixed">
                        <MenuBar />
                    </div>
                    <div className="ml-20">
                        <div className="flex ">
                            <div className="p-5 fixed">
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
                            <div className="ml-80 bg-[#F4F5F5] px-1 py-4">
                                {currentTab === FIRST_BUTTON && <div>
                                    <PeriodicAnalysis />
                                </div>}
                                {currentTab === SECOND_BUTTON && <div>
                                    <DailyProfiles />
                                </div>}
                                {currentTab === THIRD_BUTTON && <div>
                                    <WeatherAnalysis />
                                </div>}
                                {currentTab === FOUTH_BUTTON && <div>
                                    <AnnualAqi />
                                </div>}
                                {currentTab === FIVE_BUTTON && <div>
                                    <CorrelationAnalysis />
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reporting;