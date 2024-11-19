import React, { useState, useMemo } from "react";

const SelectableTable = () => {

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
            <th
              className="py-2 text-left font-bold text-[0.7rem] text-black capitalize tracking-wider"
            >
              alert_type
            </th>
            <th
              className="py-2 text-left font-bold text-[0.7rem] text-black capitalize tracking-wider"
            >
              threshold
            </th>
            <th
              className="py-2 text-left font-bold text-[0.7rem] text-black capitalize tracking-wider"
            >
              resolved_at
            </th>
            <th
              className="py-2 text-left font-bold text-[0.7rem] text-black capitalize tracking-wider"
            >
              created_at
            </th>
            <th
              className="py-2 text-left font-bold text-[0.7rem] text-black capitalize tracking-wider"
            >
              status
            </th>
            <th
              className="py-2 text-left font-bold text-[0.7rem] text-black capitalize tracking-wider"
            >
              action
            </th>
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
