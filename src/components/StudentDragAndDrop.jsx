import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Define the item type
const ItemType = "STUDENT";

// Draggable student row component
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
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      <td>{student.id}</td>
      <td>{student.name}</td>
    </tr>
  );
};

// Droppable table component
const DroppableTable = ({ tableId, students, setStudents, moveStudent }) => {
  const [, drop] = useDrop({
    accept: ItemType,
    drop: (item) => moveStudent(item.student, tableId),
  });

  return (
    <table
      ref={drop}
      border="1"
      style={{ margin: "10px", width: "200px", textAlign: "left" }}
    >
      <thead>
        <tr>
          <th>ID</th>
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

// Main component
const StudentDragDrop = () => {
  const [studentsTable1, setStudentsTable1] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);
  const [studentsTable2, setStudentsTable2] = useState([
    { id: 3, name: "James White" },
  ]);
  const [studentsTable3, setStudentsTable3] = useState([
    { id: 4, name: "Emily Brown" },
  ]);

  // Move student between tables
  const moveStudent = (student, targetTableId) => {
    if (targetTableId === 1) {
      setStudentsTable1((prev) => [...prev, student]);
      setStudentsTable2((prev) => prev.filter((s) => s.id !== student.id));
      setStudentsTable3((prev) => prev.filter((s) => s.id !== student.id));
    } else if (targetTableId === 2) {
      setStudentsTable2((prev) => [...prev, student]);
      setStudentsTable1((prev) => prev.filter((s) => s.id !== student.id));
      setStudentsTable3((prev) => prev.filter((s) => s.id !== student.id));
    } else if (targetTableId === 3) {
      setStudentsTable3((prev) => [...prev, student]);
      setStudentsTable1((prev) => prev.filter((s) => s.id !== student.id));
      setStudentsTable2((prev) => prev.filter((s) => s.id !== student.id));
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex" }}>
        <DroppableTable
          tableId={1}
          students={studentsTable1}
          setStudents={setStudentsTable1}
          moveStudent={moveStudent}
        />
        <DroppableTable
          tableId={2}
          students={studentsTable2}
          setStudents={setStudentsTable2}
          moveStudent={moveStudent}
        />
        <DroppableTable
          tableId={3}
          students={studentsTable3}
          setStudents={setStudentsTable3}
          moveStudent={moveStudent}
        />
      </div>
    </DndProvider>
  );
};

export default StudentDragDrop;
