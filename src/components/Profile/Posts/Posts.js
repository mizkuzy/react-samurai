import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = ({ posts, newPostText, dispatch }) => {
  const newPostElement = React.createRef();

  const addNewPost = () => {
    dispatch({
      type: "ADD-POST",
    });
  };

  const onPostChange = () => {
    dispatch({
      type: "UPDATE-NEW-POST-TEXT",
      text: newPostElement.current.value,
    });
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={newPostText}
            onChange={onPostChange}
            ref={newPostElement}
          />
        </div>
        <div>
          <button onClick={addNewPost}>Add Post</button>
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
