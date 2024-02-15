import { UsersContext } from "context/UsersContext";
import { PostContext } from "context/PostContext";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

function MyPostList() {
  const navigate = useNavigate();
  const { posts } = useContext(PostContext);
  const currentUser = useContext(UsersContext);

  if (!currentUser) {
    return;
  }

  const { uid, email } = currentUser;

  const filteredPost = posts.filter((post) => post.userEmail === email);
  return (
    <>
      <div>
        {filteredPost.length === 0 ? (
          <StNotice>{email} 님의 면접후기 / 취업정보를 남겨주세요!</StNotice>
        ) : (
          filteredPost.map((post) => {
            return (
              <StMyPost
                key={post.postId}
                onClick={() => {
                  navigate(`/postdetail/${post.id}`);
                }}
              >
                <StPostCategory>
                  {post.postCategory === "면접 후기"
                    ? "면접 후기"
                    : post.postCategory === "취업 정보"
                      ? "취업 정보"
                      : "회사 정보 공유"}
                </StPostCategory>
                <StP>{post.postTitle}</StP>
                <StP>{post.postText}</StP>
              </StMyPost>
            );
          })
        )}
      </div>
    </>
  );
}

export default MyPostList;

const StNotice = styled.p`
  margin: 30px;
`;

const StMyPost = styled.div`
  margin: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`;

const StPostCategory = styled.div`
  text-align: center;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 25px;
  background-color: #ddd;
`;

const StP = styled.p`
  margin: 10px 0;
  line-height: 24px;
  font-size: 16px;
`;
