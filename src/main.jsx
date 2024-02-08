import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import LoginContextProvider from "./context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginContextProvider>
    <App />
    <GlobalStyle />
  </LoginContextProvider>
);
