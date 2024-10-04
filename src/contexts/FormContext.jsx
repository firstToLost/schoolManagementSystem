import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState([
    { firstName: "", middleName: "", lastName: "" },
    { gender: "", age: "", grade: "" },
    { kebele: "", mender: "" },
    { studentImage: "" },
  ]);

  const title = [
    "Basic Student Information",
    "Student Identity",
    "Location Details",
    "Student Image",
  ];

  const subTitle = [
    "Enter your first name, middle name and last name",
    "Please enter your gender, age and grade level",
    "Please enter your kebele and mender",
    "Almost there! Please select your image",
  ];

  const disableNext =
    Object.keys(formData[page].length - 1 === page) &&
    Object.values(formData[page]).every(Boolean);
  const disablePrev = page === 0;

  const handleChange = (e) => {
    const { name, type } = e.target;

    const value =
      type === "checkbox"
        ? e.target.checked
        : type === "file"
        ? URL.createObjectURL(e.target.files[0])
        : e.target.value;

    setFormData((prevData) => {
      const updatedData = prevData.map((data, i) =>
        page === i ? { ...data, [name]: value } : data
      );
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        page,
        setPage,
        title,
        subTitle,
        disableNext,
        disablePrev,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
