import styled from "styled-components";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore/lite";
import { db } from "../../data/firebase";

const PostDetail = () => {
  const { id } = useParams();
  const { formattedPostData } = useContext(PostContext);

  const { userUid } = useContext(PostContext);
  const navigate = useNavigate();

  const [postCard, setPostCard] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingContent, setEditingContent] = useState("");
  const [editingPhotoCard, setEditingPhotoCard] = useState("");
  const [editingTitleError, setEditingTitleError] = useState("");
  const [editingContentError, setEditingContentError] = useState("");

  console.log(userUid);

  useEffect(() => {
    const fetchPost = async () => {
      const docSnap = await getDoc(doc(db, "postInfo", id));
      setPostCard(docSnap.data());
    };
    fetchPost();
  }, []);

  useEffect(() => {
    if (isEditing) {
      setEditingPhotoCard(postCard.postImage);
    }
  }, [isEditing]);

  //삭제기능
  const handleDelete = async () => {
    try {
      if (window.confirm("정말로 삭제하시겠습니까?")) {
        alert("삭제 되었습니다.");
        const postRef = doc(db, "postInfo", id);
        console.log("postRef", postRef);
        await deleteDoc(postRef);
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        navigate("/");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  //취소버튼
  const onCencelButton = () => {
    setIsEditing(false);
    setEditingTitleError("");
    setEditingContentError("");
  };

  // 수정버튼
  const onEditDone = async () => {
    if (editingTitle === postCard.postTitle && editingContent === postCard.postText) {
      setEditingTitleError("수정사항이 없습니다.");
      setEditingContentError("수정사항이 없습니다.");
      return;
    } else {
      setEditingTitleError("");
      setEditingContentError("");
    }

    // 수정사항이 있을 때
    const answer = window.confirm("수정하시겠습니까?");
    if (!answer) return;
    alert("수정되었습니다.");

    try {
      const postRef = doc(db, "postInfo", id);
      await updateDoc(postRef, {
        postTitle: editingTitle,
        postText: editingContent,
        postImage: editingPhotoCard
      });

      setPosts((prev) => {
        return prev.map((element) => {
          if (element.id === id) {
            return {
              ...element,
              postTitle: editingTitle,
              postText: editingContent,
              postImage: editingPhotoCard
            };
          } else {
            return element;
          }
        });
      });
      setPostCard((prev) => ({
        ...prev,
        postTitle: editingTitle,
        postText: editingContent,
        postImage: editingPhotoCard
      }));

      setIsEditing(false);
      setEditingTitleError("");
      setEditingContentError("");
    } catch (error) {
      console.error("Error post: ", error);
    }
  };

  const handleChange = (e) => {
    const newFiles = e.target.files[0];
    const reader = new FileReader(newFiles);
    reader.readAsDataURL(newFiles);
    reader.onloadend = () => {
      setEditingPhotoCard(reader.result);
    };
  };
  // const hadlerEditAndHadler = () => {
  //   if (userUid === postCard.uid) {
  //     setIsEditing(true);
  //   } else {
  //     alert("해당 권한이 없습니다.");
  //   }
  // };
  if (!postCard) {
    return <div>로딩중....</div>;
  }

  return (
    <DetailWrapper>
      <DetailTiTle>
        <LinkGoHome
          onClick={() => {
            navigate("/");
          }}
        >
          뒤로가기
        </LinkGoHome>
      </DetailTiTle>
      <CardListWrapper>
        {isEditing ? (
          <CardListDetail>
            <UserInfoWrapper>
              <UserInfoAndButton>
                <UserInfoTitle>
                  <UserImage>
                    <img src={postCard.userProfileImage} alt={postCard.userProfileImage} />
                  </UserImage>
                  <UserNickName>{formattedPostData.userNickname}</UserNickName>
                  <Date>{formattedPostData.formattedDate}</Date>
                </UserInfoTitle>
                <EditAndDeleteWrapper>
                  <button onClick={onCencelButton}>취소</button>
                  <button onClick={onEditDone}>수정완료</button>
                </EditAndDeleteWrapper>
              </UserInfoAndButton>
              <EditUserTitle>
                <EditInput
                  type="text"
                  autoFocus
                  defaultValue={postCard.postTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <ErrorStyle>{editingTitleError}</ErrorStyle>
              </EditUserTitle>
            </UserInfoWrapper>
            <PostListDetail>
              <PostImageDetail>
                <input type="file" onChange={handleChange} />
              </PostImageDetail>
            </PostListDetail>
            <EditUserContent
              defaultValue={postCard.postText}
              onChange={(e) => setEditingContent(e.target.value)}
            ></EditUserContent>
            <ErrorStyle>{editingContentError}</ErrorStyle>
          </CardListDetail>
        ) : (
          <CardListDetail>
            <UserInfoWrapper>
              <UserInfoAndButton>
                <UserInfoTitle>
                  <UserImage>
                    <img src={postCard.userProfileImage} alt={postCard.userProfileImage} />
                  </UserImage>
                  <UserNickName>{formattedPostData.userNickname}</UserNickName>
                  <Date>{formattedPostData.formattedDate}</Date>
                </UserInfoTitle>
                <EditAndDeleteWrapper>
                  <button
                    onClick={() => {
                      setIsEditing(true);
                    }}
                  >
                    수정
                  </button>
                  <button onClick={handleDelete}>삭제</button>
                </EditAndDeleteWrapper>
              </UserInfoAndButton>
              <UserTitle>{postCard.postTitle}</UserTitle>
            </UserInfoWrapper>
            <PostListDetail>
              <PostImageDetail>
                {postCard.postImage ? (
                  <img src={postCard.postImage} alt={postCard.postImage} />
                ) : (
                  <img src={postCard.postImage} style={{ display: "none" }} alt="이미지 없음" />
                )}
              </PostImageDetail>
            </PostListDetail>
            <UserContent>{postCard.postText}</UserContent>
          </CardListDetail>
        )}
      </CardListWrapper>
    </DetailWrapper>
  );
};

export default PostDetail;

const DetailWrapper = styled.section`
  padding: 80px 60px;
  margin: 150px 0 0 20%;
`;

const DetailTiTle = styled.div`
  text-align: right;
  margin-right: 15px;
`;

const TiTleInfo = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const CardListWrapper = styled.ul`
  margin-top: 30px;
`;

const LinkGoHome = styled.p`
  cursor: pointer;
`;

const CardListDetail = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const UserInfoAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserInfoTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const UserImage = styled.div`
  width: 70px;
  height: 70px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const UserNickName = styled.h3`
  font-weight: 700;
  font-size: 24px;
`;

const Date = styled.time`
  color: #ccc;
  font-size: 14px;
`;

const EditAndDeleteWrapper = styled.div`
  & > button {
    border: none;
    background-color: transparent;
  }
  & > button:hover {
    color: red;
  }
`;

const UserTitle = styled.h3`
  margin-top: 10px;
  font-size: 20px;
`;

export const EditUserTitle = styled.h3`
  margin-top: 10px;
  font-size: 20px;
`;

const PostListDetail = styled.div`
  margin: 20px 0;
`;

const PostImageDetail = styled.div`
  width: 100%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const EditInput = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 5px;
`;

const UserContent = styled.div`
  line-height: 24px;
`;

const EditUserContent = styled.textarea`
  line-height: 24px;
  height: 300px;
`;

const ErrorStyle = styled.p`
  font-size: 14px;
  color: red;
  margin: 5px 0 0 3px;
`;

const Comment = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  border-radius: 10px;
  background-color: #eee;
  padding: 15px 10px;
  & > input {
    width: 95%;
    border: transparent;
    background-color: #eee;
    padding: 5px;
    outline: transparent;
  }

  & > button {
    white-space: nowrap;
  }
`;

const CommentList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentUserIdAndContent = styled.div`
  & > p {
    display: inline-block;
  }
`;

const UserCommend = styled.div`
  display: flex;
  margin: 40px 0 0;
  & > div {
    margin-right: 20px;
  }
`;

const Button = styled.button`
  border: transparent;
  background-color: transparent;
  &:hover {
    color: red;
  }
`;
