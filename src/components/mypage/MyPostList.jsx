import { UsersContext } from "../../context/UsersContext";
import { PostContext } from "../../context/PostContext";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

function MyPostList() {
  const navigate = useNavigate();
  const params = useParams();
  const { posts } = useContext(PostContext);
  const { users } = useContext(UsersContext);
  const foundUser = users.find((user) => {
    return user.uid === params.uid;
  });
  const filteredPost = posts.filter((post) => post.userEmail === foundUser.userEmail);
  return (
    <>
      <div>
        {filteredPost.length === 0 ? (
          <StNotice>{foundUser.userName} 님의 면접후기 / 취업정보를 남겨주세요!</StNotice>
        ) : (
          filteredPost.map((post) => {
            return (
              <StMyPost
                key={post.postId}
                onClick={() => {
                  navigate(`/detail/${post.postId}`);
                }}
              >
                <StPostCategory>
                  {post.postCategory === "interview"
                    ? "면접후기"
                    : post.postCategory === "workInfo"
                    ? "취업정보"
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
  background-color: #d9d9d9;
`;

const StP = styled.p`
  margin: 10px 0;
  line-height: 24px;
  font-size: 16px;
`;
