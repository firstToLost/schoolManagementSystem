import { ErrorMessage } from "formik";

export default function Step4({ setFieldValue }) {
  return (
    <>
      <div className="max-w-full mb-4">
        <div className="flex items-center pt-8 gap-8 justify-center">
          {/* <div className="w-32 h-32">
            <img className="w-full h-full rounded-lg" />
          </div> */}
          <div>
            <p className="text-primary font-medium text-sm mb-4">
              Select letter Image
            </p>

            <label
              htmlFor="letter-image"
              className="p-2 rounded text-white bg-secondary cursor-pointer"
            >
              Upload
            </label>
          </div>

          <input
            type="file"
            className="hidden w-full py-2 rounded focus:outline-none px-7"
            id="letter-image"
            onChange={(e) =>
              setFieldValue("images.image_letter", e.target.files[0])
            }
          />

          <ErrorMessage name="images.image_letter">
            {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className="flex items-center pt-8 gap-8 justify-center">
          {/* <div className="w-32 h-32">
            <img className="w-full h-full rounded-lg" />
          </div> */}
          <div>
            <p className="text-primary font-medium text-sm mb-4">
              Select admittance Image
            </p>

            <label
              htmlFor="admittance-image"
              className="p-2 rounded text-white bg-secondary cursor-pointer"
            >
              Upload
            </label>
          </div>

          <input
            type="file"
            className="hidden w-full py-2 rounded focus:outline-none px-7"
            id="admittance-image"
            onChange={(e) =>
              setFieldValue("images.image_admittance", e.target.files[0])
            }
          />

          <ErrorMessage name="images.image_admittance">
            {(errorMsg) => <div className="text-red-600">{errorMsg}</div>}
          </ErrorMessage>
        </div>
      </div>
    </>
  );
}
