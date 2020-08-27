import React from "react";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import Header from "./Header/Header";
import Info from "./Info/Info";

const postsData = [
  { id: 1, text: "I like your app", likesNumber: 5 },
  { id: 2, text: "Never give up", likesNumber: 2 },
  { id: 3, text: "Vjuhhhh", likesNumber: 20 },
];

const Profile = () => (
  <main className={s.profile_content}>
    <Header />
    <Info />
    <Posts postsData={postsData} />
  </main>
);

export default Profile;
