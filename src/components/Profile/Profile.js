import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import Header from "./Header/Header";
import Info from "./Info/Info";

const Profile = ({ state, dispatch }) => (
  <main className={s.profile_content}>
    <Header />
    <Info />
    <Posts
      posts={state.posts}
      newPostText={state.newPostText}
      dispatch={dispatch}
    />
  </main>
);

export default Profile;
