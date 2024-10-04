import useFormContext from "../../hooks/useFormContext";

const Step1 = () => {
  const { formData, handleChange } = useFormContext();
  const data = formData[1];

  return (
    <>
      <div className="max-w-full mb-4">
        <label htmlFor="gender" className="block mb-2">
          Gender
        </label>
        <select
          name="gender"
          className="w-full p-2 border rounded outline-none"
          id="gender"
          value={data.gender}
          onChange={handleChange}
        >
          <option value="" className="opacity-80">
            choose
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="max-w-full mb-4">
        <label htmlFor="age" className="block mb-2">
          Student Age
        </label>
        <input
          className="block w-full py-2 rounded focus:outline-none px-7"
          type="number"
          id="age"
          placeholder="Age"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
      </div>

      <div className="max-w-full mb-4">
        <label htmlFor="grade" className="block mb-2">
          Student Grade
        </label>
        <input
          className="block w-full py-2 rounded focus:outline-none px-7"
          type="text"
          id="grade"
          placeholder="Grade"
          name="grade"
          value={data.grade}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Step1;
