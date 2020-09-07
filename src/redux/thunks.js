import {
  authenticateUser,
  setFollowUser,
  setIsFetching,
  setProfile,
  setTotalUsersCount,
  setUnfollowUser,
  setUsers,
  updatePageNumber,
} from "./actionCreators";
import { authApi, profileApi, usersApi } from "../api/api";

export const authenticate = () => async (dispatch) => {
  const response = await authApi.me();
  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(authenticateUser(id, email, login));
  }
};

export const processProfile = (uid) => async (dispatch) => {
  const profile = await profileApi.getProfile(uid);
  dispatch(setProfile(profile));
};

export const getUsers = (pageSize, pageNumber) => (dispatch) => {
  dispatch(setIsFetching(true));
  usersApi.getUsers(pageSize, pageNumber).then((response) => {
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(setUsers(response.items));
    dispatch(setIsFetching(false));
  });
};

export const changePage = (pageSize, pageNumber) => (dispatch) => {
  dispatch(getUsers(pageSize, pageNumber));
  dispatch(updatePageNumber(pageNumber));
};

export const followUser = (uid) => (dispatch) => {
  usersApi.followUser(uid).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setFollowUser(uid));
    } else {
      throw new Error(`Server Error. User ${uid} was not followed.`);
    }
  });
};

export const unfollowUser = (uid) => (dispatch) => {
  usersApi.unfollowUser(uid).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setUnfollowUser(uid));
    } else {
      throw new Error(`Server Error. User ${uid} was not unfollowed.`);
    }
  });
};
