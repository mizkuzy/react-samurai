import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get as _get } from "lodash";
import { processProfile } from "../../redux/thunks";
import useLoginRedirect from "../../hooks/useLoginRedirect";
import s from "./Profile.module.css";
import LoadingSpinner from "../Common/LoadingSpinner";
import Info from "./Info/Info";
import { useParams } from "react-router-dom";
import Posts from "./Posts/Posts";

const ProfileHook = () => {
  console.log("profile");
  // useLoginRedirect();

  const params = useParams();
  const userId = params.userId;

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
