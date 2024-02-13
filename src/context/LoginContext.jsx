import { createContext, useState } from "react";
import googleData from "data/googleLogin.json";
import { login, logout } from "../../src/api/firebase";

export const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
  // user 아이디:E-mail
  const [userEmail, setUserEmail] = useState("");
  // user password
  const [userPassword, setUserPassword] = useState("");
  // user 아이디,password 받아온 값
  const [userInfo, setUserInfo] = useState([]);
  // google API 값
  const [gData, setGData] = useState(googleData.web);

  //구글 로그인 상태값
  const [user, setUser] = useState("");
  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <LoginContext.Provider
      value={{
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        userInfo,
        setUserInfo,
        gData,
        setGData,
        user,
        setUser,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
