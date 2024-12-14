import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { useLocation } from "react-router-dom";

import "../styles/Table.css";
export default function Table() {
  const [students, setStudents] = useState(useLocation().state.studentMockUp);
  const [query, setQuery] = useState("");

  function handleScore(e, id) {
    // const output = students.slice();
    // output[e.target.id]["score"] = parseInt(e.target.value);
    const score = parseInt(e.target.value) || null;

    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, score } : student,
      ),
    );
  }
  return (
    <>
      <form className="table-container glass margin-block margin-inline">
        <table className="table">
          <caption className="t-search">
            <div className="ts-inp-container">
              <input
                type="text"
                placeholder="Search by username"
                className="ts-inp"
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                value={query}
              />
              <AiOutlineSearch className="ts-icon" />
            </div>
          </caption>
          <thead>
            <tr className="th-row">
              <th className="th">No.</th>
              <th className="th">Name</th>
              <th className="th">Gender</th>
              <th className="th">Grade</th>
              <th className="th">Before</th>
              <th className="th">Add</th>
              <th className="th">After</th>
            </tr>
          </thead>
          <tbody>
            {students
              .filter((student) =>
                student.first_name.toLowerCase().includes(query),
              )
              .map((student, i) => (
                <tr key={student.id} className="td-row">
                  <td className="td">{i + 1}</td>
                  <td className="td">{`${student.first_name} ${student.last_name}`}</td>
                  <td className="td">{student.gender}</td>
                  <td className="td">
                    11 <sup>th</sup>
                  </td>
                  <td className="td">{student.result}</td>
                  <td className="td">
                    <input
                      id={student.id}
                      type="number"
                      onChange={(e) => handleScore(e, student.id)}
                      value={student.score}
                      min="0"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </form>
    </>
  );
}
