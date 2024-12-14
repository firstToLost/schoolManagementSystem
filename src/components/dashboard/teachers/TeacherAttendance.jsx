import React from "react";

const TeacherAttendance = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const periods = [
    {
      name: "Period 1 ",
      attendance: ["Present", "Absent", "Present", "Absent"],
    },
    {
      name: "Period 2 ",
      attendance: ["Absent", "Present", "Present", "Present"],
    },
    {
      name: "Period 3 ",
      attendance: ["Present", "Present", "Absent", "Present"],
    },
    {
      name: "Period 4 ",
      attendance: ["Present", "Present", "Absent", "Present"],
    },
    {
      name: "Period 5 ",
      attendance: ["Present", "Present", "Absent", "Present"],
    },
    {
      name: "Period 6 ",
      attendance: ["Present", "Present", "Absent", "Present"],
    },
  ];

  return (
    <div className="p-3 w-full h-main border-seprate">
      <table className="h-full w-full border border-black">
        <thead>
          <tr>
            <th>Day </th>
            {days.map((day, index) => (
              <th key={index} className="border border-black">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {periods.map((period, index) => (
            <tr key={index}>
              <td className="border border-black">{period.name}</td>
              {period.attendance.map((status, idx) => (
                <td
                  key={index}
                  className={`${status === "Present" ? "bg-green-400" : "bg-red-400"} text-center border border-black`}
                >
                  <span className="">{status}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherAttendance;
