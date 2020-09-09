import profileReducer from "./profile-reducer";
import { addPost } from "../actionCreators";

describe("update post", function () {
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

  it("posts length should be increased by 1", () => {
    const action = addPost(postText);

    const newState = profileReducer(initState, action);

    expect(newState.posts.length).toEqual(postsLength + 1);
  });

  it("new post text should be equal to new added text", () => {
    const action = addPost(postText);

    const newState = profileReducer(initState, action);

    expect(newState.posts.length).toEqual(postsLength + 1);
    expect(newState.posts[newState.posts.length - 1].text).toEqual(postText);
    expect(newState.posts[newState.posts.length - 1].id).toEqual(nextPostId);
  });
});
