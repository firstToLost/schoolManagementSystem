import { Field, ErrorMessage } from "formik";

export default function Step3() {
  return (
    <>
      <div className="max-w-full mb-4">
        <label htmlFor="kebele" className="block mb-2">
          Kebele
        </label>
        <Field
          type="text"
          id="kebele"
          name="student_info.kebele"
          className="input"
        />
        <ErrorMessage name="student_info.kebele">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
      <div className="max-w-full mb-4">
        <label htmlFor="mender" className="block mb-2">
          Mender
        </label>
        <Field
          type="number"
          id="mender"
          name="student_info.mender"
          className="input"
        />
        <ErrorMessage name="student_info.mender">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
    </>
  );
}
