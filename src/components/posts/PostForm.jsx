import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PostContext } from "../../context/PostContext";
import { SingUpContext } from "context/SingUpContext";
import { LoginContext } from "context/LoginContext";

import { PostContext } from "context/PostContext";

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;

  border: 1px solid black;
  border-radius: 10px;
  gap: 10px;

  padding: 50px;
  width: 400px;

  & input,
  textarea {
    padding: 5px;
    border-radius: 10px;
  }
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StBtn = styled.button`
  width: 100px;
`;
const UploadImg = styled.img`
  width: 300px;
  padding: 10px;
`;

function PostForm() {
  const navigate = useNavigate();
  const { addPostSubmit, category, postImg, setPostImg, previewImg, setPreviewImg } = useContext(PostContext);

  const { previewProfileImg } = useContext(SingUpContext);
  const { userEmail } = useContext(LoginContext);

  /* 이미지 파일 업로드하기 */

  const fileUploadHandler = (e) => {
    const file = e.target.files[0];
    setPostImg([...postImg, file]);

    const fileRead = new FileReader();
    fileRead.onload = () => {
      setPreviewImg(fileRead.result);
    };
    fileRead.readAsDataURL(file);
  };

  /* 이미지 파일 삭제하기 */
  const deleteImgFileHandler = () => {
    setPostImg([]);
    setPreviewImg(null);
  };

  /* 카테고리 선택하기 */
  const [selectCategory, setSelectCategory] = useState("면접 후기");
  const onSelectHandler = (event) => {
    setSelectCategory(event.target.value);
  };

  /* 포스트 글 추가하기 */

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const addTextHandler = (event) => {
    setText(event.target.value);
  };

  const addPostBtnClickHandler = (event) => {
    event.preventDefault();

    // 빈 태그 입력 막기
    if (!title.trim() && text.trim()) {
      alert("제목을 입력해주세요.");
      return;
    } else if (title.trim() && !text.trim()) {
      alert("내용을 입력해주세요");
      return;
    } else if (!title.trim() && !text.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    // 현재 날짜 불러오기
    const date = Date.now();

    // 카드 추가하기
    addPostSubmit({
      userEmail: userEmail,
      postTitle: title,
      postText: text,
      postImage: previewImg,
      postId: crypto.randomUUID(),
      postDate: date,
      userProfileImage: previewProfileImg,
      postCategory: selectCategory
    });

    setTitle("");
    setText("");
    setPostImg([]);
    setPreviewImg(null);
    alert("글이 등록되었습니다.");
    navigate(-1);
  };

  // 포스트 글쓰기 취소하기
  const cancelBtnClickHandler = () => {
    alert("글쓰기를 취소합니다.");
    navigate(-1);
  };

  return (
    <>
      <StMain>
        <Link to="/">홈으로</Link>
        <StForm>
          <StDiv>
            제목
            <select onChange={onSelectHandler} value={selectCategory}>
              <option>면접 후기</option>
              <option>취업 정보</option>
              <option>회사 정보 공유</option>
            </select>
          </StDiv>
          <input value={title} onChange={addTitleHandler} placeholder="제목을 입력해주세요." />
          내용
          <textarea
            value={text}
            onChange={addTextHandler}
            placeholder="최대 300자까지 입력 가능합니다."
            maxLength={300}
            style={{ height: "200px" }}
          />
          <StDiv style={{ flexDirection: "column" }}>
            <input type="file" accept=".png, .jpg, .jpeg, .gif" onChange={fileUploadHandler} />
            {previewImg && <UploadImg alt="Uploaded" src={previewImg} />}
            <button type="button" onClick={deleteImgFileHandler}>
              삭제
            </button>
          </StDiv>
          <StDiv style={{ justifyContent: "center", gap: "50px" }}>
            <StBtn type="submit" onClick={addPostBtnClickHandler}>
              등록하기
            </StBtn>
            <StBtn type="button" onClick={cancelBtnClickHandler}>
              취소하기
            </StBtn>
          </StDiv>
        </StForm>
      </StMain>
    </>
  );
}

export default PostForm;
