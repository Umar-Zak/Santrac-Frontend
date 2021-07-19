import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../component/input";
import Navbar from "../component/navbar";
import Button from "../component/button";
import SectionHeader from "../component/section-header";
import { Link } from "react-router-dom";
import Error from "../component/error";
import { register } from "../utils/user";

const RegisterPage = () => {
  const schema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password too short")
      .required("Password is required"),
    phone: Yup.string()
      .min(10, "Number must be 10 degits")
      .max(10, "Number must be 10 digits")
      .required("Number is required"),
  });

  return (
    <div className="block">
      <Navbar />

      <div className="form-container">
        <SectionHeader text="Register" />
        <Formik
          initialValues={{ username: "", password: "", phone: "", email: "" }}
          validationSchema={schema}
          onSubmit={async (values) => {
            try {
              await register(values);
            } catch ({ response: { data, status } }) {
              if (status === 400) return alert(data); //Will improve this line of code with a proper view

              alert("Unexpected error. Try again"); //Will improve this line of code with a proper view
            }
          }}
        >
          {({ errors, touched, handleChange }) => (
            <Form>
              {touched.username && errors.username && (
                <Error text={errors.username} />
              )}
              <Input
                handleChange={handleChange}
                name="username"
                type="text"
                placeholder="Username"
              />
              {touched.email && errors.email && <Error text={errors.email} />}
              <Input
                handleChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
              />
              {touched.phone && errors.phone && <Error text={errors.phone} />}
              <Input
                handleChange={handleChange}
                name="phone"
                type="phone"
                placeholder="Phone number"
              />
              {touched.password && errors.password && (
                <Error text={errors.password} />
              )}
              <Input
                handleChange={handleChange}
                name="password"
                type="password"
                placeholder="Password"
              />
              <Button text="Sign Up" type="button--primary button--large" />
            </Form>
          )}
        </Formik>
        <Link className="register-login" to="/login">
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
