import { useState } from "react";
import "../styles/Calendar.css"; // Create a CSS file for styling
import { useNavigate } from "react-router-dom";
// Example attendance data
const exampleAttendanceData = {
  "2024-08-01": true,
  "2024-08-02": false,
  "2024-08-03": true,
  // Add more dates as needed
};

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

const Calendar = () => {
  const navigate = useNavigate();
  const [year, setYear] = useState(2024);
  const [month, setMonth] = useState(7); // August (0-based index)
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = Array.from(
    { length: getDaysInMonth(year, month) },
    (_, i) => i + 1
  );
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const attendanceData = exampleAttendanceData; // Replace with dynamic data source if needed

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleDateClick = (day) => {
    const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    setSelectedDate(date);
    // alert(
    //   `Date: ${date}\nAttendance: ${
    //     attendanceData[date] ? "Present" : "Absent"
    //   }`
    // );
    navigate("/dashboard/attendance/u");
    // You can replace the alert with a modal or other component to show attendance details
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>←</button>
        <span>{`${new Date(year, month).toLocaleString("default", {
          month: "long",
        })} ${year}`}</span>
        <button onClick={handleNextMonth}>→</button>
      </div>
      <div className="calendar-days">
        <div className="calendar-day">Sun</div>
        <div className="calendar-day">Mon</div>
        <div className="calendar-day">Tue</div>
        <div className="calendar-day">Wed</div>
        <div className="calendar-day">Thu</div>
        <div className="calendar-day">Fri</div>
        <div className="calendar-day">Sat</div>
      </div>
      <div className="calendar-body">
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="calendar-cell empty"></div>
        ))}
        {daysInMonth.map((day) => {
          const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(
            day
          ).padStart(2, "0")}`;
          const attended = attendanceData[date];
          return (
            <div
              className={`calendar-cell ${attended ? "present" : "absent"}`}
              key={date}
              onClick={() => handleDateClick(day)}
            >
              <div className="calendar-day-number">{day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
