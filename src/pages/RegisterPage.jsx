import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Input from "../component/input";
import Navbar from "../component/navbar";
import Button from "../component/button";
import SectionHeader from "../component/section-header";
import { Link } from "react-router-dom";
import Error from "../component/error";
import { register } from "../utils/user";
import Spiner from "../component/spiner";

const RegisterPage = () => {
  const [showSpiner, setShowSpiner] = useState(false);

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
              setShowSpiner(true);
              await register(values);
            } catch ({ response: { data, status } }) {
              setShowSpiner(false);
              if (status === 400) return toast(data);

              toast("Unexpected error. Try again");
            }
          }}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
              {touched.username && errors.username && (
                <Error text={errors.username} />
              )}
              <Input
                handleChange={handleChange}
                name="username"
                type="text"
                placeholder="Username"
                value={values.username}
              />
              {touched.email && errors.email && <Error text={errors.email} />}
              <Input
                handleChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
                value={values.email}
              />
              {touched.phone && errors.phone && <Error text={errors.phone} />}
              <Input
                handleChange={handleChange}
                name="phone"
                type="phone"
                placeholder="Phone number"
                value={values.phone}
              />
              {touched.password && errors.password && (
                <Error text={errors.password} />
              )}
              <Input
                handleChange={handleChange}
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
              />
              {!showSpiner && (
                <Button text="Sign Up" type="button--primary button--large" />
              )}
              <div className="spiner-container">{showSpiner && <Spiner />}</div>
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
