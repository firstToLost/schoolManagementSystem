import * as Yup from "yup";

const initialValues = {
  student_info: {
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    age: "",
    grade: "",
    kebele: "",
    mender: "",
  },
  images: {
    image_letter: "",
    image_admittance: "",
  },
  guardians: [
    {
      guardian_id: "3001000G0001",
      guardian_pk: "",
      relation: "father",
    },
    {
      guardian_id: "3001000G0001",
      guardian_pk: "",
      relation: "father",
    },
  ],
};

const nameSchema = Yup.object({
  student_info: Yup.object({
    first_name: Yup.string().required("field can't be empty"),
    middle_name: Yup.string().required("field can't be empty"),
    last_name: Yup.string().required("field can't be empty"),
  }),
});
const demographicSchema = Yup.object({
  student_info: Yup.object({
    gender: Yup.string().required("field can't be empty"),
    age: Yup.number()
      .integer("Must be an integer")
      .min(2, "Must be at least 3")
      .max(24, "Must be at most 24")
      .required("This field is required"),
    grade: Yup.string().required("field can't be empty"),
  }),
});
const addressSchema = Yup.object({
  student_info: Yup.object({
    kebele: Yup.string().required("field can't be empty"),
    mender: Yup.number()
      .integer("Must be an integer")
      .min(1, "Must be at least 1")
      .max(10, "Must be at most 100")
      .required("This field is required"),
  }),
});
const imageSchema = Yup.object({
  images: Yup.object({
    image_letter: Yup.mixed()
      .required("required")
      .test("fileFormat", "Only image files are allowed", (value) => {
        if (value) {
          const supportedFormats = ["image/jpeg", "image/png"];
          return supportedFormats.includes(value.type);
        }
        return true;
      })
      .test("fileSize", "File size must be less than 3MB", (value) => {
        if (value) {
          return value.size <= 3145728;
        }
        return true;
      }),
    image_admittance: Yup.mixed()
      .required("required")
      .test("fileFormat", "Only images files are allowed", (value) => {
        if (value) {
          const supportedFormats = ["image/jpeg", "image/png"];
          return supportedFormats.includes(value.type);
        }
        return true;
      })
      .test("fileSize", "File size must be less than 3MB", (value) => {
        if (value) {
          return value.size <= 3145728;
        }
        return true;
      }),
  }),
});
const LogInSchema = Yup.object({
  user_id: Yup.string().required("can't be empty"),
  password: Yup.string().required("can't be empty"),
});
export { nameSchema, demographicSchema, addressSchema, imageSchema, LogInSchema,initialValues };
