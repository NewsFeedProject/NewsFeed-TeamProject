import { createContext } from "react";

export const LoginContext = createContext(null);

function LoginContextProvider({ children }) {
  return (
    <LoginContext.Provider value={{

    }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider;