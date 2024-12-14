import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { studentMockUp } from "../api/axios";
import * as Yup from "yup";
import { api } from "../api/axios";

import { useEffect } from "react";

export default function UploadForm() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => console.log(location.pathname.split("/").pop()), []);

  const onSubmit =
    location.pathname.split("/").pop() === "manually"
      ? async (values) => {
          try {
            console.log(values);
            // const response = await api.post("/get/students/class/", values);
            // console.log(response);
            navigate("/dashboard/result/manually/upload", {
              state: { student: studentMockUp },
            });
          } catch (error) {
            console.error(error);
          }
        }
      : async (values) => {
          navigate("/dashboard/result/upload/upload");

          const response = await api.post("/get/excel/", values, {
            responseType: "blob",
          });

          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "filename.ext");
          document.body.appendChild(link);
          link.click();
          window.URL.revokeObjectURL(url);

          console.log(values);
        };

  const initialValues = {
    grade: "",
    term: "",
    score_type: "",
    subject: "",
    section: "",
    school_year: "",
    nth_time: "",
    out_of: "",
  };

  const validationSchema = Yup.object().shape({
    grade: Yup.string().required("Grade is required"),
    term: Yup.string().required("Term is required"),
    score_type: Yup.string().required("Score type is required"),
    subject: Yup.string().required("Subject is required"),
    section: Yup.string().required("Section is required"),
    school_year: Yup.number()
      .required("School year is required")
      .min(2000, "Year must be bigger than 2000"),
    nth_time: Yup.number()
      .typeError("Nth time must be a number")
      .required("Nth time is required")
      .min(1, "Nth time must be at least 1"),
    out_of: Yup.number()
      .typeError("Out of must be a number")
      .required("Out of is required")
      .min(1, "Out of must be at least 1"),
  });
  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className="rounded-md p-4 my-2 border border-[#e4e4e7] shadow">
          <div className="flex justify-between flex-col sm:flex-row gap-x-3">
            <fieldset className="w-full sm:w-1/2">
              {/* grade */}
              <div className="my-6">
                <label htmlFor="grade" className="input-label">
                  Grade
                </label>
                <Field
                  as="select"
                  id="grade"
                  name="grade"
                  className="input w-full"
                >
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
                </Field>
                <ErrorMessage name="grade">
                  {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>

              {/* term */}
              <div className="my-6">
                <label className="input-label" htmlFor="term">
                  Term
                </label>
                <Field
                  as="select"
                  id="term"
                  className="input w-full"
                  name="term"
                >
                  <option value="">Select Term</option>
                  <option value="1">1st Term</option>
                  <option value="2">2nd Term</option>
                  <option value="3">3rd Term</option>
                  <option value="4">4th Term</option>
                </Field>
                <ErrorMessage name="term">
                  {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>

              {/* purpose */}
              <div className="my-6">
                <label className="input-label" htmlFor="purpose">
                  Purpose
                </label>
                <Field
                  as="select"
                  id="purpose"
                  className="input w-full"
                  name="score_type"
                >
                  <option value="">Select Purpose</option>
                  <option value="classtest">Class Test</option>
                  <option value="midexam">Mid Exam</option>
                  <option value="finalexam">Final Exam</option>
                  <option value="assignment">Assignment</option>
                  <option value="quiz">Quiz</option>
                  <option value="groupwork">Group Work</option>
                  <option value="studentactivity">Student Activity</option>
                  <option value="hometakeexam">HomeTake Exam</option>
                  <option value="homework">Home Work</option>
                  <option value="classwork">Class Work</option>
                </Field>
                <ErrorMessage name="score_type">
                  {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>

              {/* subject */}
              <div className="mt-6 sm:my-6">
                <label className="input-label" htmlFor="subject">
                  Subject
                </label>
                <Field
                  as="select"
                  id="subject"
                  className="input w-full"
                  name="subject"
                >
                  <option value="">Select Subject</option>
                  <option value="amharic">Amharic</option>
                  <option value="english">English</option>
                  <option value="physics">Physics</option>
                </Field>
                <ErrorMessage name="subject">
                  {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>
            </fieldset>

            <fieldset className="w-full sm:w-1/2">
              {/* section */}
              <div className="my-6">
                <label className="input-label" htmlFor="section">
                  Section
                </label>
                <Field
                  as="select"
                  id="section"
                  className="input w-full"
                  name="section"
                >
                  <option value="">Select Section</option>
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="c">C</option>
                  <option value="d">D</option>
                </Field>
                <ErrorMessage name="section">
                  {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>

              {/* year */}
              <div className="my-6">
                <label className="input-label" htmlFor="year">
                  Year
                </label>
                <Field
                  type="number"
                  id="year"
                  className="input w-full"
                  name="school_year"
                />
                <ErrorMessage name="school_year">
                  {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>

              <div className="my-6">
                <label className="input-label" htmlFor="nth">
                  nth
                </label>
                <Field
                  id="nth"
                  type="number"
                  className="input w-full"
                  name="nth_time"
                />
                <ErrorMessage name="nth_time">
                  {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>

              <div className="my-6">
                <label className="input-label" htmlFor="out_of">
                  out of
                </label>
                <Field
                  id="out_of"
                  type="number"
                  className="input w-full"
                  name="out_of"
                />
                <ErrorMessage name="out_of">
                  {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
                </ErrorMessage>
              </div>
            </fieldset>
          </div>
          <button className="btn-primary" type="submit">
            Next
          </button>
        </Form>
      </Formik>
    </>
  );
}
