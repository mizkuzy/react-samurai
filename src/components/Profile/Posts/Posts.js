import React from "react";
import { useSelector } from "react-redux";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import NewPostForm from "./NewPostForm/NewPostForm";

const Posts = () => {
  const posts = useSelector((state) => state.profilePage.posts);

  return (
    <div>
      <h3>My posts</h3>
      <NewPostForm />
      <div className={s.posts}>
        {posts.map((p) => (
          <Post
            key={p.id}
            text={p.text}
            likesNumber={p.likesNumber}
            postNumber={p.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Posts;
