import {
  authenticateUser,
  setFollowUser,
  setIsFetching,
  setProfile,
  setStatus,
  setTotalUsersCount,
  setUnfollowUser,
  setUsers,
  updatePageNumber,
} from "./actionCreators";
import { authApi, profileApi, usersApi } from "../api/api";

export const getAuthUserData = () => async (dispatch) => {
  const response = await authApi.me();
  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(authenticateUser(id, email, login));
  }
};

export const processProfile = (uid) => async (dispatch) => {
  const profile = await profileApi.getProfile(uid);
  dispatch(setProfile(profile));

  const status = await profileApi.getStatus(uid);
  dispatch(setStatus(status));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileApi.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(setStatus(status));
  } else {
    alert("Status is not updated. Please reload page and try again");
  }
};

export const getUsers = (pageSize, pageNumber) => async (dispatch) => {
  dispatch(setIsFetching(true));

  const response = await usersApi.getUsers(pageSize, pageNumber);

  dispatch(setTotalUsersCount(response.totalCount));
  dispatch(setUsers(response.items));
  dispatch(setIsFetching(false));
};

export const changePage = (pageSize, pageNumber) => (dispatch) => {
  dispatch(getUsers(pageSize, pageNumber));
  dispatch(updatePageNumber(pageNumber));
};

export const followUser = (uid) => async (dispatch) => {
  const response = await usersApi.followUser(uid);

  if (response.resultCode === 0) {
    dispatch(setFollowUser(uid));
  } else {
    throw new Error(`Server Error. User ${uid} was not followed.`);
  }
};

export const unfollowUser = (uid) => async (dispatch) => {
  const response = await usersApi.unfollowUser(uid);

  if (response.resultCode === 0) {
    dispatch(setUnfollowUser(uid));
  } else {
    throw new Error(`Server Error. User ${uid} was not unfollowed.`);
  }
};
