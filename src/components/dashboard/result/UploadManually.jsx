import Table from "../../Table";
import { useState } from "react";
import { studentMockUp } from "../../../api/axios";

export default function UploadManually() {
  const [students, setStudents] = useState(studentMockUp);
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
    />
  );
}
