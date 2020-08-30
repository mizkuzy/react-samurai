import {
  SEND_NEW_MESSAGE,
  ADD_POST,
  UPDATE_NEW_MESSAGE_TEXT,
  UPDATE_NEW_POST_TEXT,
} from "./actionTypes";

const posts = [
  { id: 1, text: "I like your app", likesNumber: 5 },
  { id: 2, text: "Never give up", likesNumber: 2 },
  { id: 3, text: "Vjuhhhh", likesNumber: 20 },
];
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

const store = {
  _subscriber() {
    console.log("There is no any subscriber yet");
  },
  _state: {
    profile: {
      posts,
      newPostText: "",
    },
    dialogues: { dialogues, messages, newMessageText: "" },
    sidebar: {},
  },
  _nextPostId: 4,
  setSubscriber(subscriber) {
    this._subscriber = subscriber;
  },
  getSubscriber() {
    return this._subscriber;
  },
  getState() {
    return this._state;
  },
  setNextPostId(id) {
    this._nextPostId = id;
  },
  setNewProfilePostText(text) {
    this._state.profile.newPostText = text;
  },
  getNewProfilePostText() {
    return this._state.profile.newPostText;
  },
  setNewDialoguesMessageText(text) {
    this._state.dialogues.newMessageText = text;
  },
  getNewDialoguesMessageText() {
    return this._state.dialogues.newMessageText;
  },
  addPost() {
    const newPost = {
      id: this._nextPostId,
      text: this.getNewProfilePostText(),
    };
    this.setNextPostId(this._nextPostId + 1);
    this._state.profile.posts.push(newPost);

    this.setNewProfilePostText("");

    this._subscriber(this);
  },
  updateNewPostText(text) {
    this.setNewProfilePostText(text);
    this._subscriber(this);
  },
  updateNewMessageText(text) {
    this.setNewDialoguesMessageText(text);
    this._subscriber(this);
  },
  addNewMessage() {
    const text = this.getNewDialoguesMessageText();
    this._state.dialogues.messages.push({
      id: 1,
      text,
    });
    this._state.dialogues.messages.push(text);

    this.setNewDialoguesMessageText("");

    this._subscriber(this);
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        this.addPost();
        break;
      case UPDATE_NEW_POST_TEXT:
        this.updateNewPostText(action.text);
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this.updateNewMessageText(action.text);
        break;
      case SEND_NEW_MESSAGE:
        this.addNewMessage();
        break;
      default:
        throw new Error("No such action type");
    }
  },
};

export default store;

window.store = store;
