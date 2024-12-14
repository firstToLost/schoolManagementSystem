import { Field, ErrorMessage } from "formik";

export default function Step1({ isRight, setIsRight }) {
  return (
    <>
      <div className="max-w-full mb-4">
        <label htmlFor="first-name" className="block mb-2">
          First name:
        </label>

        <Field
          type="text"
          id="first-name"
          name="student_info.first_name"
          className="input"
        />

        <ErrorMessage name="student_info.first_name">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
      <div className="max-w-full mb-4">
        <label htmlFor="middle-name" className="block mb-2">
          Middle name:{" "}
        </label>
        <Field
          type="text"
          className="input"
          id="middle-name"
          name="student_info.middle_name"
        />
        <ErrorMessage name="student_info.middle_name" className="errorMsg">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
      <div className="max-w-full mb-4">
        <label htmlFor="last-name" className="block mb-2">
          Last name:
        </label>
        <Field
          type="text"
          className="input"
          id="last-name"
          name="student_info.last_name"
        />
        <ErrorMessage name="student_info.last_name" className="errorMsg">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
    </>
  );
}
