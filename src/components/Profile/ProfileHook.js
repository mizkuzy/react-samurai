import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { processProfile } from "../../redux/thunks";
import useLoginRedirect from "../../hooks/useLoginRedirect";
import s from "./Profile.module.css";
import LoadingSpinner from "../Common/LoadingSpinner";
import Info from "./Info/Info";
import Posts from "./Posts/Posts";
import useCurrentProfileRedirect from "../../hooks/useCurrentProfileRedirect";

const ProfileHook = () => {
  console.log("profile render");
  useLoginRedirect();
  useCurrentProfileRedirect();

  const dispatch = useDispatch();

  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    if (userId) {
      console.log("useEffect uid");
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
