import "../Styles.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { loginSchema } from "../../../Valedation";
import { loginAction } from "../../../Redux/User/userAction";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button/Button";

export const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const navigate = useNavigate();

  const error = state.userDetails.error;
  const isLoading = state.userDetails.isLoading;

  const handleSubmit = async (values) => {
    dispatch(loginAction(values, navigate));
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center justify-content-center mt-4 ">
        <section className="contanier d-flex flex-column-reverse flex-md-row align-items-center text-black justify-content-around ">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="lh-sm mt-lg-10 ">
                <p
                  className="fs-1 w-100 fw-bold text-center  text-dark"
                  style={{ fontFamily: "cursive" }}
                >
                  Login
                </p>
                <p
                  className=" text-secondary text-center lh-base pb-4 "
                  style={{ fontSize: "20px", fontFamily: "cursive" }}
                >
                  Login with your data that you entered during registration
                </p>

                <Field
                  className="textfield rounded-5 w-100 fs-5"
                  name="email"
                  type="email"
                  placeholder="Email"
                />

                {errors.email && touched.email ? (
                  <p className="text-danger">{errors.email}</p>
                ) : null}
                <Field
                  className="textfield rounded-5 w-100 fs-5"
                  name="password"
                  type="password"
                  placeholder="Password"
                />

                {errors.password && touched.password ? (
                  <p className="text-danger">{errors.password}</p>
                ) : null}

                {error ? <p className="text-danger">{error}</p> : null}

                <Button
                  as="button"
                  className="btn fs-5 fw-bold mt-1 rounded-2 text-white w-100 rounded-5 mb-2 bg-dark"
                  x
                  type="submit"
                  isLoading={isLoading}
                  text="Login"
                  height="50px"
                />

                <hr />
                <p className="lh-1 text-center text-secondary">
                  Forgot your password?
                </p>

                <Link className="text-decoration-none" to="/register">
                  <p className="lh-1 text-center text-secondary">
                    Register now
                  </p>
                </Link>
              </Form>
            )}
          </Formik>
          <div className="mt-2 mt-lg-0">
            <img
              className="auth-image h-auto"
              src="assets/images/login/login.jpg"
              alt="imag"
            />
          </div>{" "}
        </section>
      </div>
    </>
  );
};
export default Login;
