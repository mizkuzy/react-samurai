import {
  SEND_NEW_MESSAGE,
  ADD_POST,
  UPDATE_NEW_MESSAGE_TEXT,
  UPDATE_NEW_POST_TEXT,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_USERS,
  SET_TOTAL_USERS_COUNT,
  UPDATE_PAGE_NUMBER,
  SET_IS_FETCHING,
  SET_PROFILE,
  AUTH_USER,
  LOGOUT_USER,
  SET_STATUS,
} from "./actionTypes";

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const addPost = () => ({
  type: ADD_POST,
});

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});

export const sendMessage = () => ({
  type: SEND_NEW_MESSAGE,
});

export const updateNewMessageText = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setTotalUsersCount = (number) => ({
  type: SET_TOTAL_USERS_COUNT,
  number,
});
export const updatePageNumber = (number) => ({
  type: UPDATE_PAGE_NUMBER,
  number,
});
export const setFollowUser = (uid) => ({
  type: FOLLOW_USER,
  uid,
});

export const setUnfollowUser = (uid) => ({
  type: UNFOLLOW_USER,
  uid,
});

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

export const authenticateUser = (userId, email, login) => ({
  type: AUTH_USER,
  payload: {
    userId,
    email,
    login,
  },
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
