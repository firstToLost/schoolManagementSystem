import Table from "../../Table";
import BigLoader from "../../BigLoader.jsx";
import { useState, useEffect } from "react";
import useApiPrivate from "../../../hooks/useApiPrivate";
export default function FillAttendance() {
  const api = useApiPrivate();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await api.post("/get/students/class/", {
          grade: "11",
          section: "a",
          school_year: "2016",
        });
        let data = [];
        response.data.map((d) => data.push({ ...d, present: true }));
        console.log(data);
        setStudents(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [headers, setHeaders] = useState([
    {
      key: "roll_no",
      label: "Roll NO.",
    },
    {
      key: "fullname",
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

  const toggleAttendance = (e, id, setter) => {
    setter((prev) =>
      prev.map((student) =>
        student.student_id === id
          ? { ...student, present: !student.present }
          : student,
      ),
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = { absent: [] };
    students.map(
      (row) => row.present === false && data.absent.push(row.student_id),
    );
    const response = await api.post("/add/attendance/", data);

    console.log(data);
  };

  return loading ? (
    <BigLoader />
  ) : (
    <div className="px-3 overflow-y-scroll h-main">
      <form onSubmit={handleSubmit}>
        <Table
          data={students}
          headers={headers}
          setter={setStudents}
          handler={toggleAttendance}
        />

        <button type="submit" className="btn-primary">
          submit
        </button>
      </form>
    </div>
  );
}
