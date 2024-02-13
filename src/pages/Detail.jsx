import { useNavigate } from "react-router";
import PostList from "../components/posts/PostList";
import styled from "styled-components";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

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
function Detail() {
  const { category, posts } = useContext(PostContext);

  const navigate = useNavigate();
  console.log(posts);

  return (
    <main>
      <StCategory>
        <StP>면접 후기</StP>
        <WriteBtn
          onClick={() => {
            navigate("/detail/write");
          }}
        >
          글쓰기
        </WriteBtn>
      </StCategory>
      <br />
      <PostList />
    </main>
  );
}

export default Detail;
