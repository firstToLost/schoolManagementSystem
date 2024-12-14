import { Field, Formik, Form } from "formik";
import { api } from "../../../api/axios.js";

import { useNavigate } from "react-router-dom";

export default function AddRegistration() {
  const navigate = useNavigate();
  const initialValues = {
    year: "",
    grade: "",
    subject: " ",
    test_start: "",
    test_end: "",
    limit: false,
    limitNumber: 0,
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
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 h-main">
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {({ values }) => (
          <Form className="h-full overflow-scroll rounded-md border border-[#e4e4e7] shadow px-8 pt-2 pb-8">
            <div className="my-2">
              <label className="input-label" htmlFor="title">
                Year
              </label>
              <Field name="year" className="input" id="title" type="number" />
            </div>

            <div className="my-2">
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
              <div className="my-2">
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
              <div className="my-2">
                <label className="input-label" htmlFor="to">
                  To
                </label>
                <Field name="test_end" type="date" className="input" id="to" />
              </div>
            </div>
            <div className="my-2">
              <label className="input-label" htmlFor="grade">
                Limit:
              </label>
              <Field name="limit" id="grade" type="checkbox" />
            </div>
            {values.limit && (
              <div className="my-2">
                <label className="input-label" htmlFor="out-of">
                  Limit of Students
                </label>
                <Field
                  name="limitNumber"
                  className="input"
                  id="out-of"
                  type="number"
                />
              </div>
            )}
            <button className="btn-primary">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
