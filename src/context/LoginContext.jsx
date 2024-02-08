import { createContext, useState } from "react";
import googleData from 'data/googleLogin.json';

export const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userInfo, setUserInfo] = useState([]);
  const [gData, setGData] = useState(googleData.web)
  return (
    <LoginContext.Provider value={{
      userEmail,
      setUserEmail,
      userPassword,
      setUserPassword,
      userInfo,
      setUserInfo,
      gData,
      setGData,
    }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider;