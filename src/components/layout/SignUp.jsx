import React, { useContext } from 'react'
import { StarStyle } from 'styles/common'
import profileUser from 'assets/images/profile-user.png'
import styled from 'styled-components'
import { LoginContext } from 'context/LoginContext'
import { SingUpContext } from 'context/SingUpContext'
import { useNavigate } from 'react-router'

function SignUp() {
  const navigate = useNavigate();
  const { userEmail, setUserEmail, userPassword, setUserPassword } = useContext(LoginContext);
  const {
    imgURL,
    setImgURL,
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
  } = useContext(SingUpContext);

  const imgChangeHandler = (e) => {
    setImgURL(e.target.value);
  }
  const nameChangeHandler = (e) => {
    setUserName(e.target.value);
  }
  const userIdChangeHandler = (e) => {
    setUserId(e.target.value);
  }
  const userMailChangeHandler = (e) => {
    setUserMail(e.target.value);
  }
  const userPasswordChangeHandler = (e) => {
    setUserPassword(e.target.value);
  }
  const reUserPasswordChangeHandler = (e) => {
    setReUserPassword(e.target.value);
  }
  const checkBoxChangeHandler = () => {
    setCheckBox(true);
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
      alert("비밀번호를 재확인해야 합니다!");
      return;
    }
    if (checkBox === false) {
      alert("약관에 동의해 주세요");
      return;
    }
    if (userPassword !== reUserPassword) {
      alert("비밀번호를 다시 확인해주세요!");
    }
    navigate('/');
  }
  return (
    <SingUpWrap>
      <SignUpForm>
        <SignUpTitle>회원가입</SignUpTitle>
        <InputGroup>
          <ProfileText>프로필 사진 <StarStyle>*</StarStyle></ProfileText>
          <ImageStyle src={imgURL ? imgURL : profileUser} alt="userProfile" />
          <LabelFileStyle htmlFor="inputFile">첨부 파일</LabelFileStyle>
          <InputFileStyle
            id="inputFile"
            type="file"
            value={imgURL}
            onChange={imgChangeHandler}
          />
        </InputGroup>
        <InputGroup>
          <label>이름 <StarStyle>*</StarStyle></label>
          <input
            type="text"
            value={userName}
            onChange={nameChangeHandler}
          />
        </InputGroup>
        <InputGroup>
          <label>아이디 <StarStyle>*</StarStyle></label>
          <input
            type="text"
            value={userId}
            onChange={userIdChangeHandler}
          />
          <span>@</span>
          <input
            type="text"
            value={userMail}
            onChange={userMailChangeHandler}
          />
          <select onChange={userMailChangeHandler}>
            <option value={null}>직겁입력▼</option>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="github.com">github.com</option>
          </select>
          <button>중복확인</button>
        </InputGroup>
        <InputGroup>
          <label>비밀번호 <StarStyle>*</StarStyle></label>
          <input
            type="password"
            value={userPassword}
            onChange={userPasswordChangeHandler}
          />
        </InputGroup>
        <InputGroup>
          <label>비밀번호 재확인 <StarStyle>*</StarStyle></label>
          <input
            type="password"
            value={reUserPassword}
            onChange={reUserPasswordChangeHandler}
          />
        </InputGroup>
        <InputGroup>
          <input
            type="checkbox"
            value={checkBox}
            onChange={checkBoxChangeHandler}
          />
          <span>위의 개인정보 수집 및 이용에 동의합니다.</span>
        </InputGroup>
        <BtnAlign>
          <SingUpBTN onClick={singUpClickHandler}>회원가입</SingUpBTN>
        </BtnAlign>
      </SignUpForm>
    </SingUpWrap>
  )
}

export default SignUp

const SingUpWrap = styled.div`
  width: 100%;
  height: 100vh;
`
const SignUpForm = styled.form`
  /* Header 와 side 대비해서 margin/(size)정해지면 바꿔야함 */
  margin-top: 100px;
  margin-left: 300px;
  display: flex;
  flex-direction: column;
  padding: 50px
`
const ProfileText = styled.p`
  display: inline-block;
`
const InputGroup = styled.div`
  margin-bottom: 30px;
`
const SignUpTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`
const ImageStyle = styled.img`
  width: 200px;
  height: 200px;
`

const LabelFileStyle = styled.label`
  background-color: #f5f5f5;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`
const InputFileStyle = styled.input`
  text-indent: -85px;
`

const BtnAlign = styled.div`
  text-align: center;
`

const SingUpBTN = styled.button`
  width: 50%;
`