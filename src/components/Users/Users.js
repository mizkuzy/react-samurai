import React from "react";
import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import LoadingSpinner from "../Common/LoadingSpinner";

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
          onChangePage(normalisedPageNumber);
        }}
        className={
          (pageNumber === normalisedPageNumber && s.selectedPage) || ""
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
  isFetching,
}) => {
  return (
    <>
      {isFetching && <LoadingSpinner />}
      <div className={s.usersContent}>
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
    </>
  );
};

export default Users;
