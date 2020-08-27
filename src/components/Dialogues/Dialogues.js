import React from "react";
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import s from "./Dialogues.module.css";

const Dialogues = ({ state }) => {
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
            <textarea></textarea>
          </div>
          <div>
            <button>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogues;
