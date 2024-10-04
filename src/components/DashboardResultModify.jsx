import { Link } from "react-router-dom";
export default function DashboardResultModify() {
  const examData = [
    {
      name: "Math Final Exam",
      createdAt: "2024-09-01",
      startsAt: "2024-10-01",
      course: "Mathematics",
      endsAt: "2024-10-02",
    },
    {
      name: "Physics Midterm",
      createdAt: "2024-09-05",
      startsAt: "2024-11-01",
      course: "Physics",
      endsAt: "2024-11-02",
    },
    {
      name: "History Quiz",
      createdAt: "2024-09-10",
      startsAt: "2024-12-01",
      course: "History",
      endsAt: "2024-12-01",
    },
  ];
  return (
    <div className="border-radius">
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name of Exam</th>
            <th>Created At</th>
            <th>Starts</th>
            <th>Course</th>
            <th>Ends</th>
          </tr>
        </thead>
        <tbody>
          {examData.map((exam, index) => (
            <tr key={index}>
              <td>{exam.name}</td>
              <td>{exam.createdAt}</td>
              <td>{exam.startsAt}</td>
              <td>{exam.course}</td>
              <td>{exam.endsAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";
