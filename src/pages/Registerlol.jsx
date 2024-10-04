import FormikStepper from "../components/multistep/FormikStepper";
import FormikStep from "../components/multistep/FormikStep";
import Step1 from "../components/register/Step1";
import Step2 from "../components/register/Step2";
import Step3 from "../components/register/Step3";
import Step4 from "../components/register/Step4";
import Step5 from "../components/register/Step5";
import Styles from "../styles/Register.module.css";
import { useState } from "react";

import axios from "../api/axios";
import {
  initialValues,
  nameSchema,
  demographicSchema,
  addressSchema,
  imageSchema,
} from "../constants/validationSchema";

function Register() {
  const [isRight, setIsRight] = useState(true);

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("image_letter", values.images.image_letter);
    formData.append("image_admittance", values.images.image_admittance);
    formData.append("guardians", JSON.stringify(values.guardians));
    formData.append("student_info", JSON.stringify(values.student_info));

    // try {
    //   const response = await axios.post("/register", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(values);
  };

  return (
    <div className={Styles.wrapper}>
      <FormikStepper
        className={Styles.slider__container}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <FormikStep validationSchema={nameSchema}>
          <Step1 isRight={isRight} setIsRight={setIsRight} />
        </FormikStep>
        <FormikStep validationSchema={demographicSchema}>
          <Step2 isRight={isRight} setIsRight={setIsRight} />
        </FormikStep>
        <FormikStep validationSchema={addressSchema}>
          <Step3 isRight={isRight} setIsRight={setIsRight} />
        </FormikStep>
        <FormikStep validationSchema={imageSchema}>
          <Step4 isRight={isRight} setIsRight={setIsRight} />
        </FormikStep>
        <FormikStep validationSchema={imageSchema}>
          <Step5 isRight={isRight} setIsRight={setIsRight} />
        </FormikStep>
      </FormikStepper>
    </div>
  );
}

export default Register;