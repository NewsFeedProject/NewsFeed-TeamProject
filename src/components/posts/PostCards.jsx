import styled from "styled-components";

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
`;

const StDivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  height: auto;
`;

function PostCards({ post }) {
  const { postId, userEmail, postTitle, postText, postImage, postDate, userProfileImage } = post;

  console.log(postDate);
  const formattedDate = new Date(postDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  return (
    <article>
      <StLi>
        <StDivRow>
          <div>
            <img src={userProfileImage} />
          </div>
          <StDivRow>
            <StDivColume>
              <StDivRow>
                <span>{userEmail}</span>
                <span>{formattedDate}</span>
              </StDivRow>

              <p>{postTitle}</p>
              <p>{postText}</p>
            </StDivColume>
            <StImgContainer>
              <StImg src={postImage} />
            </StImgContainer>

            <div>⭐️</div>
          </StDivRow>
        </StDivRow>
        <StDivRow>
          <div>추천 👍 댓글 : 2</div>
          <button>상세보기</button>
        </StDivRow>
      </StLi>
    </article>
  );
}

export default PostCards;
