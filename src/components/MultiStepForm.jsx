import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import useFormContext from "../hooks/useFormContext";

const MultiStepForm = () => {
  const { page } = useFormContext();

  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

  return <form className="min-h-[265px]">{steps[page]}</form>;
};

export default MultiStepForm;
