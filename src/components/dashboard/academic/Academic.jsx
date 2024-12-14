import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLock } from "react-icons/ai";
import { Formik, Form, Field } from "formik";
import Modal from "../../Modal";
import useApiPrivate from "../../../hooks/useApiPrivate";
import GradeDropdown from "../../GradeDropdown";
import BigLoader from "../../BigLoader.jsx";
import { useState, useEffect } from "react";
export default function Academic() {
  const api = useApiPrivate();
  const [loading, setLoading] = useState(true);
  const [apiCall, setApiCall] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await api.get("/schoolyear/");
        console.log(response);
        setApiCall(response.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const initialValues = {
    school_year_name: "",
  };
  const onSubmit = async (values) => {
    try {
      console.log(values);
      const response = await api.post("/schoolyear/", values);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="h-main p-3">
      <button className="btn-primary" onClick={() => setIsOpen(true)}>
        Add Year
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values }) => (
            <Form className="max-sm:w-screen h-max p-4">
              <div className="rounded-md  sm:w-[600px] p-4 bg-babyBlue-bg">
                <div className="my-2">
                  <label className="input-label">Title</label>
                  <Field
                    className="input w-full"
                    type="number"
                    name="school_year_name"
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>

      <div className="rounded-md border border-[#e4e4e7] shadow px-6 py-4 my-3">
        <table className="border-collapse w-full text-left text-sm">
          <thead>
            <tr className="after:bg-gray-400 after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] relative">
              <th>
                <span className="px-2 block">First Name</span>
              </th>

              <th>
                <span className="px-2 block">Starts</span>
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
            {apiCall.map((exam, index) => (
              <tr
                key={index}
                className="after:bg-gray-400 last:after:content-none after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[1px] relative"
              >
                <td>
                  <span className="py-2 font-semibold px-2 block">
                    {exam.school_year_name}
                  </span>
                </td>
                <td>
                  <span className="py-2 font-semibold px-2 block">
                    {exam.start_date}
                  </span>
                </td>
                <td>
                  <span className="py-2 font-semibold px-2 block">
                    {exam.end_date}
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
                      onClick={() => navigate("/dashboard/academic/edit")}
                    >
                      Edit
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
