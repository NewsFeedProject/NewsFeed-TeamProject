import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PostContext } from "context/PostContext";

const FormContainer = styled.main`
  width: 100%;
  margin-top: 50px;
  & > a {
    font-size: 18px;
    width: 500px;
    text-align: right;
    display: block;
    margin: 0 auto 30px;
    cursor: pointer;
  }
  & > a:hover {
    color: #ff006e;
  }
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid #9d9d9d;
  border-radius: 10px;
  gap: 10px;
  padding: 50px;
  width: 500px;
  margin: 0 auto;

  & input,
  textarea {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  & label {
    margin-top: 20px;
  }
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StBtn = styled.button`
  width: 100px;
  border: 1px solid #ccc;
  padding: 5px 0;
  border-radius: 5px;
  background-color: transparent;
  margin-top: 30px;
  &:hover {
    background-color: #ff006e;
    border: 1px solid #ff006e;
    color: #fff;
  }
`;
const UploadImg = styled.img`
  width: 300px;
  padding: 10px;
`;

const SelectBox = styled.select`
  padding: 5px 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const DeleteBtn = styled.button`
  border-radius: 3px;
  border: 1px solid #ddd;
  margin-top: 10px;
  background-color: #ddd;
  padding: 5px 0;
`;

const FileSelect = styled.input`
  background-color: transparent;
  border: transparent !important;
`;

function PostForm() {
  const navigate = useNavigate();
  const { addPostSubmit, postImg, setPostImg, previewImg, setPreviewImg, userProfileImg, userMail } =
    useContext(PostContext);

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
      userEmail: userMail,
      postTitle: title,
      postText: text,
      postImage: previewImg,
      postDate: date,
      userProfileImage: userProfileImg,
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
      <FormContainer>
        <Link to="/">홈으로</Link>
        <StForm>
          <StDiv>
            <lavel for="title">제목</lavel>
            <SelectBox onChange={onSelectHandler} value={selectCategory}>
              <option>면접 후기</option>
              <option>취업 정보</option>
              <option>회사 정보 공유</option>
            </SelectBox>
          </StDiv>
          <input id="title" value={title} onChange={addTitleHandler} placeholder="제목을 입력해주세요." />
          <label for="content">내용</label>
          <textarea
            id="content"
            value={text}
            onChange={addTextHandler}
            placeholder="최대 300자까지 입력 가능합니다."
            maxLength={300}
            style={{ height: "200px" }}
          />
          <StDiv style={{ flexDirection: "column" }}>
            <FileSelect type="file" accept=".png, .jpg, .jpeg, .gif" onChange={fileUploadHandler} />
            {previewImg && <UploadImg alt="Uploaded" src={previewImg} />}
            <DeleteBtn type="button" onClick={deleteImgFileHandler}>
              삭제
            </DeleteBtn>
          </StDiv>
          <StDiv style={{ justifyContent: "center", gap: "30px" }}>
            <StBtn type="submit" onClick={addPostBtnClickHandler}>
              등록하기
            </StBtn>
            <StBtn type="button" onClick={cancelBtnClickHandler}>
              취소하기
            </StBtn>
          </StDiv>
        </StForm>
      </FormContainer>
    </>
  );
}

export default PostForm;
