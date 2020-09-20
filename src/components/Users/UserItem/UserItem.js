import React from "react";
import s from "./UserItem.module.css";
import { get as _get } from "lodash";
import defaultAvatarImage from "../../../assets/owly.png";
import { A } from "hookrouter";

const FollowToggleButton = ({ name, action }) => {
  return <button onClick={action}>{name}</button>;
};

const UserItem = ({ user, followUser, unfollowUser }) => {
  const onFollowUser = () => {
    followUser(user.id);
  };

  const onUnfollowUser = () => {
    unfollowUser(user.id);
  };

  const imageSource = _get(user, "photo.small", defaultAvatarImage);
  return (
    <>
      <div>
        <A href={`/profile/${user.id}`}>
          <img className={s.user_ava_container} src={imageSource} alt={"ava"} />
        </A>
        <div>
          {user.followed === true ? (
            <FollowToggleButton
              uid={user.id}
              name={"UNFOLLOW"}
              action={onUnfollowUser.bind(user)}
            />
          ) : (
            <FollowToggleButton
              uid={user.id}
              name={"FOLLOW"}
              action={onFollowUser.bind(user)}
            />
          )}
        </div>
      </div>
      <div className={s.user_info}>
        <div>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div>
          <div>{_get(user, "location.country", "DEFAULT COUNTRY")}</div>
          <div>{_get(user, "location.city", "DEFAULT CITY")}</div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
