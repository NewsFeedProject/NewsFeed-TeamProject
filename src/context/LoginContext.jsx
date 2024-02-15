import { createContext, useState } from "react";

export const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
  // user 아이디:E-mail
  const [userEmail, setUserEmail] = useState("");
  // user password
  const [userPassword, setUserPassword] = useState("");
  // user 아이디,password 받아온 값
  const [userInfo, setUserInfo] = useState([]);

  return (
    <LoginContext.Provider
      value={{
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        userInfo,
        setUserInfo
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
