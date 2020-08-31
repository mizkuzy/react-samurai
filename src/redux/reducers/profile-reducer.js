import { ADD_POST, UPDATE_NEW_POST_TEXT } from "../actionTypes";

const posts = [
  { id: 1, text: "I like your app", likesNumber: 5 },
  { id: 2, text: "Never give up", likesNumber: 2 },
  { id: 3, text: "Vjuhhhh", likesNumber: 20 },
];

const init = {
  posts,
  newPostText: "",
  nextPostId: 4,
};

const profileReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_POST:
      const id = state.nextPostId;
      const newPost = {
        id: id,
        text: state.newPostText,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        nextPostId: state.nextPostId + 1,
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };
    default:
      return state;
  }
};

export default profileReducer;
