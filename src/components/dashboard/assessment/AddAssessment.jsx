import { Field, Formik, Form } from "formik";
import { api } from "../../../api/axios";

import { useNavigate } from "react-router-dom";

export default function AddAssessment() {
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    test_type: "",
    grade: "",
    subject: " ",
    test_start: "",
    test_end: "",
    out_of: 0,
  };

  const onSubmit = async (values) => {
    try {
      // const response = await api.post("/assessment", {
      //   subject: values.subject,
      //   grade: values.grade,
      //   section: values.section,
      //   school_year: values.school_year,
      //   term: values.term,
      //   out_of: values.out_of,
      // });
      // console.log(response);
      navigate("/dashboard/assessment/upload", {
        state: {
          values,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 h-main">
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form className="glass p-3">
          <div>
            <label className="input-label" htmlFor="title">
              Title
            </label>
            <Field name="title" className="input" id="title" />
          </div>
          <div>
            <label className="input-label" htmlFor="title">
              Test type
            </label>
            <Field name="test_type" className="input" id="title" as="select">
              <option value="open">Open</option>
              <option value="scheduled">Scheduled</option>
            </Field>
          </div>
          <div>
            <label className="input-label" htmlFor="grade">
              Grade
            </label>
            <Field name="grade" className="input" id="grade" as="select">
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
          </div>
          <div>
            <label className="input-label" htmlFor="subject">
              Grade
            </label>
            <Field name="subject" className="input" id="subject" as="select">
              <option value="">Select Subject</option>
              <option value="biology">Biology</option>
              <option value="math">Math</option>
              <option value="history">History</option>
              <option value="physics">Physics</option>
              <option value="geography">Geography</option>
              <option value="business">Business</option>
            </Field>
          </div>
          <div>
            <div>
              <label className="input-label" htmlFor="from">
                From
              </label>
              <Field
                name="test_start"
                type="date"
                className="input"
                id="from"
              />
            </div>
            <div>
              <label className="input-label" htmlFor="to">
                To
              </label>
              <Field name="test_end" type="date" className="input" id="to" />
            </div>
          </div>
          <div>
            <label className="input-label" htmlFor="out-of">
              Out of
            </label>
            <Field name="out_of" className="input" id="out-of" type="number" />
          </div>
          <button className="btn-primary">submit</button>
        </Form>
      </Formik>
    </div>
  );
}
