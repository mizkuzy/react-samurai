import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import Header from "./Header/Header";
import Info from "./Info/Info";

const Profile = ({ state, addPost, updateNewPostText }) => (
  <main className={s.profile_content}>
    <Header />
    <Info />
    <Posts
      posts={state.posts}
      newPostText={state.newPostText}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />
  </main>
);

export default Profile;
