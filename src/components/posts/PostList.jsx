import { useContext } from "react";
import { PostContext } from "context/PostContext";
import PostCards from "./PostCards";
import styled from "styled-components";

function PostList({ category }) {
  const { posts } = useContext(PostContext);
  const filteredPost = posts.filter((post) => {
    return post.postCategory === category;
  });
  // console.log(filteredPost);
  return (
    <>
      <ul>
        {filteredPost.length > 0 ? (
          filteredPost.map((post) => {
            return <PostCards key={post.postId} post={post} />;
          })
        ) : (
          <NotDetail>내용이 없습니다.</NotDetail>
        )}
      </ul>
    </>
  );
}

export default PostList;

const NotDetail = styled.li`
  padding: 50px;
`;
