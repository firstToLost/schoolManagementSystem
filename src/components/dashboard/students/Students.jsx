import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLock } from "react-icons/ai";
import { Formik, Form, Field } from "formik";
import GradeDropdown from "../../GradeDropdown";

export default function Students() {
  const examData = [
    {
      name: "Liren",
      createdAt: "Ding",
      startsAt: "2024-10-01",
      course: "Mathematics",
      endsAt: "Phd",
    },
    {
      name: "Izuku",
      createdAt: "Midoriya",
      startsAt: "2024-11-01",
      course: "Physics",
      endsAt: "Masters",
    },
    {
      name: "Kakashi",
      createdAt: "Hatake",
      startsAt: "2024-12-01",
      course: "History",
      endsAt: "Professor",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="h-main p-3">
      <Link to="add">
        <button className="btn-primary">Add Student</button>
      </Link>
      <div>
        <p>Filter by:</p>
        <Formik>
          <Form className="flex w-full gap-4 items-center">
            <div className="my-2 w-1/5">
              <GradeDropdown />
            </div>
            <div className="my-2 w-1/5">
              <Field
                type="text"
                id="upload-type"
                className="input w-full"
                name="to"
                as="select"
              >
                <option value="assignment">Section All</option>
                <option value="work-sheets">Section A</option>
                <option value="Handouts">Section B</option>
                <option value="books">Section C</option>
              </Field>
            </div>
            <button className="btn-primary">Load list</button>
          </Form>
        </Formik>
      </div>

      <div className="rounded-md border border-[#e4e4e7] shadow px-6 py-4 my-3">
        <table className="border-collapse w-full text-left text-sm">
          <thead>
            <tr className="after:bg-gray-400 after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] relative">
              <th>
                <span className="px-2 block">First Name</span>
              </th>
              <th>
                <span className="px-2 block">Last Name</span>
              </th>
              <th>
                <span className="px-2 block">Starts</span>
              </th>
              <th>
                <span className="px-2 block">Course</span>
              </th>
              <th>
                <span className="px-2 block">Degree</span>
              </th>
              <th>
                <span className="px-2 block">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {examData.map((exam, index) => (
              <tr
                key={index}
                className="after:bg-gray-400 last:after:content-none after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[1px] relative"
              >
                <td>
                  <span className="py-2 font-semibold px-2 block">
                    {exam.name}
                  </span>
                </td>
                <td>
                  <span className="py-2 font-semibold px-2 block">
                    {exam.createdAt}
                  </span>
                </td>
                <td>
                  <span className="py-2 font-semibold px-2 block">
                    {exam.startsAt}
                  </span>
                </td>
                <td>
                  <span className="py-2 font-semibold px-2 block">
                    {exam.course}
                  </span>
                </td>
                <td>
                  <span className="py-2 font-semibold px-2 block">
                    {exam.endsAt}
                  </span>
                </td>
                <td>
                  <span className="py-2 font-semibold px-2 block">
                    <button className="text-primary py-2 px-4 rounded-s border border-primary select-none">
                      <AiOutlineLock className="inline" />
                      Attendance
                    </button>
                    <button
                      className="text-primary py-2 px-4  border border-y-primary select-none"
                      onClick={() => navigate("/dashboard/teachers/profile")}
                    >
                      View
                    </button>
                    <button className="text-primary py-2 px-4 rounded-e border border-primary select-none">
                      Edit
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
