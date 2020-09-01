import React from "react";
import s from "./UserItem.module.css";

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

  return (
    <>
      <div>
        <img
          className={s.user_ava_container}
          src={
            "https://images.pexels.com/photos/1013335/pexels-photo-1013335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          alt={"ava"}
        />
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
          <div>{user.fullName}</div>
          <div>{user.status}</div>
        </div>
        <div>
          <div>{user.location.country}</div>
          <div>{user.location.city}</div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
