import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { ValidationError } from "../ValidationError/ValidationError";
import axios from "axios";
import { axiosConfig } from "../../axios/axiosConfig";
import toast from "react-hot-toast";

export const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkboxOption: false,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .max(20)
      .required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .min(8, "Must be at least 8 characters")
      .max(20)
      .required("Confirm your password"),
    checkboxOption: Yup.boolean()
      .oneOf([true], "You must agree to terms & policy")
      .required(),
  });
  async function handleRegisterForm(values) {
    try {
      const res = await axiosConfig({
        url: "/register",
        method: "POST",
        data: values,
      });
      console.log(values);
      toast.success("Successfully Register");
      setCollapseIndex(1);
    } catch (err) {
      toast.error(err.response.data);
      console.log(err);
    }
  }
  const onSubmit = (values) => {
    console.log(values);
    handleRegisterForm(values);
  };

  return (
    <div className="LoginForm  ">
      <div className="LoginForm--header">
        <h2>Register</h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <>
            <Form>
              <div className="input--group">
                <Field name="name" placeholder="Your Name " />
                <ErrorMessage
                  name="name"
                  className="validationError"
                  component={ValidationError}
                />
              </div>
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
              <div className="input--group">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  className="validationError"
                  component={ValidationError}
                />
              </div>
              <div className="input--group">
                <Field
                  type="checkbox"
                  name="checkboxOption"
                  id="checkboxOption"
                />
                <label htmlFor="checkboxOption">
                  I agree to terms & policy
                </label>
                <ErrorMessage
                  name="checkboxOption"
                  className="validationError"
                  component={ValidationError}
                />
              </div>

              <div className="form--btn">
                <button type="submit">Register</button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};
