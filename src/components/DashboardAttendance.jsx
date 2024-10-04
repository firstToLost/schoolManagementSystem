import Table from "./Table";
import { studentMockUp } from "../api/axios";
import { useState } from "react";

export default function DashboardAttendance() {
  const [headers, setHeaders] = useState([
    {
      key: "first_name",
      label: "Name",
    },
    {
      key: "gender",
      label: "Gender",
    },
    {
      key: "grade",
      label: "Grade",
    },
    {
      key: "present",
      label: "Presence",
    },
  ]);

  const [students, setStudents] = useState(studentMockUp);

  const toggleAttendance = (e, id, setter) => {
    setter((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = students.filter((row) => row.present === false);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <Table
        data={students}
        headers={headers}
        setter={setStudents}
        handler={toggleAttendance}
      />
      <button type="submit" className="btn">
        submit
      </button>
    </form>
  );
}
