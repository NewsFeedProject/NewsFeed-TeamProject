import React, { useContext } from 'react'
import { StarStyle } from 'styles/common'
import profileUser from 'assets/images/profile-user.png'
import styled from 'styled-components'
import { LoginContext } from 'context/LoginContext'
import { SingUpContext } from 'context/SingUpContext'
import { useNavigate } from 'react-router'
import { auth } from 'data/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

function SignUp() {
  const navigate = useNavigate();
  const {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    userInfo,
    setUserInfo,
  } = useContext(LoginContext);
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
    checkBox === false ? setCheckBox(true) : setCheckBox(false);
  }
  const singUpFunction = async (userInfo) => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        userInfo.userEmail,
        userInfo.userPassword,
        userEmail,
        userPassword,
      );
      const updateProfile = await updateProfile(auth.currentUser, {
        displayName: userInfo.name,
        userProfileImage: userInfo.imgURL,
      });
      console.log(createdUser, updateProfile);
    } catch (error) {
      console.log(error);
    }
  };

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
    setUserEmail(`${userId}@${userMail}`);
    const newUserInfo = {
      userEmail: userEmail,
      userPassword: userPassword,
      userName: userName,
      userProfileImage: imgURL,
    }
    setUserInfo((prev) => [...prev, newUserInfo]);
    navigate('/');
    setCheckBox(false);
    singUpFunction(userInfo);
  }
  const DuplicateCheck = (e) => {
    e.preventDefault();
    const newEmail = `${userId}@${userMail}`;
    setUserEmail(newEmail);

    const isDuplicate = userInfo.some((item) => item.userEmail === newEmail);
    if (isDuplicate) {
      alert("중복됩니다. 다시 입력해주세요!");
      setUserId('');
      setUserMail('');
    } else {
      alert("중복되는게 없어요!");
    }
    return isDuplicate;
  }


  return (
    <SingUpWrap>
      <SignUpForm>
        <SignUpTitle>회원가입</SignUpTitle>
        <InputGroup>
          <AllLabelStyle>프로필 사진 <StarStyle>*</StarStyle></AllLabelStyle>
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
          <AllLabelStyle>이름 <StarStyle>*</StarStyle></AllLabelStyle>
          <AllInputStyle
            type="text"
            value={userName}
            onChange={nameChangeHandler}
          />
        </InputGroup>
        <InputGroup>
          <AllLabelStyle>아이디 <StarStyle>*</StarStyle></AllLabelStyle>
          <IdInputStyle
            type="text"
            value={userId}
            onChange={userIdChangeHandler}
          />
          <span>@</span>
          <IdInputStyle
            type="text"
            value={userMail}
            onChange={userMailChangeHandler}
          />
          <select onChange={userMailChangeHandler}>
            <option value={''}>직겁입력▼</option>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="github.com">github.com</option>
          </select>
          <button onClick={DuplicateCheck}>중복확인</button>
        </InputGroup>
        <InputGroup>
          <AllLabelStyle>비밀번호 <StarStyle>*</StarStyle></AllLabelStyle>
          <AllInputStyle
            type="password"
            value={userPassword}
            onChange={userPasswordChangeHandler}
          />
        </InputGroup>
        <InputGroup>
          <AllLabelStyle>비밀번호 재확인 <StarStyle>*</StarStyle></AllLabelStyle>
          <AllInputStyle
            type="password"
            value={reUserPassword}
            onChange={reUserPasswordChangeHandler}
          />
        </InputGroup>
        <CenterInputGroup>
          <input
            type="checkbox"
            value={checkBox}
            onChange={checkBoxChangeHandler}
          />
          <span>위의 개인정보 수집 및 이용에 동의합니다.</span>
        </CenterInputGroup>
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
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  margin: auto;
`

const InputGroup = styled.div`
  margin-bottom: 30px;
  margin-left: 400px;
`
const CenterInputGroup = styled.div`
  margin-bottom: 30px;
  text-align:center;
`
const SignUpTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`
const ImageStyle = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 2.5%;
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

const AllLabelStyle = styled.label`
  display: inline-block;
  width: 13%;
  text-align: right;
  margin-right: 2.5%;
`
const AllInputStyle = styled.input`
  display: inline-block;
  width: 40%;
  border-radius: 5px;
`
const IdInputStyle = styled.input`
  display: inline-block;
  border-radius: 5px;
  width: 10%;
  margin-right: 1%;
  &+span{
    margin-right: 1%;
  }
  &+select{
    margin-right: 1%;
  }
`

const BtnAlign = styled.div`
  text-align: center;
`

const SingUpBTN = styled.button`
  width: 40%;
`