import { Field, ErrorMessage } from "formik";

function Step2() {
  return (
    <>
      <div className="max-w-full mb-4">
        <label htmlFor="city" className="block mb-2">
          City
        </label>
        <Field type="text" id="city" name="city" className="input" />
        <ErrorMessage name="city">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>

      <div className="max-w-full mb-4">
        <label htmlFor="state" className="block mb-2">
          State
        </label>
        <Field type="text" id="state" name="state" className="input" />
        <ErrorMessage name="state">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>

      <div className="max-w-full mb-4">
        <label htmlFor="zipCode" className="block mb-2">
          Zip Code
        </label>
        <Field type="text" id="zipCode" name="zipCode" className="input" />
        <ErrorMessage name="zipCode">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
    </>
  );
}

export default Step2;
