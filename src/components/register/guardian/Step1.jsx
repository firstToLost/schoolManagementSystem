import { Field, ErrorMessage } from "formik";

function Step1() {
  return (
    <>
      <div className="max-w-full mb-4">
        <label htmlFor="guardianFullName" className="block mb-2">
          Guardian Full Name
        </label>
        <Field
          type="text"
          id="guardianFullName"
          name="guardianFullName"
          className="input"
        />
        <ErrorMessage name="guardianFullName">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>

      <div className="max-w-full mb-4">
        <label htmlFor="relationship" className="block mb-2">
          Relationship to Student
        </label>
        <Field
          type="text"
          id="relationship"
          name="relationship"
          className="input"
        />
        <ErrorMessage name="relationship">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>

      <div className="max-w-full mb-4">
        <label htmlFor="homeAddress" className="block mb-2">
          Home Address
        </label>
        <Field
          type="text"
          id="homeAddress"
          name="homeAddress"
          className="input"
        />
        <ErrorMessage name="homeAddress">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
    </>
  );
}

export default Step1;
