import { Formik, Form } from "formik";
import { Children, useState, cloneElement, isValidElement } from "react";
export default function FormikStepper({ children, ...props }) {
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const isLastStep = () => step === childrenArray.length - 1;

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((prev) => prev + 1);
          console.log(currentChild);
        }
      }}
    >
      {({ setFieldValue }) => (
        <Form className={props.className}>
          {isValidElement(currentChild) &&
            cloneElement(currentChild, { setFieldValue })}

          <div className="flex gap-4">
            {step > 0 ? (
              <button
                className="btn"
                type="button"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            ) : null}
            <button className="btn" type="submit">
              {isLastStep() ? "Submit" : "Next"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
