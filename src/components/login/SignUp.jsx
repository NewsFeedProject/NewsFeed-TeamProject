import React, { useContext, useState } from "react";
import { StarStyle } from "styles/common";
import styled from "styled-components";
import { LoginContext } from "context/LoginContext";
import { SingUpContext } from "context/SingUpContext";
import { useNavigate } from "react-router";
import { auth } from "data/firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

function SignUp() {
  const navigate = useNavigate();
  const { userEmail, setUserEmail, userPassword, setUserPassword, setUserInfo } = useContext(LoginContext);
  const {
    userName,
    setUserName,
    userId,
    setUserId,
    userMail,
    setUserMail,
    reUserPassword,
    setReUserPassword,
    checkBox,
    setCheckBox,
    imgUrl,
    setImgUrl
  } = useContext(SingUpContext);

  const [duplicateEmail, setDuplicateEmail] = useState("");

  const handleImageChange = (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      let image = window.URL.createObjectURL(file);
      console.log(image);
      setImgUrl(image);
    }
  };
  const nameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const userIdChangeHandler = (e) => {
    setUserId(e.target.value);
  };
  const userMailChangeHandler = (e) => {
    setUserMail(e.target.value);
  };
  const userPasswordChangeHandler = (e) => {
    setUserPassword(e.target.value);
  };
  const reUserPasswordChangeHandler = (e) => {
    setReUserPassword(e.target.value);
  };
  const checkBoxChangeHandler = () => {
    checkBox === false ? setCheckBox(true) : setCheckBox(false);
  };
  async function singUpFunction() {
    try {
      const createdUser = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      const updateProfiled = await updateProfile(auth.currentUser, {
        userName: userName,
        photoURL: imgUrl
      });
      console.log(createdUser);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  const singUpClickHandler = (e) => {
    e.preventDefault();
    if (!userId) {
      alert("아이디를 입력해주세요!");
      return;
    }
    if (!userMail) {
      alert("메일을 입력해주세요!");
      return;
    }
    if (!userPassword) {
      alert("비밀번호를 입력해주세요!");
      return;
    }
    if (!reUserPassword) {
      alert("비밀번호확인를 입력해주세요!");
      return;
    }
    if (checkBox === false) {
      alert("약관에 동의해 주세요");
      return;
    }
    if (userPassword !== reUserPassword) {
      alert("비밀번호를 다시 확인해주세요!");
      return;
    }
    setUserEmail(`${userId}@${userMail}`);
    const newUserInfo = {
      userEmail: userEmail,
      userPassword: userPassword,
      userName: userName,
      userProfileImage: imgUrl
    };
    setUserInfo((prev) => [...prev, newUserInfo]);
    if (userPassword.length < 6) {
      alert("비밀번호는 여섯 자 이상으로 입력해주세요");
      return;
    }

    singUpFunction();
    setUserId("");
    setUserMail("");
    setUserPassword("");
    setReUserPassword("");
    setUserName("");
    setImgUrl("");
    setCheckBox(false);
    navigate("/login");
  };

  const DuplicateCheck = (e) => {
    e.preventDefault();

    const temp = getAuth();
    onAuthStateChanged(temp, (user) => {
      if (user) {
        setDuplicateEmail(user.email);
      } else {
        setDuplicateEmail(null);
      }
      return duplicateEmail;
    });
    setUserEmail(`${userId}@${userMail}`);
    const isDuplicate = duplicateEmail === userEmail;
    if (isDuplicate) {
      alert("중복됩니다. 다시 입력해주세요!");
      setUserId("");
      setUserMail("");
      setDuplicateEmail("");
      setUserEmail("");
      setUserMail("");
    } else {
      alert("중복되는게 없어요!");
    }
  };

  return (
    <SingUpWrap>
      <SignUpForm>
        <SignUpTitle>회원가입</SignUpTitle>
        <InputGroup>
          <AllLabelStyle>
            프로필 사진 <StarStyle>*</StarStyle>
          </AllLabelStyle>
          <ImageStyle src={imgUrl} alt="userProfile" />
          <LabelFileStyle htmlFor="inputFile">첨부 파일</LabelFileStyle>

          <InputFileStyle id="inputFile" type="file" accept="image/*" onChange={handleImageChange} />
        </InputGroup>
        <InputGroup>
          <AllLabelStyle>
            이름 <StarStyle>*</StarStyle>
          </AllLabelStyle>
          <AllInputStyle type="text" value={userName} onChange={nameChangeHandler} />
        </InputGroup>
        <InputGroup>
          <AllLabelStyle>
            아이디 <StarStyle>*</StarStyle>
          </AllLabelStyle>
          <IdInputStyle type="text" value={userId} onChange={userIdChangeHandler} />
          <span>@</span>
          <IdInputStyle type="text" value={userMail} onChange={userMailChangeHandler} />
          <select onChange={userMailChangeHandler}>
            <option value={""}>직접입력</option>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="github.com">github.com</option>
          </select>
          <DuplicationBtn onClick={DuplicateCheck}>중복확인</DuplicationBtn>
        </InputGroup>
        <InputGroup>
          <AllLabelStyle>
            비밀번호 <StarStyle>*</StarStyle>
          </AllLabelStyle>
          <AllInputStyle type="password" value={userPassword} onChange={userPasswordChangeHandler} />
        </InputGroup>
        <InputGroup>
          <AllLabelStyle>
            비밀번호 재확인 <StarStyle>*</StarStyle>
          </AllLabelStyle>
          <AllInputStyle type="password" value={reUserPassword} onChange={reUserPasswordChangeHandler} />
        </InputGroup>
        <CenterInputGroup>
          <input type="checkbox" id="useragree" value={checkBox} onChange={checkBoxChangeHandler} />
          <label for="useragree">위의 개인정보 수집 및 이용에 동의합니다.</label>
        </CenterInputGroup>
        <BtnAlign>
          <SingUpBTN onClick={singUpClickHandler}>회원가입</SingUpBTN>
        </BtnAlign>
      </SignUpForm>
    </SingUpWrap>
  );
}

export default SignUp;

const SingUpWrap = styled.div`
  width: 100%;
  margin: 80px auto;
`;
const SignUpForm = styled.form`
  width: 700px;
  margin: 0 auto;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;
const CenterInputGroup = styled.div`
  margin: 30px 0;
  text-align: center;
  & > input {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    transform: translateY(4px);
  }
`;

const SignUpTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
`;
const ImageStyle = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 2.5%;
`;

const LabelFileStyle = styled.label`
  background-color: #f5f5f5;
  padding: 5px 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
`;
const InputFileStyle = styled.input`
  text-indent: -78px;
`;

const AllLabelStyle = styled.label`
  display: inline-block;
  width: 120px;
  text-align: right;
  margin-right: 20px;
`;
const AllInputStyle = styled.input`
  display: inline-block;
  width: 72%;
  border-radius: 3px;
  padding: 3px 5px;
  border: 1px solid #ccc;
`;
const IdInputStyle = styled.input`
  display: inline-block;
  border-radius: 3px;
  width: 20%;
  border: 1px solid #ccc;
  padding: 3px 5px;
  margin-right: 1%;
  & + span {
    margin-right: 1%;
  }
  & + select {
    margin-right: 1%;
    padding: 5px 3px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
`;

const BtnAlign = styled.div`
  text-align: center;
`;

const SingUpBTN = styled.button`
  width: 80%;
  padding: 7px 0;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #ccc;
  &:hover {
    background-color: #ff006e;
    color: #fff;
    border: 1px solid #ff006e;
  }
`;

const DuplicationBtn = styled.button`
  background-color: #eee;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 3px 11px;
  font-size: 14px;
`;
