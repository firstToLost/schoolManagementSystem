import { Field, ErrorMessage } from "formik";

function Step4() {
  return (
    <>
      {" "}
      <div className="max-w-full mb-4">
        <label htmlFor="email" className="block mb-2">
          Email Address
        </label>
        <Field type="email" id="email" name="email" className="input" />
        <ErrorMessage name="email">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
      <div className="max-w-full mb-4">
        <label htmlFor="residencyStatus" className="flex items-center mb-2">
          <Field type="checkbox" id="residencyStatus" name="residencyStatus" />
          Is Guardian a Resident of School Division?
        </label>
        {/* No error message for checkbox */}
      </div>
      <div className="max-w-full mb-4">
        <label htmlFor="custodyDocuments" className="flex items-center mb-2">
          <Field
            type="checkbox"
            id="custodyDocuments"
            name="custodyDocuments"
          />
          Are there custody documents? (optional)
        </label>
        {/* No error message for checkbox */}
      </div>
    </>
  );
}

export default Step4;
