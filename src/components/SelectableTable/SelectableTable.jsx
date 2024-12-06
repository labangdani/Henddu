import React, { useState, useMemo } from "react";

const SelectableTable = ({titlehead, values}) => {

  const [rows, setRows] = useState(values);

  const [allSelected, setAllSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  const paginatedRows = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return rows.slice(start, start + rowsPerPage);
  }, [rows, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(rows.length / rowsPerPage);

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

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="flex space-x-10 mx-4">
            <th className="py-2 text-left text-xs font-bold text-gray-700 tracking-wider">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={selectAllRows}
              />
            </th>
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
          {paginatedRows.map((row, index) => (
            <tr
              key={index}
              className={`px-5 ${row.selected ? "bg-[#FAFBFD]" : ""
                } hover:bg-[#FAFBFD]`}
            >
              <td className="px-4 py-1 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={row.selected}
                  onChange={() => selectRow(index)}
                />
              </td>
              {/* <td className="px-4 py-1 whitespace-nowrap">
                {row.client}
              </td> */}
             

              {/* Other table cells */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mx-4 mt-4 text-xs flex justify-between items-center">
        <div>
          <span>{rows.length} results</span>
        </div>
        <div>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-2 py-1 border text-gray-600 rounded shadow hover:bg-[#006699] hover:text-[#ffffff]"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="ml-2 px-2 py-1 border text-gray-600 rounded shadow hover:bg-[#006699] hover:text-[#ffffff]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectableTable;
