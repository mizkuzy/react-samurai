import { ADD_POST, UPDATE_NEW_POST_TEXT } from "./actionTypes";

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const onUpdateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text,
});
