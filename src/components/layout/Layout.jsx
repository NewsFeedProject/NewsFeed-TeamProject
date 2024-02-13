import React from "react";
import Header from "../common/Header";
import Navbar from "components/homePage/Navbar";
import { Outlet } from "react-router";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Navbar />
        <div style={{ flex: 1 }}>{children}</div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
