import { Field, ErrorMessage } from "formik";
import Styles from "../../styles/Register.module.css";
import img from "/education-illustration.svg";

export default function Step2() {
  return (
    <div className={Styles.inner__content}>
      <div className={Styles.form__controls}>
        <div className={Styles.form__control}>
          <label htmlFor="gender">Gender: </label>

          <label>
            <Field type="radio" name="student_info.gender" value="male" />
            Male
          </label>

          <label>
            <Field type="radio" name="student_info.gender" value="female" />
            Female
          </label>

          <ErrorMessage name="student_info.gender">
            {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className={Styles.form__control}>
          <label htmlFor="age">Age: </label>
          <Field
            type="number"
            className="text-black"
            id="age"
            name="student_info.age"
          />
          <ErrorMessage name="student_info.age">
            {(errorMsg) => <div style={{ color: "red" }}>{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className={Styles.form__control}>
          <label htmlFor="grade">Grade: </label>
          <Field
            as="select"
            className="text-black"
            id="grade"
            name="student_info.grade"
          >
            <option value="">Select Grade</option>
            <option value="nursery">nursery</option>
            <option value="lkg">LKG</option>
            <option value="ukg">UKG</option>
            <option value="1">1st Grade</option>
            <option value="2">2nd Grade</option>
            <option value="3">3rd Grade</option>
            <option value="4">4th Grade</option>
            <option value="5">5th Grade</option>
            <option value="6">6th Grade</option>
            <option value="7">7th Grade</option>
            <option value="8">8th Grade</option>
            <option value="9">9th Grade</option>
            <option value="10">10th Grade</option>
            <option value="11">11th Grade</option>
            <option value="12">12th Grade</option>
          </Field>
          <ErrorMessage name="student_info.grade">
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
