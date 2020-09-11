import React from "react";
import s from "./Info.module.css";
import { get as _get } from "lodash";
import { DEFAULT_PROFILE_AVATAR_SRC } from "../../../util/constants";
import Status from "../Status/Status";
import { useSelector } from "react-redux";
import { updateStatus } from "../../../redux/thunks";

const Info = () => {
  const profile = useSelector((state) => state.profilePage.profile);
  const status = useSelector((state) => state.profilePage.status);

  return (
    <>
      <div>
        <img
          alt={"Profile Avatar"}
          className={s.imgProfile}
          src={_get(profile, "photos.small", DEFAULT_PROFILE_AVATAR_SRC)}
        />
        <Status text={status} updateStatus={updateStatus} />
        <p>{profile.fullName}</p>
        <p>About me: {profile.aboutMe}</p>
      </div>
    </>
  );
};

export default Info;
