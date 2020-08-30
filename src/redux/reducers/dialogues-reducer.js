import { SEND_NEW_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from "../actionTypes";

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

const init = {
  dialogues,
  messages,
  newMessageText: "",
};

const dialoguesReducer = (state = init, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    case SEND_NEW_MESSAGE:
      const text = state.newMessageText;
      state.messages.push({
        id: 1,
        text,
      });
      state.messages.push(text);
      state.newMessageText = "";

      return state;
    default:
      return state;
  }
};

export default dialoguesReducer;
