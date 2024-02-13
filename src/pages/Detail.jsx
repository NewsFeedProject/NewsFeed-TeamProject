import { useNavigate } from "react-router";
import PostList from "components/posts/PostList";
import styled from "styled-components";

const StCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;
  width: 100%;
`;

const StP = styled.p`
  font-size: larger;
`;

const WriteBtn = styled.button`
  border-color: transparent;
  background-color: transparent;
  color: red;
  font-size: larger;
  &:hover {
    transform: scale(1.2);
    font-weight: 600;
  }
`;

const Main = styled.main`
  padding: 200px 0 0 200px;
  width: 100%;
`;
function Detail({ category }) {
  const navigate = useNavigate();

  return (
    <Main>
      <StCategory>
        <StP>{category}</StP>
        <WriteBtn
          onClick={() => {
            navigate("/write");
          }}
        >
          글쓰기
        </WriteBtn>
      </StCategory>
      <br />
      <PostList category={category} />
    </Main>
  );
}

export default Detail;
