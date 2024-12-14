import MyDropzone from "../../MyDropzone.jsx";

import { Formik, Form, Field } from "formik";
export default function FormUpload() {
  return (
    <div className="h-main p-3">
      <Formik>
        <Form className="rounded-md border flex gap-2 border-[#e4e4e7] shadow px-8 pt-2 pb-8 my-3">
          <fieldset className="w-1/2">
            <div className="my-2">
              <label className="input-label" htmlFor="title">
                Title
              </label>
              <Field className="input w-full" type="text" id="title" />
            </div>
            <div className="my-2">
              <label className="input-label" htmlFor="description">
                Desctiption
              </label>
              <Field className="input w-full" type="text" id="description" />
            </div>
            <div className="my-2">
              <label className="input-label" htmlFor="description">
                Desctiption
              </label>
              <Field
                as="select"
                className="input w-full"
                type="text"
                id="description"
              >
                <option value="assignment">Assignment</option>
                <option value="work-sheets">Work sheets</option>
                <option value="Handouts">Handouts</option>
                <option value="books">Books</option>
                <option value="notes">Notes</option>
              </Field>
            </div>
            <button type="submit" className="btn-primary my-2">
              Submit
            </button>
          </fieldset>
          <fieldset className="w-1/2">
            <MyDropzone />
          </fieldset>
        </Form>
      </Formik>
    </div>
  );
}
