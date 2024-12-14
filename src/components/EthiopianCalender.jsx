import { useState } from "react";

// Helper function to get Ethiopian months

import "../styles/Calendar.css";
const getEthiopianMonths = () => [
  "Meskerem",
  "Yekatit",
  "Maggabit",
  "Miyazya",
  "Ginbot",
  "Sene",
  "Hamle",
  "Nehasé",
  "Pagumē",
  "Qeydame",
  "Qelbot",
  "Mehal",
];

// Helper function to get number of days in each Ethiopian month
const getDaysInMonth = (month) => {
  const daysInMonth = {
    Meskerem: 30,
    Yekatit: 30,
    Maggabit: 30,
    Miyazya: 30,
    Ginbot: 30,
    Sene: 30,
    Hamle: 30,
    Nehasé: 30,
    Pagumē: 5, // 6 in leap years, adjust as needed
    Qeydame: 30,
    Qelbot: 30,
    Mehal: 30,
  };
  return daysInMonth[month];
};

// Helper function to get day names
const getDayNames = () => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EthiopianCalendar = () => {
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState("Meskerem");

  const months = getEthiopianMonths();
  const days = getDaysInMonth(month);
  const dayNames = getDayNames();

  const handleDayClick = (day) => {
    alert(`Selected date: ${day} ${month} ${year}`);
  };

  const renderDays = () => {
    const daysArray = Array.from({ length: days }, (_, i) => (
      <button
        key={i}
        className="day-button"
        onClick={() => handleDayClick(i + 1)}
      >
        {i + 1}
      </button>
    ));
    return <div className="days-grid">{daysArray}</div>;
  };

  return (
    <div className="calendar-container">
      <div className="navigation">
        <button onClick={() => setYear(year - 1)}>Previous Year</button>
        <span>{year}</span>
        <button onClick={() => setYear(year + 1)}>Next Year</button>
      </div>
      <div className="navigation">
        <button
          onClick={() =>
            setMonth(
              months[
                (months.indexOf(month) - 1 + months.length) % months.length
              ],
            )
          }
        >
          Previous Month
        </button>
        <span>{month}</span>
        <button
          onClick={() =>
            setMonth(months[(months.indexOf(month) + 1) % months.length])
          }
        >
          Next Month
        </button>
      </div>
      <div className="day-names">
        {dayNames.map((name, index) => (
          <div key={index} className="day-name">
            {name}
          </div>
        ))}
      </div>
      {renderDays()}
    </div>
  );
};

export default EthiopianCalendar;
