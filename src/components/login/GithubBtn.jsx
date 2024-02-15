import { useNavigate } from "react-router-dom";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import styled from "styled-components";
import { auth } from "data/firebase";
import githubLogo from "assets/images/github.png";

export function GithubButton() {
  const navigate = useNavigate();

  const handleGithubSignIn = async (e) => {
    e.preventDefault();
    const provider = new GithubAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate("/");
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GithubBtnStyle onClick={handleGithubSignIn}>
      <img src={githubLogo} alt="깃허브" />
      <em>Github Login</em>
    </GithubBtnStyle>
  );
}

const GithubBtnStyle = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 30px;
  gap: 10px;
  & > img {
    width: 25px;
  }
`;
