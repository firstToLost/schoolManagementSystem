import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import idk from "/organization-projects.svg";
import { useEffect } from "react";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { setAuth, setPersist, persist } = useAuth();

  const initialValues = {
    user_id: "",
    password: "",
  };

  const validationSchema = Yup.object({
    user_id: Yup.string().required("can't be empty"),
    password: Yup.string().required("can't be empty"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("/login/", values, {
        withCredentials: true,
      });
      console.log(response);
      const access = response?.data?.access;
      const roles = response?.data?.user_id?.user_type;

      const user = `${response?.data?.user_id?.first_name} ${response?.data?.user_id?.middle_name}`;

      setAuth({ user, roles, access });

      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <>
      <main className={styles.main}>
        <section id="login">
          <div className={` ${styles.container} ${styles["login__container"]}`}>
            <div
              className={`${styles["login__container__left"]} ${styles["container__left"]}`}
            >
              <h2 className={`${styles["heading__1"]}`}>Login</h2>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <Form className={`${styles["login__form"]}`}>
                  <div className={`${styles["username__input"]}`}>
                    <Field
                      className={`${styles["input"]} text-black`}
                      type="text"
                      name="user_id"
                      autoComplete="off"
                      required
                    />
                    <ErrorMessage name="user_id">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className={styles["password__input"]}>
                    <Field
                      className={`${styles["input"]} text-black`}
                      type="password"
                      name="password"
                      required
                    />
                    <ErrorMessage name="password">
                      {(errorMsg) => (
                        <div style={{ color: "red" }}>{errorMsg}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div></div>
                  <div className={`${styles["action__buttons"]}`}>
                    <button
                      className={`${styles["btn"]} ${styles["btn__secondary"]} ${styles["button"]}`}
                      type="submit"
                    >
                      Login
                    </button>
                    <div className={`${styles.separator}`}></div>
                    <button
                      className={`${styles["btn"]} ${styles["btn__secondary"]} ${styles["button"]}`}
                      onClick={() => navigate("/register")}
                    >
                      Register
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
            <div
              className={`${styles["login__container__right"]} ${styles["container__right"]} ${styles.illustration}`}
            >
              <img src={idk} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
