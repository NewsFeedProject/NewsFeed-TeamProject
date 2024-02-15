import { useNavigate } from "react-router";
import PostList from "components/posts/PostList";
import styled from "styled-components";
import { useContext } from "react";
import { PostContext } from "context/PostContext";

const DetailTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  width: 800px;
`;

const StP = styled.p`
  font-size: larger;
  white-space: nowrap;
`;

const WriteBtn = styled.button`
  border-color: transparent;
  background-color: transparent;
  white-space: nowrap;
  color: #ff006e;
  font-size: larger;
  margin-top: 40px;
  transform: translateY(-19px);
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

const Main = styled.main`
  padding: 50px;

  /* padding: 200px 0 0 200px; */

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Detail({ category }) {
  const navigate = useNavigate();
  const { userUid } = useContext(PostContext);
  const writeClickBtnHadler = () => {
    userUid ? navigate("/write") : alert("로그인 후 글쓰기 이용이 가능합니다. ");
  };

  return (
    <Main>
      <DetailTop>
        <StP>{category}</StP>
        <WriteBtn onClick={writeClickBtnHadler}>글쓰기</WriteBtn>
      </DetailTop>
      <PostList category={category} />
    </Main>
  );
}

export default Detail;
