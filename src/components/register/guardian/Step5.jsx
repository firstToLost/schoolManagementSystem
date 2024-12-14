import { Field, ErrorMessage } from "formik";

function Step5() {
  return (
    <>
      {" "}
      <div className="max-w-full mb-4">
        <label htmlFor="emergencyContactName" className="block mb-2">
          Emergency Contact Name
        </label>
        <Field
          type="text"
          id="emergencyContactName"
          name="emergencyContactName"
          className="input"
        />
        <ErrorMessage name="emergencyContactName">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
      <div className="max-w-full mb-4">
        <label htmlFor="emergencyContactRelationship" className="block mb-2">
          Emergency Contact Relationship
        </label>
        <Field
          type="text"
          id="emergencyContactRelationship"
          name="emergencyContactRelationship"
          className="input"
        />
        <ErrorMessage name="emergencyContactRelationship">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
      <div className="max-w-full mb-4">
        <label htmlFor="emergencyContactPhone" className="block mb-2">
          Emergency Contact Phone Number
        </label>
        <Field
          type="text"
          id="emergencyContactPhone"
          name="emergencyContactPhone"
          className="input"
        />
        <ErrorMessage name="emergencyContactPhone">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
    </>
  );
}

export default Step5;
