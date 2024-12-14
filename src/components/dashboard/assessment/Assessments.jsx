import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLock } from "react-icons/ai";
import BigLoader from "../../BigLoader";
import useFetch from "../../../hooks/useFetch";
export default function Assessments() {
  const { error, isLoading, retry } = useFetch("lol", 2000, 3000);
  const examData = [
    {
      title: "Biology First Exam",
      startDate: "0-1-2000",
      endDate: "11-12-2009",
    },
    {
      title: "Biology First Exam",
      startDate: "0-1-2000",
      endDate: "11-12-2009",
    },

    {
      title: "Biology First Exam",
      startDate: "0-1-2000",
      endDate: "11-12-2009",
    },
  ];
  const navigate = useNavigate();
  return isLoading ? <BigLoader err={error} retry={retry} /> : (
    <div className="h-main p-3">
      <Link to="add">
        <button className="btn-primary">Add Assessments</button>
      </Link>

      <div className="rounded-md border border-[#e4e4e7] shadow px-6 py-4 my-3">
        <table className="border-collapse w-full text-left text-sm">
          <thead>
            <tr className="after:bg-gray-400 after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] relative">
              <th>
                <span className="px-2 block">Title</span>
              </th>
              <th>
                <span className="px-2 block">Start Date</span>
              </th>
              <th>
                <span className="px-2 block">End Date</span>
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
                    {exam.title}
                  </span>
                </td>
                <td>
                  <span className="py-2 font-semibold px-2 block">
                    {exam.startDate}
                  </span>
                </td>
                <td>
                  <span className="py-2 font-semibold px-2 block">
                    {exam.endDate}
                  </span>
                </td>
                <td>
                  <span className="py-2 font-semibold px-2 block">
                    <button
                      onClick={() =>
                        navigate("/dashboard/assessment/edit", {
                          state: { values: "ll" },
                        })
                      }
                      className="text-primary py-2 px-4 rounded-s border border-y-primary border-l-primary  select-none"
                    >
                      <AiOutlineLock className="inline" />
                      Edit
                    </button>
                    <button
                      className="text-primary py-2 px-4 rounded-e border border-primary select-none"
                      onClick={() => navigate("/dashboard/assessment/view")}
                    >
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
