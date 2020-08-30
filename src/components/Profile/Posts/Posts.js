import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  onUpdateNewPostTextActionCreator,
} from "../../../redux/actionCreators";

const Posts = ({ posts, newPostText, dispatch }) => {
  const newPostElement = React.createRef();

  const addNewPost = () => {
    dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    dispatch(onUpdateNewPostTextActionCreator(newPostElement.current.value));
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
            placeholder={"Type a post"}
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
