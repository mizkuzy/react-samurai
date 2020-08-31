import React from "react";
import s from "./Profile.module.css";
import Header from "./Header/Header";
import Info from "./Info/Info";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({ store }) => (
  <main className={s.profile_content}>
    <Header />
    <Info />
    <PostsContainer store={store} />
  </main>
);

export default Profile;
