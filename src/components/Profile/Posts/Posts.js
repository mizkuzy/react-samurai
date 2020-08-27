import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = ({ postsData }) => (
  <div>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        {" "}
        <button>Add Post</button>
      </div>
    </div>
    <div className={s.posts}>
      {postsData.map((p) => (
        <Post text={p.text} likesNumber={p.likesNumber} />
      ))}
    </div>
  </div>
);
export default Posts;
