import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/Table.css";
export default function Table({ headers, data, handler, setter }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState({
    keyToSort: headers[1].key,
    direction: "asc",
  });

  function handleHeaderClick(header) {
    console.log(header);
    setSort({
      keyToSort: header.key,
      direction:
        header.key === sort.keyToSort
          ? sort.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
    console.log(sort);
  }
  function sortArray(arr) {
    if (sort.direction === "asc")
      return arr.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1
      );
    return arr.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1));
  }

  return (
    <div className="rounded-xl border border-[#e4e4e7] shadow px-8 my-3">
      <table className="border-collapse w-full text-left text-sm table-auto">
        <caption className="py-4 text-left">
          <div className="ts-inp-container relative flex width w-fit items-center">
            <input
              type="text"
              placeholder="Search by username"
              className="ts-inp border-0 py-1 bg-transparent focus:outline-none placeholder:text-sm"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              value={query}
            />
            <AiOutlineSearch className="text-base" />
          </div>
        </caption>
        <thead>
          <tr className="th-row relative">
            {headers.map((header, i) => (
              <th
                className="text-xs text-slate-400 py-1 cursor-pointer"
                key={i}
                onClick={() => handleHeaderClick(header)}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortArray(data)
            .filter((row) => row.first_name.toLowerCase().includes(query))
            .map((row, i) => (
              <tr key={row.id} className="td-row relative">
                {headers.map((header, i) =>
                  header.key === "present" ? (
                    <td key={i}>
                      <button
                        type="button"
                        className={`${row.present ? "bg-[#0f0]" : "bg-[#f00]"}
                      rounded-2xl font-semibold py-1 px-3 cursor-pointer text-sm`}
                        onClick={(e) => handler(e, row.id, setter)}
                      >
                        {row.present ? "present" : "absent"}
                      </button>
                    </td>
                  ) : header.key === "score" ? (
                    <td className="font-medium text-black" key={i}>
                      <input
                        className="focus:outline-none "
                        type="number"
                        onChange={(e) => handler(e, row.id, setter)}
                        value={row.score}
                        min="0"
                      />
                    </td>
                  ) : header.key === "sum" ? (
                    <td className="font-medium py-2" key={i}>
                      {row.score + row.result}
                    </td>
                  ) : (
                    <td className="font-medium py-2" key={i}>
                      {row[header.key]}
                    </td>
                  )
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
