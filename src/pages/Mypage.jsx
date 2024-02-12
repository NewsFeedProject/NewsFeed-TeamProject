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
    <>
      <h3>Mypage</h3>
      <div>
        {foundUser.userProfileImage && (
          <img style={{ width: "50px", height: "50px" }} src={foundUser.userProfileImage} alt="프로필 이미지" />
        )}
        {foundUser.userEmail}님
      </div>
      <div>
        <button onClick={handlePostsClick}>내가 작성한 글</button>
        <button onClick={handleUserInfoClick}>개인정보변경</button>
      </div>
      <div style={{ border: "1px solid black", padding: "10px", margin: "10px 20px" }}>
        {showPosts && <MyPostList />}
        {showUserInfo && <Profile />}
      </div>
    </>
  );
}

export default Mypage;
