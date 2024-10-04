import { ErrorMessage } from "formik";
import Styles from "../../styles/Register.module.css";
import img from "/education-illustration.svg";
export default function Step4({ setFieldValue }) {
  return (
    <div className={Styles.inner__content}>
      <div className={Styles.form__controls}>
        <div className={Styles.form__control}>
          <label>image: </label>

          <label>
            image:
            <input
              type="file"
              onChange={(e) =>
                setFieldValue("images.image_letter", e.target.files[0])
              }
            />
          </label>

          <ErrorMessage name="images.image_letter">
            {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className={Styles.form__control}>
          <label>image: </label>

          <label>
            image 2:
            <input
              type="file"
              onChange={(e) =>
                setFieldValue("images.image_admittance", e.target.files[0])
              }
            />
          </label>

          <ErrorMessage name="images.image_admittance">
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
