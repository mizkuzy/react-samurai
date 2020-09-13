import { SEND_NEW_MESSAGE } from "../actionTypes";

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
  nextMessageId: messages.length + 1,
};

const dialoguesReducer = (state = init, action) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE:
      const text = action.message;
      const newMessage = {
        id: state.nextMessageId,
        text,
      };

      return {
        ...state,
        nextMessageId: state.nextMessageId + 1,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export default dialoguesReducer;
