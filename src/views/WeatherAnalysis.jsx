import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Fieldset } from 'primereact/fieldset';
import { Calendar } from 'primereact/calendar';

const WeatherAnalysis = () => {
    const [dates, setDates] = useState(null)

    return (
        <div className=" p-5">
            <div className="flex justify-between mb-2">
                <div className="text-[#103A5E] font-semibold text-lg">
                    Weather Analysis
                </div>
                <button className="bg-[#0D7377] rounded text-white text-xs px-4 py-2 flex items-center space-x-2">
                    <span> Generate Report</span>
                    <MdOutlineFileDownload size={16} />
                </button>
            </div>

            <div className="flex justify-between bg-white border rounded p-2">
                <div className="flex space-x-2">
                    <select className="bg-[#F9F9FB] border rounded p-1 text-gray-500 text-xs" name="subtype" id="">
                        <option value="subtype">Sensor</option>
                    </select>
                    <select className="bg-[#F9F9FB] border rounded p-1 text-gray-500 text-xs" name="station" id="">
                        <option value="subtype">National Daily Air Quality Index</option>
                    </select>
                    <Calendar className=" text-gray-500 text-xs p-inputtext-sm" variant="filled" value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
                </div>

                <div>
                    <button className="bg-[#0D7377] border rounded py-2 px-3 text-white text-xs">
                        Apply
                    </button>
                </div>
            </div>

            <div className="mt-8 bg-white p-5">
                <Fieldset legend="Header">
                    <p className="m-0">
                        <Fieldset legend="Header">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Fieldset>
                    </p>
                </Fieldset>
            </div>



        </div>
    );
}

export default WeatherAnalysis;