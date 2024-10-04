import { useState } from "react";
import { studentMockUp } from "../api/axios";

function DashboardCheckPayment() {
  const [month, setMonth] = useState([
    {
      abbreviation: "Jan",
      name: "January",
    },
    {
      abbreviation: "Feb",
      name: "February",
    },
    {
      abbreviation: "Mar",
      name: "March",
    },
    {
      abbreviation: "Apr",
      name: "April",
    },
    {
      abbreviation: "May",
      name: "May",
    },
    {
      abbreviation: "Jun",
      name: "June",
    },
    {
      abbreviation: "Jul",
      name: "July",
    },
    {
      abbreviation: "Aug",
      name: "August",
    },
    {
      abbreviation: "Sep",
      name: "September",
    },
    {
      abbreviation: "Oct",
      name: "October",
    },
    {
      abbreviation: "Nov",
      name: "November",
    },
    {
      abbreviation: "Dec",
      name: "December",
    },
  ]);
  const handleChange = async (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
  };
  const d = new Date();
  const [selectedMonth, setSelectedMonth] = useState(month[d.getMonth()].name);
  return (
    <div className="flex p-3 overflow-hidden h-main gap-3">
      <form className="glass p-3 w-[30%]">
        <div className="grid grid-cols-3 w-full gap-2 my-3">
          {month.map((el) => (
            <button
              className={`${
                el.name === selectedMonth ? "bg-blue-700" : "bg-red-700"
              } py-2`}
              type="button"
              key={el.abbreviation}
              onClick={() => setSelectedMonth(el.name)}
            >
              {el.name}
            </button>
          ))}
        </div>
        <div>
          <label htmlFor="name" className="input-label">
            Search by Name
          </label>
          <input type="text" className="input w-full" id="name" />
        </div>
        <span className="my-2 block text-center">or</span>
        <div>
          <label htmlFor="id" className="input-label">
            Search by Id
          </label>
          <input type="text" id="id" className="input w-full" />
        </div>
      </form>
      <div className="glass w-[70%] p-3 overflow-y-scroll h-full outline-none">
        <div className="flex justify-between px-4">
          <span>Name</span>
          <span>Grade</span>
          <span>Status</span>
        </div>
        {studentMockUp.map((row, i) => (
          <div className="input my-2 flex justify-between" key={i}>
            <span className="w-[30%]">{`${row.first_name} ${row.last_name}`}</span>
            <span>
              12<sup>th</sup>
            </span>
            <div className="w-[10%]">
              <span
                type="button"
                className={`${
                  row.present ? "bg-[#0f0]" : "bg-[#f00]"
                } rounded-2xl font-semibold py-1 px-3 text-sm`}
              >
                {row.present ? "Paid" : "Unpaid"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCheckPayment;
