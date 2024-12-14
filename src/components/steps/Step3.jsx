import useFormContext from "../../hooks/useFormContext";

const Step2 = () => {
  const { formData, handleChange } = useFormContext();

  const data = formData[2];

  return (
    <>
      <div className="max-w-full mb-4">
        <label htmlFor="kebele" className="block mb-2">
          Kebele
        </label>
        <input
          className="input"
          type="text"
          id="kebele"
          placeholder="Kebele"
          name="kebele"
          value={data.kebele}
          onChange={handleChange}
        />
      </div>
      <div className="max-w-full mb-4">
        <label htmlFor="mender" className="block mb-2">
          Mender
        </label>
        <input
          className="input"
          type="text"
          id="mender"
          placeholder="Mender"
          name="mender"
          value={data.mender}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Step2;
