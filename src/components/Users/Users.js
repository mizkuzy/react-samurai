import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css";
import * as axios from "axios";
import { USERS_URL } from "../../util/api-urls";

const Users = ({ users, followUser, unfollowUser, setUsers }) => {
  if (users.length === 0) {
    console.log("url", USERS_URL);
    axios
      .get(USERS_URL)
      .then((response) => {
        console.log("USERS RESPONSE", response);
        setUsers(response.data.items);
      })
      .catch((e) => {
        console.log("USERS ERROR", e);
        const users = [
          {
            id: 1,
            followed: false,
            avaUrl: "",
            name: "Lucy Ru",
            status: "Happy",
            location: { city: "Saint Petersburg", country: "Russia" },
          },
          {
            id: 2,
            followed: true,
            name: "Andrew Ru",
            status: "Happy",
            location: { city: "Saint Petersburg", country: "Russia" },
          },
          {
            id: 3,
            followed: true,
            name: "Anna Mel",
            status: "ЖывЕ Беларусь!",
            location: { city: "Minsk", country: "Belarus" },
          },
        ];
        setUsers(users);
      });
  }

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
