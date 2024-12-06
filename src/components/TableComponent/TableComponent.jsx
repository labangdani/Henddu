import React from "react";

const TableComponent = ({titlehead, values}) => {


    return (
        <div className="container mx-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className="flex space-x-10 mx-4">
                        {titlehead.map((row, index) => (
                            <th
                                key={index}
                                className="py-2 text-left font-bold text-[0.7rem] text-black capitalize tracking-wider"
                            >
                                {row}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-500">
                    {values.map((row, index) => (
                        <tr
                            key={index}
                            className={`px-5 ${row.selected ? "bg-[#FAFBFD]" : ""
                                } hover:bg-[#FAFBFD]`}
                        >
                            <td className="px-4 py-1 whitespace-nowrap">
                               { row.client}
                            </td>

                            {/* Other table cells */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
