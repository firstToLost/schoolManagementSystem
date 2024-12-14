import { useNavigate } from "react-router-dom";
import { AiOutlineLock } from "react-icons/ai";
export default function ModifyResult() {
  const navigate = useNavigate();
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
    <div className="h-main">
      <div className="rounded-md border border-[#e4e4e7] shadow px-6 py-4 my-3">
        <table className="border-collapse w-full text-left text-sm">
          <thead>
            <tr className="after:bg-gray-400 after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] relative">
              <th>
                <span className="px-2 block">Name of Exam</span>
              </th>
              <th>
                <span className="px-2 block">Created At</span>
              </th>
              <th>
                <span className="px-2 block">Starts</span>
              </th>
              <th>
                <span className="px-2 block">Course</span>
              </th>
              <th>
                <span className="px-2 block">Ends</span>
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
                    <button className="text-primary py-2 px-4 rounded-s border border-y-primary border-l-primary  select-none" onClick={() => navigate("upload")}>
                      <AiOutlineLock className="inline" />
                      Modify
                    </button>
                    <button className="text-primary py-2 px-4 rounded-e border border-primary select-none">
                      View
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

