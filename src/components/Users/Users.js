import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css";

const Users = ({ users, followUser, unfollowUser }) => {
  return (
    <div className={s.users_content}>
      <h3>Users</h3>
      <div className={s.content}>
        {users.map((u) => (
          <UserItem
            key={u.id}
            user={u}
            followUser={followUser}
            unfollowUser={unfollowUser}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
