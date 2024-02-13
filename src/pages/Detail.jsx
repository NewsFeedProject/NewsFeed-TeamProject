import { useNavigate } from "react-router";
import PostList from "../components/posts/PostList";
import styled from "styled-components";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { LoginContext } from "../context/LoginContext";
import Login from "components/layout/Login";

const StCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
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
function Detail({ category }) {
  const navigate = useNavigate();

  return (
    <main>
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
    </main>
  );
}

export default Detail;
