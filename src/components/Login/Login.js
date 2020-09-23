import React from "react";
import { withFormik } from "formik";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import s from "./Login.module.css";
import { login } from "../../redux/thunks";
import useQuery from "../../hooks/useQuery";

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
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className={s.error} id="feedback">
            {errors.email}
          </div>
        )}
      </div>
      <div>
        <input
          type="password"
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
          <input
            type="checkbox"
            name="rememberMe"
            value={values.password}
            onChange={handleChange}
          />
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
  mapPropsToValues: () => ({ email: "", password: "", rememberMe: false }),
  validate: (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  },
  handleSubmit: async (values, { props, setSubmitting, resetForm }) => {
    const { email, password, rememberMe } = values;

    // TODO why with setTimeout()
    setTimeout(() => {
      props.dispatch(login(email, password, rememberMe));
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
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userId = useSelector((state) => state.auth.userId);

  let query = useQuery();
  const history = useHistory();

  if (isAuth) {
    const prevPath = query.get("prev_path");
    // redirect to user profile or the page from the page a user was redirected
    const redirectPath = prevPath ? prevPath : `/profile/${userId}`;

    history.push(redirectPath);
  }

  return (
    <>
      {!isAuth && (
        <div className={s.loginContainer}>
          <h2>Login form</h2>
          <LoginForm />
        </div>
      )}
    </>
  );
};

export default Login;
