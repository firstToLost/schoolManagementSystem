import { isValidElement, cloneElement } from "react";
export default function FormikStep({
  children,
  validationSchema,
  setFieldValue,
}) {
  return (
    <div>
      {isValidElement(children) && cloneElement(children, { setFieldValue })}
    </div>
  );
}
