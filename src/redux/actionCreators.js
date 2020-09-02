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

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const onUpdateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});

export const sendNewMessageActionCreator = () => ({
  type: SEND_NEW_MESSAGE,
});

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text,
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});
export const setTotalUsersCountAC = (number) => ({
  type: SET_TOTAL_USERS_COUNT,
  number,
});
export const updatePageNumberAC = (number) => ({
  type: UPDATE_PAGE_NUMBER,
  number,
});
export const followUserAC = (uid) => ({
  type: FOLLOW_USER,
  uid,
});

export const unfollowUserAC = (uid) => ({
  type: UNFOLLOW_USER,
  uid,
});

export const setIsFetchingAC = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});
