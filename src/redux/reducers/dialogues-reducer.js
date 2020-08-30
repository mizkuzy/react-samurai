import { SEND_NEW_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from "../actionTypes";

const dialoguesReducer = (state, action) => {
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
