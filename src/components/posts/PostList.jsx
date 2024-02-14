import { useContext } from "react";
import { PostContext } from "context/PostContext";
import PostCards from "./PostCards";
import styled from "styled-components";

function PostList({ category }) {
  const { posts } = useContext(PostContext);

  const filteredPost = posts.filter((post) => {
    return post.postCategory === category;
  });

  return (
    <>
      <ul>
        {filteredPost.length > 0 ? (
          filteredPost.map((post) => {
            return <PostCards key={post.id} post={post} />;
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
  margin-left: 100px;
  margin-top: 100px;
`;
