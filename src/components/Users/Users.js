import React, { useEffect } from "react";
import s from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import LoadingSpinner from "../Common/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  followUser,
  getUsers,
  unfollowUser,
} from "../../redux/thunks";

const Paging = () => {
  const dispatch = useDispatch();

  const onChangePage = (pageNumber) => {
    dispatch(changePage(pageSize, pageNumber));
  };

  const totalElementsNumber = useSelector(
    (state) => state.usersPage.totalUsersCount
  );
  const pageSize = useSelector((state) => state.usersPage.pageSize);
  const pageNumber = useSelector((state) => state.usersPage.pageNumber);

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

const Users = () => {
  const pageSize = useSelector((state) => state.usersPage.pageSize);
  const pageNumber = useSelector((state) => state.usersPage.pageNumber);
  const users = useSelector((state) => state.usersPage.users);

  const isFetching = useSelector((state) => state.usersPage.isFetching);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(pageSize, pageNumber));
  }, []);

  console.log("render Users");
  return (
    <>
      {isFetching && <LoadingSpinner />}
      <div className={s.usersContent}>
        <Paging />
        <div className={s.content}>
          {users.map((u) => (
            <UserItem
              key={u.id}
              user={u}
              followUser={dispatch(followUser)}
              unfollowUser={dispatch(unfollowUser)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
