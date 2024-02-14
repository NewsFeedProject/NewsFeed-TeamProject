import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "context/UsersContext";
import styled from "styled-components";
import MyPostList from "components/mypage/MyPostList";
import Profile from "components/mypage/Profile";

function Mypage() {
  const params = useParams();
  // const { uid, photoURL, email } = useContext(UsersContext);
  const currentUser = useContext(UsersContext);
  // const foundUser = usersContext.users.find((user) => {
  //   return user.uid === params.uid;
  // });

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

  if (!currentUser) {
    return <div>로딩중..!</div>;
  }

  // 로딩이 완료됐을 때
  const { uid, photoURL, email, displayName } = currentUser;

  return (
    <MypageArea>
      <StUser>
        {photoURL && <StImg src={photoURL} alt="프로필 이미지" />}
        <StUserNickName>
          <UserNickName>
            {email}/{displayName}
          </UserNickName>
          님
        </StUserNickName>
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
  margin: 50px auto;
  width: 70%;
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
  border: none;
  border-radius: 8px;
  padding: 5px 15px;
  color: ${(props) => (props.selected ? "#ff006e" : "#333")};
  text-align: center;

  &:hover {
    color: #ff006e;
  }
`;

const ContentArea = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 40px;
`;

const UserNickName = styled.span`
  font-weight: 700;
`;
