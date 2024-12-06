import TopBar from "../../../components/TopBar/TopBar";
import MenuBar from "../../../components/MenuBar/MenuBar";
import SimpleMap from "../../../components/SimpleMap/SimpleMap";
import ApexChart from "../../../components/apexChart/ApexChart";
import TableComponent from "../../../components/TableComponent/TableComponent";
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

    const headertitle = [
        "alert_type",
        "threshold",
        "resolved_at",
        "created_at",
        "status",
        "action",
    ];

    const formatDate = (date) => {
        const months = [
            "Jan", "Fev", "Mars", "Avr", "Mai", "Juin",
            "Juil", "Août", "Sep", "Oct", "Nov", "Dec",
        ];
        const day = String(date.getDate()).padStart(2, "0");
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const time = `${hours % 12 || 12}:${String(minutes).padStart(2, "0")} ${hours < 12 ? "AM" : "PM"
            }`;

        return `${month} ${day}, ${year}, ${time}`;
    };

    const [rows, setRows] = useState([
        {
            amount: "56789",
            moyen_paiement_img: "../src/assets/images/visa.jpg",
            moyen_paiement: "*********",
            description: "description paiement",
            client: "jenedo yves",
            date: formatDate(new Date()),
            selected: false,
        },
        {
            amount: "56789",
            moyen_paiement_img: "../src/assets/images/mtn.png",
            moyen_paiement: "674024242",
            description: "description paiement",
            client: "jenedo yves",
            date: "",
            selected: false,
        },
        // Add the rest of your rows here...
    ]);

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
                            <div className="px-3 py-5 border-b">
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
                                    <form action="" className="mt-2 text-xs">
                                        <div className="mb-4">
                                            <label htmlFor="">Select station</label>
                                            <br />
                                            <select
                                                name="station"
                                                className="p-1 border w-full rounded-md mt-2 text-gray-700 bg-white"
                                            >
                                                <option value="abidjan">Abidjan</option>
                                                <option value="aboisso">Aboisso</option>
                                                <option value="cocody">Cocody</option>
                                                <option value="san pedro">San pedro</option>
                                            </select>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="">Select your time step</label>
                                            <br />
                                            <Calendar className="mt-2 w-full h-7 text-[0.50rem]" value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="" className="">Select one or more polluants (max 3)</label>
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
                                    <form action="" className="mt-2 text-xs">
                                        <div className="mb-4">
                                            <label htmlFor="">Select polluant</label>
                                            <br />
                                            <select
                                                name="station"
                                                className="p-1 border w-full rounded-md mt-2 text-gray-700 bg-white"
                                            >
                                                <option value="abidjan">Abidjan</option>
                                                <option value="aboisso">Aboisso</option>
                                                <option value="cocody">Cocody</option>
                                                <option value="san pedro">San pedro</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="">Select department</label>
                                            <br />
                                            <select
                                                name="station"
                                                className="p-1 border w-full rounded-md mt-2 text-gray-700 bg-white"
                                            >
                                                <option value="abidjan">Abidjan</option>
                                                <option value="aboisso">Aboisso</option>
                                                <option value="cocody">Cocody</option>
                                                <option value="san pedro">San pedro</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="" >Select influence</label>
                                            <br />
                                            <select
                                                name="station"
                                                className="p-1 border w-full rounded-md mt-2 text-gray-700 bg-white"
                                            >
                                                <option value="abidjan">Abidjan</option>
                                                <option value="aboisso">Aboisso</option>
                                                <option value="cocody">Cocody</option>
                                                <option value="san pedro">San pedro</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="" >Select your time step</label>
                                            <br />
                                            <Calendar className="mt-2 w-full h-7 text-[0.50rem]" value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
                                        </div>
                                        <div className="flex justify-center mt-10">
                                            <ButtonSpinner stylebtn="bg-[#0D7377] text-white text-[0.69rem] rounded p-2 px-3 shadow-md shadow-slate-200">Show measures</ButtonSpinner>
                                        </div>
                                    </form>

                                </div>}

                            </div>
                            <div className="p-5 w-full">
                                <SimpleMap />
                            </div>
                        </div>
                        <div className="py-8 px-6">
                            <div className="">
                                 <ApexChart /> 
                            </div>

                            <TableComponent  
                                titlehead = {headertitle}
                                values = {rows}
                            />

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime deserunt blanditiis exercitationem dolores recusandae! Itaque labore repudiandae officia error doloribus! Temporibus eum itaque quasi exercitationem quia. Ullam, alias nisi.</p>

                        </div>
                    </div> 
                   
                </div>
            </div>
        </div>
    );
}

export default DataAnalytics;