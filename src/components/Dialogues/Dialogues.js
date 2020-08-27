import React from "react";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import s from "./Dialogues.module.css";

const dialogueData = [
  {
    id: 1,
    name: "Lucy",
  },
  {
    id: 2,
    name: "Andre",
  },
  {
    id: 3,
    name: "Olya",
  },
  {
    id: 4,
    name: "Jack",
  },
];

const messagesData = [
  { id: 1, text: "hi" },
  { id: 2, text: "Let's go" },
  { id: 3, text: "We should all be feminists" },
];

const Dialogues = () => (
  <div className={s.dialogues_content}>
    <div className={s.dialogues}>
      {dialogueData.map((dd) => (
        <DialogueItem name={dd.name} urlId={dd.id} />
      ))}
    </div>
    <div className={s.messages}>
      {messagesData.map((md) => (
        <Message text={md.text} />
      ))}
    </div>
  </div>
);

export default Dialogues;
