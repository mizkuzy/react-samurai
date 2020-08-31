import {
  addPostActionCreator,
  onUpdateNewPostTextActionCreator,
} from "../../../redux/actionCreators";
import Posts from "./Posts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addPost: () => dispatch(addPostActionCreator()),
  updateNewPostText: (text) => dispatch(onUpdateNewPostTextActionCreator(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
