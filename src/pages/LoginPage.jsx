import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../component/input";
import Navbar from "../component/navbar";
import Button from "../component/button";
import SectionHeader from "../component/section-header";
import Error from "../component/error";
import { login } from "../utils/user";

const Login = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="block">
      <Navbar />

      <div className="form-container">
        <SectionHeader text="Login" />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            try {
              await login(values);
            } catch ({ response: { data, status } }) {
              if (status === 400) return alert(data); //Will improve this line of code with a proper view

              alert("Unexpected error. Try again"); //Will improve this line of code with a proper view
            }
          }}
          validationSchema={schema}
        >
          {({ handleChange, errors, touched }) => (
            <Form>
              {touched.email && errors.email && <Error text={errors.email} />}
              <Input
                handleChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
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
              <Button text="Login" type="button--primary button--large" />
            </Form>
          )}
        </Formik>
        <Link className="register-login" to="/register">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
