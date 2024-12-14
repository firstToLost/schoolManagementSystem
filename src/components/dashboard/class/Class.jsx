import { useState } from "react";
import { Formik, Form, Field } from "formik";
import Modal from "../../Modal";
import { studentMockUp } from "../../../api/axios";
import Lol from "../../lol";
import GradeDropdown from "../../GradeDropdown";

export default function Class() {
  const [isOpen, setIsOpen] = useState(false);
  const [studentsTable1, setStudentsTable1] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);
  const [studentsTable2, setStudentsTable2] = useState(studentMockUp);

  return (
    <div className="h-main p-3">
      <button className="btn-primary" onClick={() => setIsOpen(true)}>
        Create Class
      </button>
      <Lol
        studentsTable1={studentsTable1}
        studentsTable2={studentsTable2}
        setStudentsTable1={setStudentsTable1}
        setStudentsTable2={setStudentsTable2}
      />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Formik>
          <Form className="rounded-md py-6 px-4 w-80 bg-babyBlue-bg">
            <div className="my-2">
              <label className="input-label" htmlFor="grade" name="title">
                Choose grade:
              </label>
              <GradeDropdown id={"grade"} />
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="btn-primary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Create
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}
