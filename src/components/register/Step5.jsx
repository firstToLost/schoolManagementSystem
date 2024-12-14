import { Field, ErrorMessage } from "formik";

export default function Step2() {
  return (
    <div className="max-w-full mb-4">
      <div className="flex items-center pt-8 gap-8 justify-center">
        <div className="w-32 h-32">
          <img className="w-full h-full rounded-lg" />
        </div>

        <div>
          <p className="text-primary font-medium text-sm mb-4">
            Select Your Image
          </p>

          <label
            htmlFor="studentImage"
            className="p-2 rounded text-white bg-secondary cursor-pointer"
          >
            Upload
          </label>
        </div>

        <Field
          className="hidden w-full py-2 rounded focus:outline-none px-7"
          type="file"
          id="student-image"
          name="images.student_image"
        />
        <ErrorMessage name="images.student_image">
          {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
        </ErrorMessage>
      </div>
    </div>
  );
}
