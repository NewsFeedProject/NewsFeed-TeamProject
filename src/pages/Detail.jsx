import { useNavigate, useParams } from "react-router";
import PostList from "../components/posts/PostList";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
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
`;
function Detail() {
  const navigate = useNavigate();
  const { posts } = useContext(PostContext);
  const { postCategory } = useParams();

  console.log(postCategory);

  // const sortCategoryFunction = (category) => {
  //   switch (category) {
  //     case "interview":
  //       return <StP>면접 후기</StP>;
  //     case "workInfo":
  //       return <StP>취업 정보</StP>;
  //     case "company":
  //       return <StP>회사 정보 공유</StP>;
  //     default:
  //       return;
  //   }
  // };

  const [selectCategory, setSelectCategory] = useState("");
  useEffect(() => {
    switch (postCategory) {
      case "interview":
        return setSelectCategory("면접 후기");
      case "workInfo":
        return setSelectCategory("취업 정보");
      case "company":
        return setSelectCategory("회사 정보 공유");
      default:
        return;
    }
  }, [postCategory]);

  const filteredPostsCategory = posts.filter((post) => post.postCategory === postCategory);

  return (
    <main>
      <StCategory>
        <StP>{selectCategory}</StP>
        <WriteBtn
          onClick={() => {
            navigate("/detail/write");
          }}
        >
          글쓰기
        </WriteBtn>
      </StCategory>
      <br />
      <PostList posts={filteredPostsCategory} />
    </main>
  );
}

export default Detail;
