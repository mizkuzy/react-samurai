import React from "react";
import s from "./Post.module.css";

const Post = ({ text, likesNumber }) => (
  <div className={s.item}>
    <img src="https://i.gifer.com/OZqj.gif" />
    <span> {text} </span>
    <div>
      <span>LIKE {likesNumber}</span>
    </div>
  </div>
);
export default Post;
