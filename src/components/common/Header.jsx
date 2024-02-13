import Button from "components/homePage/Button";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router";
import styled from "styled-components";

export default function Header() {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/");
  };
  const handleSearchInfo = () => {};
  return (
    <HeaderStyle>
      <LogoImg src="/logo/logo.png" alt="Logo" onClick={onClickHome} />
      <SearchBox onSubmit={handleSearchInfo}>
        <select>
          <option value="">선택해주세요.</option>
          <option value="">면접 후기</option>
          <option value="/detail">취업 정보</option>
          <option value="">회사 정보 공유</option>
        </select>
        <SearchInput name="searchInfo" placeholder="검색어를 입력해 주세요." />
        <SearchButton>
          <FaMagnifyingGlass />
        </SearchButton>
      </SearchBox>
      <div>
        <Link to="/login">
          <Button text="로그인" />
        </Link>
        <Link to="/signup">
          <Button text="회원가입" color="red" />
        </Link>
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

// const ButtonBox = styled.div`
//   padding: 2rem;
// `;
