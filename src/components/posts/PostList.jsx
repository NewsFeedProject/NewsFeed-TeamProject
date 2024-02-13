import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import PostCards from "./PostCards";

function PostList() {
  const { posts } = useContext(PostContext);
  // const filteredPost = posts.filter((post) => post.postCategory === activePost);
  return (
    <>
      <ul>
        {posts.map((post) => {
          return <PostCards key={post.postId} post={post} />;
        })}
      </ul>
    </>
  );
}

export default PostList;
