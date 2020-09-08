import React from "react";
import s from "./Profile.module.css";
import Header from "./Header/Header";
import Info from "./Info/Info";
import PostsContainer from "./Posts/PostsContainer";
import LoadingSpinner from "../Common/LoadingSpinner";
import { get as _get } from "lodash";

const Profile = ({ profile, status, updateStatus }) => {
  return (
    <main className={s.profileContent}>
      {!profile && <LoadingSpinner />}

      {profile && (
        <>
          <Header imageSrc={_get(profile, "photos.large")} />
          <Info profile={profile} />
          <PostsContainer />
        </>
      )}
    </main>
  );
};

export default Profile;
