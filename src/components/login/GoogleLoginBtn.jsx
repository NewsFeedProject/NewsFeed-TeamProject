import { LoginContext } from "context/LoginContext";
import { auth } from "data/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";

import { GoogleLogin } from "react-google-login";

import styled from "styled-components";

function GoogleLoginBtn() {
  // const { gData } = useContext(LoginContext);
  // const clientId = gData.client_id;
  // const { setUser } = useContext(UsersContext);

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate('/');
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <GoogleBtnStyle onClick={handleGoogleSignIn}>구글 로그인 하기</GoogleBtnStyle>
  );
}

export default GoogleLoginBtn;

const GoogleBtnStyle = styled.button`
  width: 90%;
  margin-bottom: 30px;
`;