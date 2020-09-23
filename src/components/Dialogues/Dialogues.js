import React from "react";
import { useSelector } from "react-redux";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import s from "./Dialogues.module.css";
import NewMessageForm from "./NewMessageForm/NewMessageForm";

const Dialogues = () => {
  const dialogues = useSelector((state) => state.dialoguesPage.dialogues);
  const messages = useSelector((state) => state.dialoguesPage.messages);

    console.log("Dialogues Navbar")

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
        <NewMessageForm/>
      </div>
    </div>
  );
};

export default Dialogues;
