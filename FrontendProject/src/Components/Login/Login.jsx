import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { ValidationError } from "../ValidationError/ValidationError";
import { axiosConfig } from "../../axios/axiosConfig";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FaGooglePlusG } from "react-icons/fa";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import { UserAuth } from "../../utilies/UserAuth";

export const Login = () => {
  const { setToken } = useContext(UserAuth);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    checkboxOption: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(8, "Must be at least 8 letters ")
      .max(20)
      .required(),
    checkboxOption: Yup.boolean()
      .oneOf([true], "You must agree to terms & policy")
      .required(),
  });

  async function handleLoginForm(values) {
    try {
      const { data } = await axiosConfig({
        url: "/login",
        method: "POST",
        data: values,
      });
      console.log(values);
      navigate("/home");
      toast.success("Successfully Logedin");
      setToken(data.accessToken);
      console.log(data.accessToken);
      localStorage.setItem("user_token", data.accessToken);
    } catch (err) {
      toast.error(err.response.data);
      console.log(err);
    }
  }
  const onSubmit = (values) => {
    handleLoginForm(values);
    console.log(values);
  };

  return (
    <>
      <div className="LoginForm">
        <div className="LoginForm--header">
          <h2>LOGIN</h2>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <div className="input--group">
                <Field name="email" placeholder="Your Email" />
                <ErrorMessage
                  name="email"
                  className="validationError"
                  component={ValidationError}
                />
              </div>
              <div className="input--group">
                <Field
                  type="password"
                  name="password"
                  placeholder="Your Password"
                />
                <ErrorMessage
                  name="password"
                  className="validationError"
                  component={ValidationError}
                />
              </div>
              {/* Checkbox for Agree to Terms & Policy */}
              <div className="input--group">
                <Field
                  type="checkbox"
                  name="checkboxOption"
                  id="checkboxOption"
                />
                <label htmlFor="checkboxOption">Remember Me </label>
                <ErrorMessage
                  name="checkboxOption"
                  className="validationError"
                  component={ValidationError}
                />
              </div>
              <div className="form--btn">
                <button type="submit">Log in</button>
              </div>
              <div className="orline">
                <div className="or-line"></div>
                <div className="or-text">OR</div>
                <div className="or-line"></div>
              </div>
              <div className="or--container">
                <div className="google--content">
                  <a href="#" className="social-link facebook">
                    <FaGooglePlusG />
                    <span>Google</span>
                  </a>
                </div>
                <div className="facebook--content">
                  <a href="#" className="social-link facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
