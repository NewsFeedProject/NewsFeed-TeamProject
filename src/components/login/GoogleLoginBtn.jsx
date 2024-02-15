import { auth } from "data/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import GoogleImage from "../../assets/images/google.png";

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
    navigate("/");
  };

  return (
    <GoogleBtnStyle onClick={handleGoogleSignIn}>
      <img src={GoogleImage} />
      <em>Google Login</em>
    </GoogleBtnStyle>
  );
}

export default GoogleLoginBtn;

const GoogleBtnStyle = styled.button`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  & > img {
    width: 25px;
  }
`;
