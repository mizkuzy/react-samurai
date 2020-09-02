import React from "react";
import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";

const Paging = ({
  totalElementsNumber,
  pageSize,
  pageNumber,
  onChangePage,
}) => {
  const pagesCount = Math.ceil(totalElementsNumber / pageSize);

  return [...Array(pagesCount).keys()].map((p) => {
    const normalisedPageNumber = p + 1;
    return (
      <span
        key={p}
        onClick={() => {
            debugger
          onChangePage(normalisedPageNumber);
        }}
        className={
          (pageNumber === normalisedPageNumber && s.selected_page) || ""
        }
      >
        {normalisedPageNumber}{" "}
      </span>
    );
  });
};

const Users = ({
  totalUsersCount,
  pageSize,
  pageNumber,
  onChangePage,
  users,
  followUser,
  unfollowUser,
}) => {
  return (
    <div className={s.users_content}>
      <h3>Users</h3>
      <Paging
        totalElementsNumber={totalUsersCount}
        pageSize={pageSize}
        pageNumber={pageNumber}
        onChangePage={onChangePage}
      />
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
