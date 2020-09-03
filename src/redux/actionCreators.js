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
} from "./actionTypes";

export const addPost = () => ({
  type: ADD_POST,
});

export const onUpdateNewPostText = (text) => ({
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
export const followUser = (uid) => ({
  type: FOLLOW_USER,
  uid,
});

export const unfollowUser = (uid) => ({
  type: UNFOLLOW_USER,
  uid,
});

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});
