import { withFormik } from "formik";
import React from "react";
import { sendMessage } from "../../../redux/thunks";
import { connect } from "react-redux";

const Form = (props) => {
  const { values, isSubmitting, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        onChange={handleChange}
        value={values.newMessage}
        name="newMessage"
      />
      <div>
        <button type="submit" disabled={isSubmitting}>
          Add Message
        </button>
      </div>
    </form>
  );
};

const FormContainer = withFormik({
  mapPropsToValues: () => ({ newMessage: "" }),

  handleSubmit: async (values, { props, setSubmitting, resetForm }) => {
    // TODO why with setTimeout()
    setTimeout(() => {
      props.dispatch(sendMessage(values.newMessage));
      resetForm({});
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(Form);

const NewMessageForm = connect()(FormContainer);

export default NewMessageForm;
