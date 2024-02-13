import { useState } from "react";
import styled from "styled-components";
import { db } from "data/firebase";
import { addDoc, collection, getDocs, query } from "firebase/firestore";

const ListWrapper = styled.article`
  display: flex;
  justify-content: center;
`;
const List = styled.li`
  width: 800px;
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
const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 5px;

  width: auto;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 500px;
  margin: 5px;
  padding: 5px;

  width: auto;
`;

const StDivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 5px;
`;

const ContentContaniner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
`;
const NickName = styled.div`
  gap: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StImgContainer = styled.div`
  width: 200px;

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

const Content = styled.p`
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin: 10px;
`;

const Title = styled.p`
  font-size: larger;
  margin: 10px;
`;

const ClickBtn = styled.button`
  border-color: transparent;
  background-color: lightgray;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    transition: 0.5s;
  }
`;

function PostCards({ post }) {
  const { userEmail, postTitle, postText, postImage, postDate, userProfileImage, previewImg } = post;

  const splitUserEmail = userEmail.split("@")[0];
  const userNickname = splitUserEmail.slice(0, 3) + "*".repeat(splitUserEmail.length - 3);

  const formattedDate = new Date(postDate).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  /* 추천 누르기 기능 */

  const [liked, setLiked] = useState(false);
  const [likedNumber, setLikedNumber] = useState(0);

  const likeClickHandler = () => {
    if (liked) {
      setLikedNumber(likedNumber - 1);
    } else {
      setLikedNumber(likedNumber + 1);
    }
    setLiked(!liked);
  };

  return (
    <ListWrapper>
      <List>
        <TopContainer>
          <div>
            <ProfileImg src={userProfileImage} />
          </div>
          <StDivRow>
            <ContentContaniner>
              <NickName>
                <span>{userNickname}</span>
                <span>{formattedDate}</span>
              </NickName>
              <Title>{postTitle}</Title>
              <Content>{postText}</Content>
            </ContentContaniner>
            <StImgContainer>
              <StImg src={postImage} />
            </StImgContainer>
          </StDivRow>
        </TopContainer>
        <BottomContainer>
          <div>
            추천
            <span onClick={likeClickHandler} style={{ cursor: "pointer" }}>
              👍
            </span>
            {likedNumber}
            댓글 : 2
          </div>
          <ClickBtn>상세보기</ClickBtn>
        </BottomContainer>
      </List>
    </ListWrapper>
  );
}

export default PostCards;
