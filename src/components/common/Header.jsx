import Button from "components/homePage/Button";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useContext, useState } from "react";
import { PostContext } from "context/PostContext";
import { LoginContext } from "context/LoginContext";

export default function Header() {
  const { userEmail } = useContext(LoginContext);
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const onClickHome = () => {
    navigate("/");
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchInfo = (e) => {
    e.preventDefault();
    if (!category || !searchTerm) {
      alert("카테고리 선택과 검색어를 모두 입력해주세요😬");
      return;
    }
    navigate(`/${category}?search=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };

  return (
    <HeaderStyle>
      <LogoImg src="/logo/logo.png" alt="Logo" onClick={onClickHome} />
      <SearchBox onSubmit={handleSearchInfo}>
        <SelectCategory onChange={handleCategory}>
          <option value="">선택해주세요.</option>
          <option value="interview">면접 후기</option>
          <option value="workInfo">취업 정보</option>
          <option value="companyInfo">회사 정보 공유</option>
        </SelectCategory>
        <SearchInput value={searchTerm} placeholder="검색어를 입력해 주세요." onChange={handleSearch} />
        <SearchButton>
          <FaMagnifyingGlass />
        </SearchButton>
      </SearchBox>
      <div>
        {!userEmail ? (
          <>
            <Link to="/login">
              <Button text="로그인" />
            </Link>
            <Link to="/signup">
              <Button text="회원가입" color="red" />
            </Link>
          </>
        ) : (
          <button>로그아웃</button>
        )}
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  height: 10rem;
  padding: 2rem;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9999;
`;

const LogoImg = styled.img`
  width: 10rem;
  cursor: pointer;
`;

const SearchBox = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  width: 25rem;
  height: 2.5rem;
  flex-grow: 1;
  border-radius: 2rem;
  padding: 1rem;
`;

const SearchButton = styled.button`
  border: none;
  background-color: transparent;

  position: absolute;
  right: 0.5rem;
  cursor: pointer;
`;

const SelectCategory = styled.select`
  border: transparent;
  margin-right: 1rem;
  font-size: 15px;
`;
