import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import PostCards from "./PostCards";

function PostList({ posts }) {
  // const { posts } = useContext(PostContext);

  return (
    <>
      <ul>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <PostCards key={post.postId} post={post} />
            ))}
          </ul>
        ) : (
          <p>내용이 없습니다.</p>
        )}
      </ul>
    </>
  );
}

export default PostList;
