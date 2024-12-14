import Table from "../../Table";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function ResultModify() {
  const [students, setStudents] = useState(useLocation().state.student);
  function handleScore(e, id, setter) {
    // const output = students.slice();
    // output[e.target.id]["score"] = parseInt(e.target.value);
    const score = parseInt(e.target.value) || null;

    setter(
      students.map((student) =>
        student.id === id ? { ...student, score } : student,
      ),
    );
  }
  const headers = [
    {
      key: "first_name",
      label: "First Name",
    },
    {
      key: "last_name",
      label: "Last Name",
    },
    // {
    //   key: "gender",
    //   label: "Gender",
    // },
    // {
    //   key: "grade",
    //   label: "Grade",
    // },
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
