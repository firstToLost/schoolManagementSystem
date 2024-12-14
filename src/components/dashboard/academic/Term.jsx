import { Formik, Form, Field } from "formik";
export default function Term() {
  return (
    <div className="h-main overflow-y-scroll ">
      <Formik>
        <Form className="rounded-md border border-[#e4e4e7] shadow px-8 pt-2 pb-8 my-3">
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Semester name
            </label>
            <Field className="input" as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Field>
          </div>

          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Starts
            </label>
            <Field className="input" type="date" />
          </div>
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Ends
            </label>
            <Field className="input" type="date" />
          </div>

          <button type="submit" className="btn-primary">
            Create
          </button>
        </Form>
      </Formik>

      <Formik>
        <Form className="rounded-md border border-[#e4e4e7] shadow px-8 pt-2 pb-8 my-3">
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Semester name
            </label>
            <Field className="input" />
          </div>

          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Starts
            </label>
            <Field className="input" type="date" />
          </div>
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Ends
            </label>
            <Field className="input" type="date" />
          </div>

          <button type="submit" className="btn-primary">
            Create
          </button>
        </Form>
      </Formik>
    </div>
  );
}
