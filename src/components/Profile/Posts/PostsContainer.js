import React from "react";
import {
  addPostActionCreator,
  onUpdateNewPostTextActionCreator,
} from "../../../redux/actionCreators";
import Posts from "./Posts";

const PostsContainer = ({ store }) => {
  const state = store.getState().profile;
  const dispatch = store.dispatch;

  const addPost = () => {
    dispatch(addPostActionCreator());
  };

  const updateNewPostText = (text) => {
    dispatch(onUpdateNewPostTextActionCreator(text));
  };

  return (
    <Posts
      posts={state.posts}
      newPostText={state.newPostText}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />
  );
};
export default PostsContainer;
