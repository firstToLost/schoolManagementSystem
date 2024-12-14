import { Field, ErrorMessage } from "formik";

function Step3() {
  return (
    <>
      {" "}
      <div className="max-w-full mb-4">
        <label htmlFor="homePhone" className="block mb-2">
          Home Phone Number
        </label>
        <Field type="text" id="homePhone" name="homePhone" className="input" />
        <ErrorMessage name="homePhone">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
      <div className="max-w-full mb-4">
        <label htmlFor="workPhone" className="block mb-2">
          Work Phone Number (optional)
        </label>
        <Field type="text" id="workPhone" name="workPhone" className="input" />
      </div>
      <div className="max-w-full mb-4">
        <label htmlFor="cellPhone" className="block mb-2">
          Cell Phone Number (optional)
        </label>
        <Field type="text" id="cellPhone" name="cellPhone" className="input" />
      </div>
    </>
  );
}

export default Step3;
