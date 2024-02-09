import React from "react";
import Header from "../common/Header";
import Navbar from "components/homePage/Navbar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Navbar />
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </>
  );
}

export default Layout;
