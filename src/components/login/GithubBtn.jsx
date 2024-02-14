import { useNavigate } from 'react-router-dom';
import githubLogo from 'assets/images/githubLogo.svg';
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import styled from 'styled-components';
import { auth } from 'data/firebase';

export function GithubButton() {
  const navigate = useNavigate();

  const handleGithubSignIn = async (e) => {
    e.preventDefault();
    const provider = new GithubAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate('/');
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GithubBtnStyle onClick={handleGithubSignIn}>
      <img src={githubLogo} alt="깃허브" />
    </GithubBtnStyle>
  );
}

const GithubBtnStyle = styled.button`
  width: 90%;
  height: 70px;
  margin-bottom: 30px;
  &>img{
    height: 100%;
  }
`