import React from "react";
import Header from "components/common/Header";
import Navbar from "components/homePage/Navbar";
import { Outlet } from "react-router";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Navbar />
        <div>{children}</div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
