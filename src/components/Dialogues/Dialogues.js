import React from "react";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import s from "./Dialogues.module.css";

const Dialogues = ({ dialogues, messages }) => (
  <div className={s.dialogues_content}>
    <div className={s.dialogues}>
      {dialogues.map((dd) => (
        <DialogueItem name={dd.name} urlId={dd.id} />
      ))}
    </div>
    <div className={s.messages}>
      {messages.map((md) => (
        <Message text={md.text} />
      ))}
    </div>
  </div>
);

export default Dialogues;
