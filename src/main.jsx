import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import LoginContextProvider from "./context/LoginContext.jsx";
import SingUpContextProvider from "./context/SingUpContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginContextProvider>
    <SingUpContextProvider>
      <App />
      <GlobalStyle />
    </SingUpContextProvider>
  </LoginContextProvider>
);
