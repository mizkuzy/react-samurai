import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { processProfile } from "../../redux/thunks";
import useLoginRedirect from "../../hooks/useLoginRedirect";
import s from "./Profile.module.css";
import LoadingSpinner from "../Common/LoadingSpinner";
import Info from "./Info/Info";
import Posts from "./Posts/Posts";

const ProfileHook = ({ userId }) => {
  console.log("profile");
  useLoginRedirect();
  // useRedirect("/profile", "/users"); // TODO wrap in custom hook to fetch uid AND change to redirect profile with id

  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(processProfile(userId));
    }
  }, [userId]);

  const profile = useSelector((state) => state.profilePage.profile);

  return (
    <main className={s.profileContent}>
      {!profile && <LoadingSpinner />}

      {profile && (
        <>
          <Info />
          <Posts />
        </>
      )}
    </main>
  );
};

export default ProfileHook;
