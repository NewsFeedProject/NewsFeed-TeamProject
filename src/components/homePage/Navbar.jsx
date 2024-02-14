import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SingUpContext } from "context/SingUpContext";

export default function Navbar() {
  const [userMail, setUserMail] = useState("");
  const [userProfileImg, setUserProfileImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const { imgUrl: signUpImgUrl } = useContext(SingUpContext);

  useEffect(() => {
    // 로그인 정보 가져오기
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserMail(user.email);
        setUserProfileImg(user.photoURL);
        setImgUrl(user.photoURL || signUpImgUrl);
      } else {
        setUserMail(null);
        setUserProfileImg(null);
        setImgUrl(signUpImgUrl);
      }
    });
  }, [signUpImgUrl]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserMail(user.email);
      } else {
        setUserMail(null);
      }
    });
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserProfileImg(user.photoURL);
      } else {
        setUserProfileImg(null);
      }
    });
  }, []);

  return (
    <NavBar>
      <div>
        <CatchLoginLogout>
          {userMail ? (
            <ShowUserInfoBox>
              <ProfileImg src={userProfileImg || imgUrl} alt="User Profile" />
              <UserEmailId>
                {userMail}님<br />
                <StText> 안녕하세요.</StText>
              </UserEmailId>
            </ShowUserInfoBox>
          ) : (
            <UserLogin>로그인이 필요합니다.</UserLogin>
          )}
        </CatchLoginLogout>
        <ShowMenu>
          <Link to="/interView">면접후기</Link>
          <Link to="/workInfo">취업정보</Link>
          <Link to="/companyInfo">회사 정보 공유</Link>
        </ShowMenu>
      </div>
      {/* <JobOpening>
        <p>채용공고</p>
      </JobOpening> */}
    </NavBar>
  );
}

const NavBar = styled.nav`
  border-right: 1px solid grey;
  white-space: nowrap;
  left: 0;
  bottom: 0;
  height: 100vh;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StText = styled.text`
  margin-top: 0.5rem;
`;

const CatchLoginLogout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 17px;
  padding-left: 1rem;
  margin: 0;
`;

const ShowUserInfoBox = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 13px;
  padding: 1rem;
  margin: 0;
`;

const UserLogin = styled.p`
  padding: 20px 0px 10px 10px;
`;

const ProfileImg = styled.img`
  width: 3rem;
  border-radius: 50%;
`;

const UserEmailId = styled.p`
  font-size: 16px;
  padding: 20px 0 0;
`;

const ShowMenu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  font-size: 20px;
  padding: 40px 40px 0 40px;
`;

// const JobOpening = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
//   font-size: 20px;
//   border-top: 1px solid grey;
//   padding-bottom: 2rem;
//   padding-top: 2rem;
//   margin: 0;
// `;
