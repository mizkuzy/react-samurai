import React from "react";
import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
        rememberMe: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500)); // todo do we need it?
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div>
          <label htmlFor="login">Login</label>
          <Field id="login" name="login" placeholder="Login" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="Password" />
        </div>
        <div>
          <label>
            <Field id="rememberMe" type="checkbox" name="rememberMe" />
            Remember me
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </Form>
    </Formik>
  );
};

const Login = () => {
  return (
    <div>
      <h1>Login form</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
