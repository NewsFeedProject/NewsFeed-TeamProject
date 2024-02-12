import PostResult from "../components/posts/PostResult";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const SearchResult = () => {
  const navigate = useNavigate();

  return (
    <>
      <StCategory>
        <WriteBtn
          onClick={() => {
            navigate("/detail/write");
          }}
        >
          글쓰기
        </WriteBtn>
      </StCategory>
      <PostResult />
    </>
  );
};

export default SearchResult;

const StCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
