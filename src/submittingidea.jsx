import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define validation schema
const validationSchema = Yup.object().shape({
  grade: Yup.string().required("Grade is required"),
  term: Yup.string().required("Term is required"),
  // other fields
});

// Define the submit handler function
const handleSubmit = (values, { setSubmitting, setErrors }) => {
  fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.errors) {
        // Set server-side errors
        setErrors(data.errors);
      } else {
        // Handle successful response
        console.log("Submission successful", data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      setSubmitting(false);
    });
};

const MyForm = () => {
  return (
    <Formik
      initialValues={{
        grade: "",
        term: "",
        // other fields
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <div>
            <label htmlFor="grade">Grade</label>
            <Field name="grade" type="text" />
            <ErrorMessage name="grade" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="term">Term</label>
            <Field name="term" type="text" />
            <ErrorMessage name="term" component="div" className="error" />
          </div>

          {/* Add other fields as needed */}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
