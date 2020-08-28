import { renderEntireTree } from "../render";

const posts = [
  { id: 1, text: "I like your app", likesNumber: 5 },
  { id: 2, text: "Never give up", likesNumber: 2 },
  { id: 3, text: "Vjuhhhh", likesNumber: 20 },
];
let nextPostId = 4;

const dialogues = [
  { id: 1, name: "Lucy" },
  { id: 2, name: "Andre" },
  { id: 3, name: "Olya" },
  { id: 4, name: "Jack" },
];

const messages = [
  { id: 1, text: "hi" },
  { id: 2, text: "Let's go" },
  { id: 3, text: "We should all be feminists" },
];

const state = {
  profile: {
    posts,
    newPostText: "",
  },
  dialogues: { dialogues, messages },
  sidebar: {},
};

export const addPost = () => {
  const newPost = {
    id: nextPostId,
    text: state.profile.newPostText,
  };
  nextPostId += 1;
  posts.push(newPost);
  state.profile.newPostText = "";

  renderEntireTree(state);
};

export const updateNewPostText = (text) => {
  state.profile.newPostText = text;
  renderEntireTree(state);
};

export default state;
