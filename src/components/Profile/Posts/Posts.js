import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = ({ posts, newPostText, addPost, updateNewPostText }) => {

  const onAddPost = () => {
    addPost();
  };

  const onNewPostTextChange = (e) => {
    updateNewPostText(e.target.value);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={newPostText}
            onChange={onNewPostTextChange}
            placeholder={"Type a post"}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {posts.map((p) => (
          <Post text={p.text} likesNumber={p.likesNumber} />
        ))}
      </div>
    </div>
  );
};
export default Posts;
