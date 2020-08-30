import { ADD_POST, UPDATE_NEW_POST_TEXT } from "../actionTypes";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const id = state.nextPostId;
      const newPost = {
        id: id,
        text: state.newPostText,
      };
      state.nextPostId = id + 1;
      state.newPostText = "";
      state.posts.push(newPost);

      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export default profileReducer;
