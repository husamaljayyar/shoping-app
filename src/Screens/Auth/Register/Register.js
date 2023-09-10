import "../Styles.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../../../Valedation";
import { Formik, Form, Field } from "formik";
import { registerAction } from "../../../Redux/User/userAction";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button/Button";

const Register = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const error = state.userDetails.error;
  const isLoading = state.userDetails.isLoading;

  const handleSubmit = (values) => {
    dispatch(registerAction(values, navigate));
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center justify-content-center mt-lg-0 mt-5 ">
        <section className="contanier d-flex flex-column-reverse flex-md-row align-items-center text-black  justify-content-around ">
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="lh-sm mt-lg-5">
                <p
                  className="fs-1 w-100 fw-bold text-center  text-dark"
                  style={{ fontFamily: "cursive" }}
                >
                  Register
                </p>
                <p
                  className=" text-secondary text-center lh-base mb-5 "
                  style={{ fontSize: "20px", fontFamily: "cursive" }}
                >
                  Sign up and get exclusive offers from us
                </p>

                <Field
                  className="textfield rounded-5 w-100"
                  name="name"
                  type="name"
                  placeholder="username"
                />
                {errors.name && touched.name ? (
                  <p className="text-danger">{errors.name}</p>
                ) : null}

                <Field
                  className="textfield rounded-5 w-100"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />

                {errors.email && touched.email ? (
                  <p className="text-danger">{errors.email}</p>
                ) : null}

                <Field
                  className="textfield rounded-5 w-100"
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                />

                {errors.password && touched.password ? (
                  <p className="text-danger">{errors.password}</p>
                ) : null}

                <Field
                  className="textfield rounded-5 w-100"
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Confirmation password"
                />

                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <p className="text-danger">{errors.passwordConfirmation}</p>
                ) : null}

                {error ? <p className="text-danger">{error}</p> : null}

                <Button
                  as="button"
                  className="btn w-100 fs-5 mt-1 rounded-5 text-white mb-2 bg-dark"
                  width="200px"
                  type="submit"
                  text="Sign up"
                  height={"50px"}
                />

                <hr />
                <p className="lh-1 text-center text-secondary">
                  <Link
                    className="ps-3 text-secondary text-decoration-none "
                    to="/login"
                  >
                    If you already have an account, just login
                  </Link>
                </p>
              </Form>
            )}
          </Formik>

          <div className="mt-4">
            <img className="auth-image h-auto" src="assets/images/login/signup.png" alt="imag" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
