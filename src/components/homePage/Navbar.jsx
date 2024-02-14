import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
  const [userMail, setUserMail] = useState("");
  const [userProfileImg, setUserProfileImg] = useState("");

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
              <ProfileImg src={userProfileImg} alt="User Profile" />
              <UserEmailId>
                {userMail}님<br />
                <StText> 안녕하세요.</StText>
              </UserEmailId>
            </ShowUserInfoBox>
          ) : (
            "로그인이 필요합니다."
          )}
        </CatchLoginLogout>
        <ShowMenu>
          <Link to="/interView">면접후기</Link>
          <Link to="/workInfo">취업정보</Link>
          <Link to="/companyInfo">회사 정보 공유</Link>
        </ShowMenu>
      </div>

      <JobOpening>
        <p>채용공고</p>
      </JobOpening>
    </NavBar>
  );
}

const NavBar = styled.nav`
  border-right: 1px solid grey;
  white-space: nowrap;
  left: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10%;
  background-color: #fff;
  grid-row: 2;
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

  @media (max-width: 1200px) {
    padding-left: 0.1rem;
    padding-top: 0.1rem;
  }
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

const ProfileImg = styled.img`
  width: 3rem;
  border-radius: 50%;

  @media (max-width: 1200px) {
    display: none;
    width: 2.5rem;
  }
`;

const UserEmailId = styled.p`
  font-size: 17px;
  @media (max-width: 1200px) {
    /* margin-left: -10px; */
    padding-top: 1rem;
    font-size: 10px;
  }
`;

const ShowMenu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  font-size: 24px;
  padding-left: 2rem;
  padding-top: 2rem;
  margin: 0;

  @media (max-width: 1200px) {
    padding-left: 1rem;
    padding-top: 1rem;
    font-size: 10px;
  }
`;

const JobOpening = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 20px;
  border-top: 1px solid grey;
  padding-bottom: 2rem;
  padding-top: 2rem;
  margin: 0;
`;
