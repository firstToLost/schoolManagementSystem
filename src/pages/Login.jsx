import { Link, useLocation, useNavigate } from "react-router-dom";
import BooksImg from "../assets/images/books-img.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

import { LogInSchema } from "../constants/validationSchema";
import { LogInValues } from "../constants/initialValues";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setAuth, setPersist, persist } = useAuth();

  const handleSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus }
  ) => {
    try {
      const response = await axios.post("/login/", values, {
        withCredentials: true,
      });
      console.log(response);
      const access = response?.data?.access;
      const roles = response?.data?.roles || [
        response?.data?.user_info?.user_type,
      ];

      const user = `${response?.data?.user_id?.first_name} ${response?.data?.user_id?.middle_name}`;

      setAuth({ user, roles, access });

      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (error) {
      setStatus(error.response.data.error);
      console.log(error.response.data.error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <main>
      <section id="login" className="scroll-mt-20 bg-light-bg w-full">
        <div className="text-center md:text-left w-full lg:container mx-auto flex flex-col md:flex-row justify-center gap-8 pt-16 md:pt-32 lg:px-28 px-6">
          <Formik
            initialValues={LogInValues}
            validationSchema={LogInSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, status }) => (
              <Form className="md:w-1/2 pt-8">
                <h1 className="text-primary text-5xl font-bold">Login</h1>
                <p className="text-primary font-semibold mt-2 mb-4">
                  Login now to unlock your full potential.
                </p>

                <div className="mb-4">
                  <Field
                    type="text"
                    id="email"
                    name="user_id"
                    placeholder="Email"
                    className="border w-full outline-none px-4 py-2 rounded"
                  />
                  <ErrorMessage name="user_id">
                    {(errorMsg) => (
                      <p className="text-red-800 text-xs font-bold">
                        {errorMsg}
                      </p>
                    )}
                  </ErrorMessage>
                  <label
                    htmlFor="email"
                    className="absolute left-[-999999999px]"
                  >
                    Email
                  </label>
                </div>

                <div>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="border w-full outline-none px-4 py-2 rounded "
                  />
                  <ErrorMessage name="password">
                    {(errorMsg) => (
                      <p className="text-red-800 text-xs font-bold">
                        {errorMsg}
                      </p>
                    )}
                  </ErrorMessage>
                  <label
                    htmlFor="password"
                    className="absolute left-[-999999999px]"
                  >
                    Password
                  </label>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="checkbox"
                    checked={persist}
                    onChange={() => setPersist((prev) => !prev)}
                  />
                  <span className="text-primary">Remember Me</span>
                </div>

                {status && <div className="text-red-400">{status}</div>}
                <div className="text-start mt-4">
                  <button
                    className="btn-primary w-full"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                </div>

                <div className="h-px bg-primary w-full flex items-center justify-center mt-4 before:content-['or'] before:bg-light-bg before:px-2"></div>

                <div className="text-start mt-4">
                  <Link to="/register">
                    <button className="btn-primary w-full">Register</button>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
          <div className=" mx-auto lg:max-w-md md:max-w-lg max-w-96 md:w-1/2">
            <img src={BooksImg} className="w-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
