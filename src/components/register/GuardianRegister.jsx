import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikStepper from "../multistep/FormikStepper";
import FormikStep from "../multistep/FormikStep";
import RegisterStepper from "../multistep/RegisterStepper";
import Step1 from "./guardian/Step1";
import Step2 from "./guardian/Step2";
import Step3 from "./guardian/Step3";
import Step4 from "./guardian/Step4";
import Step5 from "./guardian/Step5";

import { initialValuesGuardian } from "../../constants/initialValues";

function GuardianRegister() {
  return (
    <FormikStepper initialValues={initialValuesGuardian}>
      <FormikStep>
        <Step1 />
      </FormikStep>

      <FormikStep>
        <Step2 />
      </FormikStep>

      <FormikStep>
        <Step3 />
      </FormikStep>

      <FormikStep>
        <Step4 />
      </FormikStep>

      <FormikStep>
        <Step5 />
      </FormikStep>
    </FormikStepper>
  );
}

export default GuardianRegister;
