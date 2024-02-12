import styled from "styled-components";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { useNavigate, useParams } from "react-router";

const PostResult = () => {
  const navigate = useNavigate();
  const { searchKeyword } = useParams();
  const { posts } = useContext(PostContext);

  const filteredData = posts.filter((item) => {
    return item.postTitle.includes(searchKeyword) || item.postText.includes(searchKeyword);
  });

  //구조분해할당 ?
  // const { userEmail, postTitle, postText, postImage, postId, postDate, userProfileImage, postCategory } = filteredData;
  // console.log(postId);

  // const formattedDate = new Date(postDate).toLocaleDateString("ko-KR", {
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric",
  //   hour: "numeric",
  //   minute: "numeric",
  //   second: "numeric"
  // });

  return (
    <>
      <ul>
        {filteredData.length > 0 ? (
          <ul>
            {filteredData.map((post) => (
              <StLi key={post.postId}>
                <StDivRow style={{ width: "500px", alignContent: "flex-start" }}>
                  <div>
                    <ProfileImg src={post.userProfileImage} />
                  </div>
                  <StDivRow>
                    <StDivColume>
                      <StDivRow style={{ gap: "10px" }}>
                        <span>{post.userEmail}</span>
                        <span>{post.postDate}</span>
                      </StDivRow>
                      <p>{post.postTitle}</p>
                      <p>{post.postText}</p>
                    </StDivColume>
                    <StImgContainer>
                      <StImg src={post.postImage} />
                    </StImgContainer>
                    <div>⭐️</div>
                  </StDivRow>
                </StDivRow>
                <StDivRow style={{ width: "500px", justifyContent: "space-between" }}>
                  <div>추천 👍 댓글 : 2</div>
                  <button
                    onClick={() => {
                      navigate(`/category/${post.postCategory}/${post.postId}`);
                    }}
                  >
                    상세보기
                  </button>
                </StDivRow>
              </StLi>
            ))}
          </ul>
        ) : (
          <p>내용이 없습니다.</p>
        )}
      </ul>
    </>
  );
};

export default PostResult;

const StLi = styled.li`
  border: 1px solid black;
  border-radius: 10px;

  margin: 10px;
  padding: 10px;

  list-style-type: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

const StDivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 5px;
`;
const StDivColume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StImgContainer = styled.div`
  width: 500px;

  overflow: hidden;
`;

const StImg = styled.img`
  width: 100%;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
