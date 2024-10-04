import Table from "../../Table";
import { studentMockUp } from "../../../api/axios";

export default function Students() {
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
  ];
  return <Table data={studentMockUp} headers={headers} />;
}
