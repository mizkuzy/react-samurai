import React from "react";
import s from "./Post.module.css";

// TODO DO WE NEED TO GET RID OF props here??
const Post = ({ text, likesNumber, postNumber }) => (
  <div className={s.item}>
    <img alt="post" src="https://i.gifer.com/OZqj.gif" />
    <span>
      {" "}
      №{postNumber}: {text}
    </span>
    <div>
      <span>LIKE {likesNumber}</span>
    </div>
  </div>
);
export default Post;
