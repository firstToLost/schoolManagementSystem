import { Field, ErrorMessage } from "formik";

export default function Step2() {
  return (
    <>
      <div className="max-w-full mb-4">
        <label htmlFor="gender" className="block mb-2">
          Gender:
        </label>
        <Field
          className="input"
          id="gender"
          as="select"
          name="student_info.gender"
        >
          <option value="" className="opacity-80">
            choose
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Field>

        <ErrorMessage name="student_info.gender">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>

      <div className="max-w-full mb-4">
        <label htmlFor="age" className="block mb-2">
          Age:
        </label>
        <Field
          type="number"
          className="input"
          id="age"
          name="student_info.age"
        />
        <ErrorMessage name="student_info.age">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>

      <div className="max-w-full mb-4">
        <label htmlFor="grade" className="block mb-2">
          Grade:{" "}
        </label>
        <Field
          as="select"
          className="input"
          id="grade"
          name="student_info.grade"
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
        <ErrorMessage name="student_info.grade">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
    </>
  );
}
