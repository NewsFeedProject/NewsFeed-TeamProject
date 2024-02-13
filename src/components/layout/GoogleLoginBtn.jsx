import { LoginContext } from 'context/LoginContext'
import React, { useContext } from 'react'
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

function GoogleLoginBtn() {
  const { gData } = useContext(LoginContext);
  const clientId = gData.client_id;
  const onSuccess = (res) => {
    console.log("Login SUCCESS! Current use: ", res.profileObj);
  }
  const onFailure = (res) => {
    console.log("Login FAILED!  use: ", res);
  }
  return (
    <GoogleBtnStyle id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText='Google로 로그인 하기'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </GoogleBtnStyle>
  )
}

export default GoogleLoginBtn;

const GoogleBtnStyle = styled.div`
  &>button{
    width: 90%;
    margin-bottom: 30px;
  }
`

