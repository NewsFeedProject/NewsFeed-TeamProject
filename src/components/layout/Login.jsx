import { LoginContext } from 'context/LoginContext';
import React, { useContext } from 'react'
import styled from 'styled-components'
import GoogleLoginBtn from 'components/layout/GoogleLoginBtn';
import { Link } from 'react-router-dom';

function Login() {
  const { userEmail, setUserEmail, userPassword, setUserPassword, setUserInfo } = useContext(LoginContext);
  const onClickHandler = (e) => {
    e.preventDefault();
    const newUserInfo = {
      userEmail,
      userPassword,
    }
    setUserInfo((prev) => [...prev, newUserInfo]);
  }
  return (
    <LoginBackground>
      <FormStyle>
        <TitleStyle>NextMove</TitleStyle>
        <CloseStyle>X</CloseStyle>
        <LabelStyle>아이디</LabelStyle>
        <InputStyle
          type="text"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <LabelStyle>비밀번호</LabelStyle>
        <InputStyle
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <ButtonGroup>
          <ButtonStyle onClick={onClickHandler}>로그인</ButtonStyle>
          <Link to="/SignUp">
            <SignUpStyle>회원가입</SignUpStyle>
          </Link>
          <GoogleLoginBtn></GoogleLoginBtn>
          <ButtonStyle>깃허브로 로그인 하기</ButtonStyle>
        </ButtonGroup>
        <AgreeStyle>처음 로그인하면 NextMove의 이용약관 및 개인정보처리방침에 동의한 것으로 간주합니다.</AgreeStyle>
      </FormStyle>
    </LoginBackground>
  )
}

export default Login;

const LoginBackground = styled.div`
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
`
const FormStyle = styled.form`
  width: 35%;
  background-color: #fff;
  padding: 50px 50px 50px 70px;
  position: relative;
`
const TitleStyle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 50px;
`

const LabelStyle = styled.label`
  display: inline-block;
  width: 15%;
  margin-right:5%;
`
const InputStyle = styled.input`
  display: inline-block;
  width: 70%;
  margin-bottom: 20px;
`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonStyle = styled.button`
  width: 90%;
  margin-bottom: 30px;
`
const SignUpStyle = styled.p`
  text-align: center;
  margin-bottom: 30px;
  width: 90%;
  cursor: pointer;
`
const AgreeStyle = styled.p`
  font-size: 0.7rem;
`
const CloseStyle = styled.p`
  width: 30px;
  height: 30px;
  font-weight: 700;
  position: absolute;
  right: 30px;
  top: 30px;
  text-align: center;
  cursor: pointer;
`
