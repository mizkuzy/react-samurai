import profileReducer from "./profile-reducer";
import { addPost, deletePost } from "../actionCreators";

const posts = [
  { id: 1, text: "I like your app", likesNumber: 5 },
  { id: 2, text: "Never give up", likesNumber: 2 },
  { id: 3, text: "Vjuhhhh", likesNumber: 20 },
];
const postText = "TEST POST";
const postsLength = posts.length;
const nextPostId = postsLength + 1;
const initState = {
  posts,
  newPostText: postText,
  nextPostId,
};

describe("update post", function () {
  it("posts length should be increased by 1", () => {
    const action = addPost(postText);

    const newState = profileReducer(initState, action);

    expect(newState.posts.length).toEqual(postsLength + 1);
  });

  it("new post text should be equal to new added text", () => {
    const action = addPost(postText);

    const newState = profileReducer(initState, action);

    const addedPost = newState.posts[newState.posts.length - 1];
    expect(addedPost.text).toEqual(postText);
    expect(addedPost.id).toEqual(nextPostId);
  });
});

describe("delete post", () => {
  it("should decrement posts by one", () => {
    const idToDelete = 2;
    const action = deletePost(idToDelete);

    const newState = profileReducer(initState, action);

    expect(newState.posts.length).toEqual(postsLength - 1);
  });
});
