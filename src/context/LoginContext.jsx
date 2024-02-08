import { createContext, useState } from "react";

export const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  return (
    <LoginContext.Provider value={{
      userEmail,
      setUserEmail,
      userPassword,
      setUserPassword,
      userInfo,
      setUserInfo,
    }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider;