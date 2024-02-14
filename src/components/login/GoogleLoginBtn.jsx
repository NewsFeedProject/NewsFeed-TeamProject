import { auth } from "data/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";

import styled from "styled-components";

function GoogleLoginBtn() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log(user);
    } catch (error) {
      console.error(error);
    }
    navigate('/');
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