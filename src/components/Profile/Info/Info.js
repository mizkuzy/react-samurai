import React from "react";
import s from "./Info.module.css";
import { get as _get } from "lodash";
import { DEFAULT_PROFILE_AVATAR_SRC } from "../../../util/constants";

const Info = ({ profile }) => (
  <>
    <div>
      <img
        alt={"Profile Avatar"}
        className={s.img_profile}
        src={_get(profile, "photos.small", DEFAULT_PROFILE_AVATAR_SRC)}
      />
      <p>{profile.aboutMe}</p>
    </div>
  </>
);

export default Info;
