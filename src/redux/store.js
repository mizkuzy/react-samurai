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
    dialogues: { dialogues, messages },
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
    this.getSubscriber(this);
    this._subscriber(this);
  },

  dispatch(action) {
    switch (action.type) {
      case "ADD-POST":
        this.addPost();
        break;
      case "UPDATE-NEW-POST-TEXT":
        this.updateNewPostText(action.text);
        break;
      default:
        throw new Error("No such action type");
    }
  },
};

export default store;

window.store = store;
