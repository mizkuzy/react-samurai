import React from "react";
import s from "./DialogueItem.module.css";
import { A } from "hookrouter";

const DialogueItem = ({ name, urlId }) => {
  const path = `/dialogues/${urlId}`;

  return (
    <div className={s.item + " " + s.active}>
      {/* TODO link doesn't implemented */}
      <A href={path}>{name}</A>;
    </div>
  );
};

export default DialogueItem;
