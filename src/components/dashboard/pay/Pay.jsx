import PayButton from "../../PayButton.jsx";
import { useState } from "react";
export default function Pay() {
  const [month, setMonth] = useState([
    {
      abbreviation: "Jan",
      name: "January",
      paid: true,
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
    <div className="h-main p-3">
      <div className="grid grid-cols-3 w-full gap-2 my-3">
        {month.map((el) => (
          <button
            className={`${
              el.paid
                ? el.name === selectedMonth
                  ? "bg-blue-700"
                  : "bg-green-700"
                : el.name === selectedMonth
                  ? "bg-blue-700"
                  : "bg-red-700"
            } py-2 `}
            type="button"
            key={el.abbreviation}
            onClick={() => setSelectedMonth(el.name)}
          >
            {el.name}
          </button>
        ))}
      </div>

      <PayButton amount={10} />
    </div>
  );
}
