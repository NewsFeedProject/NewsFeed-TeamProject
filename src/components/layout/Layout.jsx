import React from "react";
import Header from "components/common/Header";
import Navbar from "components/homePage/Navbar";
import { Outlet } from "react-router";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <div>{children}</div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
