import React from "react";
import {
  sendNewMessageActionCreator,
  onUpdateNewMessageTextActionCreator,
} from "../../redux/actionCreators";
import Dialogues from "./Dialogues";

const DialoguesContainer = ({ store }) => {
  const state = store.getState().dialogues;
  const dispatch = store.dispatch;

  const sendMessage = () => {
    dispatch(sendNewMessageActionCreator());
  };

  const updateNewMessageText = (text) => {
    dispatch(onUpdateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogues
      dialogues={state.dialogues}
      messages={state.messages}
      newMessageText={state.newMessageText}
      sendMessage={sendMessage}
      updateNewMessageText={updateNewMessageText}
    />
  );
};

export default DialoguesContainer;
