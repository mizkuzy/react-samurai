import React from "react";
import { withFormik } from "formik";
import { addPost } from "../../../../redux/thunks";
import { connect } from "react-redux";

const Form = (props) => {
  const { values, isSubmitting, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder={"Type a post"}
        onChange={handleChange}
        value={values.postText}
        name="postText"
      />
      <div>
        <button type="submit" disabled={isSubmitting}>
          Add Post
        </button>
      </div>
    </form>
  );
};

const FormContainer = withFormik({
  mapPropsToValues: () => ({ postText: "" }),

  handleSubmit: async (values, { props, setSubmitting, resetForm }) => {
    // TODO why with setTimeout()
    setTimeout(() => {
      debugger;
      props.dispatch(addPost(values.postText));
      resetForm({});
      setSubmitting(false);
    }, 1000);
  },
})(Form);

const NewPostForm = connect()(FormContainer);

export default NewPostForm;
