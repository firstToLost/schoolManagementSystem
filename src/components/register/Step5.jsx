import { Field, ErrorMessage } from "formik";
import Styles from "../../styles/Register.module.css";
import img from "/education-illustration.svg";

export default function Step2() {
  return (
    <div className={Styles.inner__content}>
      <div className={Styles.form__controls}></div>
      <div className={Styles.illustration}>
        <img src={img} />
      </div>
    </div>
  );
}
