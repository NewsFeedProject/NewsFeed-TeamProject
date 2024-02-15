import { LoginContext } from "context/LoginContext";
import React, { useContext } from "react";
import styled from "styled-components";
import GoogleLoginBtn from "components/login/GoogleLoginBtn";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "data/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GithubButton } from "components/login/GithubBtn";
import { Logout } from "./Logout";

function Login() {
  const { userEmail, setUserEmail, userPassword, setUserPassword } = useContext(LoginContext);

  async function singInLogInFunction() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
      console.log("user with signIn", userCredential.user);
    } catch (error) {
      console.log(error);
      return;
    }
    setUserEmail("");
  }

  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.preventDefault();

    singInLogInFunction();
    navigate("/");
    setUserPassword("");
  };

  return (
    <LoginBackground>
      <FormStyle>
        <TitleStyle>NextMove</TitleStyle>
        <Link to="/">
          <CloseStyle>&times;</CloseStyle>
        </Link>
        <LabelStyle for="userId">아이디</LabelStyle>
        <InputStyle type="text" id="userId" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        <LabelStyle for="userPw">비밀번호</LabelStyle>
        <InputStyle
          type="password"
          for="userPw"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <ButtonGroup>
          <ButtonStyle onClick={onClickHandler}>로그인</ButtonStyle>
          <Link to="/signup">
            <SignUpStyle>회원가입</SignUpStyle>
          </Link>
          <GoogleLoginBtn />
          <GithubButton />
          <ButtonStyle onClick={Logout}>로그아웃</ButtonStyle>
        </ButtonGroup>
        <AgreeStyle>처음 로그인하면 NextMove의 이용약관 및 개인정보처리방침에 동의한 것으로 간주됩니다.</AgreeStyle>
      </FormStyle>
    </LoginBackground>
  );
}

export default Login;

const LoginBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormStyle = styled.form`
  width: 550px;
  background-color: #fff;
  padding: 40px 70px;
  position: relative;
  border-radius: 10px;
`;
const TitleStyle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 50px;
`;

const LabelStyle = styled.label`
  display: inline-block;
  width: 15%;
  margin-right: 5%;
  white-space: nowrap;
`;
const InputStyle = styled.input`
  display: inline-block;
  width: 80%;
  margin-bottom: 20px;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonStyle = styled.button`
  width: 100%;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px 0;
`;
const SignUpStyle = styled.p`
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
  cursor: pointer;
`;
const AgreeStyle = styled.p`
  font-size: 0.7rem;
  line-height: 20px;
`;
const CloseStyle = styled.p`
  width: 30px;
  height: 30px;
  font-weight: 700;
  position: absolute;
  right: 30px;
  top: 30px;
  text-align: center;
  cursor: pointer;
`;
