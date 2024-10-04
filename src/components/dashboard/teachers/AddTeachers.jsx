import { Formik, Form, Field } from "formik";
function AddTeachers() {
  return (
    <Formik>
      <Form className="rounded-md border border-[#e4e4e7] shadow px-8 pt-2 pb-8 my-3">
        <fieldset className="flex gap-3">
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              First Name
            </label>
            <Field className="input" />
          </div>

          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              last Name
            </label>
            <Field className="input" type="text" />
          </div>
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              email
            </label>
            <Field className="input" type="email" />
          </div>
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Password
            </label>
            <Field className="input" type="password" />
          </div>
        </fieldset>
        <fieldset className="flex gap-3">
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Photo
            </label>
            <Field className="input" type="file" />
          </div>

          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Address
            </label>
            <Field className="input" type="text" />
          </div>
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Address 2
            </label>
            <Field className="input" type="text" />
          </div>
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              city
            </label>
            <Field className="input" type="text" />
          </div>
        </fieldset>
        <fieldset className="flex gap-3">
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Phone
            </label>
            <Field className="input" />
          </div>

          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Gender
            </label>
            <Field className="input" type="text" />
          </div>
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Degree
            </label>
            <Field className="input" type="text" />
          </div>
          <div className="my-2">
            <label className="input-label" htmlFor="grade" name="title">
              Nationality
            </label>
            <Field className="input" type="text" />
          </div>
        </fieldset>

        <button type="submit" className="btn-primary">
          Add
        </button>
      </Form>
    </Formik>
  );
}

export default AddTeachers;
