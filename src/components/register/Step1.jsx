import { Field, ErrorMessage } from "formik";
import Styles from "../../styles/Register.module.css";
import img from "/education-illustration.svg";

export default function Step1({ isRight, setIsRight }) {
  return (
    <div className={Styles.inner__content}>
      <div className={Styles.illustration}>
        <img src={img} />
      </div>
      <div className={Styles.form__controls}>
        <div className={Styles.form__control}>
          <label htmlFor="first-name">First name: </label>

          <Field
            type="text"
            id="first-name"
            className={`${Styles.inputBox} text-black`}
            name="student_info.first_name"
          />

          <ErrorMessage name="student_info.first_name">
            {(errorMsg) => (
              <div style={{ color: "red" }} className={Styles.errorMsg}>
                {errorMsg}
              </div>
            )}
          </ErrorMessage>
        </div>
        <div className={Styles.form__control}>
          <label htmlFor="middle-name">Middle name: </label>
          <Field
            type="text"
            className="text-black"
            id="middle-name"
            name="student_info.middle_name"
          />
          <ErrorMessage name="student_info.middle_name" className="errorMsg">
            {(errorMsg) => (
              <div style={{ color: "red" }} className={Styles.errorMsg}>
                {errorMsg}
              </div>
            )}
          </ErrorMessage>
        </div>
        <div className={Styles.form__control}>
          <label htmlFor="last-name">Last name: </label>
          <Field
            type="text"
            className="text-black"
            id="last-name"
            name="student_info.last_name"
          />
          <ErrorMessage name="student_info.last_name" className="errorMsg">
            {(errorMsg) => (
              <div style={{ color: "red" }} className={Styles.errorMsg}>
                {errorMsg}
              </div>
            )}
          </ErrorMessage>
        </div>
      </div>
    </div>
  );
}
