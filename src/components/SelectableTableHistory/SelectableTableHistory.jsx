import { React, useState } from "react";

const SelectableTableHistory = () => {
    const [allSelected, setAllSelected] = useState(false);
    const [rows, setRows] = useState([
        {
            file_extension:"rar",
            name: "national air quality report",
            author: "amelia lia",
            updated: " 14 jul 2023",
            size: "70MB"
        },
        {
            file_extension:"pdf",
            name: "dynamic station graphics",
            author: "amelia lia",
            updated: " 14 jul 2023",
            size: "70MB"
        },
        {
            file_extension:"jpg",
            name: "national air quality report",
            author: "amelia lia",
            updated: " 14 jul 2023",
            size: "70MB"
        },
        {
            file_extension:"png",
            name: "national air quality report",
            author: "amelia lia",
            updated: " 14 jul 2023",
            size: "70MB"
        }
    ])

    const selectAllRows = () => {
        setAllSelected(!allSelected);
        setRows((prevRows) =>
            prevRows.map((row) => ({ ...row, selected: !allSelected }))
        );
    };

    const selectRow = (index) => {
        const updatedRows = [...rows];
        updatedRows[index].selected = !updatedRows[index].selected;
        setRows(updatedRows);
        setAllSelected(updatedRows.every((row) => row.selected));
    };


    return (
        <div class="container mx-auto">
            <table class="table-auto w-full border-collapse">
                <thead>
                    <tr class="text-left text-sm font-medium text-gray-700">
                        <th class="py-2 px-3">
                            <input
                                type="checkbox"
                                class="form-checkbox text-blue-500"
                                checked={allSelected}
                                onChange={selectAllRows}
                            />
                        </th>
                        <th class="py-2 px-3">Name</th>
                        <th class="py-2 px-3">Author</th>
                        <th class="py-2 px-3">Updated</th>
                        <th class="py-2 px-3">Size</th>
                    </tr>
                </thead>
                <tbody class="text-sm text-gray-600 mt-5">
                    {/* <!-- Row Template --> */}
                    {rows.map((row, index) => (
                        <tr
                            key={index}
                            className={` ${row.selected ? "bg-gray-100" : ""
                                } hover:bg-gray-100`}
                        >
                            {/* <tr class=" hover:bg-gray-100"> */}
                            <td class="py-2 px-3">
                                <input
                                    type="checkbox"
                                    class="form-checkbox text-blue-500"
                                    checked={row.selected}
                                    onChange={() => selectRow(index)} />
                            </td>
                            <td class="py-2 px-3 flex items-center space-x-3">
                                <span class="flex-shrink-0 bg-red-500 text-white rounded px-2 py-1 text-xs font-medium">
                                    {row.file_extension}
                                </span>
                                <span className="capitalize text-xs">{row.name}</span>
                            </td>
                            <td class="py-2 px-3 capitalize text-xs">{row.author}</td>
                            <td class="py-2 px-3 text-xs">{row.updated}</td>
                            <td class="py-2 px-3 text-xs">{row.size}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};
export default SelectableTableHistory;