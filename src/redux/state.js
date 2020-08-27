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
  },
  dialogues: { dialogues, messages },
  sidebar: {},
};

export const addPost = (text) => {
  console.log(state);
  const newPost = {
    id: nextPostId,
    text,
  };
  nextPostId += 1;
  posts.push(newPost);

  renderEntireTree(state);
};

export default state;
