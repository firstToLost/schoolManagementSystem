import profileImg from "../../assets/images/profile.png";
import useFormContext from "../../hooks/useFormContext";

const Step2 = () => {
  const { formData, handleChange } = useFormContext();

  const data = formData[3];

  return (
    <>
      <div className="max-w-full mb-4">
        <div className="flex items-center pt-8 gap-8 justify-center">
          <div className="w-32 h-32">
            <img
              src={data.studentImage || profileImg}
              className="w-full h-full rounded-lg"
            />
          </div>

          <div>
            <p className="text-primary font-medium text-sm mb-4">
              Select Your Image
            </p>

            <label
              htmlFor="studentImage"
              className="p-2 rounded text-white bg-secondary cursor-pointer"
            >
              {data.studentImage ? "Update" : "Upload"}
            </label>
          </div>

          <input
            className="hidden w-full py-2 rounded focus:outline-none px-7"
            type="file"
            id="studentImage"
            name="studentImage"
            accept="image/jpeg, image/png, image/jpg"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default Step2;
