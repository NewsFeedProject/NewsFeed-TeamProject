import Button from "components/homePage/Button";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();

  /* 검색기능 추가 */
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKeyword}`);
  };

  return (
    <HeaderStyle>
      <LogoImg
        onClick={() => {
          navigate("/");
        }}
        src="/logo/logo.png"
        alt="Logo"
      />
      <SearchBox type="submit" onSubmit={handleSubmit}>
        <SearchInput
          name="searchInfo"
          placeholder="검색어를 입력해 주세요."
          value={searchKeyword}
          onChange={handleSearch}
        />
        <SearchButton>
          <FaMagnifyingGlass />
        </SearchButton>
      </SearchBox>
      <div>
        <Button text="로그인" />
        <Button text="회원가입" color="red" />
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

const StCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
`;

const WriteBtn = styled.button`
  border-color: transparent;
  background-color: transparent;
  color: red;
  font-size: larger;
`;
