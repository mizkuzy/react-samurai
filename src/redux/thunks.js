import {
  setUserAuthentication,
  setFollowUser,
  setIsFetching,
  setProfile,
  setStatus,
  setTotalUsersCount,
  setUnfollowUser,
  setUsers,
  updatePageNumber,
  addPost as addPostAction,
  sendMessage as sendMessageAction,
  logoutUser,
  initializeApp as initApp,
  destroyApp,
} from "./actionCreators";
import { authApi, profileApi, usersApi } from "../api/api";

export const initializeApp = () => async (dispatch) => {
  await dispatch(authenticateUser());
  dispatch(initApp());
};

export const authenticateUser = () => async (dispatch) => {
  const response = await authApi.me();

  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(setUserAuthentication(id, email, login));
    dispatch(initApp());
  }
  // todo fail
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authApi.login(email, password, rememberMe);

  if (response.resultCode === 0) {
    dispatch(authenticateUser());
  }
};

export const logout = () => async (dispatch) => {
  const response = await authApi.logout();

  if (response.resultCode === 0) {
    dispatch(logoutUser());
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

export const sendMessage = (message) => (dispatch) => {
  dispatch(sendMessageAction(message));
};

export const addPost = (postText) => (dispatch) => {
  dispatch(addPostAction(postText));
};
