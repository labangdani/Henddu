import TopBar from "../../../components/TopBar/TopBar";
import MenuBar from "../../../components/MenuBar/MenuBar";
import SimpleMap from "../../../components/SimpleMap/SimpleMap";
import ApexChart from "../../../components/apexChart/ApexChart";
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import ButtonSpinner from "../../../components/ButtonSpinner/ButtonSpinner";

function DataAnalytics() {
    const [dates, setDates] = useState(null)
    const [activeButton, setActiveButton] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const buttons = [
        { id: 1, label: "Ozone" },
        { id: 2, label: "Particules PM10" },
        { id: 3, label: "Nitrogen dioxide" },
        { id: 4, label: "Sulfur dioxide" },
    ];

    const handleButtonClick = (id) => {
        const index = activeButton.indexOf(id);
        if (index > -1) {
            const temp = [...activeButton]
            temp.splice(index, 1)
            setActiveButton(temp)
        }
        else {
            setActiveButton([...activeButton, id])
        }
    };

    return (
        <div>
            <TopBar />
            <div className="flex top-12 fixed">
                <MenuBar />
                <div className="overflow-y-auto h-screen overflow-hidden w-full">
                    <div className="flex">
                        <div className="px-3 py-5 w-2/7">
                            <h1 className="text-[#103A5E] text-lg font-semibold">Data analytics</h1>
                            <hr />

                            <div className="w-full mt-5 flex rounded-md divide-x-1 text-xs">
                                <button
                                    onClick={() => setActiveIndex(0)}
                                    className={`py-1 w-full rounded-l-md ${activeIndex === 0 ? 'bg-[#103A5E] text-white' : 'text-[#103A5E] bg-gray-200'}`}
                                >
                                    <span>Access by station</span>
                                </button>
                                <button
                                    onClick={() => setActiveIndex(1)}
                                    className={`py-1 w-full rounded-r-md ${activeIndex === 1 ? 'bg-[#103A5E] text-white' : 'text-[#103A5E] bg-gray-200'}`}
                                >
                                    <span>Access by polluant</span>
                                </button>
                            </div>

                            {activeIndex === 0 && <div className="mt-5">
                                <span className="uppercase text-xs">filter by</span>
                                <form action="" className="mt-2">
                                    <div className="mb-4">
                                        <label htmlFor="" className="text-xs ">Select station</label>
                                        <br />
                                        <select
                                            name="station"
                                            className="p-1 border w-full rounded-md mt-2 text-sm text-gray-700 bg-white"
                                        >
                                            <option value="abidjan">Abidjan</option>
                                            <option value="aboisso">Aboisso</option>
                                            <option value="cocody">Cocody</option>
                                            <option value="san pedro">San pedro</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="" className="text-xs ">Select your time step</label>
                                        <br />
                                        <Calendar className="mt-2 w-full h-7 text-[0.69rem]" value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="" className="text-xs ">Select one or more polluants (max 3)</label>
                                        <br />
                                        <div className="flex space-x-2 text-[0.56rem] mt-2">
                                            {buttons.map((button) => (
                                                <button
                                                    key={button.id}
                                                    onClick={(e) => { e.preventDefault(); handleButtonClick(button.id) }}
                                                    className={`rounded p-1 border shadow-md shadow-slate-200 ${activeButton.includes(button.id) ? 'bg-[#3D8F92] text-white' : 'bg-white'
                                                        }`}
                                                >
                                                    {button.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-center mt-20">
                                        <ButtonSpinner stylebtn="bg-[#0D7377] text-white text-[0.69rem] rounded p-2 px-3 shadow-md shadow-slate-200">Show measures</ButtonSpinner>
                                    </div>
                                </form>

                            </div>}

                            {activeIndex === 1 && <div className="mt-5">
                                <span className="uppercase text-xs">filter by</span>
                                <form action="" className="mt-2">
                                    <div className="mb-4">
                                        <label htmlFor="" className="text-xs ">Select polluant</label>
                                        <br />
                                        <select
                                            name="station"
                                            className="p-1 border w-full rounded-md mt-2 text-sm text-gray-700 bg-white"
                                        >
                                            <option value="abidjan">Abidjan</option>
                                            <option value="aboisso">Aboisso</option>
                                            <option value="cocody">Cocody</option>
                                            <option value="san pedro">San pedro</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="" className="text-xs ">Select department</label>
                                        <br />
                                        <select
                                            name="station"
                                            className="p-1 border w-full rounded-md mt-2 text-sm text-gray-700 bg-white"
                                        >
                                            <option value="abidjan">Abidjan</option>
                                            <option value="aboisso">Aboisso</option>
                                            <option value="cocody">Cocody</option>
                                            <option value="san pedro">San pedro</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="" className="text-xs ">Select influence</label>
                                        <br />
                                        <select
                                            name="station"
                                            className="p-1 border w-full rounded-md mt-2 text-sm text-gray-700 bg-white"
                                        >
                                            <option value="abidjan">Abidjan</option>
                                            <option value="aboisso">Aboisso</option>
                                            <option value="cocody">Cocody</option>
                                            <option value="san pedro">San pedro</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="" className="text-xs ">Select your time step</label>
                                        <br />
                                        <Calendar className="mt-2 w-full h-7 text-[0.69rem]" value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
                                    </div>

                                    <div className="flex justify-center mt-10">
                                        <ButtonSpinner stylebtn="bg-[#0D7377] text-white text-[0.69rem] rounded p-2 px-3 shadow-md shadow-slate-200">Show measures</ButtonSpinner>
                                    </div>
                                </form>

                            </div>}


                        </div>
                        <div className="flex-auto">
                            <SimpleMap />
                        </div>
                    </div>
                    <div>
                    
                    <ApexChart />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime deserunt blanditiis exercitationem dolores recusandae! Itaque labore repudiandae officia error doloribus! Temporibus eum itaque quasi exercitationem quia. Ullam, alias nisi.</p>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum aliquam non officiis fugiat dolor eaque aliquid in quod, et perferendis, nam, facilis commodi iusto cum rem corrupti maxime placeat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum aliquam non officiis fugiat dolor eaque aliquid in quod, et perferendis, nam, facilis commodi iusto cum rem corrupti maxime placeat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum aliquam non officiis fugiat dolor eaque aliquid in quod, et perferendis, nam, facilis commodi iusto cum rem corrupti maxime placeat.</p>
                     */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataAnalytics;