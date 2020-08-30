import {
  SEND_NEW_MESSAGE,
  ADD_POST,
  UPDATE_NEW_MESSAGE_TEXT,
  UPDATE_NEW_POST_TEXT,
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

export const onUpdateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text,
});
