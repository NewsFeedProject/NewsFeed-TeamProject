import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";
import styled from "styled-components";
import MyPostList from "../components/mypage/MyPostList";
import Profile from "../components/mypage/Profile";

function Mypage() {
  const params = useParams();
  const usersContext = useContext(UsersContext);
  const foundUser = usersContext.users.find((user) => {
    return user.uid === params.uid;
  });

  const [showPosts, setShowPosts] = useState(true);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handlePostsClick = () => {
    setShowPosts(true);
    setShowUserInfo(false);
  };

  const handleUserInfoClick = () => {
    setShowPosts(false);
    setShowUserInfo(true);
  };

  return (
    <MypageArea>
      <StUser>
        {foundUser.userProfileImage && <StImg src={foundUser.userProfileImage} alt="프로필 이미지" />}
        <StUserNickName>{foundUser.userEmail}님</StUserNickName>
      </StUser>
      <div>
        <StMypageBtn selected={showPosts} onClick={handlePostsClick}>
          내가 작성한 글
        </StMypageBtn>
        <StMypageBtn selected={showUserInfo} onClick={handleUserInfoClick}>
          개인정보변경
        </StMypageBtn>
      </div>
      <ContentArea>
        {showPosts && <MyPostList />}
        {showUserInfo && <Profile />}
      </ContentArea>
    </MypageArea>
  );
}

export default Mypage;
const MypageArea = styled.div`
  margin: 50px;
`;

const StUser = styled.div`
  margin-bottom: 25px;
  display: flex;
`;

const StImg = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const StUserNickName = styled.p`
  margin: 15px 0 0 25px;
`;

const StMypageBtn = styled.button`
  margin: 0 15px 25px 0;
  width: 150px;
  height: 30px;
  border: none;
  border-radius: 10px;
  color: ${(props) => (props.selected ? "red" : "#333")};
  text-align: center;

  &:hover {
    color: red;
  }
`;

const ContentArea = styled.div`
  border: 1px solid black;
  border-radius: 20px;
`;