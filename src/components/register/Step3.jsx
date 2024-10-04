import { Field, ErrorMessage } from "formik";

import Styles from "../../styles/Register.module.css";
import img from "/education-illustration.svg";
export default function Step3() {
  return (
    <div className={Styles.inner__content}>
      <div className={Styles.form__controls}>
        <div className={Styles.form__control}>
          <label htmlFor="kebele">kebele: </label>
          <Field
            type="text"
            id="kebele"
            name="student_info.kebele"
            className="text-black"
          />
          <ErrorMessage name="student_info.kebele">
            {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div className={Styles.form__control}>
          <label htmlFor="mender">mender: </label>
          <Field
            type="number"
            id="mender"
            name="student_info.mender"
            className="text-black"
          />
          <ErrorMessage name="student_info.mender">
            {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
          </ErrorMessage>
        </div>
      </div>
      <div className={Styles.illustration}>
        <img src={img} />
      </div>
    </div>
  );
}
