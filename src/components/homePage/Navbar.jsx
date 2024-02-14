import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dummyData } from "data/dummyData";
import styled from "styled-components";
import { LoginContext } from "context/LoginContext";
import { SingUpContext } from "context/SingUpContext";

export default function Navbar() {
  const { userEmail } = useContext(LoginContext);
  const { previewProfileImg } = useContext(SingUpContext);

  // const [login, setLogin] = useState(dummyData);
  // const logInedUserEmail = login.userEmail;
  // const logInedUserProfil = login.userProfileImage;

  const navigate = useNavigate();
  console.log("뭐불러와?", userEmail);
  console.log("사진뭐불러와?", previewProfileImg);

  return (
    <NavBar>
      <div>
        <CatchLoginLogout>
          {userEmail ? (
            <ShowUserInfoBox>
              <ProfileImg src={previewProfileImg} alt="User Profile" />
              <UserEmailId>
                {userEmail}님<br />
                안녕하세요.
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

//면접후기, 취업정보, 회사정보공유 Link태그로 바꾸기 기억하세용

const NavBar = styled.nav`
  width: 300px;
  border-right: 1px solid grey;
  white-space: nowrap;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 170px;
  background-color: #fff;

  @media (max-width: 1700px) {
    width: 20%;
  }
`;

const CatchLoginLogout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 17px;
  padding-left: 1rem;
  padding-top: 1rem;
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
  width: 5rem;

  @media (max-width: 1200px) {
    display: none;
    width: 2.5rem;
  }
`;

const UserEmailId = styled.p`
  font-size: 25px;
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
  font-size: 30px;
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
