import React from "react";
import s from "./DialogueItem.module.css";
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
