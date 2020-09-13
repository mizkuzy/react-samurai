import React from "react";
import { useSelector } from "react-redux";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import s from "./Dialogues.module.css";

const Dialogues = () => {
  const dialogues = useSelector((state) => state.dialoguesPage.dialogues);
  const messages = useSelector((state) => state.dialoguesPage.messages);

  return (
    <div className={s.dialoguesContent}>
      <div className={s.dialogues}>
        {dialogues.map((dd) => (
          <DialogueItem key={dd.id} name={dd.name} urlId={dd.id} />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map((md) => (
          <Message key={md.id} text={md.text} />
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
