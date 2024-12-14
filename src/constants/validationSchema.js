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

const guardianSchema = Yup.object().shape({
  guardianFullName: Yup.string().required("Guardian name is required"),
  relationship: Yup.string().required("Relationship to student is required"),
  homeAddress: Yup.string().required("Home address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string()
    .required("Zip code is required")
    .matches(/^\d{5}$/, "Zip code must be exactly 5 digits"),
  homePhone: Yup.string().required("Home phone number is required"),
  workPhone: Yup.string().optional(),
  cellPhone: Yup.string().optional(),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  residencyStatus: Yup.boolean().required("Residency status is required"),
  custodyDocuments: Yup.boolean().optional(),
  emergencyContactName: Yup.string().required(
    "Emergency contact name is required",
  ),
  emergencyContactRelationship: Yup.string().required(
    "Emergency contact relationship is required",
  ),
  emergencyContactPhone: Yup.string().required(
    "Emergency contact phone number is required",
  ),
});

export {
  nameSchema,
  demographicSchema,
  addressSchema,
  imageSchema,
  LogInSchema,
  initialValues,
};
