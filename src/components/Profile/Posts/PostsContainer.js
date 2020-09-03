import { addPost, onUpdateNewPostText } from "../../../redux/actionCreators";
import Posts from "./Posts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText,
  };
};

export default connect(mapStateToProps, {
  addPost,
  onUpdateNewPostText,
})(Posts);
