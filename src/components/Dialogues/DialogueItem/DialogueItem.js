import React from "react";
import s from "../Dialogues.module.css";
import { NavLink } from "react-router-dom";

const DialogueItem = ({ name, urlId }) => {
  const path = `/dialogues/${urlId}`;

  return (
    <div className={s.item + " " + s.active}>
      <NavLink to={path}>{name}</NavLink>;
    </div>
  );
};

export default DialogueItem;
