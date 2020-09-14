import React from "react";
import { withFormik } from "formik";
import { connect } from "react-redux";
import s from "./Login.module.css";

const Form = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="login"
          value={values.login}
          placeholder="Login"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.login && touched.login && (
          <div className={s.error} id="feedback">
            {errors.login}
          </div>
        )}
      </div>
      <div>
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className={s.error} id="feedback">
            {errors.password}
          </div>
        )}
      </div>
      <div>
        <label>
          <input id="rememberMe" type="checkbox" name="rememberMe" />
          Remember me
        </label>
      </div>
      <div>
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
      </div>
    </form>
  );
};

const FormContainer = withFormik({
  mapPropsToValues: () => ({ login: "", password: "", rememberMe: "" }),
  validate: (values) => {
    const errors = {};

    if (!values.login) {
      errors.login = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  },
  handleSubmit: async (values, { props, setSubmitting, resetForm }) => {
    // TODO why with setTimeout()
    setTimeout(() => {
      // props.dispatch(sendMessage(values.newMessage)); // TODO send login
      resetForm({});
      // if your onSubmit function is synchronous,
      // then you need to call setSubmitting(false) on your own.
      setSubmitting(false);
    }, 100);
  },

  displayName: "LoginForm",
})(Form);

const LoginForm = connect()(FormContainer);

const Login = () => {
  return (
    <div>
      <h2>Login form</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
