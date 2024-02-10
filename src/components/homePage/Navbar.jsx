import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { dummyData } from "data/dummyData";
import styled from "styled-components";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";

export default function Navbar() {
  const [login, setLogin] = useState(dummyData);
  const logInedUserEmail = login.userEmail;
  const logInedUserProfil = login.userProfileImage;
  console.log(login.userProfileImage);

  //카테고리 문자열 주고 핸들 서브밋 줘가지고 포스트스가 전체 데이터므로 얘내를 불러와서
  //p 태그로 클릭했을때 콜백함수를 불러왔을때 문자열로 된 카테고리를
  //포스트스 전체 데이터를 콜백함수로 받은 문자열이랑 전체 데이터 안에 있는 포스트 카테고리를 필터링해서
  //필터링해서 남은 데이터만 따로 변수를 지정해주고 그거를 컨텍스트 프로바이더 벨류로 지정해놔서
  //애초에 디테일 페이지를 필터링 된 데이터가 나오도록 만들어줌

  const { category, posts, setSelectCategory } = useContext(PostContext); // category 대신 selectCategory 사용

  const navigate = useNavigate();
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const filteredPosts = posts.filter((post) => post.postCategory === category); // category로 필터링
    setFilteredPosts(filteredPosts);
  }, [category, posts]);

  const handleCategory = (category) => {
    setSelectCategory(category);
    navigate("/detail");
  };

  return (
    <NavBar>
      <div>
        <CatchLoginLogout>
          {logInedUserEmail ? (
            <ShowUserInfoBox>
              <ProfileImg src={logInedUserProfil} alt="User Profile" />
              <UserEmailId>
                {logInedUserEmail}님<br />
                안녕하세요.
              </UserEmailId>
            </ShowUserInfoBox>
          ) : (
            "로그인이 필요합니다."
          )}
        </CatchLoginLogout>
        <ShowMenu>
          <p onClick={() => handleCategory("interview")}>면접후기</p>
          <p onClick={() => handleCategory("workInfo")}>취업정보</p>
          <p onClick={() => handleCategory("company")}>회사 정보 공유</p>
        </ShowMenu>
      </div>
      <JobOpening>
        <p>채용공고</p>
      </JobOpening>
    </NavBar>
  );
}

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;
  height: 100%;
  border-right: 1px solid grey;
  white-space: nowrap;

  @media (max-width: 1700px) {
    width: 20%;
  }
`;

const CatchLoginLogout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 13px;
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
  width: 2.5rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const UserEmailId = styled.p`
  @media (max-width: 1200px) {
    /* margin-left: -10px; */
    padding-top: 1rem;
    font-size: 7px;
  }
`;

const ShowMenu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  font-size: 15px;
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
