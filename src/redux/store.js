import profileReducer from "./reducers/profile-reducer";
import dialoguesReducer from "./reducers/dialogues-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

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
      nextPostId: 4,
    },
    dialogues: { dialogues, messages, newMessageText: "" },
    sidebar: {},
  },
  setSubscriber(subscriber) {
    this._subscriber = subscriber;
  },
  getState() {
    return this._state;
  },
  getNewProfilePostText() {
    return this._state.profile.newPostText;
  },

  addNewMessage() {
    this.setNewDialoguesMessageText("");

    this._subscriber(this);
  },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogues = dialoguesReducer(this._state.dialogues, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._subscriber(this);
  },
};

export default store;
