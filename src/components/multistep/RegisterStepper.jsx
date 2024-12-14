import { Formik, Form } from "formik";
import { Children, useState, cloneElement, isValidElement } from "react";

const title = [
  "Basic Student Information",
  "Student Identity",
  "Location Details",
  "Admittance Image and Letter Imgae",
  "Student Image",
  "Guardian info",
];

const subTitle = [
  "Enter your first name, middle name and last name",
  "Please enter your gender, age and grade level",
  "Please enter your kebele and mender",
  "APlease select your Admittance image",
  "Almost there! Please select your image",
  "If you have a guardian already registered click next",
];
export default function RegisterStepper({ children, ...props }) {
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
          <main>
            <section
              id="hero"
              className="scroll-mt-40 pb-4 bg-babyBlue-bg sm:bg-light-bg min-h-screen px-4 w-full flex items-center"
            >
              <div className="text-left bg-babyBlue-bg lg:container xl:max-w-[1122px] mx-auto pb-4 max-sm:min-h-[30rem] md:h-[30rem] rounded-3xl md:rounded-[5rem] flex flex-col  justify-center gap- md:gap-4 lg:px-28 sm:px-6 sm:max-[380px]:px-4">
                <div className="sm:pt-10 flex justify-center items-center relative">
                  <nav className="flex gap-4">
                    {childrenArray.map((_, i) => (
                      <div
                        className={`rounded-full bg-primary ${
                          step === i ? "bg-opacity-50" : "bg-opacity-80"
                        } w-3 h-3`}
                      ></div>
                    ))}
                  </nav>
                </div>

                <div className="flex-1 gap-2 md:gap-16 flex flex-col sm:flex-row justify-center max-sm:px-6 max-sm:max-[380px]:px-4">
                  <div className=" sm:w-1/2 pt-14 text-primary">
                    <h1 className="font-bold text-[2rem] md:text-4xl max-w-[13ch]">
                      {title[step]}
                    </h1>

                    <p className="pt-4 max-w-72">{subTitle[step]}</p>
                  </div>

                  <div className="pt-8 sm:w-1/2 flex flex-col ">
                    {isValidElement(currentChild) &&
                      cloneElement(currentChild, { setFieldValue })}
                    <div className="flex gap-4">
                      {step > 0 ? (
                        <button
                          className="btn-primary"
                          type="button"
                          onClick={() => setStep(step - 1)}
                        >
                          Back
                        </button>
                      ) : null}
                      <button className="btn-primary" type="submit">
                        {isLastStep() ? "Submit" : "Next"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </Form>
      )}
    </Formik>
  );
}
