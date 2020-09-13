import {
  ADD_POST,
  DELETE_POST,
  SET_PROFILE,
  SET_STATUS,
  UPDATE_NEW_POST_TEXT,
} from "../actionTypes";

const posts = [
  { id: 1, text: "I like your app", likesNumber: 5 },
  { id: 2, text: "Never give up", likesNumber: 2 },
  { id: 3, text: "Vjuhhhh", likesNumber: 20 },
];

const init = {
  posts,
  nextPostId: 4,
  profile: null,
  status: "",
};

const profileReducer = (state = init, action) => {
  switch (action.type) {
    case DELETE_POST:
      const idToDelete = action.pid;
      const newPosts = [...state.posts].filter((p) => p.id !== idToDelete);
      return {
        ...state,
        posts: newPosts,
      };
    case ADD_POST:
      const id = state.nextPostId;
      const newPost = {
        id: id,
        text: action.postText,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        nextPostId: state.nextPostId + 1,
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export default profileReducer;
