import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList,addInitialPosts } = useContext(PostListData);
  const handleGetPostsClick = () => {
    // console.log("Get Post Clicked")
    fetch('https://dummyjson.com/posts?limit=30&skip=10&select=title,body,tags,reactions')
      .then((res) => res.json())
      .then(data => {
        addInitialPosts(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
