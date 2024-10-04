import Table from "../../Table";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function UploadManually() {
  const [students, setStudents] = useState(useLocation().state.studentMockUp);
  function handleScore(e, id, setter) {
    // const output = students.slice();
    // output[e.target.id]["score"] = parseInt(e.target.value);
    const score = parseInt(e.target.value) || null;

    setter(
      students.map((student) =>
        student.id === id ? { ...student, score } : student
      )
    );
  }
  const headers = [
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
      key: "result",
      label: "Result",
    },
    {
      key: "score",
      label: "Score",
    },
    {
      key: "sum",
      label: "Sum",
    },
  ];
  return (
    <Table
      data={students}
      setter={setStudents}
      headers={headers}
      edit={"B"}
      handler={handleScore}
    />
  );
}
