import React from "react";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import s from "./Dialogues.module.css";
import { Redirect } from "react-router-dom";

const Dialogues = ({
  dialogues,
  messages,
  newMessageText,
  sendMessage,
  updateNewMessageText,
  isAuth,
}) => {
  const onSendMessage = () => {
    sendMessage();
  };

  const onUpdateNewMessageText = (e) => {
    updateNewMessageText(e.target.value);
  };

  if (!isAuth) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div className={s.dialoguesContent}>
      <div className={s.dialogues}>
        {dialogues.map((dd) => (
          <DialogueItem name={dd.name} urlId={dd.id} />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map((md) => (
          <Message text={md.text} />
        ))}
        <div>
          <div>
            <textarea
              onChange={onUpdateNewMessageText}
              value={newMessageText}
              placeholder={"Enter a new message"}
            />
          </div>
          <div>
            <button onClick={onSendMessage}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogues;
