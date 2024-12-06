import React from "react";
import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { MdAddCircleOutline } from "react-icons/md";
import SelectableTable from "../../components/SelectableTable/SelectableTable";


const NotificationsContent = () => {
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

    const headertitle = [
        "message",
        "sent_at",
        "is_read",
        "method",
        "severity",
        "actions",
    ];

    const datas = [
        {
            message: "temperature",
            sent_at: "25",
            is_read: "*********",
            method: "description paiement",
            severity: "activity",
        },
        {
            message: "stock level",
            sent_at: "25",
            is_read: "*********",
            method: "description paiement",
            severity: "activity",
        },
        {
            message: "network traffic",
            sent_at: "1",
            is_read: "*********",
            method: "description paiement",
            severity: "inactivity",
        },
        {
            message: "pression",
            sent_at: "25",
            is_read: "*********",
            method: "description paiement",
            severity: "inactivity",
        },
        {
            message: "Wilson Philips",
            sent_at: "25",
            is_read: "*********",
            method: "description paiement",
            severity: "inactivity",
        }
    ];

    return (
        <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 bg-white py-2 border rounded">
                <div className="flex justify-end mb-2 mx-4 space-x-2">
                    <button className="border rounded p-2">
                        <BiSearch />
                    </button >
                    <button className="border rounded p-2">
                        <FiFilter />
                    </button>
                    <button className="bg-[#103A5E] rounded py-1 px-2 text-white flex items-center space-x-2">
                        <MdAddCircleOutline />
                        <span className="text-[0.7rem]">Add new</span>
                    </button>
                </div>
                <hr />
                <SelectableTable titlehead={headertitle} values={datas}></SelectableTable>
            </div>
            <div className="col-span-1 bg-white p-5 border rounded">
                <h1 className="font-medium text-base mb-4">Details</h1>
                <div className="text-[0.75rem] space-y-4">
                    <p>Several raw PM2.5 mass concentration readings are above expected bound. This might indicate a sensor malfunction.
                        Alarm raised at 2023-09-23 14:16 (UTC +02.00)
                        System looked back to 2023-09-23 11:00 [UTC +02:00) and found 100% of readings indicated PM2.5 mass concentration above expected bound
                    </p>
                    <p>
                        Alarm was last extended on 2023-09-29 15:06 (UTC +02.00)
                    </p>
                    <p>
                        System looked back to 2023-09-29 12:00 (UTC +02:00) and found 100% of readings indicated PM2.5 mass concentration above expected
                        bound
                        For more details about this alarm and how to troubleshoot it. please refer to this Clarity Knowledge Base artile.
                    </p>
                </div>
            </div>
        </div>);
};
export default NotificationsContent