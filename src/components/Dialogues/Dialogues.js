import React from "react";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import s from "./Dialogues.module.css";
import {
  sendNewMessageActionCreator,
  onUpdateNewMessageTextActionCreator,
} from "../../redux/actionCreators";

const Dialogues = ({ state, dispatch }) => {
  const onSendNewMessage = () => {
    dispatch(sendNewMessageActionCreator());
  };

  const onUpdateNewMessageText = (e) => {
    dispatch(onUpdateNewMessageTextActionCreator(e.target.value));
  };

  return (
    <div className={s.dialogues_content}>
      <div className={s.dialogues}>
        {state.dialogues.map((dd) => (
          <DialogueItem name={dd.name} urlId={dd.id} />
        ))}
      </div>
      <div className={s.messages}>
        {state.messages.map((md) => (
          <Message text={md.text} />
        ))}
        <div>
          <div>
            <textarea
              onChange={onUpdateNewMessageText}
              value={state.newMessageText}
              placeholder={"Enter a new message"}
            />
          </div>
          <div>
            <button onClick={onSendNewMessage}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogues;
