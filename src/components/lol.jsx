import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { api } from "../api/axios";
import { useState } from "react";
const ItemType = "STUDENT";

const DraggableStudent = ({ student, index, moveStudent }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { student, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <tr
      ref={drag}
      className={`${
        isDragging ? "opacity-50" : "opacity-100"
      } cursor-move font-medium odd:bg-[#e4e4e7]`}
    >
      <td className="px-4 py-2 block">{index + 1}</td>
      <td>
        <span className="px-4 py-2 block"> {student.name}</span>
      </td>
    </tr>
  );
};

const DroppableTable = ({ tableId, students, setStudents, moveStudent }) => {
  const [, drop] = useDrop({
    accept: ItemType,
    drop: (item) => moveStudent(item.student, tableId),
  });

  return (
    <table ref={drop} className="w-full text-left min-h-[50px]">
      <thead>
        <tr>
          <th>Roll NO.</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <DraggableStudent
            key={student.id}
            student={student}
            index={index}
            moveStudent={moveStudent}
          />
        ))}
      </tbody>
    </table>
  );
};

export default function Lol({
  studentsTable1,
  studentsTable2,
  setStudentsTable1,
  setStudentsTable2,
}) {
  // Move student between tables
  const moveStudent = (student, targetTableId) => {
    // Prevent duplication by checking if the student is already in the target table
    if (targetTableId === 1) {
      if (!studentsTable1.find((s) => s.id === student.id)) {
        setStudentsTable1((prev) => [...prev, student]);
      }
      // Remove the student from the other tables
      setStudentsTable2((prev) => prev.filter((s) => s.id !== student.id));
    } else if (targetTableId === 2) {
      if (!studentsTable2.find((s) => s.id === student.id)) {
        setStudentsTable2((prev) => [...prev, student]);
      }
      setStudentsTable1((prev) => prev.filter((s) => s.id !== student.id));
    }
  };

  const handlChange1 = async (e) => {
    setGrade(e.target.value);
    const data = await api.post("/get/students/class/", {
      grade,
      section,
      school_year: 2016,
    });
    console.log(data);
  };
  const handlChange2 = async (e) => {
    setGrade2(e.target.value);
    const data = await api.post("/get/students/class/", {
      grade: grade2,
      section,
      school_year: 2016,
    });
    console.log(data);
  };
  const handlChange3 = async (e) => {
    setSection(e.target.value);
    const data = await api.post("/get/students/class/", {
      grade,
      section,
      school_year: 2016,
    });
    console.log(data);
  };

  const handlChange4 = async (e) => {
    setSection2(e.target.value);
    const data = await api.post("/get/students/class/", {
      grade: grade2,
      section: section2,
      school_year: 2016,
    });
    console.log(data);
  };

  const [grade, setGrade] = useState(11);
  const [grade2, setGrade2] = useState(11);
  const [section, setSection] = useState("c");
  const [section2, setSection2] = useState("c");
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-3 items-start max-sm:flex-wrap h-full overflow-y-hidden">
        <div className="rounded-xl border border-[#e4e4e7] shadow w-1/2 max-sm:w-full max-sm:h-[40dvh] h-full px-4 py-2 overflow-y-scroll">
          <div className="flex items-center py-2">
            <label className="font-bold text-bold">Grade: </label>
            <select className="bg-transparent" onChange={handlChange1}>
              <option value="">Select Grade</option>
              <option value="nursery">nursery</option>
              <option value="lkg">LKG</option>
              <option value="ukg">UKG</option>
              <option value="1">1st Grade</option>
              <option value="2">2nd Grade</option>
              <option value="3">3rd Grade</option>
              <option value="4">4th Grade</option>
              <option value="5">5th Grade</option>
              <option value="6">6th Grade</option>
              <option value="7">7th Grade</option>
              <option value="8">8th Grade</option>
              <option value="9">9th Grade</option>
              <option value="10">10th Grade</option>
              <option value="11">11th Grade</option>
              <option value="12">12th Grade</option>
            </select>
            <select className="bg-transparent" onChange={handlChange3}>
              <option value="">Select Section</option>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
            </select>
          </div>
          <div className="flex items-center py-2 px-2">
            <label className="font-bold">Teacher: </label>
            <select className="bg-transparent w-full">
              <option value="">Abebe</option>
            </select>
          </div>
          <hr />
          <div>
            <DroppableTable
              tableId={1}
              students={studentsTable1}
              setStudents={setStudentsTable1}
              moveStudent={moveStudent}
            />
          </div>
        </div>
        <div className="rounded-xl border border-[#e4e4e7] shadow w-1/2 max-sm:w-full max-sm:h-[40dvh] h-full px-4 py-2 overflow-y-scroll">
          <div className="flex items-center py-2 px-2">
            <label className="font-bold text-bold">Grade: </label>
            <select className="bg-transparent w-full" onChange={handlChange2}>
              <option value="">11</option>
            </select>
            <select className="bg-transparent w-full" onChange={handlChange4}>
              <option value="">C</option>
            </select>
          </div>
          <div className="flex items-center py-2 px-2">
            <label className="font-bold">Teacher: </label>
            <select className="bg-transparent w-full">
              <option value="">Abebe</option>
            </select>
          </div>
          <hr />
          <div>
            <DroppableTable
              tableId={2}
              students={studentsTable2}
              setStudents={setStudentsTable2}
              moveStudent={moveStudent}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
