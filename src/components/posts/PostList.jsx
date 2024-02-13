import { useContext } from "react";
import { PostContext } from "context/PostContext";
import PostCards from "./PostCards.jsx";

function PostList({ category }) {
  const { posts } = useContext(PostContext);
  const filteredPost = posts.filter((post) => {
    return post.postCategory === category;
  });

  return (
    <>
      <ul>
        {filteredPost.map((post) => {
          return <PostCards key={post.postId} post={post} />;
        })}
      </ul>
    </>
  );
}

export default PostList;
