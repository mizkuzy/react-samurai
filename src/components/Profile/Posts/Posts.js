import React from "react";
import { useSelector } from "react-redux";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import { addPost, updateNewPostText } from "../../../redux/actionCreators";

const Posts = () => {
  const posts = useSelector((state) => state.profilePage.posts);
  const newPostText = useSelector((state) => state.profilePage.newPostText);

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
